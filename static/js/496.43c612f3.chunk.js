(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[496],{1084:function(e,t,r){!function(e){"use strict";e.defineMode("pascal",(function(){var e=function(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),t={null:!0},r=/[+\-*&%=<>!?|\/]/;function n(n,a){var o,l=n.next();if("#"==l&&a.startOfLine)return n.skipToEnd(),"meta";if('"'==l||"'"==l)return a.tokenize=(o=l,function(e,t){for(var r,n=!1,i=!1;null!=(r=e.next());){if(r==o&&!n){i=!0;break}n=!n&&"\\"==r}return!i&&n||(t.tokenize=null),"string"}),a.tokenize(n,a);if("("==l&&n.eat("*"))return a.tokenize=i,i(n,a);if(/[\[\]{}\(\),;\:\.]/.test(l))return null;if(/\d/.test(l))return n.eatWhile(/[\w\.]/),"number";if("/"==l&&n.eat("/"))return n.skipToEnd(),"comment";if(r.test(l))return n.eatWhile(r),"operator";n.eatWhile(/[\w\$_]/);var s=n.current();return e.propertyIsEnumerable(s)?"keyword":t.propertyIsEnumerable(s)?"atom":"variable"}function i(e,t){for(var r,n=!1;r=e.next();){if(")"==r&&n){t.tokenize=null;break}n="*"==r}return"comment"}return{startState:function(){return{tokenize:null}},token:function(e,t){if(e.eatSpace())return null;var r=(t.tokenize||n)(e,t);return r},electricChars:"{}"}})),e.defineMIME("text/x-pascal","pascal")}(r(41))}}]);
//# sourceMappingURL=496.43c612f3.chunk.js.map