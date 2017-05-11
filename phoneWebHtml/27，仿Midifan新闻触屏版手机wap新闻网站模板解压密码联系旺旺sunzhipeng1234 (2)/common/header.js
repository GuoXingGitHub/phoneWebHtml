var date = new Date();
date.setDate(360);
$(document).ready(function(){
	$('.change').show();
	//showNext();
	$('#bookmark').click(function(){
		$('#bookmark').hide();
	});
	//hideBookMark();
	$('body > a > img').css('opacity','0');
});

function showNext(){
	setTimeout(function(){
		$('.change').show();
		hideNext();
	},3000);
}

function hideNext(){
	setTimeout(function(){
		$('.change').hide();
		showNext();
	},3000);
}
function hideBookMark(){
	setTimeout(function(){
		$('#bookmark').hide();
	},20000);
}


function isIos() {
	var u = navigator.userAgent.toLowerCase();

	if (u.indexOf('iphone') > -1 || u.indexOf('ipod') > -1 ) {
		return true;
	}
	return false;
}