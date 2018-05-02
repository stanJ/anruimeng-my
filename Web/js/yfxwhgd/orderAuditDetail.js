$(function(){
	$("#btn_nopass_1").click(function(){
		var setKeyVal ={
			title:'请输入审核不通过原因'					
		}
		modalBulider.modal('template_nopass',setKeyVal);
	})
	//维保表
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
		}
	];
	var op={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['设备类别名称','周期','工作内容','标准','参数','单位','工作类型','填写参数','是否符合要求','不符合原因'],
		hasCheckBox:false,
		//buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb = new tableBuilder("#table_id_yfxwbtab",data1,op);
	
	//日志
	var data2 =[{
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
	var op2={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['时间','内容','执行人'],
		hasCheckBox:false,
		//buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb2 = new tableBuilder("#table_id_logtab",data2,op2);
	
	//反馈表
	var data3 =[{
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
	var op3={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['类型','名字','工号','反馈内容','反馈时间','是否回复','回复时间'],
		hasCheckBox:false,
		buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb3 = new tableBuilder("#table_id_feedbacktab",data3,op3);
})