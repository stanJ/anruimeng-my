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
		},
	];
	var op2={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['物料编号','物料大类','物料小类','物料名称','规格','数量','单位',],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"detail"}],
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
})
function detail(){
	var setKeyVal ={
		title:'退换货物料列表',
		shown:function(){
			var data3 = [
				{
					"01":     "aa",
					"02":     "bb",
					"03":     "bb",
					"04": 	  "cc",
					"05":     "dd",
				},
			];
			var op3={
				dataTitles:['物料种类','规格','位置','批次','数量',],
				hasCheckBox:false
			}
			var tb3 = new tableBuilder("#table3",data3,op3);
			modalBulider.resize();
		}
	}
	modalBulider.modal('template1',setKeyVal);
}
