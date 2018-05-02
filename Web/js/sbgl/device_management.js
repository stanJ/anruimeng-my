var page = {
	storage:{
		tb1:'',
		tb2:'',
	}
}
$(function(){
	//设备管理table
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
		dataTitles:['设备编码','设备名称','设备类别','生成日期','状态'],
		hasCheckBox:true,
		buttons:[
		{text:"设备台帐详情",eventname:"checkdevicetzxq"},
		{text:"设备配件详情",eventname:"checkdevicepjxq"},
		{text:"编辑",eventname:"modify"}
		]
	}
	var tb = new tableBuilder("#table_id_devicemanageTab",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增设备
	$("#btn_add").on("click",function(){
		change('新增设备')
	});
	$("#btn_import_1").on("click",function(){
		upload1()
	});
	
	//导入台帐模板
	$("body").on("click","#btn_import",function(){
		var data1 =[{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"username1": "aaaa",
				"xmname1":   "System ",
				"xcname1":   "$3,120",	
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"username1": "aaaa",
				"xmname1":   "System ",
				"xcname1":   "$3,120",		
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"username1": "aaaa",
				"xmname1":   "System ",
				"xcname1":   "$3,120",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"username1": "aaaa",
				"xmname1":   "System ",
				"xcname1":   "$3,120",
			}
		];
		var setKeyVal ={
			title:'台帐模板导入',
			shown:function(){
				var op = {
					dataTitles:['姓名','邮箱','电话','职位','工号','导入结果'],
					/*dataSpecial: sp2,
					buttons: [{
						text: "查看",
						eventname: "chakan"
					}, {
						text: "删除",
						eventname: "deleteRow"
					}],*/
					tableHeight:'100px',
					scrollBottom:"bottom",
					setting: {}
				}				
				var tb1 = new tableBuilder("#table_id_importResult",data1,op);
				modalBulider.resize();
			}				
			//containerWidth:'0.7'
		};		
		modalBulider.modal('template_mytzmodelImport',setKeyVal);

		
	});
	//导入配件模板
	$("body").on("click","#btn_partimport",function(){
		var data1 =[
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
			},

		];
		var setKeyVal ={
			title:'配件模板导入',
			shown:function(){
				var op = {
					dataTitles:['配件名称','配件参数','导入结果'],
					tableHeight:'100px',
					scrollBottom:"bottom",
					setting: {}
				}				
				var tb1 = new tableBuilder("#table_id_importpartResult",data1,op);
				modalBulider.resize();
			}			
			//containerWidth:'0.7'
		};		
		modalBulider.modal('template_mypartmodelImport',setKeyVal);
		
	});
})
function modify(){
	change('编辑设备')
}
function change(title){
	var setKeyVal ={
		title:title,
		//containerWidth:'0.7'
	};		
	modalBulider.modal('template_myaddDevice',setKeyVal);
}
//查看设备台帐详情
function checkdevicetzxq(){
	var setKeyVal ={
		title:'设备台帐详情',
		//containerWidth:'0.7'
	};		
	modalBulider.modal('template_mydevicetzDetail',setKeyVal);
	var data1 =[{
			"username": "正常转速",
			"xmname":   "System ",
		},
		{
			"username": "保安器动作",
			"xmname":   "System ",
		},
		{
			"username": "点超速脱扣",
			"xmname":   "System ",
		},
		{
			"username": "正常进气压力",
			"xmname":   "System ",
		},
		{
			"username": "排气压力",
			"xmname":   "System ",
		}
	];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['参数名称','参数值'],
		hasCheckBox:false,
		buttons:[{text:"编辑",eventname:"editCanshu"},{text:"删除",eventname:"delete1"}]
	}
	var tb1 = new tableBuilder("#table_id_zycsTab",data1,op1);
	page.storage.tb1 = tb1;
	
	var data2 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"type1":       "aaaa",
		}
	];
	var op2={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['时间','记录','类型','工单号','执行人','设备状态'],
		hasCheckBox:false,
		//buttons:[{text:"设备台帐详情",eventname:"checkdevicetzxq"}]
	}
	var tb2 = new tableBuilder("#table_id_mglogTab",data2,op2);
	
	var data3 =[{
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
	var op3={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['备品名称','型号规格','数量','品牌','备注'],
		hasCheckBox:false,
		//buttons:[{text:"设备台帐详情",eventname:"checkdevicetzxq"}]
	}
	var tb3 = new tableBuilder("#table_id_bplistTab",data3,op3);
	modalBulider.resize();
}
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
	modalBulider.modal('template_importdevice',setKeyVal);
}
//查看设备配件详情
function checkdevicepjxq(){
	var setKeyVal ={
		title:'设备配件详情',
		//containerWidth:'0.7'
	};		
	modalBulider.modal('template_mydevicepjDetail',setKeyVal);
	var data1 =[{
			"username": "CPU",
			"xmname":   "System ",
		},
		{
			"username": "GPU",
			"xmname":   "System ",
		},
		{
			"username": "内存",
			"xmname":   "System ",
		},
		{
			"username": "硬盘",
			"xmname":   "System ",
		},
		{
			"username": "主板",
			"xmname":   "System ",
		}
	];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['配件名称','配件参数'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"editpartparameter"},{text:"删除",eventname:"delete2"}]
	}
	var tb1 = new tableBuilder("#table_id_partnameTab",data1,op1);
	page.storage.tb2 = tb1;
	var data4 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"type1":       "aaaa",
		}
	];
	var op4={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['时间','配件名称','原型号','新型号','执行人','维保期至'],
		hasCheckBox:false,
		//buttons:[{text:"设备台帐详情",eventname:"checkdevicetzxq"}]
	}
	var tb4 = new tableBuilder("#table_id_changeRecordTab",data4,op4);
	modalBulider.resize();
}
//编辑主要参数
function editCanshu(){
	var setKeyVal ={
		title:'编辑主要参数'					
	}
	modalBulider.modal('template_mypairvalue',setKeyVal);
}
//编辑配件名称
function editpartparameter(){
	var setKeyVal ={
		title:'编辑配件名称'					
	}
	modalBulider.modal('template_mypartname',setKeyVal);
}
function delete1(obj){
	var tr = $(obj).parents('tr:first');
	page.storage.tb1.removeRow(tr)
	
}
//删除当前行
function delete2(obj){
	var tr = $(obj).parents('tr:first');
	page.storage.tb2.removeRow(tr)
	
}