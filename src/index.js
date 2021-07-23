import './a.js'
import png from './assets/1.png'
// import lazy from './lazy.js'

// console.log(png)
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

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    // const lazy = import('./lazy.js')
    const promise = import('./lazy.js')
    promise.then(
        (module) => {
            const fn = module.default
            fn()
        },
        () => {
            console.log('模块加载错误')
        })
}
div.appendChild(button)