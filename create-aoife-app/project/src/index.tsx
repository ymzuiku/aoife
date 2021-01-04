import "aoife";

function App({ name }: { name: string }) {
  let num = 0;
  let age = 0;
  return (
    <div class="app">
      <h1>Hello {name}</h1>
      {/* <p>num:{() => num}</p>
      <p>age:{() => age}</p> */}
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
      <div memo={() => [num]}>
        <h1 memo={() => [age]}>
          <h5>num:{() => num}</h5>
          <h5>age:{() => age}</h5>
        </h1>
      </div>
      {/* <h1>
        <h5 memo={() => [num]}>num:{() => num}</h5>
        <h5>age:{() => age}</h5>
      </h1> */}
    </div>
  );
}

document.body.append(<App name="Aoife" />);
