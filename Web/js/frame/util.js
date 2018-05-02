function loadDoubleTables(data){
	var tb1 = new tableBuilder(""+data.el+" .db-table-first", data.tb1.data, data.tb1.op);
	var tb2 = new tableBuilder(""+data.el+" .db-table-second", data.tb2.data, data.tb2.op);
	if(data.html){
		$(""+data.el+" .db-table-first").prepend(data.html);
	}
	$(""+data.el+" .db-table-first").prepend('<h2 class="x_modaltitle">'+data.tb1.title+'</h2>');
	$(""+data.el+" .db-table-second").prepend('<h2 class="x_modaltitle">'+data.tb2.title+'</h2>');
	$(""+data.el+" .movetoright").on("click",function(){
		$(""+data.el+" .db-table-first label.checked").each(function(){
			var data= tb1.getSelectedRow($(this).parents("tr:first"));
			tb1.removeRow($(this).parents("tr:first"));
			tb2.addRow(data);
		});
	});
	$(""+data.el+" .movetoleft").on("click",function(){
		$(""+data.el+" .db-table-second label.checked").each(function(){
			var data= tb2.getSelectedRow($(this).parents("tr:first"));
			tb2.removeRow($(this).parents("tr:first"));
			tb1.addRow(data);
		});
	});
}
function loadTree(selector,type){
	var dataJSON = [
		{
			"text" : "系统权限",
			"state" : { "opened" : true },
			"id" : '0',
			"children" : [
				{
					"text" : "后台管理人员",
					"state" : { "selected" : true },
					"id" : '0-0',
					"children" :[
						{
							"text" : "后台人员列表",
							"state" : { "selected" : true },
							"icon" : "jstree-file",
							"id" : '0-0-0'
						},
						{
							"text" : "后台人员列表",
							"state" : { "selected" : true },
							"icon" : "jstree-file",
							"id" : '0-0-1'
						}
					]
				},
				{ 
					"text" : "前端管理层", 
					"state" : { "selected" : true },
					"id" : '0-1'
				},
				{ 
					"text" : "系统角色管理", 
					"state" : { "selected" : true },
					"id" : '0-2'
				},
				{ 
					"text" : "系统管理员管理", 
					"state" : { "selected" : true },
					"id" : '0-3'
				},
				{ 
					"text" : "项目角色管理", 
					"state" : { "selected" : true },
					"id" : '0-4'
				},
			]
		},
		{
			"text" : "项目管理",
			"state" : { "selected" : false },
			"id" : '1'
		},
		{
			"text" : "系统设置",
			"state" : { "selected" : false },
			"id" : '2'
		},
		{
			"text" : "数据统计",
			"state" : { "selected" : false },
			"id" : '3'
		}
	]
	var tree = new treeBuilder(selector, dataJSON, {displayType:type?type:'normal'});

}


