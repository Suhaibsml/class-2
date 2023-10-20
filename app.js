// --------------------------------------Chapter no 5-----------------------------------

// Question # 1

// var num1 = +prompt("Enter first num for addition");
// var num2 = +prompt("Enter second num for addition");
// document.write("The sum of" + " " + num1 + " " + "and" + " " + num2 + " is " + (num1 + num2));

// Question # 2

// i)
// var num1 = +prompt("Enter first num for subtraction");
// var num2 = +prompt("Enter second num for subtraction");
// document.write("the subtraction of" + " " + num1 + " " + "and" + " " + num2 + " is " + (num1 - num2));

// ii)
// var num1 = +prompt("Enter first num for multiplication");
// var num2 = +prompt("Enter second num for multiplication");
// document.write("The multiplication of" + " " + num1 + " " + "and" + " " + num2 + " is " + (num1 * num2));

// iii)
// var num1 = +prompt("Enter first num for division");
// var num2 = +prompt("Enter second num for division");
// document.write("division of" + " " + num1 + " " + "and" + " " + num2 + " is " + (num1 / num2));
// iv)
// var num1 = +prompt("Enter first num for Modulus");
// var num2 = +prompt("Enter second num for Modulus");
// document.write("The modulus of" + " " + num1 + " " + "and" + " " + num2 + " is " + (num1 % num2));

// Question # 3

// var num1 = +prompt("Declare a Variable");
// document.write("Value after variable declaration is: " + num1+ "<br />");
// var num1 = +prompt("Enter a Number");
// document.write("Initial Value is: " + num1+"<br />");
// num1++;
// document.write("Value after increament is: " + num1+"<br />");
// var num2 = +prompt("Enter a number to add in previous num");
// var sum = num1 + num2;
// document.write("Value after Addition is: " + sum + "<br />");
// --sum;
// document.write("Value after decrement is: " + sum + "<br />");
// document.write("The remainder is: " + sum%3 + "<br />");


// Question # 4

// var ticketQuantity = +prompt("How mant tickets you want to purchase?")
// var ticketPrice = 600;
// document.write("Total cost to buy"+" "+ticketQuantity+" "+"tickets is"+" "+(ticketQuantity*ticketPrice)+" ");

// Question # 5

// var table = prompt("Enter a number for its Table.");
// document.write("Table of " + table + "<br />");
// for (var i = 1; i <= 10; i++) {
//     document.write(table + " x " + i + " = " + (i * table) + "<br />");
// }

// Question # 6

// var tempInC = +prompt("Enter temperature in celcius to covert into fahrenheit")
// var tempInF = +prompt("Enter temperature in fahrenheit to covert into celcius")
// var tempInC1 =(tempInC* 9/5)+32;
// var tempInF1 =(tempInF-32)*5/9;
// document.write(tempInC + "<sup>o</sup>C is " + tempInC1 + "<sup>o</sup>F" + "<br />");
// document.write(tempInF + "<sup>o</sup>F is " + tempInF1 + "<sup>o</sup>C");

// Question # 7

// var item1Quantity = +prompt("Enter Quantity of item 1");
// var item2Quantity = +prompt("Enter Quantity of item 2");
// var item1Price = 650;
// var item2Price = 100;
// var shippingCharges = 100;

// document.write("<h2>Shopping Cart</h2>" + "<br />");
// document.write("Price of item 1 is " + item1Price + "Rs" + "<br />");
// document.write("Quantity of item 1 is " + item1Quantity + "<br />");
// document.write("Price of item 2 is " + item2Price + "Rs" + "<br />");
// document.write("Quantity of item 2 is " + item2Quantity + "<br />");
// document.write("Shipping Charges is " + shippingCharges + "<br />");
// document.write("<br />" + "Total Cost of your order is " + ((item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges) + "Rs" + "<br />");

// Question # 8

// var TotalMarks = +prompt("Enter Total Marks");
// var ObtainedMarks = +prompt("Enter your Obtained Marks");

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total Marks : " + TotalMarks + "<br />");
// document.write("Marks Obtained : " + ObtainedMarks + "<br />");
// document.write("Percentage :" + (ObtainedMarks / TotalMarks) * 100 + "%" + "<br />");

// Question # 9

// var dollar = +prompt("Enter Dollars you have to convert in PKR") * 104.80;
// var riyal = +prompt("Enter riyals you have to convert in PKR") * 28;

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR : " + (dollar + riyal) + "Rs" + "<br />");

// Question # 10

// document.write((((+prompt("Enter a num to perform arithmetic operations") + 5) * 10) / 2));

// Question # 11

// var currentYear = 2023;
// var birthYear = +prompt("Enter your Birth Year to find your age");

// document.write("<h2>Age Calculator</h2>" + "<br />");
// document.write("Current year : " + currentYear + "<br />");
// document.write("Birth year : " + birthYear + "<br />");
// document.write("Your Age is : " + (currentYear - birthYear) + "<br />");

