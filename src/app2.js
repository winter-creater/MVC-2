import './app2.css'
import $ from 'jquery'

const html = `
<section id="app2">
<ol class="tab-bar">
  <li class="selected"><span>11111111</span></li>
  <li><span>22222222</span></li>
</ol>
<ol class="tab-content">
  <li class="active">内容1</li>
  <li>内容2</li>
</ol>
</section>
`
const $element = $(html).appendTo($('body>.page'))


const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0
$tabBar.on('click', "li", (e) => {
    // console.log(e.currentTarget);
    // console.log(e.target);
    const $li = $(e.currentTarget)
    const index = $li.index()
    localStorage.setItem(localKey, index)
    console.log(index);
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
    $li.addClass('selected')
        .siblings().removeClass('selected')
})
$tabBar.children().eq(index).trigger('click')