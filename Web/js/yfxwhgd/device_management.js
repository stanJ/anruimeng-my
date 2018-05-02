$(function(){
	//设备管理table
	var data =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['系统','设备','设备类别','设备名称','设备编码','设备厂家','位置','设备等级'],
		hasCheckBox:true,
		buttons:[{text:"预防性维护表",eventname:"addyfxwhbFun"},{text:"编辑",eventname:"edityfxwhbFun"},{text:"查看",eventname:"checksbInfo"}]
	}
	var tb = new tableBuilder("#table_id_deviceTab",data,op);
	utilObj.bindDeleteEvent(tb,"#delete1")
	//新增设备按钮点击事件
	$('#btn_add').on('click',function(){
//		utilObj.navigate('device_modify')
		addDevice();

	});
	$('#import1').on('click',function(){
		upload1();

	});
	
})
function upload1(){
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"username1": "aaaa",
			"xmname1":   "System ",
			
		},
	];
	var setKeyVal ={
		title:'设备导入',
		shown:function(){
			var op = {
				dataTitles:['设备名称','设备编码','设备等级','生产厂家','设备位置','导入结果',],
				tableHeight:'100px',
				scrollBottom:"bottom",
				setting: {}
			}				
			var tb1 = new tableBuilder("#table_id_importmaintenance",data1,op);
			modalBulider.resize();
		}															
	}
	modalBulider.modal('template1',setKeyVal);
}

//查看预防性维护表
function addyfxwhbFun(){
	var setKeyVal ={
		title:'预防性维护表',
		//containerWidth:'0.7'
	};		
	modalBulider.modal('template_myaddyfxwhtab',setKeyVal);
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
		}
	];
	var op1={
		dataTitles:['维护表名称','类型'],
		hasCheckBox:true,
		buttons:[{text:"查看详情",eventname:"checkwbDetail"}]
	}
	var tb1 = new tableBuilder("#table_id_addwhlist",data1,op1);
	modalBulider.resize();
	
}
function addDevice(){
	var setKeyVal ={
		title:'新增设备信息'					
	}
	modalBulider.modal('template_myadddevicetab',setKeyVal);
}
//编辑设备信息
function edityfxwhbFun(){
	var setKeyVal ={
		title:'编辑设备信息'					
	}
	modalBulider.modal('template_myadddevicetab',setKeyVal);
//	utilObj.navigate('device_modify',{
//		modify:1,
//	})
}

//查看设备信息
function checksbInfo(){
	var setKeyVal ={
		title:'设备信息'					
	}
	modalBulider.modal('template_device_detail',setKeyVal);
//	$('#sbtz,#sbmx').show();
//	$('#btn_addsb').hide();
	var data2 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xmname2":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xmname2":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xmname2":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
			"xmname2":   "System ",
		}
	];
	var op2={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['物料名称','更换状态','物料编号','工单编号','时间'],
		hasCheckBox:false,
		//buttons:[{text:"",eventname:""}]
	}
	var tb2 = new tableBuilder("#table_id_sbtztab",data2,op2);
	var data3 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"username1": "aaaa",
			"xmname1":   "System ",
		}
	];
	var op3={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['物料名称','更换状态','物料编号','时间'],
		hasCheckBox:false,
		//buttons:[{text:"",eventname:""}]
	}
	var tb3 = new tableBuilder("#table_id_sbmxtab",data3,op3);
	modalBulider.resize();
}

//查看维保表详情
function checkwbDetail(){
	var setKeyVal ={
		title:'维保表添加'					
	}
	modalBulider.modal('template_mywbDetailtab',setKeyVal);
	var data4 =[{
			"username": "aaaa",
		},
		{
			"username": "aaaa",
		},
		{
			"username": "aaaa",
		},
		{
			"username": "aaaa",
		}
	];
	var op4={
		dataTitles:['规则名称'],
		hasCheckBox:false,
		buttons:[{text:"应用",eventname:"apply"}]
	}
	var tb4 = new tableBuilder("#table_id_addruleslist",data4,op4);
	modalBulider.resize();
}