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

// TODO: mk bg img resize to different devices (use media query?)
// todo: mk bg img darken as scroll gets lower

// FIXME: 5ish px white border around top and left side of page
