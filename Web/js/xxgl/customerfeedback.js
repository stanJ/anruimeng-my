$(function(){
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
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['最后一次反馈时间','工单号','客户姓名','联系电话','状态'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"feedbackDetail"}]
	}
	var tb = new tableBuilder("#table_id_customer",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
})
//反馈详情
function feedbackDetail(){
	var setKeyVal ={
		title:'消息详情'
	};
	modalBulider.modal('template_customerDetailModal',setKeyVal);
}