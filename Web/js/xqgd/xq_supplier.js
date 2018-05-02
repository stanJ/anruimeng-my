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
		buttons:[{text:"编辑",eventname:"chakan"},{text:"查看",eventname:"check"}]
	}
	var tb = new tableBuilder("#table_id_supplierxq",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	
	$('#btn_add').on('click',function(){
		modify('新增信息')
		
	});
	
})
function chakan(){
	modify('编辑信息')
}
function modify(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template_myaddxqsupplierModal',setKeyVal);
	//新增供应商列表table
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
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['文档名称','上传时间','类型'],
		hasCheckBox:true,
		//buttons:[{text:"查看",eventname:"chakan"}]
	}
	var tb = new tableBuilder("#table_id_addsupplierxq",data1,op);
}
