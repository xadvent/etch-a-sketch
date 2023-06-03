const container = document.querySelector('.content')
const columnDiv = document.querySelector('.columnDiv')

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

const slider = document.getElementById("myRange");
const output = document.querySelector(".slider");
output.innerHTML = slider.value; // Display the default slider value
const sliderDescription = document.createElement('div')

sliderDescription.classList.add('sliderDescription')
const sliderMainContainer = document.querySelector('.slideContent');

slider.oninput = function() {
    document.querySelectorAll('.rowDiv').forEach(e => e.remove());
    document.querySelectorAll('.columnDiv').forEach(e => e.remove());

    console.log(output.innerHTML = this.value);
    output.innerHTML = this.value;
    getGrid(output.innerHTML = this.value);
    let changedRowDiv = document.querySelectorAll('.rowDiv');
    addDrawing(changedRowDiv.length, changedRowDiv)
}