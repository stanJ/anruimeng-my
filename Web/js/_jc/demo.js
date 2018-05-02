//$(function(){
	$('.nav-tabs a').click(function (e) {
	    e.preventDefault();
	    $(this).tab("show");
	});
	//点击tab中的表格项时,才创建固定高度表格，这类表格的计算需要在页面显示时才能正确计算宽度与高度
	$('.nav-tabs a:eq(3)').on("shown",function(){
    	var tb2 = new tableBuilder("#tb_2", data3, op2);
    });
	$("input[name=time]").val('14:23');
	var getTime = function(){
		var time = $("input[name=time]").val();
		alert(time)
	}
	//验证
	$("#form-1").validate({
		rules:{
			city:{
				required:true
			},
			xingming:{
				required:true
			},
			chihe:{
				required:true
			},
			food:{
				required:true,
				minlength:3,
				maxlength:5
			},
			content:{
				required:true,
				maxlength:10
			},
			lianjie:{
				required:true
			},
			qudao:{
				required:true
			},
			m1:{
				required:true
			},
			zt:{
				required:true
			},
		},
		success:function(){
			alert('可以提交表单了');
		},
//		placeError:function($input,$error){
//			var $curForm = $input.parents('form');
////			if($curForm.children('.msg-error').length>0){
////				$curForm.children('.msg-error').remove();
////			}
//			$curForm.append($error);
//		},
//		highlight:function($input, $error, inputErrorClass) { 
//			$input.addClass(inputErrorClass); 
////			$(".msg-error").hide();
//			$error.show();
//		},
//		unhighlight: function($input, $error, inputErrorClass) { 
//			$input.removeClass(inputErrorClass);
////			$(".msg-error").hide();
//			$error.hide()
//		}
		

	});
	
	//弹框
	seajs.use("_jc_modal-test");
	
	//loading
	$("#showLoading1").click(function(){
//		utilObj.showLoading('body');
		var setting ={
			bgColor:'#000',
			bgOpacity:0,
			sizeClass:'loading-large',
			el:'body'
		};
		utilObj.showLoading(setting);
		setTimeout(function(){utilObj.hideLoading();},1000);
	});
	//进度条
	var progress=null;
	$("#showProgress").click(function(){
		var setting ={
			type:'progress-success'
		};
		progress = new progressBuilder("#div_progress",setting);
	});
	$("#setProgress").click(function(){
		if(progress) progress.setWidth("80%");
	});
	
	//table-demo
	var data2 = [
		{
			"name": "张三",
			"address": "浦东区龙阳路",
			"position": "总经理",
			"age": "42",
			"company": "绿意",
			"id": "001"
		},
		{
			"name": "李四",
			"address": "普陀区长寿路",
			"position": "经理",
			"age": "35",
			"company": "起迪",
			"id": "002"
		},
		{
			"name": "王五",
			"address": "奉贤区海湾路",
			"position": "销售总监",
			"age": "28",
			"company": "泰丰",
			"id": "003"
		},
		{
			"name": "赵六",
			"address": "长宁江苏路",
			"position": "程序员",
			"age": "25",
			"company": "麒麟",
			"id": "004"
		}, 
	];
var sp = {
	0: {
		visible: true,
		class: "hide"//隐藏，但数据还在页面中，比较适合放id字段
	}
};
var op = {
	dataTitles: ['id', '姓名', '年龄', '居住地', '公司', '职位'],
	columns:['id','name','age','address','company','position'],//用来标记数据 added by jc
	dataSpecial: sp,
	hasCheckBox: true,
	buttons: [{
		text: "查看",
		eventname: "chakan"
	}, {
		text: "删除",
		eventname: "deleteRow"
	}],
	columnsExt: [{
		title: "额外",
		class: 'dt-left',
		render: function(data, type, row, meta) {
			return '<input type="text" value="额外" class="input-medium" style="width:50px" >';
		}
	}],
	pagination: {
		currentPage: 1,
		pages: 30,
		displayPage: pageSetting.Pagination_DefaultPage,
		selectedEvent: "dopageing"
	},
	setting: {}
}
var tb = new tableBuilder("#tb_1", data2, op);

	
	//固定高度表格
	
var data3 = [{
	"name": "aaaa",
	"position": "System ",
	"salary": "$3,120"
}, {
	"name": "bbb",
	"position": "Director",
	"salary": "$5,300"
}, {
	"name": "ccc",
	"position": "System Architect",
	"salary": "$3,120"
}, {
	"name": "aaaa",
	"position": "SysSystem",
	"salary": "SysSystem "
}];
var sp2 = {
	0: {
		class: "tdEllipsis50 dt-left"
	},
	1: {
		class: "tdEllipsis50 dt-left"
	},
	2: {
		class: "tdEllipsis50 dt-left"
	},
	3: {
		class: "tdEllipsis50 dt-left"
	}
};
var op2 = {
	dataTitles: ['111', '222', '333', '44', '55', '66'],
	dataSpecial: sp2,
	buttons: [{
		text: "查看",
		eventname: "chakan2"
	}, {
		text: "删除",
		eventname: "deleteRow2"
	}],
	tableHeight:'100px',
	scrollBottom:"bottom",
	setting: {}
}
//var tb2 = new tableBuilder("#tb_2", data3, op2);//代码见line 8

