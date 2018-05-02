$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "bb",
			"06":     "bb",
			"07": 	  "cc",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['日期','单据号','数量','转出仓库','转入仓库','类型','状态'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"detail"},{text:"详情2",eventname:"detail2"},{text:"详情3",eventname:"detail3"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	$("form").submit(function(e){
		e.preventDefault();
	})
})
function detail(){
	var setKeyVal ={
		title:'调入单详情'					
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
		},
	];
	var op2={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','出库位置'],
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
		},
	];
	var op3={
		dataTitles:['物料名称','规格','入库货位','批次','数量'],
		hasCheckBox:false,
		dataSpecial:{ 
			2:{
				visible:true,
				class:'dt-center',
				render: function(data, type, row, meta){
			    		return '<span class="sui-dropdown dropdown-bordered select"><span class="dropdown-inner"><a role="button" data-toggle="dropdown" data-trigger="hover" href="javascript:void(0);" class="dropdown-toggle" style="width:40px;line-height:22px"><input value="" name="city" type="hidden">				<i class="caret"></i><label>ABC</label></a><ul id="menu4" role="menu" class="sui-dropdown-menu"><li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);">ABC</a></li></ul></span></span>';
			    }
			}
		},
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
}
function detail2(){
	var setKeyVal ={
		title:'调出单详情'					
	}
	modalBulider.modal('template2',setKeyVal);
	var data4 = [
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
		},
	];
	var op4={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','出库位置','入库位置','数量','单位','小计'],
		hasCheckBox:false
	}
	var tb4 = new tableBuilder("#table4",data4,op4);
	var data5 = [
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
		},
	];
	var op5={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','出库位置','入库位置','数量','单位','小计'],
		hasCheckBox:false
	}
	var tb5 = new tableBuilder("#table5",data5,op5);
	modalBulider.resize();
	$("#btn_add1").click(function(){
		var setKeyVal ={
			title:'添加调拨批次',
			shown:function(){
				var h = '';
				h += '<ul class="query-group clearfix"> <li> <label> 物料大类 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop7" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
				h += '<li> <label> 物料小类 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop8" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
				h += '<li> <label> 物料种类 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"><li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>'; 
				h += '<li> <label> 规格 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
				h += '<li class="query-li"> <a class="sui-btn btn-primary fr" style="margin-left:52px;">查询</a> </li> </ul>';
				loadDoubleTables({
					tb1:{
						data:[
							{
								"01":     "aa",
								"02":     "bb",
								"03":     "bb",
								"04": 	  "cc",
								"05":     "dd",
								"06":     "ee",
								"07":     "aa",
								"08": 	  "cc",
							}
						],
						op:{
							dataTitles:['物料编号','物料名称','规格','剩余量','位置','批次','数量','单价'],
							hasCheckBox:true,
							dataSpecial:{ 
								6:{
									visible:true,
									render: function(data, type, row, meta){
								    		return '<input type="text" value="" class="input-sm" >';
								    }
								}
							},
						},
						title:'可添加调拨物料列表'
					},
					tb2:{
						data:[
							{
								"01":     "aa",
								"02":     "bb",
								"03":     "bb",
								"04": 	  "cc",
								"05":     "dd",
								"06":     "ee",
								"07":     "aa",
								"08": 	  "cc",
							}
						],
						op:{
							dataTitles:['物料编号','物料名称','规格','位置','批次','数量','单价','小计'],
							hasCheckBox:true,
							dataSpecial:{ 
								6:{
									visible:true,
									render: function(data, type, row, meta){
								    		return '<input type="text" value="" class="input-sm" >';
								    }
								}
							},
						},
						title:'已添加调拨物料列表'
					},
					el:'#db-tables1',
					html:h
				})
			} 
		}
		modalBulider.modal('template3',setKeyVal);
	})
}
function detail3(){
	var setKeyVal ={
		title:'调拨单详情'
	}
	modalBulider.modal('template4',setKeyVal);
	var data6 =[
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
			"11":     "ee",
		},
	];
	var op6={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','单位','数量','单价','小计','转出位置','转让位置'],
		hasCheckBox:false,
	}
	var tb6 = new tableBuilder("#table6",data6,op6);
	$("form").submit(function(e){
		e.preventDefault();
	})
}

