var m=function app(n,t){function dt(n){r=n.document;c=n.location;kt=n.cancelAnimationFrame||n.clearTimeout;it=n.requestAnimationFrame||n.setTimeout}function i(){var n=[].slice.call(arguments),c=n[1]!=null&&u.call(n[1])===y&&!("tag"in n[1]||"view"in n[1])&&!("subtree"in n[1]),f=c?n[1]:{},l="class"in f?"class":"className",r={tag:"div",attrs:{}},t,s=[],h,e,i;if(u.call(n[0])!=k)throw new Error("selector in m(selector, attrs, children) should be a string");while(t=si.exec(n[0]))t[1]===""&&t[2]?r.tag=t[2]:t[1]==="#"?r.attrs.id=t[2]:t[1]==="."?s.push(t[2]):t[3][0]==="["&&(h=hi.exec(t[3]),r.attrs[h[1]]=h[3]||(h[2]?"":!0));e=c?n.slice(2):n.slice(1);r.children=e.length===1&&u.call(e[0])===o?e[0]:e;for(i in f)f.hasOwnProperty(i)&&(i===l&&f[i]!=null&&f[i]!==""?(s.push(f[i]),r.attrs[i]=""):r.attrs[i]=f[i]);return s.length>0&&(r.attrs[l]=s.join(" ")),r}function rt(n,e,h,c,v,p,w,b,d,g,nt){var hi,wt,kt,ti,bi,yt,dt,ri,ui,pt,fi,ki,di,ht,it,bt,ct,st,ni,at,ei,oi,ut,si,tt,et,ir,rr,ur,ot;try{(v==null||v.toString()==null)&&(v="")}catch(fr){v=""}if(v.subtree==="retain")return p;if(hi=u.call(p),wt=u.call(v),(p==null||hi!==wt)&&(p!=null&&(h&&h.nodes?(kt=b-c,ti=kt+(wt===o?v:p.nodes).length,s(h.nodes.slice(kt,ti),h.slice(kt,ti))):p.nodes&&s(p.nodes,p)),p=new v.constructor,p.tag&&(p={}),p.nodes=[]),wt===o){for(tt=0,st=v.length;tt<st;tt++)u.call(v[tt])===o&&(v=v.concat.apply([],v),tt--,st=v.length);var ot=[],ai=p.length===v.length,ii=0,vi=1,yi=2,pi=3,vt={},wi=!1;for(tt=0;tt<p.length;tt++)p[tt]&&p[tt].attrs&&p[tt].attrs.key!=null&&(wi=!0,vt[p[tt].attrs.key]={action:vi,index:tt});for(bi=0,tt=0,st=v.length;tt<st;tt++)if(v[tt]&&v[tt].attrs&&v[tt].attrs.key!=null){for(yt=0,st=v.length;yt<st;yt++)v[yt]&&v[yt].attrs&&v[yt].attrs.key==null&&(v[yt].attrs.key="__mithril__"+bi++);break}if(wi){if(dt=!1,v.length!=p.length)dt=!0;else for(tt=0;ri=p[tt],ui=v[tt];tt++)if(ri.attrs&&ui.attrs&&ri.attrs.key!=ui.attrs.key){dt=!0;break}if(dt){for(tt=0,st=v.length;tt<st;tt++)v[tt]&&v[tt].attrs&&v[tt].attrs.key!=null&&(pt=v[tt].attrs.key,vt[pt]=vt[pt]?{action:pi,index:tt,from:vt[pt].index,element:p.nodes[vt[pt].index]||r.createElement("div")}:{action:yi,index:tt});fi=[];for(ki in vt)fi.push(vt[ki]);for(di=fi.sort(li),ht=new Array(p.length),ht.nodes=p.nodes.slice(),tt=0;it=di[tt];tt++)it.action===vi&&(s(p[it.index].nodes,p[it.index]),ht.splice(it.index,1)),it.action===yi&&(bt=r.createElement("div"),bt.key=v[it.index].attrs.key,n.insertBefore(bt,n.childNodes[it.index]||null),ht.splice(it.index,0,{attrs:{key:v[it.index].attrs.key},nodes:[bt]}),ht.nodes[it.index]=bt),it.action===pi&&(n.childNodes[it.index]!==it.element&&it.element!==null&&n.insertBefore(it.element,n.childNodes[it.index]||null),ht[it.index]=p[it.from],ht.nodes[it.index]=it.element);p=ht}}for(var tt=0,gi=0,st=v.length;tt<st;tt++)(ct=rt(n,e,p,b,v[tt],p[gi],w,b+ii||ii,d,g,nt),ct!==t)&&(ct.nodes.intact||(ai=!1),ii+=ct.$trusted?(ct.match(/<[^\/]|\>\s*[^<]/g)||[0]).length:u.call(ct)===o?ct.length:1,p[gi++]=ct);if(!ai){for(tt=0,st=v.length;tt<st;tt++)p[tt]!=null&&ot.push.apply(ot,p[tt].nodes);for(tt=0;ut=p.nodes[tt];tt++)ut.parentNode!=null&&ot.indexOf(ut)<0&&s([ut],[p[tt]]);v.length<p.length&&(p.length=v.length);p.nodes=ot}}else if(v!=null&&wt===y){for(ni=[],at=[];v.view;){var nr=v.view.$original||v.view,tr=i.redraw.strategy()=="diff"&&p.views?p.views.indexOf(nr):-1,et=tr>-1?p.controllers[tr]:new(v.controller||a),pt=v&&v.attrs&&v.attrs.key;if(v=l==0||p&&p.controllers&&p.controllers.indexOf(et)>-1?v.view(et):{tag:"placeholder"},v.subtree==="retain")return p;pt&&(v.attrs||(v.attrs={}),v.attrs.key=pt);et.onunload&&ft.push({controller:et,handler:et.onunload});ni.push(nr);at.push(et)}if(!v.tag&&at.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");if(v.attrs||(v.attrs={}),p.attrs||(p.attrs={}),ei=Object.keys(v.attrs),oi=ei.length>("key"in v.attrs?1:0),(v.tag!=p.tag||ei.sort().join()!=Object.keys(p.attrs).sort().join()||v.attrs.id!=p.attrs.id||v.attrs.key!=p.attrs.key||i.redraw.strategy()=="all"&&(!p.configContext||p.configContext.retain!==!0)||i.redraw.strategy()=="diff"&&p.configContext&&p.configContext.retain===!1)&&(p.nodes.length&&s(p.nodes),p.configContext&&typeof p.configContext.onunload===f&&p.configContext.onunload(),p.controllers))for(tt=0;et=p.controllers[tt];tt++)if(typeof et.onunload===f)et.onunload({preventDefault:a});if(u.call(v.tag)!=k)return;if(si=p.nodes.length===0,v.attrs.xmlns?g=v.attrs.xmlns:v.tag==="svg"?g="http://www.w3.org/2000/svg":v.tag==="math"&&(g="http://www.w3.org/1998/Math/MathML"),si){if(ut=v.attrs.is?g===t?r.createElement(v.tag,v.attrs.is):r.createElementNS(g,v.tag,v.attrs.is):g===t?r.createElement(v.tag):r.createElementNS(g,v.tag),p={tag:v.tag,attrs:oi?lt(ut,v.tag,v.attrs,{},g):v.attrs,children:v.children!=null&&v.children.length>0?rt(ut,v.tag,t,t,v.children,p.children,!0,0,v.attrs.contenteditable?ut:d,g,nt):v.children,nodes:[ut]},at.length)for(p.views=ni,p.controllers=at,tt=0;et=at[tt];tt++)et.onunload&&et.onunload.$old&&(et.onunload=et.onunload.$old),l&&et.onunload&&(ir=et.onunload,et.onunload=a,et.onunload.$old=ir);p.children&&!p.children.nodes&&(p.children.nodes=[]);v.tag==="select"&&"value"in v.attrs&&lt(ut,v.tag,{value:v.attrs.value},{},g);n.insertBefore(ut,n.childNodes[b]||null)}else ut=p.nodes[0],oi&&lt(ut,v.tag,v.attrs,p.attrs,g),p.children=rt(ut,v.tag,t,t,v.children,p.children,!1,0,v.attrs.contenteditable?ut:d,g,nt),p.nodes.intact=!0,at.length&&(p.views=ni,p.controllers=at),w===!0&&ut!=null&&n.insertBefore(ut,n.childNodes[b]||null);typeof v.attrs.config===f&&(rr=p.configContext=p.configContext||{},ur=function(n,t){return function(){return n.attrs.config.apply(n,t)}},nt.push(ur(v,[ut,!si,rr,p])))}else typeof v!=f&&(p.nodes.length===0?(v.$trusted?ot=gt(n,b,v):(ot=[r.createTextNode(v)],n.nodeName.match(ci)||n.insertBefore(ot[0],n.childNodes[b]||null)),p="string number boolean".indexOf(typeof v)>-1?new v.constructor(v):v,p.nodes=ot):p.valueOf()!==v.valueOf()||w===!0?(ot=p.nodes,d&&d===r.activeElement||(v.$trusted?(s(ot,p),ot=gt(n,b,v)):e==="textarea"?n.value=v:d?d.innerHTML=v:((ot[0].nodeType===1||ot.length>1)&&(s(p.nodes,p),ot=[r.createTextNode(v)]),n.insertBefore(ot[0],n.childNodes[b]||null),ot[0].nodeValue=v)),p=new v.constructor(v),p.nodes=ot):p.nodes.intact=!0);return p}function li(n,t){return n.action-t.action||n.index-t.index}function lt(n,t,i,r,e){var o,s,c,h;for(o in i)if(s=i[o],c=r[o],o in r&&c===s)o==="value"&&t==="input"&&n.value!=s&&(n.value=s);else{r[o]=s;try{if(o==="config"||o=="key")continue;else if(typeof s===f&&o.indexOf("on")===0)n[o]=ai(s,n);else if(o==="style"&&s!=null&&u.call(s)===y){for(h in s)(c==null||c[h]!==s[h])&&(n.style[h]=s[h]);for(h in c)h in s||(n.style[h]="")}else e!=null?o==="href"?n.setAttributeNS("http://www.w3.org/1999/xlink","href",s):o==="className"?n.setAttribute("class",s):n.setAttribute(o,s):o in n&&!(o==="list"||o==="style"||o==="form"||o==="type"||o==="width"||o==="height")?(t!=="input"||n[o]!==s)&&(n[o]=s):n.setAttribute(o,s)}catch(l){if(l.message.indexOf("Invalid argument")<0)throw l;}}return r}function s(n,t){for(var i=n.length-1;i>-1;i--)if(n[i]&&n[i].parentNode){try{n[i].parentNode.removeChild(n[i])}catch(r){}t=[].concat(t);t[i]&&at(t[i])}n.length!=0&&(n.length=0)}function at(n){var i,t,r;if(n.configContext&&typeof n.configContext.onunload===f&&(n.configContext.onunload(),n.configContext.onunload=null),n.controllers)for(t=0;i=n.controllers[t];t++)if(typeof i.onunload===f)i.onunload({preventDefault:a});if(n.children)if(u.call(n.children)===o)for(t=0;r=n.children[t];t++)at(r);else n.children.tag&&at(n.children)}function gt(n,t,i){var u=n.childNodes[t],o,f,e;for(u?(o=u.nodeType!=1,f=r.createElement("span"),o?(n.insertBefore(f,u||null),f.insertAdjacentHTML("beforebegin",i),n.removeChild(f)):u.insertAdjacentHTML("beforebegin",i)):n.insertAdjacentHTML("beforeend",i),e=[];n.childNodes[t]!==u;)e.push(n.childNodes[t]),t++;return e}function ai(n,t){return function(r){r=r||event;i.redraw.strategy("diff");i.startComputation();try{return n.call(t,r)}finally{yt()}}}function ii(n){var t=ti.indexOf(n);return t<0?ti.push(n)-1:t}function yi(n){var t=function(){return arguments.length&&(n=arguments[0]),n};return t.toJSON=function(){return n},t}function pi(n,t){var u=function(){return(n.controller||a).apply(this,t)||this},r=function(i){return arguments.length>1&&(t=t.concat([].slice.call(arguments,1))),n.view.apply(n,t?[i].concat(t):[i])},i;return r.$original=n.view,i={controller:u,view:r},t[0]&&t[0].key!=null&&(i.attrs={key:t[0].key}),i}function fi(){var n,t,r;for(w&&(w(),w=null),n=0;t=ut[n];n++)h[n]&&(r=p[n].controller&&p[n].controller.$$args?[h[n]].concat(p[n].controller.$$args):[h[n]],i.render(t,p[n].view?p[n].view(h[n],r):""));g&&(g(),g=null);v=null;ri=new Date;i.redraw.strategy("diff")}function ei(n){return n.slice(b[i.route.mode].length)}function wi(n,t,r){var f,e,o,u,s;if(nt={},f=r.indexOf("?"),f!==-1&&(nt=ht(r.substr(f+1,r.length)),r=r.substr(0,f)),e=Object.keys(t),o=e.indexOf(r),o!==-1)return i.mount(n,t[e[o]]),!0;for(u in t){if(u===r)return i.mount(n,t[u]),!0;if(s=new RegExp("^"+u.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$"),s.test(r))return r.replace(s,function(){for(var f=u.match(/:[^\/]+/g)||[],e=[].slice.call(arguments,1,-2),r=0,o=f.length;r<o;r++)nt[f[r].replace(/:|\./g,"")]=decodeURIComponent(e[r]);i.mount(n,t[u])}),!0}}function st(n){if(n=n||event,!n.ctrlKey&&!n.metaKey&&n.which!==2){n.preventDefault?n.preventDefault():n.returnValue=!1;for(var t=n.currentTarget||n.srcElement,r=i.route.mode==="pathname"&&t.search?ht(t.search.slice(1)):{};t&&t.nodeName.toUpperCase()!="A";)t=t.parentNode;i.route(t[i.route.mode].slice(b[i.route.mode].length),r)}}function oi(){i.route.mode!="hash"&&c.hash?c.hash=c.hash:n.scrollTo(0,0)}function tt(n,i){var e={},h=[];for(var s in n){var r=i?i+"["+s+"]":s,f=n[s],c=u.call(f),l=f===null?encodeURIComponent(r):c===y?tt(f,r):c===o?f.reduce(function(n,t){return(e[r]||(e[r]={}),!e[r][t])?(e[r][t]=!0,n.concat(encodeURIComponent(r)+"="+encodeURIComponent(t))):n},[]).join("&"):encodeURIComponent(r)+"="+encodeURIComponent(f);f!==t&&h.push(l)}return h.join("&")}function ht(n){var f,t,r,s;for(n.charAt(0)==="?"&&(n=n.substring(1)),f=n.split("&"),t={},r=0,s=f.length;r<s;r++){var e=f[r].split("="),i=decodeURIComponent(e[0]),h=e.length==2?decodeURIComponent(e[1]):null;t[i]!=null?(u.call(t[i])!==o&&(t[i]=[t[i]]),t[i].push(h)):t[i]=h}return t}function bi(n){var i=ii(n);s(n.childNodes,d[i]);d[i]=t}function ct(n,t){var r=i.prop(t);return n.then(r),r.then=function(i,r){return ct(n.then(i,r),t)},r}function wt(n,t){function h(n){e=n||v;p.map(function(n){e===a&&n.resolve(r)||n.reject(r)})}function w(n,t,e,o){if((r!=null&&u.call(r)===y||typeof r===f)&&typeof n===f)try{var s=0;n.call(r,function(n){s++||(r=n,t())},function(n){s++||(r=n,e())})}catch(h){i.deferred.onerror(h);r=h;e()}else o()}function c(){var u;try{u=r&&r.then}catch(v){i.deferred.onerror(v);return r=v,e=l,c()}w(u,function(){e=o;c()},function(){e=l;c()},function(){try{e===o&&typeof n===f?r=n(r):e===l&&typeof t=="function"&&(r=t(r),e=o)}catch(c){i.deferred.onerror(c);return r=c,h()}r===s?(r=TypeError(),h()):w(u,function(){h(a)},h,function(){h(e===o&&a)})})}var o=1,l=2,a=3,v=4,s=this,e=0,r=0,p=[];s.promise={};s.resolve=function(n){return e||(r=n,e=o,c()),this};s.reject=function(n){return e||(r=n,e=l,c()),this};s.promise.then=function(n,t){var i=new wt(n,t);return e===a?i.resolve(r):e===v?i.reject(r):p.push(i),i.promise}}function bt(n){return n}function ki(i){var s,o,e,c,h;if(i.dataType&&i.dataType.toLowerCase()==="jsonp")s="mithril_callback_"+(new Date).getTime()+"_"+Math.round(Math.random()*1e16).toString(36),o=r.createElement("script"),n[s]=function(r){o.parentNode.removeChild(o);i.onload({type:"load",target:{responseText:r}});n[s]=t},o.onerror=function(){o.parentNode.removeChild(o);i.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}});return n[s]=t,!1},o.onload=function(){return!1},o.src=i.url+(i.url.indexOf("?")>0?"&":"?")+(i.callbackKey?i.callbackKey:"callback")+"="+s+"&"+tt(i.data||{}),r.body.appendChild(o);else{if(e=new n.XMLHttpRequest,e.open(i.method,i.url,!0,i.user,i.password),e.onreadystatechange=function(){if(e.readyState===4)if(e.status>=200&&e.status<300)i.onload({type:"load",target:e});else i.onerror({type:"error",target:e})},i.serialize===JSON.stringify&&i.data&&i.method!=="GET"&&e.setRequestHeader("Content-Type","application/json; charset=utf-8"),i.deserialize===JSON.parse&&e.setRequestHeader("Accept","application/json, text/*"),typeof i.config===f&&(c=i.config(e,i),c!=null&&(e=c)),h=i.method==="GET"||!i.data?"":i.data,h&&u.call(h)!=k&&h.constructor!=n.FormData)throw"Request data should be either be a string or FormData. Check the `serialize` option in `m.request`";return e.send(h),e}}function di(n,t,i){if(n.method==="GET"&&n.dataType!="jsonp"){var u=n.url.indexOf("?")<0?"?":"&",r=tt(t);n.url=n.url+(r?u+r:"")}else n.data=i(t);return n}function gi(n,t){var r=n.match(/:[a-z]\w+/gi),i,u;if(r&&t)for(i=0;i<r.length;i++)u=r[i].slice(1),n=n.replace(r[i],t[u]),delete t[u];return n}var y="[object Object]",o="[object Array]",k="[object String]",f="function",u={}.toString,si=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,hi=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/,ci=/^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/,a=function(){},r,c,it,kt,et,l,yt;dt(n);var ni,vi={appendChild:function(n){ni===t&&(ni=r.createElement("html"));r.documentElement&&r.documentElement!==n?r.replaceChild(n,r.documentElement):r.appendChild(n);this.childNodes=r.childNodes},insertBefore:function(n){this.appendChild(n)},childNodes:[]},ti=[],d={};i.render=function(n,i,u){var e=[],f,l;if(!n)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var o=ii(n),h=n===r,c=h||n===r.documentElement?vi:n;for(h&&i.tag!="html"&&(i={tag:"html",attrs:{},children:i}),d[o]===t&&s(c.childNodes),u===!0&&bi(n),d[o]=rt(c,null,t,t,i,d[o],!1,0,null,t,e),f=0,l=e.length;f<l;f++)e[f]()};i.trust=function(n){return n=new String(n),n.$trusted=!0,n};i.prop=function(n){return(n!=null&&u.call(n)===y||typeof n===f)&&typeof n.then===f?ct(n):yi(n)};var ut=[],p=[],h=[],v=null,ri=0,w=null,g=null,ui,ft=[],vt=16;i.component=function(n){return pi(n,[].slice.call(arguments,1))};i.mount=i.module=function(n,t){var r,o,s,e,u;if(!n)throw new Error("Please ensure the DOM element exists before rendering a template into it.");for(r=ut.indexOf(n),r<0&&(r=ut.length),o=!1,s={preventDefault:function(){o=!0;w=g=null}},e=0;u=ft[e];e++)u.handler.call(u.controller,s),u.controller.onunload=null;if(o)for(e=0;u=ft[e];e++)u.controller.onunload=u.handler;else ft=[];if(h[r]&&typeof h[r].onunload===f)h[r].onunload(s);if(!o){i.redraw.strategy("all");i.startComputation();ut[r]=n;arguments.length>2&&(t=subcomponent(t,[].slice.call(arguments,2)));var c=ui=t=t||{controller:function(){}},l=t.controller||a,v=new l;return c===ui&&(h[r]=v,p[r]=t),yt(),h[r]}};et=!1;i.redraw=function(t){et||(et=!0,v&&t!==!0?(it===n.requestAnimationFrame||new Date-ri>vt)&&(v>0&&kt(v),v=it(fi,vt)):(fi(),v=it(function(){v=null},vt)),et=!1)};i.redraw.strategy=i.prop();l=0;i.startComputation=function(){l++};i.endComputation=function(){l=Math.max(l-1,0);l===0&&i.redraw()};yt=function(){i.redraw.strategy()=="none"?(l--,i.redraw.strategy("diff")):i.endComputation()};i.withAttr=function(n,t){return function(i){i=i||event;var r=i.currentTarget||this;t(n in r?r[n]:r.getAttribute(n))}};var b={pathname:"",hash:"#",search:"?"},ot=a,nt,e,pt=!1;return i.route=function(){var o,a,s,h,l,p;if(arguments.length===0)return e;if(arguments.length===3&&u.call(arguments[1])===k){var d=arguments[0],nt=arguments[1],it=arguments[2];ot=function(n){var t=e=ei(n);if(!wi(d,it,t)){if(pt)throw new Error("Ensure the default route matches one of the routes defined in m.route");pt=!0;i.route(nt,!0);pt=!1}};o=i.route.mode==="hash"?"onhashchange":"onpopstate";n[o]=function(){var n=c[i.route.mode];i.route.mode==="pathname"&&(n+=c.search);e!=ei(n)&&ot(n)};w=oi;n[o]()}else if(arguments[0].addEventListener||arguments[0].attachEvent){var t=arguments[0],ut=arguments[1],ft=arguments[2],rt=arguments[3];t.href=(i.route.mode!=="pathname"?c.pathname:"")+b[i.route.mode]+rt.attrs.href;t.addEventListener?(t.removeEventListener("click",st),t.addEventListener("click",st)):(t.detachEvent("onclick",st),t.attachEvent("onclick",st))}else if(u.call(arguments[0])===k){a=e;e=arguments[0];var v=arguments[1]||{},f=e.indexOf("?"),y=f>-1?ht(e.slice(f+1)):{};for(s in v)y[s]=v[s];h=tt(y);l=f>-1?e.slice(0,f):e;h&&(e=l+(l.indexOf("?")===-1?"?":"&")+h);p=(arguments.length===3?arguments[2]:arguments[1])===!0||a===arguments[0];n.history.pushState?(w=oi,g=function(){n.history[p?"replaceState":"pushState"](null,r.title,b[i.route.mode]+e)},ot(b[i.route.mode]+e)):(c[i.route.mode]=e,ot(b[i.route.mode]+e))}},i.route.param=function(n){if(!nt)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return nt[n]},i.route.mode="search",i.route.buildQueryString=tt,i.route.parseQueryString=ht,i.deferred=function(){var n=new wt;return n.promise=ct(n.promise),n},i.deferred.onerror=function(n){if(u.call(n)==="[object Error]"&&!n.constructor.toString().match(/ Error/))throw n;},i.sync=function(n){function e(n,t){return function(i){return u[n]=i,t||(f="reject"),--o==0&&(r.promise(u),r[f](u)),i}}var f="resolve",r=i.deferred(),o=n.length,u=new Array(o),t;if(n.length>0)for(t=0;t<n.length;t++)n[t].then(e(t,!0),e(t,!1));else r.resolve([]);return r.promise},i.request=function(n){n.background!==!0&&i.startComputation();var t=new wt,r=n.dataType&&n.dataType.toLowerCase()==="jsonp",e=n.serialize=r?bt:n.serialize||JSON.stringify,f=n.deserialize=r?bt:n.deserialize||JSON.parse,s=r?function(n){return n.responseText}:n.extract||function(n){return n.responseText.length===0&&f===JSON.parse?null:n.responseText};return n.method=(n.method||"GET").toUpperCase(),n.url=gi(n.url,n.data),n=di(n,n.data,e),n.onload=n.onerror=function(r){var c,e,h;try{if(r=r||event,c=(r.type==="load"?n.unwrapSuccess:n.unwrapError)||bt,e=c(f(s(r.target,n)),r.target),r.type==="load")if(u.call(e)===o&&n.type)for(h=0;h<e.length;h++)e[h]=new n.type(e[h]);else n.type&&(e=new n.type(e));t[r.type==="load"?"resolve":"reject"](e)}catch(r){i.deferred.onerror(r);t.reject(r)}n.background!==!0&&i.endComputation()},ki(n),t.promise=ct(t.promise,n.initialValue),t.promise},i.deps=function(t){return dt(n=t||n),n},i.deps.factory=app,i}(typeof window!="undefined"?window:{}),MPEDE;typeof module!="undefined"&&module!==null&&module.exports?module.exports=m:typeof define=="function"&&define.amd&&define(function(){return m});MPEDE=function(){function n(n){var e,h,s;if(n){e=n.tHead.rows[0].cloneNode(!0);h=document.getElementById("tfoot");n.tHead.appendChild(e);e.className="afix";n.tHead.firstChild.className="static";s=function(t){var f=window.pageYOffset||document.documentElement.scrollTop,o,r,i,u;if(f>n.offsetTop&&f<n.offsetTop+n.offsetHeight){if(n.tHead.className!="afixH"||!t||t.type!="scroll")for(n.tHead.className="afixH",r=e.cells,o=n.tHead.rows[0].cells,i=0,u=r.length;i<u;i++)r[i].style.width=o[i].offsetWidth+"px"}else if(n.tHead.className!="")for(n.tHead.className="",r=e.cells,i=0,u=r.length;i<u;i++)r[i].style.width="";if(f+window.innerHeight>n.offsetTop&&f+window.innerHeight-20<n.offsetTop+n.offsetHeight){if(n.tFoot.className!="afixF"&&f+window.innerHeight<n.offsetTop+n.offsetHeight||!t||t.type!="scroll")for(n.tFoot.className="afixF",r=h.cells,o=h.nextElementSibling.cells,i=0,u=r.length;i<u;i++)r[i].style.width=o[i].offsetWidth+"px"}else if(n.tFoot.className!="")for(n.tFoot.className="",r=h.cells,i=0,u=r.length;i<u;i++)r[i].style.width=""};window.onscroll=window.onresize=e.onclick=s;s();var u=[],a,t=[[0,0],[0,0],[0,0]],v=function(n){return{tag:n.tagName,attrs:Array.prototype.reduce.call(n.attributes,function(n,t){return n[t.name]=t.value,n},{}),children:n.firstChild.tagName==="A"?[v(n.firstChild)]:n.innerHTML}};Array.prototype.reduce.call(n.tBodies[0].rows,function(n,i){if(i.id){var r=Array.prototype.map.call(i.cells,v),f=+r[2].children?r[2].attrs["data-p"]!=undefined?+r[2].children:-r[2].children:0,e=+r[3].children?r[3].attrs["data-p"]!=undefined?+r[3].children:-r[3].children:0,o=+r[4].children?r[4].attrs["data-p"]!=undefined?+r[4].children:-r[4].children:0;return t[0][0]=Math.min(t[0][0],f),t[0][1]=Math.max(t[0][1],f),t[1][0]=Math.min(t[1][0],e),t[1][1]=Math.max(t[1][1],e),t[2][0]=Math.min(t[2][0],o),t[2][1]=Math.max(t[2][1],o),u.push({tag:"tr",attrs:{id:i.attributes.id.value,key:+i.attributes.id.value},children:r,_:[r[0].children,r[1].children[0].children.toUpperCase(),f,e,o]}),u}},u);var o=function(n){n.stopPropagation()},i=0,f=0,c,l=function(n){f=+n;r()},y=function(n){f=0;c=n;var t=new RegExp(c,"i");a=u.filter(function(n){return n._[1].match(t)});r();s()},r=function(t){var h,p;t?i=i===+t?-t:+t:t=i;m.render(e,[m("th",{id:"thR"},m("a",{title:(t==1&&i>0?"▼":"▲")+" RANK","class":t==1?"active":"",sid:1,onclick:m.withAttr("sid",r)},"RANK")),m("th",{id:"thN"},m("a",{title:(t==2&&i>0?"▼":"▲")+" NAME","class":t==2?"active":"",sid:2,onclick:m.withAttr("sid",r)},["NAME",m("label",{"for":"iP",onclick:o})])),m("th",{id:"thD"},m("a",{title:(t==3&&i>0?"▲":"▼")+" DAY","class":t==3?"active":"",sid:3,onclick:m.withAttr("sid",r)},["DAY",m("label",{"for":"iD",onclick:o})])),m("th",{id:"thW"},m("a",{title:(t==4&&i>0?"▲":"▼")+" WEEK","class":t==4?"active":"",sid:4,onclick:m.withAttr("sid",r)},["WEEK",m("label",{"for":"iW",onclick:o})])),m("th",{id:"thM"},m("a",{title:(t==5&&i>0?"▲":"▼")+" MONTH","class":t==5?"active":"",sid:5,onclick:m.withAttr("sid",r)},["MONTH",m("label",{"for":"iM",onclick:o})])),]);s();h=a||u.slice();switch(i){case-1:h.sort(function(n,t){return t._[0]-n._[0]});break;case 1:h.sort(function(n,t){return n._[0]-t._[0]});break;case-2:h.sort(function(n,t){return t._[1]<n._[1]?-1:t._[1]>n._[1]?1:0});break;case 2:h.sort(function(n,t){return n._[1]<t._[1]?-1:n._[1]>t._[1]?1:0});break;case-3:h.sort(function(n,t){return n._[2]-t._[2]||n._[0]-t._[0]});break;case 3:h.sort(function(n,t){return t._[2]-n._[2]||n._[0]-t._[0]});break;case-4:h.sort(function(n,t){return n._[3]-t._[3]||n._[0]-t._[0]});break;case 4:h.sort(function(n,t){return t._[3]-n._[3]||n._[0]-t._[0]});break;case-5:h.sort(function(n,t){return n._[4]-t._[4]||n._[0]-t._[0]});break;case 5:h.sort(function(n,t){return t._[4]-n._[4]||n._[0]-t._[0]})}m.render(e,[m("th",{id:"thR"},m("a",{title:(t==1&&i>0?"▼":"▲")+" RANK","class":t==1?"active":"",sid:1,onclick:m.withAttr("sid",r)},"RANK")),m("th",{id:"thN"},m("a",{title:(t==2&&i>0?"▼":"▲")+" NAME","class":t==2?"active":"",sid:2,onclick:m.withAttr("sid",r)},["NAME",m("label",{"for":"iP",onclick:o})])),m("th",{id:"thD"},m("a",{title:(t==3&&i>0?"▲":"▼")+" DAY","class":t==3?"active":"",sid:3,onclick:m.withAttr("sid",r)},["DAY",m("label",{"for":"iD",onclick:o})])),m("th",{id:"thW"},m("a",{title:(t==4&&i>0?"▲":"▼")+" WEEK","class":t==4?"active":"",sid:4,onclick:m.withAttr("sid",r)},["WEEK",m("label",{"for":"iW",onclick:o})])),m("th",{id:"thM"},m("a",{title:(t==5&&i>0?"▲":"▼")+" MONTH","class":t==5?"active":"",sid:5,onclick:m.withAttr("sid",r)},["MONTH",m("label",{"for":"iM",onclick:o})]))]);var w=2,b=w*2+1,v=Math.ceil(h.length/100-1),k=[m("td",m("input",{placeholder:"search",required:"",value:c||null,onkeyup:m.withAttr("value",y),key:"search"})),m("th",m("a",{page:0,"class":f===0?"active":"",onclick:m.withAttr("page",l)},0))];for(p=0;p<=v;p++)p<Math.max(1,Math.min(v-b,f-w))||p>Math.max(Math.min(v-1,f+w),b)||k.push(m("th",m("a",{page:p,"class":f===p?"active":"",onclick:m.withAttr("page",l)},p)));v>0&&v>b&&k.push(m("th",m("a",{page:v,"class":f===v?"active":"",onclick:m.withAttr("page",l)},v)));m.render(document.getElementById("pas"),k);h=h.slice(f*100,f*100+100);h=h.length?h:[{tag:"th",attrs:{colspan:5,style:{"line-height":"1.5em","font-size":"1.5em"}},children:'no data for "'+c+'"'}];m.render(n.tBodies[0],h)};r(1,!0);m.request({method:"GET",url:"c99.json"}).then(function(n){var i=["d","w","m"];n.reduce(function(n,r){return t[0][0]=Math.min(t[0][0],r[3]),t[0][1]=Math.max(t[0][1],r[3]),t[1][0]=Math.min(t[1][0],r[4]),t[1][1]=Math.max(t[1][1],r[4]),t[2][0]=Math.min(t[2][0],r[5]),t[2][1]=Math.max(t[2][1],r[5]),u.push({tag:"tr",attrs:{id:r[0],key:r[0]},children:[{tag:"th",attrs:i.reduce(function(n,t,i){return n["data-"+((i=r[i+4])?i>0?"p":"m":"s")+"-"+t]=i?i>0?i:-i:i===0?0:"?",n},{"data-pt":r[2]}),children:[("000"+n.length).slice(-4)]},{tag:"td",children:[{tag:"A",children:r[12],attrs:{href:r[13],title:r[14],rel:"nofollow",target:"_blank"}}]},{tag:"td",attrs:r[3]?r[3]>0?{"data-p":""}:{"data-m":""}:{},children:""+Math.abs(r[3])},{tag:"td",attrs:r[4]?r[4]>0?{"data-p":""}:{"data-m":""}:{},children:""+Math.abs(r[4])},{tag:"td",attrs:r[5]?r[5]>0?{"data-p":""}:{"data-m":""}:{},children:""+Math.abs(r[5])}],_:[n.length,r[12].toUpperCase(),+r[3],+r[4],+r[5]]}),u},u);u.forEach(function(n,i){for(var i=0;i<=2;i++)n.children[i+2].attrs.style={background:n._[i+2]<0?"rgba(51,51,51,"+(n._[i+2]/t[i][0]*.2+.2)+")":"rgba(255,255,255,"+(Math.pow(n._[i+2]/t[i][1],.2)+.2)+")"}});r(null,!0)})}}return n}();new MPEDE(document.getElementById("tbl")),function(n){var f=new Date(n.innerText).getTime(),r,t,i,u=function(){r=(new Date).getTime()-f;t=Math.floor(r/36e5);console.log(t);i=Math.floor((r-t*36e5)/6e4);n.innerText=(t?t+" hour"+(t==1?"":"s"):"")+(i?" "+i+" minute"+(i==1?"":"s"):"")+(t+i?" ago":" right now");setTimeout(u,6e4-r%6e4)};u()}(document.getElementById("gen"));
