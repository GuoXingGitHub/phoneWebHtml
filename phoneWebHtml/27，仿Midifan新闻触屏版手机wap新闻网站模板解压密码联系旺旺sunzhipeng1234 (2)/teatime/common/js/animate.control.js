if (!ismobile()) {
	// location.href = "../../kfcteatime.qq.com/default.htm";
}

function ismobile() {
	var u = navigator.userAgent.toLowerCase();
	if (u.indexOf('android') > -1 || u.indexOf('linux') > -1) {
		return true;
	}
	if (u.indexOf('dalvik') > -1) {
		return true;
	}
	if (u.indexOf('iphone') > -1 || u.indexOf('ipod') > -1 || u.indexOf('ipad') > -1) {
		return true;
	}
	if (u.indexOf('windows phone') > -1 || u.indexOf('windows mobile') > -1) {
		return true;
	}
	if (u.indexOf('uc ') > -1 || u.indexOf('ucweb') > -1) {
		return true;
	}
	if (u.indexOf('qqbrowser') > -1) {
		return true;
	}
	if (u.indexOf('opera') > -1 && u.indexOf('mobi') > -1) {
		return true;
	}
	return false;
}

//首页PV
track(channel,4209);

$(document).ready(function(){
	$('.teanav a').click(function(){
		$('.teanav li').css('z-index','0');
		$('.teanav a').removeClass('active');
		$(this).addClass('active');
		$(this).parent().css('z-index','1');
		if($(this).attr('title') == '9yuan'){
			$('.intro').fadeOut();
			$('.intro').eq(0).fadeIn();
			//9元
			track(channel,4215);
			
		}else{
			$('.intro').fadeOut();
			$('.intro').eq(1).fadeIn();
			//12元
			track(channel,4216);
		}
	});
	
	
	$('#navlist').click(function(ev){
		$('#listcon').toggle();
		ev.stopPropagation();
	});
	
	
	
	//sunAnimate1();
	sunAnimate();
	
})
	
	function sunAnimate(){
	setTimeout(function(){
		$('#nine').addClass('nshake');
		sunAnimate1();
	},1500);
	}
	
	function sunAnimate1(){
	$('.sun').show();
	$('.sun').addClass('animate1');
	setTimeout(function(){
		$('.sun').removeClass('animate1');
		sunAnimate3();
		$('.sun').addClass('animate2');
	},1000);
	}
	
	
	function sunAnimate3(){
	setTimeout(function(){
		$('#text').addClass('animate3');
		sunAnimate4();
	},10);
	}
	
	function sunAnimate4(){
	setTimeout(function(){
		$('#nine').removeClass('nshake');
		$('#text').removeClass('animate3');
		sunAnimate();
	},1000);
	}