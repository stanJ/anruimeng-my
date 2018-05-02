$(function(){
	//巡检线路管理table
	var data =[{
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
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['巡检线路名称','到达时间集','是否允许暂停','默认分组','是否启用'],
		hasCheckBox:true,
		buttons:[{text:"巡检点信息",eventname:"checktaskdetail"},{text:"编辑",eventname:"modify"}]
	}
	var tb = new tableBuilder("#table_id_circuitlistTab",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增巡检线路点击事件
	$('#btn_add').on('click',function(){
		change('新增巡检线路')
	});
})
function modify(){
	change('编辑巡检线路')
}
function change(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template_myaddcircuit',setKeyVal);
	var data1 =[{
		"username": "aaaa",
	},
	{
		"username": "aaaa",
	},
	{
		"username": "aaaa",
	},
	{
		"username": "aaaa",
	}];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['巡检时间'],
		hasCheckBox:true,
		//buttons:[{text:"",eventname:""}]
	}
	var tb1 = new tableBuilder("#table_id_circuitinfotab",data1,op1);
	
	var data2 =[{
		"username": "aaaa",
		"xmname":   "System ",
	},
	{
		"username": "aaaa",
		"xmname":   "System ",
	},
	{
		"username": "aaaa",
		"xmname":   "System ",
	},
	{
		"username": "aaaa",
		"xmname":   "System ",
	}];
	var op2={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['规则名称','允许暂停时间'],
		hasCheckBox:true,
		//buttons:[{text:"巡检点信息",eventname:"checktaskdetail"}]
	}
	var tb2 = new tableBuilder("#table_id_pauseruleTab",data2,op2);
	modalBulider.resize();
}
//巡检点信息
function checktaskdetail(){
	location.href="inspection_pointInfo.html";
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
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
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
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['设备类别','设备名称','工作内容','标准、参数','单位','类型','填写参数','是否符合要求','原因'],
		hasCheckBox:false,
		//buttons:[{text:"",eventname:""}]
	}
	var tb4 = new tableBuilder("#table_id_inspecionItem",data4,op4);
	modalBulider.resize();
}