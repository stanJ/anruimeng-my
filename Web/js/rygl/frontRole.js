$(function(){
	var data1 =[{
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
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['角色名称','项目','现场'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"checkfrontRole"}]
	}
	var tb = new tableBuilder("#table_id_frontrole",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//添加事件
	$('#btn_add').on('click',function(){
		change('新增信息')
	});
})
function modify(){
	change('编辑信息')
}
function change(title){
	var setKeyVal ={
		title:title,
	}
	modalBulider.modal('template_myaddfrontRole',setKeyVal);
	var dataJSON = [//树的数据
		{
			"text" : "提报工单",
			"state" : { "opened" : true },
		},
		{
			"text" : "处理工单",
			"state" : { "selected" : false },
		},
		{
			"text" : "巡检管理",
			"state" : { "selected" : false },
		},
		{
			"text" : "工单审核",
			"state" : { "selected" : false },
		},
		{
			"text" : "考勤",
			"state" : { "selected" : false },
		},
		{
			"text" : "签到",
			"state" : { "selected" : false },
		},
		{
			"text" : "统计",
			"state" : { "selected" : false },
		},
		{
			"text" : "工单统计",
			"state" : { "selected" : false },
		},
		{
			"text" : "完成率",
			"state" : { "selected" : false },
		},
		{
			"text" : "绩效统计",
			"state" : { "selected" : false },
		}
	];
	$('#authority').jstree({
		"checkbox" : {"keep_selected_style" : false},
		"plugins" : ["checkbox"],
		'core' : {
			'data' : dataJSON
		}
	});
	modalBulider.resize();
}
//账户人员信息
function checkfrontRole(){
	var setKeyVal ={
		title:'账户人员信息',
		shown:function(){
			var tbaccpuntlist1 = new tableBuilder("#tb_accpuntlist1", data3, op3);
			var tbaccpuntlist2 = new tableBuilder("#tb_accpuntlist2", data3, op3);
			$('#tb_accpuntlist1').prepend('<h2 class="x_modaltitle">可添加账户</h2>');
			$('#tb_accpuntlist2').prepend('<h2 class="x_modaltitle">已添加账户</h2>');
			$("#div_AccountInfo .movetoright").on("click",function(){
				$("#tb_accpuntlist1 label.checked").each(function(){
					var data= tbaccpuntlist1.getSelectedRow($(this).parents("tr:first"));
					tbaccpuntlist1.removeRow($(this).parents("tr:first"));
					tbaccpuntlist2.addRow(data);
				});
			});
			$("#div_AccountInfo .movetoleft").on("click",function(){
				$("#tb_accpuntlist2 label.checked").each(function(){
					var data= tbaccpuntlist2.getSelectedRow($(this).parents("tr:first"));
					tbaccpuntlist2.removeRow($(this).parents("tr:first"));
					tbaccpuntlist1.addRow(data);
				});
			});
		}
	}
	var data3 = [{
		"name": "aaaa",
		"position": "System ",
		"salary": "$3,120",
	}, {
		"name": "bbb",
		"position": "Director",
		"salary": "$5,300",
	}, {
		"name": "ccc",
		"position": "System Architect",
		"salary": "$3,120",
	}, {
		"name": "aaaa",
		"position": "SysSystem",
		"salary": "SysSystem ",
	}];
	var op3 = {
		hasCheckBox: true,
		dataTitles: ['用户名','登录名', '类型'],
		tableHeight:'150px'
	};
	modalBulider.modal('template_AccountInfo',setKeyVal);		
}