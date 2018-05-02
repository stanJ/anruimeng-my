var tjObj = {
	tjTitlesData:{
		workorder_statistics:[
			{
				text:'需求工单按时完成率',
				code:'xqgd1'
			},
			{
				text:'预防性维护工单按时完成率',
				code:'xqgd10'
			},
			{
				text:'需求工单完成率',
				code:'xqgd2'
			},
			{
				text:'预防性维护工单完成率',
				code:'xqgd11'
			},
			{
				text:'需求工单各服务类型数量比例',
				code:'xqgd3'
			},
			{
				text:'需求工单分类占比',
				code:'xqgd12'
			},
			{
				text:'需求与预防性工单',
				code:'xqgd4'
			},
			{
				text:'需求工单等级占比',
				code:'xqgd13'
			},
			{
				text:'需求工单类别占比',
				code:'xqgd5'
			},
			{
				text:'需求工单满意度占比',
				code:'xqgd14'
			},
			{
				text:'需求工单满意度回馈率',
				code:'xqgd6'
			},
			{
				text:'需求工单复查完成比例',
				code:'xqgd17'
			},
			{
				text:'需求工单复查通过比例',
				code:'xqgd7'
			},
			{
				text:'需求工单复查按时比例',
				code:'xqgd15'
			},
			{
				text:'预防性工单复查通过比例',
				code:'xqgd8'
			},
			{
				text:'预防性工单复查完成比例',
				code:'xqgd16'
			},
			{
				text:'预防性工单复查按时完成比例',
				code:'xqgd9'
			},
		],
		performance_statistics:[
			{
				text:'巡检准点率',
				code:'jx1'
			},
			{
				text:'需求工单响应时间',
				code:'jx4'
			},
			{
				text:'有效工作时间百分比',
				code:'jx2'
			},
			{
				text:'考勤',
				code:'jx5'
			},
			{
				text:'巡检问题统计',
				code:'jx3'
			},
			{
				text:'工作时间百分比',
				code:'jx6'
			},
		],
		cost_statistics:[
			{
				text:'维修人员成本',
				code:'cb1'
			},
			{
				text:'维保人员成本',
				code:'cb4'
			},
			{
				text:'巡检人员成本',
				code:'cb2'
			},
			{
				text:'维修设备成本',
				code:'cb5'
			},
			{
				text:'维保设备成本',
				code:'cb3'
			},
			{
				text:'项目成本',
				code:'cb6'
			},
		],
		stystem_statistics:[
			{
				text:'权限统计',
				code:'xt1'
			},
			{
				text:'用户统计',
				code:'xt3'
			},
			{
				text:'职位统计',
				code:'xt2'
			},
			
		],
		energy_consumption_statistics:[
			{
				text:'能耗消耗量统计',
				code:'nh1'
			},
			{
				text:'能耗读数统计',
				code:'nh2'
			},
			{
				text:'每平方米能耗统计',
				code:'nh3'
			},
			{
				text:'月账单统计',
				code:'nh4'
			},
		],
		equipment_manage_statistics:[
			{
				text:'机电巡检参数',
				code:'sb1'
			},
			{
				text:'关键设备故障停机率',
				code:'sb4'
			},
			{
				text:'关键设备故障率',
				code:'sb2'
			},
			{
				text:'设备物料费用排名',
				code:'sb5'
			},
			{
				text:'设备费用比率',
				code:'sb3'
			},
			{
				text:'设备物料费用比率',
				code:'sb6'
			},
		],
		stock_statistics:[
			{
				text:'物料总金额',
				code:'kc1'
			},
			{
				text:'物料消耗量',
				code:'kc3'
			},
			{
				text:'消耗TOP10',
				code:'kc2'
			},
			{
				text:'ABC库存推荐',
				code:'kc4'
			},
		],
		quality_manage_statistics:[
			{
				text:'质量问题原因分析统计',
				code:'zg1'
			},
			{
				text:'原因对象统计',
				code:'zg4'
			},
			{
				text:'问题人员统计',
				code:'zg2'
			},
			{
				text:'分析任务按时完成率',
				code:'zg5'
			},
			{
				text:'分析任务完成率',
				code:'zg3'
			},
		],
	},
	loadTitles:function(){
		var data = this.tjTitlesData;
		var urlInfo = utilObj.getUrlInfo();
		var curMenu = urlInfo.curMenu;
		var url = urlInfo.url;
		if(curMenu == 'tj'){
			if(data[url]){
				var d = data[url];
				var h = '';
				if(url == 'workorder_statistics'){
					h += '<ul class="query-group clearfix tj-titles-wrapper tj-title-wrapper-lg">';
				}else if(url == 'performance_statistics'){
					h += '<ul class="query-group clearfix tj-titles-wrapper tj-title-wrapper-md">';
				}else if(url == 'equipment_manage_statistics'){
					h += '<ul class="query-group clearfix tj-titles-wrapper tj-title-wrapper-md">';
				}else if(url == 'quality_manage_statistics'){
					h += '<ul class="query-group clearfix tj-titles-wrapper tj-title-wrapper-md">';
				}else{
					h += '<ul class="query-group clearfix tj-titles-wrapper">';

				}
				for(var i=0;i<d.length;i++){
					h += '<li>';
					if(i==0){
						$("#"+d[i].code+"").show();
						$(".arm-title-xs").eq(0).text(d[i].text);
						h += '<div class="tj-title-wrapper tj-title-selected" data-href="'+d[i].code+'">';
					}else{
						h += '<div class="tj-title-wrapper" data-href="'+d[i].code+'">';
					}		
					h +=			'<div class="tj-title-icon"></div>\
								<div class="tj-title-text">'+d[i].text+'</div>\
								<div class="tj-title-badge"></div>\
							</div>\
						</li>';
				}
				h += '</ul>';
				$(".sui-form").eq(0).prepend(h);
			}
		}
	},
	bindEvent:function(){
		$(".tj-title-wrapper").click(function(){
			$(".tj-title-wrapper").removeClass('tj-title-selected');
			$(this).addClass('tj-title-selected');
			var href = $(this).data('href');
			$(".tj-input-group").hide();
			$("#"+href+"").show();
			var text = $(this).children(".tj-title-text").text();
			$(".arm-title-xs").eq(0).text(text);
			if(href.indexOf('jx')!=-1){
				if(href == 'jx3'){
					$(".tj-problem-wrapper").show();
					$("#table1").show();
					$(".tj-chart").hide();
				}else if(href == 'jx5'){
					$(".tj-problem-wrapper").hide();
					$("#table2").show();
					$(".tj-chart").hide();
				}else{
					$(".tj-problem-wrapper").hide();
					$("#table1").hide();
					$("#table2").hide();
					$(".tj-chart").show();
				}
			}else if(href.indexOf('kc')!=-1){
				if(href == 'kc4'){
					$(".kc-content-normal").hide();
					$("#kc-abc").show();
				}else if(href == 'kc1'){
					$(".kc-content-normal").show();
					$("#kc-abc").hide();
					$("#tree1").show();
				}else{
					$(".kc-content-normal").show();
					$("#kc-abc").hide();
					$("#tree1").hide();
				}
			}else if(href.indexOf('zg')!=-1){
				if(href == 'zg2'){
					$("#zg-zg2").show();
				}else{
					$("#zg-zg2").hide();
				}
			}else if(href.indexOf('sb')!=-1){
				if(href == 'sb1'){
					$(".kc-content-normal").show();
					$("#tree1").show();
				}else{
					$(".kc-content-normal").show();
					$("#tree1").hide();
				}
			}else if(href.indexOf('cb')!=-1){
				if(href == 'cb6'){
					$(".cb-checkbox-wrapper-outer").show();
				}else{
					$(".cb-checkbox-wrapper-outer").hide();
				}
			}else if(href.indexOf('nh')!=-1){
				if(href == 'nh1' || href == 'nh2'){
					$(".tj-option").show();
				}else{
					$(".tj-option").hide();
				}
			}else if(href.indexOf('xt')!=-1){
				if(href == 'xt3'){
					$("#table1").show();
				}else{
					$("#table1").hide();
				}
			}
			
		})
	},
	init:function(){
		this.loadTitles();
		this.bindEvent();
	}
}
$(function(){
	tjObj.init();
})

