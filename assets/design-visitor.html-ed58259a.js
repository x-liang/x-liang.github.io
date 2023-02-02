const e=JSON.parse('{"key":"v-4959c518","path":"/quality/design-mode/design-visitor.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"访问者模式","slug":"访问者模式","link":"#访问者模式","children":[{"level":3,"title":"6.9.1 概述","slug":"_6-9-1-概述","link":"#_6-9-1-概述","children":[]},{"level":3,"title":"6.9.2 结构","slug":"_6-9-2-结构","link":"#_6-9-2-结构","children":[]},{"level":3,"title":"6.9.3 案例实现","slug":"_6-9-3-案例实现","link":"#_6-9-3-案例实现","children":[]},{"level":3,"title":"6.9.4 优缺点","slug":"_6-9-4-优缺点","link":"#_6-9-4-优缺点","children":[]},{"level":3,"title":"6.9.5  使用场景","slug":"_6-9-5-使用场景","link":"#_6-9-5-使用场景","children":[]},{"level":3,"title":"6.9.6 扩展","slug":"_6-9-6-扩展","link":"#_6-9-6-扩展","children":[]}]}],"git":{"createdTime":1673767263000,"updatedTime":1673767263000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":6.7,"words":2011},"filePathRelative":"quality/design-mode/design-visitor.md","localizedDate":"2023年1月15日","excerpt":"<h2> 访问者模式</h2>\\n<h3> 6.9.1 概述</h3>\\n<p><strong>定义：</strong></p>\\n<p>封装一些作用于某种数据结构中的各元素的操作，它可以在不改变这个数据结构的前提下定义作用于这些元素的新的操作。</p>\\n<h3> 6.9.2 结构</h3>\\n<p>访问者模式包含以下主要角色:</p>\\n<ul>\\n<li>抽象访问者（Visitor）角色：定义了对每一个元素<code>（Element）</code>访问的行为，它的参数就是可以访问的元素，它的方法个数理论上来讲与元素类个数（Element的实现类个数）是一样的，从这点不难看出，访问者模式要求元素类的个数不能改变。</li>\\n<li>具体访问者（ConcreteVisitor）角色：给出对每一个元素类访问时所产生的具体行为。</li>\\n<li>抽象元素（Element）角色：定义了一个接受访问者的方法（<code>accept</code>），其意义是指，每一个元素都要可以被访问者访问。</li>\\n<li>具体元素（ConcreteElement）角色： 提供接受访问方法的具体实现，而这个具体的实现，通常情况下是使用访问者提供的访问该元素类的方法。</li>\\n<li>对象结构（Object Structure）角色：定义当中所提到的对象结构，对象结构是一个抽象表述，具体点可以理解为一个具有容器性质或者复合对象特性的类，它会含有一组元素（<code>Element</code>），并且可以迭代这些元素，供访问者访问。</li>\\n</ul>"}');export{e as data};
