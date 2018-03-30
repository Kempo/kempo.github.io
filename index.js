/** random color library: https://github.com/davidmerfield/randomColor **/

let index = 0;
const t = ["high schooler", "pet lover", "food enthusiast", "basketball player", "programmer"];

$(document).ready(function() {
	var interval = window.setInterval(transitionTitles, 3000);
});

function transitionTitles() {
	const newTitle = t[index];

	setTitle(newTitle);
	const lastItem = t.length - 1;
	if(index != lastItem) {
		index += 1;
	}else if(index == lastItem) {
		index = 0;
	}
}

function setTitle(title) {
	$("#title").css("border-bottom-color", "black");

	$("#title").animate({"opacity": 0}, 500, function() {
		$("#title").css("color", randomColor({
		luminosity: 'bright'	
		}));
		$(this).text(title).animate({"opacity": 1}, 500);
	})
}
