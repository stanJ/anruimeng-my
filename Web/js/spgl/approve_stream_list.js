var approveStreamObj = {
	toNodeList:function(){
		var data2 =[
			{
				"01":     "aa",
				"02":     "bb",
				"03":     "bb",
				"04": 	  "cc",
				"05":     "dd",
			},
		];
		var op2={
			pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['审批节点','审批流','关闭审批任务权限','备注','是否有效'],
			hasCheckBox:true,
			buttons:[{text:"详情",eventname:"approveStreamObj.detail"}],
		}
		var tb2 = new tableBuilder("#table2",data2,op2);
		utilObj.bindDeleteEvent(tb2,'#btn_add2-2')
		$(".member_list").hide();
		$(".node_list").show();
	},
	detail:function(){
		var data3 =[
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
		var op3={
//			pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
			dataTitles:['姓名','邮箱','电话','职位','任岗','工号','备注'],
			hasCheckBox:true,
			buttons:[{text:"详情",eventname:"approveStreamObj.e1"}],
		}
		var tb3 = new tableBuilder("#table3",data3,op3);
		utilObj.bindDeleteEvent(tb3,'#btn_add3-2')
		var data4 =[
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
		var op4={
//			pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
			dataTitles:['姓名','邮箱','电话','职位','任岗','工号','备注'],
			hasCheckBox:true,
			buttons:[{text:"详情",eventname:"approveStreamObj.e1"}],
		}
		var tb4 = new tableBuilder("#table4",data4,op4);
		utilObj.bindDeleteEvent(tb4,'#btn_add4-2')
		$(".member_list").show();
	},
	e1:function(){
		alert('11');
	},
	modify1:function(title){
		var setKeyVal ={
			title:title					
		}
		modalBulider.modal('template1',setKeyVal);
		$("form").submit(function(e){
			e.preventDefault();
		})
	},
	modify2:function(title){
		var setKeyVal ={
			title:title					
		}
		modalBulider.modal('template2',setKeyVal);
		$("form").submit(function(e){
			e.preventDefault();
		})
	},
	modify3:function(title){
		var setKeyVal ={
			title:title,
			shown:function(){
				var data5 =[
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
				var op5={
					pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','邮箱','电话','职务','任岗','手机','工号'],
					hasCheckBox:true,
				}
				var tb5 = new tableBuilder("#table5",data5,op5);
				modalBulider.resize();
			}
		}
		modalBulider.modal('template3',setKeyVal);
		$("form").submit(function(e){
			e.preventDefault();
		})
	},
	modify4:function(title){
		var setKeyVal ={
			title:title,
			shown:function(){
				var data6 =[
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
				var op6={
					pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
					dataTitles:['姓名','邮箱','电话','职务','任岗','手机','工号'],
					hasCheckBox:true,
				}
				var tb6 = new tableBuilder("#table6",data6,op6);
				modalBulider.resize();
			}
		}
		modalBulider.modal('template4',setKeyVal);
		$("form").submit(function(e){
			e.preventDefault();
		})
	},
	bindEvent:function(){
		var _this = this;
		$("#btn_add1").click(function(){
			_this.modify1('新增审批流信息');
		})
		$("#btn_add2").click(function(){
			_this.modify2('新增审批节点信息');
		})
		$("#btn_add3").click(function(){
			_this.modify3('新增审批人信息');
		})
		$("#btn_add4").click(function(){
			_this.modify4('新增通知人信息');
		})
	}
}
$(function(){
	approveStreamObj.bindEvent();
	$(".arm-block").hide();
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06": 	  "cc",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['审批流名','项目名称','现场名称','类型','备注','是否有效'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"approveStreamObj.toNodeList"}],
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	utilObj.bindDeleteEvent(tb1,'#btn_add1-2');
	
	$("form").submit(function(e){
		e.preventDefault();
	})
})

