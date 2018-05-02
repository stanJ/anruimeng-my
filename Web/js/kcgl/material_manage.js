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
		dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','单位'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"check"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	utilObj.bindDeleteEvent(tb1,'#btn_add4');
	$("form").submit(function(e){
		e.preventDefault();
	})
	$("#btn_add1").click(function(){
		detail('新增物料类别');
	})
	$("#btn_add3").click(function(){
		detail1();
	})
})
function detail1(){
	var setKeyVal ={
		title:'物料类别导入'	,
		shown:function(){
			var data2 =[
				{
					"01":     "aa",
					"02":     "bb",
					"03":     "bb",
					"04": 	  "cc",
					"05":     "bb",
					"06":     "bb",
					"07":     "bb",
				},
				{
					"01":     "aa",
					"02":     "bb",
					"03":     "bb",
					"04": 	  "cc",
					"05":     "bb",
					"06":     "bb",
					"07":     "bb",
				},
				{
					"01":     "aa",
					"02":     "bb",
					"03":     "bb",
					"04": 	  "cc",
					"05":     "bb",
					"06":     "bb",
					"07":     "bb",
				},
				{
					"01":     "aa",
					"02":     "bb",
					"03":     "bb",
					"04": 	  "cc",
					"05":     "bb",
					"06":     "bb",
					"07":     "bb",
				},
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
			var op2={
				dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','单位','导入结果'],
				hasCheckBox:false,
//				tableHeight:'100px',
//				scrollBottom:"bottom",
			}
			var tb2 = new tableBuilder("#table2",data2,op2);
			modalBulider.resize();
		}
	}
	modalBulider.modal('template2',setKeyVal);
	
}

function bottom(){
	console.log("bottom");
}
function check(){
	detail('编辑物料类别')
}
function detail(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template1',setKeyVal);
	utilObj.buildEditableTree("#frmt");
}
