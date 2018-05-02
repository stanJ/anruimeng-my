$(function(){
	$("#btn_clear_1").on("click",function(){
		utilObj.confirm({
			title:'确认清空预防性维护模板',
			body:'是否确认清空XX项目XX现场下的所有预防性维护模板？',
			okHide:function(){
				console.log('点击确认')
			}
		})
	});
	$('#btn_upload_1').on('click',function(){
		//导入结果table
		var data1 =[{
				"username": "aaaa",
				"xmname":   "System ",
				"xcname":   "$3,120",
				"type":       "aaaa",
				"username1": "aaaa",
				"xmname1":   "System ",
				"xcname1":   "$3,120",
				"type1":       "aaaa",
				"username2": "aaaa",
				
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
				"username2": "aaaa",
				
			},
		];
		var setKeyVal ={
			title:'导入模板',
			shown:function(){
				var op = {
					dataTitles:['系统','设备','设备类别','频率','工作内容','标准参数','单位','是否预警','导入结果'],
					tableHeight:'100px',
					scrollBottom:"bottom",
					setting: {}
				}				
				var tb1 = new tableBuilder("#table_id_importmaintenance",data1,op);
				modalBulider.resize();
			}															
		}
		modalBulider.modal('template_mymaintenanceImport',setKeyVal);
	});
	
})