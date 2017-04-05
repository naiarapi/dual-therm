$(document).ready(function(){
        
    $('#scroll').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	 AOS.init();
});