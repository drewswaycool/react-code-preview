(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[454],{1035:function(n,e,t){!function(n){"use strict";n.defineMode("cmake",(function(){var n=/({)?[a-zA-Z0-9_]+(})?/;function e(n,e){for(var t,i,c=!1;!n.eol()&&(t=n.next())!=e.pending;){if("$"===t&&"\\"!=i&&'"'==e.pending){c=!0;break}i=t}return c&&n.backUp(1),t==e.pending?e.continueString=!1:e.continueString=!0,"string"}return{startState:function(){var n={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return n},token:function(t,i){return t.eatSpace()?null:function(t,i){var c=t.next();return"$"===c?t.match(n)?"variable-2":"variable":i.continueString?(t.backUp(1),e(t,i)):t.match(/(\s+)?\w+\(/)||t.match(/(\s+)?\w+\ \(/)?(t.backUp(1),"def"):"#"==c?(t.skipToEnd(),"comment"):"'"==c||'"'==c?(i.pending=c,e(t,i)):"("==c||")"==c?"bracket":c.match(/[0-9]/)?"number":(t.eatWhile(/[\w-]/),null)}(t,i)}}})),n.defineMIME("text/x-cmake","cmake")}(t(41))}}]);
//# sourceMappingURL=454.56d242cb.chunk.js.map