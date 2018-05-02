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
		dataTitles:['任务编号','类型','生成时间','要求完成时间','分析任务管理人','状态'],
		hasCheckBox:true,
		buttons:[{text:"详情",eventname:"detail1"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("#btn_add1-3").click(function(){
		var setKeyVal ={
			title:'转派任务'					
		}
		modalBulider.modal('template1',setKeyVal);
		$(".modal-body").css('max-height','75px')
		$(".modal-body").css('min-height','75px')
	})
})
function detail1(){
	utilObj.navigate('analyse_task_detail');
}
