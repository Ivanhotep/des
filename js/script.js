let lng = document.querySelectorAll('.descr-lang__switch');
let link = document.querySelector('.menu__list')
const anchors = document.querySelectorAll('a[href*="#"]')
let burger = document.querySelector('.burger')
let links = document.querySelectorAll('.menu__list-link')
let menu = document.querySelector('.menu__list')
let body = document.querySelector('body')

lng[0].addEventListener('click', function() {
    this.classList.add('active')
    lng[1].classList.remove('active')
})

lng[2].addEventListener('click', function() {
    this.classList.add('active')
    lng[3].classList.remove('active')
})

lng[3].addEventListener('click', function() {
    this.classList.add('active')
    lng[2].classList.remove('active')
})

burger.addEventListener('click', function() {
    burger.classList.toggle('togle')
    menu.classList.toggle('act')
    body.classList.toggle('lock')
})

links.forEach(el => {
    el.addEventListener('click', function() {
        burger.classList.remove('togle')
        menu.classList.remove('act')
        body.classList.remove('lock')
    })
})





lng[1].addEventListener('click', function() {
    this.classList.add('active')
    lng[0].classList.remove('active')
})


for (i = 0; i < link.children.length; i++) {
    link.children[i].querySelector('a').addEventListener('click', function() {
        for(i = 0; i < link.children.length; i++) {
            link.children[i].querySelector('a').classList.remove('focus')
            this.classList.add('focus')
        }
    })
}

anchors.forEach(anchor => anchor.addEventListener('click', function(event){
    event.preventDefault()
    console.log(event.currentTarget)
    const blockId = event.currentTarget.getAttribute('href');
    window.scrollTo({
        top: blockId === '#' ? 0 : document.querySelector(blockId).offsetTop-88,
        behavior: 'smooth'
    })
}))



window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    let main = document.querySelector('.main').offsetHeight
    let header = document.querySelector('.header')
    console.log(main)
    document.querySelectorAll('.section').forEach((el, i) => {
        if(el.offsetTop - 88 <= scrollDistance) {
            document.querySelectorAll('nav a').forEach((el) => {
                if(el.classList.contains('focus')) {
                    el.classList.remove('focus')
                }
            })
        document.querySelectorAll('nav li')[i].querySelector(`a`).classList.add('focus')   
        }
    })
    if(main < scrollDistance) {
        header.classList.add('shadow')
    } else {
        header.classList.remove('shadow')
    }
})

window.addEventListener('scroll', () => {
    let test = document.querySelector('.portfolio').offsetTop
    let scrollDistance = window.scrollY + test/3.4;
    console.log(test)
    let el = document.querySelector('.contacts').offsetTop
    if(el - 88 <= scrollDistance) {
        let lin = document.querySelector('.con')
        let del = document.querySelector('.del')
        if(lin.classList.contains('focus')) {
            lin.classList.remove('focus')
        } else if (del.classList.contains('focus')) {
            del.classList.remove('focus')
        }
        document.querySelector('.lishka').querySelector(`a`).classList.add('focus') 
    }
})





