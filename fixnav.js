$.fn.fixnav = function(){
	var $_this = $(this),
		prev_marginBottom = parseInt($_this.prev().css("margin-bottom")),
		next_marginTop = parseInt($_this.next().css("margin-top")),
		topPosition = $(document).scrollTop(),
		navPosition = $_this.prev().outerHeight(true);
	
	_if();

	$(document).scroll( function() {
		topPosition = $(document).scrollTop();
		_if();
	});

	$(window).resize(function(){ 
		navPosition = $_this.prev().outerHeight(true);
		_if();
	}); 

	function _if(){
		if (topPosition >= navPosition){
			$_this.css("position", "fixed");
			$_this.next().css("margin-top", prev_marginBottom + $_this.outerHeight() + next_marginTop + "px");
		}else{
			$_this.css("position", "relative");
			$_this.next().css("margin-top", next_marginTop + "px");
		}
	}
}
