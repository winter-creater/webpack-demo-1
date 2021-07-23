import './a.js'
import png from './assets/1.png'
console.log(png)
// import './z.js'
// import x from './x.js'
// import y from './y.js'
// import './x.css'
// console.log(x);
// console.log('hi');


const div = document.getElementById('app')

div.innerHTML = `
<img src="${png}">

`
