/** random color library: https://github.com/davidmerfield/randomColor **/

let titleIndex = 0;
const t = ["high schooler", "pet lover", "foodie", "basketball player", "programmer"];

$(document).ready(function() {
	setWidth();
	window.setTimeout(hideLoading, 3000);
	window.setInterval(transitionTitles, 3000);
	window.setInterval(generateBackground, 3000);
});

function setWidth() {
	let maxWidth = 0;
	t.forEach(function(title) {
		let textLength = ("I am a " + title + ".");
		$("#ruler").text(textLength);
		let width = $("#ruler").outerWidth();
		console.log("width= " + width);
		if(width > maxWidth) {
			maxWidth = width;
		}
	});
	if(maxWidth > 0) {
		$("#centerpiece").css("width", (maxWidth + 5));
	}
	console.log("max length= " + maxWidth);
}

function hideLoading() {
	$("#load").animate({"opacity": 0}, "fast");
}

function transitionTitles() {
	const newTitle = t[titleIndex];

	setTitle(newTitle);
	const lastItem = t.length - 1;
	if(titleIndex != lastItem) {
		titleIndex += 1;
	}else if(titleIndex == lastItem) {
		titleIndex = 0;
	}
}

function setTitle(title) {
	$("#title").css("border-bottom-color", "black");

	$("#title").animate({"opacity": 0}, 500, function() {
		$("#title").css("color", randomColor({
		luminosity: 'dark'	
		}));
		$(this).text(title).animate({"opacity": 1}, 500);
	})
}

function generateBackground() {
	$(".main-body").css("background-color", randomColor({
		luminosity: 'light',
		format: 'rgba',
		alpha: 0.1
	}));
}
