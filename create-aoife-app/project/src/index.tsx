import "dom-jsx";

function App({ name }: { name: string }) {
  let num = 0;
  return (
    <div class="app">
      <h1>Hello2 {name}</h1>
      <p>{() => num}</p>
      <button
        onclick={() => {
          num += 1;
          dom.next(".app");
        }}
      >
        Add num
      </button>
    </div>
  );
}

document.body.append(App({ name: "World" }));
