$(function(){
	$("form").submit(function(e){
		e.preventDefault();
	})
	$("#btn_add1-4").click(function(){
		var setKeyVal ={
			title:'确认'					
		}
		modalBulider.modal('template1',setKeyVal);
	})
	loadTree('#tree1');
})
