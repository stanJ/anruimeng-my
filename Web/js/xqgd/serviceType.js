$(function(){
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"loginname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"loginname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"loginname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"loginname":   "$3,120",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
			"loginname1":   "$3,120",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['服务类型(中)','服务种类(中)','服务子类(中)','等级','服务类型(英)','服务种类(英)','服务子类(英)','默认处理组','自动派发开始时间','自动派发结束时间'],
		hasCheckBox:true,
		//buttons:[{text:"查看",eventname:"checkadministrator"}]
	}
	var tb = new tableBuilder("#table_id_serviceType",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	$("#btn_clear_1").on("click",function(){
		utilObj.confirm({
			title:'确认清空服务类型模板',
			body:'是否确认清空XX项目XX现场下的所有服务类型？',
			okHide:function(){
				console.log('点击确认')
			}
		})
	});
	
	$('#btn_import').on('click',function(){
		uploadService();
	});
})
function uploadService(){
	var data1 =[{
		"username": "aaaa",
		"xmname":   "System ",
		"xcname":   "$3,120",
		"type":       "aaaa",
		"companyname":   "System ",
		"loginname":   "$3,120",
		"type1":       "aaaa",
		"companyname1":   "System ",
		"loginname1":   "$3,120",
	},
	{
		"username": "aaaa",
		"xmname":   "System ",
		"xcname":   "$3,120",
		"type":       "aaaa",
		"companyname":   "System ",
		"loginname":   "$3,120",
		"type1":       "aaaa",
		"companyname1":   "System ",
		"loginname1":   "$3,120",
	},
	{
		"username": "aaaa",
		"xmname":   "System ",
		"xcname":   "$3,120",
		"type":       "aaaa",
		"companyname":   "System ",
		"loginname":   "$3,120",
		"type1":       "aaaa",
		"companyname1":   "System ",
		"loginname1":   "$3,120",
	},
	{
		"username": "aaaa",
		"xmname":   "System ",
		"xcname":   "$3,120",
		"type":       "aaaa",
		"companyname":   "System ",
		"loginname":   "$3,120",
		"type1":       "aaaa",
		"companyname1":   "System ",
		"loginname1":   "$3,120",
	}
];
	var setKeyVal ={
		title:'服务类型上传',
		shown:function(){
			var op = {
				dataTitles:['服务类型(中)','服务种类(中)','服务子类(中)','等级','服务类型(英)','服务种类(英)','服务子类(英)','默认处理组','导入结果'],
				/*dataSpecial: sp2,
				buttons: [{
					text: "查看",
					eventname: "chakan"
				}, {
					text: "删除",
					eventname: "deleteRow"
				}],*/
				tableHeight:'100px',
				scrollBottom:"bottom",
				setting: {}
			}				
			var tb = new tableBuilder("#table_id_importserviceType",data1,op);
			modalBulider.resize();
		}										
	}
	modalBulider.modal('template_myserviceImport',setKeyVal);
}
