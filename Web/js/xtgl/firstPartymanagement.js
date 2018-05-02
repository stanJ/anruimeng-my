$(function(){
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"xcname2":   "$3,120",		
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"xcname2":   "$3,120",				
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"xcname2":   "$3,120",		
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"xcname2":   "$3,120",	
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','邮箱','电话','职位','手机','工号','公司'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"check"}]
	}
	var tb = new tableBuilder("#table_id_firstparty",data1,op);
	//新增按钮点击事件
	$('#btn_add').on('click',function(){ 
		var setKeyVal ={
			title:'新增信息'					
		}
		modalBulider.modal('template_myaddfirstParty',setKeyVal);		
	});
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//导入按钮点击事件
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
				var tb = new tableBuilder("#table_id_addfirstparty",data1,op);
				modalBulider.resize();
			}
		}
		modalBulider.modal('template_myfirstPartyImport',setKeyVal);
		
		
		
	});
	//组织架构
	$(".zuzhijiagou").on("click",function(){
		utilObj.navigate('firstparty_management_zuzhijiagou');
	});
})
function modify(){
	var setKeyVal ={
		title:'编辑信息'					
	}
	modalBulider.modal('template_mymodifyfirstParty',setKeyVal);	
}
