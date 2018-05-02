$(function(){
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
		dataTitles:['物料编码','物料名称','冻结日期','仓库','数量','批次号','原因','状态'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"detail"},{text:"详情1",eventname:"detail1"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function detail(){
	var setKeyVal ={
		title:'批次冻结详情'					
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
			"10":     "aa",
			"11": 	  "cc",
			"12":     "dd",
		},
	];
	var op2={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','批次号','申报日期','仓库','位置','入库日期','数量','单价','小计'],
		hasCheckBox:false
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	modalBulider.resize();
}
function detail1(){
	var setKeyVal ={
		title:'批次台账详情'					
	}
	modalBulider.modal('template2',setKeyVal);
}