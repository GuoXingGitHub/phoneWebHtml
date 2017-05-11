/**
 * 
 */
function gotoPage(event, gotoPage, totalPage, form, currentPage){
	if(!/^\d*$/.test(gotoPage.val())){
		Event.stop(event);
		return false;
	}
	
	if(parseFloat(gotoPage.val()) > parseFloat(totalPage)){
		gotoPage.val(totalPage);
		Event.stop(event);
		return false;
	}else if(gotoPage.val() < 1){
		gotoPage.val(1);
	}
	
	currentPage.val(gotoPage.val());
	form.submit();
	
}
