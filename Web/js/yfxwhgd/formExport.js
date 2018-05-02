$(function(){
	//保单导出table
	var data =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['维保表名称','工单号','表单提交时间','周期','设备名称','设备编号'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"checkdetail"}]
	}
	var tb = new tableBuilder("#table_id_formexportTab",data,op);
})

function checkdetail(){
	var setKeyVal ={
		title:'表单详情',
		containerWidth:'0.7',
	};		
	modalBulider.modal('template_form_detail',setKeyVal);
	
}