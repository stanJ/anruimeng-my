$(function(){
	//工单审核列表table
	var data =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"username1": "aaaa",			
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"username1": "aaaa",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"username1": "aaaa",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"username1": "aaaa",	
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['工单号','生成时间','表名','默认派发组','转派人','转派时间','审批时间','是否通过','状态'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"checkdetail"}]
	}
	var tb = new tableBuilder("#table_id_transferappTab",data,op);
})

//查看工单详情
function checkdetail(){
	location.href="transferDetail.html";
}