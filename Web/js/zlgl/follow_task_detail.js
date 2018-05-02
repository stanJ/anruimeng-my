$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06":     "bb",
			"07": 	  "cc",
			"08":     "dd",
		},
	];
	var op1={
		dataTitles:['任务编号','表单名称','工作内容','标准、参数','单位','工作类型','实际参数','原因'],
		hasCheckBox:false,
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	var data2 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05": 	  "cc",
			"06": 	  "cc",
		},
	];
	var op2={
		dataTitles:['工单号','服务类别','服务种类','服务子类','报单时间','执行人'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"chakan"}],
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	$("form").submit(function(e){
		e.preventDefault();
	})
	loadTree("#tree1",'hasCheck');
})
function chakan(){
	var setKeyVal ={
		title:'出入库物料去除详情'
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