var utilObj = {
	init:function(){
		this.setTextareaCss();
		this.bindEvent();
//		this.setXLargeCss();
	},
	bindDeleteEvent:function(tb,btnSelector){
		$(btnSelector).click(function(){
			tb.removeRows();
		})
	},
	bindEvent:function(){
		$(".arm-nav-wrapper .arm-nav-text").click(function(){
			var href = $(this).data('href');
			if(!href) return;
			utilObj.navigate(href);
		})
		$(".has-back-icon").click(function(){
			var href = $(this).data('href');
			if(!href) return;
			utilObj.navigate(href);
		})
	},
	buildEditableTree:function(tree){
		var dataJSON = [
			{
				"text" : "系统权限",
				"state" : { "opened" : true },
				"id" : '0',
				"children" : [
					{
						"text" : "后台管理人员",
						"state" : { "selected" : true },
						"id" : '0-0',
						"children" :[
							{
								"text" : "后台人员列表",
								"state" : { "selected" : true },
								"icon" : "jstree-file",
								"id" : '0-0-0'
							},
							{
								"text" : "后台人员列表",
								"state" : { "selected" : true },
								"icon" : "jstree-file",
								"id" : '0-0-1'
							}
						]
					},
					{ 
						"text" : "前端管理层", 
						"state" : { "selected" : true },
						"id" : '0-1'
					},
					{ 
						"text" : "系统角色管理", 
						"state" : { "selected" : true },
						"id" : '0-2'
					},
					{ 
						"text" : "系统管理员管理", 
						"state" : { "selected" : true },
						"id" : '0-3'
					},
					{ 
						"text" : "项目角色管理", 
						"state" : { "selected" : true },
						"id" : '0-4'
					},
				]
			},
			{
				"text" : "项目管理",
				"state" : { "selected" : false },
				"id" : '1'
			},
			{
				"text" : "系统设置",
				"state" : { "selected" : false },
				"id" : '2'
			},
			{
				"text" : "数据统计",
				"state" : { "selected" : false },
				"id" : '3'
			}
		];
		var tree = new treeBuilder(tree, dataJSON, {
			displayType:"normal",
			onAddNode:function(nodeInfo){
				console.log(nodeInfo);
			},
			onRenameNode:function(nodeInfo){
				console.log(nodeInfo);
			},
			onDeleteNode:function(e,deleted){
				console.log(deleted);
			}
		});
	},
	setCss:function(ta,height){
		ta.css({
			width: '100%',
    			'box-sizing': 'border-box',
    			height: height,
		})
		ta.parent(".controls").css('width','100%');
		
		
		ta.each(function(i){
			$(this).parents('li:first').css('width','100%');
			if($(this).parents("ul:first").hasClass("arm-label-lg")){
				$(this).parent().siblings('.control-label').css('min-width','118px');
			}else{
				var $label = $(this).parent().siblings('.control-label');
				if($label.data('minwidth')){
					$label.css('min-width',$label.data('minwidth'));
				}else{
					$label.css('min-width','96px');
				}
				
			}
		})
	},
	setTextareaCss:function(){
		var ta = $("textarea.input-xxlarge");
		var input = $("input.input-xxlarge");
		this.setCss(ta,'100px');
		this.setCss(input,'34px');
		
	},
	setXLargeCss:function(){
		var ta = $("textarea.input-xlarge");
		ta.css({
			width: '100%',
    			'box-sizing': 'border-box',
    			height: '74px',
		})
		ta.parent("div").css({
			width: '100%',
    			display: 'table-cell',
		});
		ta.parent().siblings('label').css({
			'min-width': '70px',
    			display: 'table-cell',
    			'padding-right': '10px',
		});
//		ta.each(function(i){
//			$(this).parents('li:first').css('width','100%');
//		})
	},
	alert:function(option){
		var setting={
			backdrop: true,
			bgcolor: '#000',
			keyboard: true,
			title: '提示',
			body: '',
			okBtn : '确定',
	//		cancelBtn : '关闭',
			closeBtn: false,
			transition: true,
			hasfoot: true,
			width: 'normal'
			//height: {number|string(px)} 内容区（.modal-body）高度
	//		timeout: {number} 1000    单位毫秒ms ,对话框打开后多久自动关闭
	//		show:     fn --------------function(e){}
	//		shown:    fn
	//		hide:     fn
	//		hidden:   fn
	//		okHide:   function(e){alert('点击确认后、对话框消失前的逻辑,
	//		           函数返回true（默认）则对话框关闭，反之不关闭;若不传入则默认是直接返回true的函数
	//		           注意不要人肉返回undefined！！')}
	//		okHidden: function(e){alert('点击确认后、对话框消失后的逻辑')}
	//		cancelHide: fn  取消关闭前
	//		cancelHidden: fn  取消关闭后
		};
		if(typeof(option) == "string"){
			setting.body=option;
		}else{
			$.extend(true, setting, option);
		}
		$.alert(setting);
	},
	confirm:function(option){
		var setting={
			backdrop: true,
			bgcolor: '#000',
			keyboard: true,
			title: '提示',
			body: '',
			okBtn : '确定',
			closeBtn: false,
			transition: true,
			hasfoot: true,
			width: 'normal',
			cancelBtn : '取消'
		};
		if(option) $.extend(true, setting, option);
		$.confirm(setting);
	},
	showMessageType:{
		'msg-error':'msg-error',
		'msg-stop':'msg-stop',
		'msg-success':'msg-success',
		'msg-warning':'msg-warning',
		'msg-notice':'msg-notice',
		'msg-tips':' msg-tips',
		'msg-info':'msg-info',
		'msg-question':'msg-question'
	},
	showMessage:function(options){
		var setting={
			type: utilObj.showMessageType["msg-tips"],
			body: '&nbsp;'
		};
		if(options) $.extend(true, setting, options);
		$(".sui-text-center").remove();
		var id="msg_"+new Date().valueOf();
		var message ='<div class="sui-text-center"><div class="'+ id +' topmessage msg-large sui-msg '+ setting.type +' msg-inlineblock fade" style="z-index:10000"><div class="msg-con">'+ setting.body +'<button type="button" data-dismiss="msgs" class="sui-close">×</button></div><s class="msg-icon"></s></div></div>';
		$("body").append(message);
		setTimeout(function(){$("."+id).addClass("in");},50);
		setTimeout(function(){$("."+id).removeClass("in");},3050);
	},
	showLoading:function(options){
		var defaultConfig = {
			bgColor:'transparent',
			bgOpacity:0.6,
			sizeClass:'loading-large',//loading-large, loading-xlarge, loading-xxlarge,loading-small, loading-xsmall, loading-xxsmall   /  loading-dark, .loading-light
			el:'body'
		}
		if(options instanceof Object){
			for(key in options){
				defaultConfig[key] = options[key];
			}
		}else if(options){
			defaultConfig['el'] = options;
		}	
		if($(defaultConfig.el).children('.arm-loading-bg').length>0){
			return;
		}
		
		if(defaultConfig.bgColor.indexOf("#")==0){
			defaultConfig.bgColor = utilObj.hexToRgba(defaultConfig.bgColor,defaultConfig.bgOpacity)["rgba"];
		}
//		var styleH = 'style="background-color:'+defaultConfig.bgColor+';opacity:'+defaultConfig.bgOpacity+';"';
		var styleH = 'style="background-color:'+defaultConfig.bgColor+';"';
		var h = '<div class="arm-loading-bg" '+styleH+'><div class="sui-loading '+defaultConfig.sizeClass+' arm-loading" >\
				<i class="sui-icon icon-pc-loading"></i></div></div>';
		$(defaultConfig.el).eq(0).append(h);
	},
	hideLoading:function(el){
		if(el){
			$(el).children('.arm-loading-bg').remove();
		}else{
			$('.arm-loading-bg').remove();
		}
	},
	getUrlParam:function(key){
	    var url = location.search;
	    var theRequest = {};
	    if (url.indexOf("?") != -1) {
	        var str = url.substr(1);
	        var strs = str.split("&");
	        for(var i = 0; i < strs.length; i ++) {
	            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
	        }
	    }
	    return theRequest[key];
	},
	navigate:function(href,obj){
		var pageBase = 'page';
		var host = location.href.substring(0,location.href.indexOf(pageBase));
		host = host+'page/';
		var urlInfo = this.getUrlInfo();
		var newHref = '';
		if(href.indexOf('.html')<0){
			href += '.html';
		}
		if(href.indexOf('/')<0){
			newHref = host+urlInfo.curMenu+'/'+href;
		}else{
			newHref = host+href;
		}
		if(obj){
			newHref += '?';
			var urlEnd = $.param(obj);
			newHref += urlEnd;
		}
		location.href = newHref;	
	},
	getUrlInfo:function(){
		var href = location.href;
		var str = href.slice(href.indexOf('page')+5,href.indexOf('.html'))
		var ary = str.split('/');
		return {
			curMenu:ary[0],
			url:ary[1]
		};
	},
	isAry:function(obj){
		return Object.prototype.toString.call(obj) === '[object Array]'; 
	},
	previewFile:function(obj){
		var preview = $($(obj).attr("previewImg"))[0];
		var file  = obj.files[0];
		var reader = new FileReader();
		reader.onloadend = function () {
			preview.src = reader.result;
		}
		if (file) {
			reader.readAsDataURL(file);
		} else {
			preview.src = "";
		}
	},
	rgbToHex : function(rgb) {
        var rRgba = /rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([.\d]+))?\)/,
	        r, g, b, a,
	        rsa = rgb.replace(/\s+/g, "").match(rRgba);
	    if (rsa) {
	        r = (+rsa[1]).toString(16);
	        r = r.length == 1 ? "0" + r : r;
	        g = (+rsa[2]).toString(16);
	        g = g.length == 1 ? "0" + g : g;
	        b = (+rsa[3]).toString(16);
	        b = b.length == 1 ? "0" + b : b;
	        a = (+(rsa[5] ? rsa[5] : 1)) * 100
	        return {hex: "#" + r + g + b, alpha: Math.ceil(a)};
	    } else {
	        return {hex: rgb, alpha: 100};
	    }
	},
	hexToRgba : function(hex, al) {
	    var hexColor = /^#/.test(hex) ? hex.slice(1) : hex,
	        alp = hex === 'transparent' ? 0 : Math.ceil(al),
	        r, g, b;
	    hexColor = /^[0-9a-f]{3}|[0-9a-f]{6}$/i.test(hexColor) ? hexColor : 'fffff';
	    if (hexColor.length === 3) {
	        hexColor = hexColor.replace(/(\w)(\w)(\w)/gi, '$1$1$2$2$3$3');
	    }
	    r = hexColor.slice(0, 2);
	    g = hexColor.slice(2, 4);
	    b = hexColor.slice(4, 6);
	    r = parseInt(r, 16);
	    g = parseInt(g, 16);
	    b = parseInt(b, 16);
	    return {
	        hex: '#' + hexColor,
	        alpha: alp,
	        rgba: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (alp / 100).toFixed(2) + ')'
	    };
	}
	
};
utilObj.init();
(function($){
	var tableBuilder=function(el,datasource,options){
				if(!(datasource instanceof Array)){
					return null;
				}
				if(datasource.length<0){
					return null;
				}
				this.wrapper = typeof el == 'string' ? $(el) : el;
				
				var new_datasource = [];
				if(options.columns){
					for(var i=0;i<datasource.length;i++){
						new_datasource[i] = {};
						for(var j=0;j<options.columns.length;j++){
							var key = options.columns[j];
							new_datasource[i][key] = datasource[i][key];
						}
					}
					this.data=new_datasource;
				}else{
					this.data=datasource;
				}
				
				this.options = {
					dataTitles:[],
					hasCheckBox:false,
					checkboxTitle:"",
					diplayType:'auto', //fixed
					width:'100%',
					trHeight:null
				};
				for ( var i in options ) {
					this.options[i] = options[i];
				}
				
				//如果数据为空,就造一组假数据来正常生成table,之后再将数据移出
				if(this.data.length==0){
					var d1 = [{}];
					if(!this.options.columns) return null;
					$.each(this.options.columns,function(){
						d1[0][this]="";
					});
					this.data = d1;
					//标记数据为空
					this.options.isEmpty = true;
				}
				
				this._renderHTML();
				this._create();
			};
			tableBuilder.prototype={
				_renderHTML:function(){
					this.id='tb_'+new Date().valueOf();
//					this.wrapper.css("overflow-x","auto");
					this.wrapper.html('<table class="'+ this.id +' cell-border" ></table>');
					this.idClass=$('.'+this.id);
				},
				_create:function(){
					var targets_i=0;
					var obj=this;
					var setting = {
		//				fixedColumns: {
		//			        leftColumns: 1
		//			    },
						data:this.data,
					    info:false,
					    paging: false,
					    searching: false,
					    ordering:  false,
					    scrollX:false,
					    autoWidth: false,
					    columnDefs:[]
					};
					if(this.options.setting){
						$.extend(true, setting, this.options.setting);
					}
					
					if(this.options.tableHeight){
						setting.scrollY=this.options.tableHeight;
						setting.scrollX=true;
					}
					
					var columns=[];
					if(this.options.hasCheckBox){//如果有CheckBox
						setting.columnDefs.push({
						    targets: targets_i,
						    width:'',
						    title:this.options.checkBoxTitle?this.options.checkBoxTitle:"选择",
						    class:'dt-check',
						    render: function(data, type, row, meta){
						    	var html='<label class="checkbox-pretty inline"><input name="'+ obj.id +'_ck" type="checkbox"><span></span></label>';
						    	return html;
						    }
						});
						targets_i++;
					}
					
					var i=0;
					for(var _key in this.data[0]){
						var t=this.options.dataTitles[i];
						if(!this.options.dataTitles[i]) t=_key;
						var columndef={
							targets:targets_i,
							width:"",
							data:_key,
							title:t,
							class:'tdEllipsis dt-center',
							render: function(data, type, row, meta){
						    	return '<span dataRow="'+meta.row+'"  dataCol="'+meta.col+'" title="'+data+'">'+data+'</span>';
						    }
						};
						if(this.options.dataSpecial && this.options.dataSpecial[i]){
							$.extend(true, columndef, this.options.dataSpecial[i]);
						}
						setting.columnDefs.push(columndef);
						i++;
						targets_i++;
					}
					
					if(this.options.columnsExt && this.options.columnsExt instanceof Array){
						$.each(this.options.columnsExt, function() {
							this.targets=targets_i;
							setting.columnDefs.push(this);
							targets_i++;
						});
					}
					
					if(this.options.buttons && this.options.buttons instanceof Array){//[{text:"",eventname:""},{}]
						setting.columnDefs.push({
							targets:targets_i,
							title:this.options.buttonsTitle?this.options.buttonsTitle:"操作",
							class:'dt-op',
							render: function(data, type, row, meta){
								var btns='';
								$.each(obj.options.buttons, function() {
									if(this.eventname && typeof this.eventname == 'string' && this.eventname.length>0){
										btns+='<li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);" onClick="'+this.eventname+'(this);">'+ this.text +'</a></li>';
									}
								});
								
								var html=['<span class="sui-dropdown dropdown-bordered select">',
			'						    		<span class="dropdown-inner">',
			'						    		<a role="button" data-toggle="dropdown" data-trigger="hover" href="javascript:void(0);" class="dropdown-toggle" style="width:40px;line-height:22px">',
			'							        	<input value="" name="city" type="hidden">',
			'							        	<i class="caret"></i><span class="op-sp">操作</span>',
			'						    		</a>',
			'						          <ul id="menu4" role="menu"  class="sui-dropdown-menu">',
												btns,
			'						          </ul>',
			'						    		</span>',
			'						    </span>'].join("");

						    	return html;
						    }
						});
						targets_i++;
					}
					this.DataTableObj = this.idClass.DataTable(setting);
					
					//如果数据为空的话
					if(this.options.isEmpty){
						this.removeAllRows();
					}
					this.wrapper.css("overflow","inherit");	
					
//					this.wrapper.css("overflow-x","auto");		
					
					//分页
					if(this.options.pagination){
						$(this.wrapper).append('<div class="'+this.id+'_pagination"></div>');
						var paginationSetting={
						    pages: 10,
						    styleClass: ['pagination-centered'],
						    showCtrl: true,
						    displayPage: 6,
						    onSelect: function (num) {
						        console.log(num);
						    }        
						};
						$.extend(true, paginationSetting, this.options.pagination);
						paginationSetting.onSelect=function(num){
							if(paginationSetting.selectedEvent && typeof paginationSetting.selectedEvent == 'string' && paginationSetting.selectedEvent.length>0){
								eval(paginationSetting.selectedEvent+'('+num+')');
							}
						};
						this.paginationObj = $("."+this.id+"_pagination").pagination(paginationSetting);
					}
					
					if(this.options.hasCheckBox){//如果有CheckBox
						this.wrapper.on("click",".tdEllipsis",function(){
							var ck = $(this).parents("tr").find('label.checkbox-pretty:eq(0)').checkbox();
							ck.checkbox("toggle");
						});
					}
					
					if(this.options.tableHeight){
						this.wrapper.find(".dataTables_scrollBody").scroll(function(){
					        var viewH =$(this).height(),//可见高度
					        contentH =$(this).get(0).scrollHeight,//内容高度
					        scrollTop =$(this).scrollTop();//滚动高度
					        if(!obj._scrollstart) obj._scrollstart=0;
					        if(scrollTop - obj._scrollstart>0){//只有往下滚动时
					        	if(!obj._scrollTime) obj._scrollTime=0;
						        if(contentH - viewH - scrollTop <= 0 && (new Date().valueOf())-obj._scrollTime>1000 ) {
						        	obj._scrollTime=new Date().valueOf();
						        	if(obj.options.scrollBottom){
						        		eval(obj.options.scrollBottom+"()");
						        	}
						        }
					        }
					        obj._scrollstart=scrollTop;
					     });
					}
				},
				removeRow:function(tr){
					this.DataTableObj.row(tr).remove().draw();
				},
				removeRows:function(){
					var obj=this;
					$("."+obj.id+" label.checked").each(function(){
						obj.removeRow($(this).parents("tr:first"));
					});
				},
				removeAllRows:function(){//移除table所有数据 added by jc
					var obj=this;
					$("."+obj.id+" tbody tr").each(function(){
						obj.removeRow($(this));
					});
				},
				addRow:function(jsondata){
					this.DataTableObj.row.add(jsondata).draw();
				},
				addRows:function(jsondatas){
					var obj=this;
					$.each(jsondatas, function() {
						obj.addRow(this);
					});
				},
				resetData:function(jsondatas){//用于重置数据 added by jc
					this.removeAllRows();
					this.addRows(jsondatas);
				},
				getRow:function(tr){//获取某行的数据
					return this.DataTableObj.row(tr).data();
				},
				getSelectedRow:function(){//获取选中行的数据
					var obj=this;
					var data=[];
					this.wrapper.find(".dt-check label.checked").each(function(){
						data.push(obj.getRow($(this).parents("tr:first")));
					});
					return data;
				},
				
			};
			if ( typeof module != 'undefined' && module.exports ) {
				module.exports = tableBuilder;
			} else {
				window.tableBuilder = tableBuilder;
			}
})(jQuery);
var modalBulider = {
	_currentZIndex:1000,
	_modalClass:null,				
	_creatElemHtml : function(modelselector,defaultOption){	
		this._modalClass='modal_'+new Date().valueOf();
		var bodyWidth = document.documentElement.clientWidth;
		var bodyHeight = document.documentElement.clientHeight;	
		$('body').append(template(modelselector));	
		$('body div[role="dialog"]:last').addClass(this._modalClass);					
		$('.'+ this._modalClass + " .modal-body").css({'max-width':defaultOption.maxWidth*bodyWidth + 'px','min-width':defaultOption.minWidth*bodyWidth +'px'});
		$('.'+ this._modalClass + " .modal-header h4").text(defaultOption.title);
		$('.'+ this._modalClass + " .modal-header").css('background',defaultOption.titlebgColor);
		$('.'+ this._modalClass + " .modal-body").css({'max-height':defaultOption.maxHeight*bodyHeight+'px','min-height':defaultOption.minHeight*bodyHeight + 'px'});
		if(defaultOption.contentheight && defaultOption.contentheight !='auto'){
			if(defaultOption.contentheight > defaultOption.maxHeight){
				$('.'+ this._modalClass + " .modal-body").css({'height':defaultOption.maxHeight*bodyHeight});
			}else{
				$('.'+ this._modalClass + " .modal-body").css({'height':defaultOption.contentheight*bodyHeight});
			}
			
		}else{
			$('.'+ this._modalClass + " .modal-body").css({'height':'auto'});
		}
		if(defaultOption.containerWidth && defaultOption.containerWidth !='auto'){
			if(defaultOption.containerWidth > defaultOption.maxWidth){
				$('.'+ this._modalClass).css({'width':defaultOption.maxWidth*bodyWidth + 'px','margin-left':'-'+(defaultOption.maxWidth*bodyWidth/2) + 'px','left':'50%'});
			}else{
				$('.'+ this._modalClass).css({'margin-left':'-'+(defaultOption.containerWidth*bodyWidth/2) + 'px','width':defaultOption.containerWidth*bodyWidth + 'px','left':'50%'});
			}
			
		}
	
	},
	_drapModal:function(){
		var obj=this;
		var p={};
        function getXY(eve) {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            return {x : scrollLeft + eve.clientX,y : scrollTop + eve.clientY };
        }
        
        $(document).on("mouseup",function(ev){
        	p={};
        	$(document).off("mousemove");
        });
        
        $(".modal-header:last").on("mousedown",function(ev){
        	$('.'+ obj._modalClass).addClass("moved");
        	document.body.onselectstart=document.body.ondrag=function(){
				return false;
			}
        	p.y = ev.pageY - $(this).parents(".sui-modal")[0].offsetTop;
        	p.x = ev.pageX - $(this).parents(".sui-modal")[0].offsetLeft;
        	
            $(document).on("mousemove",function(ev){console.log("a");
        		var oEvent = ev || event;
                var pos = getXY(oEvent);
                $(".sui-modal:last").css({left:(pos.x-p.x) + "px",top:(pos.y-p.y) + "px","margin-left":"10px","margin-top":"10px"});
            });
        });
		$(document).on('hidden.bs.modal','.modal',function(e){
			$('.modal-dialog').css({'top': '0px','left': '0px'})
			document.body.onselectstart=document.body.ondrag=null;
		});
//		var dragModal={
//			mouseStartPoint:{"left":0,"top":  0},
//			mouseEndPoint : {"left":0,"top":  0},
//			mouseDragDown : false,
//			basePoint : {"left":0,"top":  0},
//			moveTarget:null,
//			topleng:0
//		}
//		$(document).on("mousedown",".modal-header",function(e){
//			var Iheight = document.documentElement.clientHeight;
//			//webkit内核和火狐禁止文字被选中
//			$('body').addClass('select');			
//			$('body').css('height',Iheight);
//			//ie浏览器禁止文字选中
//			document.body.onselectstart=document.body.ondrag=function(){
//				return false;
//				}
//			if($(e.target).hasClass("close"))//点关闭按钮不能移动对话框  
//				return;  
//			dragModal.mouseDragDown = true;  
//			dragModal.moveTarget = $(this).parent().parent().parent();         
//			dragModal.mouseStartPoint = {"left":e.clientX,"top":  e.pageY};  
//			dragModal.basePoint = dragModal.moveTarget.offset();  
//			dragModal.topLeng=e.pageY-e.clientY;
//		});  
//		$(document).on("mouseup",function(e){       
//			dragModal.mouseDragDown = false;  
//			dragModal.moveTarget = undefined;  
//			dragModal.mouseStartPoint = {"left":0,"top":  0};  
//			dragModal.basePoint = {"left":0,"top":  0};  
//		});  
//		$(document).on("mousemove",function(e){  
//			if(!dragModal.mouseDragDown || dragModal.moveTarget == undefined)return;          
//			var mousX = e.clientX;  
//			var mousY = e.pageY;  
//			if(mousX < 0)mousX = 0;  
//			if(mousY < 0)mousY = 25;  
//			dragModal.mouseEndPoint = {"left":mousX,"top": mousY};  
//			var width = dragModal.moveTarget.width();  
//			var height = dragModal.moveTarget.height();
//			var clientWidth=document.body.scrollWidth
//			var clientHeight=document.body.scrollHeight;
//			if(dragModal.mouseEndPoint.left<dragModal.mouseStartPoint.left - dragModal.basePoint.left){
//				dragModal.mouseEndPoint.left=0;
//			}
//			else if(dragModal.mouseEndPoint.left>=clientWidth-width+dragModal.mouseStartPoint.left - dragModal.basePoint.left){
//				dragModal.mouseEndPoint.left=clientWidth-width-38;
//			}else{
//				dragModal.mouseEndPoint.left =dragModal.mouseEndPoint.left-(dragModal.mouseStartPoint.left - dragModal.basePoint.left);//移动修正，更平滑  
//				
//			}
//			if(dragModal.mouseEndPoint.top-(dragModal.mouseStartPoint.top - dragModal.basePoint.top)<dragModal.topLeng){
//				dragModal.mouseEndPoint.top=dragModal.topLeng;
//			}else if(dragModal.mouseEndPoint.top-dragModal.topLeng>clientHeight-height+dragModal.mouseStartPoint.top - dragModal.basePoint.top){
//				dragModal.mouseEndPoint.top=clientHeight-height-38+dragModal.topLeng;
//			}
//			else{
//				dragModal.mouseEndPoint.top = dragModal.mouseEndPoint.top - (dragModal.mouseStartPoint.top - dragModal.basePoint.top);           
//			}
//			dragModal.moveTarget.offset(dragModal.mouseEndPoint);  
//		});   
//		$(document).on('hidden.bs.modal','.modal',function(e){
//			$('.modal-dialog').css({'top': '0px','left': '0px'})
//			$('body').removeClass('select');
//			document.body.onselectstart=document.body.ondrag=null;
//		})
	},
	modal:function(modalselector,option){
		var defaultOption ={
			title:'提示',//标题
			titlebgColor:'',//标题背景颜色
			containerWidth:'',//容器宽度百分比
			maxWidth : 0.7,
			minWidth : 0.2,
			contentheight:'',//内容高度
			maxHeight : 0.8,
			minHeight: 0.2	,
		};
		if(option) $.extend(true, defaultOption, option);
//		if(!$.isEmptyObject(option)){
//			for(i in option){
//				defaultOption[i] = option[i];
//			}						
//		}
		this._creatElemHtml(modalselector,defaultOption);
		$('.'+ this._modalClass).modal();
		
		if(defaultOption.shown){
			$('.'+ this._modalClass).on('shown', function(e){						
				defaultOption.shown();
			});
		}
		if(defaultOption.hidden){
			$('.'+ this._modalClass).on('hidden', function(e){						
				defaultOption.hidden();
				$(this).remove();
			});
		}
		else{
			$('.'+ this._modalClass).on('hidden', function(e){						
				$(this).remove();
			});
		}
		
		if(!defaultOption.containerWidth){//弹层自定义宽度展示后获取宽度值
			$('.'+ this._modalClass).css('width','auto');					
			var objwidth = $('.'+ this._modalClass).width();
			$('.'+ this._modalClass).css({'margin-left':'-'+(objwidth/2) + 'px','left':'50%'});
		}
		/** 拖拽模态框*/ 			
		this._drapModal();					
		$(".sui-modal-backdrop:last").css("z-index",this._currentZIndex);
		this._currentZIndex++;
		$(".sui-modal:last").css("z-index",this._currentZIndex);
		this._currentZIndex++;
	},
	resize:function(){
		if($('.'+ this._modalClass).hasClass("moved")){
			var left = (document.documentElement.clientWidth-$('.'+ this._modalClass).width())/2;
			var top = (document.documentElement.clientHeight-$('.'+ this._modalClass).height())/2;
			$('.'+ this._modalClass).css({top:top+"px",left:left+"px",margin:"0px"});
			
		}else{
			var w = 0-$('.'+ this._modalClass).width()/2;
			var h = 0-$('.'+ this._modalClass).height()/2;
			$('.'+ this._modalClass).css({"margin-top":h+"px","margin-left":w+"px"});
		}
	}
};

