$(function(){
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
			"05":     "dd",
			"06":     "ee",
			"07":     "aa",
			"08":     "bb",
			"09":     "bb",
		},
	];
	var op1={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['物料编码','物料大类','物料小类','物料种类','规格','数量','单位','单价','小计'],
		hasCheckBox:true
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
	utilObj.bindDeleteEvent(tb1,'#btn_add1-2')
	$("#btn_add2").click(function(){
		var setKeyVal ={
			title:'添加自定义物料'
		}
		modalBulider.modal('template2',setKeyVal);
		$("form").submit(function(e){
			e.preventDefault();
		})
	})
	$("#btn_add").click(function(){
		var setKeyVal ={
			title:'添加库存中物料'					
		}
		modalBulider.modal('template1',setKeyVal);
		$("form").submit(function(e){
			e.preventDefault();
		})
	})
	$("form").submit(function(e){
		e.preventDefault();
	})
	$("body").on("click",".addParam",function(){
		$(".firstRow").hide();
		$(this).parents('.sui-form:first').append('<div class="roleAddcontent paramList"><label>参数名称1</label><input type="text" class="input-medium" /><label>说明</label><input type="text" class="input-medium" /><label>要求</label><input type="text" class="input-medium" /><a href="javascript:void(0);" class="sui-btn btn-bordered btn-danger ml20-jc removeParam">删除</a><a href="javascript:void(0);" class="sui-btn btn-bordered btn-primary ml20-jc addParam">添加</a></div>');
		$(".paramList .addParam").hide();
		$(".paramList .addParam").last().show();
		modalBulider.resize();
	});
	$("body").on("click",".removeParam",function(){
		$(this).parent().remove();
		if($(".modal-body .paramList").length<=0){
			$(".modal-body .firstRow").show();
		}
		$(".paramList .addParam").last().show();
		modalBulider.resize();
	});
})
	
