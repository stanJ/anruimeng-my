$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06": 	  "cc",
			"07":     "dd",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['发票号','账单类型','名称','金额','开始时间','结束时间','月份'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"chakan"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("form").submit(function(e){
		e.preventDefault();
	})
	$("#btn_add").click(function(){
		change('新增账单信息')
	})
})
function modify(){
	change('编辑账单信息');
}
function change(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template1',setKeyVal);
	var data2 =[
		{
			"url":     "../../skin/images/ic_default.png",
			"02":     "bb",
			"03":     "bb",
			"04":     "bb",
		},
	];
	var op2={
		dataSpecial:{ 
			0:{
				visible:true,
				render: function(data, type, row, meta){
					return '<img src="'+data+'" class="arm-tb-img">';
			    }
			}
		},
		dataTitles:['缩略图','文件名称','上传时间','文件类型'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"detail"}],
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	$("form").submit(function(e){
		e.preventDefault();
	})
}

