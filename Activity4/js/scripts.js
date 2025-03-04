document.addEventListener("DOMContentLoaded", function() {
var user = "Gamer";
var salutation = "Welcome";
var greeting = salutation + ", " + user + "!";
var greetingEl = document.getElementById("greeting");
greetingEl.textContent = greeting;

//product price and student price
var productPrice = 699.99;
var studentDiscount = 0.15;
var studentPrice = productPrice * (1 - studentDiscount);
var priceEl = document.getElementById("price");
var studentPriceEl = document.getElementById("student-price");
priceEl.textContent = "Price: $" + productPrice.toFixed(2);
studentPriceEl.textContent = "Student Price: $" + studentPrice.toFixed(2);
});