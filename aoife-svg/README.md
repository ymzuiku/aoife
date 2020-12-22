# aoife-svg

```jsx
import aoifeSvg from 'aoife-svg';

export const EditorSvg = aoifeSvg(`
<svg t="1608542607404" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1140" width="1em" height="1em"><path d="M896 801.216V864H128v-62.784h768z m-204.288-678.4l155.36 155.36-463.136 463.136-156.864 1.504 1.504-156.864L691.712 122.816z m-0.864 89.632L291.712 611.584l-0.64 67.232 67.2-0.64L757.44 279.04l-66.56-66.56z" fill="#f00" p-id="1141"></path></svg>
`, '1em', '1em');

const App = ()=>{
  return <EditorSvg />
}
```