
if (!ismobile()) {
	//location.href = "../../kfclunch.qq.com/default.htm";
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
track(channel,4182);

var myScroll,myScroll2;
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

window.onload=function(){
	
	$('.pop').height(document.body.scrollHeight);
	
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
	
	myScroll = new iScroll('prode', {
		snap : true,
		momentum : false,
		vScrollbar : false,
		hScrollbar : false,
		onScrollEnd: function () {
			document.querySelector('#indicator > li.active').className = '';
			document.querySelector('#indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';

			switch(this.currPageX){
				case 0 : 				//A大图
					track(channel,4200);
					break;
				case 1 : 				//B大图
					track(channel,4201);
					break;
				case 2 : 				//AB大图
					track(channel,4202);
					break;
				case 3 : 				//C大图
					track(channel,4203);
					break;
				case 4 : 				//D大图
					track(channel,4204);
					break;
				case 5 : 				//CD大图
					track(channel,4205);
					break;
				case 6 : 				//E大图
					track(channel,4206);
					break;
				case 7 : 				//F大图
					track(channel,4207);
					break;
				case 8 : 				//G大图
					track(channel,4208);
					break;
			}
		}

	});
	myScroll2 = new iScroll('wrapp',{
		snap: true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd: function () {
			if(this.currPageX ==0){
				myScroll2.scrollToPage(4,0,0);
				
			}
			else if(this.currPageX ==5){
				myScroll2.scrollToPage(1,0,0);
			}
		}
	});
	
	//随机显示分享内容
	var shareConRandom = parseInt(Math.random()*4);
	myScroll2.scrollToPage(shareConRandom,0,0);
	
	
	$('#prolist a').click(function(){
		var currentPro = $(this).index();
		if(currentPro !=4){
			$('.pop').show();
			myScroll.refresh();
			if(currentPro>4){currentPro = currentPro-1;}
			myScroll.scrollToPage(currentPro,0,0);
			switch(currentPro){
					case 0 : 				//A小图
						track(channel,4191);
						break;
					case 1 : 				//B小图
						track(channel,4192);
						break;
					case 2 : 				//AB小图
						track(channel,4193);
						break;
					case 3 : 				//C小图
						track(channel,4194);
						break;
					case 4 : 				//D小图
						track(channel,4195);
						break;
					case 5 : 				//CD小图
						track(channel,4196);
						break;
					case 6 : 				//E小图
						track(channel,4197);
						break;
					case 7 : 				//F小图
						track(channel,4198);
						break;
					case 8 : 				//G小图
						track(channel,4199);
						break;
				}
			}
	})
	
	$('.close').click(function(){
		$('.pop').hide();
	});
	
	

}
window.onresize = function(){
	$('.pop').height(document.body.scrollHeight);
}

function shareToBlog(type,chann) {
	var shareContent = encodeURIComponent($('#wrapp ul li').eq(myScroll2.currPageX).text()+'../../wap.kfc.com.cn/lunch');
	
	// var shareContent = encodeURIComponent("午餐时间到，肚子咕咕叫，KFC餐厅报道！15元起豪华午餐，米饭加鲜汤，汉堡搭薯条，选择多多，有滋有味，吃饱吃好又不贵！http://kfclunch.qq.com/");
	//alert(shareContent);
	if (type == "sina") {
		
		track(channel,4188,"../../wap.kfc.com.cn/callback/sinacallback@content="+shareContent+"&ad=kfcl&k=kfcl_"+chann+"_sina");
		
		
	} else if (type == "renren") {
		
		track(channel,4189,"../../wap.kfc.com.cn/callback/renrencallback@content="+shareContent+"&ad=kfcl&k=kfcl_"+chann+"_renren");
		 
		 
	} else if (type == "tecent") {
		
		track(channel,4190,"../../wap.kfc.com.cn/callback/qqcallback@content="+shareContent+"&ad=kfcl&k=kfcl_"+chann+"_qq");

		
	}
}