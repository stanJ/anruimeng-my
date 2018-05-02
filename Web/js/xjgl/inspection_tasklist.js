$(function(){
	seajs.use('switch',function(){
		$(".switch1").simpleSwitch({
			"theme": "FlatCircular"
		});
	})
	bindEvent()
	//巡检任务管理table
	var data =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['线路名称','开始时间','类型','完成时间','是否准时','状态'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"checktaskdetail"}]
	}
	var tb = new tableBuilder("#table_id_tasklistTab",data,op);
	$("#auto-distribute").click(function(){
		$('.distribute-groups-wrapper').show();
	})
	
})
function bindEvent(){
	$('.distribute-groups').on('click','li',function(){
		$('.distribute-groups>li').removeClass('active');
		$(this).addClass('active')
	})
	$(".distribute-action").click(function(){
		$('.distribute-groups-wrapper').hide();
	})
}
//查看巡检任务详情
function checktaskdetail(){
	var setKeyVal ={
		title:'巡检任务详情',
		containerWidth:'0.7'
	};		
	modalBulider.modal('template_mychecktaskdetail',setKeyVal);
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
		}
	];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['巡检点名称','应到达时间','实际到达时间','允许偏差时间','是否准时'],
		hasCheckBox:false,
		buttons:[{text:"查看照片",eventname:"checkphotolist"},{text:"查看巡检点表",eventname:"checkinspectionlist"}]
	}
	var tb1 = new tableBuilder("#table_id_taskDetailTab",data1,op1);
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
		dataTitles:['暂停时间','巡检点名称','原因'],
		hasCheckBox:false,
		//buttons:[{text:"",eventname:""}]
	}
	var tb2 = new tableBuilder("#table_id_taskpauseTab",data2,op2);
	modalBulider.resize();
	
}

//查看照片

function checkphotolist(){
	var setKeyVal ={
		title:'查看照片'					
	}
	modalBulider.modal('template_mycheckphoto',setKeyVal);
}

//查看巡检点表
function checkinspectionlist(){
	var setKeyVal ={
		title:'巡检表列表',
		containerWidth:'0.7'
	}
	modalBulider.modal('template_mycheckinspection',setKeyVal);
	var data3 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
		}
	];
	var op3={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['巡检表名称','类型','状态'],
		hasCheckBox:false,
		buttons:[{text:"查看巡检检查项",eventname:"checkinspectionItem"}]
	}
	var tb3 = new tableBuilder("#table_id_inspecionTab",data3,op3);	
	modalBulider.resize();
}

//查看巡检检查项
function checkinspectionItem(){
	var setKeyVal ={
		title:'巡检检查项',
		containerWidth:'0.7'
	}
	modalBulider.modal('template_mycheckinspectionitem',setKeyVal);
	var data4 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"username2": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"username2": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"username2": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"username2": "aaaa",
		}
	];
	var op4={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['设备类别','设备名称','工作内容','标准、参数','单位','类型','填写参数','是否符合要求','原因'],
		hasCheckBox:false,
		//buttons:[{text:"",eventname:""}]
	}
	var tb4 = new tableBuilder("#table_id_inspecionItem",data4,op4);
	modalBulider.resize();
}