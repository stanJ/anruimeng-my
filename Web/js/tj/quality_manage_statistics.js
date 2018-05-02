$(function(){
	seajs.use('tj_public');
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
		},
	];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['姓名','质量管理任务编号','原因','时间(分析)'],
		hasCheckBox:false,
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
})
