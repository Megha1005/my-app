(this["webpackJsonpreact-currency_converter"]=this["webpackJsonpreact-currency_converter"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),u=n.n(r),l=n(7),o=n(1);n(13);function s(e){var t=e.listcurrency,n=e.selectCurrency,a=e.onChangeCurrency,r=e.onChangeAmount,u=e.amount;return c.a.createElement("div",null,c.a.createElement("input",{type:"number",className:"input",value:u,onChange:r}),c.a.createElement("div",{className:"from-1"},c.a.createElement("select",{value:n,onChange:a},t.map((function(e){return c.a.createElement("option",{key:e,value:e}," ",e)})))))}var i=n(6),m="https://api.exchangeratesapi.io/latest";var b=function(){var e,t,n=Object(a.useState)([]),r=Object(o.a)(n,2),u=r[0],b=r[1],f=Object(a.useState)(),v=Object(o.a)(f,2),h=v[0],E=v[1],j=Object(a.useState)(),y=Object(o.a)(j,2),p=y[0],O=y[1],g=Object(a.useState)(1),C=Object(o.a)(g,2),d=C[0],S=C[1],x=Object(a.useState)(!0),N=Object(o.a)(x,2),k=N[0],w=N[1],F=Object(a.useState)(!0),A=Object(o.a)(F,2),J=A[0],_=A[1],q=Object(a.useState)(),B=Object(o.a)(q,2),D=B[0],I=B[1];k?(t=d,e=d*D):(e=d,t=d/D),Object(a.useEffect)((function(){fetch(m).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];b([e.base].concat(Object(l.a)(Object.keys(e.rates)))),E(e.base),O(t),I(e.rates[t])}))}),[]),Object(a.useEffect)((function(){null!=h&&null!=p&&fetch("".concat(m,"?base=").concat(h,"&symbols=").concat(p)).then((function(e){return e.json()})).then((function(e){return I(e.rates[p])}))}),[h,p]);var M="".concat(parseFloat(t).toFixed(2)," ").concat(h," = ").concat(parseFloat(e).toFixed(2)," ").concat(p);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-1"},c.a.createElement("h1",null," Currency Converter")),c.a.createElement("div",{className:"container-2"},c.a.createElement("div",{className:"text"}," ",c.a.createElement("p",null,c.a.createElement("h2",null,"Enter the amount to convert"))),c.a.createElement(s,{listcurrency:u,selectCurrency:h,onChangeCurrency:function(e){return E(e.target.value)},onChangeAmount:function(e){S(e.target.value),w(!0)},amount:t}),c.a.createElement("div",{className:"w-full my-2 py-2"},c.a.createElement(i.a,{onClick:function(e){e.preventDefault(),O(h),E(p),w(J),_(k)},className:"equals text-white hover:text-gray-900 rounded-full h-12 w-12 bg-green-600 "})),c.a.createElement(s,{listcurrency:u,selectCurrency:p,onChangeCurrency:function(e){return O(e.target.value)},onChangeAmount:function(e){S(e.target.value),w(!1)},amount:e}),c.a.createElement("p",null,M)))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.16871408.chunk.js.map