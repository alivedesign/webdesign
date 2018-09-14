$(function(){
	$('#add_delo').click(function(){
		var name = $('#name').val();
		var description = $('#description').val();
		var newElement = $('<div class="delo"><div class="continr"><p></p><img src="img/close.png" alt="крестик" class="close"><span class="arrow"></span><p class="description"></p></div></div>')
		$('.all_dela').prepend(newElement);
		$('.delo > .continr > p').first().text(name);
		$('.delo > .continr > .description').first().text(description);
	});


	$(document).on('click','.close', function(){
		$(this).parent().parent().remove();
	});

	$(document).on('click','.arrow', function(){
		$(this).next().toggleClass("invisible");
		$(this).toggleClass("status");
	});

	// $('.arrow').click(function(){
	// 	$(this).next().toggleClass("invisible");
	// 	$(this).toggleClass("status");
	// });
});