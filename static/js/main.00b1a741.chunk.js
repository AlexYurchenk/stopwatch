(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{11:function(t,e,n){t.exports={hero:"counter_hero__s7Ok9",counter:"counter_counter__SHpH-",container:"counter_container__1kwZ0",stopwatchScreen:"counter_stopwatchScreen__297kI",number:"counter_number__1Tm5W",buttonList:"counter_buttonList__UPIIq",button:"counter_button__1OWRH"}},32:function(t,e,n){"use strict";n.r(e);var c=n(8),r=n.n(c),o=n(22),a=n.n(o),i=n(21),u=n(11),s=n.n(u),b=n(2),j=function(t){var e=t.time,n=t.buttonList,c=t.onClick;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:s.a.hero,children:"Counter"}),Object(b.jsx)("section",{className:s.a.counter,children:Object(b.jsxs)("div",{className:s.a.container,children:[Object(b.jsx)("ul",{className:s.a.stopwatchScreen,children:e.map((function(t,e){return Object(b.jsx)("li",{children:Object(b.jsx)("p",{className:s.a.number,children:t})},e)}))}),Object(b.jsx)("ul",{className:s.a.buttonList,children:n.map((function(t,e){return Object(b.jsx)("li",{children:Object(b.jsx)("button",{id:t,className:s.a.button,onClick:c[t],children:t})},e)}))})]})})]})},l=n(38),m=n(3),O=n(37),f=n(35),h=n(36),p=n(23),d=n.n(p);function _(t){var e=Math.floor(t/3600);t-=3600*e;var n=Math.floor(t/60),c=(t-=60*n)%60;return["".concat(e<1||e>23?"00":e>=1&&e<=9?"0".concat(e):"".concat(e)),"".concat(n<10?0===n?"00":"0".concat(n):"".concat(n)),"".concat(c<10?"0".concat(c):"".concat(c))]}_.propTypes={time:d.a.number.isRequired};var x=function(){var t=Object(c.useState)(3600),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(!1),a=Object(i.a)(o,2),u=a[0],s=a[1],p=document.getElementById("stop"),d=document.getElementById("wait");return Object(c.useEffect)((function(){if(u){var t=Object(l.a)(p,"click"),e=Object(l.a)(d,"click").pipe(Object(O.a)(300),Object(f.a)((function(t){return 2===t.length})));e.subscribe((function(t){return t[0]})),new m.a((function(t){var e=setInterval((function(){t.next()}),1e3);return function(){clearInterval(e)}})).pipe(Object(h.a)(t)).pipe(Object(h.a)(e)).subscribe({next:function(){!0===u&&r((function(t){return t+1}))}})}}),[u,p,d]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j,{time:_(n),buttonList:["start","stop","wait","reset"],onClick:{start:function(){return s(!0)},stop:function(t){s(!1),r(0)},wait:function(t){setTimeout(function(t){2===t.detail&&s(!1)}(t),300)},reset:function(){r(0),s(!0)}}})})};n(31);a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.00b1a741.chunk.js.map