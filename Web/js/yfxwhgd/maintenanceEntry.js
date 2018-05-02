$(function(){
	//预防性维护项管理table
	var data =[

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
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['系统','设备','设备类别','维护项数量','默认处理组','复查比例','要求完成时间','复查要求完成时间','强制阅读须知'],
		hasCheckBox:true,
		buttons:[{text:"上传设备",eventname:"upload1"},{text:"新增规则",eventname:"addRule"},{text:"查看",eventname:"check"}]
	}
	var tb = new tableBuilder("#table_id_whxEntryTab",data,op);
	//导入模板按钮点击事件
	$('#btn_import').on('click',function(){
		//导入结果table
		var data1 =[{
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
		];
		var setKeyVal ={
			title:'导入模板',
			shown:function(){
				var op = {
					dataTitles:['系统','设备','设备类别','频率','工作内容','标准参数','单位','是否预警','导入结果'],
					tableHeight:'100px',
					scrollBottom:"bottom",
					setting: {}
				}				
				var tb1 = new tableBuilder("#table_id_importmaintenance",data1,op);
				modalBulider.resize();
			}															
		}
		modalBulider.modal('template_mymaintenanceImport',setKeyVal);
	});
})
function upload1(){
	var data1 =[{
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
	];
	var setKeyVal ={
		title:'设备导入',
		shown:function(){
			var op = {
				dataTitles:['设备名称','设备编码','设备等级','生产厂家','设备位置','导入结果',],
				tableHeight:'100px',
				scrollBottom:"bottom",
				setting: {}
			}				
			var tb1 = new tableBuilder("#table_id_importmaintenance",data1,op);
			modalBulider.resize();
		}															
	}
	modalBulider.modal('template1',setKeyVal);
}
function addRule(){
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",

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
			
		},
	];
	var setKeyVal ={
		title:'新增规则',
		shown:function(){
			var op = {
				dataTitles:['设备类别','周期','工作内容','标准','参数','单位','工作类型','预警'],
				hasCheckBox:true,
				tableHeight:'150px',
//				scrollBottom:"bottom",
				setting: {}
			}				
			var tb1 = new tableBuilder("#table_id_importmaintenance",data1,op);
			modalBulider.resize();
		}															
	}
	modalBulider.modal('template2',setKeyVal);
}
function check(){
	var data1 = [ {
		"username" : "aaaa",
		"xmname" : "System ",
		"xcname" : "$3,120",
		"type" : "aaaa",
		"username1" : "aaaa",
		"xmname1" : "System ",
		"xcname1" : "$3,120",
		"type1" : "aaaa",

	}, {
		"username" : "aaaa",
		"xmname" : "System ",
		"xcname" : "$3,120",
		"type" : "aaaa",
		"username1" : "aaaa",
		"xmname1" : "System ",
		"xcname1" : "$3,120",
		"type1" : "aaaa",

	}, ];
	var setKeyVal = {
		title : '维保项列表',
		shown : function() {
			var op = {
				dataTitles:['设备类别','周期','工作内容','标准','参数','单位','工作类型','预警'],
				hasCheckBox:true,
				tableHeight:'150px',
//				scrollBottom:"bottom",
				setting: {}
			}				
			var tb1 = new tableBuilder("#table_fix",data1,op);
			modalBulider.resize();
		}
	}
	modalBulider.modal('template_fix_list', setKeyVal);
}
