$(function(){
	$(".div-selecttype").on("click",function(){
		$(".div-selecttype").removeClass("active");
		$(this).addClass("active");
	});
	
	//tree
	var dataJSON = [//树的数据
		{
			"text" : "系统权限",
			"state" : { "opened" : false },
			"children" : [
				{
					"text" : "后台管理人员",
					"state" : { "selected" : true },
					"children" :[
						{
							"id":"node1",
							"text" : "后台人员列表",
							"state" : { "selected" : true },
							"icon" : "jstree-file"
						},
						{
							"id":"node2",
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
	var tree1 = new treeBuilder("#div_tree1", dataJSON, {displayType:"hasCheck"});
	
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['帐号','姓名','所在部门','所在岗位','更新时间'],
		buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb = new tableBuilder("#div_tb1",data1,op);
	$('.arm-back-wrapper').on('click',function(){ 
		history.back(-1);
	});

})