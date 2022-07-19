import{_ as e,r as i,o as r,a as l,b as n,e as t,F as p,d as s,c as o}from"./app.3f0ca793.js";var c="/assets/image-20220425132347160.c94e7fa1.png";const d={},b=n("h1",{id:"gitbook-\u5B89\u88C5\u53CA\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitbook-\u5B89\u88C5\u53CA\u4F7F\u7528","aria-hidden":"true"},"#"),s(" gitbook \u5B89\u88C5\u53CA\u4F7F\u7528")],-1),u=n("h3",{id:"gitbook\u7684\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitbook\u7684\u5B89\u88C5","aria-hidden":"true"},"#"),s(" gitbook\u7684\u5B89\u88C5")],-1),m=n("p",null,"\u9996\u5148\u9700\u8981\u5B89\u88C5Nodejs\uFF0C\u8FD9\u91CC\u76F4\u63A5\u5B89\u88C5v12.22.1\u7248\u672C\uFF0C\u5176\u4ED6\u7248\u672C\u5728\u5B89\u88C5nodejs\u7684\u8FC7\u7A0B\u4E2D\u6709\u9519\u8BEF\uFF0C\u907F\u514D\u5165\u5751",-1),g={href:"https://nodejs.org/zh-cn/download/releases/",target:"_blank",rel:"noopener noreferrer"},h=s("nodejs"),k=s("\u7684\u6240\u6709\u5386\u53F2\u7248\u672C\u53EF\u4EE5\u5728\u8FD9\u91CC\u4E0B\u8F7D"),v=o(`<blockquote><p>https://nodejs.org/zh-cn/download/releases/</p></blockquote><p>\u4E0B\u8F7D\u540E\u89E3\u538B\u7F29\uFF0C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5373\u53EF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u03BB <span class="token function">node</span> -v
v12.22.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>nodejs\u9700\u8981\u914D\u7F6E\u56FD\u5185\u7684\u6E90\uFF0C\u8981\u4E0D\u7136\u5B89\u88C5\u5305\u7684\u65F6\u5019\u771F\u7684\u662F\u8D39\u52B2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org   <span class="token comment">#\u8BBE\u7F6E\u56FD\u5185\u6E90</span>
<span class="token function">npm</span> config get registry <span class="token comment">#\u67E5\u770B\u6E90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u914D\u7F6E\u597D\u6E90\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5B89\u88C5gitbook\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u03BB <span class="token function">npm</span> <span class="token function">install</span> gitbook-cli -g
C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node-v12.22.1<span class="token punctuation">\\</span>gitbook -<span class="token operator">&gt;</span> C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node-v12.22.1<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>gitbook-cli<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>gitbook.js
+ gitbook-cli@2.3.2
added <span class="token number">578</span> packages from <span class="token number">672</span> contributors <span class="token keyword">in</span> <span class="token number">31</span>.412s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u67E5\u770Bgitbook\u7684\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u03BB gitbook -V
CLI version: <span class="token number">2.3</span>.2
GitBook version: <span class="token number">3.2</span>.3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="gitbook\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#gitbook\u7684\u4F7F\u7528" aria-hidden="true">#</a> gitbook\u7684\u4F7F\u7528</h3><p>\u9996\u5148\u9700\u8981\u521D\u59CB\u5316\u4E00\u4E2A\u76EE\u5F55\u3002\u5728windows\u4E0B\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u901A\u8FC7\u547D\u4EE4\u884Ccd\u5230\u8BE5\u6587\u4EF6\u5939\u4E0B\uFF0C\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitbook init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u7ED3\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u03BB gitbook init
warn: no summary <span class="token function">file</span> <span class="token keyword">in</span> this book
info: create README.md
info: create SUMMARY.md
info: initialization is finished
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u76EE\u5F55\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u4E24\u4E2A\u6587\u4EF6\uFF0C\u5176\u4E2DREADME.md\u662F\u8BF4\u660E\u6587\u4EF6\uFF0CSUMMARY.md\u662F\u76EE\u5F55\u6587\u4EF6\u3002</p><h4 id="\u7F16\u5199summary\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199summary\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u5199SUMMARY\u6587\u4EF6</h4><p>GitBook\u4F7F\u7528\u4E00\u4E2A<code>SUMMARY.md</code>\u6587\u4EF6\u6765\u5B9A\u4E49\u6587\u6863\u7684\u83DC\u5355\u3002</p><p>\u867D\u8BF4\u5728\u5B98\u65B9\u6587\u6863\u4E2D\uFF0C\u5B83\u662F\u53EF\u9009\u7684\uFF0C\u4F46\u662F\u5B83\u76F8\u5F53\u91CD\u8981\uFF0C\u63A7\u5236\u4E86\u5DE6\u8FB9\u83DC\u5355\u680F\u7684\u663E\u793A\u5185\u5BB9\u3002</p><p>\u5B83\u901A\u8FC7 Markdown \u4E2D\u7684\u5217\u8868\u8BED\u6CD5\u6765\u8868\u793A\u6587\u4EF6\u7684\u7236\u5B50\u5173\u7CFB\u3002</p><p>\u7D27\u51D1\u578B\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Summary
* [Introduction](README.md)
* [Part I](part1/README.md)
    * [Writing is nice](part1/writing.md)
    * [GitBook is nice](part1/gitbook.md)
* [Part II](part2/README.md)
    * [We love feedback](part2/feedback_please.md)
    * [Better tools for authors](part2/better_tools.md)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5206\u6563\u578B\u7684</p><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 \u6807\u9898 \u6216\u8005 \u6C34\u5E73\u5206\u5272\u7EBF \u6807\u5FD7\u5C06 GitBook \u5206\u4E3A\u51E0\u4E2A\u4E0D\u540C\u7684\u90E8\u5206\u3002</p><p>\u4F60\u770B\u5230\u5DE6\u4FA7\u83DC\u5355\u680F\u7684\u90E8\u5206 <code>SUMMARY.md</code>\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Summary

### Part I

* [Part I](part1/README.md)
    * [Writing is nice](part1/README.md#writing)
    * [GitBook is nice](part1/README.md#gitbook)
* [Part II](part2/README.md)
    * [We love feedback](part2/README.md#feedback)
    * [Better tools for authors](part2/README.md#tools)

### Part II

* [feedback](part2/feedback.md)
* [tools](part2/tools.md)

----

* [Last part](part3/last.md)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u7F16\u5199\u5B8Csummary\u6587\u4EF6\u4E4B\u540E\u518D\u6B21\u6267\u884C\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitbook init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5C31\u4F1A\u751F\u6210\u76F8\u5E94\u7684\u6587\u4EF6\u4E86\u3002</p><p>\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u03BB gitbook init
info: create java/README.md
info: create java/collection.md
info: create java/collection/list.md
info: create java/concurrent.md
info: create spring/README.md
info: create mybatis/README.md
info: create SUMMARY.md
info: initialization is finished
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u751F\u6210\u9759\u6001\u7F51\u9875" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u9759\u6001\u7F51\u9875" aria-hidden="true">#</a> \u751F\u6210\u9759\u6001\u7F51\u9875</h3><p>\u5C06\u4F1A\u5728<code>gitbook_test</code>\u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2A<code>_book</code>\u6587\u4EF6\u5939\uFF0C\u8FD9\u5C31\u662F\u6211\u4EEC\u7684\u4E00\u4E2A\u9759\u6001\u7AD9\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitbook build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u6211\u4E48\u53EF\u4EE5\u542F\u52A8\u4E00\u4E2A\u670D\u52A1\uFF0C\u6765\u9884\u89C8\u6211\u4EEC\u7684\u7B14\u8BB0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitbook serve
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u751F\u6210pdf" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210pdf" aria-hidden="true">#</a> \u751F\u6210PDF</h3><p>\u5728\u751F\u6210pdf\u4E4B\u524D\u9700\u8981\u5B89\u88C5\u4E00\u4E2A\u8F6F\u4EF6\uFF0C\u4ECE\u4E00\u4E0B\u8FDE\u63A5\u4E0B\u8F7D\uFF0C\u9009\u62E9\u81EA\u5DF1\u5408\u9002\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://calibre-ebook.com/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6211\u5B89\u88C5\u7684\u7248\u672C\u662F5.16.1\uFF0C\u76EE\u524D\u6CA1\u6709\u9047\u5230\u95EE\u9898</p><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u751F\u6210pdf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u03BB gitbook pdf ./ ./note.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u7ED3\u679C\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u03BB gitbook pdf ./ ./note.pdf
info: 7 plugins are installed
info: 6 explicitly listed
info: loading plugin &quot;highlight&quot;... OK
info: loading plugin &quot;search&quot;... OK
info: loading plugin &quot;lunr&quot;... OK
info: loading plugin &quot;sharing&quot;... OK
info: loading plugin &quot;fontsettings&quot;... OK
info: loading plugin &quot;theme-default&quot;... OK
info: found 10 pages
info: found 221 asset files
info: &gt;&gt; generation finished with success in 32.9s !
info: &gt;&gt; 1 file(s) generated
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u5B89\u88C5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684\u9519\u8BEF" aria-hidden="true">#</a> \u5B89\u88C5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684\u9519\u8BEF</h3><p><img src="`+c+'" alt="image-20220425132347160"></p><p>\u8FD9\u4E2A\u76F4\u63A5\u628Apolyfills.js\u4E2D62\u884C\u523064\u884C\u7684\u4EE3\u7801\u6CE8\u91CA\u6389\u5373\u53EF</p>',46);function f(x,_){const a=i("ExternalLinkIcon");return r(),l(p,null,[b,u,m,n("p",null,[n("a",g,[h,t(a)]),k]),v],64)}var M=e(d,[["render",f],["__file","gitbook.html.vue"]]);export{M as default};
