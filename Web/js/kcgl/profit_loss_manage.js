$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "bb",
			"06":     "bb",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['项目名称','现场名称','仓库名称','盘点日期','盘点单号','状态'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"check"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	utilObj.bindDeleteEvent(tb1,'#btn_add3-2')
	$("form").submit(function(e){
		e.preventDefault();
	})
	$("#btn_add3").click(function(){
		addOrEdit('新增盘点表');
	})
})
function check(){
	addOrEdit('编辑盘点表');
}
function addOrEdit(title){
	var setKeyVal ={
		title:title					
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
		dataTitles:['物料名称','规格','单位','实际库存量','盘盈盘亏量','小计'],
		hasCheckBox:false
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	var data3 =[
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
		},
	];
	var op3={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','批次','数量','单价','小计'],
		hasCheckBox:false,
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
	var data4 =[
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
		},
	];
	var op4={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','批次','数量','单价','小计'],
		hasCheckBox:false,
	}
	var tb4 = new tableBuilder("#table4",data4,op4);
}
