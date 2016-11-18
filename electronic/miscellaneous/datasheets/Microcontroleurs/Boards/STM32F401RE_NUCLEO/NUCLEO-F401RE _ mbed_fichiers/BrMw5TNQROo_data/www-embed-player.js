(function(){var g,aa=aa||{},l=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||l;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||l,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ba(a){a.getInstance=function(){return a.P?a.P:a.P=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){return"array"==ca(a)}
function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ga(a){return"function"==ca(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ja(a){return a[ka]||(a[ka]=++la)}
var ka="closure_uid_"+(1E9*Math.random()>>>0),la=0;function ma(a,b,c){return a.call.apply(a.bind,arguments)}
function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return v.apply(null,arguments)}
function oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var w=Date.now||function(){return+new Date};
function x(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ne=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;function pa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,pa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
x(pa,Error);pa.prototype.name="CustomError";var qa;var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function sa(a){return decodeURIComponent(a.replace(/\+/g," "))}
var ta=/&/g,ua=/</g,va=/>/g,wa=/"/g,xa=/'/g,ya=/\x00/g,za=/[\x00&<>"']/;function Aa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=l.document.createElement("div");return a.replace(Ba,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Ca(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Ba=/&([^;\s<&]+);?/g,Da={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ea={"'":"\\'"};
function Fa(a,b){for(var c=0,d=ra(String(a)).split("."),e=ra(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",m=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),H=RegExp("(\\d*)(\\D*)","g");do{var R=n.exec(k)||["","",""],ia=H.exec(m)||["","",""];if(0==R[0].length&&0==ia[0].length)break;c=Ga(0==R[1].length?0:parseInt(R[1],10),0==ia[1].length?0:parseInt(ia[1],10))||Ga(0==R[2].length,0==ia[2].length)||Ga(R[2],ia[2])}while(0==c)}return c}
function Ga(a,b){return a<b?-1:a>b?1:0}
function Ha(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ia=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ja=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=u(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];
b.call(c,m,k,a)&&(e[f++]=m)}return e},Ka=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},La=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Ma=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Na(a,b,c){b=Oa(a,b,c);return 0>b?null:u(a)?a.charAt(b):a[b]}
function Oa(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function z(a,b){return 0<=Ia(a,b)}
function Pa(a,b){z(a,b)||a.push(b)}
function Qa(a,b){var c=Ia(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Ra(a,b){var c=Oa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Sa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Va(a,b,c,d){return Array.prototype.splice.apply(a,Wa(arguments,1))}
function Wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Xa(a,b){return a>b?1:a<b?-1:0}
;function Ya(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Za(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function $a(a){var b=0,c;for(c in a)b++;return b}
function ab(a,b){return bb(a,b)}
function cb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function db(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function bb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function eb(a){var b=fb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gb(a){for(var b in a)return!1;return!0}
function hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ib(a){var b={},c;for(c in a)b[c]=a[c];return b}
function jb(a){var b=ca(a);if("object"==b||"array"==b){if(ga(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=jb(a[c]);return b}return a}
var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var mb;a:{var nb=l.navigator;if(nb){var ob=nb.userAgent;if(ob){mb=ob;break a}}mb=""}function A(a){return-1!=mb.indexOf(a)}
;function pb(){return(A("Chrome")||A("CriOS"))&&!A("Edge")}
;function qb(){this.b=""}
qb.prototype.Jb=!0;qb.prototype.Eb=function(){return this.b};
qb.prototype.toString=function(){return"Const{"+this.b+"}"};
function rb(a){var b=new qb;b.b=a;return b}
;function sb(){this.b="";this.f=tb}
sb.prototype.Jb=!0;sb.prototype.Eb=function(){return this.b};
function ub(a){if(a instanceof sb&&a.constructor===sb&&a.f===tb)return a.b;ca(a);return"type_error:SafeUrl"}
var vb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function wb(a){if(a instanceof sb)return a;a=a.Jb?a.Eb():String(a);vb.test(a)||(a="about:invalid#zClosurez");return xb(a)}
var tb={};function xb(a){var b=new sb;b.b=a;return b}
xb("about:blank");function yb(){this.b="";this.f=zb;this.g=null}
yb.prototype.Jb=!0;yb.prototype.Eb=function(){return this.b};
function Ab(a){if(a instanceof yb&&a.constructor===yb&&a.f===zb)return a.b;ca(a);return"type_error:SafeHtml"}
var zb={};function Bb(a,b){var c=new yb;c.b=a;c.g=b;return c}
Bb("<!DOCTYPE html>",0);Bb("",0);Bb("<br>",0);function Cb(a,b){var c;c=b instanceof sb?b:wb(b);a.href=ub(c)}
;function Db(a,b,c){a&&(a.dataset?a.dataset[Eb(b)]=c:a.setAttribute("data-"+b,c))}
function B(a,b){return a?a.dataset?a.dataset[Eb(b)]:a.getAttribute("data-"+b):null}
function Fb(a,b){a&&(a.dataset?delete a.dataset[Eb(b)]:a.removeAttribute("data-"+b))}
var Gb={};function Eb(a){return Gb[a]||(Gb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Hb(a){l.setTimeout(function(){throw a;},0)}
var Ib;
function Jb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.$b;c.$b=null;a()}};
return function(a){d.next={$b:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}}
;function Kb(a,b,c){this.h=c;this.g=a;this.i=b;this.f=0;this.b=null}
Kb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Lb(a,b){a.i(b);a.f<a.h&&(a.f++,b.next=a.b,a.b=b)}
;function Mb(){this.f=this.b=null}
var Ob=new Kb(function(){return new Nb},function(a){a.reset()},100);
Mb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Nb(){this.next=this.scope=this.b=null}
Nb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Nb.prototype.reset=function(){this.next=this.scope=this.b=null};function Pb(a,b){Qb||Rb();Sb||(Qb(),Sb=!0);var c=Tb,d=Ob.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Qb;function Rb(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Qb=function(){a.then(Ub)}}else Qb=function(){var a=Ub;
!ga(l.setImmediate)||l.Window&&l.Window.prototype&&!A("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Ib||(Ib=Jb()),Ib(a)):l.setImmediate(a)}}
var Sb=!1,Tb=new Mb;function Ub(){for(var a;a=Tb.remove();){try{a.b.call(a.scope)}catch(b){Hb(b)}Lb(Ob,a)}Sb=!1}
;function C(){this.Ea=this.Ea;this.V=this.V}
C.prototype.Ea=!1;C.prototype.isDisposed=function(){return this.Ea};
C.prototype.dispose=function(){this.Ea||(this.Ea=!0,this.w())};
function Vb(a,b){a.Ea?b.call(void 0):(a.V||(a.V=[]),a.V.push(p(void 0)?v(b,void 0):b))}
C.prototype.w=function(){if(this.V)for(;this.V.length;)this.V.shift()()};
function D(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Wb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?Wb.apply(null,d):D(d)}}
;function E(a){C.call(this);this.h=1;this.f=[];this.g=0;this.b=[];this.$={};this.i=!!a}
x(E,C);g=E.prototype;g.subscribe=function(a,b,c){var d=this.$[a];d||(d=this.$[a]=[]);var e=this.h;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.h=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.$[a]){var d=this.b;if(a=Na(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.ga(a)}return!1};
g.ga=function(a){var b=this.b[a];if(b){var c=this.$[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&Qa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
g.u=function(a,b){var c=this.$[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.i)for(e=0;e<c.length;e++){var h=c[e];Xb(this.b[h+1],this.b[h+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.b[h+1].apply(this.b[h+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.ga(c)}}return 0!=e}return!1};
function Xb(a,b,c){Pb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.$[a];b&&(y(b,this.ga,this),delete this.$[a])}else this.b.length=0,this.$={}};
g.N=function(a){if(a){var b=this.$[a];return b?b.length:0}a=0;for(b in this.$)a+=this.N(b);return a};
g.w=function(){E.A.w.call(this);this.clear();this.f.length=0};var Yb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Yb,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var Zb=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",Zb,void 0);function $b(a){ac(Yb,arguments)}
function F(a,b){return a in Yb?Yb[a]:b}
function G(a,b){ga(a)&&(a=bc(a));return window.setTimeout(a,b)}
function I(a){window.clearTimeout(a)}
function bc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw cc(b),b;}}:a}
function cc(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=F("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),$b("ERRORS",c))}
function dc(){var a={},b="FLASH_UPGRADE"in Zb?Zb.FLASH_UPGRADE:'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';if(b)for(var c in a)b=b.replace(new RegExp("\\$"+c,"gi"),function(){return a[c]});
return b}
function ac(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var ec=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},fc="Microsoft Internet Explorer"==navigator.appName;var gc=r("yt.pubsub.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.ga;E.prototype.publish=E.prototype.u;E.prototype.clear=E.prototype.clear;q("yt.pubsub.instance_",gc,void 0);var hc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",hc,void 0);var ic=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",ic,void 0);var jc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",jc,void 0);
var kc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",kc,void 0);function lc(a,b,c){var d=mc();if(d){var e=d.subscribe(a,function(){if(!kc||kc!=e){var d=arguments,h;h=function(){hc[e]&&b.apply(c||window,d)};
try{jc[a]?h():G(h,0)}catch(k){cc(k)}}},c);
hc[e]=!0;ic[a]||(ic[a]=[]);ic[a].push(e);return e}return 0}
function nc(a){var b=mc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),y(a,function(a){b.unsubscribeByKey(a);delete hc[a]}))}
function J(a,b){var c=mc();return c?c.publish.apply(c,arguments):!1}
function oc(a,b){jc[a]=!0;var c=mc();c&&c.publish.apply(c,arguments);jc[a]=!1}
function pc(a){ic[a]&&(a=ic[a],y(a,function(a){hc[a]&&delete hc[a]}),a.length=0)}
function qc(a){var b=mc();if(b)if(b.clear(a),a)pc(a);else for(var c in ic)pc(c)}
function mc(){return r("yt.pubsub.instance_")}
;function rc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(sc,""),c=c.replace(tc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else uc(a,b)}
function uc(a,b){var c=vc(a),d=document.getElementById(c),e=d&&B(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=lc(c,b),h=""+ja(b);wc[h]=e}f||(d=xc(a,c,function(){B(d,"loaded")||(Db(d,"loaded","true"),J(c),G(oa(qc,c),0))}))}}
function xc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function yc(a,b){if(a&&b){var c=""+ja(b);(c=wc[c])&&nc(c)}}
function vc(a){var b=document.createElement("a");Cb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ha(a)}
var sc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,tc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,wc={};var zc=null;function Ac(){var a=F("BG_I",null),b=F("BG_IU",null),c=F("BG_P",void 0);b?rc(b,function(){zc=new botguard.bg(c)}):a&&(eval(a),zc=new botguard.bg(c))}
function Bc(){return null!=zc}
function Cc(){return zc?zc.invoke():null}
;function Dc(a,b){return Bb(b,null)}
;var Ec="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function Fc(){}
Fc.prototype.next=function(){throw Ec;};
Fc.prototype.la=function(){return this};
function Gc(a){if(a instanceof Fc)return a;if("function"==typeof a.la)return a.la(!1);if(ea(a)){var b=0,c=new Fc;c.next=function(){for(;;){if(b>=a.length)throw Ec;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Hc(a,b,c){if(ea(a))try{y(a,b,c)}catch(d){if(d!==Ec)throw d;}else{a=Gc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Ec)throw d;}}}
function Ic(a){if(ea(a))return Ta(a);a=Gc(a);var b=[];Hc(a,function(a){b.push(a)});
return b}
;function Jc(a,b){this.f={};this.b=[];this.ua=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Jc?(c=a.ia(),d=a.O()):(c=db(a),d=cb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Jc.prototype;g.N=function(){return this.g};
g.O=function(){Kc(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};
g.ia=function(){Kc(this);return this.b.concat()};
g.Qa=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b];if(Lc(this.f,c)&&this.f[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.N())return!1;var c=b||Mc;Kc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Mc(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.f={};this.ua=this.g=this.b.length=0};
g.remove=function(a){return Lc(this.f,a)?(delete this.f[a],this.g--,this.ua++,this.b.length>2*this.g&&Kc(this),!0):!1};
function Kc(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Lc(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Lc(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
g.get=function(a,b){return Lc(this.f,a)?this.f[a]:b};
g.set=function(a,b){Lc(this.f,a)||(this.g++,this.b.push(a),this.ua++);this.f[a]=b};
g.forEach=function(a,b){for(var c=this.ia(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Jc(this)};
g.la=function(a){Kc(this);var b=0,c=this.ua,d=this,e=new Fc;e.next=function(){if(c!=d.ua)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Ec;var e=d.b[b++];return a?e:d.f[e]};
return e};
function Lc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Nc(a){return a.N&&"function"==typeof a.N?a.N():ea(a)||u(a)?a.length:$a(a)}
function Oc(a){if(a.O&&"function"==typeof a.O)return a.O();if(u(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return cb(a)}
function Pc(a){if(a.ia&&"function"==typeof a.ia)return a.ia();if(!a.O||"function"!=typeof a.O){if(ea(a)||u(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return db(a)}}
function Qc(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ea(a)||u(a))y(a,b,c);else for(var d=Pc(a),e=Oc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function Rc(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(ea(a)||u(a))return Ma(a,b,void 0);for(var c=Pc(a),d=Oc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function Sc(a){this.b=new Jc;a&&Tc(this,a)}
function Uc(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ja(a):b.substr(0,1)+a}
g=Sc.prototype;g.N=function(){return this.b.N()};
function Tc(a,b){for(var c=Oc(b),d=c.length,e=0;e<d;e++){var f=c[e];a.b.set(Uc(f),f)}}
g.remove=function(a){return this.b.remove(Uc(a))};
g.clear=function(){this.b.clear()};
g.isEmpty=function(){return this.b.isEmpty()};
g.contains=function(a){a=Uc(a);return Lc(this.b.f,a)};
g.O=function(){return this.b.O()};
g.clone=function(){return new Sc(this)};
g.equals=function(a){return this.N()==Nc(a)&&Vc(this,a)};
function Vc(a,b){var c=Nc(b);if(a.N()>c)return!1;!(b instanceof Sc)&&5<c&&(b=new Sc(b));return Rc(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.Qa&&"function"==typeof c.Qa?c.Qa(a):ea(c)||u(c)?z(c,a):bb(c,a)})}
g.la=function(){return this.b.la(!1)};function Wc(){return A("iPhone")&&!A("iPod")&&!A("iPad")}
;var Xc=A("Opera"),K=A("Trident")||A("MSIE"),Yc=A("Edge"),Zc=A("Gecko")&&!(-1!=mb.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),$c=-1!=mb.toLowerCase().indexOf("webkit")&&!A("Edge"),ad=A("Macintosh"),bd=A("Windows");function cd(){var a=l.document;return a?a.documentMode:void 0}
var dd;a:{var ed="",fd=function(){var a=mb;if(Zc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Yc)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($c)return/WebKit\/(\S+)/.exec(a);if(Xc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fd&&(ed=fd?fd[1]:"");if(K){var gd=cd();if(null!=gd&&gd>parseFloat(ed)){dd=String(gd);break a}}dd=ed}var hd=dd,id={};function jd(a){return id[a]||(id[a]=0<=Fa(hd,a))}
function kd(a){return Number(ld)>=a}
var md=l.document,ld=md&&K?cd()||("CSS1Compat"==md.compatMode?parseInt(hd,10):5):void 0;function nd(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function od(a){return eval("("+a+")")}
function L(a){return pd(new qd(void 0),a)}
function qd(a){this.b=a}
function pd(a,b){var c=[];rd(a,b,c);return c.join("")}
function rd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],rd(a,a.b?a.b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),sd(d,c),c.push(":"),rd(a,a.b?a.b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":sd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var td={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ud=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function sd(a,b){b.push('"',a.replace(ud,function(a){var b=td[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),td[a]=b);return b}),'"')}
;var vd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function wd(a){return(a=a.match(vd)[3]||null)?decodeURI(a):a}
function xd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?sa(h):"")}}
function yd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function zd(a,b,c){if(da(b))for(var d=0;d<b.length;d++)zd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ad(a,b,c){for(c=c||0;c<b.length;c+=2)zd(b[c],b[c+1],a);return a}
function Bd(a,b){for(var c in b)zd(c,b[c],a);return a}
function Cd(a){a=Bd([],a);a[0]="";return a.join("")}
function Dd(a,b){return yd(2==arguments.length?Ad([a],arguments[1],0):Ad([a],arguments,1))}
function Ed(a,b){return yd(Bd([a],b))}
;function Fd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=sa(e[0]||""),e=sa(e[1]||"");f in b?da(b[f])?Ua(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Gd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Fd(d[1]||""),e;for(e in b)d[e]=b[e];return Ed(a,d)+c}
function Hd(a){a=wd(a);a=null===a?null:a.split(".").reverse();return(null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1)||(null===a?!1:"google"==a[1]?!0:"google"==a[2]?"au"==a[0]&&"com"==a[1]?!0:"uk"==a[0]&&"co"==a[1]?!0:!1:!1)}
;var Id=null;"undefined"!=typeof XMLHttpRequest?Id=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Id=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Jd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Kd(a,b,c,d,e,f,h){function k(){4==(m&&"readyState"in m?m.readyState:0)&&b&&bc(b)(m)}
var m=Id&&Id();if(!("open"in m))return null;"onloadend"in m?m.addEventListener("loadend",k,!1):m.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";m.open(c,a,!0);f&&(m.responseType=f);h&&(m.withCredentials=!0);f="POST"==c;if(e=Ld(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m}
function Ld(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(vd)[1]||null,e=wd(a);d&&e?(d=c,c=a.match(vd),d=d.match(vd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?wd(c)==e&&(Number(c.match(vd)[4]||null)||null)==(Number(a.match(vd)[4]||null)||null):!0;for(var f in Md){if((e=d=F(Md[f]))&&!(e=c)){var e=f,h=F("CORS_HEADER_WHITELIST")||{},k=wd(a);e=k?(h=h[k])?z(h,e):!1:!0}e&&(b[f]=d)}return b}
function Nd(a,b){var c=F("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Pe&&(!wd(a)||b.withCredentials||wd(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.J&&b.J[c])}
function Od(a,b){var c=b.format||"JSON";b.Qe&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=F("XSRF_FIELD_NAME",void 0),e=F("XSRF_TOKEN",void 0),f=b.Qb;f&&(f[d]&&delete f[d],a=Gd(a,f||{}));var h=b.postBody||"",f=b.J;Nd(a,b)&&(f||(f={}),f[d]=e);f&&u(h)&&(d=Fd(h),lb(d,f),h=b.xc&&"JSON"==b.xc?JSON.stringify(d):Cd(d));var k=!1,m,n=Kd(a,function(a){if(!k){k=!0;m&&I(m);var d=Jd(a),e=null;if(d||400<=a.status&&500>a.status)e=
Pd(c,a,b.Oe);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||l;d?b.Z&&b.Z.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Mb&&b.Mb.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.Ca&&0<b.timeout&&(m=G(function(){k||(k=!0,n.abort(),I(m),b.Ca.call(b.context||l,n))},b.timeout));
return n}
function Pd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=od(a));break;case "XML":if(b=(b=b.responseXML)?Qd(b):null)d={},y(b.getElementsByTagName("*"),function(a){d[a.tagName]=Rd(a)})}c&&Sd(d);
return d}
function Sd(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Dc(rb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Sd(a[b])}}
function Qd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Rd(a){var b="";y(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Md={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"XSRF_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Td={},Ud=0;function Vd(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):G(a,b||0)}
;var Wd=[],Xd=!1;function Yd(){function a(){Xd=!0;"google_ad_status"in window?$b("DCLKSTAT",1):$b("DCLKSTAT",2)}
rc("//static.doubleclick.net/instream/ad_status.js",a);Wd.push(Vd(function(){Xd||"google_ad_status"in window||(yc("//static.doubleclick.net/instream/ad_status.js",a),$b("DCLKSTAT",3))},5E3))}
function Zd(){return parseInt(F("DCLKSTAT",0),10)}
;function $d(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function ae(a,b){return a.classList?a.classList.contains(b):z($d(a),b)}
function be(a,b){a.classList?a.classList.add(b):ae(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ce(a,b){a.classList?a.classList.remove(b):ae(a,b)&&(a.className=Ja($d(a),function(a){return a!=b}).join(" "))}
function de(a,b,c){c?be(a,b):ce(a,b)}
;function ee(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
ee.prototype.clone=function(){return new ee(this.x,this.y)};
ee.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
ee.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
ee.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function fe(a,b){this.width=a;this.height=b}
g=fe.prototype;g.clone=function(){return new fe(this.width,this.height)};
g.Xc=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.Xc()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!Zc&&!K||K&&kd(9)||Zc&&jd("1.9.1");var ge=K&&!jd("9");function he(a){return a?new ie(je(a)):qa||(qa=new ie)}
function ke(a){return u(a)?document.getElementById(a):a}
function le(a){var b=document;return u(a)?b.getElementById(a):a}
function me(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):ne(a,void 0)}
function ne(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var k=c.className;"function"==typeof k.split&&z(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return h}
function oe(a){var b=a.scrollingElement?a.scrollingElement:!$c&&pe(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return K&&jd("10")&&a.pageYOffset!=b.scrollTop?new ee(b.scrollLeft,b.scrollTop):new ee(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function pe(a){return"CSS1Compat"==a.compatMode}
function qe(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function re(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function se(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function je(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function te(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{qe(a);var c=je(a);a.appendChild(c.createTextNode(String(b)))}}
var ue={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ve={IMG:" ",BR:"\n"};function we(a){if(ge&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];xe(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");ge||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function xe(a,b,c){if(!(a.nodeName in ue))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ve)b.push(ve[a.nodeName]);else for(a=a.firstChild;a;)xe(a,b,c),a=a.nextSibling}
function ye(a){var b=ze.Oc;return b?Ae(a,function(a){return!b||u(a.className)&&z(a.className.split(/\s+/),b)},!0,void 0):null}
function Ae(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ie(a){this.b=a||l.document||document}
ie.prototype.createElement=function(a){return this.b.createElement(a)};
ie.prototype.appendChild=function(a,b){a.appendChild(b)};
ie.prototype.isElement=function(a){return ha(a)&&1==a.nodeType};
ie.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Be=r("yt.dom.getNextId_");if(!Be){Be=function(){return++Ce};
q("yt.dom.getNextId_",Be,void 0);var Ce=0}function De(){var a=document,b;La(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function Ee(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Fe||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Ee.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ee.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ee.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Fe={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var fb=r("yt.events.listeners_")||{};q("yt.events.listeners_",fb,void 0);var Ge=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Ge,void 0);function He(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=He(a,b,c,d);if(e)return e;var e=++Ge.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Ee(d);if(!Ae(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Ee(b);
b.currentTarget=a;return c.call(a,b)};
h=bc(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);fb[e]=[a,b,c,h,d];return e}
function Ie(a){a&&("string"==typeof a&&(a=[a]),y(a,function(a){if(a in fb){var c=fb[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete fb[a]}}))}
;function Je(){if(null==r("_lact",window)){var a=parseInt(F("LACT"),10),a=isFinite(a)?w()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Ke();M(document,"keydown",Ke);M(document,"keyup",Ke);M(document,"mousedown",Ke);M(document,"mouseup",Ke);lc("page-mouse",Ke);lc("page-scroll",Ke);lc("page-resize",Ke)}}
function Ke(){null==r("_lact",window)&&(Je(),r("_lact",window));var a=w();q("_lact",a,window);J("USER_ACTIVE")}
function Le(){var a=r("_lact",window);return null==a?-1:Math.max(w()-a,0)}
;function Me(){}
;function Ne(a){this.b=a||{cookie:""}}
var Oe=/\s*;\s*/;g=Ne.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(w()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Oe),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.ia=function(){return Pe(this).keys};
g.O=function(){return Pe(this).values};
g.isEmpty=function(){return!this.b.cookie};
g.N=function(){return this.b.cookie?(this.b.cookie||"").split(Oe).length:0};
g.Qa=function(a){for(var b=Pe(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Pe(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Pe(a){a=(a.b.cookie||"").split(Oe);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Qe=new Ne("undefined"==typeof document?null:document);Qe.f=3950;function Re(a,b,c){Qe.set(""+a,b,c,"/","youtube.com")}
;function Se(a,b,c){var d=F("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=wd(window.location.href);e&&d.push(e);e=wd(a);if(z(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(vd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))d="ST-"+Ha(d).toString(36),e=b?Cd(b):"",Re(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),b&&d&&d(new Me))}}if(c)return!1;(window.ytspf||
{}).enabled?spf.navigate(a):(c=window.location,a=Ed(a,{})+"",a=a instanceof sb?a:wb(a),c.href=ub(a));return!0}
;function Te(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||ib(Ue);this.assets=a.assets||{};this.attrs=a.attrs||ib(Ve);this.params=a.params||ib(We);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Ue={enablejsapi:1},Ve={},We={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Xe(a){a instanceof Te||(a=new Te(a));return a}
Te.prototype.clone=function(){var a=new Te,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ca(c)?a[b]=ib(c):a[b]=c}return a};function Ye(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=Ye.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new Ye(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof Ye?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Ze(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=Ze.prototype;g.clone=function(){return new Ze(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof Ze?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function $e(a){$e[" "](a);return a}
$e[" "]=t;function af(a,b){var c=je(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function bf(a,b){return af(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function cf(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function df(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function ef(a){var b=ff;if("none"!=bf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function ff(a){var b=a.offsetWidth,c=a.offsetHeight,d=$c&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new fe(b,c):(a=cf(a),new fe(a.right-a.left,a.bottom-a.top))}
function gf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function hf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?gf(a,c):0}
var jf={thin:2,medium:4,thick:6};function kf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in jf?jf[c]:gf(a,c)}
;var lf=A("Firefox"),mf=Wc()||A("iPod"),nf=A("iPad"),of=A("Android")&&!(pb()||A("Firefox")||A("Opera")||A("Silk")),pf=pb(),qf=A("Safari")&&!(pb()||A("Coast")||A("Opera")||A("Edge")||A("Silk")||A("Android"))&&!(Wc()||A("iPad")||A("iPod"));function rf(){var a;if(a=Qe.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(sf[d]=c.toString())}}}
ba(rf);var sf=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",sf,void 0);function tf(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function uf(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function vf(a){a=void 0!==sf[a]?sf[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
rf.prototype.get=function(a,b){uf(a);tf(a);var c=void 0!==sf[a]?sf[a].toString():null;return null!=c?c:b?b:""};
rf.prototype.set=function(a,b){uf(a);tf(a);if(null==b)throw"ExpectedNotNull";sf[a]=b.toString()};
function wf(a,b){return!!((vf("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
rf.prototype.remove=function(a){uf(a);tf(a);delete sf[a]};
rf.prototype.clear=function(){sf={}};function xf(a,b){(a=ke(a))&&a.style&&(a.style.display=b?"":"none",de(a,"hid",!b))}
function yf(a){y(arguments,function(a){!ea(a)||a instanceof Element?xf(a,!0):y(a,function(a){yf(a)})})}
function zf(a){y(arguments,function(a){!ea(a)||a instanceof Element?xf(a,!1):y(a,function(a){zf(a)})})}
;function Af(){this.g=this.f=this.b=0;this.h="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.h=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var h,k,m,n;if(fc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(H){h=null}else m=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=m.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(H){k=""}m&&n&&m.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.b=h[0];this.f=h[1];this.g=h[2]}}
ba(Af);function Bf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
function Cf(a){return-1<a.h.indexOf("Gnash")&&-1==a.h.indexOf("AVM2")||9==a.b&&1==a.f||9==a.b&&0==a.f&&1==a.g?!1:9<=a.b}
function Df(a){return bd?!Bf(a,11,2):ad?!Bf(a,11,3):!Cf(a)}
;function Ef(a,b,c){if(b){a=u(a)?le(a):a;var d=ib(c.attrs);d.tabindex=0;var e=ib(c.params);e.flashvars=Cd(c.args);if(fc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=document.createElement("embed");b.setAttribute("name",d.id);for(f in d)b.setAttribute(f,
d[f]);for(f in e)b.setAttribute(f,e[f])}e=document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}}
function Ff(a,b,c){if(a&&a.attrs&&a.attrs.id){a=Xe(a);var d=!!b,e=ke(a.attrs.id),f=e?e.parentNode:null;if(e&&f){if(window!=window.top){var h=null;if(document.referrer){var k=document.referrer.substring(0,128);Hd(k)||(h=k)}else h="unknown";h&&(d=!0,a.args.framer=h)}h=Af.getInstance();if(Bf(h,a.minVersion)){var k=Gf(a,h),m="";-1<navigator.userAgent.indexOf("Sony/COM2")||(m=e.getAttribute("src")||e.movie);(m!=k||d)&&Ef(f,k,a);Df(h)&&Hf()}else If(f,a,h);c&&c()}else G(function(){Ff(a,b,c)},50)}}
function If(a,b,c){0==c.b&&b.fallback?b.fallback():0==c.b&&b.fallbackMessage?b.fallbackMessage():a.innerHTML='<div id="flash-upgrade">'+dc()+"</div>"}
function Gf(a,b){return Cf(b)&&a.url||(-1<navigator.userAgent.indexOf("Sony/COM2")&&!Bf(b,9,1,58)?!1:!0)&&a.urlV9As2||a.url}
function Hf(){var a=ke("flash10-promo-div"),b=wf(rf.getInstance(),107);a&&!b&&yf(a)}
;function Jf(a){if(window.spf){var b=a.match(Kf);spf.style.load(a,b?b[1]:"",void 0)}else Lf(a)}
function Lf(a){var b=Mf(a),c=document.getElementById(b),d=c&&B(c,"loaded");d||c&&!d||(c=Nf(a,b,function(){B(c,"loaded")||(Db(c,"loaded","true"),J(b),G(oa(qc,b),0))}))}
function Nf(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
Cb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Mf(a){var b=document.createElement("a");Cb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ha(a)}
var Kf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Of;var Pf=mb,Pf=Pf.toLowerCase();if(-1!=Pf.indexOf("android")){var Qf=Pf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Qf)Of=Number(Qf[1]);else{var Rf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},Sf=Pf.match("("+db(Rf).join("|")+")");Of=Sf?Rf[Sf[0]]:0}}else Of=void 0;var Tf=mf||nf;var Uf=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Vf=['audio/mp4; codecs="mp4a.40.2"'];function Wf(a){C.call(this);this.b=[];this.f=a||this}
x(Wf,C);function Xf(a,b,c,d){d=bc(v(d,a.f));b.addEventListener(c,d);a.b.push({target:b,name:c,yb:d})}
Wf.prototype.pb=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b]==a){this.b.splice(b,1);a.target.removeEventListener(a.name,a.yb);break}};
function Yf(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.yb)}}
Wf.prototype.w=function(){Yf(this);Wf.A.w.call(this)};function Zf(a){return F("EXPERIMENT_FLAGS",{})[a]}
;function $f(){this.b={apiaryHost:F("APIARY_HOST",void 0),Me:F("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:F("GAPI_HINT_OVERRIDE"),gapiHintParams:F("GAPI_HINT_PARAMS",void 0),innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),nd:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pd:F("INNERTUBE_CONTEXT_HL",void 0),od:F("INNERTUBE_CONTEXT_GL",void 0),pe:F("XHR_APIARY_HOST",void 0)}}
;var ag={log_event:"events",log_interaction:"interactions"},bg={},cg={},dg=0,eg=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",eg,void 0);
function fg(){I(dg);if(!gb(eg)){for(var a in eg){var b=bg[a];if(!b){var c=cg[a];if(!c)continue;b=new c;bg[a]=b}c=b.b;c={client:{hl:c.pd,gl:c.od,clientName:c.nd,clientVersion:c.innertubeContextClientVersion}};F("DELEGATED_SESSION_ID")&&(c.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});c={context:c};c.requestTimeMs=Math.round(ec());c[ag[a]]=eg[a];var d=b,b={},d="//"+d.b.pe+("/youtubei/"+d.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+d.b.innertubeApiKey,c={headers:{"Content-Type":"application/json",
"X-Goog-Visitor-Id":F("VISITOR_DATA")},J:c,xc:"JSON",Ca:b.Ca,Z:b.Z,onError:b.onError,timeout:b.timeout,method:"POST"};c.J||(c.J={});Od(d,c);delete eg[a]}gb(eg)||gg()}}
function gg(){I(dg);dg=G(fg,F("VISIBILITY_TIMEOUT",1E4))}
;function hg(a,b,c){var d={};d.eventTimeMs=Math.round(c||ec());d[a]=b;eg.log_event=eg.log_event||[];a=eg.log_event;a.push(d);cg.log_event=$f;20<=a.length?fg():gg()}
;function ig(a,b){this.f=this.o=this.h="";this.j=null;this.i=this.b="";this.l=!1;var c;a instanceof ig?(this.l=p(b)?b:a.l,jg(this,a.h),this.o=a.o,kg(this,a.f),lg(this,a.j),this.b=a.b,mg(this,a.g.clone()),this.i=a.i):a&&(c=String(a).match(vd))?(this.l=!!b,jg(this,c[1]||"",!0),this.o=ng(c[2]||""),kg(this,c[3]||"",!0),lg(this,c[4]),this.b=ng(c[5]||"",!0),mg(this,c[6]||"",!0),this.i=ng(c[7]||"")):(this.l=!!b,this.g=new og(null,0,this.l))}
ig.prototype.toString=function(){var a=[],b=this.h;b&&a.push(pg(b,qg,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.o)&&a.push(pg(b,qg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.j,null!=c&&a.push(":",String(c));if(c=this.b)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(pg(c,"/"==c.charAt(0)?rg:sg,!0));(c=this.g.toString())&&a.push("?",c);(c=this.i)&&a.push("#",pg(c,tg));return a.join("")};
ig.prototype.resolve=function(a){var b=this.clone(),c=!!a.h;c?jg(b,a.h):c=!!a.o;c?b.o=a.o:c=!!a.f;c?kg(b,a.f):c=null!=a.j;var d=a.b;if(c)lg(b,a.j);else if(c=!!a.b){if("/"!=d.charAt(0))if(this.f&&!this.b)d="/"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.g.toString();c?mg(b,ng(a.g.toString())):c=!!a.i;c&&(b.i=a.i);return b};
ig.prototype.clone=function(){return new ig(this)};
function jg(a,b,c){a.h=c?ng(b,!0):b;a.h&&(a.h=a.h.replace(/:$/,""))}
function kg(a,b,c){a.f=c?ng(b,!0):b}
function lg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.j=b}else a.j=null}
function mg(a,b,c){b instanceof og?(a.g=b,ug(a.g,a.l)):(c||(b=pg(b,vg)),a.g=new og(b,0,a.l))}
function N(a,b,c){a.g.set(b,c)}
function wg(a,b,c){da(c)||(c=[String(c)]);xg(a.g,b,c)}
function yg(a){N(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}
function zg(a){return a instanceof ig?a.clone():new ig(a,void 0)}
function Ag(a,b,c,d){var e=new ig(null,void 0);a&&jg(e,a);b&&kg(e,b);c&&lg(e,c);d&&(e.b=d);return e}
function ng(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function pg(a,b,c){return u(a)?(a=encodeURI(a).replace(b,Bg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Bg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var qg=/[#\/\?@]/g,sg=/[\#\?:]/g,rg=/[\#\?]/g,vg=/[\#\?@]/g,tg=/#/g;function og(a,b,c){this.f=this.b=null;this.g=a||null;this.h=!!c}
function Cg(a){a.b||(a.b=new Jc,a.f=0,a.g&&xd(a.g,function(b,c){Dg(a,sa(b),c)}))}
g=og.prototype;g.N=function(){Cg(this);return this.f};
function Dg(a,b,c){Cg(a);a.g=null;b=Eg(a,b);var d=a.b.get(b);d||a.b.set(b,d=[]);d.push(c);a.f=a.f+1}
g.remove=function(a){Cg(this);a=Eg(this,a);return Lc(this.b.f,a)?(this.g=null,this.f=this.f-this.b.get(a).length,this.b.remove(a)):!1};
g.clear=function(){this.b=this.g=null;this.f=0};
g.isEmpty=function(){Cg(this);return 0==this.f};
function Fg(a,b){Cg(a);b=Eg(a,b);return Lc(a.b.f,b)}
g.Qa=function(a){var b=this.O();return z(b,a)};
g.ia=function(){Cg(this);for(var a=this.b.O(),b=this.b.ia(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.O=function(a){Cg(this);var b=[];if(u(a))Fg(this,a)&&(b=Sa(b,this.b.get(Eg(this,a))));else{a=this.b.O();for(var c=0;c<a.length;c++)b=Sa(b,a[c])}return b};
g.set=function(a,b){Cg(this);this.g=null;a=Eg(this,a);Fg(this,a)&&(this.f=this.f-this.b.get(a).length);this.b.set(a,[b]);this.f=this.f+1;return this};
g.get=function(a,b){var c=a?this.O(a):[];return 0<c.length?String(c[0]):b};
function xg(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.b.set(Eg(a,b),Ta(c)),a.f=a.f+c.length)}
g.toString=function(){if(this.g)return this.g;if(!this.b)return"";for(var a=[],b=this.b.ia(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.O(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.g=a.join("&")};
g.clone=function(){var a=new og;a.g=this.g;this.b&&(a.b=this.b.clone(),a.f=this.f);return a};
function Eg(a,b){var c=String(b);a.h&&(c=c.toLowerCase());return c}
function ug(a,b){b&&!a.h&&(Cg(a),a.g=null,a.b.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),xg(this,e,a))},a));
a.h=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Qc(arguments[b],function(a,b){Dg(this,b,a)},this)};var Gg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Hg="";
function Ig(a){return a&&a==Hg?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Gg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Hg=a,!0):!1}
;var Jg={},Kg=0;function Lg(a){var b=new Image,c=""+Kg++;Jg[c]=b;b.onload=b.onerror=function(){delete Jg[c]};
b.src=a}
;function O(a,b){this.version=a;this.args=b}
function Mg(a){if(!a.ua){var b={};a.call(b);a.ua=b.version}return a.ua}
function Ng(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Mg(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function P(a,b){this.topic=a;this.b=b}
P.prototype.toString=function(){return this.topic};var Og=r("yt.pubsub2.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.ga;E.prototype.publish=E.prototype.u;E.prototype.clear=E.prototype.clear;q("yt.pubsub2.instance_",Og,void 0);var Pg=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Pg,void 0);var Qg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Qg,void 0);var Rg=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Rg,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function Q(a,b){var c=Sg();c&&c.publish.call(c,a.toString(),a,b)}
function Tg(a,b,c){var d=Sg();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(Pg[e])try{if(h&&a instanceof P&&a!=d)try{h=Ng(a.b,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){cc(k)}};
Rg[a.toString()]?r("yt.scheduler.instance")?Vd(k,void 0):G(k,0):k()}});
Pg[e]=!0;Qg[a.toString()]||(Qg[a.toString()]=[]);Qg[a.toString()].push(e);return e}
function Ug(a){var b=Sg();b&&(fa(a)&&(a=[a]),y(a,function(a){b.unsubscribeByKey(a);delete Pg[a]}))}
function Sg(){return r("yt.pubsub2.instance_")}
;var Vg=w().toString();var Wg=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Xg(a){O.call(this,1,arguments)}
x(Xg,O);var Yg=new P("timing-sent",Xg);var Zg={ad_at:"ad_type",cpn:"client_playback_nonce",csn:"client_screen_nonce",yt_lt:"load_type",yt_ad:"is_monetized",yt_ad_pr:"preroll_allowed",yt_red:"is_red_subscriber",yt_vis:"is_visible"},$g=["is_monetized","preroll_allowed","is_red_subscriber","is_visible"],ah=v(Wg.clearResourceTimings||Wg.webkitClearResourceTimings||Wg.mozClearResourceTimings||Wg.msClearResourceTimings||Wg.oClearResourceTimings||t,Wg),bh=Wg.mark?v(Wg.mark,Wg):t;Wg.measure&&v(Wg.measure,Wg);
function ch(a){"_"==a[0]||bh(a);dh()[a]=ec();eh()["tick_"+a]=void 0;if(Zf("csi_on_gel")){var b=fh();"_start"==a?hg("latencyActionBaselined",{clientActionNonce:b},void 0):hg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0);a=!0}else a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!Zf("navigation_only_csi_reset"));if(!a&&(b=F("TIMING_ACTION",void 0),a=dh(),r("yt.timing.ready_")&&b&&a._start&&gh())){var b=!0,c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;
break}if(b)if(d=dh(),a=hh().span,e=hh().info,b=r("yt.timing.reportbuilder_")){if(b=b(d,a,e,void 0))ih(b),jh(),ah(),kh(!1)}else{var f=F("CSI_SERVICE_NAME","youtube"),b={v:2,s:f,action:F("TIMING_ACTION",void 0)},c=e.srt;delete e.srt;void 0===d.srt&&(c||0===c||(c=Wg.timing||{},c=Math.max(0,c.responseStart-c.navigationStart),isNaN(c)&&e.pt&&(c=e.pt)),c||0===c)&&(e.srt=Math.round(c));if(e.h5jse){var h=window.location.protocol+r("ytplayer.config.assets.js");(h=Wg.getEntriesByName?Wg.getEntriesByName(h)[0]:
null)?e.h5jse=Math.round(e.h5jse-h.responseEnd):delete e.h5jse}d.aft=gh();var h=d._start,k=dh(),m=k.pbr,n=k.vc,k=k.pbs;if(m=m&&n&&k&&m<n&&n<k)m=1==hh().info.yt_vis;m&&"youtube"==f&&(m=hh().info.yt_lt="hot_bg",eh().info_yt_lt=m,Zf("csi_on_gel")&&("yt_lt"in Zg?(f={},n=Zg.yt_lt,n in $g&&(m=!!m),f[n]=m,m=fh(),f.clientActionNonce=m,hg("latencyActionInfo",f)):cc(Error("Unknown label yt_lt logged with GEL CSI."))),f=d.vc,m=d.pbs,delete d.aft,e.aft=Math.round(m-f));for(var H in e)"_"!=H.charAt(0)&&(b[H]=
e[H]);d.ps=ec();H={};var e=[],R;for(R in d)"_"!=R.charAt(0)&&(f=Math.round(d[R]-h),Zf("enable_negative_ticks")||(f=Math.max(f,0)),H[R]=f,e.push(R+"."+f));b.rt=e.join(",");R=b;var d=[],ia;for(ia in a)"_"!=ia.charAt(0)&&d.push(ia+"."+Math.round(a[ia]));R.it=d.join(",");(ia=r("ytdebug.logTiming"))&&ia(b,H,a);Zf("navigation_only_csi_reset")||(jh(),ah(),kh(!1));F("EXP_DEFER_CSI_PING")?(lh(),q("yt.timing.deferredPingArgs_",b,void 0),ia=G(lh,0),q("yt.timing.deferredPingTimer_",ia,void 0)):ih(b);Q(Yg,new Xg(H.aft+
(c||0)))}}}
function gh(){var a=dh();if(a.aft)return a.aft;for(var b=F("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function ih(a){if(F("DEBUG_CSI_DATA")){var b=r("yt.timing.csiData");b||(b=[],q("yt.timing.csiData",b,void 0));b.push({page:location.href,time:new Date,args:a})}F("EXP_DEFER_CSI_PING")&&(I(r("yt.timing.deferredPingTimer_")),q("yt.timing.deferredPingArgs_",null,void 0));var b="",c;for(c in a)b+="&"+c+"="+a[c];a="/csi_204?"+b.substring(1);if(window.navigator&&window.navigator.sendBeacon)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&Lg(a)}catch(d){a&&Lg(a)}else a&&
Lg(a);kh(!0)}
function lh(a){if(F("EXP_DEFER_CSI_PING")){var b=r("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),ih(b))}}
function fh(){var a=hh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=w();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(Vg)for(c=1,d=0;d<Vg.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^Vg.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");hh().nonce=a}return a}
function dh(){return hh().tick}
function eh(){var a=hh();"gel"in a||(a.gel={});return a.gel}
function hh(){return r("ytcsi.data_")||jh()}
function jh(){var a={tick:{},span:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function kh(a){q("yt.timing.pingSent_",a,void 0)}
;var mh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function nh(a,b){C.call(this);this.l=this.i=a;this.aa=b;this.C=!1;this.f={};this.pa=this.W=null;this.ba=new E;Vb(this,oa(D,this.ba));this.h={};this.j=this.Fa=this.g=this.wb=this.b=null;this.ha=!1;this.D=this.o=this.K=this.L=null;this.$a={};this.Uc=["onReady"];this.ja=new Wf(this);Vb(this,oa(D,this.ja));this.xb=null;this.Wb=NaN;this.ka={};oh(this);this.ma("onDetailedError",v(this.Dd,this));this.ma("onTabOrderChange",v(this.Yc,this));this.ma("onTabAnnounce",v(this.Xb,this));this.ma("WATCH_LATER_VIDEO_ADDED",
v(this.Ed,this));this.ma("WATCH_LATER_VIDEO_REMOVED",v(this.Fd,this));lf||(this.ma("onMouseWheelCapture",v(this.Ad,this)),this.ma("onMouseWheelRelease",v(this.Bd,this)));this.ma("onAdAnnounce",v(this.Xb,this));this.G=new Wf(this);Vb(this,oa(D,this.G));this.vb=!1;this.ub=null}
x(nh,C);var ph=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=nh.prototype;g.Sb=function(a,b){this.isDisposed()||(qh(this,a),rh(this,b),this.C&&sh(this))};
function qh(a,b){a.wb=b;a.b=b.clone();a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.aa,a.b.attrs.id=a.aa);a.l.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.aa;a.Fa||(a.Fa=th(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.l.style.width=df(Number(c)||c,!0));if(c=a.b.attrs.height)a.l.style.height=df(Number(c)||c,!0)}
g.ed=function(){return this.wb};
function sh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function uh(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Bf(Af.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function vh(a,b){if((!b||(5!=(mh[b.errorCode]||5)?0:-1!=ph.indexOf(b.errorCode)))&&uh(a)){var c=wh(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Xe(c));d.args.autoplay=1;d.args.html5_unavailable="1";qh(a,d);rh(a,"flash")}}
function rh(a,b){if(!a.isDisposed()){if(!b){var c;if(!(c=!a.b.html5&&uh(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Of)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Uf:Vf,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=xh(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?uh(a)?"flash":"unsupported":"html5"}("flash"==b?a.me:"html5"==b?a.ne:a.oe).call(a)}}
function xh(a){var b=!0,c=wh(a);c&&a.b&&(a=a.b,b=B(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.ne=function(){if(!this.ha){var a=xh(this);a&&"html5"==yh(this)?(this.j="html5",this.C||this.Ka()):(zh(this),this.j="html5",a&&this.K?(this.i.appendChild(this.K),this.Ka()):(this.b.loaded=!0,this.L=v(function(){var a=this.i,c=this.b.clone();r("yt.player.Application.create")(a,c);this.Ka()},this),this.ha=!0,a?this.L():(rc(this.b.assets.js,this.L),Jf(this.b.assets.css))))}};
g.me=function(){var a=this.b.clone();if(!this.o){var b=wh(this);b&&(this.o=document.createElement("span"),this.o.tabIndex=0,Xf(this.ja,this.o,"focus",this.jc),this.D=document.createElement("span"),this.D.tabIndex=0,Xf(this.ja,this.D,"focus",this.jc),b.parentNode&&b.parentNode.insertBefore(this.o,b),b.parentNode&&b.parentNode.insertBefore(this.D,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==yh(this))this.j="flash",this.C||Ff(a,!1,v(this.Ka,this));
else{zh(this);this.j="flash";this.b.loaded=!0;b=this.i;b=u(b)?le(b):b;a=Xe(a);if(window!=window.top){var c=null;document.referrer&&(c=document.referrer.substring(0,128));a.args.framer=c}c=Af.getInstance();Bf(c,a.minVersion)?(c=Gf(a,c),Ef(b,c,a)):If(b,a,c);this.Ka()}};
g.jc=function(){wh(this).focus()};
function wh(a){var b=ke(a.g);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.g));return b}
g.Ka=function(){if(!this.isDisposed()){var a=wh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.ha=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))vh(this);else{oh(this);this.C=!0;a=wh(this);a.addEventListener&&(this.W=Ah(this,a,"addEventListener"));a.removeEventListener&&(this.pa=Ah(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=Ah(this,a,d))}for(var e in this.h)this.W(e,
this.h[e]);sh(this);this.Fa&&this.Fa(this.f);this.ba.u("onReady",this.f)}else this.Wb=G(v(this.Ka,this),50)}};
function Ah(a,b,c){var d=b[c];return function(){try{return a.xb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.xb=e,cc(e,"WARNING"))}}}
function oh(a){a.C=!1;if(a.pa)for(var b in a.h)a.pa(b,a.h[b]);for(var c in a.ka)I(parseInt(c,10));a.ka={};a.W=null;a.pa=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=v(a.ma,a);a.f.removeEventListener=v(a.$d,a);a.f.destroy=v(a.dispose,a);a.f.getLastError=v(a.fd,a);a.f.getPlayerType=v(a.gd,a);a.f.getCurrentVideoConfig=v(a.ed,a);a.f.loadNewVideoConfig=v(a.Sb,a);a.f.isReady=v(a.Ae,a)}
g.Ae=function(){return this.C};
g.ma=function(a,b){if(!this.isDisposed()){var c=th(this,b);if(c){if(!z(this.Uc,a)&&!this.h[a]){var d=Bh(this,a);this.W&&this.W(a,d)}this.ba.subscribe(a,c);"onReady"==a&&this.C&&G(oa(c,this.f),0)}}};
g.$d=function(a,b){if(!this.isDisposed()){var c=th(this,b);c&&this.ba.unsubscribe(a,c)}};
function th(a,b){var c=b;if("string"==typeof b){if(a.$a[b])return a.$a[b];c=function(){var a=r(b);a&&a.apply(l,arguments)};
a.$a[b]=c}return c?c:null}
function Bh(a,b){var c="ytPlayer"+b+a.aa;a.h[b]=c;l[c]=function(c){var e=G(function(){if(!a.isDisposed()){a.ba.u(b,c);var f=a.ka,h=String(e);h in f&&delete f[h]}},0);
hb(a.ka,String(e))};
return c}
g.Yc=function(a){a=a?se:re;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.o||b==this.D||(b.focus(),b!=document.activeElement));)b=a(b)};
g.Xb=function(a){J("a11y-announce",a)};
g.Dd=function(a){vh(this,a)};
g.Ed=function(a){J("WATCH_LATER_VIDEO_ADDED",a)};
g.Fd=function(a){J("WATCH_LATER_VIDEO_REMOVED",a)};
g.Ad=function(){this.vb||(pf?(this.ub=oe(document),Xf(this.G,window,"scroll",this.Vd),Xf(this.G,this.i,"touchmove",this.Pd)):(Xf(this.G,this.i,"mousewheel",this.mc),Xf(this.G,this.i,"wheel",this.mc)),this.vb=!0)};
g.Bd=function(){Yf(this.G);this.vb=!1};
g.mc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Vd=function(){window.scrollTo(this.ub.x,this.ub.y)};
g.Pd=function(a){a.preventDefault()};
g.oe=function(){zh(this);this.j="unsupported";var a='Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>',b=navigator.userAgent.match(/Version\/(\d).*Safari/);b&&5<=parseInt(b[1],10)&&(a='Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
b=this.b.messages.player_fallback||a;a=ke("player-unavailable");if(ke("unavailable-submessage")&&a){ke("unavailable-submessage").innerHTML=b;var b=a||document,c=null;b.getElementsByClassName?c=b.getElementsByClassName("icon")[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector(".icon"):c=ne("icon",a)[0];if(c=b=c||null)c=b?b.dataset?Eb("icon")in b.dataset:b.hasAttribute?!!b.hasAttribute("data-icon"):!!b.getAttribute("data-icon"):!1;c&&(b.src=B(b,"icon"));a.style.display="";be(ke("player"),"off-screen-trigger")}};
g.gd=function(){return this.j||yh(this)};
g.fd=function(){return this.xb};
function yh(a){return(a=wh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function zh(a){ch("dcp");a.cancel();oh(a);a.j=null;a.b&&(a.b.loaded=!1);var b=wh(a);"html5"==yh(a)?a.K=b:b&&b.destroy&&b.destroy();qe(a.i);Yf(a.ja);a.o=null;a.D=null}
g.cancel=function(){this.L&&yc(this.b.assets.js,this.L);I(this.Wb);this.ha=!1};
g.w=function(){zh(this);if(this.K&&this.b)try{this.K.destroy()}catch(b){cc(b)}this.$a=null;for(var a in this.h)l[this.h[a]]=null;this.wb=this.b=this.f=null;delete this.i;delete this.l;nh.A.w.call(this)};var Ch={},Dh="player_uid_"+(1E9*Math.random()>>>0);function Eh(a,b){a=u(a)?le(a):a;b=Xe(b);var c=Dh+"_"+ja(a),d=Ch[c];if(d)return d.Sb(b),d.f;d=new nh(a,c);Ch[c]=d;J("player-added",d.f);Vb(d,oa(Fh,d));G(function(){d.Sb(b)},0);
return d.f}
function Fh(a){Ch[a.aa]=null}
function Gh(a){a=ke(a);if(!a)return null;var b=Dh+"_"+ja(a),c=Ch[b];c||(c=new nh(a,b),Ch[b]=c);return c.f}
;var Hh=r("yt.abuse.botguardInitialized")||Bc;q("yt.abuse.botguardInitialized",Hh,void 0);var Ih=r("yt.abuse.invokeBotguard")||Cc;q("yt.abuse.invokeBotguard",Ih,void 0);var Jh=r("yt.abuse.dclkstatus.checkDclkStatus")||Zd;q("yt.abuse.dclkstatus.checkDclkStatus",Jh,void 0);var Kh=r("yt.player.exports.navigate")||Se;q("yt.player.exports.navigate",Kh,void 0);var Lh=r("yt.player.embed")||Eh;q("yt.player.embed",Lh,void 0);var Mh=r("yt.player.getPlayerByElement")||Gh;q("yt.player.getPlayerByElement",Mh,void 0);
var Nh=r("yt.util.activity.init")||Je;q("yt.util.activity.init",Nh,void 0);var Oh=r("yt.util.activity.getTimeSinceActive")||Le;q("yt.util.activity.getTimeSinceActive",Oh,void 0);var Ph=r("yt.util.activity.setTimestamp")||Ke;q("yt.util.activity.setTimestamp",Ph,void 0);function Qh(a){O.call(this,1,arguments);this.b=a}
x(Qh,O);function Rh(a){O.call(this,1,arguments);this.b=a}
x(Rh,O);function Sh(a,b){O.call(this,1,arguments);this.b=a;this.isEnabled=b}
x(Sh,O);function Th(a,b,c,d,e){O.call(this,2,arguments);this.f=a;this.b=b;this.h=c||null;this.g=d||null;this.source=e||null}
x(Th,O);function Uh(a,b,c){O.call(this,1,arguments);this.b=a;this.subscriptionId=b}
x(Uh,O);function Vh(a,b,c,d,e,f,h){O.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.i=d||null;this.h=e||null;this.g=f||null;this.source=h||null}
x(Vh,O);
var Wh=new P("subscription-batch-subscribe",Qh),Xh=new P("subscription-batch-unsubscribe",Qh),Yh=new P("subscription-pref-email",Sh),Zh=new P("subscription-subscribe",Th),$h=new P("subscription-subscribe-loading",Rh),ai=new P("subscription-subscribe-loaded",Rh),bi=new P("subscription-subscribe-success",Uh),ci=new P("subscription-subscribe-external",Th),di=new P("subscription-unsubscribe",Vh),ei=new P("subscription-unsubscirbe-loading",Rh),fi=new P("subscription-unsubscribe-loaded",Rh),gi=new P("subscription-unsubscribe-success",
Rh),hi=new P("subscription-external-unsubscribe",Vh),ii=new P("subscription-enable-ypc",Rh),ji=new P("subscription-disable-ypc",Rh);function ki(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Dd(c,"mode",b));c=Dd("/signin?context=popup","next",c);c=Dd(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=lc("LOGGED_IN",function(b){nc(F("LOGGED_IN_PUBSUB_KEY",void 0));$b("LOGGED_IN",!0);a(b)});
$b("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",J,void 0);function li(){var a=F("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!F("SESSION_INDEX")&&!F("LOGGED_IN"))}
;function mi(){var a=De();return a?a:null}
;var ni={},oi="ontouchstart"in document;function pi(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Ae(c,function(a){return ae(a,b)},!0,d)}
function qi(a){var b="mouseover"==a.type&&"mouseenter"in ni||"mouseout"==a.type&&"mouseleave"in ni,c=a.type in ni||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=ni[b],d;for(d in c.$){var e=pi(b,d,a.target);e&&!Ae(a.relatedTarget,function(a){return a==e},!0)&&c.u(d,e,b,a)}}if(b=ni[a.type])for(d in b.$)(e=pi(a.type,d,a.target))&&b.u(d,e,a.type,a)}}
M(document,"blur",qi,!0);M(document,"change",qi,!0);M(document,"click",qi);M(document,"focus",qi,!0);M(document,"mouseover",qi);M(document,"mouseout",qi);M(document,"mousedown",qi);M(document,"keydown",qi);M(document,"keyup",qi);M(document,"keypress",qi);M(document,"cut",qi);M(document,"paste",qi);oi&&(M(document,"touchstart",qi),M(document,"touchend",qi),M(document,"touchcancel",qi));function ri(a){this.i=a;this.g={};this.lb=[];this.h=[]}
function S(a,b){return"yt-uix"+(a.i?"-"+a.i:"")+(b?"-"+b:"")}
ri.prototype.unregister=function(){nc(this.lb);this.lb.length=0;Ug(this.h);this.h.length=0};
ri.prototype.init=t;ri.prototype.dispose=t;function si(a,b,c){a.h.push(Tg(b,c,a))}
function ti(a,b,c){var d=S(a,void 0),e=v(c,a);b in ni||(ni[b]=new E);ni[b].subscribe(d,e);a.g[c]=e}
function ui(a,b,c){if(b in ni){var d=ni[b];d.unsubscribe(S(a,void 0),a.g[c]);0>=d.N()&&(d.dispose(),delete ni[b])}delete a.g[c]}
function vi(a,b){Db(a,"tooltip-text",b)}
;function wi(){ri.call(this,"tooltip");this.b=0;this.f={}}
x(wi,ri);ba(wi);g=wi.prototype;g.register=function(){ti(this,"mouseover",this.ib);ti(this,"mouseout",this.Ba);ti(this,"focus",this.dc);ti(this,"blur",this.Zb);ti(this,"click",this.Ba);ti(this,"touchstart",this.Ec);ti(this,"touchend",this.ob);ti(this,"touchcancel",this.ob)};
g.unregister=function(){ui(this,"mouseover",this.ib);ui(this,"mouseout",this.Ba);ui(this,"focus",this.dc);ui(this,"blur",this.Zb);ui(this,"click",this.Ba);ui(this,"touchstart",this.Ec);ui(this,"touchend",this.ob);ui(this,"touchcancel",this.ob);this.dispose();wi.A.unregister.call(this)};
g.dispose=function(){for(var a in this.f)this.Ba(this.f[a]);this.f={}};
g.ib=function(a){if(!(this.b&&1E3>w()-this.b)){var b=parseInt(B(a,"tooltip-hide-timer"),10);b&&(Fb(a,"tooltip-hide-timer"),I(b));var b=v(function(){xi(this,a);Fb(a,"tooltip-show-timer")},this),c=parseInt(B(a,"tooltip-show-delay"),10)||0,b=G(b,c);
Db(a,"tooltip-show-timer",b.toString());a.title&&(vi(a,yi(a)),a.title="");b=ja(a).toString();this.f[b]=a}};
g.Ba=function(a){var b=parseInt(B(a,"tooltip-show-timer"),10);b&&(I(b),Fb(a,"tooltip-show-timer"));b=v(function(){if(a){var b=ke(zi(this,a));b&&(Ai(b),b&&b.parentNode&&b.parentNode.removeChild(b),Fb(a,"content-id"));(b=ke(zi(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Fb(a,"tooltip-hide-timer")},this);
b=G(b,50);Db(a,"tooltip-hide-timer",b.toString());if(b=B(a,"tooltip-text"))a.title=b;b=ja(a).toString();delete this.f[b]};
g.dc=function(a){this.b=0;this.ib(a)};
g.Zb=function(a){this.b=0;this.Ba(a)};
g.Ec=function(a,b,c){c.changedTouches&&(this.b=0,a=pi(b,S(this),c.changedTouches[0].target),this.ib(a))};
g.ob=function(a,b,c){c.changedTouches&&(this.b=w(),a=pi(b,S(this),c.changedTouches[0].target),this.Ba(a))};
function Bi(a,b){vi(a,b);var c=B(a,"content-id");(c=ke(c))&&te(c,b)}
function yi(a){return B(a,"tooltip-text")||a.title}
function xi(a,b){if(b){var c=yi(b);if(c){var d=ke(zi(a,b));if(!d){d=document.createElement("div");d.id=zi(a,b);d.className=S(a,"tip");var e=document.createElement("div");e.className=S(a,"tip-body");var f=document.createElement("div");f.className=S(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=S(a,"tip-content");var k=Ci(a,b),m=zi(a,b,"content");h.id=m;Db(b,"content-id",m);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var m=
we(b),n=zi(a,b,"arialabel"),f=document.createElement("div");be(f,S(a,"arialabel"));f.id=n;"rtl"==document.body.getAttribute("dir")?te(f,c+" "+m):te(f,m+" "+c);b.setAttribute("aria-labelledby",n);m=mi()||document.body;m.appendChild(f);m.appendChild(d);Bi(b,c);(c=parseInt(B(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",be(h,S(a,"normal-wrap")));h=ae(b,S(a,"reverse"));Di(a,b,d,e,k,h)||Di(a,b,d,e,k,!h);var H=S(a,"tip-visible");G(function(){be(d,H)},0)}}}}
function Di(a,b,c,d,e,f){de(c,S(a,"tip-reverse"),f);var h=0;f&&(h=1);a=ef(b);f=new ee((a.width-10)/2,f?a.height:0);var k=je(b),m=new ee(0,0),n;n=k?je(k):document;n=!K||kd(9)||pe(he(n).b)?n.documentElement:n.body;b!=n&&(n=cf(b),k=oe(he(k).b),m.x=n.left+k.x,m.y=n.top+k.y);f=new ee(m.x+f.x,m.y+f.y);f=f.clone();m=(h&8&&"rtl"==bf(c,"direction")?h^4:h)&-9;h=ef(c);k=h.clone();n=f.clone();k=k.clone();0!=m&&(m&4?n.x-=k.width+0:m&2&&(n.x-=k.width/2),m&1&&(n.y-=k.height+0));f=new Ze(0,0,0,0);f.left=n.x;f.top=
n.y;f.width=k.width;f.height=k.height;k=new ee(f.left,f.top);k instanceof ee?(m=k.x,k=k.y):(m=k,k=void 0);c.style.left=df(m,!1);c.style.top=df(k,!1);k=new fe(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,f=je(c),m=pe(he(f).b),!K||jd("10")||m&&jd("8"))f=c.style,Zc?f.MozBoxSizing="border-box":$c?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,m){if(K){m=hf(c,"paddingLeft");
k=hf(c,"paddingRight");n=hf(c,"paddingTop");var H=hf(c,"paddingBottom"),m=new Ye(n,k,H,m)}else m=af(c,"paddingLeft"),k=af(c,"paddingRight"),n=af(c,"paddingTop"),H=af(c,"paddingBottom"),m=new Ye(parseFloat(n),parseFloat(k),parseFloat(H),parseFloat(m));if(K&&!kd(9)){k=kf(c,"borderLeft");n=kf(c,"borderRight");var H=kf(c,"borderTop"),R=kf(c,"borderBottom"),k=new Ye(H,n,R,k)}else k=af(c,"borderLeftWidth"),n=af(c,"borderRightWidth"),H=af(c,"borderTopWidth"),R=af(c,"borderBottomWidth"),k=new Ye(parseFloat(H),
parseFloat(n),parseFloat(R),parseFloat(k));f.pixelWidth=h.width-k.left-m.left-m.right-k.right;f.pixelHeight=h.height-k.top-m.top-m.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=pe(h)?h.documentElement:h.body;f=new fe(h.clientWidth,h.clientHeight);1==c.nodeType?(c=cf(c),k=new ee(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new ee(c.clientX,c.clientY));c=ef(d);n=Math.floor(c.width/2);h=!!(f.height<k.y+a.height);a=!!(k.y<a.height);m=!!(k.x<n);f=!!(f.width<
k.x+n);k=(c.width+3)/-2- -5;b=B(b,"force-tooltip-direction");if("left"==b||m)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function zi(a,b,c){a=S(a);var d=b.__yt_uid_key;d||(d=Be(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Ci(a,b){var c=null;bd&&ae(b,S(a,"masked"))&&((c=ke("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),yf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=S(a,"tip-mask")));return c}
function Ai(a){var b=ke("yt-uix-tooltip-shared-mask"),c=b&&Ae(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),zf(b),document.body.appendChild(b))}
;function Ei(){ri.call(this,"subscription-button")}
x(Ei,ri);ba(Ei);Ei.prototype.register=function(){ti(this,"click",this.Ab);si(this,$h,this.lc);si(this,ai,this.kc);si(this,bi,this.Nd);si(this,ei,this.lc);si(this,fi,this.kc);si(this,gi,this.Td);si(this,ii,this.zd);si(this,ji,this.yd)};
Ei.prototype.unregister=function(){ui(this,"click",this.Ab);Ei.A.unregister.call(this)};
var ze={Tb:"hover-enabled",Mc:"yt-uix-button-subscribe",Nc:"yt-uix-button-subscribed",Ce:"ypc-enabled",Oc:"yt-uix-button-subscription-container",Pc:"yt-subscription-button-disabled-mask-container"},Fi={De:"channel-external-id",Qc:"subscriber-count-show-when-subscribed",Rc:"subscriber-count-tooltip",Sc:"subscriber-count-title",Ee:"href",Ub:"is-subscribed",Ge:"parent-url",Ie:"clicktracking",Tc:"style-type",Vb:"subscription-id",Le:"target",Vc:"ypc-enabled"};g=Ei.prototype;
g.Ab=function(a){var b=B(a,"href"),c=li();if(b)a=B(a,"target")||"_self",window.open(b,a);else if(c){var b=B(a,"channel-external-id"),c=B(a,"clicktracking"),d;if(B(a,"ypc-enabled")){d=B(a,"ypc-item-type");var e=B(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=B(a,"parent-url");if(B(a,"is-subscribed")){var f=B(a,"subscription-id");Q(di,new Vh(b,f,d,a,c,e))}else Q(Zh,new Th(b,d,c,e))}else Gi(this,a)};
g.lc=function(a){this.Ga(a.b,this.Bc,!0)};
g.kc=function(a){this.Ga(a.b,this.Bc,!1)};
g.Nd=function(a){this.Ga(a.b,this.Cc,!0,a.subscriptionId)};
g.Td=function(a){this.Ga(a.b,this.Cc,!1)};
g.zd=function(a){this.Ga(a.b,this.ad)};
g.yd=function(a){this.Ga(a.b,this.$c)};
g.Cc=function(a,b,c){b?(Db(a,Fi.Ub,"true"),c&&Db(a,Fi.Vb,c)):(Fb(a,Fi.Ub),Fb(a,Fi.Vb));Hi(a)};
g.Bc=function(a,b){var c;c=ye(a);de(c,ze.Pc,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Hi(a){var b=B(a,Fi.Tc),c=!!B(a,"is-subscribed"),b="-"+b,d=ze.Nc+b;de(a,ze.Mc+b,!c);de(a,d,c);B(a,Fi.Rc)&&!B(a,Fi.Qc)&&(b=S(wi.getInstance()),de(a,b,!c),a.title=c?"":B(a,Fi.Sc));c?G(function(){be(a,ze.Tb)},1E3):ce(a,ze.Tb)}
g.ad=function(a){var b=!!B(a,"ypc-item-type"),c=!!B(a,"ypc-item-id");!B(a,"ypc-enabled")&&b&&c&&(be(a,"ypc-enabled"),Db(a,Fi.Vc,"true"))};
g.$c=function(a){B(a,"ypc-enabled")&&(ce(a,"ypc-enabled"),Fb(a,"ypc-enabled"))};
function Ii(a,b){var c=me(S(a));return Ja(c,function(a){return b==B(a,"channel-external-id")},a)}
g.Wc=function(a,b,c){var d=Wa(arguments,2);y(a,function(a){b.apply(this,Sa(a,d))},this)};
g.Ga=function(a,b,c){var d=Ii(this,a),d=Sa([d],Wa(arguments,1));this.Wc.apply(this,d)};
function Gi(a,b){var c=v(function(a){a.discoverable_subscriptions&&$b("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Ab(b)},a);
ki(c,"subscribe")}
;var Ji=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Ji,void 0);function Ki(a,b){this.source=null;this.i=a||null;this.origin="*";this.o=window.document.location.protocol+"//"+window.document.location.hostname;this.l=b;this.g=this.b=this.f=this.channel=this.h=null;M(window,"message",v(this.j,this))}
Ki.prototype.j=function(a){var b=this.l||F("POST_MESSAGE_ORIGIN",void 0)||this.o;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.i||a.source==this.i)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,u(a)){try{a=nd(a)}catch(c){return}this.h=a.id;switch(a.event){case "listening":this.b&&(this.b(),this.b=null);break;case "command":this.f&&(this.g&&!z(this.g,a.func)||this.f(a.func,a.args))}}};
Ki.prototype.sendMessage=function(a){this.source&&(a.id=this.h,this.channel&&(a.channel=this.channel),a=L(a),this.source.postMessage(a,this.origin))};function Li(){}
;function Mi(){}
x(Mi,Li);Mi.prototype.N=function(){var a=0;Hc(this.la(!0),function(){a++});
return a};
Mi.prototype.clear=function(){var a=Ic(this.la(!0)),b=this;y(a,function(a){b.remove(a)})};function Ni(a){this.b=a}
x(Ni,Mi);g=Ni.prototype;g.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeItem(a)};
g.N=function(){return this.b.length};
g.la=function(a){var b=0,c=this.b,d=new Fc;d.next=function(){if(b>=c.length)throw Ec;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.b.clear()};
g.key=function(a){return this.b.key(a)};function Oi(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
x(Oi,Ni);function Pi(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
x(Pi,Ni);function Qi(a){this.b=a}
Qi.prototype.set=function(a,b){p(b)?this.b.set(a,L(b)):this.b.remove(a)};
Qi.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return nd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qi.prototype.remove=function(a){this.b.remove(a)};function Ri(a){this.b=a}
x(Ri,Qi);function Si(a){this.data=a}
function Ti(a){return!p(a)||a instanceof Si?a:new Si(a)}
Ri.prototype.set=function(a,b){Ri.A.set.call(this,a,Ti(b))};
Ri.prototype.f=function(a){a=Ri.A.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ri.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ui(a){this.b=a}
x(Ui,Ri);function Vi(a){var b=a.creation;a=a.expiration;return!!a&&a<w()||!!b&&b>w()}
Ui.prototype.set=function(a,b,c){if(b=Ti(b)){if(c){if(c<w()){Ui.prototype.remove.call(this,a);return}b.expiration=c}b.creation=w()}Ui.A.set.call(this,a,b)};
Ui.prototype.f=function(a,b){var c=Ui.A.f.call(this,a);if(c)if(!b&&Vi(c))Ui.prototype.remove.call(this,a);else return c};function Wi(a){this.b=a}
x(Wi,Ui);function Xi(a,b){var c=[];Hc(b,function(a){var b;try{b=Wi.prototype.f.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?Vi(b)&&c.push(a):c.push(a)},a);
return c}
function Yi(a,b){var c=Xi(a,b);y(c,function(a){Wi.prototype.remove.call(this,a)},a)}
function Zi(){var a=$i;Yi(a,a.b.la(!0))}
;function T(a,b,c){var d=c&&0<c?c:0;c=d?w()+1E3*d:0;if((d=d?$i:aj)&&window.JSON){u(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function U(a){if(!aj&&!$i||!window.JSON)return null;var b;try{b=aj.get(a)}catch(c){}if(!u(b))try{b=$i.get(a)}catch(c){}if(!u(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function bj(a){aj&&aj.remove(a);$i&&$i.remove(a)}
var $i,cj=new Oi;$i=cj.isAvailable()?new Wi(cj):null;var aj,dj=new Pi;aj=dj.isAvailable()?new Wi(dj):null;function ej(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function fj(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=a;c=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);b.videoId=c&&c[2]?c[2]:null;return gj(a)}
function gj(a,b,c){if(ha(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function hj(a,b,c,d){if(ha(a)&&!da(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function ij(a){var b=a.video_id||a.videoId;if(u(b)){var c=U("yt-player-two-stage-token")||{},d=U("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];T("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function jj(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
var kj=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",lj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],mj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],nj=jj()?mj.concat(lj):lj.concat(mj);function oj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function pj(a){if(a>=nj.length)qj();else{var b=nj[a],c="chrome-extension://"+b+kj;0<=lj.indexOf(b)?oj(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,rj(c,qj)):pj(a+1)}):rj(c,function(){pj(a+1)})}}
function rj(a,b){var c=document.createElement("script");c.onerror=b;c.src=a;(document.head||document.documentElement).appendChild(c)}
function qj(){var a=window.__onGCastApiAvailable;a&&"function"==typeof a&&a(!1,"No cast extension found")}
function sj(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){a({command:"cast.sender.init"});return}}window.chrome?(a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=jj()?"50":"",rj("//www.gstatic.com/eureka/clank"+a+kj,qj)):pj(0)):qj()}
;var tj=w(),uj=null,vj=Array(50),wj=-1,xj=!1;function yj(){var a=zj;Aj();uj.push(a);Bj(uj)}
function Cj(a,b){Aj();var c=uj,d=Dj(a,String(b));0==c.length?Ej(d):(Bj(c),y(c,function(a){a(d)}))}
function Aj(){uj||(uj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",uj,void 0))}
function Ej(a){var b=(wj+1)%50;wj=b;vj[b]=a;xj||(xj=49==b)}
function Bj(a){var b=vj;if(b[0]){var c=wj,d=xj?c:-1;do{var d=(d+1)%50,e=b[d];y(a,function(a){a(e)})}while(d!=c);
vj=Array(50);wj=-1;xj=!1}}
function Dj(a,b){var c=(w()-tj)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Fj(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function Gj(a,b){return!!b&&(a.id==b||a.uuid==b)}
function Hj(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function Ij(a){return new Fj(a)}
function Jj(a){return da(a)?Ka(a,Ij):[]}
function Kj(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function Lj(a){return da(a)?"["+Ka(a,Kj).join(",")+"]":"null"}
;var Mj={Be:"atp",Ke:"ska",He:"que",Fe:"mus",Je:"sus"};function Nj(a){this.h=this.g="";this.b="/api/lounge";this.f=!0;a=a||document.location.href;var b=Number(a.match(vd)[4]||null)||null||"";b&&(this.h=":"+b);this.g=wd(a)||"";a=mb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Fa(a,"10.0")&&(this.f=!1))}
function Oj(a,b,c,d){var e=a.b;if(p(d)?d:a.f)e="https://"+a.g+a.h+a.b;return Ed(e+b,c||{})}
function Pj(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,Z:oa(a.l,d,!0),onError:oa(a.i,e),Ca:oa(a.j,e)};c&&(a.J=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Od(b,a)}
Nj.prototype.l=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Nj.prototype.i=function(a,b){a(Error("Request error: "+b.status))};
Nj.prototype.j=function(a){a(Error("request timed out"))};function Qj(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function Rj(a,b){return Na(a,function(a){return a.key==b})}
function Sj(a){return Ka(a,function(a){return{key:a.id,name:a.name}})}
function Tj(a,b){return Na(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function Uj(a,b){return Na(a,function(a){return Gj(a,b)})}
;function V(){C.call(this);this.l=new E;Vb(this,oa(D,this.l))}
x(V,C);V.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.l.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.l.unsubscribe(a,b,c)};
V.prototype.ga=function(a){return this.isDisposed()?!1:this.l.ga(a)};
V.prototype.u=function(a,b){return this.isDisposed()?!1:this.l.u.apply(this.l,arguments)};function Vj(a){V.call(this);this.j=a;this.screens=[]}
x(Vj,V);Vj.prototype.S=function(){return this.screens};
Vj.prototype.contains=function(a){return!!Tj(this.screens,a)};
Vj.prototype.get=function(a){return a?Uj(this.screens,a):null};
function Wj(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function Xj(a,b){var c=a.screens.length!=b.length;a.screens=Ja(a.screens,function(a){return!!Tj(b,a)});
for(var d=0,e=b.length;d<e;d++)c=Wj(a,b[d])||c;return c}
function Yj(a,b){var c=a.screens.length;a.screens=Ja(a.screens,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.screens.length<c}
Vj.prototype.info=function(a){Cj(this.j,a)};function Zj(a,b,c,d){V.call(this);this.o=a;this.j=b;this.h=c;this.i=d;this.g=0;this.b=null;this.f=NaN}
x(Zj,V);var ak=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=Zj.prototype;g.start=function(){!this.b&&isNaN(this.f)&&this.wc()};
g.stop=function(){this.b&&(this.b.abort(),this.b=null);isNaN(this.f)||(I(this.f),this.f=NaN)};
g.w=function(){this.stop();Zj.A.w.call(this)};
g.wc=function(){this.f=NaN;this.b=Od(Oj(this.o,"/pairing/get_screen"),{method:"POST",J:{pairing_code:this.j},timeout:5E3,Z:v(this.se,this),onError:v(this.re,this),Ca:v(this.te,this)})};
g.se=function(a,b){this.b=null;var c=b.screen||{};c.dialId=this.h;c.name=this.i;this.u("pairingComplete",new Fj(c))};
g.re=function(a){this.b=null;a.status&&404==a.status?this.g>=ak.length?this.u("pairingFailed",Error("DIAL polling timed out")):(a=ak[this.g],this.f=G(v(this.wc,this),a),this.g++):this.u("pairingFailed",Error("Server error "+a.status))};
g.te=function(){this.b=null;this.u("pairingFailed",Error("Server not responding"))};function bk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new Sc;this.experiments=new Sc;this.theme="u";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();Tc(this.capabilities,Ja(b.split(","),oa(ab,Mj)));a=a.experiments||"";this.experiments.clear();Tc(this.experiments,
a.split(","))}}
bk.prototype.equals=function(a){return a?this.id==a.id:!1};var ck;function dk(){var a=ek(),b=fk();z(a,b);if(gk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=Xa(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Va(c,-(d+1),0,b)}a=hk(a);if(0==a.length)try{Qe.remove("remote_sid","/","youtube.com")}catch(m){}else try{Re("remote_sid",a.join(","),-1)}catch(m){}}
function ek(){var a=U("yt-remote-connected-devices")||[];a.sort(Xa);return a}
function hk(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return Ka(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function ik(a){T("yt-remote-connected-devices",a,86400)}
function fk(){if(jk)return jk;var a=U("yt-remote-device-id");a||(a=Qj(),T("yt-remote-device-id",a,31536E3));for(var b=ek(),c=1,d=a;z(b,d);)c++,d=a+"#"+c;return jk=d}
function kk(){return U("yt-remote-session-browser-channel")}
function gk(){return U("yt-remote-session-screen-id")}
function lk(a){5<a.length&&(a=a.slice(a.length-5));var b=Ka(mk(),function(a){return a.loungeToken}),c=Ka(a,function(a){return a.loungeToken});
Ma(c,function(a){return!z(b,a)})&&nk();
T("yt-remote-local-screens",a,31536E3)}
function mk(){return U("yt-remote-local-screens")||[]}
function nk(){T("yt-remote-lounge-token-expiration",!0,86400)}
function ok(a,b){T("yt-remote-session-browser-channel",a);T("yt-remote-session-screen-id",b);var c=ek(),d=fk();z(c,d)||c.push(d);ik(c);dk()}
function pk(a){a||(bj("yt-remote-session-screen-id"),bj("yt-remote-session-video-id"));dk();a=ek();Qa(a,fk());ik(a)}
function qk(){if(!ck){var a;a=new Oi;(a=a.isAvailable()?a:null)&&(ck=new Qi(a))}return ck?!!ck.get("yt-remote-use-staging-server"):!1}
var jk="";function rk(a){Vj.call(this,"LocalScreenService");this.f=a;this.b=NaN;sk(this);this.info("Initializing with "+Lj(this.screens))}
x(rk,Vj);g=rk.prototype;g.start=function(){sk(this)&&this.u("screenChange");!U("yt-remote-lounge-token-expiration")&&tk(this);I(this.b);this.b=G(v(this.start,this),1E4)};
g.tb=function(a,b){sk(this);Wj(this,a);uk(this,!1);this.u("screenChange");b(a);a.token||tk(this)};
g.remove=function(a,b){var c=sk(this);Yj(this,a)&&(uk(this,!1),c=!0);b(a);c&&this.u("screenChange")};
g.qb=function(a,b,c,d){var e=sk(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,uk(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.u("screenChange")};
g.w=function(){I(this.b);rk.A.w.call(this)};
function tk(a){if(a.screens.length){var b=Ka(a.screens,function(a){return a.id}),c=Oj(a.f,"/pairing/get_lounge_token_batch");
Pj(a.f,c,{screen_ids:b.join(",")},v(a.kd,a),v(a.jd,a))}}
g.kd=function(a){sk(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}uk(this,!b);b&&Cj(this.j,"Missed "+b+" lounge tokens.")};
g.jd=function(a){Cj(this.j,"Requesting lounge tokens failed: "+a)};
function sk(a){var b=Jj(mk()),b=Ja(b,function(a){return!a.uuid});
return Xj(a,b)}
function uk(a,b){lk(Ka(a.screens,Hj));b&&nk()}
;function vk(a,b){V.call(this);this.j=b;for(var c=U("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.j(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=z(c,k)}this.b=d;this.i=a;this.g=this.h=NaN;this.f=null;wk("Initialized with "+L(this.b))}
x(vk,V);g=vk.prototype;g.start=function(){var a=parseInt(U("yt-remote-fast-check-period")||"0",10);(this.h=w()-144E5<a?0:a)?xk(this):(this.h=w()+3E5,T("yt-remote-fast-check-period",this.h),this.Nb())};
g.isEmpty=function(){return gb(this.b)};
g.update=function(){wk("Updating availability on schedule.");var a=this.j(),b=Za(this.b,function(b,d){return b&&!!Uj(a,d)},this);
yk(this,b)};
function zk(a,b,c){var d=Oj(a.i,"/pairing/get_screen_availability");Pj(a.i,d,{lounge_token:b.token},v(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),v(function(){c(!1)},a))}
g.w=function(){I(this.g);this.g=NaN;this.f&&(this.f.abort(),this.f=null);vk.A.w.call(this)};
function yk(a,b){var c;a:if($a(b)!=$a(a.b))c=!1;else{c=db(b);for(var d=0,e=c.length;d<e;++d)if(!a.b[c[d]]){c=!1;break a}c=!0}c||(wk("Updated online screens: "+L(a.b)),a.b=b,a.u("screenChange"));Ak(a)}
function xk(a){isNaN(a.g)||I(a.g);a.g=G(v(a.Nb,a),0<a.h&&a.h<w()?2E4:1E4)}
g.Nb=function(){I(this.g);this.g=NaN;this.f&&this.f.abort();var a=Bk(this);if($a(a)){var b=Oj(this.i,"/pairing/get_screen_availability");this.f=Pj(this.i,b,{lounge_token:db(a).join(",")},v(this.Ld,this,a),v(this.Kd,this))}else yk(this,{}),xk(this)};
g.Ld=function(a,b){this.f=null;var c;a:{c=db(Bk(this));var d=db(a);if(ea(c)&&ea(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;yk(this,d);xk(this)}else this.H("Changing Screen set during request."),this.Nb()};
g.Kd=function(a){this.H("Screen availability failed: "+a);this.f=null;xk(this)};
function wk(a){Cj("OnlineScreenService",a)}
g.H=function(a){Cj("OnlineScreenService",a)};
function Bk(a){var b={};y(a.j(),function(a){a.token?b[a.token]=a.id:this.H("Requesting availability of screen w/o lounge token.")});
return b}
function Ak(a){a=db(Za(a.b,function(a){return a}));
a.sort(Xa);a.length?T("yt-remote-online-screen-ids",a.join(","),60):bj("yt-remote-online-screen-ids")}
;function W(a){Vj.call(this,"ScreenService");this.i=a;this.b=this.f=null;this.g=[];this.h={};Ck(this)}
x(W,Vj);g=W.prototype;g.start=function(){this.f.start();this.b.start();this.screens.length&&(this.u("screenChange"),this.b.isEmpty()||this.u("onlineScreenChange"))};
g.tb=function(a,b,c){this.f.tb(a,b,c)};
g.remove=function(a,b,c){this.f.remove(a,b,c);this.b.update()};
g.qb=function(a,b,c,d){this.f.contains(a)?this.f.qb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Cj(this.j,a),d(Error(a)))};
g.S=function(a){return a?this.screens:Sa(this.screens,Ja(this.g,function(a){return!this.contains(a)},this))};
g.Gc=function(){return Ja(this.S(!0),function(a){return!!this.b.b[a.id]},this)};
function Dk(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.h[b]);var h=a.S();if(h=(c?Uj(h,c):null)||Uj(h,b)){h.uuid=b;var k=Ek(a,h);zk(a.b,k,function(a){e(a?k:null)})}else c?Fk(a,c,v(function(a){var f=Ek(this,new Fj({name:d,
screenId:c,loungeToken:a,dialId:b||""}));zk(this.b,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Hc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new Zj(this.i,a,b,c);f.subscribe("pairingComplete",v(function(a){D(f);d(Ek(this,a))},this));
f.subscribe("pairingFailed",function(a){D(f);e(a)});
f.start();return v(f.stop,f)};
function Gk(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.ve=function(a,b,c,d){Od(Oj(this.i,"/pairing/get_screen"),{method:"POST",J:{pairing_code:a},timeout:5E3,Z:v(function(a,d){var h=new Fj(d.screen||{});if(!h.name||Gk(this,h.name)){var k;a:{k=h.name;for(var m=2,n=b(k,m);Gk(this,n);){m++;if(20<m)break a;n=b(k,m)}k=n}h.name=k}c(Ek(this,h))},this),
onError:v(function(a){d(Error("pairing request failed: "+a.status))},this),
Ca:v(function(){d(Error("pairing request timed out."))},this)})};
g.w=function(){D(this.f);D(this.b);W.A.w.call(this)};
function Fk(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={J:{screen_ids:b},method:"POST",context:a,Z:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Od(Oj(a.i,"/pairing/get_lounge_token_batch"),e)}
function Hk(a){a.screens=a.f.S();var b=a.h,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Lj(a.screens))}
g.ld=function(){Hk(this);this.u("screenChange");this.b.update()};
function Ck(a){Ik(a);a.f=new rk(a.i);a.f.subscribe("screenChange",v(a.ld,a));Hk(a);a.g=Jj(U("yt-remote-automatic-screen-cache")||[]);Ik(a);a.info("Initializing automatic screens: "+Lj(a.g));a.b=new vk(a.i,v(a.S,a,!0));a.b.subscribe("screenChange",v(function(){this.u("onlineScreenChange")},a))}
function Ek(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=Uj(a.g,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.g.push(b),T("yt-remote-automatic-screen-cache",Ka(a.g,Hj)));Ik(a);a.h[b.uuid]=b.id;T("yt-remote-device-id-map",a.h,31536E3);return b}
function Ik(a){a.h=U("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function Jk(a,b,c){V.call(this);this.L=c;this.D=a;this.f=b;this.g=null}
x(Jk,V);g=Jk.prototype;g.kb=function(a){this.g=a;this.u("sessionScreen",this.g)};
g.T=function(a){this.isDisposed()||(a&&Kk(this,""+a),this.g=null,this.u("sessionScreen",null))};
g.info=function(a){Cj(this.L,a)};
function Kk(a,b){Cj(a.L,b)}
g.Jc=function(){return null};
g.Pb=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,v(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),v(function(){Kk(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.w=function(){this.Pb("");Jk.A.w.call(this)};function Lk(a,b){Jk.call(this,a,b,"CastSession");this.b=null;this.i=0;this.h=null;this.o=v(this.we,this);this.j=v(this.Wd,this);this.i=G(v(function(){Mk(this,null)},this),12E4)}
x(Lk,Jk);g=Lk.prototype;g.Ob=function(a){if(this.b){if(this.b==a)return;Kk(this,"Overriding cast sesison with new session object");this.b.removeUpdateListener(this.o);this.b.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.b=a;this.b.addUpdateListener(this.o);this.b.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);this.h&&Nk(this);Ok(this,"getMdxSessionStatus")};
g.Ja=function(a){this.info("launchWithParams: "+L(a));this.h=a;this.b&&Nk(this)};
g.stop=function(){this.b?this.b.stop(v(function(){this.T()},this),v(function(){this.T(Error("Failed to stop receiver app."))},this)):this.T(Error("Stopping cast device witout session."))};
g.Pb=t;g.w=function(){this.info("disposeInternal");I(this.i);this.i=0;this.b&&(this.b.removeUpdateListener(this.o),this.b.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.b=null;Lk.A.w.call(this)};
function Nk(a){var b=a.h.videoId;b&&Ok(a,"flingVideo",{videoId:b,currentTime:a.h.currentTime||0});a.h=null}
function Ok(a,b,c){a.info("sendYoutubeMessage_: "+b+" "+L(c));var d={};d.type=b;c&&(d.data=c);a.b?a.b.sendMessage("urn:x-cast:com.google.youtube.mdx",d,t,v(function(){Kk(this,"Failed to send message: "+b+".")},a)):Kk(a,"Sending yt message without session: "+L(d))}
g.Wd=function(a,b){if(!this.isDisposed())if(b){var c=od(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+L(c));switch(d){case "mdxSessionStatus":Mk(this,c.screenId);break;default:Kk(this,"Unknown youtube message: "+d)}}else Kk(this,"Unable to parse message.")}else Kk(this,"No data in message.")};
function Mk(a,b){I(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.g||a.g.id!=b){var c=v(a.kb,a),d=v(a.T,a);a.fc(b,c,d,5)}}else a.T(Error("Waiting for session status timed out."))}
g.fc=function(a,b,c,d){Dk(this.D,this.f.label,a,this.f.friendlyName,v(function(e){e?b(e):0<=d?(Kk(this,"Screen "+a+" appears to be offline. "+d+" retries left."),G(v(this.fc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Jc=function(){return this.b};
g.we=function(a){this.isDisposed()||a||(Kk(this,"Cast session died."),this.T())};function Pk(a,b){Jk.call(this,a,b,"DialSession");this.h=this.C=null;this.G="";this.i=null;this.o=t;this.j=NaN;this.K=v(this.ze,this);this.b=t}
x(Pk,Jk);g=Pk.prototype;g.Ob=function(a){this.h=a;this.h.addUpdateListener(this.K)};
g.Ja=function(a){this.i=a;this.o()};
g.stop=function(){this.b();this.b=t;I(this.j);this.h?this.h.stop(v(this.T,this,null),v(this.T,this,"Failed to stop DIAL device.")):this.T()};
g.w=function(){this.b();this.b=t;I(this.j);this.h&&this.h.removeUpdateListener(this.K);this.h=null;Pk.A.w.call(this)};
function Qk(a){a.b=a.D.Hc(a.G,a.f.label,a.f.friendlyName,v(function(a){this.b=t;this.kb(a)},a),v(function(a){this.b=t;
this.T(a)},a))}
g.ze=function(a){this.isDisposed()||a||(Kk(this,"DIAL session died."),this.b(),this.b=t,this.T())};
function Rk(a){var b={};b.pairingCode=a.G;if(a.i){var c=a.i.currentTime||0;b.v=a.i.videoId;b.t=c}qk()&&(b.env_useStageMdx=1);return Cd(b)}
g.Kb=function(a){this.G=Qj();if(this.i){var b=new chrome.cast.DialLaunchResponse(!0,Rk(this));a(b);Qk(this)}else this.o=v(function(){I(this.j);this.o=t;this.j=NaN;var b=new chrome.cast.DialLaunchResponse(!0,Rk(this));a(b);Qk(this)},this),this.j=G(v(function(){this.o()},this),100)};
g.md=function(a,b){Dk(this.D,this.C.receiver.label,a,this.f.friendlyName,v(function(a){a&&a.token?(this.kb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Kb(b)},this),v(function(a){Kk(this,"Failed to get DIAL screen: "+a);
this.Kb(b)},this))};function Sk(a,b){Jk.call(this,a,b,"ManualSession");this.b=G(v(this.Ja,this,null),150)}
x(Sk,Jk);Sk.prototype.stop=function(){this.T()};
Sk.prototype.Ob=t;Sk.prototype.Ja=function(){I(this.b);this.b=NaN;var a=Uj(this.D.S(),this.f.label);a?this.kb(a):this.T(Error("No such screen"))};
Sk.prototype.w=function(){I(this.b);this.b=NaN;Sk.A.w.call(this)};function X(a){V.call(this);this.f=a;this.b=null;this.i=!1;this.g=[];this.h=v(this.Id,this)}
x(X,V);g=X.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,v(this.pc,this),v(this.Jd,this),d,e);c.customDialLaunchCallback=v(this.xd,this);chrome.cast.initialize(c,v(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.h),
yj(),this.f.subscribe("onlineScreenChange",v(this.Ic,this)),this.g=Tk(this),chrome.cast.setCustomReceivers(this.g,t,v(function(a){this.H("Failed to set initial custom receivers: "+L(a))},this)),this.u("yt-remote-cast2-availability-change",Uk(this)),b(!0))},this),v(function(a){this.H("Failed to initialize API: "+L(a));
b(!1)},this))};
g.ie=function(a,b){Vk("Setting connected screen ID: "+a+" -> "+b);if(this.b){var c=this.b.g;if(!a||c&&c.id!=a)Vk("Unsetting old screen status: "+this.b.f.friendlyName),D(this.b),this.b=null}if(a&&b){if(!this.b){c=Uj(this.f.S(),a);if(!c){Vk("setConnectedScreenStatus: Unknown screen.");return}var d=Wk(this,c);d||(Vk("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.g.push(d),chrome.cast.setCustomReceivers(this.g,
t,v(function(a){this.H("Failed to set initial custom receivers: "+L(a))},this)));
Vk("setConnectedScreenStatus: new active receiver: "+d.friendlyName);Xk(this,new Sk(this.f,d),!0)}this.b.Pb(b)}else Vk("setConnectedScreenStatus: no screen.")};
function Wk(a,b){return b?Na(a.g,function(a){return Gj(b,a.label)},a):null}
g.je=function(a){this.isDisposed()?this.H("Setting connection data on disposed cast v2"):this.b?this.b.Ja(a):this.H("Setting connection data without a session")};
g.ye=function(){this.isDisposed()?this.H("Stopping session on disposed cast v2"):this.b?(this.b.stop(),D(this.b),this.b=null):Vk("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(v(this.pc,this),v(this.Md,this))};
g.w=function(){this.f.unsubscribe("onlineScreenChange",v(this.Ic,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.h);var a=zj,b=r("yt.mdx.remote.debug.handlers_");Qa(b||[],a);D(this.b);X.A.w.call(this)};
function Vk(a){Cj("Controller",a)}
g.H=function(a){Cj("Controller",a)};
function zj(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function Uk(a){return a.i||!!a.g.length||!!a.b}
function Xk(a,b,c){D(a.b);(a.b=b)?(c?a.u("yt-remote-cast2-receiver-resumed",b.f):a.u("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",v(a.qc,a,b)),b.g?a.u("yt-remote-cast2-session-change",b.g):c&&a.b.Ja(null)):a.u("yt-remote-cast2-session-change",null)}
g.qc=function(a,b){this.b==a&&(b||Xk(this,null),this.u("yt-remote-cast2-session-change",b))};
g.Id=function(a,b){if(!this.isDisposed())if(a)switch(Vk("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.b)if(this.b.f.label!=a.label)Vk("onReceiverAction_: Stopping active receiver: "+this.b.f.friendlyName),this.b.stop();else{Vk("onReceiverAction_: Casting to active receiver.");this.b.g&&this.u("yt-remote-cast2-session-change",this.b.g);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:Xk(this,new Sk(this.f,a));break;case chrome.cast.ReceiverType.DIAL:Xk(this,
new Pk(this.f,a));break;case chrome.cast.ReceiverType.CAST:Xk(this,new Lk(this.f,a));break;default:this.H("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.b&&this.b.f.label==a.label?this.b.stop():this.H("Stopping receiver w/o session: "+a.friendlyName)}else this.H("onReceiverAction_ called without receiver.")};
g.xd=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.H("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.b?this.b.f:null;if(!c||c.label!=b.label)return this.H("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.b.g)return Vk("Reselecting dial screen."),
this.u("yt-remote-cast2-session-change",this.b.g),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.H('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);Xk(this,new Pk(this.f,b))}b=this.b;b.C=a;return b.C.appState==chrome.cast.DialAppState.RUNNING?new Promise(v(b.md,b,(b.C.extraData||{}).screenId||null)):new Promise(v(b.Kb,b))};
g.pc=function(a){if(!this.isDisposed()){Vk("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.b)if(b.receiverType==chrome.cast.ReceiverType.CAST)Vk("Got resumed cast session before resumed mdx connection."),Xk(this,new Lk(this.f,b),!0);else{this.H("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.b.f,d=Uj(this.f.S(),c.label);d&&Gj(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(Vk("onSessionEstablished_: manual to cast session change "+b.friendlyName),D(this.b),this.b=new Lk(this.f,b),this.b.subscribe("sessionScreen",v(this.qc,this,this.b)),this.b.Ja(null));this.b.Ob(a)}}};
g.xe=function(){return this.b?this.b.Jc():null};
g.Md=function(a){this.isDisposed()||(this.H("Failed to estabilish a session: "+L(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&Xk(this,null))};
g.Jd=function(a){Vk("Receiver availability updated: "+a);if(!this.isDisposed()){var b=Uk(this);this.i=a==chrome.cast.ReceiverAvailability.AVAILABLE;Uk(this)!=b&&this.u("yt-remote-cast2-availability-change",Uk(this))}};
function Tk(a){var b=a.f.Gc(),c=a.b&&a.b.f;a=Ka(b,function(a){c&&Gj(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,f=Wk(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Ic=function(){if(!this.isDisposed()){var a=Uk(this);this.g=Tk(this);Vk("Updating custom receivers: "+L(this.g));chrome.cast.setCustomReceivers(this.g,t,v(function(){this.H("Failed to set custom receivers.")},this));
var b=Uk(this);b!=a&&this.u("yt-remote-cast2-availability-change",b)}};
X.prototype.setLaunchParams=X.prototype.je;X.prototype.setConnectedScreenStatus=X.prototype.ie;X.prototype.stopSession=X.prototype.ye;X.prototype.getCastSession=X.prototype.xe;X.prototype.requestSession=X.prototype.requestSession;X.prototype.init=X.prototype.init;X.prototype.dispose=X.prototype.dispose;function Yk(a,b,c){Zk()?al(a)&&(bl(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?cl(b):(window.__onGCastApiAvailable=function(a,c){a?cl(b):(dl("Failed to load cast API: "+c),el(!1),bl(!1),bj("yt-remote-cast-available"),bj("yt-remote-cast-receiver"),fl(),b(!1))},c?rc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):sj())):$k("Cannot initialize because not running Chrome")}
function fl(){$k("dispose");var a=gl();a&&a.dispose();hl=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);il(!1);nc(jl);jl.length=0}
function kl(){return!!U("yt-remote-cast-installed")}
function ll(){var a=U("yt-remote-cast-receiver");a?(a=a.friendlyName,a=-1!=a.indexOf("&")?"document"in l?Aa(a):Ca(a):a):a=null;return a}
function ml(){$k("clearCurrentReciever");bj("yt-remote-cast-receiver")}
function nl(){kl()?gl()?ol()?($k("Requesting cast selector."),hl.requestSession()):($k("Wait for cast API to be ready to request the session."),jl.push(lc("yt-remote-cast2-api-ready",nl))):dl("requestCastSelector: Cast is not initialized."):dl("requestCastSelector: Cast API is not installed!")}
function pl(a){ol()?gl().setLaunchParams(a):dl("setLaunchParams called before ready.")}
function ql(a,b){ol()?gl().setConnectedScreenStatus(a,b):dl("setConnectedScreenStatus called before ready.")}
var hl=null;function Zk(){var a;a=0<=mb.search(/\ (CrMo|Chrome|CriOS)\//);return pf||a}
function al(a){var b=!1;if(!hl){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new X(a),c.subscribe("yt-remote-cast2-availability-change",function(a){T("yt-remote-cast-available",a);J("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){$k("onReceiverSelected: "+a.friendlyName);
T("yt-remote-cast-receiver",a);J("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){$k("onReceiverResumed: "+a.friendlyName);
T("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){$k("onSessionChange: "+Kj(a));
a||bj("yt-remote-cast-receiver");J("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
hl=c}$k("cloudview.createSingleton_: "+b);return b}
function gl(){hl||(hl=r("yt.mdx.remote.cloudview.instance_"));return hl}
function cl(a){el(!0);bl(!1);hl.init(!0,function(b){b?(il(!0),J("yt-remote-cast2-api-ready")):(dl("Failed to initialize cast API."),el(!1),bj("yt-remote-cast-available"),bj("yt-remote-cast-receiver"),fl());a(b)})}
function $k(a){Cj("cloudview",a)}
function dl(a){Cj("cloudview",a)}
function el(a){$k("setCastInstalled_ "+a);T("yt-remote-cast-installed",a)}
function ol(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function il(a){$k("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function bl(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var jl=[];function rl(){}
;function sl(a,b){this.action=a;this.params=b||null}
;function tl(){this.b=w()}
new tl;tl.prototype.set=function(a){this.b=a};
tl.prototype.reset=function(){this.set(w())};
tl.prototype.get=function(){return this.b};function ul(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.b=!1;this.zc=!0}
ul.prototype.stopPropagation=function(){this.b=!0};
ul.prototype.preventDefault=function(){this.defaultPrevented=!0;this.zc=!1};var vl=!K||kd(9),wl=K&&!jd("9");!$c||jd("528");Zc&&jd("1.9b")||K&&jd("8")||Xc&&jd("9.5")||$c&&jd("528");Zc&&!jd("8")||K&&jd("9");function xl(a,b){ul.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.f=this.state=null;a&&this.init(a,b)}
x(xl,ul);
xl.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(Zc){var f;a:{try{$e(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.f=a;a.defaultPrevented&&this.preventDefault()};
xl.prototype.stopPropagation=function(){xl.A.stopPropagation.call(this);this.f.stopPropagation?this.f.stopPropagation():this.f.cancelBubble=!0};
xl.prototype.preventDefault=function(){xl.A.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,wl)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var yl="closure_listenable_"+(1E6*Math.random()|0),zl=0;function Al(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.bb=!!d;this.gb=e;this.key=++zl;this.La=this.ab=!1}
function Bl(a){a.La=!0;a.listener=null;a.b=null;a.src=null;a.gb=null}
;function Cl(a){this.src=a;this.b={};this.f=0}
function Dl(a,b,c,d,e){var f=b.toString();b=a.b[f];b||(b=a.b[f]=[],a.f++);var h=El(b,c,d,e);-1<h?(a=b[h],a.ab=!1):(a=new Al(c,a.src,f,!!d,e),a.ab=!1,b.push(a));return a}
Cl.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=El(e,b,c,d);return-1<b?(Bl(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.f--),!0):!1};
function Fl(a,b){var c=b.type;c in a.b&&Qa(a.b[c],b)&&(Bl(b),0==a.b[c].length&&(delete a.b[c],a.f--))}
function Gl(a,b,c,d,e){a=a.b[b.toString()];b=-1;a&&(b=El(a,c,d,e));return-1<b?a[b]:null}
function El(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.La&&f.listener==b&&f.bb==!!c&&f.gb==d)return e}return-1}
;var Hl="closure_lm_"+(1E6*Math.random()|0),Il={},Jl=0;
function Kl(a,b,c,d,e){if(da(b)){for(var f=0;f<b.length;f++)Kl(a,b[f],c,d,e);return null}c=Ll(c);if(a&&a[yl])a=a.hb(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=Ml(a);h||(a[Hl]=h=new Cl(a));c=Dl(h,b,c,d,e);if(!c.b){d=Nl();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Ol(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Jl++}a=c}return a}
function Nl(){var a=Pl,b=vl?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Ql(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Ql(a,b[f],c,d,e);else c=Ll(c),a&&a[yl]?a.pb(b,c,d,e):a&&(a=Ml(a))&&(b=Gl(a,b,c,!!d,e))&&Rl(b)}
function Rl(a){if(!fa(a)&&a&&!a.La){var b=a.src;if(b&&b[yl])Fl(b.g,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.bb):b.detachEvent&&b.detachEvent(Ol(c),d);Jl--;(c=Ml(b))?(Fl(c,a),0==c.f&&(c.src=null,b[Hl]=null)):Bl(a)}}}
function Ol(a){return a in Il?Il[a]:Il[a]="on"+a}
function Sl(a,b,c,d){var e=!0;if(a=Ml(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.bb==c&&!f.La&&(f=Tl(f,d),e=e&&!1!==f)}return e}
function Tl(a,b){var c=a.listener,d=a.gb||a.src;a.ab&&Rl(a);return c.call(d,b)}
function Pl(a,b){if(a.La)return!0;if(!vl){var c=b||r("window.event"),d=new xl(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.b&&0<=h;h--){d.currentTarget=c[h];var k=Sl(c[h],f,!0,d),e=e&&k}for(h=0;!d.b&&h<c.length;h++)d.currentTarget=c[h],k=Sl(c[h],f,!1,d),e=e&&k}return e}return Tl(a,new xl(b,this))}
function Ml(a){a=a[Hl];return a instanceof Cl?a:null}
var Ul="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ll(a){if(ga(a))return a;a[Ul]||(a[Ul]=function(b){return a.handleEvent(b)});
return a[Ul]}
;function Vl(){C.call(this);this.g=new Cl(this);this.pa=this;this.ba=null}
x(Vl,C);Vl.prototype[yl]=!0;g=Vl.prototype;g.addEventListener=function(a,b,c,d){Kl(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){Ql(this,a,b,c,d)};
function Wl(a,b){var c,d=a.ba;if(d){c=[];for(var e=1;d;d=d.ba)c.push(d),++e}var d=a.pa,e=b,f=e.type||e;if(u(e))e=new ul(e,d);else if(e instanceof ul)e.target=e.target||d;else{var h=e,e=new ul(f,d);lb(e,h)}var h=!0,k;if(c)for(var m=c.length-1;!e.b&&0<=m;m--)k=e.currentTarget=c[m],h=Xl(k,f,!0,e)&&h;e.b||(k=e.currentTarget=d,h=Xl(k,f,!0,e)&&h,e.b||(h=Xl(k,f,!1,e)&&h));if(c)for(m=0;!e.b&&m<c.length;m++)k=e.currentTarget=c[m],h=Xl(k,f,!1,e)&&h}
g.w=function(){Vl.A.w.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.b){for(var d=a.b[c],e=0;e<d.length;e++)++b,Bl(d[e]);delete a.b[c];a.f--}}this.ba=null};
g.hb=function(a,b,c,d){return Dl(this.g,String(a),b,c,d)};
g.pb=function(a,b,c,d){return this.g.remove(String(a),b,c,d)};
function Xl(a,b,c,d){b=a.g.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.La&&h.bb==c){var k=h.listener,m=h.gb||h.src;h.ab&&Fl(a.g,h);e=!1!==k.call(m,d)&&e}}return e&&0!=d.zc}
;function Yl(a,b){this.f=new qd(a);this.b=b?od:nd}
Yl.prototype.stringify=function(a){return pd(this.f,a)};
Yl.prototype.parse=function(a){return this.b(a)};function Zl(a,b){this.b=0;this.j=void 0;this.h=this.f=this.g=null;this.i=this.l=!1;if(a!=t)try{var c=this;a.call(b,function(a){$l(c,2,a)},function(a){$l(c,3,a)})}catch(d){$l(this,3,d)}}
function am(){this.next=this.context=this.f=this.h=this.b=null;this.g=!1}
am.prototype.reset=function(){this.context=this.f=this.h=this.b=null;this.g=!1};
var bm=new Kb(function(){return new am},function(a){a.reset()},100);
function cm(a,b,c){var d=bm.get();d.h=a;d.f=b;d.context=c;return d}
function dm(a){return new Zl(function(b,c){c(a)})}
Zl.prototype.then=function(a,b,c){return em(this,ga(a)?a:null,ga(b)?b:null,c)};
Zl.prototype.then=Zl.prototype.then;Zl.prototype.$goog_Thenable=!0;Zl.prototype.cancel=function(a){0==this.b&&Pb(function(){var b=new fm(a);gm(this,b)},this)};
function gm(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,h=c.f;h&&(h.g||(d++,h.b==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.b&&1==d?gm(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):hm(c),im(c,e,3,b)))}a.g=null}else $l(a,3,b)}
function jm(a,b){a.f||2!=a.b&&3!=a.b||km(a);a.h?a.h.next=b:a.f=b;a.h=b}
function em(a,b,c,d){var e=cm(null,null,null);e.b=new Zl(function(a,h){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof fm?h(b):a(e)}catch(n){h(n)}}:h});
e.b.g=a;jm(a,e);return e.b}
Zl.prototype.C=function(a){this.b=0;$l(this,2,a)};
Zl.prototype.V=function(a){this.b=0;$l(this,3,a)};
function $l(a,b,c){if(0==a.b){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.C,h=a.V;if(e instanceof Zl)jm(e,cm(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ha(e))try{var m=e.then;if(ga(m)){lm(e,m,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.j=c,a.b=b,a.g=null,km(a),3!=b||c instanceof fm||mm(a,c))}}
function lm(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(m){f(m)}}
function km(a){a.l||(a.l=!0,Pb(a.o,a))}
function hm(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
Zl.prototype.o=function(){for(var a;a=hm(this);)im(this,a,this.b,this.j);this.l=!1};
function im(a,b,c,d){if(3==c&&b.f&&!b.g)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,nm(b,c,d);else try{b.g?b.h.call(b.context):nm(b,c,d)}catch(e){om.call(null,e)}Lb(bm,b)}
function nm(a,b,c){2==b?a.h.call(a.context,c):a.f&&a.f.call(a.context,c)}
function mm(a,b){a.i=!0;Pb(function(){a.i&&om.call(null,b)})}
var om=Hb;function fm(a){pa.call(this,a)}
x(fm,pa);fm.prototype.name="cancel";function pm(a,b){Vl.call(this);this.b=a||1;this.f=b||l;this.h=v(this.le,this);this.i=w()}
x(pm,Vl);g=pm.prototype;g.enabled=!1;g.X=null;function qm(a,b){a.b=b;a.X&&a.enabled?(a.stop(),a.start()):a.X&&a.stop()}
g.le=function(){if(this.enabled){var a=w()-this.i;0<a&&a<.8*this.b?this.X=this.f.setTimeout(this.h,this.b-a):(this.X&&(this.f.clearTimeout(this.X),this.X=null),Wl(this,"tick"),this.enabled&&(this.X=this.f.setTimeout(this.h,this.b),this.i=w()))}};
g.start=function(){this.enabled=!0;this.X||(this.X=this.f.setTimeout(this.h,this.b),this.i=w())};
g.stop=function(){this.enabled=!1;this.X&&(this.f.clearTimeout(this.X),this.X=null)};
g.w=function(){pm.A.w.call(this);this.stop();delete this.f};
function rm(a,b,c){if(ga(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}
;function sm(a,b,c){C.call(this);this.h=null!=c?v(a,c):a;this.g=b;this.f=v(this.Od,this);this.b=[]}
x(sm,C);g=sm.prototype;g.Ma=!1;g.Wa=0;g.ya=null;g.cd=function(a){this.b=arguments;this.ya||this.Wa?this.Ma=!0:tm(this)};
g.stop=function(){this.ya&&(l.clearTimeout(this.ya),this.ya=null,this.Ma=!1,this.b=[])};
g.pause=function(){this.Wa++};
g.resume=function(){this.Wa--;this.Wa||!this.Ma||this.ya||(this.Ma=!1,tm(this))};
g.w=function(){sm.A.w.call(this);this.stop()};
g.Od=function(){this.ya=null;this.Ma&&!this.Wa&&(this.Ma=!1,tm(this))};
function tm(a){a.ya=rm(a.f,a.g);a.h.apply(null,a.b)}
;function um(a){C.call(this);this.f=a;this.b={}}
x(um,C);var vm=[];um.prototype.hb=function(a,b,c,d){da(b)||(b&&(vm[0]=b.toString()),b=vm);for(var e=0;e<b.length;e++){var f=Kl(a,b[e],c||this.handleEvent,d||!1,this.f||this);if(!f)break;this.b[f.key]=f}return this};
um.prototype.pb=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)this.pb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.f||this,c=Ll(c),d=!!d,b=a&&a[yl]?Gl(a.g,String(b),c,d,e):a?(a=Ml(a))?Gl(a,b,c,d,e):null:null,b&&(Rl(b),delete this.b[b.key]);return this};
function wm(a){Ya(a.b,function(a,c){this.b.hasOwnProperty(c)&&Rl(a)},a);
a.b={}}
um.prototype.w=function(){um.A.w.call(this);wm(this)};
um.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function xm(){}
xm.prototype.b=null;function ym(a){var b;(b=a.b)||(b={},zm(a)&&(b[0]=!0,b[1]=!0),b=a.b=b);return b}
;var Am;function Bm(){}
x(Bm,xm);function Cm(a){return(a=zm(a))?new ActiveXObject(a):new XMLHttpRequest}
function zm(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}
Am=new Bm;function Dm(a,b,c,d,e){this.b=a;this.g=c;this.o=d;this.j=e||1;this.i=45E3;this.h=new um(this);this.f=new pm;qm(this.f,250)}
g=Dm.prototype;g.za=null;g.ea=!1;g.Oa=null;g.Rb=null;g.Xa=null;g.Na=null;g.qa=null;g.ta=null;g.Da=null;g.I=null;g.Za=0;g.fa=null;g.sb=null;g.Aa=null;g.Ua=-1;g.Ac=!0;g.va=!1;g.Ib=0;g.mb=null;var Em={},Fm={};g=Dm.prototype;g.setTimeout=function(a){this.i=a};
function Gm(a,b,c){a.Na=1;a.qa=yg(b.clone());a.Da=c;a.l=!0;Hm(a,null)}
function Im(a,b,c,d,e){a.Na=1;a.qa=yg(b.clone());a.Da=null;a.l=c;e&&(a.Ac=!1);Hm(a,d)}
function Hm(a,b){a.Xa=w();Jm(a);a.ta=a.qa.clone();wg(a.ta,"t",a.j);a.Za=0;a.I=a.b.Bb(a.b.Ya()?b:null);0<a.Ib&&(a.mb=new sm(v(a.Fc,a,a.I),a.Ib));a.h.hb(a.I,"readystatechange",a.Yd);var c=a.za?ib(a.za):{};a.Da?(a.sb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.I.send(a.ta,a.sb,a.Da,c)):(a.sb="GET",a.Ac&&!$c&&(c.Connection="close"),a.I.send(a.ta,a.sb,null,c));a.b.da(1)}
g.Yd=function(a){a=a.target;var b=this.mb;b&&3==Km(a)?b.cd():this.Fc(a)};
g.Fc=function(a){try{if(a==this.I)a:{var b=Km(this.I),c=this.I.i,d=this.I.getStatus();if(K&&!kd(10)||$c&&!jd("420+")){if(4>b)break a}else if(3>b||3==b&&!Xc&&!Lm(this.I))break a;this.va||4!=b||7==c||(8==c||0>=d?this.b.da(3):this.b.da(2));Mm(this);var e=this.I.getStatus();this.Ua=e;var f=Lm(this.I);(this.ea=200==e)?(4==b&&Nm(this),this.l?(Om(this,b,f),Xc&&this.ea&&3==b&&(this.h.hb(this.f,"tick",this.Xd),this.f.start())):Pm(this,f),this.ea&&!this.va&&(4==b?this.b.jb(this):(this.ea=!1,Jm(this)))):(this.Aa=
400==e&&0<f.indexOf("Unknown SID")?3:0,Y(),Nm(this),Qm(this))}}catch(h){this.I&&Lm(this.I)}finally{}};
function Om(a,b,c){for(var d=!0;!a.va&&a.Za<c.length;){var e=Rm(a,c);if(e==Fm){4==b&&(a.Aa=4,Y(),d=!1);break}else if(e==Em){a.Aa=4;Y();d=!1;break}else Pm(a,e)}4==b&&0==c.length&&(a.Aa=1,Y(),d=!1);a.ea=a.ea&&d;d||(Nm(a),Qm(a))}
g.Xd=function(){var a=Km(this.I),b=Lm(this.I);this.Za<b.length&&(Mm(this),Om(this,a,b),this.ea&&4!=a&&Jm(this))};
function Rm(a,b){var c=a.Za,d=b.indexOf("\n",c);if(-1==d)return Fm;c=Number(b.substring(c,d));if(isNaN(c))return Em;d+=1;if(d+c>b.length)return Fm;var e=b.substr(d,c);a.Za=d+c;return e}
function Sm(a,b){a.Xa=w();Jm(a);var c=b?window.location.hostname:"";a.ta=a.qa.clone();N(a.ta,"DOMAIN",c);N(a.ta,"t",a.j);try{a.fa=new ActiveXObject("htmlfile")}catch(n){Nm(a);a.Aa=7;Y();Qm(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Ea)h=Ea[h];else if(h in Da)h=Ea[h]=Da[h];else{var k,m=h.charCodeAt(0);if(31<m&&127>m)k=h;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");
k+=m.toString(16).toUpperCase()}h=Ea[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Dc(rb("b/12014412"),d);a.fa.open();a.fa.write(Ab(c));a.fa.close();a.fa.parentWindow.m=v(a.Sd,a);a.fa.parentWindow.d=v(a.uc,a,!0);a.fa.parentWindow.rpcClose=v(a.uc,a,!1);c=a.fa.createElement("DIV");a.fa.parentWindow.document.body.appendChild(c);d=wb(a.ta.toString());d=ub(d);za.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(ta,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(ua,"&lt;")),-1!=
d.indexOf(">")&&(d=d.replace(va,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(wa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(xa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ya,"&#0;")));d=Dc(rb("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=Ab(d);a.b.da(1)}
g.Sd=function(a){Tm(v(this.Rd,this,a),0)};
g.Rd=function(a){this.va||(Mm(this),Pm(this,a),Jm(this))};
g.uc=function(a){Tm(v(this.Qd,this,a),0)};
g.Qd=function(a){this.va||(Nm(this),this.ea=a,this.b.jb(this),this.b.da(4))};
g.cancel=function(){this.va=!0;Nm(this)};
function Jm(a){a.Rb=w()+a.i;Um(a,a.i)}
function Um(a,b){if(null!=a.Oa)throw Error("WatchDog timer not null");a.Oa=Tm(v(a.Ud,a),b)}
function Mm(a){a.Oa&&(l.clearTimeout(a.Oa),a.Oa=null)}
g.Ud=function(){this.Oa=null;var a=w();0<=a-this.Rb?(2!=this.Na&&this.b.da(3),Nm(this),this.Aa=2,Y(),Qm(this)):Um(this,this.Rb-a)};
function Qm(a){a.b.hc()||a.va||a.b.jb(a)}
function Nm(a){Mm(a);D(a.mb);a.mb=null;a.f.stop();wm(a.h);if(a.I){var b=a.I;a.I=null;Vm(b);b.dispose()}a.fa&&(a.fa=null)}
function Pm(a,b){try{a.b.oc(a,b),a.b.da(4)}catch(c){}}
;function Wm(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Xm(a,b,function(e){e?c(!0):l.setTimeout(function(){Wm(a,b,c,d,f)},f)})}}
function Xm(a,b,c){var d=new Image;d.onload=function(){try{Ym(d),c(!0)}catch(a){}};
d.onerror=function(){try{Ym(d),c(!1)}catch(a){}};
d.onabort=function(){try{Ym(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{Ym(d),c(!1)}catch(a){}};
l.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function Ym(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Zm(a){this.b=a;this.f=new Yl(null,!0)}
g=Zm.prototype;g.Gb=null;g.U=null;g.nb=!1;g.Dc=null;g.cb=null;g.Lb=null;g.Hb=null;g.Y=null;g.oa=-1;g.Ta=null;g.Pa=null;g.connect=function(a){this.Hb=a;a=$m(this.b,null,this.Hb);Y();this.Dc=w();var b=this.b.o;null!=b?(this.Ta=b[0],(this.Pa=b[1])?(this.Y=1,an(this)):(this.Y=2,bn(this))):(wg(a,"MODE","init"),this.U=new Dm(this,0,void 0,void 0,void 0),this.U.za=this.Gb,Im(this.U,a,!1,null,!0),this.Y=0)};
function an(a){var b=$m(a.b,a.Pa,"/mail/images/cleardot.gif");yg(b);Wm(b.toString(),5E3,v(a.Zc,a),3,2E3);a.da(1)}
g.Zc=function(a){if(a)this.Y=2,bn(this);else{Y();var b=this.b;b.ca=b.ra.oa;cn(b,9)}a&&this.da(2)};
function bn(a){var b=a.b.C;if(null!=b)Y(),b?(Y(),dn(a.b,a,!1)):(Y(),dn(a.b,a,!0));else if(a.U=new Dm(a,0,void 0,void 0,void 0),a.U.za=a.Gb,b=a.b,b=$m(b,b.Ya()?a.Ta:null,a.Hb),Y(),!K||kd(10))wg(b,"TYPE","xmlhttp"),Im(a.U,b,!1,a.Ta,!1);else{wg(b,"TYPE","html");var c=a.U;a=!!a.Ta;c.Na=3;c.qa=yg(b.clone());Sm(c,a)}}
g.Bb=function(a){return this.b.Bb(a)};
g.hc=function(){return!1};
g.oc=function(a,b){this.oa=a.Ua;if(0==this.Y)if(b){try{var c=this.f.parse(b)}catch(d){c=this.b;c.ca=this.oa;cn(c,2);return}this.Ta=c[0];this.Pa=c[1]}else c=this.b,c.ca=this.oa,cn(c,2);else if(2==this.Y)if(this.nb)Y(),this.Lb=w();else if("11111"==b){if(Y(),this.nb=!0,this.cb=w(),c=this.cb-this.Dc,!K||kd(10)||500>c)this.oa=200,this.U.cancel(),Y(),dn(this.b,this,!0)}else Y(),this.cb=this.Lb=w(),this.nb=!1};
g.jb=function(){this.oa=this.U.Ua;if(this.U.ea)0==this.Y?this.Pa?(this.Y=1,an(this)):(this.Y=2,bn(this)):2==this.Y&&((!K||kd(10)?!this.nb:200>this.Lb-this.cb)?(Y(),dn(this.b,this,!1)):(Y(),dn(this.b,this,!0)));else{0==this.Y?Y():2==this.Y&&Y();var a=this.b;a.ca=this.oa;cn(a,2)}};
g.Ya=function(){return this.b.Ya()};
g.isActive=function(){return this.b.isActive()};
g.da=function(a){this.b.da(a)};function en(a){Vl.call(this);this.headers=new Jc;this.L=a||null;this.f=!1;this.K=this.b=null;this.ja=this.C="";this.i=0;this.l="";this.h=this.aa=this.o=this.W=!1;this.j=0;this.D=null;this.ka="";this.G=this.ha=!1}
x(en,Vl);var fn=/^https?$/i,gn=["POST","PUT"];g=en.prototype;
g.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.C+"; newUri="+a);b=b?b.toUpperCase():"GET";this.C=a;this.l="";this.i=0;this.ja=b;this.W=!1;this.f=!0;this.b=this.L?Cm(this.L):Cm(Am);this.K=this.L?ym(this.L):ym(Am);this.b.onreadystatechange=v(this.nc,this);try{rl(hn(this,"Opening Xhr")),this.aa=!0,this.b.open(b,String(a),!0),this.aa=!1}catch(f){rl(hn(this,"Error opening Xhr: "+f.message));jn(this,f);return}a=c||"";var e=this.headers.clone();
d&&Qc(d,function(a,b){e.set(b,a)});
d=Na(e.ia(),kn);c=l.FormData&&a instanceof l.FormData;!z(gn,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);
this.ka&&(this.b.responseType=this.ka);"withCredentials"in this.b&&this.b.withCredentials!==this.ha&&(this.b.withCredentials=this.ha);try{ln(this),0<this.j&&(this.G=mn(this.b),rl(hn(this,"Will abort after "+this.j+"ms if incomplete, xhr2 "+this.G)),this.G?(this.b.timeout=this.j,this.b.ontimeout=v(this.gc,this)):this.D=rm(this.gc,this.j,this)),rl(hn(this,"Sending request")),this.o=!0,this.b.send(a),this.o=!1}catch(f){rl(hn(this,"Send error: "+f.message)),jn(this,f)}};
function mn(a){return K&&jd(9)&&fa(a.timeout)&&p(a.ontimeout)}
function kn(a){return"content-type"==a.toLowerCase()}
g.gc=function(){"undefined"!=typeof aa&&this.b&&(this.l="Timed out after "+this.j+"ms, aborting",this.i=8,hn(this,this.l),Wl(this,"timeout"),Vm(this,8))};
function jn(a,b){a.f=!1;a.b&&(a.h=!0,a.b.abort(),a.h=!1);a.l=b;a.i=5;nn(a);on(a)}
function nn(a){a.W||(a.W=!0,Wl(a,"complete"),Wl(a,"error"))}
function Vm(a,b){a.b&&a.f&&(hn(a,"Aborting"),a.f=!1,a.h=!0,a.b.abort(),a.h=!1,a.i=b||7,Wl(a,"complete"),Wl(a,"abort"),on(a))}
g.w=function(){this.b&&(this.f&&(this.f=!1,this.h=!0,this.b.abort(),this.h=!1),on(this,!0));en.A.w.call(this)};
g.nc=function(){this.isDisposed()||(this.aa||this.o||this.h?pn(this):this.Gd())};
g.Gd=function(){pn(this)};
function pn(a){if(a.f&&"undefined"!=typeof aa)if(a.K[1]&&4==Km(a)&&2==a.getStatus())hn(a,"Local request error detected and ignored");else if(a.o&&4==Km(a))rm(a.nc,0,a);else if(Wl(a,"readystatechange"),4==Km(a)){hn(a,"Request complete");a.f=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.C).match(vd)[1]||null;if(!f&&l.self&&l.self.location)var h=l.self.location.protocol,
f=h.substr(0,h.length-1);e=!fn.test(f?f.toLowerCase():"")}d=e}if(d)Wl(a,"complete"),Wl(a,"success");else{a.i=6;var k;try{k=2<Km(a)?a.b.statusText:""}catch(m){k=""}a.l=k+" ["+a.getStatus()+"]";nn(a)}}finally{on(a)}}}
function on(a,b){if(a.b){ln(a);var c=a.b,d=a.K[0]?t:null;a.b=null;a.K=null;b||Wl(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function ln(a){a.b&&a.G&&(a.b.ontimeout=null);fa(a.D)&&(l.clearTimeout(a.D),a.D=null)}
g.isActive=function(){return!!this.b};
function Km(a){return a.b?a.b.readyState:0}
g.getStatus=function(){try{return 2<Km(this)?this.b.status:-1}catch(a){return-1}};
function Lm(a){try{return a.b?a.b.responseText:""}catch(b){return""}}
function hn(a,b){return b+" ["+a.ja+" "+a.C+" "+a.getStatus()+"]"}
;function qn(a,b,c){this.j=a||null;this.b=1;this.f=[];this.h=[];this.i=new Yl(null,!0);this.o=b||null;this.C=null!=c?c:null}
function rn(a,b){this.b=a;this.map=b;this.context=null}
g=qn.prototype;g.Ra=null;g.R=null;g.F=null;g.Fb=null;g.eb=null;g.Yb=null;g.fb=null;g.Va=0;g.rd=0;g.M=null;g.sa=null;g.na=null;g.xa=null;g.ra=null;g.rb=null;g.Ia=-1;g.ic=-1;g.ca=-1;g.Sa=0;g.Ha=0;g.wa=8;var sn=new Vl;function tn(a){ul.call(this,"statevent",a)}
x(tn,ul);function un(a,b){ul.call(this,"timingevent",a);this.size=b}
x(un,ul);function vn(a){ul.call(this,"serverreachability",a)}
x(vn,ul);g=qn.prototype;g.connect=function(a,b,c,d,e){Y();this.Fb=b;this.Ra=c||{};d&&p(e)&&(this.Ra.OSID=d,this.Ra.OAID=e);this.ra=new Zm(this);this.ra.Gb=null;this.ra.f=this.i;this.ra.connect(a)};
function wn(a){xn(a);if(3==a.b){var b=a.Va++,c=a.eb.clone();N(c,"SID",a.g);N(c,"RID",b);N(c,"TYPE","terminate");yn(a,c);b=new Dm(a,0,a.g,b,void 0);b.Na=2;b.qa=yg(c.clone());(new Image).src=b.qa;b.Xa=w();Jm(b)}zn(a)}
function xn(a){if(a.ra){var b=a.ra;b.U&&(b.U.cancel(),b.U=null);b.oa=-1;a.ra=null}a.F&&(a.F.cancel(),a.F=null);a.na&&(l.clearTimeout(a.na),a.na=null);An(a);a.R&&(a.R.cancel(),a.R=null);a.sa&&(l.clearTimeout(a.sa),a.sa=null)}
function Bn(a,b){if(0==a.b)throw Error("Invalid operation: sending map when state is closed");a.f.push(new rn(a.rd++,b));2!=a.b&&3!=a.b||Cn(a)}
g.hc=function(){return 0==this.b};
function Cn(a){a.R||a.sa||(a.sa=Tm(v(a.tc,a),0),a.Sa=0)}
g.tc=function(a){this.sa=null;Dn(this,a)};
function Dn(a,b){if(1==a.b){if(!b){a.Va=Math.floor(1E5*Math.random());var c=a.Va++,d=new Dm(a,0,"",c,void 0);d.za=null;var e=En(a),f=a.eb.clone();N(f,"RID",c);a.j&&N(f,"CVER",a.j);yn(a,f);Gm(d,f,e);a.R=d;a.b=2}}else 3==a.b&&(b?Fn(a,b):0!=a.f.length&&(a.R||Fn(a)))}
function Fn(a,b){var c,d;b?6<a.wa?(a.f=a.h.concat(a.f),a.h.length=0,c=a.Va-1,d=En(a)):(c=b.o,d=b.Da):(c=a.Va++,d=En(a));var e=a.eb.clone();N(e,"SID",a.g);N(e,"RID",c);N(e,"AID",a.Ia);yn(a,e);c=new Dm(a,0,a.g,c,a.Sa+1);c.za=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.R=c;Gm(c,e,d)}
function yn(a,b){if(a.M){var c=a.M.ec(a);c&&Ya(c,function(a,c){N(b,c,a)})}}
function En(a){var b=Math.min(a.f.length,1E3),c=["count="+b],d;6<a.wa&&0<b?(d=a.f[0].b,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.f[e].b,h=a.f[e].map,f=6>=a.wa?e:f-d;try{Qc(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.h=a.h.concat(a.f.splice(0,b));
return c.join("&")}
function Gn(a){a.F||a.na||(a.l=1,a.na=Tm(v(a.sc,a),0),a.Ha=0)}
function Hn(a){if(a.F||a.na||3<=a.Ha)return!1;a.l++;a.na=Tm(v(a.sc,a),In(a,a.Ha));a.Ha++;return!0}
g.sc=function(){this.na=null;this.F=new Dm(this,0,this.g,"rpc",this.l);this.F.za=null;this.F.Ib=0;var a=this.Yb.clone();N(a,"RID","rpc");N(a,"SID",this.g);N(a,"CI",this.rb?"0":"1");N(a,"AID",this.Ia);yn(this,a);if(!K||kd(10))N(a,"TYPE","xmlhttp"),Im(this.F,a,!0,this.fb,!1);else{N(a,"TYPE","html");var b=this.F,c=!!this.fb;b.Na=3;b.qa=yg(a.clone());Sm(b,c)}};
function dn(a,b,c){a.rb=c;a.ca=b.oa;a.bd(1,0);a.eb=$m(a,null,a.Fb);Cn(a)}
g.oc=function(a,b){if(0!=this.b&&(this.F==a||this.R==a))if(this.ca=a.Ua,this.R==a&&3==this.b)if(7<this.wa){var c;try{c=this.i.parse(b)}catch(f){c=null}if(da(c)&&3==c.length)if(0==c[0])a:{if(!this.na){if(this.F)if(this.F.Xa+3E3<this.R.Xa)An(this),this.F.cancel(),this.F=null;else break a;Hn(this);Y()}}else this.ic=c[1],0<this.ic-this.Ia&&37500>c[2]&&this.rb&&0==this.Ha&&!this.xa&&(this.xa=Tm(v(this.sd,this),6E3));else cn(this,11)}else"y2f%"!=b&&cn(this,11);else if(this.F==a&&An(this),!/^[\s\xa0]*$/.test(b)){c=
this.i.parse(b);da(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ia=e[0];e=e[1];2==this.b?"c"==e[0]?(this.g=e[1],this.fb=e[2],e=e[3],null!=e?this.wa=e:this.wa=6,this.b=3,this.M&&this.M.cc(this),this.Yb=$m(this,this.Ya()?this.fb:null,this.Fb),Gn(this)):"stop"==e[0]&&cn(this,7):3==this.b&&("stop"==e[0]?cn(this,7):"noop"!=e[0]&&this.M&&this.M.bc(this,e),this.Ha=0)}}};
g.sd=function(){null!=this.xa&&(this.xa=null,this.F.cancel(),this.F=null,Hn(this),Y())};
function An(a){null!=a.xa&&(l.clearTimeout(a.xa),a.xa=null)}
g.jb=function(a){var b;if(this.F==a)An(this),this.F=null,b=2;else if(this.R==a)this.R=null,b=1;else return;this.ca=a.Ua;if(0!=this.b)if(a.ea)1==b?(w(),Wl(sn,new un(sn,a.Da?a.Da.length:0)),Cn(this),this.h.length=0):Gn(this);else{var c=a.Aa,d;if(!(d=3==c||7==c||0==c&&0<this.ca)){if(d=1==b)this.R||this.sa||1==this.b||2<=this.Sa?d=!1:(this.sa=Tm(v(this.tc,this,a),In(this,this.Sa)),this.Sa++,d=!0);d=!(d||2==b&&Hn(this))}if(d)switch(c){case 1:cn(this,5);break;case 4:cn(this,10);break;case 3:cn(this,6);
break;case 7:cn(this,12);break;default:cn(this,2)}}};
function In(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.bd=function(a){if(!z(arguments,this.b))throw Error("Unexpected channel state: "+this.b);};
function cn(a,b){if(2==b||9==b){var c=null;a.M&&(c=null);var d=v(a.ke,a);c||(c=new ig("//www.google.com/images/cleardot.gif"),yg(c));Xm(c.toString(),1E4,d)}else Y();Jn(a,b)}
g.ke=function(a){a?Y():(Y(),Jn(this,8))};
function Jn(a,b){a.b=0;a.M&&a.M.ac(a,b);zn(a);xn(a)}
function zn(a){a.b=0;a.ca=-1;if(a.M)if(0==a.h.length&&0==a.f.length)a.M.zb(a);else{var b=Ta(a.h),c=Ta(a.f);a.h.length=0;a.f.length=0;a.M.zb(a,b,c)}}
function $m(a,b,c){var d=zg(c);if(""!=d.f)b&&kg(d,b+"."+d.f),lg(d,d.j);else var e=window.location,d=Ag(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.Ra&&Ya(a.Ra,function(a,b){N(d,b,a)});
N(d,"VER",a.wa);yn(a,d);return d}
g.Bb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new en;a.ha=!1;return a};
g.isActive=function(){return!!this.M&&this.M.isActive(this)};
function Tm(a,b){if(!ga(a))throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},b)}
g.da=function(){Wl(sn,new vn(sn))};
function Y(){Wl(sn,new tn(sn))}
g.Ya=function(){return!(!K||kd(10))};
function Kn(){}
g=Kn.prototype;g.cc=function(){};
g.bc=function(){};
g.ac=function(){};
g.zb=function(){};
g.ec=function(){return{}};
g.isActive=function(){return!0};function Ln(a,b){pm.call(this);this.l=0;if(ga(a))b&&(a=v(a,b));else if(a&&ga(a.handleEvent))a=v(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a;Kl(this,"tick",v(this.j,this));Mn(this)}
x(Ln,pm);Ln.prototype.j=function(){if(500<this.b){var a=this.b;24E4>2*a&&(a*=2);qm(this,a)}this.o()};
Ln.prototype.start=function(){Ln.A.start.call(this);this.l=w()+this.b};
Ln.prototype.stop=function(){this.l=0;Ln.A.stop.call(this)};
function Mn(a){a.stop();qm(a,5E3+2E4*Math.random())}
;function Nn(a,b){this.D=a;this.l=b;this.g=new E;this.f=new Ln(this.qe,this);this.b=null;this.V=!1;this.i=null;this.C="";this.o=this.h=0;this.j=[]}
x(Nn,Kn);g=Nn.prototype;g.subscribe=function(a,b,c){return this.g.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.g.unsubscribe(a,b,c)};
g.ga=function(a){return this.g.ga(a)};
g.u=function(a,b){return this.g.u.apply(this.g,arguments)};
g.dispose=function(){this.V||(this.V=!0,this.g.clear(),On(this),D(this.g))};
g.isDisposed=function(){return this.V};
function Pn(a){return{firstTestResults:[""],secondTestResults:!a.b.rb,sessionId:a.b.g,arrayId:a.b.Ia}}
g.connect=function(a,b,c){if(!this.b||2!=this.b.b){this.C="";this.f.stop();this.i=a||null;this.h=b||0;a=this.D+"/test";b=this.D+"/bind";var d=new qn("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.b;e&&(e.M=null);d.M=this;this.b=d;e?this.b.connect(a,b,this.l,e.g,e.Ia):c?this.b.connect(a,b,this.l,c.sessionId,c.arrayId):this.b.connect(a,b,this.l)}};
function On(a,b){a.o=b||0;a.f.stop();a.b&&(3==a.b.b&&Dn(a.b),wn(a.b));a.o=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&lb(c,b);this.f.enabled||2==(this.b?this.b.b:0)?this.j.push(c):Qn(this)&&Bn(this.b,c)};
g.cc=function(){Mn(this.f);this.i=null;this.h=0;if(this.j.length){var a=this.j;this.j=[];for(var b=0,c=a.length;b<c;++b)Bn(this.b,a[b])}this.u("handlerOpened")};
g.ac=function(a,b){var c=2==b&&401==this.b.ca;if(4!=b&&!c){if(6==b||410==this.b.ca)c=this.f,c.stop(),qm(c,500);this.f.start()}this.u("handlerError",b)};
g.zb=function(a,b,c){if(!this.f.enabled)this.u("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.j.push(d)}};
g.ec=function(){var a={v:2};this.C&&(a.gsessionid=this.C);0!=this.h&&(a.ui=""+this.h);0!=this.o&&(a.ui=""+this.o);this.i&&lb(a,this.i);return a};
g.bc=function(a,b){"S"==b[0]?this.C=b[1]:"gracefulReconnect"==b[0]?(Mn(this.f),this.f.start(),wn(this.b)):this.u("handlerMessage",new sl(b[0],b[1]))};
function Qn(a){return!!a.b&&3==a.b.b}
function Rn(a,b){(a.l.loungeIdToken=b)||a.f.stop()}
g.qe=function(){this.f.stop();var a=this.b,b=0;a.F&&b++;a.R&&b++;0!=b?this.f.start():this.connect(this.i,this.h)};function Sn(a){this.index=-1;this.videoId=this.f="";this.volume=this.b=-1;this.l=!1;this.audioTrackId=null;this.i=this.g=0;this.h=null;this.reset(a)}
function Tn(a){a.audioTrackId=null;a.h=null;a.b=-1;a.g=0;a.i=w()}
Sn.prototype.reset=function(a){this.f="";this.index=-1;this.videoId="";Tn(this);this.volume=-1;this.l=!1;a&&(this.index=a.index,this.f=a.listId,this.videoId=a.videoId,this.b=a.playerState,this.volume=a.volume,this.l=a.muted,this.audioTrackId=a.audioTrackId,this.h=a.trackData,this.g=a.playerTime,this.i=a.playerTimeAt)};
function Un(a){switch(a.b){case 1:return(w()-a.i)/1E3+a.g;case -1E3:return 0}return a.g}
function Vn(a){var b={};b.index=a.index;b.listId=a.f;b.videoId=a.videoId;b.playerState=a.b;b.volume=a.volume;b.muted=a.l;b.audioTrackId=a.audioTrackId;b.trackData=jb(a.h);b.playerTime=a.g;b.playerTimeAt=a.i;return b}
Sn.prototype.clone=function(){return new Sn(Vn(this))};function Z(a,b,c){V.call(this);this.h=NaN;this.K=!1;this.C=this.o=this.D=this.G=NaN;this.L=[];this.g=this.B=this.b=null;this.pa=a;this.L.push(M(window,"beforeunload",v(this.hd,this)));this.f=[];this.B=new Sn;this.aa=b.id;this.b=Wn(this,c);this.b.subscribe("handlerOpened",this.wd,this);this.b.subscribe("handlerClosed",this.td,this);this.b.subscribe("handlerError",this.ud,this);this.b.subscribe("handlerMessage",this.vd,this);Rn(this.b,b.token);this.subscribe("remoteQueueChange",function(){var a=this.B.videoId;
gk()&&T("yt-remote-session-video-id",a)},this)}
x(Z,V);g=Z.prototype;g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);var h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.B.f=c);this.B.videoId=d;this.B.index=e||0;this.B.state=3;c=this.B;c.g=f;c.i=w();Xn("Connecting with setPlaylist and params: "+L(h));this.b.connect({method:"setPlaylist",params:L(h)},a,kk())}else Xn("Connecting without params"),this.b.connect({},a,kk());Yn(this)};
g.dispose=function(){this.isDisposed()||(this.u("beforeDispose"),Zn(this,3));Z.A.dispose.call(this)};
g.w=function(){$n(this);ao(this);bo(this);I(this.o);this.o=NaN;I(this.C);this.C=NaN;this.g=null;Ie(this.L);this.L.length=0;this.b.dispose();Z.A.w.call(this);this.f=this.B=this.b=null};
function Xn(a){Cj("conn",a)}
g.hd=function(){this.i(2)};
function Wn(a,b){return new Nn(Oj(a.pa,"/bc",void 0,!1),b)}
function Zn(a,b){a.u("proxyStateChange",b)}
function Yn(a){a.h=G(v(function(){Xn("Connecting timeout");this.i(1)},a),2E4)}
function $n(a){I(a.h);a.h=NaN}
function bo(a){I(a.G);a.G=NaN}
function co(a){ao(a);a.D=G(v(function(){eo(this,"getNowPlaying")},a),2E4)}
function ao(a){I(a.D);a.D=NaN}
g.wd=function(){Xn("Channel opened");this.K&&(this.K=!1,bo(this),this.G=G(v(function(){Xn("Timing out waiting for a screen.");this.i(1)},this),15E3));
ok(Pn(this.b),this.aa)};
g.td=function(){Xn("Channel closed");isNaN(this.h)?pk(!0):pk();this.dispose()};
g.ud=function(a){pk();isNaN(this.j())?(Xn("Channel error: "+a+" without reconnection"),this.dispose()):(this.K=!0,Xn("Channel error: "+a+" with reconnection in "+this.j()+" ms"),Zn(this,2))};
function fo(a,b){b&&($n(a),bo(a));b==(Qn(a.b)&&isNaN(a.h))?b&&(Zn(a,1),eo(a,"getSubtitlesTrack")):b?(a.W()&&a.B.reset(),Zn(a,1),eo(a,"getNowPlaying"),go(a)):a.i(1)}
function ho(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.B.videoId&&(gb(b.params)?a.B.h=null:a.B.h=b.params,a.u("remotePlayerChange"))}
function io(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.B.f=b.params.listId||a.B.f;var e=a.B,f=e.videoId;e.videoId=c;e.index=d;c!=f&&Tn(e);a.u("remoteQueueChange")}
function jo(a,b){b.params=b.params||{};io(a,b);ko(a,b)}
function ko(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.B;d.g=isNaN(c)?0:c;d.i=w();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.B.b&&(c=-1E3);a.B.b=c;1==a.B.b?co(a):ao(a);a.u("remotePlayerChange")}
function lo(a,b){var c="true"==b.params.muted;a.B.volume=parseInt(b.params.volume,10);a.B.l=c;a.u("remotePlayerChange")}
g.vd=function(a){a.params?Xn("Received: action="+a.action+", params="+L(a.params)):Xn("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=nd(a.params.devices);this.f=Ka(a,function(a){return new bk(a)});
a=!!Na(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
fo(this,a);break;case "loungeScreenConnected":fo(this,!0);break;case "loungeScreenDisconnected":Ra(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
fo(this,!1);break;case "remoteConnected":var b=new bk(nd(a.params.device));Na(this.f,function(a){return a.equals(b)})||Pa(this.f,b);
break;case "remoteDisconnected":b=new bk(nd(a.params.device));Ra(this.f,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":io(this,a);break;case "nowPlaying":jo(this,a);break;case "onStateChange":ko(this,a);break;case "onVolumeChanged":lo(this,a);break;case "onSubtitlesTrackChanged":ho(this,a);break;default:Xn("Unrecognized action: "+a.action)}};
g.ae=function(){if(this.g){var a=this.g;this.g=null;this.B.videoId!=a&&eo(this,"getNowPlaying")}};
Z.prototype.subscribe=Z.prototype.subscribe;Z.prototype.unsubscribeByKey=Z.prototype.ga;Z.prototype.ha=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.j())?Qn(this.b)&&isNaN(this.h)&&(a=1):a=2);return a};
Z.prototype.getProxyState=Z.prototype.ha;Z.prototype.i=function(a){Xn("Disconnecting with "+a);$n(this);this.u("beforeDisconnect",a);1==a&&pk();On(this.b,a);this.dispose()};
Z.prototype.disconnect=Z.prototype.i;Z.prototype.ba=function(){var a=this.B;if(this.g){var b=a=this.B.clone(),c=this.g,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&Tn(b)}return Vn(a)};
Z.prototype.getPlayerContextData=Z.prototype.ba;Z.prototype.ka=function(a){var b=new Sn(a);b.videoId&&b.videoId!=this.B.videoId&&(this.g=b.videoId,I(this.o),this.o=G(v(this.ae,this),5E3));var c=[];this.B.f==b.f&&this.B.videoId==b.videoId&&this.B.index==b.index||c.push("remoteQueueChange");this.B.b==b.b&&this.B.volume==b.volume&&this.B.l==b.l&&Un(this.B)==Un(b)&&L(this.B.h)==L(b.h)||c.push("remotePlayerChange");this.B.reset(a);y(c,function(a){this.u(a)},this)};
Z.prototype.setPlayerContextData=Z.prototype.ka;Z.prototype.W=function(){var a=this.b.l.id,b=Na(this.f,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Z.prototype.getOtherConnectedRemoteId=Z.prototype.W;Z.prototype.j=function(){var a=this.b;return a.f.enabled?a.f.l-w():NaN};
Z.prototype.getReconnectTimeout=Z.prototype.j;Z.prototype.Fa=function(){if(!isNaN(this.j())){var a=this.b.f;a.enabled&&(a.stop(),a.start(),a.j())}};
Z.prototype.reconnect=Z.prototype.Fa;function go(a){I(a.C);a.C=G(v(a.i,a,1),864E5)}
function eo(a,b,c){c?Xn("Sending: action="+b+", params="+L(c)):Xn("Sending: action="+b);a.b.sendMessage(b,c)}
Z.prototype.ja=function(a,b){eo(this,a,b);go(this)};
Z.prototype.sendMessage=Z.prototype.ja;function mo(a){Vj.call(this,"ScreenServiceProxy");this.P=a;this.b=[];this.b.push(this.P.$_s("screenChange",v(this.ue,this)));this.b.push(this.P.$_s("onlineScreenChange",v(this.Cd,this)))}
x(mo,Vj);g=mo.prototype;g.S=function(a){return this.P.$_gs(a)};
g.contains=function(a){return!!this.P.$_c(a)};
g.get=function(a){return this.P.$_g(a)};
g.start=function(){this.P.$_st()};
g.tb=function(a,b,c){this.P.$_a(a,b,c)};
g.remove=function(a,b,c){this.P.$_r(a,b,c)};
g.qb=function(a,b,c,d){this.P.$_un(a,b,c,d)};
g.w=function(){for(var a=0,b=this.b.length;a<b;++a)this.P.$_ubk(this.b[a]);this.b.length=0;this.P=null;mo.A.w.call(this)};
g.ue=function(){this.u("screenChange")};
g.Cd=function(){this.u("onlineScreenChange")};
W.prototype.$_st=W.prototype.start;W.prototype.$_gspc=W.prototype.ve;W.prototype.$_gsppc=W.prototype.Hc;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.tb;W.prototype.$_un=W.prototype.qb;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.S;W.prototype.$_gos=W.prototype.Gc;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.ga;function no(){var a={device:"Desktop",app:"youtube-desktop"};$i&&Zi();dk();oo||(oo=new Nj,qk()&&(oo.b="/api/loungedev"));po||(po=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",po,void 0));qo();var b=ro();if(!b){var c=new W(oo);q("yt.mdx.remote.screenService_",c,void 0);b=ro();Yk(c,function(a){a?so()&&ql(so(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){J("yt-remote-receiver-availability-change")})},!(!a||!a.loadCastApiSetupScript))}if(a&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",
!0,void 0);
to("Initializing: "+L(a));uo.push(lc("yt-remote-cast2-availability-change",function(){J("yt-remote-receiver-availability-change")}));
uo.push(lc("yt-remote-cast2-receiver-selected",function(){vo(null);J("yt-remote-auto-connect","cast-selector-receiver")}));
uo.push(lc("yt-remote-cast2-session-change",wo));uo.push(lc("yt-remote-connection-change",function(a){a?ql(so(),"YouTube TV"):xo()||(ql(null,null),ml())}));
var d=yo();a.isAuto&&(d.id+="#dial");d.name=a.device;d.app=a.app;to(" -- with channel params: "+L(d));zo(d);b.start();so()||Ao()}}
function Bo(){nc(uo);uo.length=0;D(Co);Co=null;po&&(y(po,function(a){a(null)}),po.length=0,po=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
oo=null}
function Do(){if(kl()){var a=[];if(U("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||Eo())a.push({key:"cast-selector-receiver",name:Fo()}),q("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:Go()}
function Go(){var a;a=ro().P.$_gos();var b=Ho();b&&Eo()&&(Tj(a,b)||a.push(b));return Sj(a)}
function Io(){if(kl()){var a=ll();return a?{key:"cast-selector-receiver",name:a}:null}return Jo()}
function Jo(){var a=Go(),b=Ho();b||(b=xo());return Na(a,function(a){return b&&Gj(b,a.key)?!0:!1})}
function Fo(){if(kl())return ll();var a=Ho();return a?a.name:null}
function Ho(){var a=so();if(!a)return null;var b=ro().S();return Uj(b,a)}
function wo(a){to("remote.onCastSessionChange_: "+Kj(a));if(a){var b=Ho();b&&b.id==a.id?ql(b.id,"YouTube TV"):(b&&Ko(),Lo(a,1))}else Ko()}
function Mo(a,b){to("Connecting to: "+L(a));if("cast-selector-receiver"==a.key)vo(b||null),pl(b||null);else{Ko();vo(b||null);var c=ro().S();(c=Uj(c,a.key))?Lo(c,1):G(function(){No(null)},0)}}
function Ko(){ol()?gl().stopSession():dl("stopSession called before API ready.");var a=Eo();a?a.disconnect(1):(oc("yt-remote-before-disconnect",1),oc("yt-remote-connection-change",!1));No(null)}
function to(a){Cj("remote",a)}
function ro(){if(!Co){var a=r("yt.mdx.remote.screenService_");Co=a?new mo(a):null}return Co}
function so(){return r("yt.mdx.remote.currentScreenId_")}
function Oo(a){q("yt.mdx.remote.currentScreenId_",a,void 0)}
function vo(a){q("yt.mdx.remote.connectData_",a,void 0)}
function Eo(){return r("yt.mdx.remote.connection_")}
function No(a){var b=Eo();vo(null);a?Eo():Oo("");q("yt.mdx.remote.connection_",a,void 0);po&&(y(po,function(b){b(a)}),po.length=0);
b&&!a?oc("yt-remote-connection-change",!1):!b&&a&&J("yt-remote-connection-change",!0)}
function xo(){var a=gk();if(!a)return null;var b=ro().S();return Uj(b,a)}
function Lo(a,b){so();Oo(a.id);var c=new Z(oo,a,yo());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){oc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){Eo()&&(Eo(),No(null))});
No(c)}
function Ao(){var a=xo();a?(to("Resume connection to: "+Kj(a)),Lo(a,0)):(pk(),ml(),to("Skipping connecting because no session screen found."))}
var oo=null,po=null,Co=null;function qo(){var a=yo();if(gb(a)){var a=fk(),b=U("yt-remote-session-name")||"",c=U("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};q("yt.mdx.remote.channelParams_",a,void 0)}}
function yo(){return r("yt.mdx.remote.channelParams_")||{}}
function zo(a){a?(T("yt-remote-session-app",a.app),T("yt-remote-session-name",a.name)):(bj("yt-remote-session-app"),bj("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var uo=[];var Po=null,Qo=[];function Ro(){So();if(Io()){var a=Po;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function To(a){"cast-selector-receiver"==a?nl():Uo(a)}
function Uo(a){var b=Do();if(a=Rj(b,a)){var c=Po;Mo(a,{listId:c.getVideoData().list,videoId:c.getVideoData().video_id,currentTime:c.getCurrentTime()});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function So(){var a=Po;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(Do(),Io())}
;var Vo=null,Wo=[];function Xo(a){return{externalChannelId:a.externalChannelId,qd:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Yo(a){Zo(Xo(a))}
function Zo(a){li()?(Q(Zh,new Th(a.externalChannelId,a.qd?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Cd({event:"subscribe",source:a.source}))&&Lg(a)):$o(a)}
function $o(a){ki(function(b){b.subscription_ajax&&Zo(a)},null)}
function ap(a){a=Xo(a);Q(di,new Vh(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Cd({event:"unsubscribe",source:a.source}))&&Lg(a)}
function bp(a){Vo&&Vo.channelSubscribed(a.b,a.subscriptionId)}
function cp(a){Vo&&Vo.channelUnsubscribed(a.b)}
;function dp(a){C.call(this);this.f=a;this.f.subscribe("command",this.yc,this);this.g={};this.h=!1}
x(dp,C);g=dp.prototype;g.start=function(){this.h||this.isDisposed()||(this.h=!0,ep(this.f,"RECEIVING"))};
g.yc=function(a,b){if(this.h&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.g))){var d=v(this.ce,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&fp(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=gp(a,b||{}),c=this.b[a].apply(this.b,c),(c=hp(a,c))&&this.h&&!this.isDisposed()&&ep(this.f,a,c))}}};
g.ce=function(a,b){this.h&&!this.isDisposed()&&ep(this.f,a,this.Cb(a,b))};
g.Cb=function(a,b){if(null!=b)return{value:b}};
function fp(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
g.w=function(){this.f.unsubscribe("command",this.yc,this);this.f=null;for(var a in this.g)fp(this,a);dp.A.w.call(this)};function ip(a,b){dp.call(this,b);this.b=a;this.start()}
x(ip,dp);ip.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
ip.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function gp(a,b){switch(a){case "loadVideoById":return b=gj(b),ij(b),[b];case "cueVideoById":return b=gj(b),ij(b),[b];case "loadVideoByPlayerVars":return ij(b),[b];case "cueVideoByPlayerVars":return ij(b),[b];case "loadPlaylist":return b=hj(b),ij(b),[b];case "cuePlaylist":return b=hj(b),ij(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function hp(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ip.prototype.Cb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ip.A.Cb.call(this,a,b)};
ip.prototype.w=function(){ip.A.w.call(this);delete this.b};function jp(){var a=this.f=new Ki,b=v(this.Zd,this);a.f=b;a.g=null;this.f.channel="widget";if(a=F("WIDGET_ID"))this.f.h=a;this.h=[];this.l=!1;this.i={}}
g=jp.prototype;g.Zd=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,kp(this,c)),this.i[c]=!0)}else this.Kc(a,b)};
g.Kc=function(){};
function kp(a,b){return v(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.dd=function(){this.l=!0;this.sendMessage("initialDelivery",this.Db());this.sendMessage("onReady");y(this.h,this.Lc,this);this.h=[]};
g.Db=function(){return null};
function lp(a,b){a.sendMessage("infoDelivery",b)}
g.Lc=function(a){this.l?this.f.sendMessage(a):this.h.push(a)};
g.sendMessage=function(a,b){this.Lc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.f=null};function mp(a){jp.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Hd,this));this.addEventListener("onVideoProgress",v(this.ge,this));this.addEventListener("onVolumeChange",v(this.he,this));this.addEventListener("onApiChange",v(this.be,this));this.addEventListener("onPlaybackQualityChange",v(this.de,this));this.addEventListener("onPlaybackRateChange",v(this.ee,this));this.addEventListener("onStateChange",v(this.fe,this))}
x(mp,jp);g=mp.prototype;g.Kc=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&ej(a)){var c;c=b;if(ha(c[0])&&!da(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=gj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=fj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=hj.apply(window,c)}c=d}ij(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);ej(a)&&lp(this,this.Db())}};
g.Hd=function(){var a=v(this.dd,this);this.f.b=a};
g.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
g.Db=function(){if(!this.b)return null;var a=this.b.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.b[e]();b[f]=k}catch(m){}}}b.videoData=this.b.getVideoData();return b};
g.fe=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());
this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());lp(this,a)};
g.de=function(a){lp(this,{playbackQuality:a})};
g.ee=function(a){lp(this,{playbackRate:a})};
g.be=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var m=f[h],n=this.b.getOption(e,m);b[e][m]=n}}this.sendMessage("apiInfoDelivery",b)};
g.he=function(){lp(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
g.ge=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());lp(this,a)};
g.dispose=function(){mp.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function np(a,b,c){V.call(this);this.b=a;this.f=b;this.g=c}
x(np,V);function ep(a,b,c){if(!a.isDisposed()){var d=a.b,e=a.f;a=a.g;d.isDisposed()||e!=d.b||(b={id:a,command:b},c&&(b.data=c),d.b.postMessage(L(b),d.g))}}
np.prototype.w=function(){this.f=this.b=null;np.A.w.call(this)};function op(a,b,c){C.call(this);this.b=a;this.g=c;this.h=M(window,"message",v(this.i,this));this.f=new np(this,a,b);Vb(this,oa(D,this.f))}
x(op,C);op.prototype.i=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,u(c))){try{c=nd(c)}catch(d){return}c.command&&(a=this.f,b=c.command,c=c.data,a.isDisposed()||a.u("command",b,c))}};
op.prototype.w=function(){Ie(this.h);this.b=null;op.A.w.call(this)};var pp=!1;function qp(a){if(a=a.match(/[\d]+/g))a.length=3}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(pp=!0,a.description)){qp(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){pp=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],pp=!!a&&a.enabledPlugin)){qp(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");pp=!0;qp(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");pp=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),pp=!0,qp(b.GetVariable("$version"))}catch(c){}})();function rp(a){return(a=a.exec(mb))?a[1]:""}
(function(){if(lf)return rp(/Firefox\/([0-9.]+)/);if(K||Yc||Xc)return hd;if(pf)return rp(/Chrome\/([0-9.]+)/);if(qf&&!(Wc()||A("iPad")||A("iPod")))return rp(/Version\/([0-9.]+)/);if(mf||nf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(mb);if(a)return a[1]+"."+a[2]}else if(of)return(a=rp(/Android\s+([0-9.]+)/))?a:rp(/Version\/([0-9.]+)/);return""})();function sp(){var a={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};return new Zl(function(b,c){a.Z=function(a){Jd(a)?b(a):c(a)};
a.onError=c;a.Ca=c;Od("//googleads.g.doubleclick.net/pagead/id",a)})}
;var tp=null;function up(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return vp(""),"";a=JSON.parse(a.substr(4)).id;vp(a);return a}
function wp(){G(function(){tp=null},3E5)}
function vp(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function xp(){}
;function yp(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&Lg(c)}}
;function zp(a){O.call(this,1,arguments);this.yb=a}
x(zp,O);function Ap(a,b){O.call(this,2,arguments);this.f=a;this.b=b}
x(Ap,O);function Bp(a,b,c,d){O.call(this,1,arguments);this.b=b;this.g=c||null;this.f=d||null}
x(Bp,O);function Cp(a,b){O.call(this,1,arguments);this.f=a;this.b=b||null}
x(Cp,O);function Dp(a){O.call(this,1,arguments)}
x(Dp,O);var Ep=new P("ypc-core-load",zp),Fp=new P("ypc-guide-sync-success",Ap),Gp=new P("ypc-purchase-success",Bp),Hp=new P("ypc-subscription-cancel",Dp),Ip=new P("ypc-subscription-cancel-success",Cp),Jp=new P("ypc-init-subscription",Dp);var Kp=!1,Lp=[],Mp=[];function Np(a){a.b?Kp?Q(ci,a):Q(Ep,new zp(function(){Q(Jp,new Dp(a.b))})):Op(a.f,a.h,a.g,a.source)}
function Pp(a){a.b?Kp?Q(hi,a):Q(Ep,new zp(function(){Q(Hp,new Dp(a.b))})):Qp(a.f,a.subscriptionId,a.h,a.g,a.source)}
function Rp(a){Sp(Ta(a.b))}
function Tp(a){Up(Ta(a.b))}
function Vp(a){Wp(a.b,a.isEnabled,null)}
function Xp(a,b,c,d){Wp(a,b,c,d)}
function Yp(a){var b=a.f,c=a.b.subscriptionId;b&&c&&Q(bi,new Uh(b,c,a.b.channelInfo))}
function Zp(a){var b=a.b;Ya(a.f,function(a,d){Q(bi,new Uh(d,a,b[d]))})}
function $p(a){Q(gi,new Rh(a.f.itemId));a.b&&a.b.length&&(aq(a.b,gi),aq(a.b,ii))}
function Op(a,b,c,d){var e=new Rh(a);Q($h,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=F("PLAYBACK_ID"))&&(c.plid=d);(d=F("EVENT_ID"))&&(c.ei=d);b&&bq(b,c);Od("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Qb:f,J:c,Z:function(b,c){var d=c.response;Q(bi,new Uh(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&J("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&yp(d.actions)},
Mb:function(){Q(ai,e)}})}
function Qp(a,b,c,d,e){var f=new Rh(a);Q(ei,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=F("PLAYBACK_ID"))&&(d.plid=a);(a=F("EVENT_ID"))&&(d.ei=a);c&&bq(c,d);Od("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Qb:h,J:d,Z:function(a,b){var c=b.response;Q(gi,f);c.actions&&yp(c.actions)},
Mb:function(){Q(fi,f)}})}
function Wp(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Od("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",J:e,onError:function(){d&&d()}})}}
function Sp(a){if(a.length){var b=Va(a,0,40);Q("subscription-batch-subscribe-loading");aq(b,$h);var c={};c.a=b.join(",");var d=function(){Q("subscription-batch-subscribe-loaded");aq(b,ai)};
Od("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",J:c,Z:function(c,f){d();var h=f.response,k=h.id;if(da(k)&&k.length==b.length){var m=h.channel_info_map;y(k,function(a,c){var d=b[c];Q(bi,new Uh(d,a,m[d]))});
a.length?Sp(a):Q("subscription-batch-subscribe-finished")}},
onError:function(){d();Q("subscription-batch-subscribe-failure")}})}}
function Up(a){if(a.length){var b=Va(a,0,40);Q("subscription-batch-unsubscribe-loading");aq(b,ei);var c={};c.c=b.join(",");var d=function(){Q("subscription-batch-unsubscribe-loaded");aq(b,fi)};
Od("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",J:c,Z:function(){d();aq(b,gi);a.length&&Up(a)},
onError:function(){d()}})}}
function aq(a,b){y(a,function(a){Q(b,new Rh(a))})}
function bq(a,b){var c=Fd(a),d;for(d in c)b[d]=c[d]}
;var cq,dq=null,eq=null,fq=null,gq=!1;
function hq(){var a=F("PLAYER_CONFIG",void 0),b=F("REVERSE_MOBIUS_PERCENT",void 0);if("1"!=a.privembed&&Tf&&100*Math.random()<b||Zf("enable_server_side_ad_request_for_embeds"))try{var c;try{var d=r("yt.www.ads.biscotti.getId_"),e;if(d)e=d();else{if(!tp){var f=sp().then(up),h=cm(wp,wp,void 0);h.g=!0;jm(f,h);tp=f}e=tp}c=e}catch(k){c=dm(k)}em(c,null,xp,void 0)}catch(k){cc(k)}if(F("REQUEST_POST_MESSAGE_ORIGIN")){if(!cq){cq=new Ki;cq.b=hq;return}cq.origin&&"*"!=cq.origin&&(a.args.post_message_origin=cq.origin)}d=
document.referrer;b=F("POST_MESSAGE_ORIGIN");c=!1;Zf("legacy_cast")&&u(d)&&u(b)&&-1<d.indexOf(b)&&Ig(b)&&Ig(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=d);F("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&ij(a.args);dq=Eh("player",a);d=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?fq=new mp(dq):F("ENABLE_POST_API")&&u(d)&&u(b)&&(eq=new op(window.parent,d,b),fq=new ip(dq,eq.f));Zf("legacy_cast")&&((gq=c&&!F("ENABLE_CAST_API"))?a.args.disableCast="1":(a=dq,
no(),Po=a,Po.addEventListener("onReady",Ro),Po.addEventListener("onRemoteReceiverSelected",To),Qo.push(lc("yt-remote-receiver-availability-change",So)),Qo.push(lc("yt-remote-auto-connect",Uo))));F("BG_P")&&(F("BG_I")||F("BG_IU"))&&Ac();Yd();Vo=dq;Vo.addEventListener("SUBSCRIBE",Yo);Vo.addEventListener("UNSUBSCRIBE",ap);Wo.push(Tg(bi,bp),Tg(gi,cp))}
;q("yt.setConfig",$b,void 0);q("yt.setMsg",function(a){ac(Zb,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||"WEB",version:d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e;if(a&&e&&!(5<=Ud)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,m=!1;try{h=a.lineNumber||a.Re||"Not available"}catch(R){h="Not available",m=!0}try{k=a.fileName||a.filename||a.sourceURL||l.$googDebugFname||f}catch(R){k="Not available",
m=!0}a=!m&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(Td[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Qb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},J:{url:F("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};
e&&(b.J.stack=e);for(var n in c)b.J["client."+n]=c[n];if(n=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var H in n)b.J[H]=n[H];Od("/error_204",b);Td[a.message]=!0;Ud++}}},void 0);
q("writeEmbed",hq,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&Lg(a);return!0},void 0);
var iq=bc(function(){ch("ol");Kp=!0;Mp.push(Tg(Zh,Np),Tg(di,Pp));Kp||(Mp.push(Tg(ci,Np),Tg(hi,Pp),Tg(Wh,Rp),Tg(Xh,Tp),Tg(Yh,Vp)),Lp.push(lc("subscription-prefs",Xp)),Mp.push(Tg(Gp,Yp),Tg(Ip,$p),Tg(Fp,Zp)));rf.getInstance();var a=1<window.devicePixelRatio;if(wf(0,119)!=a){var b="f"+(Math.floor(119/31)+1),c=vf(b)||0,c=a?c|67108864:c&-67108865;0==c?delete sf[b]:(a=c.toString(16),sf[b]=a.toString());var b=[],d;for(d in sf)b.push(d+"="+escape(sf[d]));Re("PREF",b.join("&"),63072E3)}}),jq=bc(function(){var a=
dq;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();F("PL_ATT")&&(zc=null);for(var a=0,b=Wd.length;a<b;a++){var c=Wd[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):I(c)}}Wd.length=0;a=vc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))qc(a),b.parentNode.removeChild(b);Xd=!1;$b("DCLKSTAT",0);nc(Lp);Lp.length=0;Ug(Mp);Mp.length=0;Kp=!1;Vo&&(Vo.removeEventListener("SUBSCRIBE",Zo),Vo.removeEventListener("UNSUBSCRIBE",ap));Vo=null;Ug(Wo);Wo.length=0;
Zf("legacy_cast")&&!gq&&(nc(Qo),Qo.length=0,Po&&(Po.removeEventListener("onRemoteReceiverSelected",To),Po.removeEventListener("onReady",Ro),Po=null),Bo());Wb(fq,eq);dq&&dq.destroy()});
window.addEventListener?(window.addEventListener("load",iq),window.addEventListener("unload",jq)):window.attachEvent&&(window.attachEvent("onload",iq),window.attachEvent("onunload",jq));var kq=Ei.getInstance(),lq=S(kq);lq in Ji||(kq.register(),kq.lb.push(lc("yt-uix-init-"+lq,kq.init,kq)),kq.lb.push(lc("yt-uix-dispose-"+lq,kq.dispose,kq)),Ji[lq]=kq);})();
