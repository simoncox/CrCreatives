$(document).ready(function(){ // let's go!

		$('.yellowswitch').html('<a id="missyellow" href="#" title="Miss the yellow?">Miss the yellow?</a>');
		
		$("#missyellow").click(function() {
			event.preventDefault();
			$('div.anystretch').fadeOut('fast', function(){ $('div.anystretch').remove(); });
			$('a#missyellow').css("color", "#000");
		});
});