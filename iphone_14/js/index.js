document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault ()
    const href = this.getAttribute('href').substring(1)

    const scrollTarget = document.getElementById(href)

    const topOffset = 0
    const elementPosition = scrollTarget.

    getBoundingClientRect().top

    const offsetPosition = elementPosition - topOffset

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
        })
    })
})

const btn = document.querySelector('.menu_btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});