const e=JSON.parse('{"key":"v-faec2894","path":"/java/java-feature/java-10-feature.html","title":"Java 10 新特性总结","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Java 10 新特性—概述","slug":"java-10-新特性—概述","link":"#java-10-新特性—概述","children":[{"level":3,"title":"JEP 286：局部变量类型推断","slug":"jep-286-局部变量类型推断","link":"#jep-286-局部变量类型推断","children":[]},{"level":3,"title":"JEP 304：统一的垃圾回收接口","slug":"jep-304-统一的垃圾回收接口","link":"#jep-304-统一的垃圾回收接口","children":[]},{"level":3,"title":"JEP 307：并行全垃圾回收器 G1","slug":"jep-307-并行全垃圾回收器-g1","link":"#jep-307-并行全垃圾回收器-g1","children":[]},{"level":3,"title":"JEP 310：应用程序类数据共享","slug":"jep-310-应用程序类数据共享","link":"#jep-310-应用程序类数据共享","children":[]},{"level":3,"title":"JEP 312：线程-局部变量管控","slug":"jep-312-线程-局部变量管控","link":"#jep-312-线程-局部变量管控","children":[]},{"level":3,"title":"JEP 313：移除 Native-Header 自动生成工具","slug":"jep-313-移除-native-header-自动生成工具","link":"#jep-313-移除-native-header-自动生成工具","children":[]},{"level":3,"title":"JEP 314：额外的 Unicode 语言标签扩展","slug":"jep-314-额外的-unicode-语言标签扩展","link":"#jep-314-额外的-unicode-语言标签扩展","children":[]},{"level":3,"title":"JEP 316：备用存储装置上的堆分配","slug":"jep-316-备用存储装置上的堆分配","link":"#jep-316-备用存储装置上的堆分配","children":[]},{"level":3,"title":"JEP 317：基于 Java 的 实验性 JIT 编译器","slug":"jep-317-基于-java-的-实验性-jit-编译器","link":"#jep-317-基于-java-的-实验性-jit-编译器","children":[]},{"level":3,"title":"JEP 319：根证书认证","slug":"jep-319-根证书认证","link":"#jep-319-根证书认证","children":[]},{"level":3,"title":"JEP 322：基于时间的版本发布模式","slug":"jep-322-基于时间的版本发布模式","link":"#jep-322-基于时间的版本发布模式","children":[]},{"level":3,"title":"新增 API","slug":"新增-api","link":"#新增-api","children":[]}]},{"level":2,"title":"Java 10 新特性—局部变量类型推断","slug":"java-10-新特性—局部变量类型推断","link":"#java-10-新特性—局部变量类型推断","children":[{"level":3,"title":"产生背景","slug":"产生背景","link":"#产生背景","children":[]},{"level":3,"title":"好处","slug":"好处","link":"#好处","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":3,"title":"不适用场景","slug":"不适用场景","link":"#不适用场景","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]},{"level":2,"title":"Java 10 新特性—不可变集合的增强","slug":"java-10-新特性—不可变集合的增强","link":"#java-10-新特性—不可变集合的增强","children":[]}],"git":{"createdTime":1716620422000,"updatedTime":1716801999000,"contributors":[{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":2}]},"readingTime":{"minutes":16.73,"words":5018},"filePathRelative":"java/java-feature/java-10-feature.md","localizedDate":"2024年5月25日","excerpt":"<h1> Java 10 新特性总结</h1>\\n<h2> Java 10 新特性—概述</h2>\\n<blockquote>\\n<p>Java 10 是Java历史上的一个较小的版本，发布于2018年3月。</p>\\n</blockquote>\\n<p></p>\\n<h3> JEP 286：局部变量类型推断</h3>\\n<p>Java 10中引入了<code>var</code>关键字，允许开发者在声明局部变量时不必显式声明变量的类型，编译器会自动根据变量的初始值推断变量的类型。这使得代码更加简洁，尤其是在处理泛型时。例如：</p>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>var list = new ArrayList&lt;String&gt;();  // 编译器推断 list 是 ArrayList&lt;String&gt; 类型\\nvar stream = list.stream();          // 编译器推断 stream 是 Stream&lt;String&gt; 类型\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};