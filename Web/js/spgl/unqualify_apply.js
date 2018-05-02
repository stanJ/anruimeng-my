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
			"10": 	  "cc",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['物料编码','物料大类','物料小类','物料种类','规格','批次','数量','单位','单价','小计'],
		hasCheckBox:true
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	utilObj.bindDeleteEvent(tb1,'#btn_add1-2')
	$("#btn_add").click(function(){
		var setKeyVal ={
			title:'添加不合格品'					
		}
		modalBulider.modal('template1',setKeyVal);
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
			pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['物料种类','规格','位置','批次','库存数量','单位','单价'],
			hasCheckBox:true,
			columnsExt: [{
				title: "不合格品数量",
				class: 'arm-table-input',
				render: function(data, type, row, meta) {
					return '<input type="text" value="" class="input-medium" >';
				}
			}],
		}
		var tb2 = new tableBuilder("#table2",data2,op2);
	})
	$("form").submit(function(e){
		e.preventDefault();
	})
})