(function($){
	var treeBuilder=function(el,datasource,options){
				if(!(datasource instanceof Array)){
					return null;
				}
				if(datasource.length<=0){
					return null;
				}
				this.wrapper = typeof el == 'string' ? $(el) : el;
				this.data=datasource;
				this.options = {
					displayType:"normal",
					types : {
		//				"#" : { "max_children" : 1, "max_depth" : 4, "valid_children" : ["root"] },
		//				"root" : { "icon" : "/static/3.3.3/assets/images/tree_icon.png", "valid_children" : ["default"] },
		//				"default" : { "valid_children" : ["default","file"] },
						"file" : { "icon" : "jstree-default jstree-file" }
					},
					plugins : ["wholerow","types","dnd", "state"],
					core : {
						"check_callback" : true,
						'force_text' : true,
						"animation" : 0,
						'data' : datasource
					}
				};
				if(options){
					for ( var i in options ) {
						this.options[i] = options[i];
					}
				}

				if(this.options.displayType=="hasCheck"){
					this.options.checkbox={keep_selected_style : false};
					this.options.plugins=["wholerow","checkbox","types","dnd", "state"];
				}
				
				this._create();
			};
			treeBuilder.prototype={
				_create:function(){
					var obj = this;
					this.treeObj = this.wrapper.jstree(this.options);
					this.treeObj = this.wrapper.jstree(
						{
							core:{
								"check_callback" : true
							}
						}
					);
					
					if(this.options.onChange && typeof(this.options.onChange)=="function"){
						this.wrapper.on("changed.jstree",this.options.onChange);
					}
					if(this.options.onSelected && typeof(this.options.onSelected)=="function"){
						this.wrapper.on("select_node.jstree",this.options.onSelected);
					}
					if(this.options.onDeSelected && typeof(this.options.onDeSelected)=="function"){
						this.wrapper.on("deselect_node.jstree",this.options.onDeSelected);
					}
					if(this.options.onDeleteNode && typeof(this.options.onDeleteNode)=="function"){
						this.wrapper.on("delete_node.jstree",this.options.onDeleteNode);
					}
					
					if(this.options.displayType=="normal"){
						this.wrapper.on("click",".jstree-node",function(event){
							event.stopPropagation();
							obj.wrapper.find(".tree-operate").remove();
							var url= frameObj.host();
							if($(this).find("a:first .tree-operate").length<=0){
								$(this).find("a:first").append('<div class="tree-operate" style="display: inline-block;padding-left:5px;"><i class="jstree-default jstree-icon add" style="background: url('+url+'/lib/jstree/images/32px2.png) -132px -68px no-repeat;" ></i><i class="jstree-default jstree-icon edit" style="background: url('+url+'/lib/jstree/images/32px2.png) -164px -68px no-repeat;" ></i><i class="jstree-default jstree-icon delete" style="background: url('+url+'/lib/jstree/images/32px2.png) -196px -68px no-repeat;" ></i></div>');
							}
						});
						this.wrapper.on("click",".add",function(){
							event.stopPropagation();
							obj.addNode();
						});
						this.wrapper.on("click",".edit",function(){
							event.stopPropagation();
							obj.renameNode();
						});
						this.wrapper.on("click",".delete",function(){
							event.stopPropagation();
							obj.deleteNode();
						});
					}
				},
				addNode:function(){
					var obj = this;
					var sel = this.treeObj.get_selected();
					var parentId=null;
					if(!sel.length) { return false; }
					parentId = sel[0];
					sel = this.treeObj.create_node(sel,  {"type":"file",text:"新节点"},'last',function(){
//						console.log(sel);
					});
					if(sel) {
						this.treeObj.edit(sel,null,function(node){
							if(obj.options.onAddNode && typeof(obj.options.onAddNode)=="function"){
								obj.options.onAddNode(node);
							}
						});
					}
				},
				renameNode:function(){
					var obj = this;
					var sel = this.treeObj.get_selected();
					if(!sel.length) { return false; }
					sel = sel[0];
					this.treeObj.edit(sel,null,function(node){
						if(obj.options.onRenameNode && typeof(obj.options.onRenameNode)=="function"){
							obj.options.onRenameNode(node);
						}
					});
				},
				deleteNode:function(){
					var obj = this;
					var sel = this.treeObj.get_selected();
					if(!sel.length) { return false; }
					this.treeObj.delete_node(sel);
				},
				selectAll:function(){
					this.treeObj.select_all();
				},
				deSelectAll:function(){
					this.treeObj.deselect_all();
				},
				getSelectedNode:function(){
					return this.treeObj.get_selected();
				},
				selectNodes:function(ids){
					this.treeObj.select_node(ids);
				}
			};
			if ( typeof module != 'undefined' && module.exports ) {
				module.exports = treeBuilder;
			} else {
				window.treeBuilder = treeBuilder;
			}
})(jQuery);

