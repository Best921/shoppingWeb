$(function(){
	/* 页面滚动动态控制楼层导航信息 */
	var floor1 = $('.floor').eq(0);
	var floor2 = $('.floor').eq(1);
	var floor3 = $('.floor').eq(2);
	var floor4 = $('.floor').eq(3);
	var floor5 = $('.floor').eq(4);
	var floorLink = $('.floorLink');
	$(window).scroll(function(){
		var x1 = parseInt(floor1.offset().top - $(window).scrollTop());
		var x2 = parseInt(floor2.offset().top - $(window).scrollTop());
		var x3 = parseInt(floor3.offset().top - $(window).scrollTop());
		var x4 = parseInt(floor4.offset().top - $(window).scrollTop());
		var x5 = parseInt(floor5.offset().top - $(window).scrollTop());

		if(x1 > 300){
			floorLink.css('display','none');
		}else if(x1 > -400 && x1 < 300){
			floorLink.css('display','block');
			floorLink.find('a').eq(0).html('服装')
			.css('color','red');
		}else{
			floorLink.css('display','block');
			floorLink.find('a').eq(0).html('1F')
			.css('color','#666');
		}

		if(x2 > -400 && x2 < 300){
			floorLink.find('a').eq(1).html('运动')
			.css('color','red');
		}else{
			floorLink.find('a').eq(1).html('2F')
			.css('color','#666');
		}

		if(x3 > -400 && x3 < 300){
			floorLink.find('a').eq(2).html('手机')
			.css('color','red');
		}else{
			floorLink.find('a').eq(2).html('3F')
			.css('color','#666');
		}

		if(x4 > -400 && x4 < 300){
			floorLink.find('a').eq(3).html('电器')
			.css('color','red');
		}else{
			floorLink.find('a').eq(3).html('4F')
			.css('color','#666');
		}

		if(x5 > -400 && x5 < 300){
			floorLink.find('a').eq(4).html('数码')
			.css('color','red');
		}else{
			floorLink.find('a').eq(4).html('5F')
			.css('color','#666');
		}
	});
});
	