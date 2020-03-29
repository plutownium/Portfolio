// Grab the elements on the page.
// let button = document.querySelector("#toggleButton");
// let slide = document.querySelector(".slide");

// // Add event listeners.
// button.addEventListener(
// 	"click",
// 	() => {
// 		slide.setAttribute("class", "slide slideIn");
// 	},
// 	false
// );

// slide.addEventListener(
// 	"click",
// 	() => {
// 		slide.setAttribute("class", "slide slideOut");
// 	},
// 	false
// );

// let button2 = document.querySelector("#anotherToggle");
// let slide2 = document.querySelector(".test-div");

// button2.addEventListener(
// 	"click",
// 	() => {
// 		slide2.setAttribute("class", ".test-div s-in");
// 	},
// 	false
// );

// slide2.addEventListener(
// 	"click",
// 	() => {
// 		slide2.setAttribute("class", "test-div s-out");
// 	},
// 	false
// );

// ~*~*~*~*~*~**~*~*~

let blackStuff = document.getElementById("blackness");

window.addEventListener(
	"load",
	() => {
		console.log("loaded");
		blackStuff.setAttribute("class", "black-box-out");
	},
	false
);

// *~*~*~*~*~*~*~*~