(function($){
	var progressBuilder=function(el,options){
				this.wrapper = typeof el == 'string' ? $(el) : el;
				this.options = {
					type:""   //progress-danger,progress-success,progress-warning,progress-info
				};
				if(options){
					for ( var i in options ) {
						this.options[i] = options[i];
					}
				}				
				this._create();
			};
			progressBuilder.prototype={
				_create:function(){
					var obj = this;
					this.wrapper.append('<div class="sui-progress '+ obj.options.type +' progress-striped active"><div style="width: 0%;" class="bar"></div></div>');
				},
				setWidth:function(w){
					this.wrapper.find('.bar').css("width",w);
				},
				remove:function(){
					this.wrapper.find(".sui-progress").remove();
				}
			};
			if ( typeof module != 'undefined' && module.exports ) {
				module.exports = progressBuilder;
			} else {
				window.progressBuilder = progressBuilder;
			}
})(jQuery);

/**
* 时间对象的格式化
*/
Date.prototype.format = function(format)
{
	/*
	* format="yyyy-MM-dd hh:mm:ss";
	*/
	var o = {
	"M+" : this.getMonth() + 1,
	"d+" : this.getDate(),
	"h+" : this.getHours(),
	"m+" : this.getMinutes(),
	"s+" : this.getSeconds(),
	"q+" : Math.floor((this.getMonth() + 3) / 3),
	"S" : this.getMilliseconds()
	}
	 
	if (/(y+)/.test(format))
	{
	format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
	- RegExp.$1.length));
	}
	 
	for (var k in o)
	{
	if (new RegExp("(" + k + ")").test(format))
	{
	format = format.replace(RegExp.$1, RegExp.$1.length == 1
	? o[k]
	: ("00" + o[k]).substr(("" + o[k]).length));
	}
	}
	return format;
}
Date.prototype.addDay=function(i){
	var d = new Date();
	d.setTime(this.valueOf()+(1000*60*60*24)*i);
	return d;
}


