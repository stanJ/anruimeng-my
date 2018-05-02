$(function(){
	//甲方人员管理table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','邮箱','电话','职位','部门','手机','登录名','任岗信息','工号'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"checkEdit"},{text:"查看",eventname:"check"}]
	}
	var tb = new tableBuilder("#table_id_firstStafflist",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增按钮点击事件
	$('#btn_add').on('click',function(){ 
		var setKeyVal ={
			title:'新增信息'					
		}
		modalBulider.modal('template_myaddfirststaff',setKeyVal);
		//甲方人员列表table
		var data1 =[{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",	
				"xmname1":   "System ",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"xmname1":   "System ",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"xmname1":   "System ",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"xmname1":   "System ",
			}
		];
		var op={
			pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','邮箱','电话','职务','手机','工号'],
			hasCheckBox:true,
			//buttons:[{text:"查看详情",eventname:"checkDetail"}]
		}
		var tb = new tableBuilder("#table_id_addfirstStafflist",data1,op);
		modalBulider.resize();
	});
	//导入按钮点击事件
	$('#btn_import').on('click',function(){
		//甲方人员导入结果table
		var data1 =[{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",	
				"xmname1":   "System ",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"xmname1":   "System ",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"xmname1":   "System ",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",
				"xmname1":   "System ",
			}
		];
		var setKeyVal ={
			title:'甲方人员导入',
			shown:function(){
				var op = {
					dataTitles:['姓名','邮箱','电话','职位','工号','导入结果'],
					/*dataSpecial: sp2,
					buttons: [{
						text: "查看",
						eventname: "chakan"
					}, {
						text: "删除",
						eventname: "deleteRow"
					}],*/
					tableHeight:'100px',
					scrollBottom:"bottom",
					setting: {}
				}				
				var tb = new tableBuilder("#table_id_importfirstStaff",data1,op);
				modalBulider.resize();
			}
		}
		modalBulider.modal('template_myfirstStaffImport',setKeyVal);
		
	});
});
/*编辑信息*/
function checkEdit(){
	var setKeyVal ={
		title:'编辑信息'					
	}
	modalBulider.modal('template_myEditfirstParty',setKeyVal);
}