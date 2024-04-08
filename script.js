const container = document.querySelector('.container');
let squares = 16;
drawGrid();

function drawGrid() {
    for(let i=0; i<squares; i++) {
      const div_row = document.createElement('div');
      div_row.setAttribute('style', 'display: flex; flex: 1;');
      container.appendChild(div_row);

      for(let j=0; j<squares; j++) {
        const div_col = document.createElement('div');
        div_col.classList.add('bg');
        div_col.setAttribute('style', 'flex: 1;');
        div_row.appendChild(div_col);
      }
    }
}

const btn = document.querySelector("button");
btn.addEventListener('click', () => {
   squares = Number(prompt("Give no. of squares per side for new grid: "));
   while(isNaN(squares) || squares > 100 || squares <= 0) { // check for correct user input
	squares = Number(prompt("No. should be between 1-100: "));
   }

   let remove = container.querySelectorAll('div');
   remove.forEach(function (div) {
     div.remove();
   });
  drawGrid();
  drawColor();
});

function drawColor() {
  let div = document.querySelectorAll('.bg');
  div.forEach(function(color) {
    color.addEventListener('mouseover', () => {
      color.style.backgroundColor = 'red';
    });
  });
}
drawColor();