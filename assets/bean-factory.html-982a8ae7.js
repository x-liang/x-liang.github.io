const a=JSON.parse('{"key":"v-e11868d6","path":"/spring/spring-framework/spring-starting/bean-factory.html","title":"Spring BeanFactory的初始化","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"11. 初始化单例 bean: finishBeanFactoryInitialization(beanFactory)","slug":"_11-初始化单例-bean-finishbeanfactoryinitialization-beanfactory","link":"#_11-初始化单例-bean-finishbeanfactoryinitialization-beanfactory","children":[]}],"git":{"createdTime":1697974777000,"updatedTime":1697974777000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":6.4,"words":1921},"filePathRelative":"spring/spring-framework/spring-starting/bean-factory.md","localizedDate":"2023年10月22日","excerpt":"<h1> Spring BeanFactory的初始化</h1>\\n<p></p>\\n<p>接上文，本文继续分析 spring 的启动 流程。</p>\\n<h3> 11. 初始化单例 bean: <code>finishBeanFactoryInitialization(beanFactory)</code></h3>\\n<p>本文将分析一个<strong>非常重要</strong>的方法 <code>AbstractApplicationContext#finishBeanFactoryInitialization</code> 了。</p>\\n<p>方法的调用如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token operator\\">|</span><span class=\\"token operator\\">-</span><span class=\\"token class-name\\">AnnotationConfigApplicationContext</span>#<span class=\\"token class-name\\">AnnotationConfigApplicationContext</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span>\\n <span class=\\"token operator\\">|</span><span class=\\"token operator\\">-</span><span class=\\"token class-name\\">AbstractApplicationContext</span>#refresh\\n  <span class=\\"token operator\\">|</span><span class=\\"token operator\\">-</span><span class=\\"token class-name\\">AbstractApplicationContext</span>#finishBeanFactoryInitialization\\n   <span class=\\"token operator\\">|</span><span class=\\"token operator\\">-</span><span class=\\"token class-name\\">DefaultListableBeanFactory</span>#preInstantiateSingletons\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{a as data};