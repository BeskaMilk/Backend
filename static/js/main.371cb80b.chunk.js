(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(t,e,n){t.exports=n(444)},196:function(t,e,n){},197:function(t,e,n){},291:function(t,e){},292:function(t,e){},297:function(t,e){},299:function(t,e){},336:function(t,e){},341:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=341},344:function(t,e){},346:function(t,e){},380:function(t,e){},381:function(t,e){},444:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(21),i=n.n(c),r=(n(196),n(11)),s=n(12),l=n(14),u=n(13),m=n(15),f=(n(197),n(5)),h=(n(30),n(54)),d=n.n(h),p=n(188),g=n.n(p);function w(t){var e=t.image;return o.a.createElement("img",{className:"single-photo",src:e.urls.thumb,alt:""})}n(262)().use(function(t,e,n){e.setHeader("Access-Control-Allow-Origin","https://materialmatters.herokuapp.com/"),e.setHeader("Access-Control-Allow-Origin","https://beskamilk.github.io/material-matters/"),n()});var b=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={images:[],count:30,start:1},n.fetchImages=function(){console.log(123);var t=n.state,e=t.count,a=t.start;n.setState({start:n.state.start+e}),d.a.get("api/photos?count=".concat(e,"&start=").concat(a)).then(function(t){return n.setState({images:n.state.images.concat(t.data)})})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.state,n=e.count,a=e.start;d.a.get("/api/photos?count=".concat(n,"&start=").concat(a)).then(function(e){return t.setState({images:e.data})})}},{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",{className:"images"},o.a.createElement(g.a,{dataLength:this.state.images.length,next:this.fetchImages,hasMore:!0,loader:o.a.createElement("h4",null,"Loading...")},this.state.images.map(function(t){return o.a.createElement(w,{key:t.id,image:t})})))}}]),e}(a.Component),v=(a.Component,a.Component,a.Component,a.Component,a.Component,o.a.Component,function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={selectedFile:null},n.fileSelectedHandler=function(t){n.setState({selectedFile:t.target.files[0]})},n.fileUploadHandler=function(){d.a.post("")},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"demo-big-content"},o.a.createElement("input",{type:"file",onChange:this.fileSelectedHandler}),o.a.createElement("button",{onClick:this.fileUploadHandler},"Upload"),o.a.createElement(b,null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(442),n(443);var O=n(76);i.a.render(o.a.createElement(O.a,null,o.a.createElement(v,null)),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.371cb80b.chunk.js.map