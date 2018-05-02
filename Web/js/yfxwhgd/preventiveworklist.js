$(function(){
	init();
	//预防性工单列表table
	var data1 =[{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",	
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",	
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
		},
		{
			"username": "aaaa",
			"xmname":   "System ",
			"xcname":   "$3,120",
			"type":       "aaaa",
			"companyname":   "System ",
			"xcname1":   "$3,120",
			"type1":       "aaaa",
			"companyname1":   "System ",
		}
	];
	var op={
		pagination:{currentPage:1,pages:30,displayPage:pageSetting.Pagination_DefaultPage,selectedEvent:"dopageing"},
		dataTitles:['工单号','生成时间','表名','默认派发组','执行人','完成时间','是否准时','状态'],
		hasCheckBox:true,
		buttons:[{text:"查看",eventname:"checkdetail"}]
	}
	var tb = new tableBuilder("#table_id_preventworkTable",data1,op);
	
	$(".arm-styledtitle").click(function(){
		$(".arm-styledtitle").removeClass('tj-title-selected');
		$(this).addClass('tj-title-selected');
		var href = $(this).data('href');
		$(".title-content").hide();
		$("#"+href+"").show();
	})
	
});
function init(){
	
	buildCalendar();
	
	$(".arm-styledtitle").each(function(i){
		if($(this).hasClass('tj-title-selected')){
			var href = $(this).data('href');
			if(href){
				$(".title-content").hide();
				$("#"+href+"").show();
			}
			
		}
	})
	
}
//查看工单详情
function checkdetail(){
	location.href="preventiveworkDetail.html";
}
function buildCalendar(){
	seajs.use(['../../lib/fullcalendar/moment.min.js','../../lib/fullcalendar/fullcalendar.css'],function(){
		seajs.use(['../../lib/fullcalendar/fullcalendar.min.js','../../lib/fullcalendar/zh-cn.js'],function(){
			var ca = $('#calendar').fullCalendar({
				header: {
					right: 'prev,next',
//					center: 'title',
				},
				locale: 'zh-cn',
				defaultDate: '2017-02-12',
				titleFormat:'YYYY年MM月',
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
					if(event.start._d.getDay()>4){
						element.before('<div class="myEvent-overlap hidden">'+event.contentString+'</div>');
					}else{
						element.before('<div class="myEvent-overlap2 hidden">'+event.contentString+'</div>');
					}
					
					if(event.type){
						element.prev().addClass('myEvent-bgcolor'+event.type);
					}
					
				},
				eventAfterAllRender:function(){
					$(".fc-button-group span.fc-icon-left-single-arrow").removeClass().addClass('sui-icon icon-tb-back');
					$(".fc-button-group span.fc-icon-right-single-arrow").removeClass().addClass('sui-icon icon-tb-right');
					var h = '<div class="date-wrapper"> <div class="date-icon"></div> <input class="date-func" type="text" style="height: 14px;"/> </div>';
					if($(".date-wrapper").length!=0) return;
					$(".fc-left").append(h);
				},
				eventMouseover:function(event, jsEvent, view){
					$(".fc-row").css("z-index","inherit");
					$(".fc-content-skeleton").css("z-index","inherit");
					var overlap = $(jsEvent.target).parents("td:first").children(".myEvent-overlap,.myEvent-overlap2");
					if(overlap.hasClass("hidden")) overlap.removeClass("hidden");
					
				},
				eventMouseout:function(event, jsEvent, view){
					var overlap = $(jsEvent.target).parents("td:first").children(".myEvent-overlap,.myEvent-overlap2");
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
				]
			});
			$(".date-func").datepicker({
		//		startView:1,
				minViewMode:1,
			})
			.on('changeDate',function(e){
				ca.fullCalendar( 'gotoDate', e.date )
//				console.log(moment(e.date));
			});
		});
	})
}
