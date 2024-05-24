import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as r,a as e,b as t,d as n,e as a}from"./app-9aa256ea.js";const p="/assets/提纲-6ba2a9e7.png",h="/assets/CPU架构-55444ac8.png",_="/assets/存储器的层次关系图-f3302960.png",d="/assets/存储器成本的对比-30894e6f.png",l="/assets/查看CPULine大小-c71de2c2.png",C="/assets/同一个缓存行-a4b3f989.png",g="/assets/分析伪共享1-d8cf6d0a.png",m="/assets/分析伪共享2-23254672.png",u="/assets/分析伪共享3-ec923c14.png",f="/assets/分析伪共享4-b8f7effe.png",P="/assets/分析伪共享5-1475454a.png",L="/assets/cacheline_aligned-b739d137.png",E="/assets/struct_test-8c8d7bff.png",U="/assets/struct_ab-53111312.png",B="/assets/struct_test1-00e88937.png",A="/assets/struct_ab1-8ff4db28.png",b="/assets/Disruptor-4c43ce02.png",x="/assets/填充字节-32855043.png",k="/assets/任务-532f7bad.png",w="/assets/调度类-bb058bdb.png",F="/assets/vruntime-f9a07529.png",D="/assets/CPU队列-45dc11ad.png",S="/assets/优先级-0244ac98.png",v="/assets/nice-ada776ca.png",q="/assets/renice-8c6d11ab.png",R="/assets/chrt-95602f7e.png",I={},N=a('<h1 id="cpu-是如何执行任务的" tabindex="-1"><a class="header-anchor" href="#cpu-是如何执行任务的" aria-hidden="true">#</a> CPU 是如何执行任务的？</h1><p>你清楚下面这几个问题吗？</p><ul><li>有了内存，为什么还需要 CPU Cache？</li><li>CPU 是怎么读写数据的？</li><li>如何让 CPU 能读取数据更快一些？</li><li>CPU 伪共享是如何发生的？又该如何避免？</li><li>CPU 是如何调度任务的？如果你的任务对响应要求很高，你希望它总是能被先调度，这该怎么办？</li><li>...</li></ul><p>这篇，我们就来回答这些问题。</p><p><img src="'+p+'" alt="img"></p><hr>',6),y={id:"cpu-如何读写数据的",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#cpu-如何读写数据的","aria-hidden":"true"},"#",-1),M={href:"https://xiaolincoding.com/os/1_hardware/how_cpu_deal_task.html#cpu-%E5%A6%82%E4%BD%95%E8%AF%BB%E5%86%99%E6%95%B0%E6%8D%AE%E7%9A%84",target:"_blank",rel:"noopener noreferrer"},V=a('<p>先来认识 CPU 的架构，只有理解了 CPU 的 架构，才能更好地理解 CPU 是如何读写数据的，对于现代 CPU 的架构图如下：</p><p><img src="'+h+'" alt="img"></p><p>可以看到，一个 CPU 里通常会有多个 CPU 核心，比如上图中的 1 号和 2 号 CPU 核心，并且每个 CPU 核心都有自己的 L1 Cache 和 L2 Cache，而 L1 Cache 通常分为 dCache（数据缓存） 和 iCache（指令缓存），L3 Cache 则是多个核心共享的，这就是 CPU 典型的缓存层次。</p><p>上面提到的都是 CPU 内部的 Cache，放眼外部的话，还会有内存和硬盘，这些存储设备共同构成了金字塔存储层次。如下图所示：</p><p><img src="'+_+'" alt="img"></p><p>从上图也可以看到，从上往下，存储设备的容量会越大，而访问速度会越慢。至于每个存储设备的访问延时，你可以看下图的表格：</p><p><img src="'+d+'" alt="img"></p><p>你可以看到， CPU 访问 L1 Cache 速度比访问内存快 100 倍，这就是为什么 CPU 里会有 L1~L3 Cache 的原因，目的就是把 Cache 作为 CPU 与内存之间的缓存层，以减少对内存的访问频率。</p><p>CPU 从内存中读取数据到 Cache 的时候，并不是一个字节一个字节读取，而是一块一块的方式来读取数据的，这一块一块的数据被称为 CPU Cache Line（缓存块），所以 <strong>CPU Cache Line 是 CPU 从内存读取数据到 Cache 的单位</strong>。</p><p>至于 CPU Cache Line 大小，在 Linux 系统可以用下面的方式查看到，你可以看我服务器的 L1 Cache Line 大小是 64 字节，也就意味着 <strong>L1 Cache 一次载入数据的大小是 64 字节</strong>。</p><p><img src="'+l+'" alt="img"></p><p>那么对数组的加载， CPU 就会加载数组里面连续的多个数据到 Cache 里，因此我们应该按照物理内存地址分布的顺序去访问元素，这样访问数组元素的时候，Cache 命中率就会很高，于是就能减少从内存读取数据的频率， 从而可提高程序的性能。</p><p>但是，在我们不使用数组，而是使用单独的变量的时候，则会有 Cache 伪共享的问题，Cache 伪共享问题上是一个性能杀手，我们应该要规避它。</p><p>接下来，就来看看 Cache 伪共享是什么？又如何避免这个问题？</p><p>现在假设有一个双核心的 CPU，这两个 CPU 核心并行运行着两个不同的线程，它们同时从内存中读取两个不同的数据，分别是类型为 <code>long</code> 的变量 A 和 B，这个两个数据的地址在物理内存上是<strong>连续</strong>的，如果 Cahce Line 的大小是 64 字节，并且变量 A 在 Cahce Line 的开头位置，那么这两个数据是位于<strong>同一个 Cache Line 中</strong>，又因为 CPU Cache Line 是 CPU 从内存读取数据到 Cache 的单位，所以这两个数据会被同时读入到了两个 CPU 核心中各自 Cache 中。</p><p><img src="'+C+'" alt="img"></p><p>我们来思考一个问题，如果这两个不同核心的线程分别修改不同的数据，比如 1 号 CPU 核心的线程只修改了 变量 A，或 2 号 CPU 核心的线程的线程只修改了变量 B，会发生什么呢？</p>',17),O={id:"分析伪共享的问题",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#分析伪共享的问题","aria-hidden":"true"},"#",-1),J={href:"https://xiaolincoding.com/os/1_hardware/how_cpu_deal_task.html#%E5%88%86%E6%9E%90%E4%BC%AA%E5%85%B1%E4%BA%AB%E7%9A%84%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"},j={href:"https://mp.weixin.qq.com/s/PDUqwAIaUxNkbjvRfovaCg",target:"_blank",rel:"noopener noreferrer"},Q=a('<p>①. 最开始变量 A 和 B 都还不在 Cache 里面，假设 1 号核心绑定了线程 A，2 号核心绑定了线程 B，线程 A 只会读写变量 A，线程 B 只会读写变量 B。</p><p><img src="'+g+'" alt="img"></p><p>②. 1 号核心读取变量 A，由于 CPU 从内存读取数据到 Cache 的单位是 Cache Line，也正好变量 A 和 变量 B 的数据归属于同一个 Cache Line，所以 A 和 B 的数据都会被加载到 Cache，并将此 Cache Line 标记为「独占」状态。</p><p><img src="'+m+'" alt="img"></p><p>③. 接着，2 号核心开始从内存里读取变量 B，同样的也是读取 Cache Line 大小的数据到 Cache 中，此 Cache Line 中的数据也包含了变量 A 和 变量 B，此时 1 号和 2 号核心的 Cache Line 状态变为「共享」状态。</p><p><img src="'+u+'" alt="img"></p><p>④. 1 号核心需要修改变量 A，发现此 Cache Line 的状态是「共享」状态，所以先需要通过总线发送消息给 2 号核心，通知 2 号核心把 Cache 中对应的 Cache Line 标记为「已失效」状态，然后 1 号核心对应的 Cache Line 状态变成「已修改」状态，并且修改变量 A。</p><p><img src="'+f+'" alt="img"></p><p>⑤. 之后，2 号核心需要修改变量 B，此时 2 号核心的 Cache 中对应的 Cache Line 是已失效状态，另外由于 1 号核心的 Cache 也有此相同的数据，且状态为「已修改」状态，所以要先把 1 号核心的 Cache 对应的 Cache Line 写回到内存，然后 2 号核心再从内存读取 Cache Line 大小的数据到 Cache 中，最后把变量 B 修改到 2 号核心的 Cache 中，并将状态标记为「已修改」状态。</p><p><img src="'+P+'" alt="img"></p><p>所以，可以发现如果 1 号和 2 号 CPU 核心这样持续交替的分别修改变量 A 和 B，就会重复 ④ 和 ⑤ 这两个步骤，Cache 并没有起到缓存的效果，虽然变量 A 和 B 之间其实并没有任何的关系，但是因为同时归属于一个 Cache Line ，这个 Cache Line 中的任意数据被修改后，都会相互影响，从而出现 ④ 和 ⑤ 这两个步骤。</p><p>因此，这种因为多个线程同时读写同一个 Cache Line 的不同变量时，而导致 CPU Cache 失效的现象称为<strong>伪共享（*False Sharing*）</strong>。</p>',12),z={id:"避免伪共享的方法",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#避免伪共享的方法","aria-hidden":"true"},"#",-1),K={href:"https://xiaolincoding.com/os/1_hardware/how_cpu_deal_task.html#%E9%81%BF%E5%85%8D%E4%BC%AA%E5%85%B1%E4%BA%AB%E7%9A%84%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},W=a('<p>因此，对于多个线程共享的热点数据，即经常会修改的数据，应该避免这些数据刚好在同一个 Cache Line 中，否则就会出现为伪共享的问题。</p><p>接下来，看看在实际项目中是用什么方式来避免伪共享的问题的。</p><p>在 Linux 内核中存在 <code>__cacheline_aligned_in_smp</code> 宏定义，是用于解决伪共享的问题。</p><p><img src="'+L+'" alt="img"></p><p>从上面的宏定义，我们可以看到：</p><ul><li>如果在多核（MP）系统里，该宏定义是 <code>__cacheline_aligned</code>，也就是 Cache Line 的大小；</li><li>而如果在单核系统里，该宏定义是空的；</li></ul><p>因此，针对在同一个 Cache Line 中的共享的数据，如果在多核之间竞争比较严重，为了防止伪共享现象的发生，可以采用上面的宏定义使得变量在 Cache Line 里是对齐的。</p><p>举个例子，有下面这个结构体：</p><p><img src="'+E+'" alt="img"></p><p>结构体里的两个成员变量 a 和 b 在物理内存地址上是连续的，于是它们可能会位于同一个 Cache Line 中，如下图：</p><p><img src="'+U+'" alt="img"></p><p>所以，为了防止前面提到的 Cache 伪共享问题，我们可以使用上面介绍的宏定义，将 b 的地址设置为 Cache Line 对齐地址，如下：</p><p><img src="'+B+'" alt="img"></p><p>这样 a 和 b 变量就不会在同一个 Cache Line 中了，如下图：</p><p><img src="'+A+'" alt="img"></p><p>所以，避免 Cache 伪共享实际上是用空间换时间的思想，浪费一部分 Cache 空间，从而换来性能的提升。</p><p>我们再来看一个应用层面的规避方案，有一个 Java 并发框架 Disruptor 使用「字节填充 + 继承」的方式，来避免伪共享的问题。</p><p>Disruptor 中有一个 RingBuffer 类会经常被多个线程使用，代码如下：</p><p><img src="'+b+'" alt="img"></p><p>你可能会觉得 RingBufferPad 类里 7 个 long 类型的名字很奇怪，但事实上，它们虽然看起来毫无作用，但却对性能的提升起到了至关重要的作用。</p><p>我们都知道，CPU Cache 从内存读取数据的单位是 CPU Cache Line，一般 64 位 CPU 的 CPU Cache Line 的大小是 64 个字节，一个 long 类型的数据是 8 个字节，所以 CPU 一下会加载 8 个 long 类型的数据。</p><p>根据 JVM 对象继承关系中父类成员和子类成员，内存地址是连续排列布局的，因此 RingBufferPad 中的 7 个 long 类型数据作为 Cache Line <strong>前置填充</strong>，而 RingBuffer 中的 7 个 long 类型数据则作为 Cache Line <strong>后置填充</strong>，这 14 个 long 变量没有任何实际用途，更不会对它们进行读写操作。</p><p><img src="'+x+'" alt="img"></p><p>另外，RingBufferFelds 里面定义的这些变量都是 <code>final</code> 修饰的，意味着第一次加载之后不会再修改， 又<strong>由于「前后」各填充了 7 个不会被读写的 long 类型变量，所以无论怎么加载 Cache Line，这整个 Cache Line 里都没有会发生更新操作的数据，于是只要数据被频繁地读取访问，就自然没有数据被换出 Cache 的可能，也因此不会产生伪共享的问题</strong>。</p><hr>',25),X={id:"cpu-如何选择线程的",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#cpu-如何选择线程的","aria-hidden":"true"},"#",-1),Z={href:"https://xiaolincoding.com/os/1_hardware/how_cpu_deal_task.html#cpu-%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E7%BA%BF%E7%A8%8B%E7%9A%84",target:"_blank",rel:"noopener noreferrer"},$=a('<p>了解完 CPU 读取数据的过程后，我们再来看看 CPU 是根据什么来选择当前要执行的线程。</p><p>在 Linux 内核中，进程和线程都是用 <code>task_struct</code> 结构体表示的，区别在于线程的 task_struct 结构体里部分资源是共享了进程已创建的资源，比如内存地址空间、代码段、文件描述符等，所以 Linux 中的线程也被称为轻量级进程，因为线程的 task_struct 相比进程的 task_struct 承载的 资源比较少，因此以「轻」得名。</p><p>一般来说，没有创建线程的进程，是只有单个执行流，它被称为是主线程。如果想让进程处理更多的事情，可以创建多个线程分别去处理，但不管怎么样，它们对应到内核里都是 <code>task_struct</code>。</p><p><img src="'+k+'" alt="img"></p><p>所以，Linux 内核里的调度器，调度的对象就是 <code>task_struct</code>，接下来我们就把这个数据结构统称为<strong>任务</strong>。</p><p>在 Linux 系统中，根据任务的优先级以及响应要求，主要分为两种，其中优先级的数值越小，优先级越高：</p><ul><li>实时任务，对系统的响应时间要求很高，也就是要尽可能快的执行实时任务，优先级在 <code>0~99</code> 范围内的就算实时任务；</li><li>普通任务，响应时间没有很高的要求，优先级在 <code>100~139</code> 范围内都是普通任务级别；</li></ul>',7),ee={id:"调度类",tabindex:"-1"},te=e("a",{class:"header-anchor",href:"#调度类","aria-hidden":"true"},"#",-1),se={href:"https://xiaolincoding.com/os/1_hardware/how_cpu_deal_task.html#%E8%B0%83%E5%BA%A6%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"},ne=a('<p>由于任务有优先级之分，Linux 系统为了保障高优先级的任务能够尽可能早的被执行，于是分为了这几种调度类，如下图：</p><p><img src="'+w+'" alt="img"></p><p>Deadline 和 Realtime 这两个调度类，都是应用于实时任务的，这两个调度类的调度策略合起来共有这三种，它们的作用如下：</p><ul><li><em>SCHED_DEADLINE</em>：是按照 deadline 进行调度的，距离当前时间点最近的 deadline 的任务会被优先调度；</li><li><em>SCHED_FIFO</em>：对于相同优先级的任务，按先来先服务的原则，但是优先级更高的任务，可以抢占低优先级的任务，也就是优先级高的可以「插队」；</li><li><em>SCHED_RR</em>：对于相同优先级的任务，轮流着运行，每个任务都有一定的时间片，当用完时间片的任务会被放到队列尾部，以保证相同优先级任务的公平性，但是高优先级的任务依然可以抢占低优先级的任务；</li></ul><p>而 Fair 调度类是应用于普通任务，都是由 CFS 调度器管理的，分为两种调度策略：</p><ul><li><em>SCHED_NORMAL</em>：普通任务使用的调度策略；</li><li><em>SCHED_BATCH</em>：后台任务的调度策略，不和终端进行交互，因此在不影响其他需要交互的任务，可以适当降低它的优先级。</li></ul>',6),ae={id:"完全公平调度",tabindex:"-1"},ie=e("a",{class:"header-anchor",href:"#完全公平调度","aria-hidden":"true"},"#",-1),ce={href:"https://xiaolincoding.com/os/1_hardware/how_cpu_deal_task.html#%E5%AE%8C%E5%85%A8%E5%85%AC%E5%B9%B3%E8%B0%83%E5%BA%A6",target:"_blank",rel:"noopener noreferrer"},oe=a('<p>我们平日里遇到的基本都是普通任务，对于普通任务来说，公平性最重要，在 Linux 里面，实现了一个基于 CFS 的调度算法，也就是<strong>完全公平调度（*Completely Fair Scheduling*）</strong>。</p><p>这个算法的理念是想让分配给每个任务的 CPU 时间是一样，于是它为每个任务安排一个虚拟运行时间 vruntime，如果一个任务在运行，其运行的越久，该任务的 vruntime 自然就会越大，而没有被运行的任务，vruntime 是不会变化的。</p><p>那么，<strong>在 CFS 算法调度的时候，会优先选择 vruntime 少的任务</strong>，以保证每个任务的公平性。</p><p>这就好比，让你把一桶的奶茶平均分到 10 杯奶茶杯里，你看着哪杯奶茶少，就多倒一些；哪个多了，就先不倒，这样经过多轮操作，虽然不能保证每杯奶茶完全一样多，但至少是公平的。</p><p>当然，上面提到的例子没有考虑到优先级的问题，虽然是普通任务，但是普通任务之间还是有优先级区分的，所以在计算虚拟运行时间 vruntime 还要考虑普通任务的<strong>权重值</strong>，注意权重值并不是优先级的值，内核中会有一个 nice 级别与权重值的转换表，nice 级别越低的权重值就越大，至于 nice 值是什么，我们后面会提到。 于是就有了以下这个公式：</p><p><img src="'+F+'" alt="img"></p><p>你可以不用管 NICE_0_LOAD 是什么，你就认为它是一个常量，那么在「同样的实际运行时间」里，高权重任务的 vruntime 比低权重任务的 vruntime <strong>少</strong>，你可能会奇怪为什么是少的？你还记得 CFS 调度吗，它是会优先选择 vruntime 少的任务进行调度，所以高权重的任务就会被优先调度了，于是高权重的获得的实际运行时间自然就多了。</p>',7),re={id:"cpu-运行队列",tabindex:"-1"},pe=e("a",{class:"header-anchor",href:"#cpu-运行队列","aria-hidden":"true"},"#",-1),he={href:"https://xiaolincoding.com/os/1_hardware/how_cpu_deal_task.html#cpu-%E8%BF%90%E8%A1%8C%E9%98%9F%E5%88%97",target:"_blank",rel:"noopener noreferrer"},_e=a('<p>一个系统通常都会运行着很多任务，多任务的数量基本都是远超 CPU 核心数量，因此这时候就需要<strong>排队</strong>。</p><p>事实上，每个 CPU 都有自己的<strong>运行队列（*Run Queue, rq*）</strong>，用于描述在此 CPU 上所运行的所有进程，其队列包含三个运行队列，Deadline 运行队列 dl_rq、实时任务运行队列 rt_rq 和 CFS 运行队列 cfs_rq，其中 cfs_rq 是用红黑树来描述的，按 vruntime 大小来排序的，最左侧的叶子节点，就是下次会被调度的任务。</p><p>PS：下图中的 csf_rq 应该是 <code>cfs_rq</code>，由于找不到原图了，我偷个懒，我就不重新画了，嘻嘻。</p><p><img src="'+D+'" alt="img"></p><p>这几种调度类是有优先级的，优先级如下：Deadline &gt; Realtime &gt; Fair，这意味着 Linux 选择下一个任务执行的时候，会按照此优先级顺序进行选择，也就是说先从 <code>dl_rq</code> 里选择任务，然后从 <code>rt_rq</code> 里选择任务，最后从 <code>cfs_rq</code> 里选择任务。因此，<strong>实时任务总是会比普通任务优先被执行</strong>。</p>',5),de={id:"调整优先级",tabindex:"-1"},le=e("a",{class:"header-anchor",href:"#调整优先级","aria-hidden":"true"},"#",-1),Ce={href:"https://xiaolincoding.com/os/1_hardware/how_cpu_deal_task.html#%E8%B0%83%E6%95%B4%E4%BC%98%E5%85%88%E7%BA%A7",target:"_blank",rel:"noopener noreferrer"},ge=a('<p>如果我们启动任务的时候，没有特意去指定优先级的话，默认情况下都是普通任务，普通任务的调度类是 Fair，由 CFS 调度器来进行管理。CFS 调度器的目的是实现任务运行的公平性，也就是保障每个任务的运行的时间是差不多的。</p><p>如果你想让某个普通任务有更多的执行时间，可以调整任务的 <code>nice</code> 值，从而让优先级高一些的任务执行更多时间。nice 的值能设置的范围是 <code>-20～19</code>， 值越低，表明优先级越高，因此 -20 是最高优先级，19 则是最低优先级，默认优先级是 0。</p><p>是不是觉得 nice 值的范围很诡异？事实上，nice 值并不是表示优先级，而是表示优先级的修正数值，它与优先级（priority）的关系是这样的：priority(new) = priority(old) + nice。内核中，priority 的范围是 0~139，值越低，优先级越高，其中前面的 0~99 范围是提供给实时任务使用的，而 nice 值是映射到 100~139，这个范围是提供给普通任务用的，因此 nice 值调整的是普通任务的优先级。</p><p><img src="'+S+'" alt="img"></p><p>在前面我们提到了，权重值与 nice 值的关系的，nice 值越低，权重值就越大，计算出来的 vruntime 就会越少，由于 CFS 算法调度的时候，就会优先选择 vruntime 少的任务进行执行，所以 nice 值越低，任务的优先级就越高。</p><p>我们可以在启动任务的时候，可以指定 nice 的值，比如将 mysqld 以 -3 优先级：</p><p><img src="'+v+'" alt="img"></p><p>如果想修改已经运行中的任务的优先级，则可以使用 <code>renice</code> 来调整 nice 值：</p><p><img src="'+q+'" alt="img"></p><p>nice 调整的是普通任务的优先级，所以不管怎么缩小 nice 值，任务永远都是普通任务，如果某些任务要求实时性比较高，那么你可以考虑改变任务的优先级以及调度策略，使得它变成实时任务，比如：</p><p><img src="'+R+'" alt="img"></p><hr>',12),me={id:"总结",tabindex:"-1"},ue=e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#",-1),fe={href:"https://xiaolincoding.com/os/1_hardware/how_cpu_deal_task.html#%E6%80%BB%E7%BB%93",target:"_blank",rel:"noopener noreferrer"},Pe=e("p",null,"理解 CPU 是如何读写数据的前提，是要理解 CPU 的架构，CPU 内部的多个 Cache + 外部的内存和磁盘都就构成了金字塔的存储器结构，在这个金字塔中，越往下，存储器的容量就越大，但访问速度就会小。",-1),Le=e("p",null,"CPU 读写数据的时候，并不是按一个一个字节为单位来进行读写，而是以 CPU Cache Line 大小为单位，CPU Cache Line 大小一般是 64 个字节，也就意味着 CPU 读写数据的时候，每一次都是以 64 字节大小为一块进行操作。",-1),Ee=e("p",null,"因此，如果我们操作的数据是数组，那么访问数组元素的时候，按内存分布的地址顺序进行访问，这样能充分利用到 Cache，程序的性能得到提升。但如果操作的数据不是数组，而是普通的变量，并在多核 CPU 的情况下，我们还需要避免 Cache Line 伪共享的问题。",-1),Ue=e("p",null,"所谓的 Cache Line 伪共享问题就是，多个线程同时读写同一个 Cache Line 的不同变量时，而导致 CPU Cache 失效的现象。那么对于多个线程共享的热点数据，即经常会修改的数据，应该避免这些数据刚好在同一个 Cache Line 中，避免的方式一般有 Cache Line 大小字节对齐，以及字节填充等方法。",-1),Be=e("p",null,"系统中需要运行的多线程数一般都会大于 CPU 核心，这样就会导致线程排队等待 CPU，这可能会产生一定的延时，如果我们的任务对延时容忍度很低，则可以通过一些人为手段干预 Linux 的默认调度策略和优先级。",-1);function Ae(be,xe){const s=c("ExternalLinkIcon");return o(),r("div",null,[N,e("h2",y,[H,t(),e("a",M,[t("#"),n(s)]),t("CPU 如何读写数据的？")]),V,e("h3",O,[T,t(),e("a",J,[t("#"),n(s)]),t("分析伪共享的问题")]),e("p",null,[t("现在我们结合保证多核缓存一致的 MESI 协议，来说明这一整个的过程，如果你还不知道 MESI 协议，你可以看我这篇文章「"),e("a",j,[t("10 张图打开 CPU 缓存一致性的大门 (opens new window)"),n(s)]),t("」。")]),Q,e("h3",z,[G,t(),e("a",K,[t("#"),n(s)]),t("避免伪共享的方法")]),W,e("h2",X,[Y,t(),e("a",Z,[t("#"),n(s)]),t("CPU 如何选择线程的？")]),$,e("h3",ee,[te,t(),e("a",se,[t("#"),n(s)]),t("调度类")]),ne,e("h3",ae,[ie,t(),e("a",ce,[t("#"),n(s)]),t("完全公平调度")]),oe,e("h3",re,[pe,t(),e("a",he,[t("#"),n(s)]),t("CPU 运行队列")]),_e,e("h3",de,[le,t(),e("a",Ce,[t("#"),n(s)]),t("调整优先级")]),ge,e("h2",me,[ue,t(),e("a",fe,[t("#"),n(s)]),t("总结")]),Pe,Le,Ee,Ue,Be])}const Fe=i(I,[["render",Ae],["__file","5.how-cup-deal-task.html.vue"]]);export{Fe as default};
