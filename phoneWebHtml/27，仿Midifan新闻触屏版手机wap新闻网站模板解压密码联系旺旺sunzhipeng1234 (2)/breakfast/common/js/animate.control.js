
if (!ismobile()) {
	//location.href = "../../kfcbreakfast.qq.com/default.htm";
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
track(channel,4173);
_mz_mevt('92', '521');

_mz_timer_start(1, '../../mse.mbm.cn.miaozhen.com/e.gif@ae=92&n=522&rt=2');


function initArguments(p) {
    var paramString = window.location.search;
    if (paramString.indexOf("?") > -1) {
        paramString = paramString.substring(1).replace(/&/g, '","').replace(/=/g, '":"');
        var paramObjs = JSON.parse('{"' + paramString + '"}');
        return paramObjs[p];
    }
}

var isSuccessShare = initArguments('share');
if(isSuccessShare){
	alert('分享成功');
}
var myScroll2;
$(document).ready(function() {
	var liLength = $('#wrapp li'),firstLi='',lastLi='';
	for(var i=0;i<liLength.length;i++){
		if(i==0){
			firstLi = liLength.eq(i).clone();
		}else if(i==liLength.length-1){
			lastLi = liLength.eq(i).clone();
		}
	}
	$('#wrapp ul').prepend(lastLi);
	$('#wrapp ul').append(firstLi);
	$('#wrapp ul').width($('#wrapp li').width()*$('#wrapp li').length);
    clearEvent();
    initAnimate();
    myScroll2 = new iScroll('wrapp',{
		snap: true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd: function () {
			if(this.currPageX ==0){
				myScroll2.scrollToPage(3,0,0);
				
			}
			else if(this.currPageX ==4){
				myScroll2.scrollToPage(1,0,0);
			}
		}
	});
    //随机显示分享内容
	var shareConRandom = parseInt(Math.random()*3);
	myScroll2.scrollToPage(shareConRandom+1,0,0);

});

function initAnimate() {
    setTimeout(function() {
        $(".title .t").css({
            "width" : "28px",
            "height" : "28px"
        });
    }, 2000);
    
    $(".icon").each(function(index) {
        switch(index) {
            case 0:
                $(".icon-1").css({
                    'left': '87px',
                    'top': '94px',
                    'width': '16px',
                    'height': '38px'
                });
                break;
            case 1:
                $(".icon-2").css({
                    'left': '102px',
                    "top": '48px',
                    'width': '31px',
                    'height': '35px'
                });
                break;
            case 2:
                $(".icon-3").css({
                    'left': '150px',
                    'top': '37px',
                    'width': '37px',
                    'height': '16px'
                });
                break;
            case 3:
                $(".icon-4").css({
                    'left': '206px',
                    'top': '50px',
                    'width': '33px',
                    'height': '34px'
                });
                break;
            case 4:
                $(".icon-5").css({
                    'left': '233px',
                    'top': '94px',
                    'width': '16px',
                    'height': '40px'
                });
                break;
        }
    });
}

function clearEvent() {
    setTimeout(function() {
        $(".clock").removeClass("shaking");
        addEvent();
    }, 2500);
}

function addEvent() {
    setTimeout(function() {
        $(".clock").addClass("shaking");
        clearEvent();
    }, 2500);
}

function shareToBlog(type,chann) {
	var shareContent = $('#wrapp ul li').eq(myScroll2.currPageX).text();
		shareContent = shareContent+"_25E8_25AF_25A6_25E6_2583_2585_25E7_2582_25B9_25E5_2587_25BB_25EF_25BC_259Ahttp_3A//wap.kfc.com.cn/breakfast/index.html";
    	shareContent = encodeURIComponent(shareContent);
    
    if (type == "sina") {
		_mz_mevt('92', '523');
		
		track(channel,4179,"../../wap.kfc.com.cn/callback/sinacallback@content="+shareContent+"&ad=kfcb&k=kfcb_"+chann+"_sina");

		
    } else if (type == "renren") {
		_mz_mevt('92', '525');

		track(channel,4180,"../../wap.kfc.com.cn/callback/renrencallback@content="+shareContent+"&ad=kfcb&k=kfcb_"+chann+"_renren");

		
	   
    } else if (type == "tecent") {
		_mz_mevt('92', '524');

		track(channel,4181,"../../wap.kfc.com.cn/callback/qqcallback@content="+shareContent+"&ad=kfcb&k=kfcb_"+chann+"_qq");
	
    }
}

function getText() {
    var shareTextArray = ["亲，早餐不吃，体力不支呢，KFC五好早餐不错哦，想吃的话点这里：http://wap.kfc.com.cn/breakfast","咕噜咕噜咕噜……肚子又叫唤了。偶想吃KFC五好早餐，你懂的：http://wap.kfc.com.cn/breakfast","人是铁饭是钢，早餐不吃饿得慌。亲，早上记得来一份KFC五好早餐：http://wap.kfc.com.cn/breakfast","一份早餐，不二之选，三天不吃，四体不勤，KFC五好早餐，只要六元起：http://wap.kfc.com.cn/breakfast"];
    
    return shareTextArray[Math.floor(Math.random()*(shareTextArray.length-1))];
}

function getImg() {
    var shareImgArray = ["../../wap.kfc.com.cn/breakfast/common/images/breakfast_feeds-1.jpg", "../../wap.kfc.com.cn/breakfast/common/images/breakfast_feeds-2.jpg", "../../wap.kfc.com.cn/breakfast/common/images/breakfast_feeds-3.jpg"];
    
    return shareImgArray[Math.floor(Math.random()*(shareImgArray.length-1))];
}