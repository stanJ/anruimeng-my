$(function(){
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
		dataTitles:['同步时间','同步数据量','状态'],
		hasCheckBox:false,
		//buttons:[{text:"查看",eventname:"checkadministrator"}]
	}
	var tb = new tableBuilder("#table_id_tbjf",data1,op);
	var tb1 = new tableBuilder("#table_id_tbyf",data1,op);
	var tb2 = new tableBuilder("#table_id_jfkq",data1,op);
	var tb3 = new tableBuilder("#table_id_yfkq",data1,op);
})