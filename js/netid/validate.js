var errlist=[];function hasError(errorId)
{if(!errorId){var errcount=0;for(e in errlist){if(errlist[e])errcount+=1;}
return errcount>0;}
return errlist[errorId];}
function setError(errorId,errorText)
{var elem=document.getElementById(errorId);if(elem==null)return;if(hasError(errorId)){clearError(errorId);}
errlist[errorId]=true;if(errorText){var popupId=errorId+"_errhndl_popup";var popup=document.createElement("DIV");popup.id=popupId;popup.style.position="absolute";popup.style.background="#F0F0E2";popup.style.border="solid thin black";popup.style.color="#9F0000";popup.style.padding="3px";popup.style.fontFamily="helvetica, sans-serif";popup.style.fontSize="11px";popup.appendChild(document.createTextNode(errorText));document.body.appendChild(popup);var x=elem.offsetLeft;var y=elem.offsetTop;y+=elem.offsetHeight;var node=elem.offsetParent;for(;node;node=node.offsetParent){x+=node.offsetLeft;y+=node.offsetTop;}
popup.style.left=x+"px";popup.style.top=y+"px";}
document.getElementById(errorId).onblur=function(){clearError(errorId);this.onblur="";};}
function clearError(errorId){var elem=document.getElementById(errorId);if(elem==null)return;var popupId=errorId+"_errhndl_popup";elem=document.getElementById(popupId);if(elem!=null){document.body.removeChild(elem);}
if(hasError(errorId)){errlist[errorId]=false;}}
function mustHave(id,re,emptyMessage,noMatchMessage){var elem=document.getElementById(id);if(elem.value.length<1||elem.value.match(/^\s$/)){setError(id,emptyMessage);return true;}else if(re&&!elem.value.match(re)){setError(id,noMatchMessage);return true;}
return false;}
function mustNotHave(id,re,matchMessage){var elem=document.getElementById(id);if(re&&elem.value.match(re)){setError(id,matchMessage);return true;}
return false;}
