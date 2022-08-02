let firstPoints = document.getElementById('first-score');
let secondPoints = document.getElementById('second-score');
let home = document.getElementById('home');
let guest = document.getElementById('guest');

/* first board */

function increaseByOneF() {
  firstPoints.textContent++;
  highlightTheLeader();
}

function increaseByTwoF() {
  let result = firstPoints.textContent;
  firstPoints.textContent = Number(result) + 2;
  highlightTheLeader();
}

function increaseByThreeF() {
  let result = firstPoints.textContent;
  firstPoints.textContent = Number(result) + 3;
  highlightTheLeader();
}

/* second board */

function increaseByOneS() {
  secondPoints.textContent++;
  highlightTheLeader();
}

function increaseByTwoS() {
  let result = secondPoints.textContent;
  secondPoints.textContent = Number(result) + 2;
  highlightTheLeader();
}

function increaseByThreeS() {
  let result = secondPoints.textContent;
  secondPoints.textContent = Number(result) + 3;
  highlightTheLeader();
}

/* reset results */

function resetGame() {
  firstPoints.textContent = 0;
  secondPoints.textContent = 0;
  home.style.color = 'black';
  guest.style.color = 'black';
}

/* change colors */

function highlightTheLeader() {
  let firstResult = Number(firstPoints.textContent);
  let secondResult = Number(secondPoints.textContent);

  if (firstResult > secondResult) {
    home.style.color = 'var(--red)';
    guest.style.color = 'var(--black)';
  } else if (secondResult > firstResult) {
    guest.style.color = 'var(--red)';
    home.style.color = 'var(--black)';
  } else {
    home.style.color = 'var(--black)';
    guest.style.color = 'var(--black)';
  }
}