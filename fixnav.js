$.fn.fixnav = function() {
	$_this = $(this);
	$_this_prev_marginBottom = parseInt($_this.prev().css("margin-bottom").substring(0, $_this.prev().css("margin-bottom").length - 2));
	$_this_next_marginTop = parseInt($_this.next().css("margin-top").substring(0, $_this.next().css("margin-top").length - 2));
	_topPosition = $(document).scrollTop();
	_navPosition = $_this.prev().outerHeight(true);
	fix();
	$(document).scroll(function() {
		_topPosition = $(document).scrollTop();
		fix()
	});
	$(window).resize(function() {
		_navPosition = $_this.prev().outerHeight(true);
		fix()
	});

	function fix() {
		if(_topPosition >= _navPosition) {
			$_this.css("position", "fixed");
			$_this.next().css("margin-top", $_this_prev_marginBottom + $_this.outerHeight() + $_this_next_marginTop + "px")
		} else {
			$_this.css("position", "relative");
			$_this.next().css("margin-top", $_this_next_marginTop + "px")
		}
	}
};