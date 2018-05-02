$(function(){
	//供应商列表table
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
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['供应商名称','供应商类型','概要','合同到期日','维保期到期日'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"check"}]
	}
	var tb = new tableBuilder("#table_id_supplier",data1,op);
	//新增按钮点击事件
	$('#btn_add').on('click',function(){ 
		var setKeyVal ={
			title:'新增信息'					
		}
		modalBulider.modal('template_mysupplierModal',setKeyVal);
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
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['文档名称','上传时间','类型'],
		hasCheckBox:true,
		//buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb = new tableBuilder("#table_id_addsupplier",data1,op);

	});
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//导入供应商按钮点击事件
	$('#btn_import').on('click',function(){ 
		var data1 =[{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"username1": "aaaa",
				"xmname1":   "System ",
				"xcname1":   "$3,120",	
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"username1": "aaaa",
				"xmname1":   "System ",
				"xcname1":   "$3,120",		
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"username1": "aaaa",
				"xmname1":   "System ",
				"xcname1":   "$3,120",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"username1": "aaaa",
				"xmname1":   "System ",
				"xcname1":   "$3,120",
			}
		];
		var setKeyVal ={
			title:'供应商导入',
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
				
				var tb = new tableBuilder("#table_id_importsupplier",data1,op);
				modalBulider.resize();
			}
		}
		modalBulider.modal('template_mysupplierImport',setKeyVal);
		
		
		
	});
});
function modify(){
	
	
	var setKeyVal ={
		title:'编辑信息'					
	}
	modalBulider.modal('template_mysuppliermodifyModal',setKeyVal);
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
	//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['文档名称','上传时间','类型'],
		hasCheckBox:true,
		//buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb = new tableBuilder("#table_id_addsupplier",data1,op);
}
