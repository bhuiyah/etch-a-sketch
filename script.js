const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let size = document.querySelector('#size');
let clear = document. querySelector('#clear');
let color = document.querySelector('#colors');
let nocolor = document.querySelector('#noColor')
let theContainer = document.querySelector('#container');
let inputSize;
let flag=0;

const colorArray = ['#FF0000', '#FFA200', '#FFF700', '#00FFFB', '#00FFFB', '#4200FF', '#E400FF', '#FF0093', '#C1FF00', '#FFA07A']

color.addEventListener('click', ()=>{
    flag=1;
})

nocolor.addEventListener('click', ()=>{
    flag=0;
})

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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function black(){
    for(const cell of cells){
        cell.addEventListener('mouseover', function hover(){
            cell.setAttribute('style', 'background: black;');
        })
    }
} 

function coloring(){
    for(const cell of cells){
        cell.addEventListener('mouseover', function hover(){
            let randomElement = getRandomInt(10);
            cell.setAttribute('style', 'background:'+colorArray[randomElement]);
        })
    }
}

size.addEventListener('click',() =>{
    const rows = document.querySelectorAll('.gridRow');

    for(const row of rows){
        theContainer.removeChild(row);
    }

    inputSize = prompt("Enter a Grid Size");

    if(inputSize <= 64){
        defaultGrid(inputSize);

        if(flag==0){
            black();
        }
        if(flag==1){
            coloring();
        }
    }
    else{
        alert("Try a Lower Number")
    }
})


clear.addEventListener('click', ()=>{
    for(const cell of cells){
        cell.removeAttribute('style');
    }
})

