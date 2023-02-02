const e=JSON.parse('{"key":"v-00b98387","path":"/quality/design-mode/design-decorator.html","title":"装饰器模式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一、概述","slug":"一、概述","link":"#一、概述","children":[]},{"level":2,"title":"二、结构","slug":"二、结构","link":"#二、结构","children":[]},{"level":2,"title":"三、案例","slug":"三、案例","link":"#三、案例","children":[]},{"level":2,"title":"四、使用场景","slug":"四、使用场景","link":"#四、使用场景","children":[]},{"level":2,"title":"五、JDK源码解析","slug":"五、jdk源码解析","link":"#五、jdk源码解析","children":[]},{"level":2,"title":"六、代理和装饰者的区别","slug":"六、代理和装饰者的区别","link":"#六、代理和装饰者的区别","children":[]}],"git":{"createdTime":1652840208000,"updatedTime":1673767263000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":3}]},"readingTime":{"minutes":4.62,"words":1386},"filePathRelative":"quality/design-mode/design-decorator.md","localizedDate":"2022年5月18日","excerpt":"<h1> 装饰器模式</h1>\\n<h2> 一、概述</h2>\\n<p>我们先来看一个快餐店的例子。</p>\\n<p>快餐店有炒面、炒饭这些快餐，可以额外附加鸡蛋、火腿、培根这些配菜，当然加配菜需要额外加钱，每个配菜的价钱通常不太一样，那么计算总价就会显得比较麻烦。</p>\\n\\n<p>使用继承的方式存在的问题：</p>\\n<ul>\\n<li>\\n<p>扩展性不好</p>\\n<p>如果要再加一种配料（火腿肠），我们就会发现需要给FriedRice和FriedNoodles分别定义一个子类。如果要新增一个快餐品类（炒河粉）的话，就需要定义更多的子类。</p>\\n</li>\\n<li>\\n<p>产生过多的子类</p>\\n</li>\\n</ul>"}');export{e as data};