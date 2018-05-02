$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['单据号','发起日期','总金额','状态'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"detail"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function detail(){
	var setKeyVal ={
		title:'报废申请详情'					
	}
	modalBulider.modal('template1',setKeyVal);
	var data2 = [
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06":     "ee",
			"07":     "aa",
			"08": 	  "cc",
			"09":     "dd",
			"10":     "ee",
			"11":     "aa",
		},
	];
	var op2={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','批次号','申报日期','仓库','位置123','数量','单价','小计',],
		hasCheckBox:false
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	modalBulider.resize();
}
