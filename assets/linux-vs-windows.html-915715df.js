import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as _,a as n,b as o,d as e,e as t}from"./app-9aa256ea.js";const d="/assets/Kernel_Layout-e4a9f51d.png",a="/assets/systemcall-5f4c4a7f.png",c="/assets/Elf-b1ad45e5.png",h="/assets/OS-structure2-6eb07abb.png",u="/assets/windowNT-e15896f9.png",p="/assets/pe-5b5a0883.png",m={},x=n("h1",{id:"linux-内核-vs-windows-内核",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-内核-vs-windows-内核","aria-hidden":"true"},"#"),o(" Linux 内核 vs Windows 内核")],-1),g=n("p",null,"Windows 和 Linux 可以说是我们比较常见的两款操作系统的。",-1),w=n("p",null,"Windows 基本占领了电脑时代的市场，商业上取得了很大成就，但是它并不开源，所以要想接触源码得加入 Windows 的开发团队中。",-1),f=n("p",null,"对于服务器使用的操作系统基本上都是 Linux，而且内核源码也是开源的，任何人都可以下载，并增加自己的改动或功能，Linux 最大的魅力在于，全世界有非常多的技术大佬为它贡献代码。",-1),L=n("p",null,"这两个操作系统各有千秋，不分伯仲。",-1),E=n("p",null,[o("操作系统核心的东西就是内核，这次我们就来看看，"),n("strong",null,"Linux 内核和 Windows 内核有什么区别？")],-1),b=n("hr",null,null,-1),k={id:"内核",tabindex:"-1"},P=n("a",{class:"header-anchor",href:"#内核","aria-hidden":"true"},"#",-1),W={href:"https://xiaolincoding.com/os/2_os_structure/linux_vs_windows.html#%E5%86%85%E6%A0%B8",target:"_blank",rel:"noopener noreferrer"},v=t('<p>什么是内核呢？</p><p>计算机是由各种外部硬件设备组成的，比如内存、cpu、硬盘等，如果每个应用都要和这些硬件设备对接通信协议，那这样太累了，所以这个中间人就由内核来负责，<strong>让内核作为应用连接硬件设备的桥梁</strong>，应用程序只需关心与内核交互，不用关心硬件的细节。</p><p><img src="'+d+'" alt="内核"></p><p>内核有哪些能力呢？</p><p>现代操作系统，内核一般会提供 4 个基本能力：</p><ul><li>管理进程、线程，决定哪个进程、线程使用 CPU，也就是进程调度的能力；</li><li>管理内存，决定内存的分配和回收，也就是内存管理的能力；</li><li>管理硬件设备，为进程与硬件设备之间提供通信能力，也就是硬件通信能力；</li><li>提供系统调用，如果应用程序要运行更高权限运行的服务，那么就需要有系统调用，它是用户程序与操作系统之间的接口。</li></ul><p>内核是怎么工作的？</p><p>内核具有很高的权限，可以控制 cpu、内存、硬盘等硬件，而应用程序具有的权限很小，因此大多数操作系统，把内存分成了两个区域：</p><ul><li>内核空间，这个内存空间只有内核程序可以访问；</li><li>用户空间，这个内存空间专门给应用程序使用；</li></ul><p>用户空间的代码只能访问一个局部的内存空间，而内核空间的代码可以访问所有内存空间。因此，当程序使用用户空间时，我们常说该程序在<strong>用户态</strong>执行，而当程序使内核空间时，程序则在<strong>内核态</strong>执行。</p><p>应用程序如果需要进入内核空间，就需要通过系统调用，下面来看看系统调用的过程：</p><p><img src="'+a+'" alt="img"></p><p>内核程序执行在内核态，用户程序执行在用户态。当应用程序使用系统调用时，会产生一个中断。发生中断后， CPU 会中断当前在执行的用户程序，转而跳转到中断处理程序，也就是开始执行内核程序。内核处理完后，主动触发中断，把 CPU 执行权限交回给用户程序，回到用户态继续工作。</p><hr>',14),C={id:"linux-的设计",tabindex:"-1"},F=n("a",{class:"header-anchor",href:"#linux-的设计","aria-hidden":"true"},"#",-1),T={href:"https://xiaolincoding.com/os/2_os_structure/linux_vs_windows.html#linux-%E7%9A%84%E8%AE%BE%E8%AE%A1",target:"_blank",rel:"noopener noreferrer"},M=t("<p>Linux 的开山始祖是来自一位名叫 Linus Torvalds 的芬兰小伙子，他在 1991 年用 C 语言写出了第一版的 Linux 操作系统，那年他 22 岁。</p><p>完成第一版 Linux 后，Linus Torvalds 就在网络上发布了 Linux 内核的源代码，每个人都可以免费下载和使用。</p><p>Linux 内核设计的理念主要有这几个点：</p><ul><li><em>MultiTask</em>，多任务</li><li><em>SMP</em>，对称多处理</li><li><em>ELF</em>，可执行文件链接格式</li><li><em>Monolithic Kernel</em>，宏内核</li></ul>",4),U={id:"multitask",tabindex:"-1"},B=n("a",{class:"header-anchor",href:"#multitask","aria-hidden":"true"},"#",-1),N={href:"https://xiaolincoding.com/os/2_os_structure/linux_vs_windows.html#multitask",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,[o("MultiTask 的意思是"),n("strong",null,"多任务"),o("，代表着 Linux 是一个多任务的操作系统。")],-1),S=n("p",null,"多任务意味着可以有多个任务同时执行，这里的「同时」可以是并发或并行：",-1),K=n("ul",null,[n("li",null,"对于单核 CPU 时，可以让每个任务执行一小段时间，时间到就切换另外一个任务，从宏观角度看，一段时间内执行了多个任务，这被称为并发。"),n("li",null,"对于多核 CPU 时，多个任务可以同时被不同核心的 CPU 同时执行，这被称为并行。")],-1),V={id:"smp",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#smp","aria-hidden":"true"},"#",-1),I={href:"https://xiaolincoding.com/os/2_os_structure/linux_vs_windows.html#smp",target:"_blank",rel:"noopener noreferrer"},O=n("p",null,[o("SMP 的意思是"),n("strong",null,"对称多处理"),o("，代表着每个 CPU 的地位是相等的，对资源的使用权限也是相同的，多个 CPU 共享同一个内存，每个 CPU 都可以访问完整的内存和硬件资源。")],-1),j=n("p",null,"这个特点决定了 Linux 操作系统不会有某个 CPU 单独服务应用程序或内核程序，而是每个程序都可以被分配到任意一个 CPU 上被执行。",-1),q={id:"elf",tabindex:"-1"},z=n("a",{class:"header-anchor",href:"#elf","aria-hidden":"true"},"#",-1),D={href:"https://xiaolincoding.com/os/2_os_structure/linux_vs_windows.html#elf",target:"_blank",rel:"noopener noreferrer"},G=n("p",null,[o("ELF 的意思是"),n("strong",null,"可执行文件链接格式"),o("，它是 Linux 操作系统中可执行文件的存储格式，你可以从下图看到它的结构：")],-1),H=n("p",null,[n("img",{src:c,alt:"ELF 文件格式"})],-1),J=n("p",null,"ELF 把文件分成了一个个分段，每一个段都有自己的作用，具体每个段的作用这里我就不详细说明了，感兴趣的同学可以去看《程序员的自我修养——链接、装载和库》这本书。",-1),Q=n("p",null,"另外，ELF 文件有两种索引，Program header table 中记录了「运行时」所需的段，而 Section header table 记录了二进制文件中各个「段的首地址」。",-1),R=n("p",null,"那 ELF 文件怎么生成的呢？",-1),X=n("p",null,"我们编写的代码，首先通过「编译器」编译成汇编代码，接着通过「汇编器」变成目标代码，也就是目标文件，最后通过「链接器」把多个目标文件以及调用的各种函数库链接起来，形成一个可执行文件，也就是 ELF 文件。",-1),Y=n("p",null,"那 ELF 文件是怎么被执行的呢？",-1),Z=n("p",null,"执行 ELF 文件的时候，会通过「装载器」把 ELF 文件装载到内存里，CPU 读取内存中的指令和数据，于是程序就被执行起来了。",-1),$={id:"monolithic-kernel",tabindex:"-1"},nn=n("a",{class:"header-anchor",href:"#monolithic-kernel","aria-hidden":"true"},"#",-1),on={href:"https://xiaolincoding.com/os/2_os_structure/linux_vs_windows.html#monolithic-kernel",target:"_blank",rel:"noopener noreferrer"},sn=t('<p>Monolithic Kernel 的意思是<strong>宏内核</strong>，Linux 内核架构就是宏内核，意味着 Linux 的内核是一个完整的可执行程序，且拥有最高的权限。</p><p>宏内核的特征是系统内核的所有模块，比如进程调度、内存管理、文件系统、设备驱动等，都运行在内核态。</p><p>不过，Linux 也实现了动态加载内核模块的功能，例如大部分设备驱动是以可加载模块的形式存在的，与内核其他模块解藕，让驱动开发和驱动加载更为方便、灵活。</p><p><img src="'+h+'" alt="分别为宏内核、微内核、混合内核的操作系统结构"></p><p>与宏内核相反的是<strong>微内核</strong>，微内核架构的内核只保留最基本的能力，比如进程调度、虚拟机内存、中断等，把一些应用放到了用户空间，比如驱动程序、文件系统等。这样服务与服务之间是隔离的，单个服务出现故障或者完全攻击，也不会导致整个操作系统挂掉，提高了操作系统的稳定性和可靠性。</p><p>微内核内核功能少，可移植性高，相比宏内核有一点不好的地方在于，由于驱动程序不在内核中，而且驱动程序一般会频繁调用底层能力的，于是驱动和硬件设备交互就需要频繁切换到内核态，这样会带来性能损耗。华为的鸿蒙操作系统的内核架构就是微内核。</p><p>还有一种内核叫<strong>混合类型内核</strong>，它的架构有点像微内核，内核里面会有一个最小版本的内核，然后其他模块会在这个基础上搭建，然后实现的时候会跟宏内核类似，也就是把整个内核做成一个完整的程序，大部分服务都在内核中，这就像是宏内核的方式包裹着一个微内核。</p><hr>',8),en={id:"windows-设计",tabindex:"-1"},tn=n("a",{class:"header-anchor",href:"#windows-设计","aria-hidden":"true"},"#",-1),ln={href:"https://xiaolincoding.com/os/2_os_structure/linux_vs_windows.html#windows-%E8%AE%BE%E8%AE%A1",target:"_blank",rel:"noopener noreferrer"},rn=t('<p>当今 Windows 7、Windows 10 使用的内核叫 Windows NT，NT 全称叫 New Technology。</p><p>下图是 Windows NT 的结构图片：</p><p><img src="'+u+'" alt="Windows NT 的结构"></p><p>Windows 和 Linux 一样，同样支持 MultiTask 和 SMP，但不同的是，<strong>Window 的内核设计是混合型内核</strong>，在上图你可以看到内核中有一个 <em>MicroKernel</em> 模块，这个就是最小版本的内核，而整个内核实现是一个完整的程序，含有非常多模块。</p><p>Windows 的可执行文件的格式与 Linux 也不同，所以这两个系统的可执行文件是不可以在对方上运行的。</p><p>Windows 的可执行文件格式叫 PE，称为<strong>可移植执行文件</strong>，扩展名通常是<code>.exe</code>、<code>.dll</code>、<code>.sys</code>等。</p><p>PE 的结构你可以从下图中看到，它与 ELF 结构有一点相似。</p><p><img src="'+p+'" alt="PE 文件结构"></p><hr>',9),_n={id:"总结",tabindex:"-1"},dn=n("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#",-1),an={href:"https://xiaolincoding.com/os/2_os_structure/linux_vs_windows.html#%E6%80%BB%E7%BB%93",target:"_blank",rel:"noopener noreferrer"},cn=n("p",null,"对于内核的架构一般有这三种类型：",-1),hn=n("ul",null,[n("li",null,"宏内核，包含多个模块，整个内核像一个完整的程序；"),n("li",null,"微内核，有一个最小版本的内核，一些模块和服务则由用户态管理；"),n("li",null,"混合内核，是宏内核和微内核的结合体，内核中抽象出了微内核的概念，也就是内核中会有一个小型的内核，其他模块就在这个基础上搭建，整个内核是个完整的程序；")],-1),un=n("p",null,"Linux 的内核设计是采用了宏内核，Window 的内核设计则是采用了混合内核。",-1),pn=n("p",null,"这两个操作系统的可执行文件格式也不一样， Linux 可执行文件格式叫作 ELF，Windows 可执行文件格式叫作 PE。",-1);function mn(xn,gn){const s=l("ExternalLinkIcon");return r(),_("div",null,[x,g,w,f,L,E,b,n("h2",k,[P,o(),n("a",W,[o("#"),e(s)]),o("内核")]),v,n("h2",C,[F,o(),n("a",T,[o("#"),e(s)]),o("Linux 的设计")]),M,n("h4",U,[B,o(),n("a",N,[o("#"),e(s)]),o("MultiTask")]),A,S,K,n("h3",V,[y,o(),n("a",I,[o("#"),e(s)]),o("SMP")]),O,j,n("h3",q,[z,o(),n("a",D,[o("#"),e(s)]),o("ELF")]),G,H,J,Q,R,X,Y,Z,n("h3",$,[nn,o(),n("a",on,[o("#"),e(s)]),o("Monolithic Kernel")]),sn,n("h2",en,[tn,o(),n("a",ln,[o("#"),e(s)]),o("Windows 设计")]),rn,n("h2",_n,[dn,o(),n("a",an,[o("#"),e(s)]),o("总结")]),cn,hn,un,pn])}const Ln=i(m,[["render",mn],["__file","linux-vs-windows.html.vue"]]);export{Ln as default};
