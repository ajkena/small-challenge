const squares = document.querySelectorAll('.squaresList .square');

let squareClicked = [];

function changeColor(e) {
  const square = e.target;
  square.style.backgroundColor = 'green';
  squareClicked.push(square.id);
  //console.log(squareClicked);

  if (squareClicked.length === 6) {
    reverseColor();
  }
}

function reverseColor() {
  for (const square of squares) {
    squareClicked.reverse();
    square.style.backgroundColor = 'white';
  }

  squareClicked = [];
}

console.log(squareClicked);

squares.forEach((square) => {
  square.addEventListener('click', changeColor);
});
