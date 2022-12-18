const n=JSON.parse('{"key":"v-116f9b78","path":"/tools/junit/junit5.html","title":"JUnit5使用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"引入","slug":"引入","link":"#引入","children":[]}]},{"level":2,"title":"Junit基础","slug":"junit基础","link":"#junit基础","children":[{"level":3,"title":"注解","slug":"注解","link":"#注解","children":[]},{"level":3,"title":"元注解和组合注解","slug":"元注解和组合注解","link":"#元注解和组合注解","children":[]},{"level":3,"title":"@DisplayName","slug":"displayname","link":"#displayname","children":[]},{"level":3,"title":"@DisplayNameGeneration","slug":"displaynamegeneration","link":"#displaynamegeneration","children":[]},{"level":3,"title":"断言","slug":"断言","link":"#断言","children":[]},{"level":3,"title":"第三方断言库","slug":"第三方断言库","link":"#第三方断言库","children":[]},{"level":3,"title":"@Disabled","slug":"disabled","link":"#disabled","children":[]},{"level":3,"title":"条件执行","slug":"条件执行","link":"#条件执行","children":[]},{"level":3,"title":"@Tag","slug":"tag","link":"#tag","children":[]},{"level":3,"title":"测试的执行顺序","slug":"测试的执行顺序","link":"#测试的执行顺序","children":[]},{"level":3,"title":"测试实例的生命周期","slug":"测试实例的生命周期","link":"#测试实例的生命周期","children":[]},{"level":3,"title":"构造函数和方法的依赖注入","slug":"构造函数和方法的依赖注入","link":"#构造函数和方法的依赖注入","children":[]},{"level":3,"title":"测试接口和默认方法","slug":"测试接口和默认方法","link":"#测试接口和默认方法","children":[]},{"level":3,"title":"重复测试","slug":"重复测试","link":"#重复测试","children":[]},{"level":3,"title":"参数化测试","slug":"参数化测试","link":"#参数化测试","children":[]}]},{"level":2,"title":"@ExtendWith","slug":"extendwith","link":"#extendwith","children":[]}],"git":{"createdTime":1658238067000,"updatedTime":1668854738000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":2}]},"readingTime":{"minutes":5.49,"words":1646},"localizedDate":"2022年7月19日","filePathRelative":"tools/junit/junit5.md","excerpt":"<h1> JUnit5使用</h1>\\n<h2> 概述</h2>\\n<p>JUnit5由三个不同的子项目组成：</p>\\n<p>JUnit 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage</p>\\n<h3> 引入</h3>\\n<p>基于maven的引入：</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependencyManagement</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.junit<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>junit-bom<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>5.8.2<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>type</span><span class=\\"token punctuation\\">&gt;</span></span>pom<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>type</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>import<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependencyManagement</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};