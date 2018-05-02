$(function(){
	$('#btn_model').on('click',function(){ 				
		modalBulider.modal('template_myModal',null);		
		
	});
	
	//二次弹框
	$('body').on('click','#aaa',function(){
		var setKeyVal ={
			containerWidth:0.5					
		}
		modalBulider.modal('template_myModal1',setKeyVal);					
	});
	
	//消息展示
	$('#btn_message').on('click',function(){ 				
		utilObj.showMessage({
			type:utilObj.showMessageType['msg-success'],
			body:'xxxxxxx成功了'
		});
	});
	
	//提示
	$('#btn_alert').on('click',function(){ 				
		utilObj.alert("我是提示框");
	});
	
	//confirm
	$('#btn_confirm').on('click',function(){ 
		var option={
			body: '是否确认删除？',
			okHide:function(){
				console.log("ok");
			},
			cancelHide:function(){
				console.log("cancel");
			}
		};
		utilObj.confirm(option);
	});
	
});
