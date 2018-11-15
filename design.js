//variables
var sizePicker  = document.getElementById('sizePicker');
var colorPicker = document.getElementById('colorPicker');
var pixelCanvas = document.getElementById('pixelCanvas');

// Add event listener to select grid size
sizePicker.addEventListener('submit', (event) => {
// prevent page refresh on submit
event.preventDefault();


  //variables to save canvas height and width
  var inputWidth = document.getElementById('inputWidth').value;
  var inputHeight = document.getElementById('inputHeight').value;

    makeGrid(inputWidth, inputHeight);



  //Create the canvas
  function makeGrid(width, height) {

    pixelCanvas.innerHTML = '';

    for (var row = 0; row < width; ++row) {             //to create the rows
      var newRow = pixelCanvas.insertRow();

      for (var cell = 0; cell < height; ++cell) {       //to create the cells
        var newCell = newRow.insertCell();

        newCell.onclick = newColor;

      }
    }
  }

  //Change the color of the cells when clicked
  function newColor() {
    this.style.background = colorPicker.value;
  }


})();
