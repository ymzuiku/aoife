const fs = require('fs');
const path = require('path')



const version = require(path.resolve(__dirname, './aoife/package.json')).version;

console.log('Update all to:', version);
const changeVersion = (url)=>{
  const realURL = path.resolve(__dirname, url);
  const pkg = require(realURL);
  pkg.version = version;
  if (pkg.dependencies && pkg.dependencies.aoife) {
    pkg.dependencies.aoife = "^"+version;
  }
  fs.writeFileSync(realURL, JSON.stringify(pkg, '', 2))
}
changeVersion('create-aoife-app/package.json')
changeVersion('create-aoife-app/vite/package.json')
changeVersion('create-aoife-app/webpack/package.json')
