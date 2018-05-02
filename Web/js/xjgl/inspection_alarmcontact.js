$(function(){
	//报警联系人table
	var data =[{
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
		dataTitles:['联系人','邮箱','电话'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"}]
	}
	var tb = new tableBuilder("#table_id_alarmcontactTab",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//从人员列表中添加按钮点击事件
	$('#btn_addlist').on('click',function(){
		var setKeyVal ={
			title:'报警联系人添加'					
		}
		modalBulider.modal('template_myaddalarmContact',setKeyVal);
		//报警联系人table
		var data1 =[{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",	
				"xcname1":   "$3,120",
				"type1":       "aaaa",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",	
				"xcname1":   "$3,120",
				"type1":       "aaaa",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",	
				"xcname1":   "$3,120",
				"type1":       "aaaa",
			},
			{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"companyname":   "System ",	
				"xcname1":   "$3,120",
				"type1":       "aaaa",
			}
		];
		var op1={
//			pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
			dataTitles:['联系人','邮箱','电话','职务','任岗信息','手机','工号'],
			hasCheckBox:true,
		}
		var tb1 = new tableBuilder("#table_id_addcontact",data1,op1);
		modalBulider.resize();
	});
	
	//从自定义添加按钮点击事件
	$('#btn_add').on('click',function(){
		change('新增报警联系人')
	});
})
function modify(){
	change('编辑报警联系人')
}
function change(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template_myaddContact',setKeyVal);
}
