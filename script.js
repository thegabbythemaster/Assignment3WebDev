// Practical Web Dev
// Team Foodies - Samantha Ngo, Gabby Gonzalez, Kristy Lau, Nirmala Kuhl
// Assignment #3
// 2021-03-04

let numRows = 0;
let numCols = 0;
let colorSelected = "white";

const grid = document.getElementById("grid");
const purple = "#CDB4DB";
const lightPink = "#FFC8DD";
const pink = "#FFAFCC";
const lightBlue = "#BDE0FE";
const blue = "#A2D2FF";

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

    if(numRows == 0) {
      numCols = 0;
    }
}

// Removes a column
function removeColumn(){
    let rows = document.getElementsByTagName('tr');
    // console.log(rows)

    for(let i=0; i < numRows; i++){
      // Access individual row
      let individualRow = rows[i].children;
      // console.log("individualRow:", individualRow);
      // Access last column in that row
      let lastColumn = individualRow[numCols-1];
      // Remove last column
      lastColumn.remove();
    }

    numCols--;
    // If the number of columns reach 0
    // Reset that number of rows to 0 as well
    if(numCols == 0) {
      numRows = 0;
    }
}

// Select a Color
function selected(){
    colorSelected = document.getElementById("selectedColor").value;
    console.log(colorSelected);
}

// Fill single cell with currently selected color
let table = document.getElementById('grid');
table.onclick = function(event) {
	let target = event.target.closest('td');
	console.log(target)
	target.style.backgroundColor = colorSelected
};

// Fill all uncolored tiles with currently selected color
function fillUncolored(){
  let cells = document.getElementsByTagName("td")
  for(let i = 0; i < cells.length; i++){
    if(!cells[i].style.backgroundColor || cells[i].style.backgroundColor == "white"){
      cells[i].style.backgroundColor = colorSelected;
    }
  }
}

// Fill all uncolored tiles with currently selected color
function fillAll(){
    alert("Clicked Fill All")
}

// Clear all color from cells
function clearAll(){
    let cells = document.getElementsByTagName("td")
    for(let i = 0; i < cells.length; i++){
      cells[i].style.backgroundColor = "white";
    }
}
