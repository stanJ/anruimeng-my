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
		dataTitles:['仓库名称','位置','库管姓名','库管电话'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"check1"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	utilObj.bindDeleteEvent(tb1,'#btn_add1-2');
	var data2 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
		},
	];
	var op2={
		dataTitles:['货位编号','项目现场','仓库名称'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"check2"}],
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	utilObj.bindDeleteEvent(tb2,'#btn_add2-2')
	var data3 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04":     "aa",
			"05":     "bb",
			"06":     "bb",
			"07":     "aa",
			"08":     "bb",
			"09":     "bb",
		},
	];
	var op3={
		dataTitles:['物料编码','物料名称','规格','批次号','数量','单价','单位','部门','货位编号'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"check3"}],
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
	utilObj.bindDeleteEvent(tb3,'#btn_add3-3')
	var data4 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04":     "aa",
			"05":     "bb",
			"06":     "bb",
			"07":     "aa",
			"08":     "bb",
			"09":     "bb",
		},
	];
	var op4={
		dataTitles:['物料编码','物料名称','批次号','记录日期','仓库','数量','单价','单位','金额'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"check4"}],
	}
	var tb4 = new tableBuilder("#table4",data4,op4);
	utilObj.bindDeleteEvent(tb4,'#btn_add4-3');
	var data5 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04":     "aa",
			"05":     "bb",
			"06":     "bb",
		},
	];
	var op5={
		dataTitles:['规则名称','最小报警数量','报警间隔','联系人名称','邮箱','电话'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"check5"}],
	}
	var tb5 = new tableBuilder("#table5",data5,op5);
	utilObj.bindDeleteEvent(tb5,'#btn_add5-3');
	var data6 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04":     "aa",
			"05":     "bb",
			"06":     "bb",
		},
	];
	var op6={
		dataTitles:['物料大类','物料小类','物料名称','物料编码','规格','限额'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"check6"}],
	}
	var tb6 = new tableBuilder("#table6",data6,op6);
	utilObj.bindDeleteEvent(tb6,'#btn_add6-3');
	var data7 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04":     "aa",
			"05":     "bb",
		},
	];
	var op7={
		dataTitles:['物料大类','物料小类','物料名称','物料编码','单价',],
		hasCheckBox:false,
		buttons:[{text:"编辑",eventname:"check7"}],
		columnsExt: [{
			title: "ABC",
			class: 'dt-center',
			render: function(data, type, row, meta) {
				var h = '<span class="sui-dropdown dropdown-bordered select"><span class="dropdown-inner"><a role="button" data-toggle="dropdown" data-trigger="hover" href="javascript:void(0);" class="dropdown-toggle" style="width:40px;line-height:22px"><input value="" name="city" type="hidden">\
				<i class="caret"></i><label>ABC</label></a><ul id="menu4" role="menu" class="sui-dropdown-menu"><li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);">ABC</a></li></ul></span></span>';
				return h;
			}
		}],
	}
	var tb7 = new tableBuilder("#table7",data7,op7);
	$("form").submit(function(e){
		e.preventDefault();
	})
	
	$("#btn_add1").click(function(){
		detail1('新增仓库详情');
	})
	$("#btn_add2").click(function(){
		detail2('新增货位详情');
	})
	$("#btn_add3").click(function(){
		detail3('新增期初库存');
	})
	$("#btn_add3-1").click(function(){
		import1();
	})
	$("#btn_add4").click(function(){
		detail4('新增不合格品详情');
	})
	$("#btn_add4-1").click(function(){
		import1();
	})
	$("#btn_add5").click(function(){
		detail5('新增规则详情');
	})
	$("#btn_add5-2").click(function(){
		import2();
	})
	$("#btn_add6").click(function(){
		detail6('新增领用规则详情');
	})
	$("#btn_add6-2").click(function(){
		import2();
	})
	$("#btn_add7-2").click(function(){
		import2();
	})
})
function import1(){
	var setKeyVal ={
		title:'物料导入'	,
		shown:function(){
			var data =[
				{
					"01":     "aa",
					"02":     "bb",
					"03":     "bb",
					"04": 	  "cc",
					"05":     "bb",
					"06":     "bb",
					"07":     "bb",
					"08":     "bb",
					"09":     "bb",
					"10":     "bb",
					"11":     "bb",
				},
			];
			var op={
				dataTitles:['物料编码','规格','批次号','数量','单价','货位编号','位置1','位置2','位置3','部门','导入结果',],
				hasCheckBox:false,
			}
			var tb7_1 = new tableBuilder("#table7-1",data,op);
			modalBulider.resize();
		}
	}
	modalBulider.modal('template7',setKeyVal);
}
function import2(){
	var setKeyVal ={
		title:'物料类别导入',
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
			var tb7_2 = new tableBuilder("#table7-1",data2,op2);
			modalBulider.resize();
		}
	}
	modalBulider.modal('template7',setKeyVal);
}
function check1(){
	detail1('编辑仓库详情');
}
function check2(){
	detail2('编辑货位详情');
}
function check3(){
	detail3('编辑期初库存');
}
function check4(){
	detail4('编辑不合格品详情');
}
function check5(){
	detail5('编辑规则详情');
}
function check6(){
	detail6('编辑领用规则详情');
}
//function check7(){
//	detail1('编辑仓库详情');
//}
function detail1(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template1',setKeyVal);
}
function detail2(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template2',setKeyVal);
}
function detail3(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template3',setKeyVal);
}
function detail4(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template4',setKeyVal);
}
function detail5(title){
	var setKeyVal ={
		title:title,
		shown:function(){
			var h = '';
			h += '<ul class="query-group clearfix"> <li> <label> 项目名称 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop7" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li> <label> 现场名称 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop8" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li> <label> 仓库名称 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"><li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>'; 
			h += '<li> <label> 物料大类 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li> <label> 物料小类 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li> <label> 物料名称 </label> <span class="sui-dropdown dropdown-bordered select"> <span class="dropdown-inner"> <a id="drop9" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" class=""> <i class="caret"></i><span>请选择</span> </a> <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu"> <li role="presentation" class=""> <a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a> </li> </ul> </span> </span> </li>';
			h += '<li class="query-li"> <a class="sui-btn btn-primary fr" style="margin-left:52px;">查询</a> </li> </ul>';
			loadDoubleTables({
				tb1:{
					data:[
						{
							"01":     "aa",
							"02":     "bb",
						}
					],
					op:{
						dataTitles:['物料编码','规格',],
						hasCheckBox:true
					},
					title:'可选项'
				},
				tb2:{
					data:[
						{
							"01":     "aa",
							"02":     "bb",
						}
					],
					op:{
						dataTitles:['物料编码','规格',],
						hasCheckBox:true
					},
					title:'已选项'
				},
				el:'#db-tables1',
				html:h
			})
		} 
		
	}
	modalBulider.modal('template5',setKeyVal);
}
function detail6(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template6',setKeyVal);
}
