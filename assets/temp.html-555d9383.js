import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-9aa256ea.js";const e={},o=t(`<h2 id="spring-事物" tabindex="-1"><a class="header-anchor" href="#spring-事物" aria-hidden="true">#</a> Spring 事物</h2><p>事物：逻辑上的一组操作，组成这组操作的各个逻辑单元。要么一起成功，要么一起失败。</p><h3 id="事物特性" tabindex="-1"><a class="header-anchor" href="#事物特性" aria-hidden="true">#</a> 事物特性</h3><p>原子性 （atomicity）:强调事务的不可分割.</p><p>一致性 （consistency）:事务的执行的前后数据的完整性保持一致.</p><p>隔离性 （isolation）:一个事务执行的过程中,不应该受到其他事务的干扰</p><p>持久性（durability） :事务一旦结束,数据就持久到数据库</p><h3 id="存在的问题" tabindex="-1"><a class="header-anchor" href="#存在的问题" aria-hidden="true">#</a> 存在的问题</h3><p><strong>脏读:</strong> 指当一个事务正在访问数据，并且对数据进行了修改，而这种修改还没有提交到数据库中，这时，另外一个事务也访问这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据， 那么另外一个事务读到的这个数据是脏数据，依据脏数据所做的操作可能是不正确的。</p><p><strong>不可重复读:</strong> 指在一个事务内，多次读同一数据。在这个事务还没有结束时，另外一个事务也访问该同一数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改，那么第一个事务两次读到的数据可能是不一样的。这样就发生了在一个事务内两次读到的数据是不一样的，因此称为是不可重复读。</p><p><strong>幻读:</strong> 指当事务不是独立执行时发生的一种现象，例如第一个事务对一个表中的数据进行了修改，这种修改涉及到表中的全部数据行。同时，第二个事务也修改这个表中的数据，这种修改是向表中插入一行新数据。那么，以后就会发生操作第一个事务的用户发现表中还有没有修改的数据行，就好象发生了幻觉一样。</p><h3 id="如何解决" tabindex="-1"><a class="header-anchor" href="#如何解决" aria-hidden="true">#</a> 如何解决</h3><p>事物的隔离级别</p><table><thead><tr><th>隔离级别</th><th>解决的问题</th><th>未解决的问题</th></tr></thead><tbody><tr><td>读未提交（READ UNCOMMITED）</td><td></td><td>脏读、不可重复读、幻读</td></tr><tr><td>读以提交（READ COMMITED）</td><td>脏读</td><td>不可重复读、幻读</td></tr><tr><td>可重复读（REPEATABLE READ）</td><td>脏读、不可重复读</td><td>幻读</td></tr><tr><td>串行化（SERIALIZABLE）</td><td>脏读、不可重复读、幻读</td><td></td></tr></tbody></table><p>Mysql默认使用可重复读</p><p>Oracle默认使用读以提交</p><h3 id="spring的事物传播机制" tabindex="-1"><a class="header-anchor" href="#spring的事物传播机制" aria-hidden="true">#</a> Spring的事物传播机制</h3><table><thead><tr><th>传播行为</th><th>描述</th></tr></thead><tbody><tr><td>PROPAGATION_REQUIRED</td><td>支持当前事务，如果不存在 就新建一个(默认)</td></tr><tr><td>PROPAGATION_SUPPORTS</td><td>支持当前事务，如果不存在，就不使用事务</td></tr><tr><td>PROPAGATION_MANDATORY</td><td>支持当前事务，如果不存在，抛出异常</td></tr><tr><td>PROPAGATION_REQUIRES_NEW</td><td>如果有事务存在，挂起当前事务，创建一个新的事务</td></tr><tr><td>PROPAGATION_NOT_SUPPORTED</td><td>以非事务方式运行，如果有事务存在，挂起当前事务</td></tr><tr><td>PROPAGATION_NEVER</td><td>以非事务方式运行，如果有事务存在，抛出异常</td></tr><tr><td>PROPAGATION_NESTED</td><td>如果当前事务存在，则嵌套事务执行</td></tr></tbody></table><h2 id="spring-待整理" tabindex="-1"><a class="header-anchor" href="#spring-待整理" aria-hidden="true">#</a> Spring 待整理</h2><h4 id="spring的扩展组件" tabindex="-1"><a class="header-anchor" href="#spring的扩展组件" aria-hidden="true">#</a> Spring的扩展组件</h4><h5 id="beanfactorypostprocessor-总结" tabindex="-1"><a class="header-anchor" href="#beanfactorypostprocessor-总结" aria-hidden="true">#</a> BeanFactoryPostProcessor 总结</h5><h6 id="configurationclasspostprocessor-总结" tabindex="-1"><a class="header-anchor" href="#configurationclasspostprocessor-总结" aria-hidden="true">#</a> ConfigurationClassPostProcessor 总结</h6><p>​</p><h5 id="beanpostprocessor-总结" tabindex="-1"><a class="header-anchor" href="#beanpostprocessor-总结" aria-hidden="true">#</a> BeanPostProcessor 总结</h5><h6 id="servletcontextawareprocessor" tabindex="-1"><a class="header-anchor" href="#servletcontextawareprocessor" aria-hidden="true">#</a> ServletContextAwareProcessor</h6><p>很简单的一个postProcessor，主要是对实现了ServletContextAware和ServletConfigAware接口的bean设置servletContext和servletConfig</p><p>实现代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">postProcessBeforeInitialization</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> bean <span class="token keyword">instanceof</span> <span class="token class-name">ServletContextAware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ServletContextAware</span><span class="token punctuation">)</span> bean<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setServletContext</span><span class="token punctuation">(</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getServletConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> bean <span class="token keyword">instanceof</span> <span class="token class-name">ServletConfigAware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ServletConfigAware</span><span class="token punctuation">)</span> bean<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setServletConfig</span><span class="token punctuation">(</span><span class="token function">getServletConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="todo-为什么会有smartinitializingsingleton这个组件" tabindex="-1"><a class="header-anchor" href="#todo-为什么会有smartinitializingsingleton这个组件" aria-hidden="true">#</a> TODO 为什么会有SmartInitializingSingleton这个组件</h5><p>[Spring Boot小组件 - SmartInitializingSingleton - 沐魇 - 博客园 (cnblogs.com)](</p>`,30),p=[o];function r(c,i){return a(),s("div",null,p)}const u=n(e,[["render",r],["__file","temp.html.vue"]]);export{u as default};
