(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{458:function(a,s,n){"use strict";n.r(s);var t=n(2),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"谈谈你对-ajax-的认识？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对-ajax-的认识？"}},[a._v("#")]),a._v(" 谈谈你对 ajax 的认识？")]),a._v(" "),n("ul",[n("li",[a._v("Ajax 是一种创建交互式网页应用的的网页开发技术；")]),a._v(" "),n("li",[a._v("Ajax：Asynchronous JavaScript and XML”的缩写。")]),a._v(" "),n("li",[a._v("Ajax 的优势：")]),a._v(" "),n("li",[a._v("通过异步模式，提升了用户体验。 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用。")]),a._v(" "),n("li",[a._v("Ajax 引擎在客户端运行，承担了一部分本来由服务器承担的工作，从而减少了大用户量下的服务器负载。")]),a._v(" "),n("li",[a._v("Ajax 的最大特点： 可以实现局部刷新，在不更新整个页面的前提下维护数据，提升用户体验度。\n"),n("strong",[a._v("ajax在实际项目开发中使用率非常高（牢固掌握），针对ajax的详细描述：http://www.jb51.net/article/93258.htm")])])]),a._v(" "),n("h2",{attrs:{id:"jsonp-原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-原理"}},[a._v("#")]),a._v(" jsonp 原理")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("JavaScript 是一种在 Web 开发中经常使用的前端动态脚本技术。在 JavaScript 中，有一个很重要的安全性限制， 被称为“Same-Origin Policy”（同源策略）。这一策略对于 JavaScript 代码能够访问的页面内容做了很重要的限制，即 JavaScript 只能访问与包含它的文档在同一域下的内容。\nJavaScript 这个安全策略在进行多 iframe 或多窗口编程、以及 Ajax 编程时显得尤为重要。\n根据这个策略， 在 baidu.com 下的页面中包含的 JavaScript 代码，不能访问在 google.com 域名下的页面内容；\n甚至不同的子域名之间的页面也不能通过 JavaScript 代码互相访问。\n对于 Ajax 的影响在于，通过 XMLHttpRequest 实现的Ajax 请求，不能向不同的域提交请求，\n例如，在 abc.example.com 下的页面，不能向 def.example.com 提交Ajax 请求，等等。\n然而，当进行一些比较深入的前端编程的时候，不可避免地需要进行跨域操作，这时候“同源策略”就显得过于苛刻。\nJSONP 跨域 GET 请求是一个常用的解决方案，下面我们来看一下 JSONP 跨域是如何实现的，并且探讨下 JSONP 跨域的原理。\njsonp 的最基本的原理是：动态添加一个<script>标签，使用 script 标签的 src 属性没有跨域的限制的特点实现跨域。\n首先在客户端注册一个 callback, 然后把 callback 的名字传给服务器。此时，服务器先生成 json 数据。\n然后以 javascript 语法的方式，生成一个 function , function 名字就是传递上来的参数 jsonp。\n最后将json 数据直接以入参的方式，放置到 function 中，这样就生成了一段 js 语法的文档，返回给客户端。 \n客户端浏览器，解析 script 标签，并执行返回的 javascript 文档，此时数据作为参数，传入到了客户端预先定义好的 callback 函数里。 \n参考资料： http://www.nowamagic.net/librarys/veda/detail/224\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);