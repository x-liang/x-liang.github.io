const l=JSON.parse('{"key":"v-ab7a5a8e","path":"/quality/operating-system/3.memory-manage/6.linux-mem.html","title":"深入理解 Linux 虚拟内存管理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"#1. 到底什么是虚拟内存地址","slug":"_1-到底什么是虚拟内存地址","link":"#_1-到底什么是虚拟内存地址","children":[]},{"level":2,"title":"#2. 为什么要使用虚拟地址访问内存","slug":"_2-为什么要使用虚拟地址访问内存","link":"#_2-为什么要使用虚拟地址访问内存","children":[]},{"level":2,"title":"#3. 进程虚拟内存空间","slug":"_3-进程虚拟内存空间","link":"#_3-进程虚拟内存空间","children":[]},{"level":2,"title":"#4. Linux 进程虚拟内存空间","slug":"_4-linux-进程虚拟内存空间","link":"#_4-linux-进程虚拟内存空间","children":[{"level":3,"title":"#4.1 32 位机器上进程虚拟内存空间分布","slug":"_4-1-32-位机器上进程虚拟内存空间分布","link":"#_4-1-32-位机器上进程虚拟内存空间分布","children":[]},{"level":3,"title":"#4.2 64 位机器上进程虚拟内存空间分布","slug":"_4-2-64-位机器上进程虚拟内存空间分布","link":"#_4-2-64-位机器上进程虚拟内存空间分布","children":[]}]},{"level":2,"title":"#5. 进程虚拟内存空间的管理","slug":"_5-进程虚拟内存空间的管理","link":"#_5-进程虚拟内存空间的管理","children":[{"level":3,"title":"#5.1 内核如何划分用户态和内核态虚拟内存空间","slug":"_5-1-内核如何划分用户态和内核态虚拟内存空间","link":"#_5-1-内核如何划分用户态和内核态虚拟内存空间","children":[]},{"level":3,"title":"#5.2 内核如何布局进程虚拟内存空间","slug":"_5-2-内核如何布局进程虚拟内存空间","link":"#_5-2-内核如何布局进程虚拟内存空间","children":[]},{"level":3,"title":"#5.3 内核如何管理虚拟内存区域","slug":"_5-3-内核如何管理虚拟内存区域","link":"#_5-3-内核如何管理虚拟内存区域","children":[]},{"level":3,"title":"#5.4 定义虚拟内存区域的访问权限和行为规范","slug":"_5-4-定义虚拟内存区域的访问权限和行为规范","link":"#_5-4-定义虚拟内存区域的访问权限和行为规范","children":[]},{"level":3,"title":"#5.5 关联内存映射中的映射关系","slug":"_5-5-关联内存映射中的映射关系","link":"#_5-5-关联内存映射中的映射关系","children":[]},{"level":3,"title":"#5.6 针对虚拟内存区域的相关操作","slug":"_5-6-针对虚拟内存区域的相关操作","link":"#_5-6-针对虚拟内存区域的相关操作","children":[]},{"level":3,"title":"#5.7 虚拟内存区域在内核中是如何被组织的","slug":"_5-7-虚拟内存区域在内核中是如何被组织的","link":"#_5-7-虚拟内存区域在内核中是如何被组织的","children":[]}]},{"level":2,"title":"#6. 程序编译后的二进制文件如何映射到虚拟内存空间中","slug":"_6-程序编译后的二进制文件如何映射到虚拟内存空间中","link":"#_6-程序编译后的二进制文件如何映射到虚拟内存空间中","children":[]},{"level":2,"title":"#7. 内核虚拟内存空间","slug":"_7-内核虚拟内存空间","link":"#_7-内核虚拟内存空间","children":[{"level":3,"title":"#7.1 32 位体系内核虚拟内存空间布局","slug":"_7-1-32-位体系内核虚拟内存空间布局","link":"#_7-1-32-位体系内核虚拟内存空间布局","children":[]},{"level":3,"title":"#7.1.1 直接映射区","slug":"_7-1-1-直接映射区","link":"#_7-1-1-直接映射区","children":[]},{"level":3,"title":"#7.1.2 ZONE_HIGHMEM 高端内存","slug":"_7-1-2-zone-highmem-高端内存","link":"#_7-1-2-zone-highmem-高端内存","children":[]},{"level":3,"title":"#7.1.3 vmalloc 动态映射区","slug":"_7-1-3-vmalloc-动态映射区","link":"#_7-1-3-vmalloc-动态映射区","children":[]},{"level":3,"title":"#7.1.4 永久映射区","slug":"_7-1-4-永久映射区","link":"#_7-1-4-永久映射区","children":[]},{"level":3,"title":"#8.1.5 固定映射区","slug":"_8-1-5-固定映射区","link":"#_8-1-5-固定映射区","children":[]},{"level":3,"title":"#7.1.6 临时映射区","slug":"_7-1-6-临时映射区","link":"#_7-1-6-临时映射区","children":[]},{"level":3,"title":"#7.1.7 32位体系结构下 Linux 虚拟内存空间整体布局","slug":"_7-1-7-32位体系结构下-linux-虚拟内存空间整体布局","link":"#_7-1-7-32位体系结构下-linux-虚拟内存空间整体布局","children":[]},{"level":3,"title":"#7.2 64 位体系内核虚拟内存空间布局","slug":"_7-2-64-位体系内核虚拟内存空间布局","link":"#_7-2-64-位体系内核虚拟内存空间布局","children":[]},{"level":3,"title":"#7.2.1 64位体系结构下 Linux 虚拟内存空间整体布局","slug":"_7-2-1-64位体系结构下-linux-虚拟内存空间整体布局","link":"#_7-2-1-64位体系结构下-linux-虚拟内存空间整体布局","children":[]}]},{"level":2,"title":"#8. 到底什么是物理内存地址","slug":"_8-到底什么是物理内存地址","link":"#_8-到底什么是物理内存地址","children":[{"level":3,"title":"#8.1 DRAM 芯片的访问","slug":"_8-1-dram-芯片的访问","link":"#_8-1-dram-芯片的访问","children":[]},{"level":3,"title":"#8.2 CPU 如何读写主存","slug":"_8-2-cpu-如何读写主存","link":"#_8-2-cpu-如何读写主存","children":[]},{"level":3,"title":"#8.3 CPU 从内存读取数据过程","slug":"_8-3-cpu-从内存读取数据过程","link":"#_8-3-cpu-从内存读取数据过程","children":[]},{"level":3,"title":"#8.4 如何根据物理内存地址从主存中读取数据","slug":"_8-4-如何根据物理内存地址从主存中读取数据","link":"#_8-4-如何根据物理内存地址从主存中读取数据","children":[]},{"level":3,"title":"#8.5 CPU 向内存写入数据过程","slug":"_8-5-cpu-向内存写入数据过程","link":"#_8-5-cpu-向内存写入数据过程","children":[]}]},{"level":2,"title":"#总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1696924078000,"updatedTime":1697101733000,"contributors":[{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":2}]},"readingTime":{"minutes":81.78,"words":24534},"filePathRelative":"quality/operating-system/3.memory-manage/6.linux-mem.md","localizedDate":"2023年10月10日","excerpt":"<h1> 深入理解 Linux 虚拟内存管理</h1>\\n<blockquote>\\n<p>作者：公众号@bin的技术小屋</p>\\n<p>来源：<a href=\\"https://mp.weixin.qq.com/s?__biz=MzUxODAzNDg4NQ==&amp;mid=2247522087&amp;idx=2&amp;sn=fe8f4cd34d68e0a10658dee88bd337df&amp;chksm=f98dd38dcefa5a9ba43a9d1ac96852532f53278915a6f6b9f5187b8c1c885c1e5848ebabbc86#rd\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">3.5 万字 + 60 张图 ｜一步一图带你深入理解 Linux 虚拟内存管理(opens new window)</a></p>\\n</blockquote>"}');export{l as data};
