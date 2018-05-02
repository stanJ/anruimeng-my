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
		},
	];
	var op1={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['项目名称','现场名称','消耗量','物料大类','物料小类','物料名称','ABC分类'],
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
			"06": 	  "cc",
			"07":     "bb",
		},
	];
	var op2={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['项目名称','现场名称','消耗量','物料大类','物料小类','物料名称','ABC分类'],
		hasCheckBox:false,
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	loadTree("#tree1",'hasCheck');
})
