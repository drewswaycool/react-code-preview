(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[493],{1081:function(e,n,t){!function(e){"use strict";e.defineMode("ntriples",(function(){var e=0,n=1,t=2,r=3,i=4,a=5,u=6,s=7,o=8,c=9,p=10,l=11,f=12;function h(h,v){var d,b=h.location;d=b==e&&"<"==v?n:b==e&&"_"==v?t:b==r&&"<"==v?i:b==a&&"<"==v?u:b==a&&"_"==v?s:b==a&&'"'==v?o:b==n&&">"==v||b==t&&" "==v?r:b==i&&">"==v?a:b==u&&">"==v||b==s&&" "==v||b==o&&'"'==v||b==c&&" "==v||b==p&&">"==v?l:b==o&&"@"==v?c:b==o&&"^"==v?p:" "!=v||b!=e&&b!=r&&b!=a&&b!=l?b==l&&"."==v?e:f:b,h.location=d}return{startState:function(){return{location:e,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(e,n){var t=e.next();if("<"==t){h(n,t);var r="";return e.eatWhile((function(e){return"#"!=e&&">"!=e&&(r+=e,!0)})),n.uris.push(r),e.match("#",!1)||(e.next(),h(n,">")),"variable"}if("#"==t){var i="";return e.eatWhile((function(e){return">"!=e&&" "!=e&&(i+=e,!0)})),n.anchors.push(i),"variable-2"}if(">"==t)return h(n,">"),"variable";if("_"==t){h(n,t);var a="";return e.eatWhile((function(e){return" "!=e&&(a+=e,!0)})),n.bnodes.push(a),e.next(),h(n," "),"builtin"}if('"'==t)return h(n,t),e.eatWhile((function(e){return'"'!=e})),e.next(),"@"!=e.peek()&&"^"!=e.peek()&&h(n,'"'),"string";if("@"==t){h(n,"@");var u="";return e.eatWhile((function(e){return" "!=e&&(u+=e,!0)})),n.langs.push(u),e.next(),h(n," "),"string-2"}if("^"==t){e.next(),h(n,"^");var s="";return e.eatWhile((function(e){return">"!=e&&(s+=e,!0)})),n.types.push(s),e.next(),h(n,">"),"variable"}" "==t&&h(n,t),"."==t&&h(n,t)}}})),e.defineMIME("application/n-triples","ntriples"),e.defineMIME("application/n-quads","ntriples"),e.defineMIME("text/n-triples","ntriples")}(t(41))}}]);
//# sourceMappingURL=493.659456b4.chunk.js.map