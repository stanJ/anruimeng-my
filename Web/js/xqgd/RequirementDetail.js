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
	//申请列表table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
		}
	];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['物料大类','物料小类','物料名称','规格','数量','单位','类型','提报时间','状态'],
		hasCheckBox:false,
		buttons:[{text:"查看",eventname:"checkprocess"}]
	}
	var tb1 = new tableBuilder("#table_id_applytab",data1,op1);
	
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
	
	//设备维修工单历史记录table
	var data3 =[{
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
	var op3={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['工单号','提报时间','服务种类','派发时间','完成时间','是否准时','状态'],
		hasCheckBox:false,
		//buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb3 = new tableBuilder("#table_id_equipmentTab",data3,op3);
	
	//设备维修工单历史记录table
	var data4 =[{
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
	var op4={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['知识库名称','知识库类别','文档格式'],
		hasCheckBox:false,
		buttons:[{text:"查看",eventname:"checkDocDetail"}]
	}
	var tb4 = new tableBuilder("#table_id_knowledgeTab",data4,op4);
	
})
//查看反馈详情
function checkFeedBack(){
	var setKeyVal ={
		title:'反馈详情'					
	}
	modalBulider.modal('template_requirementOrderDetail',setKeyVal);
}

//查看流程详情
function checkprocess(){
	var setKeyVal ={
		title:'流程详情'					
	}
	modalBulider.modal('template_processDetail',setKeyVal);
}

//查看配件详情
function checkDocDetail(){
	var setKeyVal ={
		title:'配件详情',
		containerWidth:'0.7'
	}
	modalBulider.modal('template_partsDetail',setKeyVal);
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
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['配件名称','更换状态','配件编号'],
		hasCheckBox:false,
		//buttons:[{text:"查看文档详情",eventname:"checkDocDetail"}]
	}
	var tb1 = new tableBuilder("#table_id_partstab",data1,op1);
}