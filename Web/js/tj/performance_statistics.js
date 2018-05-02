$(function(){
	seajs.use('tj_public');
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "bb",
			"06":     "bb",
			"07": 	  "cc",
			"08": 	  "cc",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['巡检任务ID','系统','设备','设备类别','工作内容','标准参数','实际参数','问题原因'],
		hasCheckBox:false,
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	var data2 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "bb",
		},
	];
	var op2={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['姓名','考勤时间','考勤类型','考勤位置','定位方式'],
		hasCheckBox:false,
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
})
