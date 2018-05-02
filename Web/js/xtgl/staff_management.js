$(function(){
	//后台人员table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['人员名称','项目','现场','公司名','登录名'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"check"}]
	}
	var tb = new tableBuilder("#table_id_staff",data1,op);
	//新增按钮点击事件
	$('#btn_add').on('click',function(){ 
		var setKeyVal ={
			title:'新增信息'					
		}
		modalBulider.modal('template_mystaffaddModal',setKeyVal);		
	});
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//从现有用户中添加点击事件
	$('body').on('click','#btn_addUser',function(){ 
		var setKeyVal ={
			title:'选择用户添加'					
		}
		modalBulider.modal('template_addUserModal',setKeyVal);
		//从现有用户中添加人员table		
		var data1 =[{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"type":       "aaaa",
				"companyname":   "System ",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"type":       "aaaa",
				"companyname":   "System ",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"type":       "aaaa",
				"companyname":   "System ",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"type":       "aaaa",
				"companyname":   "System ",
			}
		];
		var op={
			pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','邮箱','电话','职位','等级','手机','工号'],
			hasCheckBox:true,
			//buttons:[{text:"查看",eventname:"checkadministrator"}]
		}
		var tb = new tableBuilder("#table_id_adduserstaff",data1,op);
		modalBulider.resize();
		
	});
});
function modify(){
	var setKeyVal ={
		title:'编辑信息'					
	}
	modalBulider.modal('template_mystaffmodifyModal',setKeyVal);
}
