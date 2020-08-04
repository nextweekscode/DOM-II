// Your code goes here yup
import { gsap } from 'gsap'

const allImgs = document.querySelectorAll('img')
const allH4 = document.querySelectorAll('h4')
const allPara = document.querySelectorAll('p')
const allLinks = document.querySelectorAll('a')
const button = document.querySelector('#button')
const div = document.querySelector('#destination')




allLinks.forEach(l => {
    l.addEventListener('click', event => {
    event.preventDefault()
    
})})


document.addEventListener('keydown', (event) =>
{ if(event.key === 'a'){
    allImgs[0].setAttribute('src', 'https://ak.picdn.net/shutterstock/videos/2696552/thumb/8.jpg')
}})

document.addEventListener('keypress', (event) => {
    if(event.key === 's'){
        allImgs[1].setAttribute('src', 'https://www.muralswallpaper.com/app/uploads/tidal-currents-vintage-maps-plain-820x532.jpg')
}})

document.addEventListener('keyup', (event) =>
{ if(event.key === 'a'){
    allImgs[0].setAttribute('src', 'https://photorator.com/photos/images/bus-abandoned-in-the-desert--10685.jpg')
}})

allImgs[1].addEventListener('click', (event) => {
    event.target.setAttribute('src', 'https://akns-images.eonline.com/eol_images/Entire_Site/201785/rs_634x1024-170905110758-634.Mario-JR-090517.jpg?fit=around|634:auto&output-quality=90&crop=634:auto;center,top')
})


button.addEventListener('click', (event) => {
    button.style.color = 'red'
    event.stopPropagation()
    
})

div.addEventListener('click', (event) => {
    div.style.backgroundColor = 'red'
})





allImgs[3].addEventListener('dblclick', (event) => {
    event.target.setAttribute('src', 'https://i.ytimg.com/vi/Q7pzoLQlrsM/maxresdefault.jpg')
})

allH4[0].addEventListener('mouseenter', (event) => {
    allH4[0].style.color = 'red'
})

allH4[1].addEventListener('mousedown', (event) => {
    allH4[1].style.color = 'red'
    event.stopPropagation
})

allPara.forEach(p => {
    p.addEventListener('mouseover', (event) => {
        p.style.color = 'orange'
    })
})

allPara.forEach(p => {
    p.addEventListener('mouseleave', (event) => {
        p.style.color = "black"
    })
})

allImgs[2].addEventListener('contextmenu', (event) => {
    event.target.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStnir637m4kH6dnmCGDC7H2g7SlwkGiMk_dQ&usqp=CAU')
})



gsap.to(".img-fluid", {rotation: 180, duration:2})



