(function(){var av=document.URL.toLowerCase();var G=s(av).params;var ad=G.ad_od;var T=G.pc_source;var E=navigator.userAgent;var P=E.match(/Chrome/i)!=null&&E.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i)==null?true:false;var F=(E.match(/(Android);?[\s\/]+([\d.]+)?/))?true:false;var af=(E.match(/(iPad).*OS\s([\d_]+)/))?true:false;var X=(E.match(/(Mac\sOS)\sX\s([\d_]+)/))?true:false;var Q=(!af&&E.match(/(iPhone\sOS)\s([\d_]+)/))?true:false;var Y=(Q||af)&&E.match(/Safari/);var q=0;var i=E.match(/(iPhone\sOS)\s([\d_]+)/);var ai=(i&&i.length>2)?(i[2].split("_").length>0?i[2].split("_")[0]:""):"";Y&&(q=E.match(/Version\/([\d\.]+)/));try{q=parseFloat(q[1],10)}catch(z){}var E=window.navigator.userAgent,k=false;var k=E.toUpperCase().indexOf("SAMSUNG-SM-N7508V")!=-1;var V="plugIn_downloadAppPlugIn_loadIframe";var f=false;var N=0;var aq={};var l={};var ab=null;var Z={};var O=window.Zepto||window.jQuery?true:false;var y=[];var j=window.localStorage?true:false;var M=Math.floor(Math.random()*100)+1;var t=false;var B=false;if(E.indexOf("baiduboxapp")!=-1&&E.indexOf("light")!=-1){if(((ad&&(ad==1||ad==2||ad==3))||T)){}else{B=true;t=true}}var K=false;var n=null;var at={closeUaAjax:false,keplerAjax:false,configCenterAjax:false};var c={closeUaAjax:null,configCenterAjax:null};var ae={AROUSAL_APP:true,DOWNLOAD_LAYER:true,GENERAL_HEAD:true,msf_type:"auto",cooldown_time:0,scheme_prame:"",use_universallinks:true,appDownCloseIntervalTime:0,appDownOpenIntervalTime:0,downAppConfigData:null,isNewUser:false};var I={keplerID:null,keplerFrom:1,keplerParamJson:null};var h={isUniversalLinksUa:false,isUniversalLinksOs:false,isUseUniversalLinks:false};var D={login_State:false,pcScan_Layer:null,newPeople_Layer:null};var p={url:"https://mapi.m.jd.com/config/display.action?_format_=json&domain="+encodeURIComponent(document.referrer),method:"POST",async:true,timeout:1400,withCredentials:true,hasAjax:"configCenterAjax",hasAjaxSend:false,error:function(){at.configCenterAjax=true},success:function(az){at.configCenterAjax=true;try{az=JSON.parse(az);g(az)}catch(aA){}}};var L={url:"https://so.m.jd.com/downLoad/closeUa.action?_format_=json",method:"POST",async:true,timeout:1200,hasAjax:"closeUaAjax",hasAjaxSend:false,error:function(){at.closeUaAjax=true},success:function(az){at.closeUaAjax=true;try{az=JSON.parse(az);if(az&&az.ua){az=JSON.parse(az.ua);al(az)}}catch(aA){}}};function s(az){var e=document.createElement("a");e.href=az;return{source:az,protocol:e.protocol.replace(":",""),host:e.hostname,port:e.port,query:e.search,params:(function(){var aC={},aB=e.search.replace(/^\?/,"").split("&"),aA=aB.length,aD=0,aE;for(;aD<aA;aD++){if(!aB[aD]){continue}aE=aB[aD].split("=");aC[aE[0]]=aE[1]}return aC})(),file:(e.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],hash:e.hash.replace("#",""),path:e.pathname.replace(/^([^\/])/,"/$1"),relative:(e.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:e.pathname.replace(/^\//,"").split("/")}}function ao(){var az=new Date();var aA=az.getFullYear();var aB=az.getMonth()+1;var e=az.getDate();strDate=aA+"-"+aB+"-"+e;return strDate}function am(aA,az,e){if(O){ab("#"+aA).bind(az,e)}else{ab("#"+aA).addEventListener(az,e,!1)}}function w(e){var az=(e||"mGen")+(++N);return az}if(O){ab=window.$;Z=window.$}else{ab=function(e){if(typeof e=="object"){return e}return document.querySelector(e)};if(!window.$){window.$=Z=ab}else{Z=window.$}}window.onblur=function(){for(var e=0;e<y.length;e++){clearTimeout(y[e])}};function m(aA){var az=document.cookie.indexOf(aA+"=");if(az==-1){return""}az=az+aA.length+1;var e=document.cookie.indexOf(";",az);if(e==-1){e=document.cookie.length}return document.cookie.substring(az,e)}function ac(aA,aC,e,aD,aB){var aE=aA+"="+escape(aC);if(e!=""){var az=new Date();az.setTime(az.getTime()+e*24*3600*1000);aE+=";expires="+az.toGMTString()}if(aD!=""){aE+=";path="+aD}if(aB!=""){aE+=";domain="+aB}document.cookie=aE}function J(aA,aD){var aC=null;if(aD){aC={downAppURl:"//h5.m.jd.com/active/download/download.html?channel=jd-m",downAppIos:"https://itunes.apple.com/us/app/jing-dong-wang-gou-shou-dan/id414245413",downWeixin:"http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",downIpad:"https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",downAppIosPage:"//st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html",inteneUrl:"openapp.jdmobile://virtual?",inteneUrlParams:null,sourceType:"JSHOP_SOURCE_TYPE",sourceValue:"JSHOP_SOURCE_VALUE",M_sourceFrom:"mxz",NoJumpDownLoadPage:false,kepler_param:null,autoOpenAppEventId:"MDownLoadFloat_AppArouse",autoOpenAppEventParam:"",autoOpenIntervalTime:0,autoOpenAppCallback:null,autoOpenAppCallbackSource:null,cookieFlag:null,noJdApp:false,universalLinksUrl:"https://linkst.m.jd.com"}}else{aC={downAppURl:"//h5.m.jd.com/active/download/download.html?channel=jd-m",downAppIos:"https://itunes.apple.com/us/app/jing-dong-wang-gou-shou-dan/id414245413",downWeixin:"http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",downIpad:"https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",downAppIosPage:"//st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html",inteneUrl:"openapp.jdmobile://virtual?",inteneUrlParams:null,openAppBtnId:"",closePanelBtnId:"",closePanelId:"",openAppCallback:null,openAppCallbackSource:null,closeCallblack:null,closeCallblackSource:null,cookieFlag:null,sourceType:"JSHOP_SOURCE_TYPE",sourceValue:"JSHOP_SOURCE_VALUE",openAppEventId:"MDownLoadFloat_OpenNow",openAppEventParam:"",closePanelEventId:"MDownLoadFloat_Close",closePanelEventParam:"",appDownCloseIntervalTime:0,appDownOpenIntervalTime:0,noRecord:false,isnotWriteOpenAppCookie:false,M_sourceFrom:"mxz",msf_type:"click",NoJumpDownLoadPage:false,kepler_param:null,noJdApp:false,universalLinksUrl:"https://linkst.m.jd.com"}}if(aA){for(var aB in aA){if((aB&&aA[aB])||(aB=="appDownCloseIntervalTime"&&aA[aB]==0)||(aB=="appDownOpenIntervalTime"&&aA[aB]==0)||(aB=="autoOpenIntervalTime"&&aA[aB]==0)){if(aB=="appDownCloseIntervalTime"||aB=="appDownOpenIntervalTime"||aB=="autoOpenIntervalTime"){var aF=/^(-     |\+)?\d+$/;if(aF.test(aA[aB])&&aA[aB]>=0){try{var az=parseInt(aA[aB],10);aC[aB]=az}catch(aE){}}}else{aC[aB]=aA[aB]}}}}return aC}function ah(aA){var aD=ay(aA,true);var aB=aA.universalLinksUrl+"/ul/ul.action?"+aD;if(navigator.userAgent.indexOf("baidubrowser")>=0){window.location.href=aB}else{var az=document.createElement("a");az.setAttribute("href",aB);az.style.display="none";document.body.appendChild(az);var aC=document.createEvent("HTMLEvents");aC.initEvent("click",!1,!1);az.dispatchEvent(aC)}}function R(e,aC){var aE=ay(e);var aA=null;if(af||Q){aA=e.downAppIosPage}else{aA=e.downAppURl}var az=function(){if((P&&F)||k){var aG=aE;aE=ax(aG);setTimeout(function(){window.location.href=aE},50)}if((Y&&q>=9)||X){setTimeout(function(){var aH=document.createElement("a");aH.setAttribute("href",aE);aH.style.display="none";document.body.appendChild(aH);var aI=document.createEvent("HTMLEvents");aI.initEvent("click",!1,!1);aH.dispatchEvent(aI)},0)}else{document.querySelector("#"+V).src=aE}if(!e.NoJumpDownLoadPage){var aF=Date.now();setTimeout(function(){var aH=setTimeout(function(){aw(aF,aA)},1500);y.push(aH)},100)}};if(e.isWxOpen&&navigator.userAgent.indexOf("MicroMessenger")>-1){var aD=aE.split("//")[1],aB=aD.split("?params=")[1];aD="virtual?params="+encodeURIComponent(aB);new wxOpenApp(aD)}else{az()}}function aw(aA,az){var e=Date.now();if(aA&&(e-aA)<5000){window.location.href=az}}function ay(aC,az){var aM=[];var aF=aC.inteneUrlParams;var aK={category:"jump",des:"HomePage"};if(aC.sourceType&&aC.sourceValue){aK.sourceType=aC.sourceType;aK.sourceValue=aC.sourceValue;if(aF&&!aF.sourceType&&!aF.sourceValue){aF.sourceType=aC.sourceType;aF.sourceValue=aC.sourceValue}}if(aC&&aC.M_sourceFrom){if(az){aC.M_sourceFrom=(aC.M_sourceFrom.indexOf("_UL")>=0)?aC.M_sourceFrom:(aC.M_sourceFrom+"_UL")}aK.M_sourceFrom=aC.M_sourceFrom;if(aF){aF.M_sourceFrom=aC.M_sourceFrom}}if(aF){for(var aL in aF){if(aL&&aF[aL]){if(Object.prototype.toString.call(aF[aL])==="[object Object]"){aM.push('"'+aL+'":'+JSON.stringify(aF[aL]))}else{aM.push('"'+aL+'":"'+aF[aL]+'"')}}}}else{for(var aL in aK){if(aL&&aK[aL]){aM.push('"'+aL+'":"'+aK[aL]+'"')}}}if(aC&&aC.msf_type){aM.push('"msf_type":"'+aC.msf_type+'"')}if(I.keplerID){aM.push('"keplerID":"'+encodeURIComponent(I.keplerID)+'"');aM.push('"keplerFrom":"'+I.keplerFrom+'"')}if(I.keplerParamJson){aM.push('"kepler_param":'+encodeURIComponent(I.keplerParamJson))}if(az){aM.push('"NoJumpDownLoadPage":'+aC.NoJumpDownLoadPage);aM.push('"downAppIos":"'+encodeURIComponent(aC.downAppIos)+'"');aM.push('"locationHref":"'+encodeURIComponent(window.location.href)+'"')}try{var aG=MPing.EventSeries.getSeries();if(aG){var aN=JSON.parse(aG);for(var aL in aN){if(aL&&aN[aL]){aN[aL]=(aL=="utr"||aL=="umd"||aL=="ucp")?encodeURIComponent(aN[aL]):aN[aL]}}aN.jdv=encodeURIComponent(m("__jdv"));aN.unpl=encodeURIComponent(m("unpl"));aN.mt_xid=encodeURIComponent(m("mt_xid"));aN.mt_subsite=encodeURIComponent(m("mt_subsite"))}var aJ={mt_subsite:encodeURIComponent(m("mt_subsite")),__jdv:encodeURIComponent(m("__jdv")),unpl:encodeURIComponent(m("unpl")),__jda:encodeURIComponent(m("__jda"))};aG=JSON.stringify(aN);aM.push('"m_param":'+aG);aM.push('"SE":'+JSON.stringify(aJ))}catch(aI){aM.push('"m_param":null')}var aB="{"+aM.join(",")+"}";var aE=aC.inteneUrl.split("?");var aA=null;var aH="";if(ae.scheme_prame){aH="/"+ae.scheme_prame}if(aE.length==2&&aE[1]){aA=aE[0]+aH+"?"+aE[1]+"&params="+aB}else{aA=aE[0]+aH+"?params="+aB}if(K){var aD={url:"//ccc-x.jd.com/dsp/op?openapp_url="+encodeURI(aB)+"&openapp_source_type=100",method:"GET",async:true,timeout:1000,error:function(){},success:function(e){}};ag(aD)}return aA}function ax(e){return"intent://m.jd.com/#Intent;scheme="+e+";package=com.jingdong.app.mall;end"}function S(e){if(e.openAppBtnId&&document.querySelector("#"+e.openAppBtnId)){aq[e.openAppBtnId]=e;if(e&&e.M_sourceFrom&&e.M_sourceFrom=="mxz"){if(e.openAppEventParam){e.openAppEventParam=e.openAppEventParam+"_other_"+window.location.hostname}else{e.openAppEventParam="other_"+window.location.hostname}}A(e.openAppBtnId,e.openAppEventId,e.openAppEventParam);am(e.openAppBtnId,"click",function(){var aC=this.getAttribute("id");var az=aq[aC];if(!f){var aB=document.createElement("iframe");aB.id=V;document.body.appendChild(aB);document.getElementById(V).style.display="none";document.getElementById(V).style.width="0px";document.getElementById(V).style.height="0px";f=true}if(az.openAppCallback){var aA=az.openAppCallbackSource?az.openAppCallbackSource:null;az.openAppCallback.call(this,aA)}d(az,"appDownOpenIntervalTime");ap(az);if(h.isUseUniversalLinks&&!az.noJdApp){ah(az)}else{R(az)}})}}function a(az,e){if(az.closePanelBtnId&&az.closePanelId&&document.querySelector("#"+az.closePanelId)&&document.querySelector("#"+az.closePanelBtnId)){aq[az.closePanelBtnId]=az;A(az.closePanelBtnId,az.closePanelEventId,az.closePanelEventParam);if(!e){if(an(az)){document.querySelector("#"+az.closePanelId).style.display="none";if(az.closeCallblack){var aB=event||window.event;var aA=az.closeCallblackSource?az.closeCallblackSource:null;az.closeCallblack.call(this,aA,aB)}return}else{document.querySelector("#"+az.closePanelId).style.display="block"}}am(az.closePanelBtnId,"click",function(){var aF=this.getAttribute("id");var aC=aq[aF];d(aC,"appDownCloseIntervalTime");document.querySelector("#"+aC.closePanelId).style.display="none";if(aC.closeCallblack){var aE=event||window.event;var aD=aC.closeCallblackSource?aC.closeCallblackSource:null;aC.closeCallblack.call(this,aD,aE)}})}}function d(az,e){var aA=null;if(az.cookieFlag&&az[e]){aA="downloadAppPlugIn_downCloseDate_"+az.cookieFlag}else{aA="downloadAppPlugIn_downCloseDate";az[e]=ae[e]}if(!az.isnotWriteOpenAppCookie&&az[e]){if(document.domain.indexOf(".m.jd.com")<0&&document.domain!="m.jd.com"){H(aA,az[e])}else{ac(aA,Date.now()+"_"+az[e],60,"/",".m.jd.com");ac(aA,Date.now()+"_"+az[e],60,"/","m.jd.hk")}}}function an(aA,aG){var aB=false;var aF=null;if(aG){if(ae.msf_type&&ae.msf_type=="auto"){aF=(aA.cookieFlag&&aA.autoOpenIntervalTime)?"autoOpenApp_downCloseDate_"+aA.cookieFlag:"autoOpenApp_downCloseDate_"+ae.msf_type}else{aF="autoOpenApp_downCloseDate_"+ae.msf_type}if(B||!ae.AROUSAL_APP){aB=true}}else{var az=E.indexOf("jdmsxh");var aC=E.indexOf("jdmsxh2");if(E.indexOf("Html5Plus")>=0||(az>=0&&az!=aC)||t||!ae.DOWNLOAD_LAYER){aB=true}aF=(aA.cookieFlag&&aA.appDownCloseIntervalTime)?"downloadAppPlugIn_downCloseDate_"+aA.cookieFlag:"downloadAppPlugIn_downCloseDate"}var aD=m(aF);if(!aD&&at.configCenterAjax&&document.domain.indexOf(".m.jd.com")<0&&document.domain!="m.jd.com"&&n&&n.hasOwnProperty(aF)){aD=n[aF]}var aE=null;if(aD){aE=aD.split("_");if(aE.length==2){aE[0]=parseInt(aE[0],10);aE[1]=parseInt(aE[1],10)}else{aE=null}}var e=Date.now();if(!aB&&!aA.noRecord&&aE&&aE.length==2&&(e-aE[0])<aE[1]&&(aA.closePanelBtnId||aG)){aB=true}return aB}function ag(aA){var az;try{az=new ActiveXObject("Msxml2.XMLHTTP")}catch(aB){try{az=new ActiveXObject("Microsoft.XMLHTTP")}catch(aB){az=new XMLHttpRequest()}}az.ajaxRunError=true;if(aA.withCredentials){try{az.withCredentials=true}catch(aB){}}try{az.open(aA.method,aA.url,aA.async);az.onreadystatechange=function(){var aC=aA.source?aA.source:null;if(az.readyState==4){if(az.status==200){az.ajaxRunError=false;var e=az.responseText;aA.success.call(aC,e)}else{aA.error.call(aC)}}};if((Q||af)&&navigator.userAgent.indexOf("QQBrowser")>-1){az.send("x=cc")}else{az.send(null)}}catch(aB){}}function x(az){var aB="MAuthentication";var e=document.createElement("script");var aA=function(){o(e);delete window[aB]};var aC=function(){aA()};window[aB]=function(aD){az.callback.call(this,aD);aA()};e.onerror=function(){aC()};e.onload=function(){aC()};e.src=az.url+"&callbackName="+aB;document.getElementsByTagName("head")[0].appendChild(e)}function o(az){var e=az.parentNode;if(e){e.removeChild(az)}}function A(aE,aB,az){try{var aD=document.getElementById(aE);var aA=aD.className;if(aA){aA=aA+" J_ping"}else{aA="J_ping"}aD.className=aA;aD.setAttribute("report-eventid",aB);if(az){aD.setAttribute("report-eventparam",az)}}catch(aC){}}function r(aB,az){try{var aC=new MPing.inputs.Click(aB);if(az){aC.event_param=az}var aA=new MPing();aA.send(aC)}catch(aD){}}function v(az,aF,aL){var aA=aF?aF:1;var aG=aL?true:false;if(!an(az)&&az.closePanelId){var aM=document.getElementById(az.closePanelId);if(aM){var aJ=aM.getBoundingClientRect();var aK=aJ.height||aJ.bottom-aJ.top;var aE=U(aM,"opacity");var aI=U(aM,"display");if(aI&&aK&&aI!="none"&&aK==0){aG=true}else{if(aK&&aE&&aK==50&&aE==0){aG=true}}}else{aG=true}if(aA<3&&aG==false){aA++;setTimeout(function(){v(az,aA,aG)},2000)}}if(aG){try{var aC=new MPing.inputs.Click("MDownLoadFloat_FloatShield");var aD=new MPing();aC.event_param=az.openAppEventId;aD.send(aC);var aB={url:"//so.m.jd.com/downLoad/checkShield.action?_format_=json",method:"POST",async:true,timeout:1000,error:function(){},success:function(e){}};ag(aB)}catch(aH){}}}function U(az,e){if(az.currentStyle){return az.currentStyle[e]}else{return document.defaultView.getComputedStyle(az,false)[e]}}function u(aC,aA){var aB=aA?false:an(aC.funcPrame);var e=true;if(!aB&&aC&&Object.prototype.toString.apply(aC.ajaxPrame)==="[object Array]"&&aC.ajaxPrame.length>0){aC.ajaxPrameIsArray=true;for(var az=0;az<aC.ajaxPrame.length;az++){if(!at[aC.ajaxPrame[az].hasAjax]){e=false;if(!aC.ajaxPrame[az].hasAjaxSend){ag(aC.ajaxPrame[az]);aC.ajaxPrame[az].hasAjaxSend=true}}}}else{if(!aB&&!at[aC.ajaxPrame.hasAjax]){e=false;if(!aC.ajaxPrame.hasAjaxSend){ag(aC.ajaxPrame);aC.ajaxPrame.hasAjaxSend=true}}}if(e){W(aC.funcList,aC.funcPrame)}else{b(aC)}}function b(aC,az){var aB=az?az:0;var e=true;if(aC.ajaxPrameIsArray){for(var aA=0;aA<aC.ajaxPrame.length;aA++){if(!at[aC.ajaxPrame[aA].hasAjax]){e=false;break}}}else{e=at[aC.ajaxPrame.hasAjax]}if(aC.funcList&&aC.funcList.length>0){if(e){W(aC.funcList,aC.funcPrame)}else{setTimeout(function(){aB++;if(aB<15){b(aC,aB)}else{W(aC.funcList,aC.funcPrame)}},100)}}}function W(e,aA){if(e.length==1&&Object.prototype.toString.apply(e)==="[object Function]"){e(aA)}else{for(var az=0;az<e.length;az++){e[az](aA)}}}function al(aE){if(aE){if(aE&&aE.clickCloseUa){var aC=aE.clickCloseUa.split("|");for(var aF=0;aF<aC.length;aF++){var aH=aC[aF];if(aH&&E.indexOf(aH)>=0){t=true;break}}}if(aE&&!t&&aE.closeUaMoreKeys){for(var aF=0;aF<aE.closeUaMoreKeys.length;aF++){var e=aE.closeUaMoreKeys[aF];if(e&&e.uaMoreKeys){var aJ=e.uaMoreKeys.split("|");var aG=0;var aD=0;for(var aB=0;aB<aJ.length;aB++){var aI=aJ[aB];if(aI){aD++}if(aI&&E.indexOf(aI)>=0){aG++}}t=(aD==aG)?true:t}if(t){break}}}if(aE&&aE.autoCloseBrowser){for(var aF=0;aF<aE.autoCloseBrowser.length;aF++){var aI=aE.autoCloseBrowser[aF];if(aI.browser&&aI.abtest&&E.indexOf(aI.browser)>=0){ar(aI.abtest);break}}}if(!B&&aE&&aE.autoCloseOs){for(var aF=0;aF<aE.autoCloseOs.length;aF++){var aI=aE.autoCloseOs[aF];if(aI.os=="IOS"&&aI.abtest&&(af||Q)){ar(aI.abtest);break}else{if(aI.os=="Android"&&aI.abtest&&F){ar(aI.abtest);break}}}}if(!B&&aE&&aE.autoCloseOsAndBrowser){for(var aF=0;aF<aE.autoCloseOsAndBrowser.length;aF++){var aI=aE.autoCloseOsAndBrowser[aF];if(aI.os&&aI.browser&&aI.abtest&&aI.os=="IOS"&&(af||Q)&&E.indexOf(aI.browser)>=0){ar(aI.abtest);break}if(aI.os&&aI.browser&&aI.abtest&&aI.os=="Android"&&F&&E.indexOf(aI.browser)>=0){ar(aI.abtest);break}}}if(aE&&aE.universalLinksUa){var az=aE.universalLinksUa.split("|");for(var aF=0;aF<az.length;aF++){var aH=az[aF];if(aH&&E.indexOf(aH)>=0&&!F){h.isUniversalLinksUa=true;break}}}if(aE&&aE.universalLinksOs){var aA=aE.universalLinksOs.split("|");for(var aF=0;aF<aA.length;aF++){var aH=aA[aF];if(aH&&ai&&aH==ai&&ai>8){h.isUniversalLinksOs=true;break}}}if(aE&&aE.appDownCloseIntervalTime){ae.appDownCloseIntervalTime=aE.appDownCloseIntervalTime}if(aE&&aE.appDownOpenIntervalTime){ae.appDownOpenIntervalTime=aE.appDownOpenIntervalTime}if(E.indexOf("baiduboxapp")!=-1&&E.indexOf("light")!=-1){if(((ad&&(ad==1||ad==2||ad==3))||T)){}else{B=true;t=true}}}}function g(e){if(e){if(e.data){for(var aA=0;aA<e.data.length;aA++){var az=e.data[aA];if(az.compent&&ae.hasOwnProperty(az.compent)){ae[az.compent]=az.display;if(az.compent=="AROUSAL_APP"&&az.msf_type){ae.msf_type=az.msf_type;if(e.cooldown&&e.cooldown[az.msf_type]){ae.cooldown_time=e.cooldown[az.msf_type]}if(az.openAppParam){ae.scheme_prame=az.openAppParam}if(az.hasOwnProperty("isSpportUL")&&!az.isSpportUL){ae.use_universallinks=false}}}}}if(e.kepler){if(e.kepler.kepler_data&&e.kepler.kepler_data.keplerID&&e.kepler.kepler_data.keplerFrom){I.keplerID=e.kepler.kepler_data.keplerID;I.keplerFrom=e.kepler.kepler_data.keplerFrom}if(e.kepler.kepler_param){I.keplerParamJson=JSON.stringify(e.kepler.kepler_param)}}if(e.isNewUser){ae.isNewUser=true}if(e.loginState){D.login_State=e.loginState}if(e.shieldingLayer){D.pcScan_Layer=e.shieldingLayer.pcScan_Layer||"";D.newPeople_Layer=e.shieldingLayer.newPeople_Layer||""}if(e.openSendOutUrl){K=e.openSendOutUrl}if(e.coolDownTimeUtil){n=e.coolDownTimeUtil}if(e.downAppConfigData){ae.downAppConfigData=e.downAppConfigData}}}function aj(e){if(!an(e,true)){if(ae.msf_type&&ae.msf_type=="auto"){if(e.cookieFlag&&e.autoOpenIntervalTime){cookieName="autoOpenApp_downCloseDate_"+e.cookieFlag}else{cookieName="autoOpenApp_downCloseDate_"+ae.msf_type;e.autoOpenIntervalTime=ae.cooldown_time}}else{cookieName="autoOpenApp_downCloseDate_"+ae.msf_type;e.autoOpenIntervalTime=ae.cooldown_time}if(e.autoOpenIntervalTime){if(document.domain.indexOf(".m.jd.com")<0&&document.domain!="m.jd.com"){H(cookieName,e.autoOpenIntervalTime)}else{ac(cookieName,Date.now()+"_"+e.autoOpenIntervalTime,60,"/",".m.jd.com");ac(cookieName,Date.now()+"_"+e.autoOpenIntervalTime,60,"/","m.jd.hk")}}ap(e);if(e&&e.M_sourceFrom&&e.M_sourceFrom=="mxz"){if(e.autoOpenAppEventParam){e.autoOpenAppEventParam=e.autoOpenAppEventParam+"_other_"+window.location.hostname}else{e.autoOpenAppEventParam="other_"+window.location.hostname}}r(e.autoOpenAppEventId,e.autoOpenAppEventParam);e.msf_type=ae.msf_type;if(e.autoOpenAppCallback){var az=e.autoOpenAppCallbackSource?e.autoOpenAppCallbackSource:null;e.autoOpenAppCallback.call(this,az)}R(e,true)}}function ar(e){if(e&&M<=e){B=true}}function ap(e){if(e&&e.kepler_param){I.keplerParamJson=e.kepler_param}if(I.keplerParamJson){r("MDownLoadFloat_ArouseParam",I.keplerParamJson)}}function au(e){if(h.isUniversalLinksOs&&h.isUniversalLinksUa&&!e.noJdApp&&e.universalLinksUrl&&ae.use_universallinks){h.isUseUniversalLinks=true}}function H(aC,aB){try{var az=[];az.push('"'+aC+'":"'+Date.now()+"_"+aB+'"');x({url:"//mapi.m.jd.com/cookie/addCookie.action?cookiePrame={"+az.join(",")+"}",callback:function(){}})}catch(aA){}}function aa(az){var aB="";var aA={downloadAppContentBtn:"立即打开",downloadAppContentBtnStyle:"",downloadAppContentDown:"新人领188元红包",downloadAppContentDownStyle:"",downloadAppContentUP:"打开京东APP购物",downloadAppContentUpStyle:"",downloadAppImg:"//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png",downloadApplogo:"//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png"};if((az.downAppConfigData&&ae.downAppConfigData&&ae.downAppConfigData.hasOwnProperty("highPriority")&&!ae.downAppConfigData.highPriority)||(az.downAppConfigData&&!ae.downAppConfigData)){aA.downloadAppContentBtn=az.downAppConfigData.downloadAppContentBtn||"立即打开";aA.downloadAppContentBtnStyle=az.downAppConfigData.downloadAppContentBtnStyle||"";aA.downloadAppContentDown=az.downAppConfigData.downloadAppContentDown||"新人领188元红包";aA.downloadAppContentDownStyle=az.downAppConfigData.downloadAppContentDownStyle||"";aA.downloadAppContentUP=az.downAppConfigData.downloadAppContentUP||"打开京东APP购物";aA.downloadAppContentUpStyle=az.downAppConfigData.downloadAppContentUpStyle||"";aA.downloadAppImg=az.downAppConfigData.downloadAppImg||"//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png";aA.downloadApplogo=az.downAppConfigData.downloadApplogo||"//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png"}else{if(ae.downAppConfigData){aA.downloadAppContentBtn=ae.downAppConfigData.downloadAppContentBtn||"立即打开";aA.downloadAppContentBtnStyle=ae.downAppConfigData.downloadAppContentBtnStyle||"";aA.downloadAppContentDown=ae.downAppConfigData.downloadAppContentDown||"新人领188元红包";aA.downloadAppContentDownStyle=ae.downAppConfigData.downloadAppContentDownStyle||"";aA.downloadAppContentUP=ae.downAppConfigData.downloadAppContentUP||"打开京东APP购物";aA.downloadAppContentUpStyle=ae.downAppConfigData.downloadAppContentUpStyle||"";aA.downloadAppImg=ae.downAppConfigData.downloadAppImg||"//st.360buyimg.com/common/commonH_B/images/2015/download-bg.png";aA.downloadApplogo=ae.downAppConfigData.downloadApplogo||"//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png"}}if(az.location){var e=az.location;aB=' style = "'+e+'"'}var aC='	<div  id="'+az.tipId+'_div" '+aB+' class="download-pannel download-noBg">	    <div class="pannel-bg"><img src="'+aA.downloadAppImg+'"></div>	    <div id="'+az.tipId+'_x" class="download-close"><img src="//st.360buyimg.com/common/commonH_B/images/2015/icon-close.png"></div>	    <div class="download-logo"><img src="'+aA.downloadApplogo+'"></div>	    <div class="download-txt">	            <span class="download-content">	                <em style="'+aA.downloadAppContentUpStyle+'" class="content-up">'+aA.downloadAppContentUP+'</em>	                <em style="'+aA.downloadAppContentDownStyle+'" class="content-down">'+aA.downloadAppContentDown+'</em>	            </span>	    </div>	    <div id="'+az.tipId+'_trynow" class="download-action">	        <span style="'+aA.downloadAppContentBtnStyle+'" class="font-large">'+aA.downloadAppContentBtn+"</span>	    </div>	</div>";return aC}function C(aB){if(aB){aB.downloadAppPlugIn=aB.downloadAppPlugIn?aB.downloadAppPlugIn:{};aB.downloadAppPlugIn.openAppBtnId=aB.tipId+"_trynow";aB.downloadAppPlugIn.closePanelBtnId=aB.tipId+"_x";aB.downloadAppPlugIn.closePanelId=aB.tipId+"_div";var aC=J(aB.downloadAppPlugIn);if(!an(aC)){var aE=aa(aB);document.getElementById(aB.tipId).innerHTML=aE;if(aB.callFunShowTip){aB.callFunShowTip.call(this)}am(aB.tipId+"_x","click",function(){if(aB.onClickTipX){aB.onClickTipX.call(this)}});am(aB.tipId+"_trynow","click",function(){if(aB.onClickTrynow){aB.onClickTrynow.call(this)}});var az=aB.downloadAppPlugIn.downAppURl;var aA=I.keplerParamJson;az=(az.indexOf("M_sourceFrom")>=0)?az:(az+"&M_sourceFrom="+aB.downloadAppPlugIn.M_sourceFrom);az=(az.indexOf("isneworold")<0&&ae.isNewUser)?(az+"&isneworold=new"):az;try{aA=JSON.parse(aA)}catch(aD){}if(aA&&aA.source&&aA.channel){az=(az.indexOf("kplsource")>=0)?az:(az+"&kplsource="+aA.source);az=(az.indexOf("kplchannel")>=0)?az:(az+"&kplchannel="+aA.channel)}aB.downloadAppPlugIn.downAppURl=az;ak(aB.downloadAppPlugIn)}}}function ak(e){var az=J(e);S(az);var aA={ajaxPrame:[L,p],funcList:[au,a,v],funcPrame:az};u(aA)}Z.downloadAppPlugIn=ak;Z.downloadAppPlugInOpenApp=function(e){var az=J(e,true);if(!f){var aA=document.createElement("iframe");aA.id=V;document.body.appendChild(aA);document.getElementById(V).style.display="none";document.getElementById(V).style.width="0px";document.getElementById(V).style.height="0px";f=true}var aB={ajaxPrame:[L,p],funcList:aj,funcPrame:az};u(aB,true)};Z.downloadAppLayerConfigData=function(e){var az={ajaxPrame:[L,p],funcList:[C],funcPrame:e};u(az)}})();(function(c,a){var b=a(c);c.wxOpenApp=b;if(typeof module=="object"&&module.exports){module.exports=b}})(window,function(b){var a=function(d,c){this.init(d,c)};a.prototype={init:function(d,c){this.cb=c;this.param=d;this.scheme="openapp.jdmobile";this.appId="wxe75a2e68877315fb";this.packageName="com.jingdong.app.mall";this.packageUrl="openApp.jdMobile://";this.configUrl="//wq.jd.com/bases/jssdk/GetWxJsApiSign?url="+encodeURIComponent(location.href.split("#")[0])+"&callback=callback";this.loadWxJsSdk()},loadWxJsSdk:function(){var c=this;var d=document.createElement("script");d.src="//res.wx.qq.com/open/js/jweixin-1.2.0.js";document.body.appendChild(d);d.onload=d.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){if(typeof wx=="undefined"){console.error("wxJsSdk load fail");return}c.requestConfig();d.onload=d.onreadystatechange=null}}},requestConfig:function(){var c=this;c.JSONP(c.configUrl,function(d){c.openApp(d)})},openApp:function(d){var c=this;wx.config({beta:true,debug:false,appId:d.appId,timestamp:d.timestamp,nonceStr:d.nonceStr,signature:d.signature,jsApiList:["checkJsApi","getInstallState","launchApplication"]});wx.ready(function(){wx.checkJsApi({jsApiList:["getInstallState","launchApplication"],success:function(e){if(e.checkResult.getInstallState&&e.checkResult.launchApplication){wx.invoke("getInstallState",{packageName:c.packageName,packageUrl:c.packageUrl},function(f){if(f.err_msg=="get_install_state:yes"){wx.invoke("launchApplication",{appID:c.scheme,parameter:c.param},function(g){console.log(JSON.stringify(g))})}})}else{if(typeof this.cb=="function"){this.cb()}}}})})},JSONP:function(e,h){var d=function(){return(new Date()).getTime()};var g=function(){return Math.random().toString().substr(2)};var i=function(k){var j=k.parentNode;if(j&&j.nodeType!==11){j.removeChild(k)}};var c=function(l){var j="";if(typeof l==="string"){j=l}else{if(typeof l==="object"){for(var k in l){j+="&"+k+"="+encodeURIComponent(l[k])}}}j+="&_time="+d();j=j.substr(1);return j};var f=function(m,o){var l;var k=/callback=(\w+)/.exec(m);if(k&&k[1]){l=k[1]}else{l="jsonp_"+d()+"_"+g();m=m.replace("callback=?","callback="+l);m=m.replace("callback=%3F","callback="+l)}var j=document.createElement("script");j.type="text/javascript";j.src=m;j.id="id_"+l;b[l]=function(p){b[l]=undefined;var q=document.getElementById("id_"+l);i(q);o(p)};var n=document.getElementsByTagName("head");if(n&&n[0]){n[0].appendChild(j)}};f(e,h)}};return a});