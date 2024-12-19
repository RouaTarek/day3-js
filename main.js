// task1
function sumUserInput() {
  var sum = 0;
  var input;
  do {
    input = Number(prompt("Enter a number (Enter 0  to stop):"));

    if (isNaN(input)) {
      alert("Invalid input. Please enter a valid number.");
    } else if (input === 0) {
      break; 
    } else if (sum + input > 100) {
      alert("Sum exceeds 100. Stopping input" );
      break; 
    } else {
      sum += input; 
    }
  } while (true);
  document.body.innerHTML = `<div> <h2 style="color:${chosenColor};"> The sum of the entered numbers is:  ${sum} </h2><br>
<button onclick="enterMesg()" style="color:${chosenColor}; border-color:${chosenColor};" >click to enter message</button></div>`;
}



// task2
alert("Welcome to my site!");
  var userName = prompt("Please enter your name:");
  var userColor = prompt("Please choose a color (red, green, or blue):").toLowerCase();
  var isValidColor = false;
  var chosenColor = "";

  if (userColor === "red") {
      chosenColor = "red";
      isValidColor = true;
  } else if (userColor === "green") {
      chosenColor = "green";
      isValidColor = true;
  } else if (userColor === "blue") {
      chosenColor = "blue";
      isValidColor = true;
  } else {
      alert("Invalid color choice. Defaulting to black.");
      chosenColor = "black";
  }
  document.body.innerHTML = `<div> <h1 style="color:${chosenColor};">Welcome, ${userName}!</h1>
  <button onclick="sumUserInput()" style="color:${chosenColor}; border-color:${chosenColor};" >click to sum</button><br>
<button onclick="enterMesg()" style="color:${chosenColor}; border-color:${chosenColor};" >click to enter message</button> </div> `;


// task3
function enterMesg(){
const message = prompt("Please enter your message:");
if (message === null) {
  alert("No message entered.");
} else {
    var headingsHTML = "";
    for (var i = 1; i <= 6; i++) {
      headingsHTML += `<h${i} style="color:${chosenColor};" >${message}</h${i}>`;
    }
    document.body.innerHTML = `<div> ${headingsHTML}
    <button onclick="sumUserInput()" style="color:${chosenColor}; border-color:${chosenColor};" >click to sum</button></div>`;
  }
}