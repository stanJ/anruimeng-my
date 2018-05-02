$(function(){
	//任岗信息table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['岗位名称','直属上级岗位名称','创建时间'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"modify"},{text:"查看",eventname:"checkuserlist"}]
	}
	var tb = new tableBuilder("#table_id_rgInformation",data1,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//添加事件
	$('#btn_add').on('click',function(){
		change('新增信息')
	});
})
function modify(){
	change('编辑信息')
}
function change(title){
	var setKeyVal ={
		title:title,
	}
	modalBulider.modal('template_myaddrgInfo',setKeyVal);
	//直属岗位下人员列表table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"xmname1":   "System ",
			"xcname1":   "$3,120",				
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		}
	];
	var op={
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['人员姓名','项目','公司名','工号','类型'],
		hasCheckBox:false,
		//buttons:[{text:"查看详情",eventname:"dd"}]
	}
	var tb = new tableBuilder("#table_id_zsgwuserlist",data1,op);
	modalBulider.resize();
}
/*查看岗位下人员列表*/
function checkuserlist(){
	var setKeyVal ={
		title:'岗位下人员列表',
	}
	modalBulider.modal('template_mystaffCalendar',setKeyVal);
	//岗位下人员列表table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"xmname1":   "System ",
			"xcname1":   "$3,120",				
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['人员姓名','项目','公司名','工号','类型'],
		hasCheckBox:false,
		//buttons:[{text:"查看详情",eventname:"dd"}]
	}
	var tb = new tableBuilder("#table_id_gwuserlist",data1,op);
	modalBulider.resize();
}