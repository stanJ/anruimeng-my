var data2 = [{
	"name": "aaaa",
	"position": "System ",
	"salary": "$3,120",
	"date": "2011/04/25",
	"office": "Edinburgh",
	"extn": "5421"
}, {
	"name": "bbb",
	"position": "Director",
	"salary": "$5,300",
	"date": "2011/07/25",
	"office": "Edinburgh",
	"extn": "8422"
}, {
	"name": "ccc",
	"position": "System Architect",
	"salary": "$3,120",
	"date": "2011/04/25",
	"office": "Edinburgh",
	"extn": "5421"
}, {
	"name": "aaaa",
	"position": "SysSystem System ArchitectSystem ArchitectSystem ArchitectArchitecttem ",
	"salary": "SysSystem System ArchitectSystem ArchitectSystem ArchitectArchitecttem",
	"date": "SysSystem System ArchitectSystem ArchitectSystem ArchitectArchitecttem",
	"office": "SysSystem System ArchitectSystem ArchitectSystem ArchitectArchitecttem",
	"extn": "SysSystem System ArchitectSystem ArchitectSystem ArchitectArchitecttem"
}];
var sp = {
	0: {
		visible: true,
		class: "hide"
	}
};
var op = {
	dataTitles: ['11', '22', '33', '44', '55', '66'],
	dataSpecial: sp,
	hasCheckBox: true,
	buttons: [{
		text: "查看",
		eventname: "chakan"
	}, {
		text: "删除",
		eventname: "deleteRow"
	}],
	columnsExt: [{
		title: "额外",
		class: 'dt-left',
		render: function(data, type, row, meta) {
			return '<input type="text" value="额外" class="input-medium" style="width:50px" >';
		}
	}],
	pagination: {
		currentPage: 1,
		pages: 30,
		displayPage: pageSetting.Pagination_DefaultPage,
		selectedEvent: "dopageing"
	},
	setting: {}
}
var tb = new tableBuilder("#tb_1", data2, op);

//查看详情
function chakan(obj) {
	alert($(obj).parents("tr:first").find("td.hide").find("span").html());
};

//删除行
function deleteRow(obj) {
	tb.removeRow($(obj).parents("tr:first"));
}

//分页点击
function dopageing(num) {
	alert(num);
}



var data3 = [{
	"name": "aaaa",
	"position": "System ",
	"salary": "$3,120"
}, {
	"name": "bbb",
	"position": "Director",
	"salary": "$5,300"
}, {
	"name": "ccc",
	"position": "System Architect",
	"salary": "$3,120"
}, {
	"name": "aaaa",
	"position": "SysSystem",
	"salary": "SysSystem "
}];
var sp2 = {
	0: {
		class: "tdEllipsis50 dt-left"
	},
	1: {
		class: "tdEllipsis50 dt-left"
	},
	2: {
		class: "tdEllipsis50 dt-left"
	},
	3: {
		class: "tdEllipsis50 dt-left"
	}
};
var op2 = {
	dataTitles: ['111', '222', '333', '44', '55', '66'],
	dataSpecial: sp2,
	buttons: [{
		text: "查看",
		eventname: "chakan"
	}, {
		text: "删除",
		eventname: "deleteRow"
	}],
	tableHeight:'100px',
	scrollBottom:"bottom",
	setting: {}
}
var tb2 = new tableBuilder("#tb_2", data3, op2);



//$("#tb_3 table").DataTable("#tb_3");
var op3 = {
	hasCheckBox: true,
	dataTitles: ['aa', '22', '33'],
	tableHeight:'100px'
}
$("#btn_leftright").on("click",function(){
	modalBulider.modal('template_myModal',{shown:function(){
		var tb4 = new tableBuilder("#tb_4", data3, op3);
		var tb5 = new tableBuilder("#tb_5", data3, op3);
	//	modalBulider.resize();
		$("#div_test1 .movetoright").on("click",function(){
			$("#tb_4 label.checked").each(function(){
				var data= tb4.getSelectedRow($(this).parents("tr:first"));
				tb4.removeRow($(this).parents("tr:first"));
				tb5.addRow(data);
			});
		});
		$("#div_test1 .movetoleft").on("click",function(){
			$("#tb_5 label.checked").each(function(){
				var data= tb5.getSelectedRow($(this).parents("tr:first"));
				tb5.removeRow($(this).parents("tr:first"));
				tb4.addRow(data);
			});
		});
	}});
});

		var dataJSON = [//树的数据
			{
				"text" : "系统权限",
				"state" : { "opened" : false },
				"children" : [
					{
						"text" : "后台管理人员",
						"state" : { "selected" : true },
						"children" :[
							{
								"id":"node1",
								"text" : "后台人员列表",
								"state" : { "selected" : true },
								"icon" : "jstree-file"
							},
							{
								"id":"node2",
								"text" : "后台人员列表",
								"state" : { "selected" : true },
								"icon" : "jstree-file"
							}
						]
					},
					{ 
						"text" : "前端管理层", 
						"state" : { "selected" : true },
					},
					{ 
						"text" : "系统角色管理", 
						"state" : { "selected" : true },
					},
					{ 
						"text" : "系统管理员管理", 
						"state" : { "selected" : true },
					},
					{ 
						"text" : "项目角色管理", 
						"state" : { "selected" : true },
					},
				]
			},
			{
				"text" : "项目管理",
				"state" : { "selected" : false },
			},
			{
				"text" : "系统设置",
				"state" : { "selected" : false },
			},
			{
				"text" : "数据统计",
				"state" : { "selected" : false },
			}
		];
		
		var tree1 = new treeBuilder("#frmt", dataJSON, {displayType:"hasCheck"});
		var tree2 = new treeBuilder("#frmt2", dataJSON, {displayType:"normal"});


