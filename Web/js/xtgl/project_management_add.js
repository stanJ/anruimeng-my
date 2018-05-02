$(function(){
	var id = utilObj.getUrlParam('modify');
	if(id){
		$(".nav-text-second").text('编辑信息');
		$(".arm-title-text").text('编辑信息');
	}else{
		$(".nav-text-second").text('新增信息');
		$(".arm-title-text").text('新增信息');
	}
	var data1 = [{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
			"01": "aaaa",
			"02":   "System ",
		},
		];
	var datas ={
		xunjian:[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
			"01": "aaaa",
			"02":   "System ",
		},
		],
		yufang:[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
			"01": "aaaa",
			"02":   "System ",
		},
		],
		fuwu:[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
			"01": "aaaa",
			"02":   "System ",
			"03": "aaaa",
			"04":   "System ",
			"05": "aaaa",
			"06":   "System ",
		},
		],
		zhiliang:[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"username1": "aaaa",
			"xmname1":   "System ",
			"01": "aaaa",
		},
		],
	};
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['姓名','邮箱','电话','职务','等级','手机','工号'],
		hasCheckBox:true
	}
	var tb = new tableBuilder("#tb_1",data1,op);
	$('.arm-back-wrapper').on('click',function(){ 
		history.back(-1);
	});
	
	//上传模板
	$(".btn1").on("click",function(){
		var title=$(this).text();
		var type = $(this).data("type");
		var setKeyVal ={
			title:title,
			shown:function(){
				var op={
					dataTitles:titleList[type],
//					tableHeight:'50px'
				}
				var tb = new tableBuilder("#table_id_upload",datas[type],op);
				modalBulider.resize();
			}
		}
		modalBulider.modal('template_upload',setKeyVal);
	});
	var titleList={
		xunjian:['系统','设备类别','工作内容','标准、参数','单位','默认分组','导入结果'],
		yufang:['系统','设备类别','工作内容','标准、参数','单位','默认分组','导入结果'],
		fuwu:['服务类型(中)','服务种类(中)','服务子类(中)','工单等级','服务类型(英)','服务种类(英)','服务子类(英)','默认处理组','自动派发开始时间','自动派发结束时间','导入结果'],
		zhiliang:['大骨','中骨','小骨','孙骨','曾孙骨','导入结果']
	}

})