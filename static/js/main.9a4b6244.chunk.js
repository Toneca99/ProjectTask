(this.webpackJsonpsmsbump=this.webpackJsonpsmsbump||[]).push([[0],[,,,,,function(e,t,c){e.exports={previewFormIcons:"LeftSidebar_previewFormIcons__2Kh2E",container:"LeftSidebar_container__2QMhZ",previewIcon:"LeftSidebar_previewIcon__1-hn_",navItems:"LeftSidebar_navItems__3q7RB",selected:"LeftSidebar_selected__1ZTbD"}},function(e,t,c){e.exports={headerItem:"Header_headerItem__2VJ9e",draftButton:"Header_draftButton__y8ARR",exit:"Header_exit__1xpX6",logo:"Header_logo__2PF6Q",arrow:"Header_arrow__3XXMm"}},function(e,t,c){e.exports={container:"SubHeader_container__cUOk2",toggleButtons:"SubHeader_toggleButtons__2OVVg",previewButtons:"SubHeader_previewButtons__bTDYy",actionButton:"SubHeader_actionButton__21jk3",deleteButton:"SubHeader_deleteButton__1pMaK",trashIcon:"SubHeader_trashIcon__2izq8"}},function(e,t,c){e.exports={container:"PreviewScreen_container__3_zRu",content:"PreviewScreen_content__Bl0aC",previewImage:"PreviewScreen_previewImage__3-a23",tablet:"PreviewScreen_tablet__2br6U",mobile:"PreviewScreen_mobile__1Ns1i"}},function(e,t,c){e.exports={container:"FormPreview_container__1227R",article:"FormPreview_article__3kU3u",expanded:"FormPreview_expanded__2g1ds",imgPreview:"FormPreview_imgPreview__3yoAC",selected:"FormPreview_selected__2wFhn"}},function(e,t,c){e.exports={link:"LeftSidebarLink_link__2IQ1-",borderLine:"LeftSidebarLink_borderLine__2m6mW",icon:"LeftSidebarLink_icon__2tQZl",selected:"LeftSidebarLink_selected__2nlU6"}},,,function(e,t,c){e.exports={content:"AppLayout_content__1e1Vm",container:"AppLayout_container__3-Tz5"}},,,,,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(14),r=c.n(s),i=c(11),o=c(3),d=c(0),l=Object(n.createContext)(),j="CHANGE_SCREEN_PREVIEW",m="EXPAND_FORM_PREVIEW",b="CLOSE_FORM_PREVIEW",p="SELECT_FORM",x={preview:"desktop",formExpanded:!1,selectedForm:{form:null,src:""}},u=function(e){var t=e.children,c=Object(n.useReducer)((function(e,t){return t.type===j?Object(o.a)(Object(o.a)({},e),{},{preview:t.payload}):t.type===m?Object(o.a)(Object(o.a)({},e),{},{formExpanded:!0}):t.type===b?Object(o.a)(Object(o.a)({},e),{},{formExpanded:!1}):t.type===p?Object(o.a)(Object(o.a)({},e),{},{selectedForm:{form:t.payload.form,src:t.payload.src}}):e}),x),a=Object(i.a)(c,2),s=a[0],r=a[1],u={previewState:s,changeScreenPreview:Object(n.useCallback)((function(e){r({type:j,payload:e})}),[r]),expandFormPreview:Object(n.useCallback)((function(){r({type:m})}),[r]),closeFormPreview:Object(n.useCallback)((function(){r({type:b})}),[r]),selectForm:Object(n.useCallback)((function(e){var t=e.form,c=e.src;r({type:p,payload:{form:t,src:c}})}))};return Object(d.jsx)(l.Provider,{value:u,children:t})},_=c.p+"static/media/IconSprite.0521f9c9.svg",h=function(e){var t=e.name,c=e.width,n=e.height,a=e.styleIcon,s=e.onClick,r=e.styleSvg;return Object(d.jsx)("div",{onClick:s,className:a,children:Object(d.jsx)("svg",{className:r,width:c,height:n,children:Object(d.jsx)("use",{xlinkHref:"".concat(_,"#").concat(t)})})})},O=c.p+"static/media/Logo.37182265.svg",v=c(6),f=c.n(v),w=function(){var e=a.a.useContext(l).previewState;return Object(d.jsxs)("header",{children:[Object(d.jsxs)("article",{className:f.a.leftSide,children:[Object(d.jsx)("img",{className:f.a.logo,src:O,alt:"SMSBump Logo"}),Object(d.jsxs)("div",{className:f.a.headerItem,children:[Object(d.jsx)(h,{name:"pen",width:"15px",height:"15px"}),Object(d.jsxs)("span",{children:["Form ",e.selectedForm.form+1]})]})]}),Object(d.jsxs)("article",{className:f.a.rightSide,children:[Object(d.jsxs)("div",{className:f.a.draftButton,children:[Object(d.jsx)("span",{children:"Draft"}),Object(d.jsx)(h,{styleIcon:f.a.arrow,name:"arrow-down",width:"10px",height:"10px"})]}),Object(d.jsxs)("div",{className:f.a.exit,children:[Object(d.jsx)(h,{name:"exit",width:"15px",height:"21px"}),Object(d.jsx)("span",{children:"Exit"})]})]})]})},g=c(7),S=c.n(g),F=function(){var e=a.a.useContext(l).previewState;return Object(d.jsxs)("div",{className:S.a.container,children:[Object(d.jsxs)("div",{className:S.a.toggleButtons,children:[Object(d.jsx)("span",{children:"1.Design"}),Object(d.jsx)("span",{children:"2.Behaviour"})]}),Object(d.jsxs)("div",{className:S.a.previewButtons,children:[Object(d.jsxs)("span",{children:["Form ",e.selectedForm.form+1]}),Object(d.jsx)("span",{children:"Success"})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:S.a.actionButton,children:[Object(d.jsx)(h,{name:"undo",width:"14px",height:"17px"}),Object(d.jsx)("span",{children:"Undo"})]}),Object(d.jsxs)("div",{className:S.a.actionButton,children:[Object(d.jsx)(h,{name:"redo",width:"14px",height:"17px"}),Object(d.jsx)("span",{children:"Redo"})]}),Object(d.jsxs)("div",{className:S.a.deleteButton,children:[Object(d.jsx)(h,{styleIcon:S.a.trashIcon,name:"trash",width:"14px",height:"19px"}),Object(d.jsx)("span",{children:"Delete Element"})]})]})]})},N=c(2),k=c(4),I=c.n(k),C=[{src:c.p+"static/media/CommerceExpert.7f95bf72.svg",steps:2},{src:c.p+"static/media/Police.6e3aa6af.svg",steps:3},{src:c.p+"static/media/two column.59b8f540.svg",steps:2},{src:c.p+"static/media/StayTuned.5cb2b94a.svg",steps:4},{src:c.p+"static/media/ThankYou.9afaef78.svg",steps:2},{src:c.p+"static/media/Awesome.6f616965.svg",steps:3},{src:c.p+"static/media/70off.fd8eda02.svg",steps:3},{src:c.p+"static/media/Marketing nerds.2bcbc23d.svg",steps:4}],P=[{icon:"theme",title:"Theme"},{icon:"form",title:"Form"},{icon:"text",title:"Text"},{icon:"phone-field",title:"Phone Field"},{icon:"email",title:"Email Field"},{icon:"component",title:"Name Field"},{icon:"button",title:"Button Field"},{icon:"checkbox",title:"Checkbox"},{icon:"close-button",title:"Close Button"},{icon:"compliance",title:"Complience"}],y=c(10),B=c.n(y),E=function(e){var t=e.icon,c=e.title,n=e.onClick,a=e.selected,s=I()(B.a.link,Object(N.a)({},B.a.selected,a));return Object(d.jsxs)("div",{className:s,onClick:n,children:[Object(d.jsx)("div",{className:B.a.borderLine}),Object(d.jsx)(h,{styleIcon:B.a.icon,name:t,width:"2.5rem",height:"2.5rem"}),c]})},L=c(5),R=c.n(L),H=function(){var e=a.a.useContext(l),t=e.closeFormPreview,c=e.expandFormPreview,s=Object(n.useState)(1),r=Object(i.a)(s,2),o=r[0],j=r[1];return Object(n.useEffect)((function(){0===o?c():t()}),[o]),Object(d.jsx)("div",{className:R.a.navItems,children:P.map((function(e,t){return Object(d.jsx)(E,{icon:e.icon,title:e.title,selected:t===o,onClick:function(){return j(t)}},t)}))})},M=function(){var e=a.a.useContext(l),t=e.previewState,c=e.changeScreenPreview;return Object(d.jsxs)("nav",{className:R.a.container,children:[Object(d.jsx)("div",{className:R.a.previewFormIcons,children:["desktop","pad","phone"].map((function(e,n){return Object(d.jsx)(h,{styleIcon:I()(R.a.previewIcon,Object(N.a)({},R.a.selected,t.preview===e)),onClick:function(){return c(e)},name:e,width:"2rem",height:"2rem"},n)}))}),Object(d.jsx)(H,{}),Object(d.jsx)("div",{className:R.a.nextFormButton,children:Object(d.jsx)("span",{children:"Next Form"})})]})},T=c(8),A=c.n(T),V=function(){var e,t=Object(n.useContext)(l).previewState,c=I()(A.a.content,(e={},Object(N.a)(e,A.a.tablet,"pad"===t.preview),Object(N.a)(e,A.a.mobile,"phone"===t.preview),e)),a=!!t.selectedForm.src;return Object(d.jsx)("main",{className:A.a.container,children:Object(d.jsx)("div",{className:c,children:a&&Object(d.jsx)("img",{className:A.a.previewImage,src:t.selectedForm.src})})})},D=c(9),U=c.n(D),Q=function(){var e=a.a.useContext(l),t=e.previewState,c=e.selectForm,n=I()(U.a.container,Object(N.a)({},U.a.expanded,!0===t.formExpanded)),s=function(e,t){return function(){c({form:t,src:e.src})}},r=t.selectedForm.form&&t.selectedForm.form;return Object(d.jsx)("div",{className:n,children:C.map((function(e,t){return Object(d.jsxs)("article",{className:U.a.article,onClick:s(e,t),children:[Object(d.jsx)("img",{className:U.a.imgPreview,src:e.src}),r===t&&Object(d.jsx)("span",{className:U.a.selected,children:"Selected"}),Object(d.jsxs)("p",{children:["This Form has ",e.steps," ",Object(d.jsx)("span",{children:"steps"})]})]})}))})},W=c(13),X=c.n(W),z=function(){return Object(d.jsx)("div",{className:X.a.container,children:Object(d.jsxs)(u,{children:[Object(d.jsx)(w,{}),Object(d.jsx)(F,{}),Object(d.jsxs)("div",{className:X.a.content,children:[Object(d.jsx)(M,{}),Object(d.jsx)(Q,{}),Object(d.jsx)(V,{})]})]})})};c(20);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.9a4b6244.chunk.js.map