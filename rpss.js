let ai = Math.random() * 10;
ai = Math.round(ai);


let move = ai%3;
let rock;
let paper;
let scissor;


if (move === 0) {
  paper = true;
} 
else if (move === 1) {
  scissor = true;
}
else if (move === 2) {
  rock = true;
}

let isRock;
let isPaper;
let isScissor;

let btn1 = document.getElementById('rock');


let btn2 = document.getElementById('paper');


let btn3 = document.getElementById('scissor');





btn1.onclick = () => {
  isRock = true;
  isPaper = false;
  isScissor = false;

if (isRock && rock) {
  alert("DRAW");
}

else if (isRock && scissor) {
  alert("Player wins")
}

else if (isRock && paper) {
  alert("AI wins");
}

paper = false;
rock = false;
scissor = false;

ai = Math.random() * 10;
ai = Math.round(ai);

move = ai%3;

if (move === 0) {
  paper = true;
} 
else if (move === 1) {
  scissor = true;
}
else if (move === 2) {
  rock = true;
}

}









btn2.onclick = () => {
    isRock = false;
  isPaper = true;
  isScissor = false;

  if (isPaper && paper) {
  alert("DRAW");
}

else if (isPaper && rock) {
  alert("Player wins")
}

else if (isPaper && scissor) {
  alert("AI wins");
}

paper = false;
rock = false;
scissor = false;

ai = Math.random() * 10;
ai = Math.round(ai);

move = ai%3;

if (move === 0) {
  paper = true;
} 
else if (move === 1) {
  scissor = true;
}
else if (move === 2) {
  rock = true;
}

}








btn3.onclick = () => {
  isScissor = true;
    isRock = false;
  isPaper = false;

if (isScissor && scissor) {
  alert("DRAW");
}

else if (isScissor && paper) {
  alert("Player wins")
}

else if (isScissor && rock) {
  alert("AI wins");
}

paper = false;
rock = false;
scissor = false;

ai = Math.random() * 10;
ai = Math.round(ai);

move = ai%3;

if (move === 0) {
  paper = true;
} 
else if (move === 1) {
  scissor = true;
}
else if (move === 2) {
  rock = true;
}



}



