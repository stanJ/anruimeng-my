$(function(){
	var id = utilObj.getUrlParam('modify');
	if(id){
		$(".nav-text-second").text('编辑设备信息');
		$(".arm-title-text").text('编辑设备信息');
	}else{
		$(".nav-text-second").text('新增设备信息');
		$(".arm-title-text").text('新增设备信息');
	}
	//设备维修工单历史记录table
	var data3 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		}
	];
	var op3={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['物料名称','更换状态','物料编号','时间',],
		hasCheckBox:true,
		//buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb3 = new tableBuilder("#table_id_equipmentTab",data3,op3);
	
	//设备维修工单历史记录table
	var data4 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		}
	];
	var op4={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['物料名称','更换状态','物料编号','时间',],
		hasCheckBox:true,
		//buttons:[{text:"查看",eventname:"chakan"}]
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