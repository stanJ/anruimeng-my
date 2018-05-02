$(function(){
	$("form").submit(function(e){
		e.preventDefault();
	})
	var data1 = [
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
		},
	];
	var op1={
		dataTitles:['物料大类','物料小类','物料名称','规格','出库位置',],
		hasCheckBox:false,
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	var data2 = [
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
		},
	];
	var op2={
		dataTitles:['物料种类','规格','位置','批次','数量',],
		hasCheckBox:true,
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	utilObj.bindDeleteEvent(tb2,"#btn_add1-2");
	$("#btn_add1").click(function(){
			var setKeyVal ={
			title:'换货入库',
		}
		modalBulider.modal('template1',setKeyVal);
	})
})

