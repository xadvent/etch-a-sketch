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
            const audio = new Audio('click.wav')
            
            audio.play();
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

const random = function() {
    random1 = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = '#' + random1
    return randomColor
}

var r = 0, g = 0, b = 0



const colorList = document.getElementById('colorList').getElementsByTagName('button')
for (item of colorList) {
    item.classList.add('colorChoice')
}

const colorButton = document.querySelectorAll('.colorChoice')
for (i = 0; i < colorButton.length; i++) {
    colorButton[i].addEventListener('click', function() {
        const textContent = this.textContent
        const internalStyle = document.querySelector('style');
        (textContent === "Random") ? internalStyle.innerHTML = `.color{background-color:${random()}` : 
        (textContent != "Rainbow") ? internalStyle.innerHTML = `.color{background-color:${textContent}`: 
        internalStyle.innerHTML = `.color{background-color:${rainbow()}}` 
    })
}
const rainbow = function () {
    if (r <= 255 && g == 0 && b == 0) {r ++;}
    if (r == 255 && b == 0 && g <= 255) {g ++;}
    if (r == 255 && g == 255 && b <= 255) {b ++;}
    if (b == 255 && g == 255 && r > 0) {r --;}
    if (r == 0 && b == 255 && g > 0) {g --;}
    if (r == 0 && g == 0 && b > 0) {b --;}
    setTimeout(function() {
        rainbow();
    }, 10);
    const internalStyle = document.querySelector('style')
    internalStyle.innerHTML = '.color{background-color: rgb('+r+','+g+','+b+')}';
}
