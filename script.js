const container = document.querySelector('.content')
const columnDiv = document.querySelector('.columnDiv')
const slider = document.getElementById("myRange");
const output = document.querySelector(".slider");
output.innerHTML = slider.value; // Display the default slider value
const sliderDescription = document.createElement('div')

sliderDescription.classList.add('sliderDescription')
const sliderMainContainer = document.querySelector('.slideContent');

const getGrid = function(size) {
for (x=0; x< size; x++){
    const boxCreate = document.createElement('div')
    boxCreate.classList.add('columnDiv')
    container.appendChild(boxCreate)   

    for (i=0; i< size; i++){
        const otherDiv = document.createElement('div')
        otherDiv.classList.add('rowDiv')
        boxCreate.appendChild(otherDiv)
    }
}}
getGrid(32)

const startingRowDiv = document.querySelectorAll('.rowDiv')
const width = startingRowDiv.length

const addDrawing = function(width, startingRowDiv) {
    for (let i=0; i < width; i++){
        startingRowDiv[i].addEventListener("mouseover",function(i){
            console.log(i)
            let classOf = this.classList; 
            classOf.add('color')
        });
    }}
addDrawing(width,startingRowDiv);


slider.oninput = function() {
    document.querySelectorAll('.rowDiv').forEach(e => e.remove());
    document.querySelectorAll('.columnDiv').forEach(e => e.remove())

    console.log(output.innerHTML = this.value);
    output.innerHTML = this.value;
    getGrid(output.innerHTML = this.value);
    let changedRowDiv = document.querySelectorAll('.rowDiv');
    addDrawing(changedRowDiv.length, changedRowDiv)
}

const removeColor = function () {
    box = document.querySelectorAll('.rowDiv')
    box.forEach(box => box.classList.remove('color'))
}


const colorChanger = function (color) {
    //const fuck = document.styleSheets[0].cssRules
    //const rules = stylesheet.cssRules[1]
    //let elementRules = null;
    //console.log(fuck)
    //for (let i = 0; i< StyleSheetList[0].length; i++) {
        //if (stylesheet.CSSRules[i].selectorText === 'color') {
        //    elementRules = stylesheet.cssRule[i];
       // }
    //}
    //elementRules.style.setProperty('background', color)
    //console.log(elementRules)'

    previous = document.querySelectorAll('.color')
    for (i of previous){
        i.style.backgroundColor = color;
    }
}


const colorList = document.getElementById('colorList').getElementsByTagName('button')
for (item of colorList) {
    item.classList.add('colorChoice')
}

const colorButton = document.querySelectorAll('.colorChoice')
for (i = 0; i < colorButton.length; i++) {
    colorButton[i].addEventListener('click', function() {
        const textContent = this.textContent
        const prev = document.querySelectorAll('.color')
        for (single of prev) {
            (single != 'Rainbow')
            single.style.backgroundColor = textContent
        }
    })
}
