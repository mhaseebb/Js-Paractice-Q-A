// // Question 1

alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");
alert("You're learning JavaScript!");
var firstName ="haseeb"
console.log(firstName)

// // Question 2

var firstName = "haseeb"
alert(firstName);

myVarible;
var myVarible = "hello javascripts";
alert(myVarible);

var teamName ="Haseeb ,ali ,saad ,asad , shan,shayan"
alert (teamName)

var bestMan = "Charlie";
bestMan= "David";
alert(bestMan);

// // Question 3
var caseQty ="5";
alert(caseQty);

var caseQty = 144;
alert(caseQty);

var num = "9";
var a = 5;
var b = 4;
alert(a+b);

var num = 1;
var num1 = 5+2;
alert(num+num1);

var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert(orderTotal);

var num = 10;
num =num+5
alert(num);

// // Question 4

var productCost = 3.45;

var nameofBand;

var num2 =5;
alert(num2);

var muhammadHaseeb 

// legal Varible List
//  var $myVarible="this is legal varible"
//  var myString="this is legar varible"
//  var Str12="This is lega varible"

//  Illegal Varibe
var 123num= "this is illegal varible"
var !Number ="this is illegal valible" 

// // Question 5

var reminder = 10 % 3;
alert(reminder);

var num = 20 % 6;
alert(num);

var largeNum =1000*2000;
alert(largeNum);


var value =5;
var value2 = 6;
var result =value - value2;
alert(result); 


var remainder = 255;
var divide =remainder%5;
alert (divide);


var num5 = 5*2;
alert(num5);

chapter 6

x++;
x+=1;






// // Q 3
var x = 50;
var y = x++;
What is the value of y?

var x = 50;
var y = x++;
alert(y);

var y = 50;
var z = --y;
 alert(z);

In a single statement, decrement num and assign its original value
to newNum.

var num = 5;
var newNum =num--;
alert(newNum);

var num = 6;
var newnum = ++num;
alert(newnum);

// // chapter 7

var calculatedNum =2+(2*6);
document.write(calculatedNum);

var calculateDNum =(2 + 2) * 6;
document.write(calculateDNum);

var calculateDNum =(2 + 2) * (4 + 2);
document.write(calculateDNum);

var calculateDNum = ((2 + 2) * 4) + 2;
document.write(calculateDNum);

var cost = (2+2)*(4+10);
document.write(cost);

var unit = (2+(2*4)+10);
document.write(unit);

var presure = (4/(2*4));
document.write(presure);


// // chapter 8
 var num = "2"+"2";
 alert(num);


message = ("Hello," + "Dolly");
What is the value of message? (Include the quotation marks.)
Alert the statement

var massage = ("Hello," + "Dolly");
alert(massage);

alert("33" + 3);

alert("Pakistan Zindabad");


var number =("5"+10);
alert(number);

var firstName ="Muhammad ";
var lastName = "Haseeb";
var fullName = firstName+lastName;
console.log(fullName);

// // Chapter 9

var firstName = prompt("Enter Your First name");
// console.log(firstName);


// // 2. Code a prompt with the message "Country?" and the default
// // answer "China". The user's response is assigned to country.


var country =prompt("Country","China");
console.log(country);

