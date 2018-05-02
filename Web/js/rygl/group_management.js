$(function(){
	//分组管理table
	var data1 =[{
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
		dataTitles:['分组名称','项目名称','现场名称','转派审批人'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"checkGroupDetail"}]
	}
	var tb = new tableBuilder("#table_id_grouplist",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增按钮点击事件
	$('#btn_add').on('click',function(){ 
		change('新增信息');
	});
})
function modify(){
	change('编辑信息');
}
function change(title){
	var setKeyVal ={
		title:title				
	};		
	modalBulider.modal('template_addGropModel',setKeyVal);	
}
//查看分组人员信息
function checkGroupDetail(){
	var setKeyVal ={
		title:'分组人员信息',
		shown:function(){
			var tbuserlist1 = new tableBuilder("#tb_userlist1", data3, op3);
			var tbuserlist2 = new tableBuilder("#tb_userlist2", data3, op3);
			$('#tb_userlist1').prepend('<h2 class="x_modaltitle">可添加账户</h2>');
			$('#tb_userlist2').prepend('<h2 class="x_modaltitle">已添加账户</h2>');
			$("#div_gropUserInfo .movetoright").on("click",function(){
				$("#tb_userlist1 label.checked").each(function(){
					var data= tbuserlist1.getSelectedRow($(this).parents("tr:first"));
					tbuserlist1.removeRow($(this).parents("tr:first"));
					tbuserlist2.addRow(data);
				});
			});
			$("#div_gropUserInfo .movetoleft").on("click",function(){
				$("#tb_userlist2 label.checked").each(function(){
					var data= tbuserlist2.getSelectedRow($(this).parents("tr:first"));
					tbuserlist2.removeRow($(this).parents("tr:first"));
					tbuserlist1.addRow(data);
				});
			});
		}
	}
	var data3 = [{
		"name": "aaaa",
		"position": "System ",
		"salary": "$3,120",
		"salary1": "$3,120"
	}, {
		"name": "bbb",
		"position": "Director",
		"salary": "$5,300",
		"salary1": "$3,120"
	}, {
		"name": "ccc",
		"position": "System Architect",
		"salary": "$3,120",
		"salary1": "$3,120"
	}, {
		"name": "aaaa",
		"position": "SysSystem",
		"salary": "SysSystem ",
		"salary1": "$3,120"
	}];
	var op3 = {
		hasCheckBox: true,
		dataTitles: ['用户名','登录名', '类型', '岗位信息'],
		tableHeight:'100px'
	};
	modalBulider.modal('template_GropUserInfo',setKeyVal);		
}