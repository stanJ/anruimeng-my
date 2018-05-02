$(function(){
	//预防性维护表管理table
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
		dataTitles:['维护表名称','设备名称','设备编号'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"}]
	}
	var tb = new tableBuilder("#table_id_yfxwhlbTab",data,op);
	utilObj.bindDeleteEvent(tb,'#btn_delete1');
	//新增规则按钮点击事件
	$('#btn_add').on('click',function(){
		change('新增信息');
	});
})
function modify(){
	change('编辑信息')
}
function change(title){
	var setKeyVal ={
			title:title					
		}
		modalBulider.modal('template_myaddwhbModal',setKeyVal);
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
			
		}
	];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['规则名称'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"checkdetail"},{text:"应用",eventname:"apply"}]
	}
	var tb = new tableBuilder("#table_id_rules",data1,op1);
}
//查看规则详情
function checkdetail(){
	var setKeyVal ={
		title:'规则详情',
		containerWidth:'0.7'
	};		
	modalBulider.modal('template_myRulesDetail',setKeyVal);
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"xcname1":   "$3,120",
			"type1":       "aaaa",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"xcname1":   "$3,120",
			"type1":       "aaaa",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"xcname1":   "$3,120",
			"type1":       "aaaa",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"xcname1":   "$3,120",
			"type1":       "aaaa",	
		}
	];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['设备类别','工作内容','标准、参数','单位','新工单提示','报警联系人提示'],
		hasCheckBox:false,
		//buttons:[{text:"查看",eventname:"checkdetail"}]
	}
	var tb1 = new tableBuilder("#table_id_rulesDetails",data1,op1);
	modalBulider.resize();
	
}