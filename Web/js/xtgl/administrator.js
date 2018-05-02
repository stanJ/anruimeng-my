$(function(){
	//超级管理员table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['人员名称','项目名称','现场名称','类型','公司名称','登录名'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"checkadministrator"}]
	}
	var tb = new tableBuilder("#table_id_administrator",data1,op);
	//从添加点击事件
	$('body').on('click','#btn_add',function(){ 
		var setKeyVal ={
			title:'新增信息'					
		}
		modalBulider.modal('template_addUserModal',setKeyVal);
		//超级管理员table
		var data1 =[{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"loginname":   "$3,120",
				"loginname":   "$3,120",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"loginname":   "$3,120",
				"loginname":   "$3,120",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"loginname":   "$3,120",
				"loginname":   "$3,120",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"loginname":   "$3,120",
				"loginname":   "$3,120",
			}
		];
		var op={
			pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','邮箱','电话','职务','等级','手机','工号'],
			hasCheckBox:true,
			//buttons:[{text:"查看",eventname:"ddd"}]
		}
		var tb = new tableBuilder("#table_id_addadministrator",data1,op);
	});
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});

})
function modify(){
	var setKeyVal ={
		title:'编辑信息'					
	}
	modalBulider.modal('template_modifyUserModal',setKeyVal);
	//超级管理员table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
			"loginname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
			"loginname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
			"loginname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
			"loginname":   "$3,120",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','邮箱','电话','职务','等级','手机','工号'],
		hasCheckBox:true,
		//buttons:[{text:"查看",eventname:"ddd"}]
	}
	var tb = new tableBuilder("#table_id_addadministrator",data1,op);
}
//查看详情
function checkadministrator(){
	var setKeyVal ={
		title:'选择用户信息查看'					
	}
	modalBulider.modal('template_userDetail',setKeyVal);
}	