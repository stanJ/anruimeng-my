$(function(){
	//工单等级列表table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",				
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",				
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",			
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['工单等级','要求响应时间','要求解决时间','复查比例','复查要求完成时间'],
		hasCheckBox:true,
		buttons:[{text:"编辑",eventname:"chakan"}]
	}
	var tb = new tableBuilder("#table_id_joborderlist",data1,op);
	
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	$('#btn_add').on('click',function(){
		modify('新增工单等级');
	});
	$('body').on('click','#btn_addJobOrder',function(){
		modalBulider.modal('template_tipsucceed',null);	
	});
})
function chakan(){
	modify('编辑工单等级');
}
function modify(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template_myaddjobOrder',setKeyVal);
}
