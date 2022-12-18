const a=JSON.parse('{"key":"v-8d246506","path":"/java/java-collection/java-collection-list.html","title":"Java 集合之List","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ArrayList 源码分析(JDK8)","slug":"arraylist-源码分析-jdk8","link":"#arraylist-源码分析-jdk8","children":[{"level":3,"title":"集成体系","slug":"集成体系","link":"#集成体系","children":[]},{"level":3,"title":"主要成员变量","slug":"主要成员变量","link":"#主要成员变量","children":[]},{"level":3,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":3,"title":"扩容机制","slug":"扩容机制","link":"#扩容机制","children":[]},{"level":3,"title":"删除元素","slug":"删除元素","link":"#删除元素","children":[]}]}],"git":{"createdTime":1653110166000,"updatedTime":1653110166000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":7.51,"words":2254},"localizedDate":"2022年5月21日","filePathRelative":"java/java-collection/java-collection-list.md","excerpt":"<h1> Java 集合之List</h1>\\n<h2> ArrayList 源码分析(JDK8)</h2>\\n<h3> 集成体系</h3>\\n<p>首先来看类的定义：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">AbstractList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">RandomAccess</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Cloneable</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\"><span class=\\"token namespace\\">java<span class=\\"token punctuation\\">.</span>io<span class=\\"token punctuation\\">.</span></span>Serializable</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{a as data};
