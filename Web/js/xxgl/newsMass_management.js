$(function(){
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['消息时间','摘要','群发数'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"NewsMassDetail"}]
	}
	var tb = new tableBuilder("#table_id_NewsMass",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增按钮点击事件
	$('#btn_add').on('click',function(){ 
		var setKeyVal ={
			title:'新增信息'					
		}
		modalBulider.modal('template_newsaddMassModal',setKeyVal);		
	});
});
//消息详情
function NewsMassDetail(){
	var setKeyVal ={
		title:'消息详情'					
	};
	modalBulider.modal('template_newsMassDetailModal',setKeyVal);
}