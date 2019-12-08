
$(document).ready(function() {
	
    
    /* ===== Smooth scrolling ====== */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});

	});
	
    
    

});