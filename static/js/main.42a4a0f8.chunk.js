(this["webpackJsonpcrypto-trade"]=this["webpackJsonpcrypto-trade"]||[]).push([[0],{41:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),o=n(16),i=n.n(o),s=n(8),u=n(10),d=n(25),l=(n(41),n(13)),j=n(3),h=n(26);function p(){var e=Object(h.a)(["\n  max-width: 1300px;\n  margin: auto;\n\n  .change-pct-24h {\n    width: 80px;\n    margin-left: 15px;\n  }\n\n  .home-table-order th:hover {\n    background-color: rgba(18, 102, 241, 0.3);\n  }\n"]);return p=function(){return e},e}var b=n(27).a.div(p()),O=n(31),f=n(14),x=n.n(f),m=["USD","USDT","BTC","ETH","EUR","GBP","JPY","KRW"],y=function(){return Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("div",{className:"spinner-border text-primary mx-auto mt-5 mx-auto",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})})},C=n(15),g=function(e){return e.currency},v=Object(C.a)((function(e){return e.coins}),(function(e,t){return t.match.params.id}),(function(e,t){return e.filter((function(e){return e.CoinInfo.Name===t}))[0]})),E=Object(C.a)(v,g,(function(e,t){return e&&e.DISPLAY[t]&&e.DISPLAY[t].MKTCAP})),S=Object(C.a)(v,g,(function(e,t){return e&&e.DISPLAY[t]&&e.DISPLAY[t].VOLUME24HOURTO})),N=Object(C.a)(v,g,(function(e,t){return e&&e.DISPLAY[t]&&e.DISPLAY[t].SUPPLY})),T=function(e){return e.CoinInfo.Name},I=function(e){return e.CoinInfo.FullName},P=function(e){return e.CoinInfo.ImageUrl},L=function(e,t){return e.DISPLAY[t].PRICE},w=function(e,t){return e.DISPLAY[t].MKTCAP},_=function(e,t){return e.DISPLAY[t].CHANGEPCT24HOUR},D=function(e){var t=e.isLoading,n=e.coinData,a=e.displayCurrencyMktcap,o=e.displayCurrencyVolume24HourTo,i=e.displayCurrencySupply,s=Object(j.f)(),u=Object(r.useState)(),d=Object(O.a)(u,2),l=d[0],h=d[1];return Object(r.useEffect)((function(){h(n)}),[n]),Object(c.jsxs)("div",{className:"mx-3",children:[t&&Object(c.jsx)(y,{}),!t&&l&&Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Market Cap"}),Object(c.jsx)("th",{scope:"col",children:"Volume 24 Hours"}),Object(c.jsx)("th",{scope:"col",children:"Supply"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:o}),Object(c.jsx)("td",{children:i})]})})]}),Object(c.jsx)("nav",{className:"pagination justify-content-center fixed-bottom bg-white pt-2 pb-4",children:Object(c.jsx)("button",{className:"page-link text-dark",type:"submit",onClick:function(){s.push("/")},children:"HOME"})})]})};D.defaultProps={coinData:{},displayCurrencyMktcap:"",displayCurrencyVolume24HourTo:"",displayCurrencySupply:""};var A=Object(s.b)((function(e,t){return{coins:e.coins,isLoading:e.isLoading,coinData:v(e,t),displayCurrencyMktcap:E(e,t),displayCurrencyVolume24HourTo:S(e,t),displayCurrencySupply:N(e,t)}}))(D),R=function(e){return{type:"FETCH_COINS_PENDING",payload:e}},U=function(e){return{type:"FETCH_COINS_FAILURE",payload:e}},M=function(e){var t=e.currency,n=e.timestamp,r=e.setCurrency,a=Object(j.g)().pathname.replace(/\/coins\/|\//,"");return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("h1",{children:a||"Crypto Trade"}),Object(c.jsxs)("p",{children:["Last update: ",n]}),Object(c.jsxs)("div",{className:"dropdown",children:[Object(c.jsx)("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:t}),Object(c.jsx)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",onClick:function(e){var t=e.target.innerText;r(t)},"aria-hidden":"true",children:m.map((function(e){return Object(c.jsx)("a",{className:"dropdown-item",href:"#",children:e},e)}))})]})]})};M.defaultProps={timestamp:""};var H=Object(s.b)((function(e){return{currency:e.currency,timestamp:e.timestamp}}),(function(e){return{setCurrency:function(t){return e({type:"SET_CURRENCY",payload:t})}}}))(M),V=function(e){var t=e.change;return t>0?Object(c.jsxs)("div",{className:"text-success text-right change-pct-24h",children:[Object(c.jsxs)("b",{children:[t,"% "]}),Object(c.jsx)("i",{className:"fas fa-arrow-up"})]}):t<0?Object(c.jsxs)("div",{className:"text-danger text-right change-pct-24h",children:[Object(c.jsxs)("b",{children:[-t,"% "]}),Object(c.jsx)("i",{className:"fas fa-arrow-down"})]}):Object(c.jsxs)("div",{className:"text-secondary text-right change-pct-24h",children:[Object(c.jsxs)("b",{children:[t,"% "]}),Object(c.jsx)("i",{className:"fas fa-equals"})]})},k=function(e){var t=e.currency,n=e.isLoading,r=e.orderVar,a=e.setOrderVar,o=e.coins,i=Object(j.f)(),s=function(e,t,n){if(!n.header)return e;var c=n.header,r=n.ord,a="Coin"===c?["CoinInfo","FullName"]:"Price"===c?["RAW",t,"PRICE"]:"Market Cap"===c?["RAW",t,"MKTCAP"]:"24h Change"===c?["RAW",t,"CHANGEPCT24HOUR"]:["RAW",t,"TOTALTOPTIERVOLUME24HTO"];return e.sort((function(e,t){var n,o;return"asc"===r?(n=x()(e,a),o=x()(t,a)):(n=x()(t,a),o=x()(e,a)),"Coin"===c?n.localeCompare(o):n<o?-1:n>o?1:0}))}(o,t,r),u=function(e){return function(){return i.push("/coins/".concat(e))}};return Object(c.jsxs)("div",{className:"mx-3",children:[n&&Object(c.jsx)(y,{}),!n&&o[0]&&o[0].DISPLAY[t]&&Object(c.jsxs)("table",{className:"table table-hover",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{onClick:function(e){var t=e.target.innerText;return t!==r.header&&"#"!==t?a({header:t,ord:"asc"}):t===r.header&&"asc"===r.ord?a({header:t,ord:"desc"}):a({header:"default",ord:"desc"})},className:"home-table-order",children:[Object(c.jsx)("th",{scope:"col",children:"#"}),Object(c.jsx)("th",{className:"text-center",scope:"col",children:"Coin"}),Object(c.jsx)("th",{scope:"col",children:"Price"}),Object(c.jsx)("th",{scope:"col",children:"Market Cap"}),Object(c.jsx)("th",{scope:"col",children:"24h Change"})]})}),Object(c.jsx)("tbody",{children:s.map((function(e,n){return Object(c.jsxs)("tr",{onClick:u(T(e)),children:[Object(c.jsx)("th",{scope:"col",children:n+1}),Object(c.jsxs)("td",{children:[Object(c.jsx)("img",{src:"https://www.cryptocompare.com".concat(P(e),"?width=35"),alt:T(e)})," ",I(e)]}),Object(c.jsx)("td",{children:L(e,t)}),Object(c.jsx)("td",{children:w(e,t)}),Object(c.jsx)("td",{className:"",children:Object(c.jsx)(V,{change:_(e,t)})})]},T(e))}))})]})]})};k.defaultProps={coins:[]};var F=Object(s.b)((function(e){return{currency:e.currency,isLoading:e.isLoading,orderVar:e.orderVar,coins:e.coins}}),(function(e){return{setOrderVar:function(t){return e({type:"SET_ORDERVAR",payload:t})}}}))(k),Y=Object(s.b)((function(e){return{currency:e.currency,fetchError:e.fetchError}}),(function(e){return{fetchCoins:function(){return e((function(e,t){var n=t(),c={limit:10,tsym:n.currency};n.fetchError&&e(U("")),e(R(!0)),fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?".concat(new URLSearchParams(c))).then((function(e){return e.json()})).then((function(t){e(R(!1)),e({type:"FETCH_COINS_SUCCESS",payload:t.Data}),e({type:"SET_TIMESTAMP",payload:(new Date).toLocaleString()})})).catch((function(t){e(R(!1)),e(U(t.toString()))}))}))}}}))((function(e){var t=e.currency,n=e.fetchCoins,a=e.fetchError;return Object(r.useEffect)((function(){n();var e=setInterval((function(){n()}),6e4);return function(){return clearTimeout(e)}}),[t,n]),Object(c.jsx)(l.a,{children:Object(c.jsxs)(b,{children:[Object(c.jsx)(H,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",component:F,exact:!0}),Object(c.jsx)(j.a,{path:"/coins/:id",component:A,exact:!0})]}),a&&Object(c.jsx)("div",{className:"text-center mt-3",children:Object(c.jsx)("h3",{children:a})})]})})})),B=Object(u.c)({currency:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"USD",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENCY":return t.payload;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COINS_PENDING":return t.payload;default:return e}},coins:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COINS_SUCCESS":return t.payload;default:return e}},fetchError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COINS_FAILURE":return t.payload;default:return e}},orderVar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{header:"",ord:"asc"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ORDERVAR":return t.payload;default:return e}},timestamp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"LOADING...",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TIMESTAMP":return t.payload;default:return e}}}),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},W=Object(u.d)(Object(u.a)(d.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),K=Object(u.e)(B,W);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(s.a,{store:K,children:Object(c.jsx)(Y,{})})}),document.getElementById("root")),G()}},[[44,1,2]]]);
//# sourceMappingURL=main.42a4a0f8.chunk.js.map