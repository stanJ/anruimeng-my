$(function(){
	//已方人员管理table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",	
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
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','邮箱','电话','职位','任岗信息','手机','登录名','工号'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"checkedit"},{text:"上传资质",eventname:"uploadQualifications"},{text:"查看",eventname:"check"}]
	}
	var tb = new tableBuilder("#table_id_secondStafflist",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	
	//新增按钮点击事件
	$('#btn_add').on('click',function(){ 
		var setKeyVal ={
			title:'新增信息'					
		}
		modalBulider.modal('template_myaddsecondstaff',setKeyVal);
		//已方人员列表table
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
		var tb = new tableBuilder("#table_id_addsecondStafflist",data1,op);
		modalBulider.resize();
	});
	//导入按钮点击事件
	$('#btn_import').on('click',function(){
		//已方人员导入结果table
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
			title:'已方人员导入',
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
				var tb = new tableBuilder("#table_id_importsecondStaff",data1,op);
				modalBulider.resize();
			}					
		}
		modalBulider.modal('template_mysecondStaffImport',setKeyVal);
		
		
		
	});

});
/*编辑*/
function checkedit(){
	var setKeyVal ={
		title:'编辑信息'					
	}
	modalBulider.modal('template_myEditsecondParty',setKeyVal);
}

//上传资质
function uploadQualifications(){
	var setKeyVal ={
		title:'上传资质',
		shown:function(){
			var data1 =[{
					"type":       "aaaa",
					"companyname":   "System ",	
					"xmname1":   "System ",
					"xcname1":   "$3,120",
					"type1":       "aaaa",	
				},
				{
					"type":       "aaaa",
					"companyname":   "System ",
					"xmname1":   "System ",
					"xcname1":   "$3,120",
					"type1":       "aaaa",
				},
				{
					"type":       "aaaa",
					"companyname":   "System ",
					"xmname1":   "System ",
					"xcname1":   "$3,120",
					"type1":       "aaaa",
				},
				{
					"type":       "aaaa",
					"companyname":   "System ",
					"xmname1":   "System ",
					"xcname1":   "$3,120",
					"type1":       "aaaa",
				}
			];
			var op={
				dataTitles:['资质名称','到期时间','提醒人','电话','邮箱']
			}
			var tb = new tableBuilder("#tb_id_uploadQualifications",data1,op);
			modalBulider.resize();
		}
	}
	modalBulider.modal('template_uploadQualifications',setKeyVal);
}
