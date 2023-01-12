const e=JSON.parse('{"key":"v-cf02a2f4","path":"/middleware/jackson/jackson-overview.html","title":"Jackson  用法详解","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一、简介","slug":"一、简介","link":"#一、简介","children":[]},{"level":2,"title":"二、依赖","slug":"二、依赖","link":"#二、依赖","children":[]},{"level":2,"title":"三、 ObjectMapper","slug":"三、-objectmapper","link":"#三、-objectmapper","children":[{"level":3,"title":"一）、从JSON中获取Java对象","slug":"一-、从json中获取java对象","link":"#一-、从json中获取java对象","children":[]},{"level":3,"title":"二）、将对象写入JSON","slug":"二-、将对象写入json","link":"#二-、将对象写入json","children":[]},{"level":3,"title":"三）、Jackson 日期转化","slug":"三-、jackson-日期转化","link":"#三-、jackson-日期转化","children":[]},{"level":3,"title":"四）、Jackson JSON 树模型","slug":"四-、jackson-json-树模型","link":"#四-、jackson-json-树模型","children":[]}]},{"level":2,"title":"四、JsonNode","slug":"四、jsonnode","link":"#四、jsonnode","children":[{"level":3,"title":"1、JsonNode vs ObjectNode","slug":"_1、jsonnode-vs-objectnode","link":"#_1、jsonnode-vs-objectnode","children":[]},{"level":3,"title":"2、JSON-->JsonNode","slug":"_2、json-jsonnode","link":"#_2、json-jsonnode","children":[]},{"level":3,"title":"3、JsonNode-->JSON","slug":"_3、jsonnode-json","link":"#_3、jsonnode-json","children":[]},{"level":3,"title":"4、获取JsonNode字段","slug":"_4、获取jsonnode字段","link":"#_4、获取jsonnode字段","children":[]},{"level":3,"title":"5、在路径中获取JsonNode字段","slug":"_5、在路径中获取jsonnode字段","link":"#_5、在路径中获取jsonnode字段","children":[]},{"level":3,"title":"6、转换JsonNode字段","slug":"_6、转换jsonnode字段","link":"#_6、转换jsonnode字段","children":[]},{"level":3,"title":"7、创建一个ObjectNode","slug":"_7、创建一个objectnode","link":"#_7、创建一个objectnode","children":[]},{"level":3,"title":"8、Set ObjectNode字段","slug":"_8、set-objectnode字段","link":"#_8、set-objectnode字段","children":[]},{"level":3,"title":"9、Put ObjectNode字段","slug":"_9、put-objectnode字段","link":"#_9、put-objectnode字段","children":[]},{"level":3,"title":"10、删除字段","slug":"_10、删除字段","link":"#_10、删除字段","children":[]},{"level":3,"title":"11、循环JsonNode字段","slug":"_11、循环jsonnode字段","link":"#_11、循环jsonnode字段","children":[]}]},{"level":2,"title":"五、JsonParser","slug":"五、jsonparser","link":"#五、jsonparser","children":[{"level":3,"title":"1、创建一个JsonParser","slug":"_1、创建一个jsonparser","link":"#_1、创建一个jsonparser","children":[]},{"level":3,"title":"2、用JsonParser转化JSON","slug":"_2、用jsonparser转化json","link":"#_2、用jsonparser转化json","children":[]}]},{"level":2,"title":"六、JsonGenerator","slug":"六、jsongenerator","link":"#六、jsongenerator","children":[{"level":3,"title":"1、创建一个JsonGenerator","slug":"_1、创建一个jsongenerator","link":"#_1、创建一个jsongenerator","children":[]},{"level":3,"title":"2、使用JsonGenerator生成JSON","slug":"_2、使用jsongenerator生成json","link":"#_2、使用jsongenerator生成json","children":[]},{"level":3,"title":"3、关闭JsonGenerator","slug":"_3、关闭jsongenerator","link":"#_3、关闭jsongenerator","children":[]}]},{"level":2,"title":"七、Jackson注解","slug":"七、jackson注解","link":"#七、jackson注解","children":[{"level":3,"title":"一）、Read + Write注解","slug":"一-、read-write注解","link":"#一-、read-write注解","children":[]},{"level":3,"title":"二）、Read注解","slug":"二-、read注解","link":"#二-、read注解","children":[]},{"level":3,"title":"三）、Write注解","slug":"三-、write注解","link":"#三-、write注解","children":[]}]}],"git":{"createdTime":1670157363000,"updatedTime":1670157363000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":34.4,"words":10319},"filePathRelative":"middleware/jackson/jackson-overview.md","localizedDate":"2022年12月4日","excerpt":"<h1> Jackson  用法详解</h1>\\n<blockquote>\\n<p>Spring MVC 默认采用Jackson解析Json，尽管还有一些其它同样优秀的json解析工具，例如Fast Json、GSON，但是出于最小依赖的考虑，也许Json解析第一选择就应该是Jackson。</p>\\n</blockquote>\\n<h2> 一、简介</h2>\\n<p>Jackson 是当前用的比较广泛的，用来序列化和反序列化 json 的 Java 的开源框架。Jackson 社区相对比较活跃，更新速度也比较快， 从 Github 中的统计来看，Jackson 是最流行的 json 解析器之一 。 Spring MVC 的默认 json 解析器便是 Jackson。 Jackson 优点很多。 Jackson 所依赖的 jar 包较少 ，简单易用。与其他 Java 的 json 的框架 Gson 等相比， Jackson 解析大的 json 文件速度比较快；Jackson 运行时占用内存比较低，性能比较好；Jackson 有灵活的 API，可以很容易进行扩展和定制。</p>"}');export{e as data};