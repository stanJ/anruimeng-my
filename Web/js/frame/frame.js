var frameObj = {
	menuData:{
		xtgl:{
			text:'系统管理',
			class:'system-icon',
			index:{
				color:'color-gold',
				icon:'index-system-icon',
			},
			children:[				
				{
					text:'后台角色管理',
					url:'role_management'
				},
				{
					text:'后台人员管理',
					url:'staff_management'
				},
				{
					text:'项目管理',
					url:['project_management','project_management_add']
				},
				{
					text:'供应商',
					url:'supplier'
				},
				{
					text:'甲方人员管理',
					url:['firstparty_management','firstparty_management_zuzhijiagou']
				},
				{
					text:'乙方人员管理',
					url:['secondparty_management','secondparty_management_zuzhijiagou']
				},
				{
					text:'超级管理员管理',
					url:'administrator'
				},
				{
					text:'个性化登录',
					url:'personalized'
				},
				{
					text:'同步',
					url:'synchro'
				},
				{
					text:'系统初始化',
					url:'systemInit'
				}
				
			]
		},
		rygl:{
			text:'人员管理',
			class:'personnel-icon',
			index:{
				color:'color-red',
				icon:'index-personnel-icon',
			},
			children:[
				{
					text:'日历管理',
					url:'calendar'
				},
				{
					text:'考勤管理',
					url:'attendance'
				},				
				{
					text:'前端角色管理',
					url:'frontRole'
				},
				{
					text:'分组管理',
					url:'group_management'
				},
				{
					text:'甲方人员管理',
					url:'firstpartystaff'
				},
				{
					text:'乙方人员管理',
					url:'secondpartystaff'
				},
				{
					text:'任岗信息',
					url:'rg_Information'
				},
			]
		},
		xxgl:{
			text:'消息管理',
			class:'message-icon',
			index:{
				color:'color-gold',
				icon:'index-message-icon',
			},
			children:[
				{
					text:'客户反馈消息',
					url:'customerfeedback'
				},
				{
					text:'执行人反馈消息',
					url:'executorfeedback'
				},
				{
					text:'用户消息',
					url:'news_manage'
				},
				{
					text:'消息群发',
					url:'newsMass_manage'
				},
			]
		},
		spgl:{
			text:'审批管理',
			class:'examination-icon',
			index:{
				color:'color-red',
				icon:'index-examination-icon',
			},
			children:[
				{
					text:'审批流设置',
					url:['approve_stream_list']
				},
				{
					text:'审批管理',
					url:['approve_manage','approve_detail']
				},
				{
					text:'入库申请',
					url:'instock_apply'
				},
				{
					text:'出库申请',
					url:'outstock_apply'
				},
				{
					text:'调拨申请',
					url:'allot_apply'
				},
				{
					text:'退换货申请',
					url:'refund_apply'
				},
				{
					text:'批次冻结申请',
					url:'freeze_apply'
				},
				{
					text:'不合格品处理申请',
					url:'unqualify_apply'
				},
				{
					text:'报废申请',
					url:'scrap_apply'
				},
				{
					text:'自定义申请',
					url:'custom_apply'
				},
			]
		},
		tj:{
			text:'统计',
			class:'statistical-icon',
			index:{
				color:'color-red',
				icon:'index-statistical-icon',
			},
			children:[
				{
					text:'工单统计',
					url:'workorder_statistics'
				},
				{
					text:'设备管理统计',
					url:'equipment_manage_statistics'
				},
				{
					text:'库存统计',
					url:'stock_statistics'
				},
				{
					text:'工作绩效统计',
					url:'performance_statistics'
				},
				{
					text:'能耗统计',
					url:'energy_consumption_statistics'
				},
				{
					text:'系统统计',
					url:'stystem_statistics'
				},
				{
					text:'统计设置',
					url:'statistics_set'
				},
				{
					text:'质量管理统计',
					url:'quality_manage_statistics'
				},
				{
					text:'成本统计',
					url:'cost_statistics'
				},
				{
					text:'账单录入',
					url:'bill_input'
				},
			]
		},
		xqgd:{
			text:'需求工单',
			class:'demand-icon',
			index:{
				color:'color-gold',
				icon:'index-demand-icon',
			},
			children:[
				
				{
					text:'服务类型管理',
					url:'serviceType'
				},
				{
					text:'工单等级管理',
					url:'jobOrderList'
				},
				{
					text:'供应商管理',
					url:'xq_supplier'
				},
				{
					text:'转派理由管理',
					url:'transferreasons'
				},
				{
					text:'工单新增',
					url:'orderIncreased'
				},
				{
					text:'需求工单管理',
					url:['Requirement','RequirementDetail']
				},
				{
					text:'工单转派管理',
					url:['order_transfer','order_transfer_detail']
				},
				{
					text:'审核工单管理',
					url:['workOrderAudit','workOrderDetail']
				},
				{
					text:'满意度管理',
					url:'satisfaction'
				},
				{
					text:'服务类型高级管理',
					url:'Serviceadvanced'
				},
			]
		},
		yfxwhgd:{
			text:'预防性维护工单',
			class:'maintenance-icon',
			index:{
				color:'color-blue',
				icon:'index-maintenance-icon',
			},
			children:[				
				{
					text:'预防性维护管理',
					url:'maintenanceEntry'
				},
				{
					text:'维护规则管理',
					url:'maintenance'
				},
				{
					text:'设备管理',
					url:['device_management','device_modify']
				},
				{
					text:'预防性维护表管理',
					url:'maintenanceTable'
				},
				{
					text:'预防性维护计划管理',
					url:'plansList'
				},
				{
					text:'预防性工单管理',
					url:['preventiveworklist','preventiveworkDetail']
				},
				{
					text:'工单审核管理',
					url:['orderAudit','orderAuditDetail']
				},
				{
					text:'表单导出',
					url:'formExport'
				},
				{
					text:'报警联系人管理',
					url:'alarmContact'
				},
				{
					text:'转派审批管理',
					url:['transferapproval','transferDetail']
				},
				{
					text:'预防性维护项高级管理',
					url:'Serviceadvanced'
				},
			]
		},
		xjgl:{
			text:'巡检管理',
			class:'inspection-icon',
			index:{
				color:'color-green',
				icon:'index-inspection-icon',
			},
			children:[
				{
					text:'巡检检查项管理',
					url:'inspection_checkitem'
				},
				{
					text:'巡检规则管理',
					url:'inspection_rules'
				},
				{
					text:'设备管理',
					url:'inspection_device'
				},
				{
					text:'巡检工作表管理',
					url:'inspection_worktab'
				},
				{
					text:'暂停规则管理',
					url:'inspection_pauseRule'
				},
				{
					text:'巡检线路管理',
					url:['inspection_circuit','inspection_pointInfo','inspection_tabInfo']
				},
				{
					text:'巡检任务管理',
					url:'inspection_tasklist'
				},
				{
					text:'表单明细导出',
					url:'inspection_policydetail'
				},
				{
					text:'报警联系人管理',
					url:'inspection_alarmcontact'
				},
				{
					text:'巡检检查项高级管理',
					url:'inspection_serviceadvanced'
				},
			]
		},
		kcgl:{
			text:'库存管理',
			class:'inventory-icon',
			index:{
				color:'color-green',
				icon:'index-inventory-icon',
			},
			children:[
				{
					text:'物料类别管理',
					url:'material_manage'
				},
				{
					text:'报警规则设置',
					url:'alarm_set'
				},
				{
					text:'库存设置',
					url:'stock_set'
				},
				{
					text:'入库管理',
					url:['instock_manage','instock_detail',]
				},
				{
					text:'出库管理',
					url:['outstock_manage','outstock_detail']
				},
				{
					text:'调拨管理',
					url:'allot_manage'
				},
				{
					text:'退换货',
					url:['change_refund','change_refund_outstock','change_refund_instock',]
				},
				{
					text:'批次冻结管理',
					url:'freeze_manage'
				},
				{
					text:'盘盈盘亏管理',
					url:'profit_loss_manage'
				},
				{
					text:'不合格品管理',
					url:'unqualify_manage'
				},
				{
					text:'报废管理',
					url:'scrap_manage'
				},
				{
					text:'出入库明细',
					url:['out_instock_detail','out_instock_detail_1']
				},
				{
					text:'库存查询',
					url:'stock_query'
				},
			]
		},
		zlgl:{
			text:'质量管理',
			class:'quality-icon',
			index:{
				color:'color-blue',
				icon:'index-quality-icon',
			},
			children:[
				{
					text:'质量分析模板管理',
					url:'quality_template_manage'
				},
				{
					text:'分析设置',
					url:'analyse_set'
				},
				{
					text:'待处理问题',
					url:'problem_pending'
				},
				{
					text:'不需处理问题',
					url:'problem_not_dealt'
				},
				{
					text:'分析任务',
					url:['analyse_task','analyse_task_detail']
				},
				{
					text:'跟进任务',
					url:['follow_task','follow_task_detail',]
				},
			]
		},
		sbgl:{
			text:'设备管理',
			class:'equipment-icon',
			index:{
				color:'color-green',
				icon:'index-equipment-icon',
			},
			children:[
				{
					text:'设备管理',
					url:'device_management'
				},
				{
					text:'知识库',
					url:'knowledgeBase'
				},
			]
		},
		_jc:{
			text:'demo',
			children:[
				{
					text:'demo内容',
					url:'demo'
				},
				{
					text:'模板',
					url:'template'
				},
				{
					text:'二级菜单实例',
					url:''
				},
				{
					text:'二级菜单实例',
					url:''
				},
			]
		}
	},
	pageBase:'page',
	host:function(){
		return location.href.substring(0,location.href.indexOf(this.pageBase));
	},
	scroll:function(obj){
		var distance = obj.distance;
		var type = obj.type;
		var el = obj.el;
		var curPos = $(el).scrollTop();
		if(type=='up'){
			$(el).scrollTop(curPos-distance);
		}else{
			$(el).scrollTop(curPos+distance);
		}
	},
	loadLeftMenu:function(data){
		var data = this.menuData;
		var h = '';
		for(key in data){
			var url = data[key].children[0].url;
			if(url instanceof Array){
				url = url[0];
			}else if(typeof(url) == 'string'){
				url = url;
			}
			h += '<a href="javascript:void(0)" data-href="'+key+'/'+url+'">\
					<div class="icon-a '+data[key].class+'" data-placement="right" title="'+data[key].text+'" >\
					</div>\
				 </a>';
		}
		$("#icon-list").html(h);
	},
	loadIndexMenu:function(){
		var data = this.menuData;
		var h = '<div class="index-module-wrapper">\
			<span class="index-title">设备管理平台</span><ul class="index-module-ul">';
		$.each(this.indexAry,function(){
			var url = data[this].children[0].url;
			var indexObj = data[this].index;
			if(url instanceof Array){
				url = url[0];
			}else if(typeof(url) == 'string'){
				url = url;
			}
			h += '<li class="index-module-li" data-href="'+this+'/'+url+'">\
						<div class="module-color-block '+indexObj.color+'"></div>\
						<div class="module-icon index-system-icon '+indexObj.icon+'"></div>\
						<div class="module-text">'+data[this].text+'</div>\
					</li>';
		})
		h += '</ul></div>';
		$("#second-menu-wrapper").html(h);
			
		
	},
	indexAry:['xtgl','rygl','yfxwhgd','xjgl','xxgl','spgl','kcgl','zlgl','tj','xqgd','sbgl',],
	loadSecondMenu:function(){
		_this = this;
		var info = utilObj.getUrlInfo();
		if(info.url=='index'){
			_this.loadIndexMenu();
			return;
		}
		var data = this.menuData[info.curMenu];
		if(data){
			var h = '<div id="second-menu"><span class="arm-title">'+data.text+'</span><ul class="second-menu-list">';
			var i = 0;
			for(;i<data.children.length;i++){
				var url = data.children[i].url;
				if(typeof(url) == 'string'){
					if(url == info.url){
						h += '<li class="second-menu-li second-menu-li-selected" data-url="'+url+'">';
					}else{
						h += '<li class="second-menu-li" data-url="'+url+'">';			  	
					}
				}else if(utilObj.isAry(url)){
					h += '<li class="second-menu-li';
					for(var j=0;j<url.length;j++){
						if(url[j] == info.url){
							h += ' second-menu-li-selected ';
						}
					}
					h += '"data-url="'+url[0]+'">';
				}
				h += 	'<div class="second-menu-li-content">'+data.children[i].text+'</div>\
						<div class="second-menu-li-icon"></div>\
					  </li>';
			}
			h += '</ul></div>';
			$("#second-menu-wrapper").html(h);
			$(".second-menu-list").on('click','.second-menu-li',function(){
				$(".second-menu-li").removeClass('second-menu-li-selected');
				$(this).addClass('second-menu-li-selected');
				var href = $(this).data('url');
				utilObj.navigate(href);
			})
		}	
	},
	loadFrame:function(){
		_this = this;
		var h = '<header> </header> <div id="left-menu"> </div> <div id="second-menu-wrapper"> </div>';
		h += '<div id="right-panel">\
				<div class="color-block"></div>\
				<div class="rp-text">技术答疑</div>\
				<div class="rp-icon-wrapper">\
					<div class="rp-icon rp-icon-online"></div>\
					<div class="rp-icon rp-icon-online"></div>\
					<div class="rp-icon rp-icon-online"></div>\
					<div class="rp-icon rp-icon-offline"></div>\
				</div>\
				<div class="rp-img1"><div class="rp-triangle"></div></div>\
			</div>';
		$("body").prepend(h);

		$("header").load(this.host()+'/page/frame/header.html',function(){
			$("#main-menu").click(function(){
				$("#left-menu").slideToggle('fast',function(){
					//
				})
				$("#header-wrapper").children().eq(0).insertAfter($("#header-wrapper").children().eq(1));
			})
			$("#header-wrapper .logo").click(function(){
				var href = $(this).data('href');
				utilObj.navigate(href);
			})
		});
		$("#left-menu").load(this.host()+'/page/frame/leftmenu.html',function(){
			_this.loadLeftMenu();
			$("#up-btn").click(function(){
				_this.scroll({
					distance:25,
					type:'up',
					el:'#icon-list'
				})
			})
			$("#down-btn").click(function(){
				_this.scroll({
					distance:25,
					type:'down',
					el:'#icon-list'
				})
			})

			$(".icon-a").not(".icon-state").tooltip({
				animation:false
			})
			$("#icon-list>a").click(function(){
				var href = $(this).attr('data-href');
				utilObj.navigate(href);
			})
		});
		this.loadSecondMenu();
		$(".index-module-ul>.index-module-li").click(function(){
			var href = $(this).data('href');
			utilObj.navigate(href);
		})
	},
	bindEvent:function(){
		$(".close-wrapper").click(function(){
			$(this).siblings('img').attr('src','');
		})
	},
	init:function(){
		this.bindEvent();
		this.loadFrame();
	}
}
frameObj.init();
var pageSetting={
	Pagination_DefaultPage:8
}
function dopageing(){
	alert('selected');
}

