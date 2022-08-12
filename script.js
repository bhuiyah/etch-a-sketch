const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let size = document.querySelector('#size');
let clear = document. querySelector('#clear');
let theContainer = document.querySelector('#container');
let inputSize;




function defaultGrid(num) {
    makeRows(num);
    makeColumns(num);
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
    for(row of rows){
        let percent = 1/rowNum*100;
        row.setAttribute('style', 'height:' +percent+'%');
    }
};

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

size.addEventListener('click',() =>{
    const rows = document.querySelectorAll('.gridRow');
    for(const row of rows){
        theContainer.removeChild(row);
    }
    inputSize = prompt("Enter a Grid Size");
    if(inputSize <= 64){
        defaultGrid(inputSize);
        for(const cell of cells){
            cell.addEventListener('mouseover', function hover(){
                cell.classList.add('hovered');
            })
        }  
    }
    else{
        alert("Try a Lower Number")
    }
})

clear.addEventListener('click', ()=>{
    for(const cell of cells){
        cell.classList.remove('hovered');
    }
})

