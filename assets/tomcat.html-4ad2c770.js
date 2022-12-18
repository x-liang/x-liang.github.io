const l=JSON.parse('{"key":"v-3fe0b90e","path":"/middleware/tomcat/tomcat.html","title":"Tomcat专题","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Tomcat基础","slug":"tomcat基础","link":"#tomcat基础","children":[{"level":3,"title":"web概念","slug":"web概念","link":"#web概念","children":[]},{"level":3,"title":"常见的web服务器","slug":"常见的web服务器","link":"#常见的web服务器","children":[]},{"level":3,"title":"Tomcat历史","slug":"tomcat历史","link":"#tomcat历史","children":[]},{"level":3,"title":"Tomcat安装","slug":"tomcat安装","link":"#tomcat安装","children":[]},{"level":3,"title":"Tomcat目录结构","slug":"tomcat目录结构","link":"#tomcat目录结构","children":[]},{"level":3,"title":"Tomcat 启动停止","slug":"tomcat-启动停止","link":"#tomcat-启动停止","children":[]}]},{"level":2,"title":"Tomcat架构","slug":"tomcat架构","link":"#tomcat架构","children":[{"level":3,"title":"HTTP工作原理","slug":"http工作原理","link":"#http工作原理","children":[]},{"level":3,"title":"Tomcat整体架构","slug":"tomcat整体架构","link":"#tomcat整体架构","children":[]},{"level":3,"title":"连接器 - Coyote","slug":"连接器-coyote","link":"#连接器-coyote","children":[]},{"level":3,"title":"容器 - Catalina","slug":"容器-catalina","link":"#容器-catalina","children":[]},{"level":3,"title":"Tomcat 启动流程","slug":"tomcat-启动流程","link":"#tomcat-启动流程","children":[]},{"level":3,"title":"Tomcat 请求处理流程","slug":"tomcat-请求处理流程","link":"#tomcat-请求处理流程","children":[]}]},{"level":2,"title":"Jasper","slug":"jasper","link":"#jasper","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]}]},{"level":2,"title":"Tomcat 服务器配置","slug":"tomcat-服务器配置","link":"#tomcat-服务器配置","children":[{"level":3,"title":"server.xml","slug":"server-xml","link":"#server-xml","children":[]}]}],"git":{"createdTime":1652944777000,"updatedTime":1652944777000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":26.64,"words":7991},"localizedDate":"2022年5月19日","filePathRelative":"middleware/tomcat/tomcat.md","excerpt":"<h1> Tomcat专题</h1>\\n<h2> Tomcat基础</h2>\\n<h3> web概念</h3>\\n<ul>\\n<li>\\n<p>软件架构</p>\\n<ul>\\n<li>\\n<p>C/S： 客户端/服务器端 ‐‐‐‐‐‐‐‐‐‐‐‐&gt; QQ , 360 ....</p>\\n</li>\\n<li>\\n<p>B/S： 浏览器/服务器端 ‐‐‐‐‐‐‐‐‐‐‐‐&gt; 京东， 网易 ， 淘宝 ， 传智播客 官网</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>资源分类</p>\\n<ul>\\n<li>\\n<p>静态资源： 所有用户访问后，得到的结果都是一样的，称为静态资源。静态资 源可以直接被浏览器解析。\\n* 如： html,css,JavaScript，jpg</p>\\n</li>\\n<li>\\n<p>动态资源: 每个用户访问相同资源后，得到的结果可能不一样 , 称为动态资 源。动态资源被访问后，需要先转换为静态资源，再返回给浏览器，通过浏览器进行解析。</p>\\n<ul>\\n<li>如：servlet/jsp,php,asp....</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>网络通信三要素</p>\\n<ul>\\n<li>IP：电子设备(计算机)在网络中的唯一标识。</li>\\n<li>端口：应用程序在计算机中的唯一标识。 0~65536</li>\\n<li>传输协议：规定了数据传输的规则\\n<ul>\\n<li>基础协议：\\n<ul>\\n<li>tcp : 安全协议，三次握手。 速度稍慢</li>\\n<li>udp：不安全协议。 速度快</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>"}');export{l as data};