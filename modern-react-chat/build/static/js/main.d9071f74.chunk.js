(this["webpackJsonpmodern-react-chat"]=this["webpackJsonpmodern-react-chat"]||[]).push([[0],{64:function(e,t,n){e.exports=n(93)},69:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),c=n.n(s),o=(n(69),n(17)),i=n(18),l=n(20),u=n(19),m=n(21),p=n(28),d=n(51);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=function(e){return e.messages},f=function(e,t){return g(e)?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},g(e).byIds[t],{id:t}):{}},b=function(e){return function(e){return g(e)?g(e).allIds:[]}(e).map((function(t){return f(e,t)}))},O=n(5),v=n(122),E=n(126),y=n(36),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(v.a,{alignItems:"center"},r.a.createElement("br",null),r.a.createElement(E.a,{primary:" This message is send by ",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"}),this.props.message)}))}}]),t}(r.a.Component),w=Object(O.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}))(j),S=n(127),k=n(52),D=n.n(k),_=void 0,C=function(){D.a.get("https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages").then((function(e){return e.json()})).then((function(e){_.setState({messageServer:e})})),console.log("hello")},M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={input:"",messages:[],messageServer:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(S.a,{className:t.root},r.a.createElement("div",null,r.a.createElement("ul",null,this.state.messageServer.map((function(t){return r.a.createElement("li",{onChange:e.getMessageServer},t.username)})))),this.state.messages.map((function(e){return r.a.createElement(w,{key:e.id,id:e.id,message:e.message})})))}}]),t}(a.PureComponent),x=Object(O.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}))(Object(p.b)((function(e){return{messages:b(e)}}),{getMessageServer:C})(M)),P=n(128),A=n(131),N=n(130),I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState({input:e.target.value})},n.handleAddMessage=function(e){e.preventDefault();var t=n.state.input;n.setState({input:"",messages:n.state.messages.concat(t)}),n.props.addMessage(t),console.log(n.state)},n.state={input:"",messages:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{display:"flex",flexDirection:"column"},r.a.createElement("ul",null,this.state.messages.map((function(e,t){return r.a.createElement(w,{key:t,message:e})}))),r.a.createElement(N.a,{placeholder:"Votre message",type:"text",value:this.state.input,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(P.a,{variant:"contained",color:"primary",onClick:this.handleAddMessage},"Envoyer"))}}]),t}(r.a.Component),T=Object(p.b)(null,{addMessage:function(e){return console.log("dans redux actions : ",e),{type:"ADD_MESSAGE",currentMessage:e}}})(I),W=n(129),X=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(W.a,{maxWidth:"xs"},r.a.createElement(x,null),r.a.createElement(T,null))}}]),t}(r.a.Component);n(92);var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"My Modern Chat")),r.a.createElement("div",{className:"App-center"},r.a.createElement(X,null)))},B=n(34),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return e.concat(t.currentMessage);case C:return e.messageServer;default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=Object(B.b)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),L=document.getElementById("root");c.a.render(r.a.createElement(p.a,{store:J},">",r.a.createElement(V,null)),L),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.d9071f74.chunk.js.map