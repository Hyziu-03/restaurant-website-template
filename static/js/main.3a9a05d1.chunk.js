(this["webpackJsonprestaurant-website-template"]=this["webpackJsonprestaurant-website-template"]||[]).push([[0],{20:function(e,t,s){},29:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(5),c=s.n(i),r=(s(20),s(9)),l=s.n(r),o=s(13),u=s(3),d=s(0),m=function(){window.location.reload(!0)},j=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("span",{className:"heading",onClick:m,children:Object(d.jsx)("h1",{children:"Your Name"})})})},b=s(7),h=function(){var e=Object(n.useState)(1),t=Object(b.a)(e,2),s=t[0],a=t[1],i={categories:["proin blandit","suspendisse non","fermentum ultrices","volutpat vulputat"],names:[["Sed fermentum","Sapien nec lobortis","Tristique in suspendisse","Pellentesque mattis elit","Vel interdum velit"],["Nam nisi quam","Donec non viverra","Morbi suscipit mattis","Sed dignissim nisi","Aliquam vitae"],["Curabitur ante mi","Nulla a felis","Donec porta convallis ","Vestibulum viverra ","Nullam viverra "],["Vestibulum odio","Mauris neque ligula","Praesent iaculis nunc","Cras sollicitudin est","Class aptent taciti "]],prices:[[13.99,11.99,15.99,17.99,21.99],[22.99,20.99,18.99,16.99,24.99],[11.99,21.99,31.99,25.99,15.99],[6.99,8.99,10.99,4.99,8.99]]},c=Math.abs(s%4),r=window.innerWidth<=750?Object(d.jsx)("br",{}):void 0;return Object(d.jsx)(u.a,{children:Object(d.jsxs)("section",{className:"menu",children:[Object(d.jsx)("div",{children:Object(d.jsx)("i",{className:"fas fa-chevron-circle-left",id:"menu-arrow-left",onClick:function(){return a((function(e){return e-1}))}})}),Object(d.jsxs)("h1",{className:"dish-category",children:["You are viewing ",i.categories[c]]}),Object(d.jsx)("i",{className:"fas fa-times"}),Object(d.jsxs)("ul",{className:"dish-list",children:[Object(d.jsxs)("li",{className:"dish",children:[i.names[c][0]," ",r," ",Object(d.jsxs)("span",{className:"price",children:[i.prices[c][0]," PLN"]})]}),Object(d.jsxs)("li",{className:"dish",children:[i.names[c][1]," ",r," ",Object(d.jsxs)("span",{className:"price",children:[i.prices[c][1]," PLN"]})]}),Object(d.jsxs)("li",{className:"dish",children:[i.names[c][2]," ",r," ",Object(d.jsxs)("span",{className:"price",children:[i.prices[c][2]," PLN"]})]}),Object(d.jsxs)("li",{className:"dish",children:[i.names[c][3]," ",r," ",Object(d.jsxs)("span",{className:"price",children:[i.prices[c][3]," PLN"]})]}),Object(d.jsxs)("li",{className:"dish",children:[i.names[c][4]," ",r," ",Object(d.jsxs)("span",{className:"price",children:[i.prices[c][4]," PLN"]})]})]}),Object(d.jsx)("i",{className:"fas fa-chevron-circle-right",id:"menu-arrow-right",onClick:function(){return a((function(e){return e+1}))}})]})})},p=s.p+"static/media/pizza.3ea749fc.png",x=function(e){e.preventDefault(),document.getElementById("placeholder").style.display="none",c.a.unmountComponentAtNode(document.getElementById("placeholder"));var t=document.getElementById("container");t.style.filter="",t.style.pointerEvents="auto"},f=function(){var e=document.getElementById("placeholder");c.a.render(Object(d.jsx)(h,{}),e),e.style.display="block";var t=document.getElementById("container");t.style.filter="blur(8px)",t.style.pointerEvents="none"},O=function(){return window.addEventListener("click",(function(e){e.target===document.getElementsByClassName("fa-times")[0]&&x(e)})),Object(d.jsxs)("article",{className:"landing-page",onLoad:x,children:[Object(d.jsxs)("section",{className:"textual-section",children:[Object(d.jsxs)("section",{className:"introduction",children:[Object(d.jsx)("h2",{className:"headline",children:"Headline that captures attention!"}),Object(d.jsx)("p",{className:"description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sodales ligula. Cras in elementum mauris, id suscipit libero. Duis at massa sit amet ligula porta accumsan at id elit."})]}),Object(d.jsxs)("section",{className:"landing-page-buttons",children:[Object(d.jsx)("button",{className:"browse-our-menu focusable-button",onClick:f,tabIndex:"0",children:Object(d.jsx)("span",{tabIndex:"0",className:"button-link",id:"browse-our-menu",children:"Browse our menu"})}),Object(d.jsx)("button",{className:"see-customer-reviews focusable-button",tabIndex:"0",children:Object(d.jsx)("a",{href:"#customer-reviews",tabIndex:"-1",className:"button-link",children:"See customer reviews"})})]})]}),Object(d.jsx)("img",{src:p,alt:"Round and yummy pizza with tomatoes, cheese, olives and basil.",className:"pizza"})]})},g=s.p+"static/media/kate-swift.7bb56ef5.jpg",v=function(){return Object(d.jsx)("img",{src:g,alt:"",className:"customer-photo"})},N=s.p+"static/media/john-doe.6fdb476b.jpg",w=function(){return Object(d.jsx)("img",{src:N,alt:"",className:"customer-photo"})},y=s.p+"static/media/matt-smith.dce0d970.jpg",k=function(){return Object(d.jsx)("img",{src:y,alt:"",className:"customer-photo"})},I=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),s=t[0],a=t[1],i={reviews:["Vivamus non blandit lacus. Morbi laoreet bibendum ipsum, eget gravida magna cursus vitae. Phasellus nec quam convallis, convallis orci non, consectetur magna.Suspendisse laoreet mi ac purus laoreet fringilla.In at dolor rhoncus, tempor nulla id, tempor nibh.Integer rutrum libero justo, eu fermentum est ultricies eget.","Curabitur condimentum, lorem sit amet venenatis tempor, nisi enim ullamcorper quam, sed dignissim arcu leo et magna. Integer ullamcorper feugiat augue, et porttitor felis elementum non. Nam velit diam, volutpat non mauris eget, pretium efficitur diam. Quisque eget sagittis ipsum. Phasellus sit amet quam.","Duis finibus ipsum sit amet bibendum iaculis. In risus leo, malesuada non sapien sed, cursus vestibulum nisl. Mauris mollis rutrum felis a sodales. Nulla sem ipsum, porttitor eu tellus vel, elementum condimentum nisi. Sed sed neque maximus, sollicitudin elit sed, tincidunt elit. Praesent vitae."],signatures:["Kate Swift","John Doe","Matt Smith"],photos:[Object(d.jsx)(v,{}),Object(d.jsx)(w,{}),Object(d.jsx)(k,{})]},c=Math.abs(s%3);try{switch(c){case 0:s=1;break;case 1:s=2;break;case 2:s=0;break;default:console.error("[KNOWN ISSUE] Slide index is out of range.")}}catch(r){throw new Error(r)}return Object(d.jsxs)("article",{className:"customer-reviews",id:"customer-reviews",children:[Object(d.jsx)("i",{className:"fas fa-chevron-circle-left",onClick:function(){return a(s)},tabIndex:"0"}),i.photos[s],Object(d.jsxs)("section",{className:"feedback",children:[Object(d.jsx)("p",{className:"customer-words",id:"customer-words",children:i.reviews[s]}),Object(d.jsx)("span",{className:"signature",id:"signature",children:i.signatures[s]})]}),Object(d.jsx)("i",{className:"fas fa-chevron-circle-right",onClick:function(){return a(s+1)},tabIndex:"0  "})]})},C=s(15),E=s.n(C),S=s.p+"static/media/envelope.d3051aa7.jpg",B=function(){var e="";return Object(d.jsx)(u.a,{children:Object(d.jsxs)("section",{className:"contact-form",children:[Object(d.jsx)("i",{className:"fas fa-times"}),Object(d.jsxs)("section",{className:"input-fields",children:[Object(d.jsxs)("label",{htmlFor:"name",className:"label",children:["Your name is: \u2003 ",Object(d.jsx)("input",{type:"text",className:"input",name:"name",placeholder:"Yuval Noah"})]}),Object(d.jsxs)("label",{htmlFor:"email",className:"label",children:["Your email is: \u2003 ",Object(d.jsx)("input",{type:"email",className:"input",name:"email",placeholder:"harari@gmail.com"})]}),Object(d.jsx)("textarea",{className:"textarea input",id:"textarea",placeholder:"What is on your mind?",onChange:function(){return e=document.getElementById("textarea").value}}),Object(d.jsx)("button",{className:"send-feedback",onClick:function(){console.log("You sent "+e),alert("Check your console for the sent message!")},children:"Send!"})]}),Object(d.jsx)("img",{src:S,alt:"",className:"roses-envelope"})]})})},L=function(){var e=document.getElementById("placeholder");e.innerHTML="",e.style.display="none";var t=document.getElementById("container");t.style.filter="",t.style.pointerEvents="auto"},P=function(){var e=document.getElementById("placeholder");e.innerHTML=E.a.renderToString(Object(d.jsx)(B,{})),e.style.display="block";var t=document.getElementById("container");t.style.filter="blur(8px)",t.style.pointerEvents="none"},q=function(){return window.addEventListener("click",(function(e){e.target===document.getElementsByClassName("fa-times")[0]&&L()})),Object(d.jsxs)("footer",{className:"footer",onLoad:L,children:[Object(d.jsx)("span",{tabIndex:"0",children:Object(d.jsx)("button",{className:"contact-us",onClick:P,children:"Contact Us"})}),Object(d.jsxs)("p",{className:"copyright",children:["This website template has been designed and developed by ",Object(d.jsx)("strong",{children:"Szymon Hyziak"}),". Find me on LinkedIn using the link ",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/szymon-hyziak/",className:"link",target:"_blank",rel:"noreferrer",children:"here"}),". Thank you! Icons made by ",Object(d.jsx)("a",{href:"https://www.freepik.com",target:"_blank",rel:"noreferrer",className:"link",children:"Freepik"})," from ",Object(d.jsx)("a",{href:"https://www.flaticon.com/",target:"_blank",rel:"noreferrer",className:"link",children:"www.flaticon.com"}),"."]})]})},z=function(e){try{(new Image).src=e}catch(t){throw new Error(t)}},M=function(){return new Promise((function(e){setTimeout((function(){e("The app has been loaded successfully")}),750)}))};function T(){return(T=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.body.style.overflow="hidden",e.next=3,M();case 3:t=e.sent,console.log(t),document.body.style.overflow="visible";case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){return z("../src/img/kate-swift.jpg"),z("../src/img/matt-smith.jpg"),function(){T.apply(this,arguments)}(),Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)(u.a,{children:[Object(d.jsxs)("div",{id:"container",children:[Object(d.jsx)("section",{id:"loader",className:"loader",children:Object(d.jsxs)("div",{className:"lds-default",children:[" ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{})," ",Object(d.jsx)("div",{}),Object(d.jsx)("div",{})," "]})}),Object(d.jsx)(j,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(O,{}),Object(d.jsx)(I,{})]}),Object(d.jsx)(q,{})]}),Object(d.jsxs)("div",{id:"placeholder",children:[Object(d.jsx)(h,{})," ",Object(d.jsx)(B,{})]})]})})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,30)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),D()}},[[29,1,2]]]);
//# sourceMappingURL=main.3a9a05d1.chunk.js.map