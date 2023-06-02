const container = document.querySelector('.content')
const columnDiv = document.querySelector('.columnDiv')


const getGrid = function() {
// fill in with for loops below using a prompt to get the loop amount value.
}
for (x=0; x< 32; x++){
    const boxCreate = document.createElement('div')
    boxCreate.classList.add('columnDiv')
    container.appendChild(boxCreate)   

    for (i=0; i< 32; i++){
        const otherDiv = document.createElement('div')
        otherDiv.classList.add('rowDiv')
        boxCreate.appendChild(otherDiv)
    }
}

const totalRowDiv = document.querySelectorAll('.rowDiv')
for (let i=0; i<totalRowDiv.length; i++){
    console.log(totalRowDiv[i])

    totalRowDiv[i].addEventListener("mouseover",function(i){
        console.log(i)
        let classOf = this.classList; 
        classOf.add('color')
    });
}

const addColor = function () {

}
    
    


