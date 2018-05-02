$(function(){
	//预防性维护计划管理table
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
		dataTitles:['预防性维护计划名称','周期','是否启用'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"chakan"},{text:"编辑",eventname:"modify"}]
	}
	var tb = new tableBuilder("#table_id_plansTab",data,op);
	//新增规则按钮点击事件
	$('#btn_add').on('click',function(){
		change('新增维护计划表')
	});
})
function chakan(){
	var setKeyVal ={
		title:'预防性维护计划详情',
		shown:function(){
			var data3 = [{
				"name": "aaaa",
				"position": "System ",
				"salary": "$3,120",
				"salary1": "$3,120",
			},{
				"name": "ccc",
				"position": "System Architect",
				"salary": "$3,120",
				"salary1": "$3,120",
			}, {
				"name": "aaaa",
				"position": "SysSystem",
				"salary": "SysSystem ",
				"salary1": "$3,120",
			}];
			var op3 = {
				hasCheckBox: false,
				dataTitles: ['维护表名称','类型', '设备名称','设备编号'],
//				tableHeight:'150px'
			};
			var tb1 = new tableBuilder("#table1", data3, op3);
			modalBulider.resize();
		}
	}
	modalBulider.modal('template1',setKeyVal);
}
function modify(){
	change('编辑维护计划表')
}
function change(title){
	var setKeyVal ={
		title:title,
		shown:function(){
			var tbplanlist1 = new tableBuilder("#tb_planlist1", data3, op3);
			var tbplanlist2 = new tableBuilder("#tb_planlist2", data3, op4);
			var h = '<h2 class="x_modaltitle">可添加维保表</h2>';
			h += '<ul class="query-group clearfix">';
			h += '<li> <label> 系统名称 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop8" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li> <label> 设备 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"><li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>'; 
			h += '<li> <label> 设备类别 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li> <label> 设备名称</label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li> <label> 周期 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li class="query-li"> <a class="sui-btn btn-primary fr" style="margin-left:52px;">查询</a> </li> </ul>';
			$('#tb_planlist1').prepend(h);
			$('#tb_planlist2').prepend('<h2 class="x_modaltitle">已添加维护保表</h2>');
			$("#div_planlistInfo .movetoright").on("click",function(){
				$("#tb_planlist1 label.checked").each(function(){
					var data= tbplanlist1.getSelectedRow($(this).parents("tr:first"));
					tbplanlist1.removeRow($(this).parents("tr:first"));
					tbplanlist2.addRow(data);
				});
			});
			$("#div_planlistInfo .movetoleft").on("click",function(){
				$("#tb_planlist2 label.checked").each(function(){
					var data= tbplanlist2.getSelectedRow($(this).parents("tr:first"));
					tbplanlist2.removeRow($(this).parents("tr:first"));
					tbplanlist1.addRow(data);
				});
			});
		}					
	}
	var data3 = [{
		"name": "aaaa",
		"position": "System ",
		"salary": "$3,120",
		"salary1": "$3,120",
	}, {
		"name": "bbb",
		"position": "Director",
		"salary": "$5,300",
		"salary1": "$3,120",
	}, {
		"name": "ccc",
		"position": "System Architect",
		"salary": "$3,120",
		"salary1": "$3,120",
	}, {
		"name": "aaaa",
		"position": "SysSystem",
		"salary": "SysSystem ",
		"salary1": "$3,120",
	}];
	
	var op3 = {
		hasCheckBox: true,
		dataTitles: ['维保表名称','类型', '设备名称','设备编号'],
		tableHeight:'130px'
	};
	var op4 = {
		hasCheckBox: true,
		dataTitles: ['维保表名称','类型', '设备名称','设备编号'],
		tableHeight:'262px'
	};
	modalBulider.modal('template_myaddplansModal',setKeyVal);
}
