(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/small_profile_photo.1fb82000.jpeg"},32:function(e,t,a){e.exports=a.p+"static/media/linkedin2.9a894325.svg"},33:function(e,t,a){e.exports=a.p+"static/media/github.4b68bf6c.svg"},36:function(e,t,a){e.exports=a.p+"static/media/glass_temple.72599f14.JPG"},39:function(e,t,a){e.exports=a(68)},44:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(30),r=a.n(l),s=a(7),c=(a(44),a(10)),i=a(11),m=a(13),u=a(12),h=a(14),p=a(6),d=(a(20),a(31)),g=a.n(d),b=a(32),f=a.n(b),E=a(33),v=a.n(E);var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{className:"profile_photo",src:g.a,alt:"",width:350}),o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,"Hi! I'm Larissa Kobetz, a full stack software developer."),o.a.createElement("div",{className:"all_pages"},o.a.createElement(s.b,{to:"/about",style:{textDecoration:"none",color:"black"}},o.a.createElement("h5",{className:"pages"},"About Me"))," ",o.a.createElement("h5",null,"|"),o.a.createElement(s.b,{to:"/projects",style:{textDecoration:"none",color:"black"}},o.a.createElement("h5",{className:"pages"},"Projects"))," ",o.a.createElement("h5",null,"|"),o.a.createElement(s.b,{to:"/contact",style:{textDecoration:"none",color:"black"}},o.a.createElement("h5",{className:"pages"},"Contact"))),o.a.createElement("div",{id:"logos"},o.a.createElement("a",{href:"https://www.linkedin.com/in/larissa-kobetz/"},o.a.createElement("img",{className:"logo",id:"linkedin",src:f.a,alt:""})),o.a.createElement("a",{href:"https://github.com/lkobetz"},o.a.createElement("img",{className:"logo",id:"github",src:v.a,alt:"",width:50}))))))},w=a(36),k=a.n(w),N=function(e){return o.a.createElement("div",{className:"App-header"},o.a.createElement("div",{className:"text"},o.a.createElement("h2",null,"About Me"),o.a.createElement("div",{className:"section"},o.a.createElement("img",{className:"about_me_photo",src:k.a,alt:""}),o.a.createElement("h5",null,"With a background in English language education, I loved finding creative ways to engage students in learning new concepts. Pursuing more automated, interactive tools to spice up my lessons inspired me to learn more about Technology. I wanted to learn the skills to build new and engaging products myself to improve user/learner experiences. After completing the Grace Hopper bootcamp, I now work as a Software Engineering Teaching Fellow, combining my love of teaching and coding. I\u2019ve become more and more fascinated with the possibilities Technology offers to solve complex problems, and am eager to launch a career that will allow me to explore the potential applications of Technology to improve our world.",o.a.createElement("br",null),o.a.createElement("br",null),"In my free time, I love traveling and learning about the people, cultures, and history of the world. I've lived in England, Thailand, and Malaysia and have visited 20 other countries. I also love reading, exploring, and playing games!"))))},x=function(e){return o.a.createElement("div",null,o.a.createElement("h2",null,"Projects coming soon..."))},j=a(18),O=a.n(j),C=a(37),I=a(38),S=a.n(I),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={name:"",email:"",message:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Contact"},o.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onNameChange.bind(this)})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"message"},"Message"),o.a.createElement("textarea",{className:"form-control",rows:"5",value:this.state.message,onChange:this.onMessageChange.bind(this)})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(C.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,S.a.post("https://secret-harbor-77463.herokuapp.com/",this.state);case 3:a=e.sent,console.log("response.data from axios",a.data),"success"===a.data.status?(alert("Message Sent."),this.resetForm()):"fail"===a.data.status&&alert("Message failed to send.");case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}}]),t}(o.a.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:Object(p.f)(y)}),o.a.createElement(p.a,{exact:!0,path:"/about",component:Object(p.f)(N)}),o.a.createElement(p.a,{exact:!0,path:"/contact",component:Object(p.f)(M)}),o.a.createElement(p.a,{exact:!0,path:"/projects",component:Object(p.f)(x)}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(s.a,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.fd96fcbb.chunk.js.map