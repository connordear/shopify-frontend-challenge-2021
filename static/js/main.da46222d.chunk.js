(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{26:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(16),a=n.n(s),r=n(6),o=n(2),u=n(82),h=(n(26),n(1)),j=u.a.Header,l=(u.a.Footer,u.a.Content),b={width:"100%",margin:"0 auto"},A=function(){var e=Object(c.useState)("centered-text red-highlight"),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){i("centered-text red-highlight show-highlight")}),[]),Object(h.jsxs)(u.a,{style:b,children:[Object(h.jsx)(j,{children:Object(h.jsx)("div",{className:"flex-center",children:Object(h.jsx)("h1",{className:n,children:"SHOPPIES"})})}),Object(h.jsxs)(l,{children:[Object(h.jsx)(Q,{}),Object(h.jsx)(D,{}),Object(h.jsx)(x,{})]})]})},d=Object(r.b)({key:"nominees",default:new Map}),O=Object(r.c)({key:"nomineeCount",get:function(e){return(0,e.get)(d).size}}),m=n(21),f=n.n(m),g=(n(57),function(e){var t=e.movie,n=Object(r.d)(d),i=Object(o.a)(n,2),s=i[0],a=i[1],u=Object(c.useCallback)((function(){a((function(e){return f()(e,{$remove:[t.imdbID]})}))}),[t,s]);return Object(h.jsx)("li",{className:"NominationDisplay_li",children:Object(h.jsxs)("div",{className:"NominationDisplay_wrapper",onClick:u,children:["N/A"!==t.Poster?Object(h.jsx)("img",{src:t.Poster,height:300,width:200}):Object(h.jsx)("div",{className:"NominationDisplay_filler",children:" "}),Object(h.jsxs)("h3",{className:"centered-text",children:[t.Title," (",t.Year,")"]})]})})}),x=(n(58),function(){var e=Object(r.e)(d),t=Object(r.e)(O);return Object(h.jsx)("div",{className:"NominationsList_wrapper",children:t>0?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{className:"centered-text NominationsList_heading",children:"Your Nominations"}),Object(h.jsx)("p",{className:"centered-text NominationsList_p",children:"(Click to remove)"}),Object(h.jsx)("ul",{className:"NominationsList_ul",children:Array.from(e.values()).map((function(e){return Object(h.jsx)(g,{movie:e},e.imdbID)}))})]}):Object(h.jsx)("h3",{className:"centered-text",children:"Select a movie from the dropdown to begin."})})}),p=n(8),v=n.n(p),E=n(19),B=n(47),w=n.n(B),I=n(3),C=function e(t){Object(I.a)(this,e),this.Title="",this.Year="",this.Rated="",this.Released="",this.Runtime="",this.Genre="",this.Director="",this.Writer="",this.Actors="",this.Plot="",this.Language="",this.Country="",this.Awards="",this.Poster="",this.Ratings=[],this.Metascore="",this.imdbRating="",this.imdbVotes="",this.imdbID="",this.Type="",this.DVD="",this.BoxOffice="",this.Production="",this.Website="",Object.assign(this,t)},N=(n(76),function(e){var t=e.movie,n=Object(r.d)(d),i=Object(o.a)(n,2),s=i[0],a=i[1],u=Object(c.useState)(!1),j=Object(o.a)(u,2),l=j[0],b=j[1];Object(c.useEffect)((function(){var e=s.has(t.imdbID);e!==l&&b(e)}),[s,t]);var A=Object(c.useCallback)((function(){a((function(e){return f()(e,{$add:[[t.imdbID,t]]})}))}),[t]);return Object(h.jsx)("li",{className:"MSR_li",children:Object(h.jsxs)("button",{className:"MSR_button",onClick:A,disabled:l,children:[Object(h.jsx)("img",{src:t.Poster.length>0?t.Poster:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACX0lEQVR4Ae3bAYRUURhH8atmSBtUASAgBhBEAIgCgBWAgBACgCAAwy4hFkBKBRC2aqsCBNiFRARAyoPEywnQU7L79k7zz51zADDXfD/e+Ma7xczMzMzMbBgwAdaLxYb/GAC4VWI5fIIIDj+N4PArEICLQEdbdcAeMAdmyx4+iDCsBzaBaT0AHAeeA4gwuu1FIrwQ4VBtlNoGCDsijK4HZotEeCnC6OZlUQFrwCsRRrVbKhKhvq4ssgHCaxEOVvkXASeANyKEAAYIb0UIAQwQEKEWoCIAEfIAIuQBRMgDiJAHECEPIEIeQIQ8gAh5ABHiACKEAUQIA4gQBhAhDCBCGECEMIAIYQARwgAihAFECAOIEAYQIQwgQhhAhDCACGEAEcIAIsQARBAggCBAAEGAAEL7AFvAnTzCagK8A44BE+BZHmG1AD4DZweffRJ4n0dYDYAfwOXyW8A54EsaYaXfDQUuAX0eoV2AJ8CRfc65AZBHaA/gI3DqgGfd3f8xxtWl3d5sAOAbcH7EWVNgh793e6lXaBsAuFZGBpwGPvBnT4ePsTzC/w+wVXHmDPjKrz4BZ/KXyQMANctW5blXgB74DlzI3+gPAVQsW9UBN4HrZVgeIQUwYtkKlEJIANR/qQYQAgD1y1ZrCAGA+mWrJYQAQP2y1RpCAKB+2WoJIQDQUvUIAoQRBGgdgWwiAJ0IwYBdLIcAzLEcAjADeiyKsIHlEIApsI3FETaBHov/JsyBPaATwfJ/4JkI+UQQAVgvFkN4BEyKRRAeOvwcwgOHn0O4DxwtkUS45/BDAWsO3+ww/QQ+vWAE9qCruwAAAABJRU5ErkJggg==",height:75,width:50}),Object(h.jsxs)("h4",{style:{marginLeft:10},children:[t.Title," (",t.Year,")"]})]})})}),D=(n(77),function(){var e,t,n=function(e,t){var n=Object(c.useState)(e),i=Object(o.a)(n,2),s=i[0],a=i[1],r=Object(c.useState)(e),u=Object(o.a)(r,2),h=u[0],j=u[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){j(s)}),t);return function(){clearTimeout(e)}}),[s,t]),[h,s,a]}("",200),i=Object(o.a)(n,3),s=i[0],a=i[1],r=i[2],u=Object(c.useState)(!1),j=Object(o.a)(u,2),l=j[0],b=j[1],A=Object(c.useState)(!1),d=Object(o.a)(A,2),O=d[0],m=d[1],f=Object(c.useState)([]),g=Object(o.a)(f,2),x=g[0],p=g[1],B=Object(c.useState)(""),I=Object(o.a)(B,2),D=I[0],Q=I[1],y=Object(c.useRef)(null);e=y,t=function(){return m(!1)},Object(c.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t]),Object(c.useEffect)((function(){R(s)}),[s]);var R=function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return",(b(!1),p([]),void Q("")));case 2:b(!0),w.a.get("https://omdbapi.com/?s=".concat(t,"&type=movie&apikey=46b690a6")).then((function(e){"True"===e.data.Response?(Q(""),p(e.data.Search.map((function(e){return new C(e)})))):(Q(e.data.Error),p([])),b(!1)})).catch((function(e){console.log(e),b(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{ref:y,className:"flex-center SearchBar_wrapper",children:[Object(h.jsx)("input",{className:"SearchBar_input input",value:a,type:"text",onChange:function(e){r(e.target.value)},onFocus:function(){return m(!0)},placeholder:'Enter a movie name, e.g. "moonrise kingdom"'}),l&&Object(h.jsx)("div",{className:"SearchBar_spinner",id:"loading"}),Object(h.jsx)("ul",{className:"SearchBar_ul",style:{height:O&&x.length>0?300:0},children:x.length>0?x.map((function(e){return Object(h.jsx)(N,{movie:e},e.imdbID)})):D})]})})}),Q=(n(78),function(){var e=Object(r.e)(O);return Object(h.jsx)("div",{className:"CompletionBanner_wrapper",style:{height:e>=5?100:0,opacity:e>=5?1:0},children:e>=5&&Object(h.jsxs)("p",{className:"ribbon",children:[" ",Object(h.jsxs)("span",{className:"text",children:[Object(h.jsx)("strong",{className:"bold",children:"All Done!"})," You're ready for the red carpet!"]})]})})}),y=function(){return Object(h.jsx)(r.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(A,{})})})};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.da46222d.chunk.js.map