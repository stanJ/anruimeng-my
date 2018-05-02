$(function(){
	//日历管理列表
	var data1 =[{
			"name":       "aaaa",
			"email":   "System ",
			"elephone":   "$3,120",
			"type": 	  "2011/04/25",
			"office":     "Edinburgh",
			"rgxx": 	  "A123",
			"mobile": 	  "A123",
			"number": 	  "A123",
		},
		{
			"name":       "aaaa",
			"email":   "System ",
			"elephone":   "$3,120",
			"type": 	  "2011/04/25",
			"office":     "Edinburgh",
			"rgxx": 	  "A123",
			"mobile": 	  "A123",
			"number": 	  "A123",
		},
		{
			"name":       "aaaa",
			"email":   "System ",
			"elephone":   "$3,120",
			"type": 	  "2011/04/25",
			"office":     "Edinburgh",
			"rgxx": 	  "A123",
			"mobile": 	  "A123",
			"number": 	  "A123",
		},
		{
			"name":       "aaaa",
			"email":   "System ",
			"elephone":   "$3,120",
			"type": 	  "2011/04/25",
			"office":     "Edinburgh",
			"rgxx": 	  "A123",
			"mobile": 	  "A123",
			"number": 	  "A123",
			}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','邮箱','电话','类型','职位','任岗信息','手机','工号'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"checkInfo"}]

	}
	var tb = new tableBuilder("#table_id_example1",data1,op);
	
	
	
	
	
	
	
	//添加事件
	$('#btn_add').on('click',function(){
		var setKeyVal ={
			title:'添加事件',
		}
		modalBulider.modal('template_myaddEvent',setKeyVal);
		$('.calendarbox').datepicker({});
	});
	
	
	
})
//列表查看人员日历
	function checkInfo(){
		
		var setKeyVal ={
			title:'人员日历【张三】',
		}
		modalBulider.modal('template_mystaffCalendar',setKeyVal);		
		$('.calendarbox').datepicker({});
		//人员日历列表
		var data2 =[{
				"name":       "aaaa",
				"date": 	  "2011/04/25",
				"type":     "Edinburgh",
				"content": 	  "A123",
			},
			{
				"name":       "aaaa",
				"date": 	  "2011/04/25",
				"type":     "Edinburgh",
				"content": 	  "A123",
			},
			{
				"name":       "aaaa",
				"date": 	  "2011/04/25",
				"type":     "Edinburgh",
				"content": 	  "A123",
			},
			{
				"name":       "aaaa",
				"date": 	  "2011/04/25",
				"type":     "Edinburgh",
				"content": 	  "A123",
			},
			{
				"name":       "aaaa",
				"date": 	  "2011/04/25",
				"type":     "Edinburgh",
				"content": 	  "A123",
			},
			{
				"name":       "aaaa",
				"date": 	  "2011/04/25",
				"type":     "Edinburgh",
				"content": 	  "A123",
			}
		];
		var op2={
			pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','日期','类型','内容'],
			hasCheckBox:false,
			//buttons:[{text:"查看",eventname:""}]

		}
		var tb1 = new tableBuilder("#table_id_calendarUser",data2,op2);
		modalBulider.resize();
	}