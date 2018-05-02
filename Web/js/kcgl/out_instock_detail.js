$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['单据号','类型1','类型2','工单编号'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"detail"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function detail(){
	utilObj.navigate('out_instock_detail_1')
//	var setKeyVal ={
//		title:'物料出库详情'					
//	}
//	modalBulider.modal('template1',setKeyVal);
	var data2 = [
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06":     "ee",
			"07":     "aa",
			"08": 	  "cc",
			"09":     "dd",
			"10":     "ee",
			"11":     "aa",
		},
	];
	var op2={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','批次号','申报日期','仓库','位置123','数量','单价','小计',],
		hasCheckBox:false
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	var data3 = [
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06":     "ee",
			"07":     "aa",
			"08": 	  "cc",
		},
	];
	var op3={
		dataTitles:['物料种类','规格','批次','生产厂家','计量单位','数量','单价','小计'],
		hasCheckBox:false
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
	var data4 = [
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
		},
	];
	var op4={
		dataTitles:['文件名称','文件类型','上传时间'],
		hasCheckBox:false
	}
	var tb4 = new tableBuilder("#table4",data4,op4);
	$("#btn_add1").click(function(){
		var setKeyVal ={
			title:'添加出库对象'					
		}
		modalBulider.modal('template2',setKeyVal);
	})
}
