// Grab the elements on the page.
let button = document.querySelector("#toggleButton");
let slide = document.querySelector(".slide");

// Add event listeners.
button.addEventListener(
	"click",
	() => {
		slide.setAttribute("class", "slide slideIn");
	},
	false
);

slide.addEventListener(
	"click",
	() => {
		slide.setAttribute("class", "slide slideOut");
	},
	false
);
