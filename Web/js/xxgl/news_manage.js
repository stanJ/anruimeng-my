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
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['用户姓名','工号','消息数'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"NewsList"}]
	}
	var tb = new tableBuilder("#table_id_News",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
});
//消息详情
function NewsList(){
	var setKeyVal ={
		title:'消息列表'					
	};
	modalBulider.modal('template_newsListModal',setKeyVal);
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			
		}
	];
	var op={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['消息时间','任务编号','消息类型','内容','状态'],
		hasCheckBox:false,
		//buttons:[{text:"查看",eventname:"NewsList"}]
	}
	var tb = new tableBuilder("#table_id_NewsList",data1,op);
	modalBulider.resize();
}