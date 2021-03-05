// Practical Web Dev
// Team Foodies - Samantha Ngo, Gabby Gonzalez, Kristy Lau, Nirmala Kuhl
// Assignment #3
// 2021-03-04

let numRows = 0;
let numCols = 0;
let colorSelected;

let grid = document.getElementById("grid");

// Adds a row
function addRow(){
    let rows = document.getElementsByTagName('tr');
    if(rows.length == 0){
      let row = document.createElement("tr");
      let col = document.createElement("td");
      row.appendChild(col);
      grid.appendChild(row);
      numCols++
      numRows++
    } else {
      let row = document.createElement("tr");
      for(let i = 0; i < numCols; i++){
        let cell = document.createElement("td");
        row.appendChild(cell);
      }
      grid.appendChild(row);
      numRows++;
      //console.log(numRows);
    }
}

// Adds a column
function addColumn(){
    let rows = document.getElementsByTagName('tr');
    if(rows.length == 0){
      let row = document.createElement("tr");
      let col = document.createElement("td");
      row.appendChild(col);
      grid.appendChild(row);
      numCols++
      numRows++
    } else {
      for(let i = 0; i < numRows; i++){
          let col = document.createElement("td");
          rows[i].appendChild(col);
      }
      numCols++;
      //console.log(numCols);
    }
}

// Removes a row
function removeRow(){
    let deleteRow = document.getElementsByTagName('tr')[0];
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
