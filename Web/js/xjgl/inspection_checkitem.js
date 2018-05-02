$(function(){
	//巡检检查项管理table
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
		dataTitles:['系统','设备','设备类别','类型','当前设备数量'],
		hasCheckBox:true,
		buttons:[{text:"检查项",eventname:"CheckItemFun"},{text:"导入设备",eventname:"import_device"}]
	}
	var tb = new tableBuilder("#table_id_checkitemTab",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	$("#btn_import").on("click",function(){
		upload1();
	});
	$("#btn_clear_1").on("click",function(){
		utilObj.confirm({
			title:'确认清空检查项',
			body:'是否确认清空所有检查项？',
			okHide:function(){
				console.log('点击确认')
			}
		})
	});
})
function import_device(){
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
function upload1(){
	var data1 =[
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
		title:'导入模板',
		shown:function(){
			var op = {
				dataTitles:['系统','设备','设备类别','工作内容','标准参数','单位','是否预警','导入结果',],
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
function addRules(){
	var title = '新增规则'
	var data3 = [{
		"name": "aaaa",
		"position": "System ",
		"salary": "$3,120",
		"name1": "aaaa",
		"position1": "System ",
		"salary1": "$3,120",
		"position2": "System ",
	}, {
		"name": "bbb",
		"position": "Director",
		"salary": "$5,300",
		"name1": "aaaa",
		"position1": "System ",
		"salary1": "$3,120",
		"position2": "System ",
	}, {
		"name": "ccc",
		"position": "System Architect",
		"salary": "$3,120",
		"name1": "aaaa",
		"position1": "System ",
		"salary1": "$3,120",
		"position2": "System ",
	}, {
		"name": "aaaa",
		"position": "SysSystem",
		"salary": "SysSystem ",
		"name1": "aaaa",
		"position1": "System ",
		"salary1": "$3,120",
		"position2": "System ",
	}];
	var op3 = {
		hasCheckBox: true,
		dataTitles: ['设备种类名称','工作内容', '标准、参数','单位','工作类型', '统计', '预警'],
		tableHeight:'150px'
	};
	var setKeyVal ={
		title:title,
		shown:function(){
			var tbrulelist1 = new tableBuilder("#tb_rulelist1", data3, op3);
			var tbrulelist2 = new tableBuilder("#tb_rulelist2", data3, op3);
			$('#tb_rulelist1').prepend('<h2 class="x_modaltitle">可添加检查项</h2>');
			$('#tb_rulelist2').prepend('<h2 class="x_modaltitle">已添加检查项</h2>');
		//	modalBulider.resize();
			$("#div_rules1 .movetoright").on("click",function(){
				$("#tb_rulelist1 label.checked").each(function(){
					var data= tbrulelist1.getSelectedRow($(this).parents("tr:first"));
					tbrulelist1.removeRow($(this).parents("tr:first"));
					tbrulelist2.addRow(data);
				});
			});
			$("#div_rules1 .movetoleft").on("click",function(){
				$("#tb_rulelist2 label.checked").each(function(){
					var data= tbrulelist2.getSelectedRow($(this).parents("tr:first"));
					tbrulelist2.removeRow($(this).parents("tr:first"));
					tbrulelist1.addRow(data);
				});
			});
		}
	}
	modalBulider.modal('template_myaddRules',setKeyVal);
}
//查看该设备下检查项列表
function CheckItemFun(){
	var setKeyVal ={
		title:'巡检检查项'					
	}
	modalBulider.modal('template_myCheckItem',setKeyVal);
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
		dataTitles:['设备类别','工作内容','标准、参数','单位','类型','是否关键参数','是否预警'],
		hasCheckBox:false,
		buttons:[{text:"新增规则",eventname:"addRules"}]
	}
	var tb = new tableBuilder("#table_id_checkItemList",data,op);
	modalBulider.resize();
}