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
		dataTitles:['物料名称','物料规格','最小数量','报警间隔','联系人名称','邮箱','电话'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"check"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	utilObj.bindDeleteEvent(tb1,'#btn_add4');
	$("form").submit(function(e){
		e.preventDefault();
	})
	$("#btn_add1").click(function(){
		detail('新增规则详情');
	})
})
function check(){
	detail('编辑规则详情');
}
function detail(title){
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
	modalBulider.modal('template1',setKeyVal);
}
