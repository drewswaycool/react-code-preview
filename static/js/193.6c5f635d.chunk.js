(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[193],{408:function(e,t){!function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,r=t.inside.interpolation,a=r.inside["interpolation-punctuation"],i=r.pattern.source;function o(t,r){if(e.languages[t])return{pattern:RegExp("((?:"+r+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}function s(t,n,r){var a={code:t,grammar:n,language:r};return e.hooks.run("before-tokenize",a),a.tokens=e.tokenize(a.code,a.grammar),e.hooks.run("after-tokenize",a),a.tokens}function p(t){var n={};n["interpolation-punctuation"]=a;var i=e.tokenize(t,n);if(3===i.length){var o=[1,1];o.push.apply(o,s(i[1],e.languages.javascript,"javascript")),i.splice.apply(i,o)}return new e.Token("interpolation",i,r.alias,t)}function l(t,n,r){var a=e.tokenize(t,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),o=0,l={},g=s(a.map((function(e){if("string"==typeof e)return e;for(var n,a=e.content;-1!==t.indexOf((i=o++,n="___"+r.toUpperCase()+"_"+i+"___")););return l[n]=a,n;var i})).join(""),n,r),c=Object.keys(l);return o=0,function e(t){for(var n=0;n<t.length;n++){if(o>=c.length)return;var r=t[n];if("string"==typeof r||"string"==typeof r.content){var a=c[o],i="string"==typeof r?r:r.content,s=i.indexOf(a);if(-1!==s){++o;var g=i.substring(0,s),u=p(l[a]),f=i.substring(s+a.length),v=[];if(g&&v.push(g),v.push(u),f){var y=[f];e(y),v.push.apply(v,y)}"string"==typeof r?(t.splice.apply(t,[n,1].concat(v)),n+=v.length-1):r.content=v}}else{var d=r.content;Array.isArray(d)?e(d):e([d])}}}(g),new e.Token(r,g,"language-"+r,t)}e.languages.javascript["template-string"]=[o("css","\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),o("html","\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),o("svg","\\bsvg"),o("markdown","\\b(?:md|markdown)"),o("graphql","\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),t].filter(Boolean);var g={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function c(e){return"string"==typeof e?e:Array.isArray(e)?e.map(c).join(""):c(e.content)}e.hooks.add("after-tokenize",(function(t){t.language in g&&function t(n){for(var r=0,a=n.length;r<a;r++){var i=n[r];if("string"!=typeof i){var o=i.content;if(Array.isArray(o))if("template-string"===i.type){var s=o[1];if(3===o.length&&"string"!=typeof s&&"embedded-code"===s.type){var p=c(s),g=s.alias,u=Array.isArray(g)?g[0]:g,f=e.languages[u];if(!f)continue;o[1]=l(p,f,u)}}else t(o);else"string"!=typeof o&&t([o])}}}(t.tokens)}))}(Prism)}}]);
//# sourceMappingURL=193.6c5f635d.chunk.js.map