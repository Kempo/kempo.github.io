let index = 0;
const t = ["high schooler", "hoodie lover", "food enthusiast", "basketball player", "programmer"];

$(document).ready(function() {
	var interval = window.setInterval(transitionTitles, 5000);
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
	$("#title").css("color", randomColor(0));
	$("#title").css("border-bottom-color", "black");
	$("#title").text(title);
}

/** credits to David Mihal **/
function randomColor(brightness){
  function randomChannel(brightness){
    var r = 255-brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length==1) ? '0'+s : s;
  }
  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}