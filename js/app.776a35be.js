(function(e){function n(n){for(var t,i,s=n[0],c=n[1],l=n[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,n=0;n<a.length;n++){for(var o=a[n],t=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(t=!1)}t&&(a.splice(n--,1),e=s(s.s=o[0]))}return e}var t={},r={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dccb1e40"}[e]+".js"}function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var n=[],o=r[e];if(0!==o)if(o)n.push(o[2]);else{var t=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=t);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;a=function(n){c.onerror=c.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",l.name="ChunkLoadError",l.type=t,l.request=a,o[1](l)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=t,s.d=function(e,n,o){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)s.d(o,t,function(n){return e[n]}.bind(null,t));return o},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/sensor_pwa/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var d=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"034f":function(e,n,o){"use strict";var t=o("85ec"),r=o.n(t);r.a},"31f2":function(e,n,o){"use strict";var t=o("ebce"),r=o.n(t);r.a},"56d7":function(e,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d");var t=o("2b0e"),r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),o("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),o("router-view")],1)},a=[],i=(o("034f"),o("2877")),s={},c=Object(i["a"])(s,r,a,!1,null,null,null),l=c.exports,u=o("9483");Object(u["a"])("".concat("/sensor_pwa/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7");var d,f,p,m,v,h,g=o("8c4f"),w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},b=[],y=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("div",{attrs:{id:"console"}}),o("div",{attrs:{id:"container"}})])}],_=(o("99af"),o("a623"),o("fb6a"),o("b0c0"),o("ac1f"),o("3ca3"),o("841c"),o("ddb0"),o("2b3d"),o("8dfe")),P=o("5a89"),j=new URLSearchParams(new URL(window.location.href).search.slice(1)),O=j.get("coord"),x={name:"HelloWorld",props:{msg:String},data:function(){return{}},mounted:function(){var e=this;this.initScene(),navigator.permissions?Promise.all([navigator.permissions.query({name:"accelerometer"}),navigator.permissions.query({name:"magnetometer"}),navigator.permissions.query({name:"gyroscope"})]).then((function(n){n.every((function(e){return"granted"===e.state}))?e.initSensor():console.log("Permission to use sensor was denied.")})).catch((function(n){console.log("Integration with Permissions API is not enabled, still try to start app."+n),e.initSensor()})):(console.log("No Permissions API, still try to start app."),this.initSensor()),this.animate();var n=console.log;console.log=function(e){var o=document.querySelector("#console");o.innerText=e;for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n.call.apply(n,[console,e].concat(r))},console.log("mounted")},methods:{initScene:function(){d=document.getElementById("container"),f=new P["q"](70,window.innerWidth/window.innerHeight,1,100),f.position.z=10,p=new P["v"],p.background=new P["g"](15790320),p.add(f),p.add(new P["a"](15790320));var e=new P["z"](16777215,1.5);e.position.set(0,1500,200),e.angle=.2*Math.PI,e.castShadow=!0,e.shadow.camera.near=200,e.shadow.camera.far=2e3,e.shadow.bias=-222e-6,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,p.add(e);var n=new P["r"](2e3,2e3);n.rotateX(-Math.PI/2);var o=new P["w"]({opacity:.2}),t=new P["l"](n,o);t.position.y=-200,t.receiveShadow=!0,p.add(t);var r=new P["j"](2e3,100);r.position.y=-199,r.material.opacity=.7,r.material.transparent=!0,p.add(r),m=new P["D"]({antialias:!0}),m.setPixelRatio(window.devicePixelRatio),m.setSize(window.innerWidth,window.innerHeight),m.shadowMap.enabled=!0,d.appendChild(m.domElement);var a=new P["e"](3,3,3),i=new P["m"]({color:15790095});v=new P["l"](a,i),p.add(v)},initSensor:function(){var e={frequency:60,coordinateSystem:O};console.log(JSON.stringify(e)),h=new _["a"](e),h.onreading=function(){return v.quaternion.fromArray(h.quaternion).inverse()},h.onerror=function(e){"NotReadableError"==e.error.name&&console.log("Sensor is not available.")},h.start(),console.log(h)},animate:function(){requestAnimationFrame(this.animate),v.rotation.x+=.01,v.rotation.y+=.01,m.render(p,f)}}},k=x,A=(o("31f2"),Object(i["a"])(k,y,S,!1,null,null,null)),q=A.exports,E={name:"Home",components:{HelloWorld:q}},H=E,M=Object(i["a"])(H,w,b,!1,null,null,null),I=M.exports;t["a"].use(g["a"]);var N=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],T=new g["a"]({mode:"history",base:"/sensor_pwa/",routes:N}),W=T,z=o("2f62");t["a"].use(z["a"]);var C=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}});t["a"].config.productionTip=!1,new t["a"]({router:W,store:C,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,n,o){},cf05:function(e,n,o){e.exports=o.p+"img/logo.82b9c7a5.png"},ebce:function(e,n,o){}});
//# sourceMappingURL=app.776a35be.js.map