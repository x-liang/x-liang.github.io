const e=JSON.parse('{"key":"v-6904d50e","path":"/quality/operating-system/3.memory-manage/1.vmem.html","title":"为什么要有虚拟内存？","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"虚拟内存","slug":"虚拟内存","link":"#虚拟内存","children":[]},{"level":2,"title":"内存分段","slug":"内存分段","link":"#内存分段","children":[]},{"level":2,"title":"内存分页","slug":"内存分页","link":"#内存分页","children":[{"level":3,"title":"多级页表","slug":"多级页表","link":"#多级页表","children":[]},{"level":3,"title":"TLB","slug":"tlb","link":"#tlb","children":[]}]},{"level":2,"title":"段页式内存管理","slug":"段页式内存管理","link":"#段页式内存管理","children":[]},{"level":2,"title":"Linux 内存布局","slug":"linux-内存布局","link":"#linux-内存布局","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1696922237000,"updatedTime":1696922237000,"contributors":[{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":24.02,"words":7205},"filePathRelative":"quality/operating-system/3.memory-manage/1.vmem.md","localizedDate":"2023年10月10日","excerpt":"<h1> 为什么要有虚拟内存？</h1>\\n<p>本篇跟大家说说<strong>内存管理</strong>，内存管理还是比较重要的一个环节，理解了它，至少对整个操作系统的工作会有一个初步的轮廓，这也难怪面试的时候常问内存管理。</p>\\n<p>干就完事，本文的提纲：</p>\\n<p></p>\\n<h2> 虚拟内存</h2>\\n<p>如果你是电子相关专业的，肯定在大学里捣鼓过单片机。</p>\\n<p>单片机是没有操作系统的，所以每次写完代码，都需要借助工具把程序烧录进去，这样程序才能跑起来。</p>\\n<p>另外，<strong>单片机的 CPU 是直接操作内存的「物理地址」</strong>。</p>\\n<p></p>"}');export{e as data};