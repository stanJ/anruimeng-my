$(function(){
	//需求工单table
	seajs.use('switch',function(){
		$(".switch1").simpleSwitch({
			"theme": "FlatCircular"
		});
	})
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
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['工单号','提报时间','服务种类','服务分类','服务子类','转派时间','审批时间','是否通过','状态'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"checkDetail"}]
	}
	var tb = new tableBuilder("#table_id_requirement",data1,op);
})
//需求工单信息详情
function checkDetail(){
	utilObj.navigate('order_transfer_detail');
}