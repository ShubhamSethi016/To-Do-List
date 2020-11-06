$("ul").on("click","li",function(){
	$(this).toggleClass("design");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
		var newlist=$(this).val();
		$(this).val(" ");
		$("ul").append("<li>"+"<span><i class='fa fa-minus-circle'></i></span> "+ newlist+"</li");			
		$("ul").slideDown();		
	}
});

$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
});

$("#toggle").on("click",function(){
	$("ul").slideToggle();
});

$("#clear").on("click",function(){
	alert("All the items are deleted!");
	$("li").css("display","none");
});

$("li").on("click","span",function(){

});




