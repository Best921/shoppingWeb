/* 轮播图脚本 */

//函数定义
$.fn.UiBannerSlider = function(){
	//全局变量
	var UBS_index = 0;
	var UBS_timer = null;
	var UBS_mainDiv = $(this);
	var UBS_banners =  UBS_mainDiv.find('.ui-bannerSlider-item');
	var UBS_dotBtns =  UBS_mainDiv.find('.ui-bannerSlider-dot');
	var UBS_btnPre =  UBS_mainDiv.find('.ui-bannerSlider-pre');
	var UBS_btnNext =  UBS_mainDiv.find('.ui-bannerSlider-next');
	function bannerSlide(){
		//设置间歇调用函数
		UBS_timer = setInterval(function(){
			UBS_index++;
			if(UBS_index>=5){
				UBS_index = 0;
			}
			//切换banner图
			changeBanner();
		},2000);
	}
	//切换banner图
	function changeBanner(){
		UBS_banners.each(function(i){
			if(i === UBS_index){
				$(this).addClass('ui-bannerSlider-active');
				UBS_dotBtns.eq(i).addClass('ui-bannerSlider-dot-active');
			}else{
				$(this).removeClass('ui-bannerSlider-active');
				UBS_dotBtns.eq(i).removeClass('ui-bannerSlider-dot-active');
			}
		});
	}
	//进入DIV,停止轮播
	UBS_mainDiv.mouseover(function(){
		clearInterval(UBS_timer);
	});
	//离开DIV,继续轮播
	UBS_mainDiv.mouseout(function(){
		bannerSlide();
	});
	//上一张按钮
	UBS_btnPre.click(function(){
		UBS_index--;
		if(UBS_index < 0){
			UBS_index = 4;
		}
		changeBanner();
	});
	//下一张按钮
	UBS_btnNext.click(function(){
		UBS_index++;
		if(UBS_index >= 5){
			UBS_index = 0;
		}
		changeBanner();
	});
	//圆点按钮
	UBS_dotBtns.click(function(){
		UBS_index = parseInt($(this).attr('data-id'));
		changeBanner();
	});
	//初始化
	UBS_mainDiv.mouseout();	
};

$(function(){
	$('.ui-bannerSlider').UiBannerSlider();
});