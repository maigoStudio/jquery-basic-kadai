$("#change-color").click(function() {
	$("#target").css("color", "red");
});

$("#change-text").click(function() {
	$("#target").text("Hello!");
});

$("#fade-out").click(function() {
	$("#target").fadeOut(1000);
});

$("#fade-in").click(function() {
	$("#target").fadeIn(1000);
});