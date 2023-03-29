const container = document.querySelector('.container')
let div = document.createElement('div')
let col = document.createElement('div')
let size = 16
let boxSize = 500 / size
let boxSizeAtribute 

function createCol() {
    let i = 1
    col = document.createElement('div')
    while (i <= size){
        div = document.createElement('div')
        div.classList.add('box')
        boxSizeAtribute = `width: ${500/size}px; height: ${500/size}px; border: solid black 1px`
        div.setAttribute('style', boxSizeAtribute)
        col.appendChild(div)
        i++
    }
    col.classList.add('col')
    return col
}

function createGrid () {
    let j = 1
    while (j <= size){
        container.appendChild(createCol())
        j++
    }
}
createGrid()


let box = document.querySelectorAll('.box')
function hoveringIn (box) {
    box.forEach(elem => elem.addEventListener('mouseover', (e) => {
        e.target.style.background = 'lightblue' 
    }))
}


hoveringIn(box)


const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    size = parseInt(prompt("What's the new grid size: "))
    container.textContent = ''
    createGrid()
    box = document.querySelectorAll('.box')
    hoveringIn(box)
})

