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
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['审批任务编号','审批类型','发起时间','完成度','状态'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"chakan"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("#btn_add2").click(function(){
		var setKeyVal ={
			title:'添加自定义物料'					
		}
		modalBulider.modal('template2',setKeyVal);
		$("form").submit(function(e){
			e.preventDefault();
		})
	})
//	$("#btn_add").click(function(){
//		var setKeyVal ={
//			title:'添加库存中物料'					
//		}
//		modalBulider.modal('template1',setKeyVal);
//		$("form").submit(function(e){
//			e.preventDefault();
//		})
//	})
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function chakan(){
	utilObj.navigate('approve_detail');
}
