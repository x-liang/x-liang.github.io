import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as n,b as s,d as l,e as a}from"./app-e53dd85b.js";const i={},u=a(`<h1 id="深入理解java注解类型-annotation" tabindex="-1"><a class="header-anchor" href="#深入理解java注解类型-annotation" aria-hidden="true">#</a> 深入理解Java注解类型(@Annotation)</h1><p>java注解是在JDK5时引入的新特性，鉴于目前大部分框架(如Spring)都使用了注解简化代码并提高编码的效率，因此掌握并深入理解注解对于一个Java工程师是来说是很有必要的事。本篇我们将通过以下几个角度来分析注解的相关知识点</p><h2 id="一、理解java注解" tabindex="-1"><a class="header-anchor" href="#一、理解java注解" aria-hidden="true">#</a> 一、理解Java注解</h2><p>实际上Java注解与普通修饰符(public、static、void等)的使用方式并没有多大区别，下面的例子是常见的注解：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationDemo</span> <span class="token punctuation">{</span>
    <span class="token comment">//@Test注解修饰方法A</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Test.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//一个方法上可以拥有多个不同的注解</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;uncheck&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过在方法上使用@Test注解后，在运行该方法时，测试框架会自动识别该方法并单独调用，@Test实际上是一种标记注解，起标记作用，运行时告诉测试框架该方法为测试方法。而对于@Deprecated和@SuppressWarnings(“uncheck”)，则是Java本身内置的注解，在代码中，可以经常看见它们，但这并不是一件好事，毕竟当方法或是类上面有@Deprecated注解时，说明该方法或是类都已经过期不建议再用，@SuppressWarnings 则表示忽略指定警告，比如@SuppressWarnings(“uncheck”)，这就是注解的最简单的使用方式，那么下面我们就来看看注解定义的基本语法</p><h2 id="二、基本语法" tabindex="-1"><a class="header-anchor" href="#二、基本语法" aria-hidden="true">#</a> 二、基本语法</h2><h3 id="_2-1-声明注解与元注解" tabindex="-1"><a class="header-anchor" href="#_2-1-声明注解与元注解" aria-hidden="true">#</a> 2.1 声明注解与元注解</h3><p>我们先来看看前面的Test注解是如何声明的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//声明Test注解</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用了@interface声明了Test注解，并使用@Target注解传入ElementType.METHOD参数来标明@Test只能用于方法上，@Retention(RetentionPolicy.RUNTIME)则用来表示该注解生存期是运行时，从代码上看注解的定义很像接口的定义，确实如此，毕竟在编译后也会生成Test.class文件。对于@Target和@Retention是由Java提供的元注解，所谓元注解就是标记其他注解的注解，下面分别介绍</p>`,11),k={href:"https://so.csdn.net/so/search?q=%E6%9E%9A%E4%B8%BE%E7%B1%BB&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ElementType</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**标明该注解可以用于类、接口（包括注解类型）或enum声明*/</span>
    <span class="token constant">TYPE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** 标明该注解可以用于字段(域)声明，包括enum实例 */</span>
    <span class="token constant">FIELD</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** 标明该注解可以用于方法声明 */</span>
    <span class="token constant">METHOD</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** 标明该注解可以用于参数声明 */</span>
    <span class="token constant">PARAMETER</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** 标明注解可以用于构造函数声明 */</span>
    <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** 标明注解可以用于局部变量声明 */</span>
    <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** 标明注解可以用于注解声明(应用于另一个注解上)*/</span>
    <span class="token constant">ANNOTATION_TYPE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** 标明注解可以用于包声明 */</span>
    <span class="token constant">PACKAGE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 标明注解可以用于类型参数声明（1.8新加入）
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token constant">TYPE_PARAMETER</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 类型使用声明（1.8新加入)
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token constant">TYPE_USE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，当注解未指定Target值时，则此注解可以用于任何元素之上，多个值使用{}包含并用逗号隔开，如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span> <span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">,</span> <span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token constant">PACKAGE</span><span class="token punctuation">,</span> <span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),r=n("li",null,[n("p",null,"@Retention用来约束注解的生命周期，分别有三个值，源码级别（source），类文件级别（class）或者运行时级别（runtime），其含有如下："),n("ul",null,[n("li",null,[n("p",null,"SOURCE：注解将被编译器丢弃（该类型的注解信息只会保留在源码里，源码经过编译后，注解信息会被丢弃，不会保留在编译好的class文件里）")]),n("li",null,[n("p",null,"CLASS：注解在class文件中可用，但会被VM丢弃（该类型的注解信息会保留在源码里和class文件里，在执行的时候，不会加载到虚拟机中），请注意，当注解未定义Retention值时，默认值是CLASS，如Java内置注解，@Override、@Deprecated、@SuppressWarnning等")]),n("li",null,[n("p",null,"RUNTIME：注解信息将在运行期(JVM)也保留，因此可以通过反射机制读取注解的信息（源码、class文件和执行的时候都有注解的信息），如SpringMvc中的@Controller、@Autowired、@RequestMapping等。")])])],-1),v=a(`<h3 id="_2-2-注解元素及其数据类型" tabindex="-1"><a class="header-anchor" href="#_2-2-注解元素及其数据类型" aria-hidden="true">#</a> 2.2 注解元素及其数据类型</h3><p>通过上述对@Test注解的定义，我们了解了注解定义的过程，由于@Test内部没有定义其他元素，所以@Test也称为标记注解（marker annotation），但在自定义注解中，一般都会包含一些元素以表示某些值，方便处理器使用，这点在下面的例子将会看到：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 对应数据表注解
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span><span class="token comment">//只能应用于类上</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span><span class="token comment">//保存到运行时</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">DBTable</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述定义一个名为DBTable的注解，该用于主要用于数据库表与Bean类的映射（稍后会有完整案例分析），与前面Test注解不同的是，我们声明一个String类型的name元素，其默认值为空字符，但是必须注意到对应任何元素的声明应采用方法的声明方式，同时可选择使用default提供默认值，@DBTable使用方式如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//在类上使用该注解</span>
<span class="token annotation punctuation">@DBTable</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;MEMBER&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Member</span> <span class="token punctuation">{</span>
    <span class="token comment">//.......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于注解支持的元素数据类型除了上述的String，还支持如下数据类型</p><ul><li>所有基本类型（int,float,boolean,byte,double,char,long,short）</li><li>String</li><li>Class</li><li>enum</li><li>Annotation</li><li>上述类型的数组</li></ul><p>倘若使用了其他数据类型，编译器将会丢出一个编译错误，注意，声明注解元素时可以使用基本类型但不允许使用任何包装类型，同时还应该注意到注解也可以作为元素的类型，也就是嵌套注解，下面的代码演示了上述类型的使用过程：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zejian<span class="token punctuation">.</span>annotationdemo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ElementType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Retention</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RetentionPolicy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Target</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created by wuzejian on 2017/5/19.
 * 数据类型使用Demo
 */</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">Reference</span><span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnotationElementDemo</span> <span class="token punctuation">{</span>
    <span class="token comment">//枚举类型</span>
    <span class="token keyword">enum</span> <span class="token class-name">Status</span> <span class="token punctuation">{</span><span class="token constant">FIXED</span><span class="token punctuation">,</span><span class="token constant">NORMAL</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">//声明枚举</span>
    <span class="token class-name">Status</span> <span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Status</span><span class="token punctuation">.</span><span class="token constant">FIXED</span><span class="token punctuation">;</span>

    <span class="token comment">//布尔类型</span>
    <span class="token keyword">boolean</span> <span class="token function">showSupport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">//String类型</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">//class类型</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">testCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Void</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>

    <span class="token comment">//注解嵌套</span>
    <span class="token class-name">Reference</span> <span class="token function">reference</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token annotation punctuation">@Reference</span><span class="token punctuation">(</span>next<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//数组类型</span>
    <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-编译器对默认值的限制" tabindex="-1"><a class="header-anchor" href="#_2-3-编译器对默认值的限制" aria-hidden="true">#</a> 2.3 编译器对默认值的限制</h3><p>编译器对元素的默认值有些过分挑剔。首先，元素不能有不确定的值。也就是说，元素必须要么具有默认值，要么在使用注解时提供元素的值。其次，对于非基本类型的元素，无论是在源代码中声明，还是在注解接口中定义默认值，都不能以null作为值，这就是限制，没有什么利用可言，但造成一个元素的存在或缺失状态，因为每个注解的声明中，所有的元素都存在，并且都具有相应的值，为了绕开这个限制，只能定义一些特殊的值，例如空字符串或负数，表示某个元素不存在。</p><h3 id="_2-4-注解不支持继承" tabindex="-1"><a class="header-anchor" href="#_2-4-注解不支持继承" aria-hidden="true">#</a> 2.4 注解不支持继承</h3><p>注解是不支持继承的，因此不能使用关键字extends来继承某个@interface，但注解在编译后，编译器会自动继承java.lang.annotation.Annotation接口，这里我们反编译前面定义的DBTable注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zejian<span class="token punctuation">.</span>annotationdemo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Annotation</span></span><span class="token punctuation">;</span>
<span class="token comment">//反编译后的代码</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DBTable</span> <span class="token keyword">extends</span> <span class="token class-name">Annotation</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然反编译后发现DBTable注解继承了Annotation接口，请记住，即使Java的接口可以实现多继承，但定义注解时依然无法使用extends关键字继承@interface。</p><h3 id="_2-5-快捷方式" tabindex="-1"><a class="header-anchor" href="#_2-5-快捷方式" aria-hidden="true">#</a> 2.5 快捷方式</h3><p>所谓的快捷方式就是注解中定义了名为value的元素，并且在使用该注解时，如果该元素是唯一需要赋值的一个元素，那么此时无需使用key=value的语法，而只需在括号内给出value元素所需的值即可。这可以应用于任何合法类型的元素，记住，这限制了元素名必须为value，简单案例如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zejian<span class="token punctuation">.</span>annotationdemo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ElementType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Retention</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RetentionPolicy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Target</span></span><span class="token punctuation">;</span>

<span class="token comment">//定义注解</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">IntegerVaule</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用注解</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuicklyWay</span> <span class="token punctuation">{</span>

    <span class="token comment">//当只想给value赋值时,可以使用以下快捷方式</span>
    <span class="token annotation punctuation">@IntegerVaule</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">//当name也需要赋值时必须采用key=value的方式赋值</span>
    <span class="token annotation punctuation">@IntegerVaule</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">,</span>name <span class="token operator">=</span> <span class="token string">&quot;MONEY&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> money<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-java内置注解与其它元注解" tabindex="-1"><a class="header-anchor" href="#_2-6-java内置注解与其它元注解" aria-hidden="true">#</a> 2.6 Java内置注解与其它元注解</h3><p>接着看看Java提供的内置注解，主要有3个，如下：</p><ul><li><p>@Override：用于标明此方法覆盖了父类的方法，源码如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">SOURCE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Override</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>@Deprecated：用于标明已经过时的方法或类，源码如下，关于@Documented稍后分析：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span> <span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">,</span> <span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token constant">PACKAGE</span><span class="token punctuation">,</span> <span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Deprecated</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>@SuppressWarnnings:用于有选择的关闭编译器对类、方法、成员变量、变量初始化的警告，其实现源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span> <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">SOURCE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SuppressWarnings</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其内部有一个String数组，主要接收值如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>deprecation：使用了不赞成使用的类或方法时的警告；
unchecked：执行了未检查的转换时的警告，例如当使用集合时没有用泛型 <span class="token punctuation">(</span><span class="token class-name">Generics</span><span class="token punctuation">)</span> 来指定集合保存的类型<span class="token punctuation">;</span> 
fallthrough：当 <span class="token class-name">Switch</span> 程序块直接通往下一种情况而没有 <span class="token class-name">Break</span> 时的警告<span class="token punctuation">;</span>
path：在类路径、源文件路径等中有不存在的路径时的警告<span class="token punctuation">;</span> 
serial：当在可序列化的类上缺少 serialVersionUID 定义时的警告<span class="token punctuation">;</span> 
<span class="token keyword">finally</span>：任何 <span class="token keyword">finally</span> 子句不能正常完成时的警告<span class="token punctuation">;</span> 
all：关于以上所有情况的警告。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>这个三个注解比较简单，看个简单案例即可：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//注明该类已过时，不建议使用</span>
<span class="token annotation punctuation">@Deprecated</span>
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token comment">//注明该方法已过时，不建议使用</span>
    <span class="token annotation punctuation">@Deprecated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span> <span class="token comment">//标明覆盖父类A的A方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">super<span class="token punctuation">.</span></span>A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//去掉检测警告</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;uncheck&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;deprecation&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span> 
    <span class="token comment">//去掉检测警告</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;uncheck&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面我们分析了两种元注解，@Target和@Retention，除了这两种元注解，Java还提供了另外两种元注解，@Documented和@Inherited，下面分别介绍：</p><ul><li><p>@Documented 被修饰的注解会生成到javadoc中</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">DocumentA</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//没有使用@Documented</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">DocumentB</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用注解</span>
<span class="token annotation punctuation">@DocumentA</span>
<span class="token annotation punctuation">@DocumentB</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DocumentDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>@Inherited 可以让注解被继承，但这并不是真的继承，只是通过使用@Inherited，可以让子类Class对象使用getAnnotations()获取父类被@Inherited修饰的注解，如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">DocumentA</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">DocumentB</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@DocumentA</span>
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token annotation punctuation">@DocumentB</span>
<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token keyword">extends</span> <span class="token class-name">C</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token comment">//测试</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DocumentDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">A</span> instanceA<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;已使用的@Inherited注解:&quot;</span><span class="token operator">+</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>instanceA<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">C</span> instanceC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;没有使用的@Inherited注解:&quot;</span><span class="token operator">+</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>instanceC<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 运行结果:
     已使用的@Inherited注解:[@com.zejian.annotationdemo.DocumentA()]
     没有使用的@Inherited注解:[]
     */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="三、注解与反射机制" tabindex="-1"><a class="header-anchor" href="#三、注解与反射机制" aria-hidden="true">#</a> 三、注解与反射机制</h2><p>前面经过反编译后，我们知道Java所有注解都继承了Annotation接口，也就是说　Java使用Annotation接口代表注解元素，该接口是所有Annotation类型的父接口。同时为了运行时能准确获取到注解的相关信息，Java在java.lang.reflect 反射包下新增了AnnotatedElement接口，它主要用于表示目前正在 VM 中运行的程序中已使用注解的元素，通过该接口提供的方法可以利用反射技术读取注解的信息，如反射包的Constructor类、Field类、Method类、Package类和Class类都实现了AnnotatedElement接口，它简要含义如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Class：类的Class对象定义 　
Constructor：代表类的构造器定义 　
Field：代表类的成员变量定义
Method：代表类的方法定义 　
Package：代表类的包定义
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是AnnotatedElement中相关的API方法，以上5个类都实现以下的方法</p><table><thead><tr><th>返回值</th><th>方法名称</th><th>说明</th></tr></thead><tbody><tr><td><code>&lt;A extends Annotation&gt;</code></td><td><code>getAnnotation(Class&lt;A&gt; annotationClass)</code></td><td>该元素如果存在指定类型的注解，则返回这些注解，否则返回 null。</td></tr><tr><td><code>Annotation[]</code></td><td><code>getAnnotations()</code></td><td>返回此元素上存在的所有注解，包括从父类继承的</td></tr><tr><td><code>boolean</code></td><td><code>isAnnotationPresent(Class&lt;? extends Annotation&gt; annotationClass)</code></td><td>如果指定类型的注解存在于此元素上，则返回 true，否则返回 false。</td></tr><tr><td><code>Annotation[]</code></td><td><code>getDeclaredAnnotations()</code></td><td>返回直接存在于此元素上的所有注解，注意，不包括父类的注解，调用者可以随意修改返回的数组；这不会对其他调用者返回的数组产生任何影响，没有则返回长度为0的数组</td></tr></tbody></table><p>简单案例演示如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Annotation</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@DocumentA</span>
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token comment">//继承了A类</span>
<span class="token annotation punctuation">@DocumentB</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DocumentDemo</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz <span class="token operator">=</span> <span class="token class-name">DocumentDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token comment">//根据指定注解类型获取该注解</span>
        <span class="token class-name">DocumentA</span> documentA<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">DocumentA</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A:&quot;</span><span class="token operator">+</span>documentA<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取该元素上的所有注解，包含从父类继承</span>
        <span class="token class-name">Annotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> an<span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;an:&quot;</span><span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>an<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取该元素上的所有注解，但不包含继承！</span>
        <span class="token class-name">Annotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> an2<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">getDeclaredAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;an2:&quot;</span><span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>an2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//判断注解DocumentA是否在该元素上</span>
        <span class="token keyword">boolean</span> b<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">DocumentA</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b:&quot;</span><span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 执行结果:
         A:@com.zejian.annotationdemo.DocumentA()
         an:[@com.zejian.annotationdemo.DocumentA(), @com.zejian.annotationdemo.DocumentB()]
         an2:@com.zejian.annotationdemo.DocumentB()
         b:true
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、运行时注解处理器" tabindex="-1"><a class="header-anchor" href="#四、运行时注解处理器" aria-hidden="true">#</a> 四、运行时注解处理器</h2><p>了解完注解与反射的相关API后，现在通过一个实例（该例子是博主改编自《Tinking in Java》）来演示利用运行时注解来组装数据库SQL的构建语句的过程</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 表注解
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span><span class="token comment">//只能应用于类上</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span><span class="token comment">//保存到运行时</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">DBTable</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 注解Integer类型的字段
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SQLInteger</span> <span class="token punctuation">{</span>
    <span class="token comment">//该字段对应数据库表列名</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//嵌套注解</span>
    <span class="token class-name">Constraints</span> <span class="token function">constraint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token annotation punctuation">@Constraints</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 注解String类型的字段
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SQLString</span> <span class="token punctuation">{</span>

    <span class="token comment">//对应数据库表的列名</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">//列类型分配的长度，如varchar(30)的30</span>
    <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token class-name">Constraints</span> <span class="token function">constraint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token annotation punctuation">@Constraints</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 约束注解
 */</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">)</span><span class="token comment">//只能应用在字段上</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Constraints</span> <span class="token punctuation">{</span>
    <span class="token comment">//判断是否作为主键约束</span>
    <span class="token keyword">boolean</span> <span class="token function">primaryKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">//判断是否允许为null</span>
    <span class="token keyword">boolean</span> <span class="token function">allowNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">//判断是否唯一</span>
    <span class="token keyword">boolean</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 数据库表Member对应实例类bean
 */</span>
<span class="token annotation punctuation">@DBTable</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;MEMBER&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Member</span> <span class="token punctuation">{</span>
    <span class="token comment">//主键ID</span>
    <span class="token annotation punctuation">@SQLString</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;ID&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">,</span> constraint <span class="token operator">=</span> <span class="token annotation punctuation">@Constraints</span><span class="token punctuation">(</span>primaryKey <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@SQLString</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;NAME&quot;</span> <span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@SQLInteger</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;AGE&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@SQLString</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;DESCRIPTION&quot;</span> <span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token number">150</span> <span class="token punctuation">,</span> constraint <span class="token operator">=</span> <span class="token annotation punctuation">@Constraints</span><span class="token punctuation">(</span>allowNull <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span><span class="token comment">//个人描述</span>

   <span class="token comment">//省略set get.....</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述定义4个注解，分别是@DBTable(用于类上)、@Constraints(用于字段上)、 @SQLString(用于字段上)、@SQLString(用于字段上)并在Member类中使用这些注解，这些注解的作用的是用于帮助注解处理器生成创建数据库表MEMBER的构建语句，在这里有点需要注意的是，我们使用了嵌套注解@Constraints，该注解主要用于判断字段是否为null或者字段是否唯一。必须清楚认识到上述提供的注解生命周期必须为@Retention(RetentionPolicy.RUNTIME)，即运行时，这样才可以使用反射机制获取其信息。有了上述注解和使用，剩余的就是编写上述的注解处理器了，前面我们聊了很多注解，其处理器要么是Java自身已提供、要么是框架已提供的，我们自己都没有涉及到注解处理器的编写，但上述定义处理SQL的注解，其处理器必须由我们自己编写了，如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zejian<span class="token punctuation">.</span>annotationdemo</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Annotation</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 运行时注解处理器，构造表创建语句
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TableCreator</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">createTableSql</span><span class="token punctuation">(</span><span class="token class-name">String</span> className<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> cl <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DBTable</span> dbTable <span class="token operator">=</span> cl<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">DBTable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//如果没有表注解，直接返回</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>dbTable <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>
              <span class="token string">&quot;No DBTable annotations in class &quot;</span> <span class="token operator">+</span> className<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> tableName <span class="token operator">=</span> dbTable<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// If the name is empty, use the Class name:</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>tableName<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
      tableName <span class="token operator">=</span> cl<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> columnDefs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//通过Class类API获取到所有成员字段</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Field</span> field <span class="token operator">:</span> cl<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span> columnName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token comment">//获取字段上的注解</span>
      <span class="token class-name">Annotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anns <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">getDeclaredAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>anns<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// Not a db table column</span>

      <span class="token comment">//判断注解类型</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>anns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">SQLInteger</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SQLInteger</span> sInt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SQLInteger</span><span class="token punctuation">)</span> anns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//获取字段对应列名称，如果没有就是使用字段名称替代</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>sInt<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
          columnName <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
          columnName <span class="token operator">=</span> sInt<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//构建语句</span>
        columnDefs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>columnName <span class="token operator">+</span> <span class="token string">&quot; INT&quot;</span> <span class="token operator">+</span>
                <span class="token function">getConstraints</span><span class="token punctuation">(</span>sInt<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//判断String类型</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>anns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">SQLString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SQLString</span> sString <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SQLString</span><span class="token punctuation">)</span> anns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// Use field name if name not specified.</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>sString<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
          columnName <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
          columnName <span class="token operator">=</span> sString<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        columnDefs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>columnName <span class="token operator">+</span> <span class="token string">&quot; VARCHAR(&quot;</span> <span class="token operator">+</span>
                sString<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span> <span class="token operator">+</span>
                <span class="token function">getConstraints</span><span class="token punctuation">(</span>sString<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
    <span class="token comment">//数据库表构建语句</span>
    <span class="token class-name">StringBuilder</span> createCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>
            <span class="token string">&quot;CREATE TABLE &quot;</span> <span class="token operator">+</span> tableName <span class="token operator">+</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> columnDef <span class="token operator">:</span> columnDefs<span class="token punctuation">)</span>
      createCommand<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;\\n    &quot;</span> <span class="token operator">+</span> columnDef <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Remove trailing comma</span>
    <span class="token class-name">String</span> tableCreate <span class="token operator">=</span> createCommand<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>
            <span class="token number">0</span><span class="token punctuation">,</span> createCommand<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;);&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> tableCreate<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 判断该字段是否有其他约束
     * <span class="token keyword">@param</span> <span class="token parameter">con</span>
     * <span class="token keyword">@return</span>
     */</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getConstraints</span><span class="token punctuation">(</span><span class="token class-name">Constraints</span> con<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> constraints <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>con<span class="token punctuation">.</span><span class="token function">allowNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      constraints <span class="token operator">+=</span> <span class="token string">&quot; NOT NULL&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>con<span class="token punctuation">.</span><span class="token function">primaryKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      constraints <span class="token operator">+=</span> <span class="token string">&quot; PRIMARY KEY&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>con<span class="token punctuation">.</span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      constraints <span class="token operator">+=</span> <span class="token string">&quot; UNIQUE&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> constraints<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arg<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;com.zejian.annotationdemo.Member&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> className <span class="token operator">:</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Table Creation SQL for &quot;</span> <span class="token operator">+</span>
              className <span class="token operator">+</span> <span class="token string">&quot; is :\\n&quot;</span> <span class="token operator">+</span> <span class="token function">createTableSql</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 输出结果：
     Table Creation SQL for com.zejian.annotationdemo.Member is :
     CREATE TABLE MEMBER(
     ID VARCHAR(50) NOT NULL PRIMARY KEY,
     NAME VARCHAR(30) NOT NULL,
     AGE INT NOT NULL,
     DESCRIPTION VARCHAR(150)
     );
     */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果对反射比较熟悉的同学，上述代码就相对简单了，我们通过传递Member的全路径后通过Class.forName()方法获取到Member的class对象，然后利用Class对象中的方法获取所有成员字段Field，最后利用field.getDeclaredAnnotations()遍历每个Field上的注解再通过注解的类型判断来构建建表的SQL语句。这便是利用注解结合反射来构建SQL语句的简单的处理器模型。</p><h2 id="五、java-8中注解增强" tabindex="-1"><a class="header-anchor" href="#五、java-8中注解增强" aria-hidden="true">#</a> 五、Java 8中注解增强</h2><h3 id="_5-1-元注解-repeatable" tabindex="-1"><a class="header-anchor" href="#_5-1-元注解-repeatable" aria-hidden="true">#</a> 5.1 元注解@Repeatable</h3><p>元注解@Repeatable是JDK1.8新加入的，它表示在同一个位置重复相同的注解。在没有该注解前，一般是无法在同一个类型上使用相同的注解的</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//Java8前无法这样使用</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/update&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/add&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java8前如果是想实现类似的功能，我们需要在定义@FilterPath注解时定义一个数组元素接收多个值如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">FilterPath</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;/update&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;/add&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但在Java8新增了@Repeatable注解后就可以采用如下的方式定义并使用了</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zejian<span class="token punctuation">.</span>annotationdemo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">//使用Java8新增@Repeatable原注解</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Repeatable</span><span class="token punctuation">(</span><span class="token class-name">FilterPaths</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//参数指明接收的注解class</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">FilterPath</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span>  <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">FilterPaths</span> <span class="token punctuation">{</span>
    <span class="token class-name">FilterPath</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用案例</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/update&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/add&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/delete&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">AA</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以简单理解为通过使用@Repeatable后，将使用@FilterPaths注解作为接收同一个类型上重复注解的容器，而每个@FilterPath则负责保存指定的路径串。为了处理上述的新增注解，Java8还在AnnotatedElement接口新增了getDeclaredAnnotationsByType() 和 getAnnotationsByType()两个方法并在接口给出了默认实现，在指定@Repeatable的注解时，可以通过这两个方法获取到注解相关信息。但请注意，旧版API中的getDeclaredAnnotation()和 getAnnotation()是不对@Repeatable注解的处理的(除非该注解没有在同一个声明上重复出现)。注意getDeclaredAnnotationsByType方法获取到的注解不包括父类，其实当 getAnnotationsByType()方法调用时，其内部先执行了getDeclaredAnnotationsByType方法，只有当前类不存在指定注解时，getAnnotationsByType()才会继续从其父类寻找，但请注意如果@FilterPath和@FilterPaths没有使用了@Inherited的话，仍然无法获取。下面通过代码来演示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//使用Java8新增@Repeatable原注解</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Repeatable</span><span class="token punctuation">(</span><span class="token class-name">FilterPaths</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">FilterPath</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span>  <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">FilterPaths</span> <span class="token punctuation">{</span>
    <span class="token class-name">FilterPath</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/list&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">CC</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token comment">//使用案例</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/update&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/add&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/delete&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">AA</span> <span class="token keyword">extends</span> <span class="token class-name">CC</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz <span class="token operator">=</span> <span class="token constant">AA</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token comment">//通过getAnnotationsByType方法获取所有重复注解</span>
        <span class="token class-name">FilterPath</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotationsByType <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getAnnotationsByType</span><span class="token punctuation">(</span><span class="token class-name">FilterPath</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FilterPath</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotationsByType2 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredAnnotationsByType</span><span class="token punctuation">(</span><span class="token class-name">FilterPath</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>annotationsByType <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">FilterPath</span> filter <span class="token operator">:</span> annotationsByType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;1:&quot;</span><span class="token operator">+</span>filter<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>annotationsByType2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">FilterPath</span> filter <span class="token operator">:</span> annotationsByType2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;2:&quot;</span><span class="token operator">+</span>filter<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用getAnnotation的结果:&quot;</span><span class="token operator">+</span>clazz<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">FilterPath</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token doc-comment comment">/**
         * 执行结果(当前类拥有该注解FilterPath,则不会从CC父类寻找)
         1:/web/update
         1:/web/add
         1:/web/delete
         -----------------
         2:/web/update
         2:/web/add
         2:/web/delete
         使用getAnnotation的结果:null
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从执行结果来看如果当前类拥有该注解@FilterPath,则getAnnotationsByType方法不会从CC父类寻找，下面看看另外一种情况，即AA类上没有@FilterPath注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//使用Java8新增@Repeatable原注解</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Inherited</span> <span class="token comment">//添加可继承元注解</span>
<span class="token annotation punctuation">@Repeatable</span><span class="token punctuation">(</span><span class="token class-name">FilterPaths</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">FilterPath</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span>  <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Inherited</span> <span class="token comment">//添加可继承元注解</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">FilterPaths</span> <span class="token punctuation">{</span>
    <span class="token class-name">FilterPath</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/list&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@FilterPath</span><span class="token punctuation">(</span><span class="token string">&quot;/web/getList&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">CC</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token comment">//AA上不使用@FilterPath注解,getAnnotationsByType将会从父类查询</span>
<span class="token keyword">class</span> <span class="token class-name">AA</span> <span class="token keyword">extends</span> <span class="token class-name">CC</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz <span class="token operator">=</span> <span class="token constant">AA</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token comment">//通过getAnnotationsByType方法获取所有重复注解</span>
        <span class="token class-name">FilterPath</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotationsByType <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getAnnotationsByType</span><span class="token punctuation">(</span><span class="token class-name">FilterPath</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FilterPath</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotationsByType2 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredAnnotationsByType</span><span class="token punctuation">(</span><span class="token class-name">FilterPath</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>annotationsByType <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">FilterPath</span> filter <span class="token operator">:</span> annotationsByType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;1:&quot;</span><span class="token operator">+</span>filter<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>annotationsByType2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">FilterPath</span> filter <span class="token operator">:</span> annotationsByType2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;2:&quot;</span><span class="token operator">+</span>filter<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用getAnnotation的结果:&quot;</span><span class="token operator">+</span>clazz<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">FilterPath</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token doc-comment comment">/**
         * 执行结果(当前类没有@FilterPath,getAnnotationsByType方法从CC父类寻找)
         1:/web/list
         1:/web/getList
         -----------------
         使用getAnnotation的结果:null
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意定义@FilterPath和@FilterPath时必须指明@Inherited，getAnnotationsByType方法否则依旧无法从父类获取@FilterPath注解，这是为什么呢，不妨看看getAnnotationsByType方法的实现源码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//接口默认实现方法
default &lt;T extends Annotation&gt; T[] getAnnotationsByType(Class&lt;T&gt; annotationClass) {
//先调用getDeclaredAnnotationsByType方法
T[] result = getDeclaredAnnotationsByType(annotationClass);

//判断当前类获取到的注解数组是否为0
if (result.length == 0 &amp;&amp; this instanceof Class &amp;&amp; 
//判断定义注解上是否使用了@Inherited元注解 
 AnnotationType.getInstance(annotationClass).isInherited()) { // Inheritable
        //从父类获取
       Class&lt;?&gt; superClass = ((Class&lt;?&gt;) this).getSuperclass();
   if (superClass != null) {
      result = superClass.getAnnotationsByType(annotationClass);
       }
   }

   return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-新增的两种elementtype" tabindex="-1"><a class="header-anchor" href="#_5-2-新增的两种elementtype" aria-hidden="true">#</a> 5.2 新增的两种ElementType</h3><p>在Java8中 ElementType 新增两个枚举成员，TYPE_PARAMETER 和 TYPE_USE ，在Java8前注解只能标注在一个声明(如字段、类、方法)上，Java8后，新增的TYPE_PARAMETER可以用于标注类型参数，而TYPE_USE则可以用于标注任意类型(不包括class)。如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//TYPE_PARAMETER 标注在类型参数上
class D&lt;@Parameter T&gt; { }

//TYPE_USE则可以用于标注任意类型(不包括class)
//用于父类或者接口
class Image implements @Rectangular Shape { }

//用于构造函数
new @Path String(&quot;/usr/bin&quot;)

//用于强制转换和instanceof检查,注意这些注解中用于外部工具，它们不会对类型转换或者instanceof的检查行为带来任何影响。
String path=(@Path String)input;
if(input instanceof @Path String)

//用于指定异常
public Person read() throws @Localized IOException.

//用于通配符绑定
List&lt;@ReadOnly ? extends Person&gt;
List&lt;? extends @ReadOnly Person&gt;

@NotNull String.class //非法，不能标注class
import java.lang.@NotNull String //非法，不能标注import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里主要说明一下TYPE_USE，类型注解用来支持在Java的程序中做强类型检查，配合第三方插件工具（如Checker Framework），可以在编译期检测出runtime error（如UnsupportedOperationException、NullPointerException异常），避免异常延续到运行期才发现，从而提高代码质量，这就是类型注解的主要作用。总之Java 8 新增加了两个注解的元素类型ElementType.TYPE_USE 和ElementType.TYPE_PARAMETER ，通过它们，我们可以把注解应用到各种新场合中。</p>`,56);function m(b,g){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("p",null,[s("@Target 用来约束注解可以应用的地方（如方法、类或字段），其中ElementType是"),n("a",k,[s("枚举类"),l(t)]),s("型，其定义如下，也代表可能的取值范围")]),d]),r]),v])}const f=p(i,[["render",m],["__file","java-annotation.html.vue"]]);export{f as default};
