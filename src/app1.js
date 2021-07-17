import './app1.css'
import $ from 'jquery'

console.log('#app1');
console.log($('#app1'));
// 数据相关的放到m
const m = {
  data: {
    // 初始化数据
    n: parseInt(localStorage.getItem('n'))
  }
}
// 视图相关的放到v
const v = {
  el: null,
  container: null,
  // 初始化html
  html: `
<div>
<div class="output">
  <span id="number">{{n}}</span>
</div>

<div class="actions">
  <button id="btnAdd">+1</button>
  <button id="btnMinus">-1</button>
  <button id="btnMul">x2</button>
  <button id="btnDivide">÷2</button>
</div>
</div>
` ,
  update() {
    // 将数据渲染到页面,更新数字
    c.ui.number.text(m.data.n || 100)
  },
  init(container) {
    v.container = $(container)
    v.render()
  },
  render() {
    // 元素渲染到页面
    if (v.el === null) {
      v.el = $(v.html.replace('{{n}}', m.data.n)).appendTo(v.container)
    } else {
      const newEl = $(v.html.replace('{{n}}', m.data.n))
      v.el.replaceWith(newEl)
      v.el = newEl
    }
  }
}
// 其他放到c
const c = {
  init(container) {
    v.init(container)
    c.bindEvents()
  },
  bindEvents() {
    // 事件委托，不绑定在子元素上，绑定在父元素上
    v.container.on('click', '#btnAdd', () => {
      m.data.n += 1
      localStorage.setItem('n', m.data.n)
      v.render()
    })
    v.container.on('click', '#btnMinus', () => {
      m.data.n -= 1
      localStorage.setItem('n', m.data.n)
      v.render()
    })
    v.container.on('click', '#btnMul', () => {
      m.data.n *= 2
      localStorage.setItem('n', m.data.n)
      v.render()
    })
    v.container.on('click', '#btnDivide', () => {
      m.data.n /= 2
      localStorage.setItem('n', m.data.n)
      v.render()
    })
  }
}

// 第一次渲染html
// v.render()   先渲染在初始化，可以直接放到初始化里面，减少函数调用。最小知识原则
// c.init()

export default c



