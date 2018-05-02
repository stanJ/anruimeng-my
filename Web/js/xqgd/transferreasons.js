$(function(){
	//转派理由列表table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"date":   "2017-01-16",			
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"date":   "2017-01-16",			
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"date":   "2017-01-16",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"date":   "2017-01-16",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['转派理由名称','是否启用','供应商名称','概要','合同到期日','维保期到期日'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"chakan"}]
	}
	var tb = new tableBuilder("#table_id_transferreasons",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	$('#btn_add').on('click',function(){
		
		modify('新增转派理由')
	});
})
function chakan(){
	modify('编辑转派理由')
}
function modify(title){
	
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template_myaddtransferreasons',setKeyVal);
}
