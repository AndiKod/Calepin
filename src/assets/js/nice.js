/**
   * Minified by jsDelivr using Terser v5.15.0.
	 * Original file: /npm/showdown-highlight@3.1.0/lib/index.js
	 *  *
	 *   * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
	 *    */
	"use strict";var decodeHtml=require("html-encoder-decoder").decode,showdown=require("showdown"),hljs=require("highlight.js"),classAttr='class="';module.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.pre,l=void 0!==r&&r,t=e.auto_detection,s=void 0===t||t,c=function(e,r,t){var c="<pre><code\\b[^>]*>",i="</code></pre>",a="g";return showdown.helper.replaceRecursiveRegExp(e,(function(e,r,t,c){r=decodeHtml(r);var i=(t.match(/class=\"([^ \"]+)/)||[])[1];if(!i&&!s)return e;if(t.includes(classAttr)){var a=t.indexOf(classAttr)+classAttr.length;t=t.slice(0,a)+"hljs "+t.slice(a)}else t=t.slice(0,-1)+' class="hljs">';return l&&i&&(t=t.replace("<pre>",'<pre class="'+i+" language-"+i+'">')),i&&hljs.getLanguage(i)?t+hljs.highlight(r,{language:i}).value+c:t+hljs.highlightAuto(r).value+c}),c,i,a)};return[{type:"output",filter:c}]};
		//# sourceMappingURL=/sm/56309e8eddbf2469b6d9afa73dbef69470cdd2e1a737416ab98e54b2c6df9c92.map'"'
