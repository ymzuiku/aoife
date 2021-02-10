import { deepEqual } from "./deepEqual";

export const memo = (blocker: () => any) => {
  const cache = { fixed: 0, data: null as any, value: null as any };
  const update = async () => {
    const data = await Promise.resolve(blocker());
    if (!cache.fixed) {
      cache.fixed = 1;
      cache.data = data;
      return true;
    }
    const isEqual = deepEqual(cache.data, data);
    cache.data = data;
    return !isEqual;
  };
  update();

  return (fn: any) => {
    return async () => {
      if (await Promise.resolve(update())) {
        cache.value = await Promise.resolve(fn());
      }
      return cache.value;
    };
  };
};
