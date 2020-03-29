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
// todo: mk bg img have overlay with opacity
// todo: mk bg img greyscale
// todo: mk bg have tv noise
