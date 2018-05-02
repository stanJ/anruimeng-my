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
		dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','单位','数量','最小报警数量'],
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
		title:'物料详情'					
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
		},
	];
	var op2={
		dataTitles:['物料种类','规格','批次','单位','数量','小计'],
		hasCheckBox:false
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
}
