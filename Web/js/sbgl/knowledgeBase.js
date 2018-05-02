$(function(){
	//知识库table
	var data =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['文件名称','设备名称','类型','创建时间','最后更新时间'],
		hasCheckBox:true,
		buttons:[
		{text:"更新记录",eventname:"checkupdaterecord"},
		{text:"编辑",eventname:"modify"},
		]
	}
	var tb = new tableBuilder("#table_id_knowledgeBase",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增知识库
	$("#btn_add").on("click",function(){
		change('新增知识库')
	});
	
	
})
function modify(){
	change('编辑知识库')
}
function change(title){
	var setKeyVal ={
		title:title,
		//containerWidth:'0.7'
	};		
	modalBulider.modal('template_myaddknowledge',setKeyVal);
}
//更新记录
function checkupdaterecord(){
	var setKeyVal ={
		title:'文件更新记录',
		//containerWidth:'0.7'
	};		
	modalBulider.modal('template_myfileupdate',setKeyVal);
	var data =[{
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
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['更新时间','操作','备注'],
		hasCheckBox:false,
		//buttons:[{text:"更新记录",eventname:"checkupdaterecord"}]
	}
	var tb = new tableBuilder("#table_id_fileupdate",data,op);
	modalBulider.resize();
}