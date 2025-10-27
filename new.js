let x;//true
let turnO = true;
let o;//false

let btn1 = document.getElementById('a1');
let btn2 = document.getElementById('a2');
let btn3 = document.getElementById('a3');
let btn4 = document.getElementById('a4');
let btn5 = document.getElementById('a5');
let btn6 = document.getElementById('a6');
let btn7 = document.getElementById('a7');
let btn8 = document.getElementById('a8');
let btn9 = document.getElementById('a9');
let reset = document.getElementById('reset');




const bottons = document.querySelectorAll('.boxes');

bottons.forEach((botton) => {
    botton.addEventListener('click', () => {
        if(turnO) {
            botton.innerText = 'O';
            turnO = false;
            botton.disabled = true;
        } else {
            botton.innerText = 'X';
            turnO = true;
            botton.disabled = true;
        }
        

        if(btn1.innerText == 'X' && btn2.innerText == 'X' && btn3.innerText == 'X') {
           alert('X wins');    position: absolute;
        }   

                if(btn4.innerText == 'X' && btn5.innerText == 'X' && btn6.innerText == 'X') {
           alert('X wins');
        }   

                if(btn7.innerText == 'X' && btn8.innerText == 'X' && btn9.innerText == 'X') {
           alert('X wins');
        }   

                if(btn1.innerText == 'X' && btn4.innerText == 'X' && btn7.innerText == 'X') {
           alert('X wins');
        }   

                if(btn2.innerText == 'X' && btn5.innerText == 'X' && btn8.innerText == 'X') {
           alert('X wins');
        }   

                if(btn3.innerText == 'X' && btn6.innerText == 'X' && btn9.innerText == 'X') {
           alert('X wins');
        }   

                if(btn1.innerText == 'X' && btn5.innerText == 'X' && btn9.innerText == 'X') {
           alert('X wins');
        }   

                if(btn3.innerText == 'X' && btn5.innerText == 'X' && btn7.innerText == 'X') {
           alert('X wins');
        }   


        if(btn1.innerText == 'O' && btn2.innerText == 'O' && btn3.innerText == 'O') {
   alert('O wins');
}   

if(btn4.innerText == 'O' && btn5.innerText == 'O' && btn6.innerText == 'O') {
   alert('O wins');
}     

if(btn7.innerText == 'O' && btn8.innerText == 'O' && btn9.innerText == 'O') {
   alert('O wins');
}   

if(btn1.innerText == 'O' && btn4.innerText == 'O' && btn7.innerText == 'O') {
   alert('O wins');
}   

if(btn2.innerText == 'O' && btn5.innerText == 'O' && btn8.innerText == 'O') {
   alert('O wins');
}   

if(btn3.innerText == 'O' && btn6.innerText == 'O' && btn9.innerText == 'O') {
   alert('O wins');
}   

if(btn1.innerText == 'O' && btn5.innerText == 'O' && btn9.innerText == 'O') {
   alert('O wins');
}   

if(btn3.innerText == 'O' && btn5.innerText == 'O' && btn7.innerText == 'O') {
   alert('O wins');
}   

    });
});

reset.addEventListener('click', () => {
    btn1.innerText = '';
    btn2.innerText = '';
    btn3.innerText = '';
    btn4.innerText = '';
    btn5.innerText = '';
    btn6.innerText = '';
    btn7.innerText = '';
    btn8.innerText = '';
    btn9.innerText = '';
    turnO = true;
    bottons.forEach((botton) => {
        botton.disabled = false;
    });
});


