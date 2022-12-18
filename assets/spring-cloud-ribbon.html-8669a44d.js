const l=JSON.parse('{"key":"v-20e24ead","path":"/spring-cloud/spring-cloud-ribbon/spring-cloud-ribbon.html","title":"Spring Cloud Ribbon 源码解析","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"负载均衡简介","slug":"负载均衡简介","link":"#负载均衡简介","children":[{"level":3,"title":"服务器端负载均衡器","slug":"服务器端负载均衡器","link":"#服务器端负载均衡器","children":[]},{"level":3,"title":"客户端负载均衡器","slug":"客户端负载均衡器","link":"#客户端负载均衡器","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon 简介","slug":"spring-cloud-ribbon-简介","link":"#spring-cloud-ribbon-简介","children":[]},{"level":2,"title":"Spring Cloud Ribbon中的关键组件","slug":"spring-cloud-ribbon中的关键组件","link":"#spring-cloud-ribbon中的关键组件","children":[]},{"level":2,"title":"Spring Cloud Ribbon简单使用","slug":"spring-cloud-ribbon简单使用","link":"#spring-cloud-ribbon简单使用","children":[]},{"level":2,"title":"Spring Cloud Ribbon的负载均衡策略","slug":"spring-cloud-ribbon的负载均衡策略","link":"#spring-cloud-ribbon的负载均衡策略","children":[{"level":3,"title":"负载均衡策略概述","slug":"负载均衡策略概述","link":"#负载均衡策略概述","children":[]},{"level":3,"title":"RandomRule","slug":"randomrule","link":"#randomrule","children":[]},{"level":3,"title":"RoundRobinRule","slug":"roundrobinrule","link":"#roundrobinrule","children":[]},{"level":3,"title":"RetryRule","slug":"retryrule","link":"#retryrule","children":[]},{"level":3,"title":"ClientConfigEnabledRoundRobinRule","slug":"clientconfigenabledroundrobinrule","link":"#clientconfigenabledroundrobinrule","children":[]},{"level":3,"title":"WeightedResponseTimeRule","slug":"weightedresponsetimerule","link":"#weightedresponsetimerule","children":[]},{"level":3,"title":"BestAvailableRule","slug":"bestavailablerule","link":"#bestavailablerule","children":[]},{"level":3,"title":"ZoneAvoidanceRule","slug":"zoneavoidancerule","link":"#zoneavoidancerule","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon的心跳检测机制","slug":"spring-cloud-ribbon的心跳检测机制","link":"#spring-cloud-ribbon的心跳检测机制","children":[{"level":3,"title":"NoOpPing","slug":"noopping","link":"#noopping","children":[]},{"level":3,"title":"PingUrl","slug":"pingurl","link":"#pingurl","children":[]},{"level":3,"title":"PingConstant","slug":"pingconstant","link":"#pingconstant","children":[]},{"level":3,"title":"DummyPing","slug":"dummyping","link":"#dummyping","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon的服务列表","slug":"spring-cloud-ribbon的服务列表","link":"#spring-cloud-ribbon的服务列表","children":[{"level":3,"title":"StaticServerList","slug":"staticserverlist","link":"#staticserverlist","children":[]},{"level":3,"title":"ConfigurationBasedServerList","slug":"configurationbasedserverlist","link":"#configurationbasedserverlist","children":[]},{"level":3,"title":"NacosServerList","slug":"nacosserverlist","link":"#nacosserverlist","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon的服务列表过滤","slug":"spring-cloud-ribbon的服务列表过滤","link":"#spring-cloud-ribbon的服务列表过滤","children":[{"level":3,"title":"ZoneAffinityServerListFilter","slug":"zoneaffinityserverlistfilter","link":"#zoneaffinityserverlistfilter","children":[]},{"level":3,"title":"ServerListSubsetFilter","slug":"serverlistsubsetfilter","link":"#serverlistsubsetfilter","children":[]},{"level":3,"title":"ZonePreferenceServerListFilter","slug":"zonepreferenceserverlistfilter","link":"#zonepreferenceserverlistfilter","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon的服务列表更新","slug":"spring-cloud-ribbon的服务列表更新","link":"#spring-cloud-ribbon的服务列表更新","children":[{"level":3,"title":"PollingServerListUpdater","slug":"pollingserverlistupdater","link":"#pollingserverlistupdater","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon的负载均衡器","slug":"spring-cloud-ribbon的负载均衡器","link":"#spring-cloud-ribbon的负载均衡器","children":[{"level":3,"title":"NoOpLoadBalancer","slug":"nooploadbalancer","link":"#nooploadbalancer","children":[]},{"level":3,"title":"BaseLoadBalancer","slug":"baseloadbalancer","link":"#baseloadbalancer","children":[]},{"level":3,"title":"DynamicServerListLoadBalancer","slug":"dynamicserverlistloadbalancer","link":"#dynamicserverlistloadbalancer","children":[]},{"level":3,"title":"ZoneAwareLoadBalancer","slug":"zoneawareloadbalancer","link":"#zoneawareloadbalancer","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon自动装配","slug":"spring-cloud-ribbon自动装配","link":"#spring-cloud-ribbon自动装配","children":[{"level":3,"title":"RibbonAutoConfiguration上的注解","slug":"ribbonautoconfiguration上的注解","link":"#ribbonautoconfiguration上的注解","children":[]},{"level":3,"title":"RibbonAutoConfiguration","slug":"ribbonautoconfiguration","link":"#ribbonautoconfiguration","children":[]},{"level":3,"title":"LoadBalancerAutoConfiguration","slug":"loadbalancerautoconfiguration","link":"#loadbalancerautoconfiguration","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon中重要的组件","slug":"spring-cloud-ribbon中重要的组件","link":"#spring-cloud-ribbon中重要的组件","children":[{"level":3,"title":"IClientConfig","slug":"iclientconfig","link":"#iclientconfig","children":[]},{"level":3,"title":"LoadBalancerStatus","slug":"loadbalancerstatus","link":"#loadbalancerstatus","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon中的监控组件","slug":"spring-cloud-ribbon中的监控组件","link":"#spring-cloud-ribbon中的监控组件","children":[{"level":3,"title":"基础工具包","slug":"基础工具包","link":"#基础工具包","children":[]},{"level":3,"title":"ServerStats","slug":"serverstats","link":"#serverstats","children":[]},{"level":3,"title":"LoadBalancerStats","slug":"loadbalancerstats","link":"#loadbalancerstats","children":[]}]},{"level":2,"title":"Spring Cloud Ribbon 配置总结","slug":"spring-cloud-ribbon-配置总结","link":"#spring-cloud-ribbon-配置总结","children":[]}],"git":{"createdTime":1654958186000,"updatedTime":1657704523000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":4},{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":4}]},"readingTime":{"minutes":38.57,"words":11572},"localizedDate":"2022年6月11日","filePathRelative":"spring-cloud/spring-cloud-ribbon/spring-cloud-ribbon.md","excerpt":"<h1> Spring Cloud Ribbon 源码解析</h1>\\n<h2> 负载均衡简介</h2>\\n<p>负载均衡，英文名称为Load Balance，其含义就是指将负载（工作任务）进行平衡、分摊到多个操作单元上进行运行，例如FTP服务器、Web服务器、企业核心应用服务器和其它主要任务服务器等，从而协同完成工作任务。</p>\\n<p>负载均衡构建在原有网络结构之上，它提供了一种透明且廉价有效的方法扩展服务器和网络设备的带宽、加强网络数据处理能力、增加吞吐量、提高网络的可用性和灵活性。</p>\\n<h3> 服务器端负载均衡器</h3>\\n<p>传统上，Load Balancers（例如Nginx、F5）是放置在服务器端的组件。当请求来自 <strong>客户端</strong> 时，它们将转到负载均衡器，负载均衡器将为请求指定 <strong>服务器</strong>。负载均衡器使用的最简单的算法是随机指定。在这种情况下，大多数负载平衡器是用于控制负载平衡的硬件集成软件。</p>"}');export{l as data};
