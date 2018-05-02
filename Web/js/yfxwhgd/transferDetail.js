$(function(){
	$("#btn_nopass_1").click(function(){
		var setKeyVal ={
			title:'请输入审核不通过原因'					
		}
		modalBulider.modal('template_nopass',setKeyVal);
	})
	//日志
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
		//buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb = new tableBuilder("#table_id_logtab",data,op);
	
	//反馈表
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",			
		}
	];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['类型','名字','工号','反馈内容','反馈时间','是否回复','回复时间'],
		hasCheckBox:false,
		buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb1 = new tableBuilder("#table_id_feedbacktab",data1,op1);
})