$(function(){
	$("form").submit(function(e){
		e.preventDefault();
	})
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
	var data3 = [
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06":     "ee",
			"07":     "aa",
			"08": 	  "cc",
		},
	];
	var op3={
		dataTitles:['物料名称','规格','批次','生产厂家','单位','数量','单价','小计'],
		hasCheckBox:true
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
	utilObj.bindDeleteEvent(tb3,'#btn_add1-2');
	var data4 = [
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
		},
	];
	var op4={
		dataTitles:['文件名称','文件类型','上传时间'],
		hasCheckBox:false
	}
	var tb4 = new tableBuilder("#table4",data4,op4);
	modalBulider.resize();
	$("#btn_add1").click(function(){
		var setKeyVal ={
			title:'添加采购批次'					
		}
		modalBulider.modal('template2',setKeyVal);

	})
})
