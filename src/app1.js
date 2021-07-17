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
  // container: null,
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
  init(el) {
    v.el = $(el)
    // v.render()
  },
  render(n) {
    // 元素渲染到页面
    if (v.el.children.length === 0) {
      // 初始化元素
      // $(v.html.replace('{{n}}', m.data.n)).appendTo(v.el)
    } else {
      v.el.empty()//删掉之前的东西，再appendTo
      // $(v.html.replace('{{n}}', m.data.n)).appendTo(v.el)
    }
    $(v.html.replace('{{n}}', n)).appendTo(v.el)
  }
}
// 其他放到c
const c = {
  init(el) {
    v.init(el)
    v.render(m.data.n)//第一次 view=reader(data)
    c.autoBindEvents()
  },
  events: {
    'click #btnAdd': 'add',
    'click #btnMinus': 'minus',
    'click #btnMul': 'mul',
    'click #btnDivide': 'divide'
  },
  add() {
    m.data.n += 1
    localStorage.setItem('n', m.data.n)
    v.render(m.data.n)
  },
  minus() {
    m.data.n -= 1
    localStorage.setItem('n', m.data.n)
    v.render(m.data.n)
  },
  mul() {
    m.data.n *= 2
    localStorage.setItem('n', m.data.n)
    v.render(m.data.n)
  },
  divide() {
    m.data.n /= 2
    localStorage.setItem('n', m.data.n)
    v.render(m.data.n)

  },
  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]]
      const spaceIndex = key.indexOf(' ')
      console.log(spaceIndex);
      const part1 = key.slice(0, spaceIndex)
      const part2 = key.slice(spaceIndex + 1)
      console.log(part1 + "," + part2, ",", value);
      v.el.on(part1, part2, value)
      // console.log(key);
    }
  }
}

// 第一次渲染html
// v.render()   先渲染在初始化，可以直接放到初始化里面，减少函数调用。最小知识原则
// c.init()

export default c



