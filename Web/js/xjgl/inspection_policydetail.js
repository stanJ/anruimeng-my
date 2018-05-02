$(function(){
	//表单明细导出table
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
		dataTitles:['巡检表名称','上传时间','类型','设备名称','设备编号'],
		hasCheckBox:true,
		buttons:[{text:"详情1",eventname:"check1"},{text:"详情2",eventname:"check2"}]
	}
	var tb = new tableBuilder("#table_id_policydetailTab",data,op);
	
})
//查看巡检任务详情
function check1(){
	var setKeyVal ={
		title:'表单详情',
		containerWidth:'0.7',
	};		
	modalBulider.modal('template_mychecktaskdetail',setKeyVal);
	var data1 =[
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
		},
	];
	var op1={
		dataTitles:['20160909','出风温度','湿度',],
		hasCheckBox:false,
	}
	var tb1 = new tableBuilder("#table_id_taskDetailTab",data1,op1);
	var data2 =[{
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
	];
	var op2={
		dataTitles:['20160910','出风温度','湿度',],
		hasCheckBox:false,
	}
	var tb2 = new tableBuilder("#table_id_taskpauseTab",data2,op2);
	modalBulider.resize();
	
}
function check2(){
	var setKeyVal ={
		title:'表单详情',
		containerWidth:'0.7',
	};		
	modalBulider.modal('template_form_detail',setKeyVal);
	
}