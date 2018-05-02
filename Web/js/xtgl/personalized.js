$(function(){
	var data1 =[{
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
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['图片编号','上传时间','图片名称','是否应用'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"checkadministrator"},{text:"应用",eventname:"dd"}]
	}
	var tb = new tableBuilder("#table_id_personalized",data1,op);
	//选择模板
	$('.mouldbox .mouldelement').on('click',function(){
		$('.mouldbox .mouldelement').removeClass('selected');
		$('.mouldbox .mouldelement a').text('选择模板');
		$(this).addClass('selected');
		$(this).find('a').text('已选择');		
	});
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//背景图片上传
	$('#btn_picupload').on('click',function(){
		var setKeyVal ={
			title:'添加背景图片',
			containerWidth:'0.7'
		}
		modalBulider.modal('template_addBackPicModal',setKeyVal);
	});
	//本地获取
	/*$('body').on('click','#btn_localpic',function(){
		var setKeyVal ={
			title:'本地选取',
			containerWidth:'0.7'
		}
		modalBulider.modal('template_addlocalPicModal',setKeyVal);
	});*/
});