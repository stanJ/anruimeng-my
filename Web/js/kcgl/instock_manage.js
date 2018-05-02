$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "aa",
			"06":     "bb",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['项目名称','现场名称','入库类型','单据号','入库时间','状态'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"detail"},{text:"其他入库",eventname:"detail1"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function detail(){
	utilObj.navigate('instock_detail');
}
function detail1(){
	var setKeyVal ={
		title:'其他入库'					
	}
	modalBulider.modal('template3',setKeyVal);
}
