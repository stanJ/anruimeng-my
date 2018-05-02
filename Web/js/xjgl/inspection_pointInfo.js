$(function(){
	//巡检点信息table
	var data =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
		{
			"username": "bbbb",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
		{
			"username": "cccc",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		},
		{
			"username": "dddd",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['巡检点名称','到达时间','是否上传照片','允许偏差时间'],
		hasCheckBox:true,
		buttons:[
		{text:"巡检表信息",eventname:"checktabInfo"},
		{text:"编辑",eventname:"modify"},
		{text:"查看",eventname:"check"},
		{text:"上移",eventname:"goUp"},
		{text:"下移",eventname:"goDown"}
		]
	}
	var tb = new tableBuilder("#table_id_pointlistTab",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增巡检点点击事件
	$('#btn_add').on('click',function(){
		change('新增巡检点')
	});
})
function modify(){
	change('编辑巡检点')
}
function change(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template_myaddpointInfo',setKeyVal);
}
//查看巡检表信息
function checktabInfo(){
	location.href="inspection_tabInfo.html";
}
function goUp(obj){
	var tr = $(obj).parents('tr:first');
	var tbody = tr.parent('tbody');
	var index = tr.index();
	if(index!=0){
		var trUper = tbody.children('tr').eq(index-1);
		tr.insertBefore(trUper);
	}
}
function goDown(obj){
	var tr = $(obj).parents('tr:first');
	var tbody = tr.parent('tbody');
	var index = tr.index();
	var total = tbody.children('tr').length;
	if(index!=total){
		var trDowner = tbody.children('tr').eq(index+1);
		tr.insertAfter(trDowner);
	}
}