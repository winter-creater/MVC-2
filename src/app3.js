import './app3.css'
import $ from 'jquery'

const html = `
<section id="app3">
<div class="square"></div>
</section>
`
const $element = $(html).appendTo($('body>.page'))


const $square = $('#app3 .square')
const localKey = 'app3.active'
//yes no undefined
const active = localStorage.getItem(localKey) === 'yes'
//localStorage.getItem(localKey) === 'yes' ? true : false  简化： localStorage.getItem(localKey) === 'yes'

// if (active) {
//     $square.addClass('active')
// } else {
//     $square.removeClass('active')
// }  //等同 $square.toggleClass('active', active)
$square.toggleClass('active', active)
$square.on('click', () => {
    // $square.toggleClass('active')
    if ($square.hasClass('active')) {
        $square.removeClass('active')
        localStorage.setItem(localKey, 'no')
    } else {
        $square.addClass('active')
        localStorage.setItem(localKey, 'yes')
    }
})