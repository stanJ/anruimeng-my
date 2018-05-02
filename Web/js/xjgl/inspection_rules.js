$(function(){
	//巡检规则管理table
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
		dataTitles:['系统','设备','设备类别','类型','规则名称'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"CheckRulesFun"}]
	}
	var tb = new tableBuilder("#table_id_RulesTab",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增规则
	$("#btn_add").on("click",function(){
		change('新增规则')
	})
})
function modify(){
	change('编辑规则')
}
function change(title){
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
function CheckRulesFun(){
	var setKeyVal ={
		title:'规则详情页'					
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
		dataTitles:['设备类别名称','工作内容','标准、参数','工作类型','关键参数','预警'],
		hasCheckBox:false,
		//buttons:[{text:"",eventname:""}]
	}
	var tb = new tableBuilder("#table_id_checkRulesList",data,op);
	modalBulider.resize();
}