function bottom(){
	alert("bottom");
}


//fullcalendar
seajs.use(['../../lib/fullcalendar/moment.min.js','../../lib/fullcalendar/fullcalendar.css'],function(){
	seajs.use(['../../lib/fullcalendar/fullcalendar.min.js','../../lib/fullcalendar/zh-cn.js'],function(){
		$('#calendar').fullCalendar({
			header: {
				right: 'prev,next',
				center: 'title',
			},
			locale: 'zh-cn',
			defaultDate: '2017-02-12',
			eventLimit: false, // allow "more" link when too many events
			eventRender:function(event, element, view){
				if(event.type){
					element.addClass('myEvent-bgcolor'+event.type);
				}
				if(event.content && $.isArray(event.content)){
					event.contentCount=event.content.length;
				}else{
					event.contentCount="";
				}
				element.children().prepend('<div class="myEvent-count">'+ event.contentCount +'</div>');
			},
			eventAfterRender:function(event, element, view){
				event.contentString="";
				if(event.content && $.isArray(event.content)){
					$.each(event.content,function(){
						event.contentString+='<div>'+this+'</div>';
					});
					
				}
				if(event.start._d.getDay()>4){//大于周三 显示在左侧 小于则显示在右侧
					element.before('<div class="myEvent-overlap hidden">'+event.contentString+'</div>');
				}else{
					element.before('<div class="myEvent-overlap2 hidden">'+event.contentString+'</div>');
				}
				if(element.parents(".fc-row:first").index()>3){
					element.prev().css("top","-"+(38*element.prev().children().length-23)+"px");
					if(element.prev().hasClass("myEvent-overlap")){
						element.prev().removeClass("myEvent-overlap");
						element.prev().addClass("myEvent-overlap3");
					}else{
						element.prev().removeClass("myEvent-overlap2");
						element.prev().addClass("myEvent-overlap4");
					}
				}
				
				
				if(event.type){
					element.prev().addClass('myEvent-bgcolor'+event.type);
				}
				
			},
			eventMouseover:function(event, jsEvent, view){
				$(".fc-row").css("z-index","inherit");
				$(".fc-content-skeleton").css("z-index","inherit");
				var overlap = $(jsEvent.target).parents("td:first").children(".myEvent-overlap,.myEvent-overlap2,.myEvent-overlap3,.myEvent-overlap4");
				if(overlap.hasClass("hidden")) overlap.removeClass("hidden");
				
			},
			eventMouseout:function(event, jsEvent, view){
				var overlap = $(jsEvent.target).parents("td:first").children(".myEvent-overlap,.myEvent-overlap2,.myEvent-overlap3,.myEvent-overlap4");
				overlap.addClass("hidden");
			},
			events: [
				{
					id:new Date().valueOf(),
					title: 'All Day Event',
					start: '2017-02-01',
					allDay:true,
					type:1,
					content:["111111111111111111111111","22222222222222222222222222222222222","33333333333333333333333333333","4444444444444444444444444444444444"],
				},
				{
					id:new Date().valueOf(),
					title: 'Day Event',
					start: '2017-02-01',
					allDay:true,
					type:2,
					content:["111111111111111111111111","22222222222222222222222222222222222","33333333333333333333333333333","4444444444444444444444444444444444"],
				},
				{
					id:new Date().valueOf(),
					title: '12sfsafaasfdAll Day Event',
					start: '2017-02-01',
					allDay:true,
					type:3,
					content:["111111111111111111111111","22222222222222222222222222222222222","33333333333333333333333333333","4444444444444444444444444444444444"],
				},
				{
					id:new Date().valueOf(),
					title: 'xzcv阿什顿飞t',
					start: '2017-02-01',
					allDay:true,
					type:4,
					content:["111111111111111111111111","22222222222222222222222222222222222","33333333333333333333333333333","4444444444444444444444444444444444"],
				},
				{
					id:new Date().valueOf(),
					title: 'xzcv阿什顿飞t',
					start: '2017-02-06',
					allDay:true,
					type:4,
					content:["111111111111111111111111","22222222222222222222222222222222222","33333333333333333333333333333","4444444444444444444444444444444444"],
				},
				{
					id:new Date().valueOf(),
					title: 'xzcv阿什顿飞t',
					start: '2017-02-11',
					allDay:true,
					type:4,
					content:["111111111111111111111111","22222222222222222222222222222222222","33333333333333333333333333333","4444444444444444444444444444444444"],
				},
				{
					id:new Date().valueOf(),
					title: 'xzcv阿什顿飞t',
					start: '2017-02-04',
					allDay:true,
					type:2,
					content:["111111111111111111111111","22222222222222222222222222222222222","33333333333333333333333333333","4444444444444444444444444444444444"],
				},
			]
		});
	});
})