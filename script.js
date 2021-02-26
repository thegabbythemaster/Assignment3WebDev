let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR(){
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    row.appendChild(cell);
    var element = document.getElementById("grid");
    element.appendChild(row);
    numRows++;
}

//Adds a column
function AddC(){
    alert("Clicked on Add Col")
}

//Removes a row
function removeR(){
    alert("Clicked Remove Row")
}

//Removes a column
function removeC(){
    alert("Clicked Remove Column")
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}
