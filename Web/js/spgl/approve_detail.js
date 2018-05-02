$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
		},
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
		},
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
		},
	];
	var op1={
		dataSpecial:{
			3:{
				visible:true,
				render: function(data, type, row, meta){
					var h = '';
					if(meta.row==0){
						h += '<span dataRow="'+meta.row+'"  dataCol="'+meta.col+'" class="sui-text-green">'+data+'</span>';
					}else if(meta.row==1){
						h += '<span dataRow="'+meta.row+'"  dataCol="'+meta.col+'" class="sui-text-grey">'+data+'</span>';
					}else{
						h += '<span dataRow="'+meta.row+'"  dataCol="'+meta.col+'" class="sui-text-red">'+data+'</span>';
					}
			    		return h;
			    }
			}
		},
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['申请人','审批人','审批时间','审批状态','未通过原因'],
		hasCheckBox:false
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	var data2 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06":     "bb",
			"07": 	  "cc",
			"08":     "dd",
		},
	];
	var op2={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['物料名称','物料大类','物料小类','物料种类','规格','数量','单价','备注'],
		hasCheckBox:false,
		buttons:[{text:"查看",eventname:"chakan"}],
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function chakan(){
	var setKeyVal ={
		title:'物料批次参数详情'					
	}
	modalBulider.modal('template1',setKeyVal);
	var data3 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
		},
	];
	var op3={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['批次编号','单价','批次数量','入库时间','位置'],
		hasCheckBox:false,
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
	$("form").submit(function(e){
		e.preventDefault();
	})
}