##### webpack实现懒加载
```
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
```