// Question # 12

// var radius = prompt("Enter the Radius of a Circle.");
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write("<h2>The Geometrizer</h2>");
// document.write("Radius of a Circle : " + radius + "<br />");
// document.write("The Circumference is : " + circumference + "<br />");
// document.write("The Area is : " + area + "<br />");

// Question # 13

// var CurrentAge = +prompt("Enter your current Age");
// var lastAge = +prompt("Enter your Max-Age you want to live");
// var snacksPerDay = 5;
// var favSnack = prompt("Enter your Favourite Snacks");

// document.write("<h2>The Lifetime Supply Calculator</h2>");
// document.write("Favourite Snacks : " + favSnack + "<br />")
// document.write("Your Current Age : " + CurrentAge + "<br />");
// document.write("Estimated Maximum Age : " + lastAge + "<br />");
// document.write("Amount of snacks per day for survive : " + snacksPerDay + "<br />");
// document.write("You will need " + (lastAge - CurrentAge) * snacksPerDay + favSnack + " snacks to last you until the ripe old age of " + lastAge + "<br />");

// ------------------------------------------------ Chapter no 6-9 -----------------------------------

// Question # 1

// var num = +prompt("Enter a Number");
// document.write("Result :" + "<br />");
// document.write("The Value of a is : " + num + "<br />");
// document.write("<hr />" + "<br />");
// ++num;
// document.write("The value of ++a is : " + num + "<br />");
// document.write("Now the value of is : " + num + "<br />");
// document.write("<br />");
// document.write("The value of a++ is : " + num + "<br />");
// num++;
// document.write("Now the value of is : " + num + "<br />");
// document.write("<br />");
// --num;
// document.write("The value of --a is : " + num + "<br />");
// document.write("Now the value of is : " + num + "<br />");
// document.write("<br />");
// document.write("The value of a-- is : " + num + "<br />");
// num--;
// document.write("Now the value of is : " + num + "<br />");

// Question # 2

// var num1 = +prompt("Enter value for a");
// var num2 = +prompt("Enter value for b");
// var Question = "--a - --b + ++b + b--"
// document.write("Value of a : " + num1 + ".<br />");
// document.write("Value of b : " + num2 + ".<br />");
// document.write("<b>Question</b> : " + Question + ".<br />");

// document.write("<b>Solution</b> : " + "<br />");
// var a = --num1;
// document.write("--a : " + a + ".<br />");
// var b = a - --num2;
// document.write("--a - --b : " + b + ".<br />");
// var c = b + ++num2;
// document.write("--a - --b + ++b : " + c + ".<br />");
// var d = c + num2--;
// document.write("--a - --b + ++b + b-- : " + d + ".<br />");
// document.write("<b>Result</b> : " + d + ".<br />");

// Question # 3

// var name = prompt("Enter your name");
// alert("Hello ! " + name);

// Question # 5

// var table = prompt("Enter a number for its Table.", 5);
// document.write("Table of " + table + "<br />");
// for (var i = 1; i <= 10; i++) {
//     document.write(table + " x " + i + " = " + (i * table) + "<br />");
// }

// Question # 6

// var sub1 = prompt("Enter your first Subject Name");
// var sub2 = prompt("Enter your Second Subject Name");
// var sub3 = prompt("Enter your Third Subject Name");
// var Marks1 = +prompt("Enter your " + sub1 + " obtained marks");
// var Marks2 = +prompt("Enter your " + sub2 + " obtained marks");
// var Marks3 = +prompt("Enter your " + sub3 + " obtained marks");
// var totalMarks = 100;
// var Percentage = (Marks1+Marks2+Marks3)/ 300 * 100;
// var totalObtainMarks = Marks1 + Marks2 + Marks3;

// document.write(
//     "<table>" +
//     "<tr>" +
//     "<td><b>Subject</b></td>" +
//     "<td><b>Total Marks</b></td>" +
//     "<td><b>Obtained Marks</b></td>" +
//     "<td><b>Percentage</b></td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>" + sub1 + "</td>" +
//     "<td>" + totalMarks + "</td>" +
//     "<td>" + Marks1 + "</td>" +
//     "<td>" + (Marks1 / totalMarks) * 100 + "%" + "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>" + sub2 + "</td >" +
//     "<td>" + totalMarks + "</td>" +
//     "<td>" + Marks2 + "</td>" +
//     "<td>" + (Marks2 / totalMarks) * 100 + "%" + "</td>" +
//     "</tr >" +
//     "<tr>" +
//     "<td>" + sub3 + "</td>" +
//     "<td>" + totalMarks + "</td>" +
//     "<td>" + Marks3 + "</td>" +
//     "<td>" + (Marks3 / totalMarks) * 100 + "%" + "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td><b>Result</b></td>" +
//     "<td><b>" + (totalMarks + totalMarks + totalMarks) + "</b></td>" +
//     "<td><b>" + totalObtainMarks + "</b></td>" +
//     "<td><b>" + Percentage + "%" + "</b></td>" +
//     "</tr>" +
//     "</table >");