//创建数据为空的表格
var spEp = {
	0: {
		visible: true,
		class: "hide"//隐藏，但数据还在页面中，比较适合放id字段
	}
};
var opEp = {
	dataTitles: ['id', '姓名', '年龄', '居住地', '公司', '职位'],
	columns:['id','name','age','address','company','position'],//用来标记数据顺序以及创建空数据table added by jc
	dataSpecial: spEp,
	hasCheckBox: true,
	buttons: [{
		text: "查看",
		eventname: "chakan"
	}, {
		text: "删除",
		eventname: "deleteRow"
	}],
	columnsExt: [{
		title: "额外",
		class: 'dt-left',
		render: function(data, type, row, meta) {
			return '<input type="text" value="额外" class="input-medium" style="width:50px" >';
		}
	}],
	pagination: {
		currentPage: 1,
		pages: 30,
		displayPage: pageSetting.Pagination_DefaultPage,
		selectedEvent: "dopageing"
	},
	setting: {}
}
var tbEp = new tableBuilder("#tb_ep",[], opEp);
//更新页码总数和数据总数
//三个参数依次为总页数、当前页数、数据总数
tbEp.paginationObj.updatePagesAndItemsCount(0,1,0)



	//tree-demo
	var dataJSON = [
		{
			"text" : "系统权限",
			"state" : { "opened" : true },
			"id" : '0',
			"children" : [
				{
					"text" : "后台管理人员",
					"state" : { "selected" : true },
					"id" : '0-0',
					"children" :[
						{
							"text" : "后台人员列表",
							"state" : { "selected" : true },
							"icon" : "jstree-file",
							"id" : '0-0-0'
						},
						{
							"text" : "后台人员列表",
							"state" : { "selected" : true },
							"icon" : "jstree-file",
							"id" : '0-0-1'
						}
					]
				},
				{ 
					"text" : "前端管理层", 
					"state" : { "selected" : true },
					"id" : '0-1'
				},
				{ 
					"text" : "系统角色管理", 
					"state" : { "selected" : true },
					"id" : '0-2'
				},
				{ 
					"text" : "系统管理员管理", 
					"state" : { "selected" : true },
					"id" : '0-3'
				},
				{ 
					"text" : "项目角色管理", 
					"state" : { "selected" : true },
					"id" : '0-4'
				},
			]
		},
		{
			"text" : "项目管理",
			"state" : { "selected" : false },
			"id" : '1'
		},
		{
			"text" : "系统设置",
			"state" : { "selected" : false },
			"id" : '2'
		},
		{
			"text" : "数据统计",
			"state" : { "selected" : false },
			"id" : '3'
		}
	];
	
	var tree1 = new treeBuilder("#tree1", dataJSON, {
		displayType:"hasCheck",
		onChange:function(e,data){
			console.log("onChange");
		},
		onSelected:function(e,data){
			console.log("onSelected");
		},
		onDeSelected:function(e,data){
			console.log("onDeSelected");
		},
	});
	$("#selectedTree").click(function(){
		alert(JSON.stringify(tree1.getSelectedNode()));
	})
	$("#selectOne").click(function(){
		tree1.selectNodes(['2','3']);
	})
	
	var tree2 = new treeBuilder("#tree2", dataJSON, {
		displayType:"normal",
		onAddNode:function(nodeInfo){
			console.log(nodeInfo);
		},
		onRenameNode:function(nodeInfo){
			console.log(nodeInfo);
		},
		onDeleteNode:function(e,deleted){
			console.log(deleted);
		}
	});
	
	
	//左右结构
	var data3 = [{
		"name": "aaaa",
		"position": "System ",
		"salary": "$3,120"
	}, {
		"name": "bbb",
		"position": "Director",
		"salary": "$5,300"
	}, {
		"name": "ccc",
		"position": "System Architect",
		"salary": "$3,120"
	}, {
		"name": "aaaa",
		"position": "SysSystem",
		"salary": "SysSystem "
	}];
	var op3 = {
		hasCheckBox: true,
		dataTitles: ['aa', '22', '33'],
		tableHeight:'100px'
	}
	$("#btn_leftright").on("click",function(){
		modalBulider.modal('template_myModal2',{shown:function(){
			var tb4 = new tableBuilder("#tb_4", data3, op3);
			var tb5 = new tableBuilder("#tb_5", data3, op3);
			$("#div_test1 .movetoright").on("click",function(){
				$("#tb_4 label.checked").each(function(){
					var data= tb4.getSelectedRow($(this).parents("tr:first"));
					tb4.removeRow($(this).parents("tr:first"));
					tb5.addRow(data);
				});
			});
			$("#div_test1 .movetoleft").on("click",function(){
				$("#tb_5 label.checked").each(function(){
					var data= tb5.getSelectedRow($(this).parents("tr:first"));
					tb5.removeRow($(this).parents("tr:first"));
					tb4.addRow(data);
				});
			});
		}});
	});
	
