var version = '0.0.1';
var reference = {
	xtgl:{
		'xtgl_administrator':'myjs/administrator.js',
		'xtgl_firstparty_management':'myjs/firstPartymanagement.js',
		'xtgl_personalized':'myjs/personalized.js',
		'xtgl_staff_management':'myjs/staff_management.js',
		'xtgl_role_management':'myjs/role_management.js',
		'xtgl_secondparty_management':'myjs/secondPartymanagement.js',
		'xtgl_supplier':'myjs/supplier.js',
		'xtgl_project_management':'myjs/project_management.js',
		'xtgl_synchro':'myjs/synchro.js',
		'xtgl_systemInit':'myjs/systemInit.js',
		'xtgl_firstparty_management_zuzhijiagou':'myjs/firstparty_management_zuzhijiagou.js',
		'xtgl_secondparty_management_zuzhijiagou':'myjs/secondparty_management_zuzhijiagou.js',
		'xtgl_project_management_add':'myjs/project_management_add.js'
	},
	rygl:{
		'rygl_secondpartystaff':'myjs/secondpartystaff.js',//已方人员管理
		'rygl_firstpartystaff':'myjs/firstpartystaff.js',//甲方人员管理
		'rygl_calendar':'myjs/calendar.js',//日历管理
		'rygl_rg_Information':'myjs/rg_Information.js',//任岗信息管理
		'rygl_frontRole':'myjs/frontRole.js',//前端角色管理
		'rygl_attendance':'myjs/attendance.js',//考勤管理
		'rygl_group_management':'myjs/group_management.js'//分组管理
	},
	xxgl:{
		'xxgl_news_manage':'myjs/news_manage.js',//用户消息管理
		'xxgl_newsMass_manage':'myjs/newsMass_management.js',//消息群发管理
		'xxgl_executorfeedback':'myjs/executorfeedback.js',//执行人反馈消息管理
		'xxgl_customerfeedback':'myjs/customerfeedback.js',//客户反馈消息管理
	},
	spgl:{
		'spgl_scrap_apply':'myjs/scrap_apply.js',//报废申请
		'spgl_unqualify_apply':'myjs/unqualify_apply.js',//不合格品处理申请
		'spgl_outstock_apply':'myjs/outstock_apply.js',//出库申请
		'spgl_allot_apply':'myjs/allot_apply.js',//调拨申请
		'spgl_freeze_apply':'myjs/freeze_apply.js',//批次冻结申请
		'spgl_instock_apply':'myjs/instock_apply.js',//入库申请
		'spgl_approve_manage':'myjs/approve_manage.js',//审批管理
		'spgl_approve_detail':'myjs/approve_detail.js',//审批详情
		'spgl_approve_stream_list':'myjs/approve_stream_list.js',//审批流列表
		'spgl_refund_apply':'myjs/refund_apply.js',//退换货申请
		'spgl_custom_apply':'myjs/custom_apply.js',//自定义申请
	},
	tj:{
		'tj_public':'myjs/tj_public.js',//统计公共js
		'tj_statistics_set':'myjs/statistics_set.js',//统计设置
		'tj_workorder_statistics':'myjs/workorder_statistics.js',//工单统计
		'tj_performance_statistics':'myjs/performance_statistics.js',//工作绩效统计
		'tj_cost_statistics':'myjs/cost_statistics.js',//成本统计
		'tj_stystem_statistics':'myjs/stystem_statistics.js',//系统统计
		'tj_energy_consumption_statistics':'myjs/energy_consumption_statistics.js',//能耗统计
		'tj_bill_input':'myjs/bill_input.js',//账单录入
		'tj_equipment_manage_statistics':'myjs/equipment_manage_statistics.js',//设备管理统计
		'tj_stock_statistics':'myjs/stock_statistics.js',//库存统计
		'tj_quality_manage_statistics':'myjs/quality_manage_statistics.js',//质量管理统计
	},
	xqgd:{
		'xqgd_satisfaction':'myjs/satisfaction.js',//满意度管理
		'xqgd_xq_supplier':'myjs/xq_supplier.js',//供应商管理
		'xqgd_Serviceadvanced':'myjs/Serviceadvanced.js',//服务类型高级管理
		'xqgd_transferreasons':'myjs/transferreasons.js',//转派理由列表
		'xqgd_serviceType':'myjs/serviceType.js',//服务类型管理
		'xqgd_jobOrderList':'myjs/jobOrderList.js',//工单等级列表
		'xqgd_orderIncreased':'myjs/orderIncreased.js',//工单新增
		'xqgd_workOrderAudit':'myjs/workOrderAudit.js',//工单审核管理
		'xqgd_workOrderDetail':'myjs/workOrderDetail.js',//工单审核详情
		'xqgd_RequirementDetail':'myjs/RequirementDetail.js',//需求工单详情
		'xqgd_Requirement':'myjs/Requirement.js',//需求工单详情
		'xqgd_order_transfer':'myjs/order_transfer.js',//需求工单详情
		'xqgd_order_transfer_detail':'myjs/order_transfer_detail.js',//需求工单详情
	},
	yfxwhgd:{
		'yfxwhgd_preventiveworklist':'myjs/preventiveworklist.js',//预防性工单列表
		'yfxwhgd_preventiveworkDetail':'myjs/preventiveworkDetail.js',//预防性工单列表详情
		'yfxwhgd_orderAudit':'myjs/orderAudit.js',//工单审核管理
		'yfxwhgd_orderAuditDetail':'myjs/orderAuditDetail.js',//工单审核管理详情
		'yfxwhgd_formExport':'myjs/formExport.js',//表单导出
		'yfxwhgd_alarmContact':'myjs/alarmContact.js',//报警联系人
		'yfxwhgd_transferapproval':'myjs/transferapproval.js',//转派管理
		'yfxwhgd_transferDetail':'myjs/transferDetail.js',//转派管理详情
		'yfxwhgd_maintenance':'myjs/maintenance.js',//维护规则管理
		'yfxwhgd_plansList':'myjs/plansList.js',//预防性维护计划管理
		'yfxwhgd_maintenanceTable':'myjs/maintenanceTable.js',//预防性维护表管理
		'yfxwhgd_device_management':'myjs/device_management.js',//设备管理
		'yfxwhgd_device_modify':'myjs/device_modify.js',//设备编辑
		'yfxwhgd_maintenanceEntry':'myjs/maintenanceEntry.js',//预防性维护导入
		'yfxwhgd_Serviceadvanced':'myjs/Serviceadvanced.js',//服务类型高级管理
	},
	xjgl:{
		'xjgl_inspection_tasklist':'myjs/inspection_tasklist.js',//巡检任务管理
		'xjgl_inspection_checkitem':'myjs/inspection_checkitem.js',//巡检检查项管理
		'xjgl_inspection_rules':'myjs/inspection_rules.js',//巡检规则管理
		'xjgl_inspection_device':'myjs/inspection_device.js',//设备管理
		'xjgl_inspection_worktab':'myjs/inspection_worktab.js',//巡检工作表管理
		'xjgl_inspection_pauseRule':'myjs/inspection_pauseRule.js',//暂停规则管理
		'xjgl_inspection_policydetail':'myjs/inspection_policydetail.js',//表单明细导出
		'xjgl_inspection_alarmcontact':'myjs/inspection_alarmcontact.js',//报警联系人管理
		'xjgl_inspection_serviceadvanced':'myjs/inspection_serviceadvanced.js',//巡检检查项高级管理
		'xjgl_inspection_circuit':'myjs/inspection_circuit.js',//巡检线路管理
		'xjgl_inspection_pointInfo':'myjs/inspection_pointInfo.js',//巡检点信息
		'xjgl_inspection_tabInfo':'myjs/inspection_tabInfo.js',//巡检表信息
	},
	kcgl:{
		'kcgl_scrap_manage':'myjs/scrap_manage.js',//报废管理
		'kcgl_alarm_set':'myjs/alarm_set.js',//报警规则设置
		'kcgl_unqualify_manage':'myjs/unqualify_manage.js',//不合格品管理
		'kcgl_outstock_manage':'myjs/outstock_manage.js',//出库管理
		'kcgl_outstock_detail':'myjs/outstock_detail.js',//出库详情
		'kcgl_out_instock_detail':'myjs/out_instock_detail.js',//出入库明细
		'kcgl_out_instock_detail_1':'myjs/out_instock_detail_1.js',//出入库明细详情
		'kcgl_allot_manage':'myjs/allot_manage.js',//调拨管理
		'kcgl_change_refund':'myjs/change_refund.js',//退换货管理
		'kcgl_change_refund_outstock':'myjs/change_refund_outstock.js',//退换货管理
		'kcgl_change_refund_instock':'myjs/change_refund_instock.js',//退换货管理
		'kcgl_stock_query':'myjs/stock_query.js',//库存查询
		'kcgl_profit_loss_manage':'myjs/profit_loss_manage.js',//盘盈盘亏管理
		'kcgl_freeze_manage':'myjs/freeze_manage.js',//批次冻结管理
		'kcgl_instock_manage':'myjs/instock_manage.js',//入库管理
		'kcgl_instock_detail':'myjs/instock_detail.js',//入库详情
		'kcgl_material_manage':'myjs/material_manage.js',//物料类别管理
		'kcgl_stock_set':'myjs/stock_set.js',//库存设置
	},
	zlgl:{
		'zlgl_quality_template_manage':'myjs/quality_template_manage.js',//质量分析模板管理
		'zlgl_analyse_set':'myjs/analyse_set.js',//分析设置
		'zlgl_analyse_task':'myjs/analyse_task.js',//分析任务
		'zlgl_analyse_task_detail':'myjs/analyse_task_detail.js',//分析任务详情
		'zlgl_follow_task':'myjs/follow_task.js',//跟进任务
		'zlgl_follow_task_detail':'myjs/follow_task_detail.js',//跟进任务详情
		'zlgl_problem_pending':'myjs/problem_pending.js',//待处理问题
		'zlgl_problem_not_dealt':'myjs/problem_not_dealt.js',//不需处理问题
	},
	sbgl:{
		'sbgl_device_management':'myjs/device_management.js',//设备管理
		'sbgl_knowledgeBase':'myjs/knowledgeBase.js',//知识库
	},
	_jc:{
		'_jc_demo':'myjs/demo.js',
		'_jc_modal-test':'myjs/modal-test.js',
	},
	_fred:{
		'_fred_datatables':'myjs/datatables.js'
	},
	frame:{
		'frame_util':'myjs/util.js',
	    'frame_frame':'myjs/frame.js',
	},
	index:{
		'index_index':'myjs/index.js',
	},
	login:{
		'login_index':'myjs/login.js',
	},
}

var alias = {
	'jquery':'jquery/jquery-3.1.1.js',
	'jstree':'jstree/jstree.js',
	'sui':'sui/sui.js',
	'template':'template/template.js',
//	'datatables':'//cdn.bootcss.com/datatables/1.10.13/js/jquery.dataTables.js',
	'datatables':'datatables/datatables.js',
	'switch':'switch/simple.switch.js',
}
for(key in reference){
	for(k1 in reference[key]){
		var src = reference[key][k1];
		if(src.indexOf('myjs')!=-1){
			alias[k1] = src.replace(/myjs/g,'../../js/'+key);
		}
	}
}
for(i in alias){
	alias[i] += '?v='+version+'';
}
seajs.config({
	base:'../../lib',
	alias:alias
})
