$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
		},
	];
	var op1={
		dataTitles:['物料编号','物料名称','价格','物料数量','规格'],
		hasCheckBox:false,
		buttons:[{text:"查看",eventname:"chakan"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	var data2 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
		},
	];
	var op2={
		dataTitles:['送审人','审批人','审批时间','审批状态'],
		hasCheckBox:false,
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function chakan(){
	var setKeyVal ={
		title:'出入库物料详情'
	}
	modalBulider.modal('template1',setKeyVal);
	var data3 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
		},
	];
	var op3={
		dataTitles:['批次编号','单价','批次数量','入库时间','出库时间'],
		hasCheckBox:false,
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
	$("form").submit(function(e){
		e.preventDefault();
	})
}