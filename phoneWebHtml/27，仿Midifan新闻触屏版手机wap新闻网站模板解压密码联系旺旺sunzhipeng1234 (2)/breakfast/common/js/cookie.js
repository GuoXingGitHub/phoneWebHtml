/**************************************
 * set cookie
 **************************************/
function setCookie(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "")
    if ((name + "=" + escape(value)).length <= 4000)
        document.cookie = curCookie
}
/**************************************
 * get cookie
 **************************************/
function getCookie(name) {
    var prefix = name + "="
    var cookieStartIndex = document.cookie.indexOf(prefix)
    if (cookieStartIndex == -1)
        return null
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
    if (cookieEndIndex == -1)
        cookieEndIndex = document.cookie.length
    return decodeURI(unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex)));
}
/**************************************
 * delete cookie
 **************************************/
function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
    }
}
/**************************************
 * fix date
 **************************************/
function fixDate(date) {
    var base = new Date(0)
    var skew = base.getTime()
    if (skew > 0)
        date.setTime(date.getTime() - skew)
}