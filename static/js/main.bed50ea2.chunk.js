(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),l=n(4),i=n(6),m=n(7),u=n(5),h=n.n(u),d=(n(14),n(15),function(e){var t=e.placeHolder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(16),n(17),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"Monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h3",null," ",e.monster.name," "),r.a.createElement("p",null," ",e.monster.email," "))}),p=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(f,{key:e.id,monster:e})})))},g=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null," Monster Search "),r.a.createElement(d,{placeHolder:"search monsters",handleChange:this.handleChange}),r.a.createElement(p,{monsters:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.bed50ea2.chunk.js.map