// ------------------------------------------------ Chapter no 9-11 -----------------------------------

// Question # 1

// var city = prompt("Enter your city Name");

// if (city === "karachi") {
//     document.write("Welcome to city of lights");
// }else{
//     document.write("Welcome to"+" "+city )
// }

// Question # 2

// var gender = prompt("Enter your Gender (in small)", "male");

// if (gender === "male") {
//     document.write("Good Morning Sir.");
// } else if (gender === "female") {
//     document.write("Good Morning Ma'am.");
// } else {
//     document.write("Please enter a proper gender.");
// }

// Question # 3

// var signal = prompt("Enter a Signal color to know its Message.");
// if (signal==="red"){
//     document.write("Must Stop!")
// }else if(signal==="yellow"){
//     document.write("Ready to move.")
// }else if(signal==="green"){
//     document.write("Move Now")
// }else{
//     document.write("Please enter traffic signal color red,yellow or green")
// }

// Question # 4

// var fuel = +prompt("Enter Vehicle's Current Fuel (in liters and only numbers)");

// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// }
// else {
//     document.write("It should be Enough");
// }

// Question # 5

// (a)
// Alert Displayed
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// (b)
// Alert not Displayed because the given codition is false
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// (c)
// Alert Displayed on condtion 2 and 4
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// (d)
// Alert Displayed
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// (e)
// Alert Displayed true
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// (f)
// Alert Displayed
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Question # 6

// var Mark01 = +prompt("Enter First Subject Marks");
// var Mark02 = +prompt("Enter Second Subject Marks");
// var Mark03 = +prompt("Enter thrid Subject Marks");
// var givenMarks = 100;
// var totalMarks = givenMarks + givenMarks + givenMarks;
// var obtainedMarks = Mark01 + Mark02 + Mark03;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h2>Marks Sheet</h2>")
// document.write("Total Marks : " + totalMarks + "<br />")
// document.write("Marks obtained : " + obtainedMarks + "<br />")
// document.write("percentage : " + percentage + " % " + "<br />")
// if (percentage >= 80) {
//     document.write("Grade : A-one" + "<br />");
//     document.write("Remarks : Exellent" + "<br />");
// }
// else if (percentage >= 70) {
//     document.write("Grade : A" + "<br />");
//     document.write("Remarks : Good" + "<br />");
// }
// else if (percentage >= 60) {
//     document.write("Grade : B" + "<br />");
//     document.write("Remarks : You need to improve" + "<br />");
// }
// else {
//     document.write("Grade : Fail" + "<br />");
//     document.write("Remarks : Sorry" + "<br />");
// }

// Question # 7

// var secretnum = 10;
// var secretnum1= +prompt("Enter a number between (1-10)")
// if(secretnum === secretnum1){
//     alert("Bingo! Correct answer.")
// }else if(secretnum1 + 1 === secretnum){
//     alert("Close enough to the correct answer.");
// }else{
//     alert("Opps wrong guess")
// }

// Question # 8

// var num= +prompt("Enter a number to check if its divisible by 3")
// if(num % 3 === 0){
//     alert(num +" "+ "is divisible by 3")
// }else{
//     alert(num +" "+ "is not divisible by 3" )
// }

// Question # 9

// var num= +prompt("Enter a number to check if its even number or an odd number.")
// if(num % 2 === 0){
//     alert(num +" "+"is an even number")
// }else{
//     alert(num +" "+"is an odd number")
// }

// Question # 10

// var t=+prompt("Enter temperature in celcius")
// if(t>40){
//     document.write("It is too hot outside.")
// }else if(t>30){
//     document.write("The Weather today is Normal.")
// }else if(t>20){
//     document.write("Today’s Weather is cool.")
// }else if(t>10){
//     document.write("OMG! Today’s weather is so Cool.")
// }

// Question # 11

// var num1=+prompt("Enter the first number:")
// var num2=+prompt("Enter the second number:")
// var operation=prompt("Enter the operation (+, -, *, /, %):")
// if(operation === "+"){
//     document.write("Result:"+" "+(num1+num2));
// }else if (operation === "-"){
//     document.write("Result:"+" "+(num1-num2));
// }else if (operation === "*"){
//     document.write("Result:"+" "+(num1*num2));
// }else if (operation === "/"){
//     if(num2 === 0){
//         document.write("Division by zero is not allowed.");
//     }
//     else 
//     {
//     document.write("Result:"+" "+(num1/num2))
//     }
// }else if (operation === "%") {
//     if (num2 === 0) {
//       document.write("Modulo by zero is not allowed.");
//     } else {
//         document.write("Result:"+" "+(num1%num2))
//     }
//   } else {
//     document.write("Invalid operation. Please enter +, -, *, /, or %.");
//   }
