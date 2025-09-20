/* =============================
   Part 2: Functions, Scope, Parameters, Return Values
============================= */

// Global variable
let globalMessage = "Hello from Global Scope!";

// Function with parameter + return
function square(num) {
  return num * num;
}

// Function using local scope + return
function addNumbers(a, b) {
  let result = a + b; // local variable
  return result;
}

// Function demonstrating global vs local scope
function showSquare(num) {
  let output = square(num); // call reusable function
  document.getElementById("function-result").textContent =
    `${globalMessage} ${num}² = ${output}`;
}

function showSum(x, y) {
  let sum = addNumbers(x, y);
  document.getElementById("function-result").textContent =
    `${x} + ${y} = ${sum}`;
}

/* =============================
   Part 3: Combining CSS + JavaScript
============================= */

const triggerBox = document.querySelector(".trigger-box");
const animateBtn = document.getElementById("animate-btn");
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggle-modal");

// Function to toggle box animation
function animateBox() {
  triggerBox.classList.toggle("animate");
}
animateBtn.addEventListener("click", animateBox);

// Function to open/close modal
function toggleModal() {
  modal.classList.toggle("show");
}
toggleModalBtn.addEventListener("click", toggleModal);

// Separate reusable function
function closeModal() {
  modal.classList.remove("show");
}
