$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "bb",
			"06":     "bb",
			"07":     "bb",
			"08":     "bb",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['设备类别','周期','工作内容','标准、参数','单位','工作类型','类型','质量问题分析'],
		hasCheckBox:true,
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	utilObj.bindDeleteEvent(tb1,'#btn_add1-2')
	var data2 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
		},
	];
	var op2={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['服务类型','服务种类','服务子类','质量问题分析'],
		hasCheckBox:true,
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	utilObj.bindDeleteEvent(tb2,'#btn_add2-2')
	var data3 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "bb",
		},
	];
	var op3={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['姓名','任岗','工号','联系邮箱','联系电话'],
		hasCheckBox:true,
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
	utilObj.bindDeleteEvent(tb3,'#btn_add3-2')
	$("form").submit(function(e){
		e.preventDefault();
	})
	$("#btn_add1-1").click(function(){
		add1();
	})
	$("#btn_add2-1").click(function(){
		add2();
	})
	$("#btn_add3-1").click(function(){
		add3();
	})
})
function add1(){
	var setKeyVal ={
		title:'添加设备分析参数'					
	}
	modalBulider.modal('template1',setKeyVal);
	var data4 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "bb",
			"06": 	  "cc",
			"07":     "bb",
		},
	];
	var op4={
		dataTitles:['类型','周期','工作内容','标准、参数','单位','工作类型','类型'],
		hasCheckBox:true,
	}
	var tb4 = new tableBuilder("#table4",data4,op4);
	modalBulider.resize();
}
function add2(){
	var setKeyVal ={
		title:'添加工单分析参数'					
	}
	modalBulider.modal('template2',setKeyVal);
	var data5 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
		},
	];
	var op5={
		dataTitles:['服务类型','服务种类','服务子类',],
		hasCheckBox:true,
	}
	var tb5 = new tableBuilder("#table5",data5,op5);
	modalBulider.resize();
}
function add3(){
	var setKeyVal ={
		title:'添加分析任务管理人'					
	}
	modalBulider.modal('template3',setKeyVal);
	var data6 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04":     "bb",
			"05":     "bb",
		},
	];
	var op6={
		dataTitles:['姓名','任岗','工号','联系邮箱','联系电话'],
		hasCheckBox:true,
		buttons:[{text:"详情",eventname:"detail1"}],
	}
	var tb6 = new tableBuilder("#table6",data6,op6);
	modalBulider.resize();
}
function detail1(){
	var setKeyVal ={
		title:'上级信息'					
	}
	modalBulider.modal('template4',setKeyVal);
	var data7 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04":     "bb",
			"05":     "bb",
		},
	];
	var op7={
		dataTitles:['姓名','岗位','工号','联系邮箱','联系电话'],
		hasCheckBox:false,
	}
	var tb7 = new tableBuilder("#table7",data7,op7);
	modalBulider.resize();
}
