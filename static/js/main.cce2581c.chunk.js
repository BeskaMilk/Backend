(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),l=(n(59),n(5)),s=n(6),i=n(8),u=n(7),m=n(9),h=(n(60),n(3)),d=(n(16),n(20)),p=n.n(d),f=n(51),g=n.n(f);function b(t){var e=t.image;return o.a.createElement("img",{className:"single-photo",src:e.urls.thumb,alt:""})}var v=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={images:[],count:30,start:1},n.fetchImages=function(){console.log(123);var t=n.state,e=t.count,a=t.start;n.setState({start:n.state.start+e}),p.a.get("/api/photos?count=".concat(e,"&start=").concat(a)).then(function(t){return n.setState({images:n.state.images.concat(t.data)})})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.state,n=e.count,a=e.start;p.a.get("/api/photos?count=".concat(n,"&start=").concat(a)).then(function(e){return t.setState({images:e.data})})}},{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",{className:"images"},o.a.createElement(g.a,{dataLength:this.state.images.length,next:this.fetchImages,hasMore:!0,loader:o.a.createElement("h4",null,"Loading...")},this.state.images.map(function(t){return o.a.createElement(b,{key:t.id,image:t})})))}}]),e}(a.Component),w=(a.Component,a.Component,a.Component,a.Component,a.Component,o.a.Component,function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={selectedFile:null},n.fileSelectedHandler=function(t){n.setState({selectedFile:t.target.files[0]})},n.fileUploadHandler=function(){p.a.post("")},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"demo-big-content"},o.a.createElement("input",{type:"file",onChange:this.fileSelectedHandler}),o.a.createElement("button",{onClick:this.fileUploadHandler},"Upload"),o.a.createElement(v,null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(129),n(130);var E=n(25);r.a.render(o.a.createElement(E.a,null,o.a.createElement(w,null)),document.getElementById("root"))},54:function(t,e,n){t.exports=n(131)},59:function(t,e,n){},60:function(t,e,n){}},[[54,1,2]]]);
//# sourceMappingURL=main.cce2581c.chunk.js.map