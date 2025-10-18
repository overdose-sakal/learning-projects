const name = "Sakibul Hussain";
const roll = 23;
const sub_name = "Mathematics";

alert(`Welcome to Grade Calc\nStudent: ${name}\nRoll No: ${roll}\nSubject: ${sub_name}`);

let pt1 = Number(prompt("Enter Your PT1 score out of 100"));
let pt2 = Number(prompt("Enter Your PT2 score out of 100"));
let midterm = Number(prompt("Enter Your midterm score out of 100"));
let finals = Number(prompt("Enter Your finals score out of 80"));
let project = Number(prompt("Enter Your project score out of 20"));


let grade = (pt1 + pt2 + midterm + finals + project)/4;
let letter;
if(grade >= 90) {
  letter = "A+";
  alert("Grade: A+")
}
else if (grade > 80) {
  letter = "A";
  alert("Grade: A")
}
else if (grade > 70) {
  letter = "B";
  alert("Grade: B")
}
else if (grade > 60) {
  letter = "C";
  alert("Grade: C")
}
else if (grade > 50) {
  letter = "D";
  alert("Grade: D")
} else {
  letter = "F";
  alert("Grade: F");
}

if (grade > 50) {
  if (grade >= 85) {
    alert("You are eigible for honours.");
  } 

let n = 0; //n is the number of scores above 90

if (pt1 > 90) {
  n++;
}
else if (pt2 > 90) {
  n++
}
else if (midterm > 90) {
  n++
}
else if (finals > 90) {
  n++
}
else if (project > 90) {
  n++
} alert(`You have scored more than 90 in ${n} exams.`);
} else {
  if (grade<50) {
    let marks_needed = 50 - grade;
    alert(`You can definately be better if you work hard.\nYou need ${marks_needed} more average marks to pass`);
  } 
}

let arr = [pt1, pt2, midterm, finals + project]

for (let i = 0; i < arr.length; i++) {
  alert(`Score ${i+1}: ${arr[i]}`);
}

let a = 0;
for(let i = 0; i < arr.length; i++) {
  if(a<arr[i]) {
    a = arr[i];
  }
}

alert(`Your highest score is ${a}`);

let b;

b = arr[arr.length-1];

for(let i = 3; i >= 0; i--) {
  if(b>=arr[i]) {
    b = arr[i];
  } 
}

alert(`Your lowest score is ${b}`);

if(grade>50){
  alert(`${a} was your best score and you nailed it`);
} else {
  alert(`${b} was your least score and you need to improve it`);

}

let new_subname = sub_name.toUpperCase();
let newname = name.toUpperCase();

let pass_fail;

if (grade>50) {
  pass_fail = "Pass";
} else {
  pass_fail = "Fail";
}

alert(`Student Name: ${newname}\nSubject: ${new_subname}\nAverage Score: ${grade}\nGrade: ${letter}\nResult: ${pass_fail}`);

