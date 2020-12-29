import "aoife";

function App({ name }: { name: string }) {
  let num = 0;
  return (
    <div class="app">
      <h1>Hello {name}</h1>
      <p>{() => num}</p>
      <button
        onclick={() => {
          num += 1;
          aoife.next(".app");
        }}
      >
        Add num
      </button>
    </div>
  );
}

document.body.append(<App name="World" />);
