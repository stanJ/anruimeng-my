$(function(){
	//日志table
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
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['时间','内容','执行人'],
		hasCheckBox:false,
		//buttons:[{text:"查看详情",eventname:"checkDetail"}]
	}
	var tb = new tableBuilder("#table_id_logtab",data,op);
	
	//反馈列表table
	var data2 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		}
	];
	var op2={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['类型','名字','工号','反馈内容','反馈时间','是否回复','回复时间'],
		hasCheckBox:false,
		buttons:[{text:"查看详情",eventname:"checkFeedBack"}]
	}
	var tb2 = new tableBuilder("#table_id_feedbacktab",data2,op2);
	$("#btn_nopass_1").click(function(){
		var setKeyVal ={
			title:'请输入审核不通过原因'					
		}
		modalBulider.modal('template_nopass',setKeyVal);
	})
})
//查看反馈详情
function checkFeedBack(){
	var setKeyVal ={
		title:'反馈详情'					
	}
	modalBulider.modal('template_workOrderDetail',setKeyVal);
}