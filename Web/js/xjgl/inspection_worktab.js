$(function(){
	//巡检工作表管理table
	var data =[{
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
		},
		{
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
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['巡检表名称','类型','设备名称','设备编号'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"}]
	}
	var tb = new tableBuilder("#table_id_workTab",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增/编辑巡检表
	$("#btn_add").on("click",function(){
		change('新增巡检表')
	})
})
function modify(){
	change('编辑巡检表')
}
function change(title){
	var setKeyVal ={
		title:title				
	}
	modalBulider.modal('template_myaddworktabs',setKeyVal);
	var data =[{
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
		}
	];
	var op={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['规则名称','状态'],
		hasCheckBox:false,
		buttons:[{text:"应用",eventname:"apply"},{text:"查看",eventname:"CheckRulesFun"}]
	}
	var tb = new tableBuilder("#table_id_workrulesTab",data,op);
	modalBulider.resize();
}
//查看规则详情
function CheckRulesFun(){
	var setKeyVal ={
		title:'规则详情',
		containerWidth:'0.7'
	}
	modalBulider.modal('template_myCheckRulesDetail',setKeyVal);
	var data =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xcname1":   "$3,120",
		}
	];
	var op={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['设备类别','工作内容','标准、参数','单位','新工单提示','报警联系人提示'],
		hasCheckBox:false,
		//buttons:[{text:"",eventname:""}]
	}
	var tb = new tableBuilder("#table_id_checkRulesList",data,op);
	modalBulider.resize();
}