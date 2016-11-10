$('.edit-title').bind('click',function(){
	$('.edit-title').hide()
	$('.edit-form').show()
	// $('#presentation').bind('click',function(){
	// 	$('.edit-title').hide()
	// })
})

$('.type1').bind('click',function(){
	$('.edit-title1').show()
	$('.edit-subtitle').show()
	$('.edit-content2').show()
	$('.edit-content').hide()
})
$('.type2').bind('click',function(){
	$('.edit-title1').show()
	$('.edit-content2').show()
	$('.edit-subtitle').hide()
	$('.edit-content').hide()
})
$('.type3').bind('click',function(){
	$('.edit-title1').show()
	$('.edit-content').show()
	$('.edit-subtitle').hide()
	$('.edit-content2').hide()
})