// // 3. Correct this statement
var yourName = prompt(Enter Your Name");

var yourName = prompt("Enter Your Name");

var userResponse = prompt("Please enter your favorite color:", "Blue");
console.log(userResponse);

var message =prompt("You are eligible for the course:", "Enter your response here");
console.log(message);


var message = "Please enter your favorite color:";
var defaultResponse = "Blue";
var userResponse = prompt(message, defaultResponse);
console.log(userResponse);

var name1 = prompt("what your name","Haseeb");
console.log(name1);

// // chapter 10
// // 1.
var city = "pakistan";
if (city === "Karachi") {
alert("The City OF Lights");
}
else {
    alert("This is not Karachi");
}


if (x === y){
    var z =prompt("what is the value of z?");
    var anotherVarible = z;

// // }
// // Code an if statement that tests if ZipCode is "10010" so, Alert
// // that "Karachi". if not then alert ("Please write correct city")

var zipcode = prompt("Enter your zip code");

if (zipcode === "10010") {
    var city = "Karachi";
    alert(city);
} else {
    alert("Please enter your correct city");
}


// // Code an if statement. Test whether a variable has a particular
// // numerical value. If so, assign a new value to that variable, as in
// // x = 1;

var x =5;
if(x === 5){
    x=1;
}
console.log(x);


// // Chapter 11

// // 1. Code the first line of an if statement that tests whether one
// // // variable is unequal to another. (Use !)

var variable1 = 10;
var variable2 = 50;

if (variable1 != variable2) {
  console.log("Variables are not equal.");
}


// // Code the first line of an if statement that tests whether the
// // value represented by a variable is greater than or equal to the
// // value represented by another variable.

var  varible2 =50;
var variable3 = 40;

if (varible2 >= variable3){
console.log("varible are graterthan");

// // }


// // 3. Code an if statement. Test whether a variable is unequal to a
// // particular number. If so, assign a number to that variable.


var variable4 = 5;
var variable5 = 6;
  if( variable4 != variable5){
variable = 10;
    console.log("variable is unequal","new value assigned to varible.");
  }


// 4. Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.


var num = 5;
var num2 =7;

if  (num != num2 ){
    alert("Congratulations! The numbers are unequal.");
}


// // 5. Code a prompt asking for your first name.
// // Code an if statement that tests whether the name you entered
// // is unequal to another name.
// // If the condition is true (it will be), display an alert that says "No
// // match"

var anotherName = "nadeem";
var enteredName = prompt("First Name");

if (enteredName != anotherName) {
    alert("No match");
}

// // chapter 12 

// // Code an if statement that tests whether the value represented by
// // a variable is greater than or equal to the value represented by
// // another variable. If so, display an alert. If not, display a different
// // alert.

var variable1 = 30;
var variable2 = 25;

if (variable1 >= variable2) {
    alert("variable1 is greater than or equal to variable2");
} else {
    alert("variable1 is less than variable2");
}


// // 2. Write a program using if else and else if statement which take
// // marks from user. And the program will calculate your percentage
// // and give you grade A/C to Your percentage. (MARKSHEET)


var totalMarks = 500;
var obatineMarks =prompt("Enter your obtained marks");

var percentage= (obatineMarks/totalMarks) *100;

if( percentage >=90){
    alert("Grade:A+");
}
else if ( percentage >=80)
{
    alert("Grade:A");
}
 else if (percentage >= 70) {
    alert("Grade: B");
} else if (percentage >= 60) {
    alert("Grade: C");
} else if (percentage >= 50) {
    alert("Grade: D");
} else {
    alert("Grade: F - You have failed");
}

// // 3.This is the if statement that begins the code.
if (a === 10) {
alert("a is 10");
}
// // If a isn't 10, display an alert that says The correct value of a is
// // ____
// // Note: Try this by yourself

if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// // Prompt the user to enter a city.
// // If the city is Karachi, display an alert acknowledging it is Karachi.
// // If not, check to see if it's Lahore.
// // If it is, display an alert acknowledging it's Lahore.
// // Otherwise, display a different alert.

var city ="karachi";
var city2 = prompt("Enter your city name").toLocaleLowerCase();

if (city2 === city){
    alert("its is karachi");
}
else if (city2 === "Lahore") {
    alert("It is Lahore");
} else {
    alert("This is some other city");
}

// // Chapter 13 (Testing sets of

// //     conditions)

// // 1. Code the first line of an if statement that tests whether both are
// // true: a has the same value as b and c has the same value as d.

var a = "5";
var b = "5";
var c = "6";
var d = "6";

if (a === b && c === d) {
    alert("Both conditions are true");
}

// // Code the first line of an if statement that tests whether either or
// // both are true: a has the same value as b or c doesn't have the
// // same value as d.
var a = "5";
var b =  "4";
var c = "7";
var d =  "7";

if (a === b || c !== d) {
    alert("Either or both conditions are true");
} else {
    alert("Neither condition is true");
}

// // 4. Declare two variables and assign them number values.
// // If the first variable is less than the second variable or greater than
// // the second variable, display an alert.

var number1 = 2;
var number2 = 2 ;
s
if (number1 < number2 || number1 > number2){
    alert("Second number are grather than first number");
}
else{
    alert("wrong entry")
}


Chapter 14 (If statements nested)

Code an if statement enclosing a nested if. If password is not
empty, then check if password is not greater than 5 , then display
an alert that says "Password must be greater than 5" if greater
than 5 then Alert "OK".

var password ="12354";

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
}

2. Try this statement by yourself
var a =2;
var c = "Max";
if (a === 1) {
if (c === "Max") {
alert("OK");
}

}

3. Code the first line of an if statement that avoids the nesting above
by testing for multiple conditions.
var a = 1;
var c = "Max";
if (a === 1 && c === "Max") {
alert("OK");

}



Declare two variables and assign them the same number value.
Test two conditions, using nested if statements. Test whether the
first variable equals the second variable and also whether it is less
than or equal to the second variable. If the test passes—and it
will—display an alert message.

var num1 = 5;
var num2 = 5;

if( num1 === num2){
    if (num1 <= num2)
    alert("The first variable is equal to the second variable");
}

// Chapter 15 (Array I)

var emptyArray =[];

2. Code an array with 1 string element

var array = ["2"];

var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert
using array index

var alphabet = ["h","i","j","k"];
alert(alphabet[2]);

var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total
length of array.

var alphabet=["h","i","j","k", "l","m", "n", "o"];
alert(alphabet.length);

Declare an array with one element and Add a second element
with index in array. Create an alert whose message is the new
element.

var array = [ "a", "b" , "g" ,];
array [3] =['c' , "l" , "m" ,];
alert(array[3]);

1. Code an array with 1 string element.
Add an additional element to the array using push.
Create an alert whose message is the last element.

var array = ["1"];
array.push("5");
alert(array[array.length-1]);

var Alphabet=["h","i","j","k"]
Remove the last element from the array Alphabet.

var Alphabet=["h","i","j","k"];
Alphabet.pop();
alert(Alphabet);

// var Alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.

var Alphabet=["h","i","j","k"];
Alphabet.push(1);
alert(Alphabet);


Chapter 16 (Array III)

1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Remove the first element of an array.

 var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.shift();
alert(sizes);


// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.

 var sizes = ["S", "M", "XL", "XXL", "XXXL"]
 sizes.unshift(1,2,3);
 alert(sizes);


// Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.

var array = ["a"];
array.unshift("b");
alert(array);


4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Insert "L" into the array between "M" and "XL".

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice(1 , 2, "L");
alert(sizes);

5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Copy the first 3 sizes of the array and put them into a new array,
regSizes.

 var sizes = ["S", "M", "XL", "XXL", "XXXL"]
var regSizes= sizes.splice(0,3);
alert(regSizes);


var pets = ["dog", "cat", "ox", "duck", "frog"].
Add 2 elements after "dog" and remove "cat", "ox", and "duck".

var pets = ["dog", "cat", "ox", "duck", "frog"]
pets.splice(0,2,"ox", "duck" );
alert(pets);

7. var pets = ["dog", "cat", "ox", "duck", "frog"];
Remove "cat" and "ox".

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
alert(pets); 

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
Reduce it to "duck" and "frog" using slice.

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
var reducepets = pets.slice(3,5);
console.log(reducepets);

Chapter 17 - 20 (for Loops)

for (var i = 0; i<100; i++ ){
    console.log(i+1);
}

// // Write a statement in which loop is to run 10 times.
 for (var i =0; i<5; i+1){
    console.log(i);
 }

// // Code the first line of a for loop with the usual counter name, usual
// // starting value, and usual increment. Run it 12 times using <= to
// // specify how many loops.

for ( var  i= 1 ;  i <=11 ; i++ ){
   console.log(i+1);
}


// // 3. What are the 5 characters missing from this code, excluding any
// // spaces that are missing? Type them in order, with no spaces or
// // commas between them.

for var i = 0 i <= 4 i++

for( var i = 0; i <= 4; i++){
   console.log(i);
}


// // 4. Code the first line of a for loop with a counter name that's not i.
// // Code the usual starting value and usual increment. Run it 100
// // times using < to specify how many loops.


for (counter =0; counter<100; counter++){
   console.log(counter+1);
}


// // 5. Code the first line of a for loop with the usual counter and the
// // usual starting value. Run it 3 times using > to specify how many
// // loops. Decrement it with each iteration.

for (var counter = 3; counter > 0; counter--) {
   console.log(counter);
}


// // The statement assigns the number of elements in the array to the
// // variable.

var num = [1,2,3,4,5];
console.log(num);

// // Set a variable named “flag” with an initial Boolean value of your
// // choice.

var flag = true;
var flag = false;

// // 8. Code the first line of a for loop with the usual counter, the usual
// // starting value, and the usual incrementing. Limit the number of
// // loops by the number of elements in the array pets.

for (let i = 0; i < pets.length; i++) {
   
// // }

// // Coding Exercise:
// // Set a for loop to run 10 iterations.
// // On the second iteration, display the counter in an alert. (It should
// // be 1.)
// // Break out of the loop.

for (var counter = 0; counter < 10; counter++) {
    if (counter === 1) {
        alert(counter);  
        break;  
    }
}

// // Create an array which contains user names
// // Code a prompt with the message "Enter first name". The user's
// // response is assigned to firstName.
// // Code the first line of a for loop with the usual counter, the usual
// // starting value, and the usual incrementing. Limit the number of
// // loops by the number of elements in the array user names.
// // Code an if statement that tests the presense of (user name) in an
// // array.

var userName =["Haseeb", "Nadeem"];
var firstName = prompt("Enter your Fisrt Name");

for (var i= 0; i < userName.length;    i++){
if (userName[i] === firstName);
alert("User name found: " + firstName);
break;

// // }

// // 11. Complete this code to display an alert if a match isn't found.
// // var matchFound = false;
// // for (var i = 0; i < list.length; i++) {
// // if (userInput === list[i]) {
// // alert("Match found");
// // matchFound = true;
// // break;
// // }
// // };



var matchFound = false;
for (var i = 0; i < list.length; i++) {
if (userInput === list[i]) {
alert("Match found");
matchFound = true;
break;
}
};
if (!matchFound) {
    alert("Match not found");
// // }

// // 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
// // var secondArr = [1, 2, 3, 4, 5, 6];
// // Code the first line of a for loop with the usual counter, the usual
// // starting value, and the usual incrementing. Limit the number of
// // loops by the number of elements in the array firstArr.
// // In the scope of main loop Code the nested loop. Limit the number
// // of nested loops by the number of elements in the array
// // secondArr.
// // After that concatenate the both loops.
// // Expected Output:
// // a1
// // a2
// // a3
// // a4
// // ...
// // f6


var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
  
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}