//})
	
//查看详情
function chakan(obj) {
	alert($(obj).parents("tr:first").find("td.hide").find("span").html());
};

//删除行
function deleteRow(obj) {
	tb.removeRow($(obj).parents("tr:first"));
}

//分页点击
function dopageing(num) {
	alert(num);
}

function bottom(){
	console.log("到达底部");
}

//清空select
function selectClear(){
	$('#menu4').html("");
}
//添加一条
function selectAdd(){
	$('#menu4').append('<li role="presentation"><a role="menuitem" href="javascript:void(0);" value="1">add</a></li>');
}
//删除某一条
function selectDel(){
	//按index删除
	$('#menu4 li:eq(1)').remove();
	//按value删除
	$('#menu4 a[value="sb"]').parent().remove();
}
//编辑
function selectEdit(){
	$('#menu4 li:eq(1) a').html("edittext");
	$('#menu4 li:eq(1) a').attr("value","editvalue");
}
//变只读
function selectReadOnly(){
	$("#drop111 i").hide();
	$("#drop111").next().hide();
}
//选择某个作为当前项
function selectByValue(){
	$('#menu4 a[value="sb"]').click();
}
//获取当前选项
function selectGetCurrent(){
	alert($('#drop111 span').text());
	alert($('#drop111 input').val());
}

function inputClear(){
	$('input[name="xingming"]').val("");
}
function inputEdit(){
	$('input[name="xingming"]').val("edit");
}
function inputReadOnly(){
	$('input[name="xingming"]').attr("readonly","readonly");
}
function inputGet(){
	alert($('input[name="xingming"]').val())
}


function radioGet(){
	alert($("input[name='qudao']:checked").val());
	alert($("input[name='qudao']:checked").next().text().trim());
}
function radioSet(){
	$("input[name='qudao'][value='3']").parent("label").click();
}
function radioDisable(){
	$("input[name='qudao'][value='2']").parent("label").addClass("disabled");
	$("input[name='qudao'][value='2']").attr("disabled","disabled");
}


function checkboxAllChecked(){
	$("input[name='m1']:not(:checked)").parent().click();
}
function checkboxAllUnChecked(){
	$("input[name='m1']:checked").parent().click();
}
function checkboxGet(){
	$("input[name='m1']:checked").each(function(){
		alert($(this).next().text().trim()+"___"+$(this).val());
	});
}
function checkboxSet(){
	var index=1;
	$("input[name='m1']:eq("+index+"):not(:checked)").parent().click();
}
function checkboxUnSet(){
	var index=1;
	$("input[name='m1']:eq("+index+"):checked").parent().click();
}
function checkboxDisable(){
	var index=2;
	$("input[name='m1']:eq("+index+")").parent().addClass("disabled");
	$("input[name='m1']:eq("+index+")").attr("disabled","disabled");
}


function tableAddRows(){
	//tb为创建时所获得的对象  //var tb = new tableBuilder("#tb_1", data2, op);
	var data=[{
		"name": "马云",
		"address": "浦东区龙阳路",
		"position": "董事长",
		"age": "42",
		"company": "Alibaba",
		"id": "007"
	}];
	tb.addRows(data);
}
function tableRemoveRows(){
	//传入对应的行
	tb.removeRow($("#tb_1 tr:eq(2)"));
}
function tableGetRow(){
	//传入对应的行
	alert(JSON.stringify(tb.getRow($("#tb_1 tr:eq(2)"))));
}

function tableGetSelectedRow(){
	alert(JSON.stringify(tb.getSelectedRow())) ;
}

function tableSetRowData(){
	//获取table中的数据
	var dataArray = tb.DataTableObj.data();
	//编辑第一行的salery字段
	dataArray[0]["name"]="小马哥";
	//重绘
	tb.DataTableObj.rows().invalidate().draw();
}
function tableSetPaginationInfo(){
	//三个参数依次为总页数、当前页数、数据总数
	tb.paginationObj.updatePagesAndItemsCount(35,3,86);
}
function tableSetDataEmpty(){
	tb.resetData([]);
}
function datepickerCreate(){
	//基本
//	$("#datestart").datepicker();

	//配置格式，并定义初始日期
	$("#datestart").datepicker({
		format: "yyyy-mm",
	});
	$('#datestart').datepicker('update', new Date(2017, 0, 5));
}

function datepickerGet(){
	//直接获取文字内容
//	alert($("#datestart").val());
	//获取时间对象
	alert($('#datestart').datepicker('getDate'));
}
