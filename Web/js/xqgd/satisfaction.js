$(function(){
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['工单号','提报时间','服务类型','服务种类','服务子类','完成时间','评分时间','问题1评分数','问题2评分数','问题3评分数','状态'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"checksatisfaction"}]
	}
	var tb = new tableBuilder("#table_id_satisfaction",data1,op);
	
})
//满意度详情
function checksatisfaction(){
	var setKeyVal ={
		title:'满意度详情',
		shown:function(){
			$(".close-wrapper").click(function(){
				$(this).siblings('img').attr('src','');
			})
		}
	}
	modalBulider.modal('template_satisfactionDetail',setKeyVal);
}