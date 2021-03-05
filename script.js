let numRows = 0;
let numCols = 0;
let colorSelected;

// Adds a row
function addRow(){
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    row.appendChild(cell);
    var element = document.getElementById("grid");
    element.appendChild(row);
    numRows++;
    //console.log(numRows);
}

// Adds a column
function addColumn(){
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

// Removes a row
function removeRow(){
    var deleteRow = document.getElementsByTagName('tr')[0];
    deleteRow.remove();

    numRows--;
}

// Removes a column
function removeColumn(){
    alert("Clicked Remove Column")
}

// Select a Color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

// Fill single cell with currently selected color
function fillSingle(){
    alert("Clicked Fill Single Cell")
}

// Fill all uncolored tiles with currently selected color
function fillUncolored(){
    alert("Clicked Fill All Uncolored")
}

// Fill all uncolored tiles with currently selected color
function fillAll(){
    alert("Clicked Fill All")
}

// Fill all uncolored tiles with currently selected color
function clearAll(){
    alert("Cleared All")
}
