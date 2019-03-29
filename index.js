/** random color library: https://github.com/davidmerfield/randomColor **/

let titleIndex = 0;
const t = ["student", 
		"dog lover", 
		"foodie", 
		"basketball player", 
		"programmer", 
		"movie watcher", 
		"dreamer",
		"reader",
		"brother"];

$(document).ready(function() {
	setWidth();
	startLoading();
	window.setInterval(transitionTitles, 3000);
	//window.setInterval(generateBackground, 3000);
});

$(window).resize(function() {
	setWidth(); // not called on a mobile device
});

function setWidth() {
	let maxWidth = 0;
	t.forEach(function(title) {
		let textLength = ("I am a " + title + ".");
		$("#ruler").text(textLength);
		let width = $("#ruler").outerWidth();
		if(width > maxWidth) {
			maxWidth = width;
		}
	});
	if(maxWidth > 0 && !isMobileDevice()) { // set the width only if it isn't on mobile.
		$("#centerpiece").css("width", (maxWidth + 10));
		console.log("max length= " + maxWidth);
	}
}

function startLoading() {
	if(!isMobileDevice()) {
		$("#loading").animate({"width": 100}, 3000, function() {
			$("#loading").css("background-color", "green");
			$("#loading").animate({"width": 0}, 1000);
		});
	}
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
			luminosity: 'dark',
			format: 'rgba',
			alpha: 1.0
		}));
		$(this).text(title).animate({"opacity": 1}, 500);
	})
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
};

function generateBackground() {
	$(".main-body").css("background-color", randomColor({
		luminosity: 'light',
		format: 'rgba',
		alpha: 0.1
	}));
}
