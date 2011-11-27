$(function() {
	// Vertically center products in a 184px heigh row.
	$('.product').each(function() {
		var pad = (184 - $(this).height()) / 2;
		$(this).css('padding-top', String(pad) + 'px');
	});
});