(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[435],{1020:function(e,t,n){!function(e){"use strict";e.defineSimpleMode("handlebars-tags",{start:[{regex:/\{\{\{/,push:"handlebars_raw",token:"tag"},{regex:/\{\{!--/,push:"dash_comment",token:"comment"},{regex:/\{\{!/,push:"comment",token:"comment"},{regex:/\{\{/,push:"handlebars",token:"tag"}],handlebars_raw:[{regex:/\}\}\}/,pop:!0,token:"tag"}],handlebars:[{regex:/\}\}/,pop:!0,token:"tag"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"},{regex:/'(?:[^\\']|\\.)*'?/,token:"string"},{regex:/>|[#\/]([A-Za-z_]\w*)/,token:"keyword"},{regex:/(?:else|this)\b/,token:"keyword"},{regex:/\d+/i,token:"number"},{regex:/=|~|@|true|false/,token:"atom"},{regex:/(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/,token:"variable-2"}],dash_comment:[{regex:/--\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],comment:[{regex:/\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],meta:{blockCommentStart:"{{--",blockCommentEnd:"--}}"}}),e.defineMode("handlebars",(function(t,n){var r=e.getMode(t,"handlebars-tags");return n&&n.base?e.multiplexingMode(e.getMode(t,n.base),{open:"{{",close:"}}",mode:r,parseDelimiters:!0}):r})),e.defineMIME("text/x-handlebars-template","handlebars")}(n(41),n(1136),n(1138))},1136:function(e,t,n){!function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function r(e,r){(e.next||e.push)&&t(r,e.next||e.push),this.regex=n(e.regex),this.token=function(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}(e.token),this.data=e}function i(e,t){return function(n,r){if(r.pending){var i=r.pending.shift();return 0==r.pending.length&&(r.pending=null),n.pos+=i.text.length,i.token}if(r.local){if(r.local.end&&n.match(r.local.end)){var a=r.local.endToken||null;return r.local=r.localState=null,a}var l;return a=r.local.mode.token(n,r.localState),r.local.endScan&&(l=r.local.endScan.exec(n.current()))&&(n.pos=n.start+l.index),a}for(var s=e[r.state],c=0;c<s.length;c++){var d=s[c],u=(!d.data.sol||n.sol())&&n.match(d.regex);if(u){d.data.next?r.state=d.data.next:d.data.push?((r.stack||(r.stack=[])).push(r.state),r.state=d.data.push):d.data.pop&&r.stack&&r.stack.length&&(r.state=r.stack.pop()),d.data.mode&&o(t,r,d.data.mode,d.token),d.data.indent&&r.indent.push(n.indentation()+t.indentUnit),d.data.dedent&&r.indent.pop();var p=d.token;if(p&&p.apply&&(p=p(u)),u.length>2&&d.token&&"string"!=typeof d.token){r.pending=[];for(var f=2;f<u.length;f++)u[f]&&r.pending.push({text:u[f],token:d.token[f-1]});return n.backUp(u[0].length-(u[1]?u[1].length:0)),p[0]}return p&&p.join?p[0]:p}}return n.next(),null}}function a(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var r in e)if(e.hasOwnProperty(r)){if(!t.hasOwnProperty(r)||!a(e[r],t[r]))return!1;n++}for(var r in t)t.hasOwnProperty(r)&&n--;return 0==n}function o(t,r,i,o){var l;if(i.persistent)for(var s=r.persistentStates;s&&!l;s=s.next)(i.spec?a(i.spec,s.spec):i.mode==s.mode)&&(l=s);var c=l?l.mode:i.mode||e.getMode(t,i.spec),d=l?l.state:e.startState(c);i.persistent&&!l&&(r.persistentStates={mode:c,spec:i.spec,state:d,next:r.persistentStates}),r.localState=d,r.local={mode:c,end:i.end&&n(i.end),endScan:i.end&&!1!==i.forceEnd&&n(i.end,!1),endToken:o&&o.join?o[o.length-1]:o}}function l(t,n){return function(r,i,a){if(r.local&&r.local.mode.indent)return r.local.mode.indent(r.localState,i,a);if(null==r.indent||r.local||n.dontIndentStates&&function(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}(r.state,n.dontIndentStates)>-1)return e.Pass;var o=r.indent.length-1,l=t[r.state];e:for(;;){for(var s=0;s<l.length;s++){var c=l[s];if(c.data.dedent&&!1!==c.data.dedentIfLineStart){var d=c.regex.exec(i);if(d&&d[0]){o--,(c.next||c.push)&&(l=t[c.next||c.push]),i=i.slice(d[0].length);continue e}}}break}return o<0?0:r.indent[o]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,a){t(a,"start");var o={},s=a.meta||{},c=!1;for(var d in a)if(d!=s&&a.hasOwnProperty(d))for(var u=o[d]=[],p=a[d],f=0;f<p.length;f++){var m=p[f];u.push(new r(m,a)),(m.indent||m.dedent)&&(c=!0)}var g={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:c?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var r=t.persistentStates;r;r=r.next)n.persistentStates={mode:r.mode,spec:r.spec,state:r.state==t.localState?n.localState:e.copyState(r.mode,r.state),next:n.persistentStates};return n},token:i(o,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:l(o,s)};if(s)for(var v in s)s.hasOwnProperty(v)&&(g[v]=s[v]);return g}}(n(41))},1138:function(e,t,n){!function(e){"use strict";e.multiplexingMode=function(t){var n=Array.prototype.slice.call(arguments,1);function r(e,t,n,r){if("string"==typeof t){var i=e.indexOf(t,n);return r&&i>-1?i+t.length:i}var a=t.exec(n?e.slice(n):e);return a?a.index+n+(r?a[0].length:0):-1}return{startState:function(){return{outer:e.startState(t),innerActive:null,inner:null}},copyState:function(n){return{outer:e.copyState(t,n.outer),innerActive:n.innerActive,inner:n.innerActive&&e.copyState(n.innerActive.mode,n.inner)}},token:function(i,a){if(a.innerActive){var o=a.innerActive;if(c=i.string,!o.close&&i.sol())return a.innerActive=a.inner=null,this.token(i,a);if((u=o.close?r(c,o.close,i.pos,o.parseDelimiters):-1)==i.pos&&!o.parseDelimiters)return i.match(o.close),a.innerActive=a.inner=null,o.delimStyle&&o.delimStyle+" "+o.delimStyle+"-close";u>-1&&(i.string=c.slice(0,u));var l=o.mode.token(i,a.inner);return u>-1&&(i.string=c),u==i.pos&&o.parseDelimiters&&(a.innerActive=a.inner=null),o.innerStyle&&(l=l?l+" "+o.innerStyle:o.innerStyle),l}for(var s=1/0,c=i.string,d=0;d<n.length;++d){var u,p=n[d];if((u=r(c,p.open,i.pos))==i.pos){p.parseDelimiters||i.match(p.open),a.innerActive=p;var f=0;if(t.indent){var m=t.indent(a.outer,"","");m!==e.Pass&&(f=m)}return a.inner=e.startState(p.mode,f),p.delimStyle&&p.delimStyle+" "+p.delimStyle+"-open"}-1!=u&&u<s&&(s=u)}s!=1/0&&(i.string=c.slice(0,s));var g=t.token(i,a.outer);return s!=1/0&&(i.string=c),g},indent:function(n,r,i){var a=n.innerActive?n.innerActive.mode:t;return a.indent?a.indent(n.innerActive?n.inner:n.outer,r,i):e.Pass},blankLine:function(r){var i=r.innerActive?r.innerActive.mode:t;if(i.blankLine&&i.blankLine(r.innerActive?r.inner:r.outer),r.innerActive)"\n"===r.innerActive.close&&(r.innerActive=r.inner=null);else for(var a=0;a<n.length;++a){var o=n[a];"\n"===o.open&&(r.innerActive=o,r.inner=e.startState(o.mode,i.indent?i.indent(r.outer,"",""):0))}},electricChars:t.electricChars,innerMode:function(e){return e.inner?{state:e.inner,mode:e.innerActive.mode}:{state:e.outer,mode:t}}}}}(n(41))}}]);
//# sourceMappingURL=435.7942144a.chunk.js.map