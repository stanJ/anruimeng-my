var indexObj = {
	init:function(){
		this.loadTable();
	},
	bindEvent:function(){
		
	},
	loadTable:function(){
		var data = [
			{
				"name": "张三",
				"address": "浦东区龙阳路",
				"age": "42",
				"company": "绿意",
				"id": "001"
			},
			{
				"name": "李四",
				"address": "普陀区长寿路",
				"age": "35",
				"company": "起迪",
				"id": "002"
			},
			{
				"name": "王五",
				"address": "奉贤区海湾路",
				"age": "28",
				"company": "泰丰",
				"id": "003"
			},
			{
				"name": "赵六",
				"address": "长宁江苏路",
				"age": "25",
				"company": "麒麟",
				"id": "004"
			}, 
			{
				"name": "赵六",
				"address": "长宁江苏路",
				"age": "25",
				"company": "麒麟",
				"id": "004"
			}, 
		];
		var op = {
			dataTitles: ['id', '类型', '名称', '要求完成时间', '状态', ],
			columns:['id','name','age','address','company',],
			dataSpecial: {
				0: {
					visible: true,
					class: "hide"//隐藏，但数据还在页面中，比较适合放id字段
				}
			},
			hasCheckBox: false,
			tableHeight:'140px',
		}
		var tb = new tableBuilder("#tb_1", data, op);
	}
}
$(function(){
	indexObj.init();
})

