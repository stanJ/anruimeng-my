$(function(){
	//工单审核列表table
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
		dataTitles:['系统','设备','设备类别','规则名称'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"checkdetail"}]
	}
	var tb = new tableBuilder("#table_id_maintenance",data,op);
	//新增规则按钮点击事件
	$('#btn_add').on('click',function(){
		addRules('新增规则')
	});
})
function modify(){
	addRules('编辑规则')
}
function addRules(title){
	var setKeyVal ={
		title:title,
		shown:function(){
			var h = '';
			h += '<ul class="query-group clearfix">';
			h += '<li> <label> 规则名称 </label> <input type="text" value="" class="input-medium" /></li>';
			h += '<li> <label> 系统名称 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop8" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li> <label> 设备 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"><li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>'; 
			h += '<li> <label> 设备类别 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li class="query-li"> <a class="sui-btn btn-primary fr" style="margin-left:52px;">查询</a> </li> </ul>';
			
			var tbmaintenancelist1 = new tableBuilder("#tb_maintenancelist1", data3, op3);
			var tbmaintenancelist2 = new tableBuilder("#tb_maintenancelist2", data3, op3);
			$('#tb_maintenancelist1').prepend(h);
			$('#tb_maintenancelist1').prepend('<h2 class="x_modaltitle">可选维护选项列表</h2>');
			$('#tb_maintenancelist2').prepend('<h2 class="x_modaltitle">已选维护选项列表</h2>');
			$("#div_maintenanceInfo .movetoright").on("click",function(){
				$("#tb_maintenancelist1 label.checked").each(function(){
					var data= tbmaintenancelist1.getSelectedRow($(this).parents("tr:first"));
					tbmaintenancelist1.removeRow($(this).parents("tr:first"));
					tbmaintenancelist2.addRow(data);
				});
			});
			$("#div_maintenanceInfo .movetoleft").on("click",function(){
				$("#tb_maintenancelist2 label.checked").each(function(){
					var data= tbmaintenancelist2.getSelectedRow($(this).parents("tr:first"));
					tbmaintenancelist2.removeRow($(this).parents("tr:first"));
					tbmaintenancelist1.addRow(data);
				});
			});
		}
	}
	var data3 = [{
		"name": "aaaa",
		"position": "System ",
		"salary": "$3,120",
		"salary1": "$3,120",
		"position1": "System ",
	}, {
		"name": "bbb",
		"position": "Director",
		"salary": "$5,300",
		"salary1": "$3,120",
		"position1": "System ",
	}, {
		"name": "ccc",
		"position": "System Architect",
		"salary": "$3,120",
		"salary1": "$3,120",
		"position1": "System ",
	}, {
		"name": "aaaa",
		"position": "SysSystem",
		"salary": "SysSystem ",
		"salary1": "$3,120",
		"position1": "System ",
	}];
	var op3 = {
		hasCheckBox: true,
		dataTitles: ['设备类型名称','工作内容', '标准、参数','单位', '统计'],
		tableHeight:'150px'
	};
	modalBulider.modal('template_addRulesModal',setKeyVal);
}
//查看工单详情
function checkdetail(){
	var setKeyVal ={
		title:'维护选项列表',
		shown:function(){
			var data3 = [{
				"name": "aaaa",
				"position": "System ",
				"salary": "$3,120",
				"salary1": "$3,120",
				"position1": "System ",
			}, {
				"name": "bbb",
				"position": "Director",
				"salary": "$5,300",
				"salary1": "$3,120",
				"position1": "System ",
			}, {
				"name": "ccc",
				"position": "System Architect",
				"salary": "$3,120",
				"salary1": "$3,120",
				"position1": "System ",
			}, {
				"name": "aaaa",
				"position": "SysSystem",
				"salary": "SysSystem ",
				"salary1": "$3,120",
				"position1": "System ",
			}];
			var op3 = {
				hasCheckBox: false,
				dataTitles: ['设备类型名称','工作内容', '标准、参数','单位', '统计'],
//				tableHeight:'150px'
			};
			var tb1 = new tableBuilder("#table1", data3, op3);
			modalBulider.resize();
			
		}
	}
	modalBulider.modal('template1',setKeyVal);
}