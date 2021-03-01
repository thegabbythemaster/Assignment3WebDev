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
    //console.log(numRows);
}

//Adds a column
function addC(){
    for(var i = 0; i < numRows; i++){
        var row = document.getElementsByTagName('tr')[0];
        var col = document.createElement("td");
        row.appendChild(col);
        var div = document.getElementById("grid");
        div.appendChild(row);
    }
    numCols++;
    //console.log(numCols);
}

//Removes a row
function removeR(){
    var deleteRow = document.getElementsByTagName('tr')[0];
    deleteRow.remove();
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
