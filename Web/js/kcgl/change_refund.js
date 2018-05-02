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
		dataTitles:['日期','单据号','数量','类型','厂家名称','状态'],
		hasCheckBox:false,
		buttons:[{text:"出库",eventname:"detail"},{text:"入库",eventname:"detail1"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function detail(){
	utilObj.navigate('change_refund_outstock');
}
function detail1(){
	utilObj.navigate('change_refund_instock');
}
