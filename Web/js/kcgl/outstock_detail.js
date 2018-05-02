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
			"08": 	  "cc",
		},
	];
	var op2={
		dataTitles:['物料编码','物料大类','物料小类','物料名称','规格','单位','数量','小计',],
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
		hasCheckBox:true
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
	utilObj.bindDeleteEvent(tb3,'#btn_add1-2');
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
			title:'添加出库对象',
			shown:function(){
				var h = '';
				h += '<ul class="query-group clearfix">';
				h += '<li> <label> 物料大类 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
				h += '<li> <label> 物料小类 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
				h += '<li> <label> 物料名称 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
				h += '<li> <label> 规格 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
				h += '<li class="query-li"> <a class="sui-btn btn-primary fr" style="margin-left:52px;">查询</a> </li> </ul>';
				loadDoubleTables({
					html:h,
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
							dataTitles:['物料种类','规格','批次','生产厂家','剩余量','计量单位','出库量','单价'],
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
						title:'可出库物料列表'
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
							dataTitles:['物料种类','规格','批次','生产厂家','计量单位','数量','单价','小计'],
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
						title:'已选定物料列表'
					},
					el:'#db-tables1'
				})
			} 
		}
		modalBulider.modal('template2',setKeyVal);
	})
})
