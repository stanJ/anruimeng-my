$(function(){
	//考勤管理table列表
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
		buttons:[{text:"查看",eventname:"checkAttendance"}]

	}
	var tb = new tableBuilder("#table_id_example1",data1,op);
	
	
})
//考勤日历
var dp=null;
var selectYear=new Date().getFullYear(),selectMonth=new Date().getMonth();
function checkAttendance(){		
	var setKeyVal ={
		title:'考勤日历',
		shown:function(){
			dp = $('.calendarbox').datepicker({});
			dp.datepicker('update',new Date().format("yyyy-MM-dd"));
			dp.on("changeMonth",function(e){
				//先获取数据
				//
				selectYear=e.date.getFullYear();
				selectMonth=e.date.getMonth();
				setTimeout(function(){
					//根据后台返回的数据循环添加
//					for(){.....}
					AddEvent('2017-03-08',['red','green','orange']);
				},100);
				
			});
			dp.on("changeDate",function(e){
				//先获取数据
				//
				selectYear=e.date.getFullYear();
				selectMonth=e.date.getMonth();
				setTimeout(function(){
					AddEvent('2017-03-08',['red','green','orange']);
				},100);
			});
			//测试添加圆点
			AddEvent('2017-03-08',['red','green','orange']);
			
			//人员日历列表
			var data2 =[
				{
					"name":       "aaaa",
					"date": 	  "2011/04/25",
					"type":     "Edinburgh",
					"place": 	  "A123",
					"time": 	  "A123",
					"tobetime": 	  "A123",
				},
				{
					"name":       "aaaa",
					"date": 	  "2011/04/25",
					"type":     "Edinburgh",
					"place": 	  "A123",
					"time": 	  "A123",
					"tobetime": 	  "A123",
				},
				{
					"name":       "aaaa",
					"date": 	  "2011/04/25",
					"type":     "Edinburgh",
					"place": 	  "A123",
					"time": 	  "A123",
					"tobetime": 	  "A123",
				},
				{
					"name":       "aaaa",
					"date": 	  "2011/04/25",
					"type":     "Edinburgh",
					"place": 	  "A123",
					"time": 	  "A123",
					"tobetime": 	  "A123",
				},
				{
					"name":       "aaaa",
					"date": 	  "2011/04/25",
					"type":     "Edinburgh",
					"place": 	  "A123",
					"time": 	  "A123",
					"tobetime": 	  "A123",
				},
				{
					"name":       "aaaa",
					"date": 	  "2011/04/25",
					"type":     "Edinburgh",
					"place": 	  "A123",
					"time": 	  "A123",
					"tobetime": 	  "A123",
				}
			];
			var op2={
				pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},dataTitles:['姓名','日期','类型','地点','时间','应到/应退时间'],
				hasCheckBox:false,
			}
			var tb2 = new tableBuilder("#table_id_attendance",data2,op2);
			modalBulider.resize();
		}
	}
	modalBulider.modal('template_attendanceDate',setKeyVal);
	
}

function AddEvent(_date,addlist){
	var colorlist={
		red:'red',
		green:'green',
		orange:'orange',
	}
	if(dp){
//		var selectedDate=dp.datepicker('getDate');
		_date=new Date(_date);
		if(_date.getFullYear().toString()==selectYear && _date.getMonth()==selectMonth){
			var el=$(".calendarbox .day[data-day='"+ _date.getDate() +"']").not(".new,.old");
			if(el.length>0){
				el.css("position","relative");
				var eventStr='';
				$.each(addlist, function() {
					eventStr+='<div style="background-color:'+ colorlist[this] +'"></div>';
				});
				el.append('<div class="div-eventInDatePicker">'+eventStr+'</div>');
			}
		}
	}
}
