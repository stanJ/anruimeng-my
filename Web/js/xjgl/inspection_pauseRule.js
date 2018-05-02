$(function(){
	//暂停规则管理table
	var data =[{
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
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['规则名称','允许暂停时间','次数'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"}]
	}
	var tb = new tableBuilder("#table_id_pauseruleTab",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增/编辑规则
	$("#btn_add").on("click",function(){
		change('新增规则')
	})
})
function modify(){
	change('编辑规则')
}
function change(title){
	var setKeyVal ={
		title:title				
	}
	modalBulider.modal('template_myaddpauserules',setKeyVal);
}
