const a=JSON.parse('{"key":"v-5de44728","path":"/middleware/kafka/kafka-overview.html","title":"Kafka Overview","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"Kafka 入门介绍","slug":"kafka-入门介绍","link":"#kafka-入门介绍","children":[]},{"level":3,"title":"Kafka的消息模型","slug":"kafka的消息模型","link":"#kafka的消息模型","children":[]},{"level":3,"title":"Kafka副本同步机制","slug":"kafka副本同步机制","link":"#kafka副本同步机制","children":[]},{"level":3,"title":"Kafka文件存储机制","slug":"kafka文件存储机制","link":"#kafka文件存储机制","children":[]},{"level":3,"title":"kafka数据可靠性和一致性保证","slug":"kafka数据可靠性和一致性保证","link":"#kafka数据可靠性和一致性保证","children":[]},{"level":3,"title":"kafka leader选举","slug":"kafka-leader选举","link":"#kafka-leader选举","children":[]},{"level":3,"title":"消息传递语义","slug":"消息传递语义","link":"#消息传递语义","children":[]},{"level":3,"title":"Kafka集群partitions/replicas默认分配解析","slug":"kafka集群partitions-replicas默认分配解析","link":"#kafka集群partitions-replicas默认分配解析","children":[]},{"level":3,"title":"Kafka的简单安装","slug":"kafka的简单安装","link":"#kafka的简单安装","children":[]},{"level":3,"title":"Kafka配置文件总结","slug":"kafka配置文件总结","link":"#kafka配置文件总结","children":[]}],"git":{"createdTime":1658995940000,"updatedTime":1660123310000,"contributors":[{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":3}]},"readingTime":{"minutes":40.2,"words":12059},"localizedDate":"2022年7月28日","filePathRelative":"middleware/kafka/kafka-overview.md","excerpt":"<h1> Kafka Overview</h1>\\n<h3> Kafka 入门介绍</h3>\\n<p>一个流处理平台，应该具备三个关键能力：</p>\\n<ul>\\n<li>发布和订阅消息（流）， 在这方面，他类似一个消息队列</li>\\n<li>以容错（故障转移）的方式处理存储消息（流）</li>\\n<li>在消息发生是处理他们</li>\\n</ul>\\n<p>kafka作为一个流处理平台，主要应用于两大类场景：</p>\\n<ul>\\n<li>构建实时的数据流管道，可靠的获取系统和应用程序之间的数据</li>\\n<li>构建实时流的应用程序，对数据流进行转换或反应</li>\\n</ul>\\n<h4> 几个概念</h4>"}');export{a as data};