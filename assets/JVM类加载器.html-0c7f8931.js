import{_ as n,V as a,W as s,X as e}from"./framework-4ec38622.js";const t={},p=e(`<h1 id="虚拟机类加载机制" tabindex="-1"><a class="header-anchor" href="#虚拟机类加载机制" aria-hidden="true">#</a> 虚拟机类加载机制</h1><h2 id="类的加载时机" tabindex="-1"><a class="header-anchor" href="#类的加载时机" aria-hidden="true">#</a> 类的加载时机</h2><p>略</p><h2 id="类的加载流程" tabindex="-1"><a class="header-anchor" href="#类的加载流程" aria-hidden="true">#</a> 类的加载流程</h2><h3 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h3><p>在加载阶段，Java虚拟机需要完成以下三件事情：</p><ol><li><p>通过一个类的全限定名来获取定义此类的二进制字节流。</p></li><li><p>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。</p></li><li><p>在内存中生成一个代表这个类的java.lang.Class对象，作为方法区这个类的各种数据的访问入口。</p></li></ol><p>通俗点讲，就是JVM把class文件的信息读取到了内存的方法区中。</p><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>这一步主要是对class文件中存储的内容进行校验，包括格式是否正确，定于的内容是否正确等等。来保证程序可以正确执行。</p><h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h3><p>这一阶段，开始为类中定义的变量进行内存分配。需要注意的是这一步仅给类中的静态变量分配内存，而且仅仅是分配内存，并没有赋值的动作。</p><p>这里分配的内存通常在方法区中。</p><h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h3><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><p><strong>初始化阶段就是执行类构造器<code>&lt;clinit&gt;()</code>方法的过程。</strong></p><p><code>&lt;clinit&gt;()</code>方法是由编译器自动收集类中的所有类变量的赋值动作和静态语句块（static{}块）中的 语句合并产生的，编译器收集的顺序是由语句在源文件中出现的顺序决定的，静态语句块中只能访问 到定义在静态语句块之前的变量，定义在它之后的变量，在前面的静态语句块可以赋值，但是不能访问</p><p><code>&lt;clinit&gt;()</code>方法与类的构造函数不同，它不需要显 式地调用父类构造器，Java虚拟机会保证在子类的<code>&lt;clinit&gt;()</code>方法执行前，父类的clinit()方法已经执行 完毕。</p><p><code>&lt;clinit&gt;()</code>方法对于类或接口来说并不是必需的，如果一个类中没有静态语句块，也没有对变量的 赋值操作，那么编译器可以不为这个类生成clinit()方法。</p><p>JVM会保证<code>&lt;clinit&gt;()</code>并发执行的安全性。</p><p>在初始化阶段，JVM会保证在构造函数中定义的语句在最后执行。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><h2 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器" aria-hidden="true">#</a> 类加载器</h2><p>比较两个类是否“相 等”，只有在这两个类是由同一个类加载器加载的前提下才有意义，否则，即使这两个类来源于同一个 Class文件，被同一个Java虚拟机加载，只要加载它们的类加载器不同，那这两个类就必定不相等。</p><h3 id="双亲委派模型" tabindex="-1"><a class="header-anchor" href="#双亲委派模型" aria-hidden="true">#</a> 双亲委派模型</h3><p>在Java体系里，主要存在三种类型的类加载器：</p><ul><li>启动类加载器(Bootstrap Class Loader)：这个类加载器负责加载存放在 &lt;JAVA_HOME&gt;\\lib目录</li><li>扩展类加载器(Extension Class Loader)：它负责加载&lt;JAVA_HOME&gt;\\lib\\ext目录中的类库。(sun.misc.Launcher # ExtClassLoader)</li><li>应用程序类加载器(Application Class Loader)：负责加载用户类路径上所有的类库(sun.misc.Launcher # AppClassLoader)</li></ul><p>一句话理解双亲委派模型：<strong>一个类加载器收到了类加载的请求，他首先把这个请求委派给父类加载器去完成，当父加载器反馈自己无法完成这个加载请求时，才会自己去完成加载。</strong></p><p>双亲委派模型的源码实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">synchronized</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">boolean</span> resolve<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span> 
    <span class="token comment">// 首先，检查请求的类是否已经被加载过了 </span>
    <span class="token class-name">Class</span> c <span class="token operator">=</span> <span class="token function">findLoadedClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">try</span> <span class="token punctuation">{</span> 
            <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                <span class="token comment">// 调用父类加载器</span>
                c <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> 
                <span class="token comment">// 如果parent为null，这里会调用启动类加载器进行加载</span>
                c <span class="token operator">=</span> <span class="token function">findBootstrapClassOrNull</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token comment">// 如果父类加载器抛出ClassNotFoundException </span>
            <span class="token comment">// 说明父类加载器无法完成加载请求 </span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token comment">// 在父类加载器无法加载时 </span>
            <span class="token comment">// 再调用本身的findClass方法来进行类加载 </span>
            c <span class="token operator">=</span> <span class="token function">findClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token function">resolveClass</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
	<span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="破坏双亲委派模型" tabindex="-1"><a class="header-anchor" href="#破坏双亲委派模型" aria-hidden="true">#</a> 破坏双亲委派模型</h3><p>略</p>`,33),c=[p];function o(l,i){return a(),s("div",null,c)}const r=n(t,[["render",o],["__file","JVM类加载器.html.vue"]]);export{r as default};
