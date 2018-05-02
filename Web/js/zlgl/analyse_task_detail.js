$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "bb",
			"06":     "bb",
			"07":     "bb",
			"08":     "bb",
		},
	];
	var op1={
		dataTitles:['任务编号','表单名称','工作内容','标准、参数','单位','工作类型','实际参数','原因'],
		hasCheckBox:false,
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	var data2 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05": 	  "cc",
			"06": 	  "cc",
		},
	];
	var op2={
		dataTitles:['工单号','服务类别','服务种类','服务子类','报单时间','执行人'],
		hasCheckBox:false,
		buttons:[{text:"详情",eventname:"detail1"}],
	}
	var tb2 = new tableBuilder("#table2",data2,op2);
	loadTree("#tree1",'hasCheck');
	var data3 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
		},
	];
	var op3={
		dataTitles:['跟进措施人','要求完成时间','解决方案描述'],
		hasCheckBox:true,
	}
	var tb3 = new tableBuilder("#table3",data3,op3);
	utilObj.bindDeleteEvent(tb3,'#btn_add1-2')
	$("#btn_add1-1").click(function(){
		detail2('新增跟进措施执行人');
	})
	$("#btn_add_1").click(function(){
		detail3('新增分析项')
	})
	$("#btn_modify_1").click(function(){
		detail3('编辑分析项')
	})
	$("#btn_delete_1").click(function(){
		utilObj.confirm({
			title:'确认删除',
			body:'请确认是否删除该分析项？',
			okHide:function(){
				console.log('已确认')
			}
		})
	})
	
	
})
function detail1(){
	var setKeyVal ={
		title:'工单详情'					
	}
	modalBulider.modal('template_orderdetail',setKeyVal);
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
function modify2(){
	detail2('编辑跟进措施执行人')
}

