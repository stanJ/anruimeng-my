$(function(){
	//后台角色table
	var data1 =[{
			"name":       "aaaa",
			"item":   "System ",
			"scene":   "$3,120",
		},
		{
			"name":       "aaaa",
			"item":   "System ",
			"scene":   "$3,120",
		},
		{
			"name":       "aaaa",
			"item":   "System ",
			"scene":   "$3,120",
		},
		{
			"name":       "aaaa",
			"item":   "System ",
			"scene":   "$3,120",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['角色名称','项目','现场'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"check"}]
	}
	var tb = new tableBuilder("#table_id_roleTable",data1,op);
	
	//新增按钮点击事件
	$('#btn_add').on('click',function(){ 
		change('新增信息')
	});
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
});
function modify(){
	change('编辑信息')
}
function change(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template_myaddModal',setKeyVal);
	var dataJSON = [//树的数据
		{
			"text" : "系统权限",
			"state" : { "opened" : true },
			"children" : [
				{
					"text" : "后台管理人员",
					"state" : { "selected" : true },
					"children" :[
						{
							"text" : "后台人员列表",
							"state" : { "selected" : true },
							"icon" : "jstree-file"
						},
						{
							"text" : "后台人员列表",
							"state" : { "selected" : true },
							"icon" : "jstree-file"
						}
					]
				},
				{ 
					"text" : "前端管理层", 
					"state" : { "selected" : true },
				},
				{ 
					"text" : "系统角色管理", 
					"state" : { "selected" : true },
				},
				{ 
					"text" : "系统管理员管理", 
					"state" : { "selected" : true },
				},
				{ 
					"text" : "项目角色管理", 
					"state" : { "selected" : true },
				},
			]
		},
		{
			"text" : "项目管理",
			"state" : { "selected" : false },
		},
		{
			"text" : "系统设置",
			"state" : { "selected" : false },
		},
		{
			"text" : "数据统计",
			"state" : { "selected" : false },
		}
	];
	$('#frmt').jstree({
		"checkbox" : {"keep_selected_style" : false},
		"plugins" : ["checkbox"],
		'core' : {
			'data' : dataJSON
		}
	});
}
