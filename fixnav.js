$.fn.fixnav = function() {
	$(this).prev_marginBottom = parseInt($(this).prev().css("margin-bottom").substring(0, $(this).prev().css("margin-bottom").length - 2));
	$(this).next_marginTop = parseInt($(this).next().css("margin-top").substring(0, $(this).next().css("margin-top").length - 2));
	var topPosition = $(document).scrollTop();
	var navPosition = $(this).prev().outerHeight(true);
	fix();
	$(document).scroll(function() {
		topPosition = $(document).scrollTop();
		fix()
	});
	$(window).resize(function() {
		navPosition = $(this).prev().outerHeight(true);
		fix()
	});
	function fix() {
		if(topPosition >= navPosition) {
			$(this).css("position", "fixed");
			$(this).next().css("margin-top", $(this).prev_marginBottom + $(this).outerHeight() + $(this).next_marginTop + "px")
		} else {
			$(this).css("position", "relative");
			$(this).next().css("margin-top", $(this).next_marginTop + "px")
		}
	}
};