import "aoife";

function Label() {
  return new Promise((res) => {
    setTimeout(() => res(<div>Label</div>), 1000);
  });
}

function App({ name }: { name: string }) {
  let num = 0;
  let age = 0;
  return (
    <div class="app">
      <h1>Hello {name}</h1>
      <Label />
      <button
        onclick={() => {
          num += 1;
          aoife.next();
        }}
      >
        Add num
      </button>
      <button
        onclick={() => {
          age += 1;
          aoife.next();
        }}
      >
        Add age
      </button>

      <h1 memo={() => [num, age]}>
        <h5>num:{() => num}</h5>
        <h5>age:{() => age}</h5>
      </h1>
    </div>
  );
}

document.body.append(<App name="Aoife" />);
