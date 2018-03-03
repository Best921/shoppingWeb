/* 选项卡切换 */

/**
 * @param {string} tab_header  TAB组件的所有选项卡 item
 * @param {string} tab_con TAB组件，内容区域，所有 item
 * @param {string} tab_active  选项卡高亮样式前缀，可选
 */
$.fn.UiTab = function(tab_header,tab_con,tab_active){
	var ui = $(this);
	var tab_btn = $(tab_header,ui);
	var tab_con = $(tab_con,ui);
	tab_btn.on('click',function(){
		var index = $(this).index();
		$(this).addClass(tab_active)
		.siblings().removeClass(tab_active);
		tab_con.hide()
		.eq(index).show();
		//特殊TAB按钮高亮，不通用
		$(this).find('img').addClass('img-active')
		.end().siblings().find('img').removeClass('img-active');
	});
};

$(function(){
	$('.floor').each(function(){
		$(this).UiTab('.btn','.content','btn-active');
	})
});