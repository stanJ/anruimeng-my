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
		buttons:[{text:"查看巡检表",eventname:"CheckDevicesFun"},{text:"编辑",eventname:"modify"}]
	}
	var tb = new tableBuilder("#table_id_deviceTab",data,op);
	$("#btn_delete").on("click",function(){
		tb.removeRows();
	});
	//新增设备
	$("#btn_add").on("click",function(){
		change('新增设备')
	})
	$("#btn_import").on("click",function(){
		upload1()
	});
})
function modify(){
	change('编辑设备')
}
function change(title){
	var setKeyVal ={
		title:title					
	}
	modalBulider.modal('template_myaddDetails',setKeyVal);
}
//查看巡检表
function CheckDevicesFun(){
	var setKeyVal ={
		title:'巡检表',
		containerWidth:'0.7',
		shown:function(){
			var data =[
				{
					"username": "aaaa",
					"xmname":   "System ",
					"aa":   "11 ",
				},
				{
					"username": "aaaa",
					"xmname":   "System ",
					"aa":   "11 ",
				},
				{
					"username": "aaaa",
					"xmname":   "System ",
					"aa":   "11 ",
				},
				
			];
			var op={
		//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
				dataTitles:['巡检表名称','类型','规则名称'],
				hasCheckBox:true,
				buttons:[{text:"编辑",eventname:"CheckDeviceDetail"}],
				tableHeight:'150px',
			}
			var tb = new tableBuilder("#table_id_deviceListTab",data,op);
			modalBulider.resize();
		}
	}
	modalBulider.modal('template_myDeviceDetail',setKeyVal);
	
	$("#btn_delete1").on("click",function(){
		tb.removeRows();
	});
	
}
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
	modalBulider.modal('template_importdevice',setKeyVal);
}
//查看巡检表详情
function CheckDeviceDetail(){
	var setKeyVal ={
		title:'编辑巡检表',
		containerWidth:'0.7'
	}
	modalBulider.modal('template_myCheckDeviceDetail',setKeyVal);
	var data =[{
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
	var op={
		dataSpecial:{
			0: {
				visible: true,
				class: "dt-name",
			}
		},
//		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['规则名称','状态'],
		hasCheckBox:false,
		buttons:[{text:"应用",eventname:"apply"}]
	}
	var tb = new tableBuilder("#table_id_checkDevicesList",data,op);
	modalBulider.resize();
}