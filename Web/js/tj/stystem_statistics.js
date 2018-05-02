$(function(){
	seajs.use('tj_public');
	var data1 =[
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
		},
		{
			"01":     "aa",
			"02":     "bb",
			"03":     "bb",
			"04": 	  "cc",
		},
	];
	var op1={
		dataTitles:['姓名','邮箱','手机','工号',],
		hasCheckBox:false
	}
	var tb1 = new tableBuilder("#table1",data1,op1);
})
