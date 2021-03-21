export function App() {
  let num = 0;
  const ele = (
    <div id="app">
      <h2>Hello Vite + Aoife!</h2>
      <h3>num: {() => num}</h3>
      <button
        onclick={() => {
          num += 1;
          aoife.next(ele);
        }}
      >
        Add num
      </button>
    </div>
  );

  return ele;
}
