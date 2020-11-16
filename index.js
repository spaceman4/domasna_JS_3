//1. Write a JavaScript conditional statement to sort three numbers. Print the result.

let x = 4;
let y = 5;
let z = 6;

if (x > y && x > z) {
  if (y > z) {
    console.log("X e najgolem, Y e vtor, Z e tret");
  } else {
    console.log("X e najgolem, Z e vtor, Y e tret");
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log("Y e najgolem, X e vtor, Z e tret");
  } else {
    console.log("Y e najgolem, Z e vtor, X e tret");
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log("Z e najgolem, X e vtor, Y e tret");
  } else {
    console.log("Z e najgolem, Y e vtor, X e tret");
  }
}

//2. Write a JavaScript conditional statement to find the largest of five numbers. Print the result.

let a = -10;
let b = 5;
let c = 8;
let d = 3;
let f = 2;

if (a > b && a > c && a > d && a > f) {
  console.log("A e najgolem");
} else if (b > a && b > c && b > d && b > f) {
  console.log("B e najgolem");
} else if (c > a && c > b && c > d && c > f) {
  console.log("C e najgolem");
} else if (d > a && d > c && d > b && d > f) {
  console.log("D e najgolem");
} else {
  console.log("F e najgolem");
}

/* 3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade. 
Student_Name	Marks
David	        80
Vinoth	        77
Divya	        88
Ishitha	        95
Thomas	        68

Range	Grade
<60	    F
<70	    D
<80	    C
<90	    B
<100	A */

let student1 = 80;
let student2 = 77;
let student3 = 88;
let student4 = 95;
let student5 = 68;

let avggrade = (student1 + student2 + student3 + student4 + student5) / 5;
console.log(avggrade);

if (avggrade <= 60) {
  console.log("Grade F");
} else if (avggrade <= 70) {
  console.log("Grade D");
} else if (avggrade <= 80) {
  console.log("Grade C");
} else if (avggrade <= 90) {
  console.log("Grade B");
} else {
  console.log("Grade A");
}

//4. For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening).

let currentTime = 11;

if (currentTime > 5 && currentTime <= 11) {
  console.log("Good morning");
} else if (currentTime > 11 && currentTime <= 19) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

//5. For a given day, print out whether it is a day of the work week or weekend.

let monday = 1;
let tuesday = 2;
let wednesday = 3;
let thursday = 4;
let friday = 5;
let saturday = 6;
let sunday = 7;

let today = 1;

if (today == 1 || today == 2 || today == 3 || today == 4 || today == 5) {
  console.log("Today is a weekday");
} else {
  console.log("Today is a weekend day");
}

//6. For a given month, print out in which season it belongs.

let january = 1;
let february = 2;
let march = 3;
let april = 4;
let may = 5;
let june = 6;
let july = 7;
let august = 8;
let september = 9;
let october = 10;
let november = 11;
let december = 12;

let thisMonth = 11;

if (thisMonth == 3 || thisMonth == 4 || thisMonth == 5) {
  console.log("Spring");
} else if (thisMonth == 6 || thisMonth == 7 || thisMonth == 8) {
  console.log("Summer");
} else if (thisMonth == 9 || thisMonth == 10 || thisMonth == 11) {
  console.log("Autumn");
} else {
  console.log("Winter");
}
