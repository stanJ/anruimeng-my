$(function(){
	//巡检表信息table
	var data =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['巡检表名称','类型','设备名称','设备编号'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"check"}]
	}
	var tb = new tableBuilder("#table_id_tabInfolist",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	$("#btn_add").on("click",function(){
		addInspectionList('新增巡检表');
	});
	
})
function modify(){
	addInspectionList('编辑巡检表')
}
//查看巡检检查项
function addInspectionList(title){
	var setKeyVal ={
		title:title,
		containerWidth:'0.7'
	}
	modalBulider.modal('template_mycheckinspectionitem',setKeyVal);
	var data4 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},

		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
	];
	var op4={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['巡检表名称','类型','设备名称','设备编号'],
		hasCheckBox:true,
		//buttons:[{text:"",eventname:""}]
	}
	var tb4 = new tableBuilder("#table_id_inspecionItem",data4,op4);
	modalBulider.resize();
}