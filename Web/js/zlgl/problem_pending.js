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
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['工单号(巡检任务编号)','表单名称','工作内容','单位','工作类型','实际参数','原因'],
		hasCheckBox:true,
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	var data2 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05": 	  "cc",
		},
	];
	var op2={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['工单号','服务类别','服务种类','报单时间','执行人'],
		hasCheckBox:true,
		buttons:[{text:"详情",eventname:"detail1"}],
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	$("#btn_add1-1").click(function(){
		genTask();
	})
	
})
function detail1(){
	var setKeyVal ={
		title:'工单详情'					
	}
	modalBulider.modal('template_orderdetail',setKeyVal);
}
function genTask(){
	var setKeyVal ={
		title:'选中项生成任务',
		shown:function(){
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
				dataTitles:['工单号(巡检任务编号)','表单名称','工作内容','标准、参数','单位','工作类型','实际参数','原因'],
				hasCheckBox:true,
			}
			var tb1 = new tableBuilder("#table-task-1",data1,op1);
			utilObj.bindDeleteEvent(tb1,'#btn_delete')
			var data2 =[
				{
					"01":     "aa",
					"02":     "bb",
					"03":     "bb",
					"04": 	  "cc",
					"05": 	  "cc",
				},
			];
			var op2={
				dataTitles:['工单号','服务类别','服务种类','报单时间','执行人'],
				hasCheckBox:true,
			}
			var tb2 = new tableBuilder("#table-task-2",data2,op2);
			utilObj.bindDeleteEvent(tb2,'#btn_delete')
			modalBulider.resize();
		}
	}
	modalBulider.modal('template_task',setKeyVal);
}
