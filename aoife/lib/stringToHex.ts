const cache = {} as any;
export function stringToHex(str: string, start = "c") {
  const old = cache[str];
  if (old) {
    return start + old;
  }
  let val = "";
  for (let i = 0; i < str.length; i++) {
    if (val === "") val = str.charCodeAt(i).toString(36);
    else val += str.charCodeAt(i).toString(36);
  }
  cache[str] = val;
  return start + val;
}
