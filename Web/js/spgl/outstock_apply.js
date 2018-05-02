$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06":     "ee",
			"07":     "aa",
			"08":     "bb",
			"09":     "bb",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['物料编码','物料大类','物料小类','物料种类','规格','数量','单位','单价','小计'],
		hasCheckBox:true
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	utilObj.bindDeleteEvent(tb1,'#btn_add1-2')
	$("#btn_add").click(function(){
		var setKeyVal ={
			title:'添加出库物料'					
		}
		modalBulider.modal('template1',setKeyVal);
		$("form").submit(function(e){
			e.preventDefault();
		})
	})
	$("form").submit(function(e){
		e.preventDefault();
	})
})
