(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(13),n(1)),l=n(2),u=n(4),s=n(3),p=n(5),h=(n(15),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={pins:[],load:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/photos").then(function(e){return e.json()}).then(function(t){e.setState({load:!0,pins:t})})}},{key:"render",value:function(){var e=this.state.pins;return r.a.createElement("div",{className:"row"},e.map(function(e){return r.a.createElement("div",{className:"column"},r.a.createElement("img",{src:e.thumbnailUrl}),r.a.createElement("p",null,e.title),r.a.createElement("button",null,"pin it!"))}))}}]),t}(a.Component)),m=function(){return r.a.createElement("h1",null," holi soy en navheader ")},d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={inputText:"",amount:15,apiUrl:"https://pixabay.com/api/",apiKey:"1721901-fa9bcc6ed3f879da0567a53bb",pins:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{name:"inputText",value:this.state.inputText,onChange:this.onTextChange,type:"text",placeholder:"B\xfasqueda.."}))}}]),t}(a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(d,null))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(b,null)),r.a.createElement(h,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.a3331445.chunk.js.map