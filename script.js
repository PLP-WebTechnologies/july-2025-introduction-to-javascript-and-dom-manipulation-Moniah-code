
// PART 1: Variables and Conditionals


let age = 20;
let name = "Monicah";

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is not an adult.");
}


// PART 2: Custom Functions


// Function 1: Greet user
function greetUser(userName) {
    console.log("Hello, " + userName + "!");
}

// Function 2: Calculate square of a number
function squareNumber(num) {
    return num * num;
}

greetUser(name);
console.log("Square of 5 is:", squareNumber(5));


// PART 3: Loops


// Loop Example 1: for loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// Loop Example 2: while loop
let j = 1;
while (j <= 3) {
    console.log("While loop iteration:", j);
    j++;
}


// PART 4: DOM Interactions


// DOM Interaction 1: Change text on button click
const changeTextBtn = document.getElementById("change-text-btn");
const textElement = document.getElementById("text");

changeTextBtn.addEventListener("click", function () {
    textElement.textContent = "Or Software Engineer";
});
const text = document.getElementById("text");
const button = document.getElementById("color-btn");
button.addEventListener("click", function() {
    text.style.color = "blue";
});


// DOM Interaction 2: Add items to a list
const list = document.getElementById("list");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
}

// DOM Interaction 3: Change background color on hover
textElement.addEventListener("mouseover", function () {
    textElement.style.backgroundColor = "yellow";
});
textElement.addEventListener("mouseout", function () {
    textElement.style.backgroundColor = "";
});