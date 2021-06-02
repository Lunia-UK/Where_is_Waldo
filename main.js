let x, y
let click = 0
let random = Math.round(Math.random() * (2 - 1) + 1)
const containerImage = document.querySelector('.container-image')
const circle = document.querySelector('circle')
const glass = document.querySelector('svg image')
let data = ""

const init = ()=> {
    getData()
    containerImage.style.background = `linear-gradient(rgba(0, 0, 0, 0.94), rgba(0, 0, 0, .94)), url( "images/image${random}.jpg")`
    glass.setAttribute('href', `images/image${random}.jpg`)
}

const glassPosition = (e) => {
    x = e.pageX
    y = e.pageY
    circle.setAttribute('cx', x)
    circle.setAttribute('cy', y)
}

const playerClick = () => {
    let dataImage = data[`image${random}`]
    click += 1
    if((dataImage['x1'] <= x && x <= dataImage['x2']) && (dataImage['y1'] <= y && y <= dataImage['y2'])){
        alert("You have win on " + click + " moves")
    }
}

async function getData () {
    try {
        let result = await fetch('./data.json');
        data = await result.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

window.addEventListener('mousemove', glassPosition)
window.addEventListener('click', playerClick)
init()
