$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "aa",
			"06":     "bb",
			"07":     "bb",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['项目名称','现场名称','仓库名称','单据号','出库类型','日期','状态'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"detail"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function detail(){
	utilObj.navigate('outstock_detail');
//	var setKeyVal ={
//		title:'物料出库详情'					
//	}
//	modalBulider.modal('template1',setKeyVal);
	
}
