//<![CDATA[
//Miaozhen Base Code Start
  _mzh=window._mzh || []; _mzt=window._mzt || []; _mz_dp=window._mz_dp || [];
  _mzh.push(
    ['mevt._x_utm'], ['mevt._x_lid'], ['mimp._x_lid'], ['mclk._x_lid'],
    ['mevt._urlpre', '../msg.mbm.cn.miaozhen.com/e.gif'],
    ['mimp._urlpre', '../g.mbm.cn.miaozhen.com/x.gif'],
    ['mclk._urlpre', '../e.mbm.cn.miaozhen.com/r.gif']
  );
  (function(){
    var mz=document.createElement('script');
    mz.type='text/javascript';mz.async=true;mz.src='../js.miaozhen.com/t.js';
    var t=document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(mz,t);
  })();
  function _mz_mevt(ae,n) {_mzh.push(['mevt._set_ae', ae], ['mevt._set_n', n], ['mevt._send']);}
  function _mz_mimp(k,p) {_mzh.push(['mimp._set_k', k], ['mimp._set_p', p],['mimp._send']);}
  function _mz_mclk(k,p) {_mzh.push(['mclk._set_k', k], ['mclk._set_p', p],['mclk._send']);}
  function _mz_simple(cmd) {_mzh.push(['_simple',cmd]);}
  function _mz_simple_param(n,k,v) {_mz_dp[n]=_mz_dp[n]||{};_mz_dp[n][k]=v;}
  function _mz_timer_start(n,u) {_mzt.push(n);if(u)_mzh.push([n+'._urlpre',u]);_mz_simple(n+'._timer_start');}
  function _mz_timer_start_x(n,u) {for(i=0;i<=_mzt.length;i++)_mz_timer_stop(_mzt[i]); _mzt=[];_mzt.push(n);_mz_timer_start(n,u);}
  function _mz_timer_stop(n) {_mz_simple(n+'._timer_stop');}
  _mz_simple_param(0,'timer_start',[10,30*60,0,'v','st:$1,si:$2,']);
//Miaozhen Base Code End
//]]>

/********************************************code start*********************************************************/
(function(window){
	var urlParam = ["cmsp","uidtype","idfa"];
	for(var i = 0;i<urlParam.length;i++){
        if(request(urlParam[i]) && localStorage){
            localStorage.removeItem(urlParam[i]);
            localStorage.setItem(urlParam[i],request(urlParam[i]));
        }
    }
})(window);
var trackPath = "http://track.mobile1.com.cn/tracknew/advTract/tractEventJsonP.action?";
var trackScript;
function track(cId, eventId, url) {
    var trckCmspData={ cmsp:"",uidtype:"",idfa:""};
    trckCmspData.cmsp=!(localStorage && localStorage.getItem('cmsp'))?"":localStorage.getItem('cmsp');
    trckCmspData.uidtype=!(localStorage && localStorage.getItem('uidtype'))?"":localStorage.getItem('uidtype');
    trckCmspData.idfa=!(localStorage && localStorage.getItem('idfa'))?"":localStorage.getItem('idfa');
    trackScript = null;
    trackScript = document.createElement("script");
    var src = trackPath + "cid=" + cId + "&eventid=" + eventId+"&cmsp="+trckCmspData.cmsp+"-"+trckCmspData.idfa+"____"+trckCmspData.uidtype;
    trackScript.type = "text/javascript";
    trackScript.src = src;
    document.getElementsByTagName("head")[0].appendChild(trackScript);
    if (url != undefined && url != null && url != "") {
        setTimeout(redirection, 500);
        function redirection() {
            window.location = url;
        }
    }
}
function eventcallback(result) {
    if(typeof trackScript==='undefined')
        return;
    document.getElementsByTagName("head")[0].removeChild(trackScript);
    trackScript=null;

}
function request(paras)
{ 
	var url = location.href; 
	var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
	var paraObj = {} 
	for (i=0; j=paraString[i]; i++){ 
		paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
	} 
	var returnValue = paraObj[paras.toLowerCase()]; 
	if(typeof(returnValue)=="undefined"){ 
		return ""; 
	}else{ 
		return returnValue; 
	} 
}
/********************************************code end*********************************************************/
