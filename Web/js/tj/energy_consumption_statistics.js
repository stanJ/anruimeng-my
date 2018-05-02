$(function(){
	seajs.use('tj_public');
	$(".checkbox-pretty").off("click");
	$(".block1-1").on("click",function(e){
		var $checkbox = $(this).find("label").checkbox();
		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$(this).addClass("close");
			$checkbox.checkbox("uncheck");
			$(this).next().hide();
		}else{
			$(this).removeClass("close");
			$(this).addClass("open");
			$checkbox.checkbox("check");
			$(this).next().show();
		}
		
		
	});
})
