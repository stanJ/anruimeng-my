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
		dataTitles:['跟进任务编号','生成时间','解决方案描述','要求完成时间','状态','总任务百分比'],
		hasCheckBox:true,
		buttons:[{text:"详情",eventname:"detail"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("form").submit(function(e){
		e.preventDefault();
	})
	$("#btn_add1").click(function(){
		var setKeyVal ={
			title:'转派任务'					
		}
		modalBulider.modal('template1',setKeyVal);
		$(".modal-body").css('max-height','75px')
		$(".modal-body").css('min-height','75px')
	})
})
function detail(){
	utilObj.navigate('follow_task_detail');
}
