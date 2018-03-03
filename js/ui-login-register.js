/* 登录-注册脚本 */
/* 登录按钮类名 ui-loginWrap */
/* 注册按钮类名 ui-registerWrap */
$.fn.UiLogin = function(){
	$(this).on('click',function(){
		$('.ui-login-register-topLayer')
		.height($(document).height() + 'px')
		.show();
		$('.ui-loginWrap').show();
	});
	//切换到注册
	$('.ui-loginWrap').find('.ui-loginWrap-title').find('.btn').last()
	.on('click',function(){
		$(this).parent().parent().hide();
		$('.ui-registerWrap').show();
	});
	//关闭
	$('.ui-loginWrap').find('.ui-loginWrap-title').find('.close')
	.on('click',function(){
		$(this).parent().parent().hide();
		$('.ui-login-register-topLayer').hide();
	});
	//数据检验-粗略检测
	//验证账号
	$('.ui-loginWrap').children('.ui-loginWrap-form').find('input[name="id"]').on('change',function(){
		var id = $(this).val();
		if(id.length <= 7){
			$(this).next().css('top','0');
		}else{
			$(this).next().css('top','-9999px');
		}
	});
	//验证密码
	$('.ui-loginWrap').children('.ui-loginWrap-form').find('input[name="password"]').on('change',function(){
		var password = $(this).val();
		if(password.length < 6 || password.length > 16){
			$(this).next().css('top','0');
		}else{
			$(this).next().css('top','-9999px');
		}
	});
};

$.fn.UiRegister = function(){
	$(this).on('click',function(){
		$('.ui-login-register-topLayer')
		.height($(document).height() + 'px')
		.show();
		$('.ui-registerWrap').show();
	});
	//切换到登录
	$('.ui-registerWrap').find('.ui-registerWrap-title').find('.btn').first()
	.on('click',function(){
		$(this).parent().parent().hide();
		$('.ui-loginWrap').show();
	});
	//关闭
	$('.ui-registerWrap').find('.ui-registerWrap-title').find('.close')
	.on('click',function(){
		$(this).parent().parent().hide();
		$('.ui-login-register-topLayer').hide();
	});
	//数据检验-粗略检测
	//验证账号
	$('.ui-registerWrap').children('.ui-registerWrap-form').find('input[name="id"]').on('change',function(){
		var id = $(this).val();
		if(id.length <= 7){
			$(this).next().css('top','0');
		}else{
			$(this).next().css('top','-9999px');
		}
	});
	//验证验证码
	$('.ui-registerWrap').children('.ui-registerWrap-form').find('input[name="safeCode"]').on('change',function(){
		var safeCode = $(this).val();
		if(safeCode.toLowerCase()!=='gyyd'){
			$(this).nextAll('.ui-login-register-error').css('top','0');
		}else{
			$(this).nextAll('.ui-login-register-error').css('top','-9999px');
		}
	});
};

$(function(){
	$('.ui-login').UiLogin();
	$('.ui-register').UiRegister();
});