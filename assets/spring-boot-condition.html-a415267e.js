const n=JSON.parse('{"key":"v-d237d66a","path":"/spring-boot/spring-boot-module/spring-boot-condition.html","title":"Spring Boot 条件装配","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Spring中的条件装配","slug":"spring中的条件装配","link":"#spring中的条件装配","children":[]},{"level":2,"title":"SpringBootCondition","slug":"springbootcondition","link":"#springbootcondition","children":[]}],"git":{"createdTime":1654958186000,"updatedTime":1655626257000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":2}]},"readingTime":{"minutes":0.21,"words":63},"localizedDate":"2022年6月11日","filePathRelative":"spring-boot/spring-boot-module/spring-boot-condition.md","excerpt":"<h1> Spring Boot 条件装配</h1>\\n<h2> Spring中的条件装配</h2>\\n<p>条件装配在Spring中就已经定义过，但是应用不是很广泛，下面来看看Condition的定义：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Condition</span> <span class=\\"token punctuation\\">{</span>\\n\\n\\t<span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">matches</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ConditionContext</span> context<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">AnnotatedTypeMetadata</span> metadata<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};