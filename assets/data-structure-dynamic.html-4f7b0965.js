const e=JSON.parse('{"key":"v-5ecedee1","path":"/quality/data-structure/data-structure-dynamic.html","title":"动态规划","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一、基础知识","slug":"一、基础知识","link":"#一、基础知识","children":[{"level":3,"title":"1.1 定义：","slug":"_1-1-定义","link":"#_1-1-定义","children":[]},{"level":3,"title":"1.2 总结","slug":"_1-2-总结","link":"#_1-2-总结","children":[]}]},{"level":2,"title":"二、背包问题","slug":"二、背包问题","link":"#二、背包问题","children":[{"level":3,"title":"1.1 背包问题","slug":"_1-1-背包问题","link":"#_1-1-背包问题","children":[]}]}],"git":{"createdTime":1699793854000,"updatedTime":1699793854000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":7.72,"words":2317},"filePathRelative":"quality/data-structure/data-structure-dynamic.md","localizedDate":"2023年11月12日","excerpt":"<h1> 动态规划</h1>\\n<h2> 一、基础知识</h2>\\n<h3> 1.1 定义：</h3>\\n<p>动态规划(Dynamic Programming,DP)是运筹学的一个分支，是求解决策过程最优化的过程。20世纪50年代初，美国数学家贝尔曼(R.Bellman)等人在研究多阶段决策过程的优化问题时，提出了著名的最优化原理，从而创立了动态规划。动态规划的应用极其广泛，包括工程技术、经济、工业生产、军事以及自动化控制等领域，并在背包问题、生产经营问题、资金管理问题、资源分配问题，最短路径问题和复杂系统可靠性问靠性问题等中取得了显著的效果。</p>\\n<p>动态规划算法通常用于求解具有某种最优性质的问题。在这类问题中，可能会有许多可行解。每一个解都对应于一个值，我们希望找到具有最优值的解。动态规划算法与分治法类似，其基本思想也是将待求解问题分解成若干个子问题，先求解子问题，然后从这些子问题的解得到原问题的解。与分治法不同的是，适合于用动态规划求解的问题，经分解得到子问题往往不是互相独立的。若用分治法来解这类问题，则分解得到的子问题数目太多，有些子问题被重复计算了很多次。如果我们能够保存已解决的子问题的答案，而在需要时再找出已求得的答案，这样就可以避免大量的重复计算，节省时间。我们可以用一个表来记录所有已解的子问题的答案。不管该子问题以后是否被用到，只要它被计算过，就将其结果填入表中。这就是动态规划法的基本思路。具体的动态规划算法多种多样，但它们具有相同的填表格式。</p>"}');export{e as data};
