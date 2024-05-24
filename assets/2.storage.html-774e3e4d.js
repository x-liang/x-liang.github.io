import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as i,a as e,b as s,d as o,e as t}from"./app-9aa256ea.js";const d="/assets/存储器提纲-93106a53.png",h="/assets/学习与存储层次关系-66c9208e.png",l="/assets/存储区分级-acf71572.png",p="/assets/CPU-Cache-d0d1ad7d.png",_="/assets/存储器的层次关系图-f3302960.png",g="/assets/缓存体系1-6af6709e.png",C="/assets/存储器成本的对比-30894e6f.png",u={},m=t('<h1 id="磁盘比内存慢几万倍" tabindex="-1"><a class="header-anchor" href="#磁盘比内存慢几万倍" aria-hidden="true">#</a> 磁盘比内存慢几万倍？</h1><p>大家如果想自己组装电脑的话，肯定需要购买一个 CPU，但是存储器方面的设备，分类比较多，那我们肯定不能只买一种存储器，比如你除了要买内存，还要买硬盘，而针对硬盘我们还可以选择是固态硬盘还是机械硬盘。</p><p>相信大家都知道内存和硬盘都属于计算机的存储设备，断电后内存的数据是会丢失的，而硬盘则不会，因为硬盘是持久化存储设备，同时也是一个 I/O 设备。</p><p>但其实 CPU 内部也有存储数据的组件，这个应该比较少人注意到，比如<strong>寄存器、CPU L1/L2/L3 Cache</strong> 也都是属于存储设备，只不过它们能存储的数据非常小，但是它们因为靠近 CPU 核心，所以访问速度都非常快，快过硬盘好几个数量级别。</p><p>问题来了，<strong>那机械硬盘、固态硬盘、内存这三个存储器，到底和 CPU L1 Cache 相比速度差多少倍呢？</strong></p><p>在回答这个问题之前，我们先来看看「<strong>存储器的层次结构</strong>」，好让我们对存储器设备有一个整体的认识。</p><p><img src="'+d+'" alt="img"></p><hr>',8),P={id:"存储器的层次结构",tabindex:"-1"},U=e("a",{class:"header-anchor",href:"#存储器的层次结构","aria-hidden":"true"},"#",-1),L={href:"https://xiaolincoding.com/os/1_hardware/storage.html#%E5%AD%98%E5%82%A8%E5%99%A8%E7%9A%84%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"},E=t('<p>我们想象中一个场景，大学期末准备考试了，你前去图书馆临时抱佛脚。那么，在看书的时候，我们的大脑会思考问题，也会记忆知识点，另外我们通常也会把常用的书放在自己的桌子上，当我们要找一本不常用的书，则会去图书馆的书架找。</p><p>就是这么一个小小的场景，已经把计算机的存储结构基本都涵盖了。</p><p>我们可以把 CPU 比喻成我们的大脑，大脑正在思考的东西，就好比 CPU 中的<strong>寄存器</strong>，处理速度是最快的，但是能存储的数据也是最少的，毕竟我们也不能一下同时思考太多的事情，除非你练过。</p><p>我们大脑中的记忆，就好比 <strong>CPU Cache</strong>，中文称为 CPU 高速缓存，处理速度相比寄存器慢了一点，但是能存储的数据也稍微多了一些。</p><p>CPU Cache 通常会分为 <strong>L1、L2、L3 三层</strong>，其中 L1 Cache 通常分成「数据缓存」和「指令缓存」，L1 是距离 CPU 最近的，因此它比 L2、L3 的读写速度都快、存储空间都小。我们大脑中短期记忆，就好比 L1 Cache，而长期记忆就好比 L2/L3 Cache。</p><p>寄存器和 CPU Cache 都是在 CPU 内部，跟 CPU 挨着很近，因此它们的读写速度都相当的快，但是能存储的数据很少，毕竟 CPU 就这么丁点大。</p><p>知道 CPU 内部的存储器的层次分布，我们放眼看看 CPU 外部的存储器。</p><p>当我们大脑记忆中没有资料的时候，可以从书桌或书架上拿书来阅读，那我们桌子上的书，就好比<strong>内存</strong>，我们虽然可以一伸手就可以拿到，但读写速度肯定远慢于寄存器，那图书馆书架上的书，就好比<strong>硬盘</strong>，能存储的数据非常大，但是读写速度相比内存差好几个数量级，更别说跟寄存器的差距了。</p><p><img src="'+h+'" alt="img"></p><p>我们从图书馆书架取书，把书放到桌子上，再阅读书，我们大脑就会记忆知识点，然后再经过大脑思考，这一系列过程相当于，数据从硬盘加载到内存，再从内存加载到 CPU 的寄存器和 Cache 中，然后再通过 CPU 进行处理和计算。</p><p><strong>对于存储器，它的速度越快、能耗会越高、而且材料的成本也是越贵的，以至于速度快的存储器的容量都比较小。</strong></p><p>CPU 里的寄存器和 Cache，是整个计算机存储器中价格最贵的，虽然存储空间很小，但是读写速度是极快的，而相对比较便宜的内存和硬盘，速度肯定比不上 CPU 内部的存储器，但是能弥补存储空间的不足。</p><p>存储器通常可以分为这么几个级别：</p><p><img src="'+l+'" alt="img"></p><ul><li>寄存器；</li><li>CPU Cache； <ol><li>L1-Cache；</li><li>L2-Cache；</li><li>L3-Cahce；</li></ol></li><li>内存；</li><li>SSD/HDD 硬盘</li></ul>',15),b={id:"寄存器",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#寄存器","aria-hidden":"true"},"#",-1),A={href:"https://xiaolincoding.com/os/1_hardware/storage.html#%E5%AF%84%E5%AD%98%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"最靠近 CPU 的控制单元和逻辑计算单元的存储器，就是寄存器了，它使用的材料速度也是最快的，因此价格也是最贵的，那么数量不能很多。",-1),x=e("p",null,"寄存器的数量通常在几十到几百之间，每个寄存器可以用来存储一定的字节（byte）的数据。比如：",-1),B=e("ul",null,[e("li",null,[s("32 位 CPU 中大多数寄存器可以存储 "),e("code",null,"4"),s(" 个字节；")]),e("li",null,[s("64 位 CPU 中大多数寄存器可以存储 "),e("code",null,"8"),s(" 个字节。")])],-1),D=e("p",null,"寄存器的访问速度非常快，一般要求在半个 CPU 时钟周期内完成读写，CPU 时钟周期跟 CPU 主频息息相关，比如 2 GHz 主频的 CPU，那么它的时钟周期就是 1/2G，也就是 0.5ns（纳秒）。",-1),S=e("p",null,"CPU 处理一条指令的时候，除了读写寄存器，还需要解码指令、控制指令执行和计算。如果寄存器的速度太慢，则会拉长指令的处理周期，从而给用户的感觉，就是电脑「很慢」。",-1),k={id:"cpu-cache",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#cpu-cache","aria-hidden":"true"},"#",-1),R={href:"https://xiaolincoding.com/os/1_hardware/storage.html#cpu-cache",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[s("CPU Cache 用的是一种叫 "),e("strong",null,"SRAM（*Static Random-Access* Memory，静态随机存储器）"),s(" 的芯片。")],-1),w=e("p",null,"SRAM 之所以叫「静态」存储器，是因为只要有电，数据就可以保持存在，而一旦断电，数据就会丢失了。",-1),K=e("p",null,"在 SRAM 里面，一个 bit 的数据，通常需要 6 个晶体管，所以 SRAM 的存储密度不高，同样的物理空间下，能存储的数据是有限的，不过也因为 SRAM 的电路简单，所以访问速度非常快。",-1),H=e("p",null,"CPU 的高速缓存，通常可以分为 L1、L2、L3 这样的三层高速缓存，也称为一级缓存、二级缓存、三级缓存。",-1),z=e("p",null,[e("img",{src:p,alt:"img"})],-1),F={id:"l1-高速缓存",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#l1-高速缓存","aria-hidden":"true"},"#",-1),I={href:"https://xiaolincoding.com/os/1_hardware/storage.html#l1-%E9%AB%98%E9%80%9F%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},N=t(`<p>L1 高速缓存的访问速度几乎和寄存器一样快，通常只需要 <code>2~4</code> 个时钟周期，而大小在几十 KB 到几百 KB 不等。</p><p>每个 CPU 核心都有一块属于自己的 L1 高速缓存，指令和数据在 L1 是分开存放的，所以 L1 高速缓存通常分成<strong>指令缓存</strong>和<strong>数据缓存</strong>。</p><p>在 Linux 系统，我们可以通过这条命令，查看 CPU 里的 L1 Cache 「数据」缓存的容量大小：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /sys/devices/system/cpu/cpu0/cache/index0/size
32K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而查看 L1 Cache 「指令」缓存的容量大小，则是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /sys/devices/system/cpu/cpu0/cache/index1/size
32K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),V={id:"l2-高速缓存",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#l2-高速缓存","aria-hidden":"true"},"#",-1),T={href:"https://xiaolincoding.com/os/1_hardware/storage.html#l2-%E9%AB%98%E9%80%9F%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},O=t(`<p>L2 高速缓存同样每个 CPU 核心都有，但是 L2 高速缓存位置比 L1 高速缓存距离 CPU 核心 更远，它大小比 L1 高速缓存更大，CPU 型号不同大小也就不同，通常大小在几百 KB 到几 MB 不等，访问速度则更慢，速度在 <code>10~20</code> 个时钟周期。</p><p>在 Linux 系统，我们可以通过这条命令，查看 CPU 里的 L2 Cache 的容量大小：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /sys/devices/system/cpu/cpu0/cache/index2/size
256K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),W={id:"l3-高速缓存",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#l3-高速缓存","aria-hidden":"true"},"#",-1),q={href:"https://xiaolincoding.com/os/1_hardware/storage.html#l3-%E9%AB%98%E9%80%9F%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},J=t(`<p>L3 高速缓存通常是多个 CPU 核心共用的，位置比 L2 高速缓存距离 CPU 核心 更远，大小也会更大些，通常大小在几 MB 到几十 MB 不等，具体值根据 CPU 型号而定。</p><p>访问速度相对也比较慢一些，访问速度在 <code>20~60</code>个时钟周期。</p><p>在 Linux 系统，我们可以通过这条命令，查看 CPU 里的 L3 Cache 的容量大小：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /sys/devices/system/cpu/cpu0/cache/index3/size 
3072K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Q={id:"内存",tabindex:"-1"},X=e("a",{class:"header-anchor",href:"#内存","aria-hidden":"true"},"#",-1),Y={href:"https://xiaolincoding.com/os/1_hardware/storage.html#%E5%86%85%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},Z=e("p",null,[s("内存用的芯片和 CPU Cache 有所不同，它使用的是一种叫作 "),e("strong",null,"DRAM （*Dynamic Random Access Memory*，动态随机存取存储器）"),s(" 的芯片。")],-1),ee=e("p",null,"相比 SRAM，DRAM 的密度更高，功耗更低，有更大的容量，而且造价比 SRAM 芯片便宜很多。",-1),se=e("p",null,"DRAM 存储一个 bit 数据，只需要一个晶体管和一个电容就能存储，但是因为数据会被存储在电容里，电容会不断漏电，所以需要「定时刷新」电容，才能保证数据不会被丢失，这就是 DRAM 之所以被称为「动态」存储器的原因，只有不断刷新，数据才能被存储起来。",-1),ne=e("p",null,[s("DRAM 的数据访问电路和刷新电路都比 SRAM 更复杂，所以访问的速度会更慢，内存速度大概在 "),e("code",null,"200~300"),s(" 个 时钟周期之间。")],-1),oe={id:"ssd-hdd-硬盘",tabindex:"-1"},te=e("a",{class:"header-anchor",href:"#ssd-hdd-硬盘","aria-hidden":"true"},"#",-1),ae={href:"https://xiaolincoding.com/os/1_hardware/storage.html#ssd-hdd-%E7%A1%AC%E7%9B%98",target:"_blank",rel:"noopener noreferrer"},re=e("p",null,[s("SSD（"),e("em",null,"Solid-state disk"),s("） 就是我们常说的固体硬盘，结构和内存类似，但是它相比内存的优点是断电后数据还是存在的，而内存、寄存器、高速缓存断电后数据都会丢失。内存的读写速度比 SSD 大概快 "),e("code",null,"10~1000"),s(" 倍。")],-1),ce=e("p",null,[s("当然，还有一款传统的硬盘，也就是机械硬盘（"),e("em",null,"Hard Disk Drive, HDD"),s("），它是通过物理读写的方式来访问数据的，因此它访问速度是非常慢的，它的速度比内存慢 "),e("code",null,"10W"),s(" 倍左右。")],-1),ie=e("p",null,"由于 SSD 的价格快接近机械硬盘了，因此机械硬盘已经逐渐被 SSD 替代了。",-1),de=e("hr",null,null,-1),he={id:"存储器的层次关系",tabindex:"-1"},le=e("a",{class:"header-anchor",href:"#存储器的层次关系","aria-hidden":"true"},"#",-1),pe={href:"https://xiaolincoding.com/os/1_hardware/storage.html#%E5%AD%98%E5%82%A8%E5%99%A8%E7%9A%84%E5%B1%82%E6%AC%A1%E5%85%B3%E7%B3%BB",target:"_blank",rel:"noopener noreferrer"},_e=t('<p>现代的一台计算机，都用上了 CPU Cahce、内存、到 SSD 或 HDD 硬盘这些存储器设备了。</p><p>其中，存储空间越大的存储器设备，其访问速度越慢，所需成本也相对越少。</p><p>CPU 并不会直接和每一种存储器设备直接打交道，而是每一种存储器设备只和它相邻的存储器设备打交道。</p><p>比如，CPU Cache 的数据是从内存加载过来的，写回数据的时候也只写回到内存，CPU Cache 不会直接把数据写到硬盘，也不会直接从硬盘加载数据，而是先加载到内存，再从内存加载到 CPU Cache 中。</p><p><img src="'+_+'" alt="img"></p><p>所以，<strong>每个存储器只和相邻的一层存储器设备打交道，并且存储设备为了追求更快的速度，所需的材料成本必然也是更高，也正因为成本太高，所以 CPU 内部的寄存器、L1\\L2\\L3 Cache 只好用较小的容量，相反内存、硬盘则可用更大的容量，这就我们今天所说的存储器层次结构</strong>。</p><p>另外，当 CPU 需要访问内存中某个数据的时候，如果寄存器有这个数据，CPU 就直接从寄存器取数据即可，如果寄存器没有这个数据，CPU 就会查询 L1 高速缓存，如果 L1 没有，则查询 L2 高速缓存，L2 还是没有的话就查询 L3 高速缓存，L3 依然没有的话，才去内存中取数据。</p><p><img src="'+g+'" alt="img"></p><p>所以，存储层次结构也形成了<strong>缓存</strong>的体系。</p><hr>',10),ge={id:"存储器之间的实际价格和性能差距",tabindex:"-1"},Ce=e("a",{class:"header-anchor",href:"#存储器之间的实际价格和性能差距","aria-hidden":"true"},"#",-1),ue={href:"https://xiaolincoding.com/os/1_hardware/storage.html#%E5%AD%98%E5%82%A8%E5%99%A8%E4%B9%8B%E9%97%B4%E7%9A%84%E5%AE%9E%E9%99%85%E4%BB%B7%E6%A0%BC%E5%92%8C%E6%80%A7%E8%83%BD%E5%B7%AE%E8%B7%9D",target:"_blank",rel:"noopener noreferrer"},me=t('<p>前面我们知道了，速度越快的存储器，造价成本往往也越高，那我们就以实际的数据来看看，不同层级的存储器之间的性能和价格差异。</p><p>下面这张表格是不同层级的存储器之间的成本对比图：</p><p><img src="'+C+'" alt="img"></p><p>你可以看到 L1 Cache 的访问延时是 1 纳秒，而内存已经是 100 纳秒了，相比 L1 Cache 速度慢了 <code>100</code> 倍。另外，机械硬盘的访问延时更是高达 10 毫秒，相比 L1 Cache 速度慢了 <code>10000000</code> 倍，差了好几个数量级别。</p><p>在价格上，每生成 MB 大小的 L1 Cache 相比内存贵了 <code>466</code> 倍，相比机械硬盘那更是贵了 <code>175000</code> 倍。</p><p>我在某东逛了下各个存储器设备的零售价，8G 内存 + 1T 机械硬盘 + 256G 固态硬盘的总价格，都不及一块 Intle i5-10400 的 CPU 的价格，这款 CPU 的高速缓存的总大小也就十多 MB。</p><hr>',7),Pe={id:"总结",tabindex:"-1"},Ue=e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#",-1),Le={href:"https://xiaolincoding.com/os/1_hardware/storage.html#%E6%80%BB%E7%BB%93",target:"_blank",rel:"noopener noreferrer"},Ee=t("<p>各种存储器之间的关系，可以用我们在图书馆学习这个场景来理解。</p><p>CPU 可以比喻成我们的大脑，我们当前正在思考和处理的知识的过程，就好比 CPU 中的<strong>寄存器</strong>处理数据的过程，速度极快，但是容量很小。而 CPU 中的 <strong>L1-L3 Cache</strong> 好比我们大脑中的短期记忆和长期记忆，需要小小花费点时间来调取数据并处理。</p><p>我们面前的桌子就相当于<strong>内存</strong>，能放下更多的书（数据），但是找起来和看起来就要花费一些时间，相比 CPU Cache 慢不少。而图书馆的书架相当于<strong>硬盘</strong>，能放下比内存更多的数据，但找起来就更费时间了，可以说是最慢的存储器设备了。</p><p>从 寄存器、CPU Cache，到内存、硬盘，这样一层层下来的存储器，访问速度越来越慢，存储容量越来越大，价格也越来越便宜，而且每个存储器只和相邻的一层存储器设备打交道，于是这样就形成了存储器的层次结构。</p><p>再来回答，开头的问题：那机械硬盘、固态硬盘、内存这三个存储器，到底和 <code>CPU L1 Cache</code> 相比速度差多少倍呢？</p><p>CPU L1 Cache 随机访问延时是 1 纳秒，内存则是 100 纳秒，所以 <strong>CPU L1 Cache 比内存快 <code>100</code> 倍左右</strong>。</p><p>SSD 随机访问延时是 150 微秒，所以 <strong>CPU L1 Cache 比 SSD 快 <code>150000</code> 倍左右</strong>。</p><p>最慢的机械硬盘随机访问延时已经高达 10 毫秒，我们来看看机械硬盘到底有多「龟速」：</p><ul><li><strong>SSD 比机械硬盘快 70 倍左右；</strong></li><li><strong>内存比机械硬盘快 100000 倍左右；</strong></li><li><strong>CPU L1 Cache 比机械硬盘快 10000000 倍左右；</strong></li></ul><p>我们把上述的时间比例差异放大后，就能非常直观感受到它们的性能差异了。如果 CPU 访问 L1 Cache 的缓存时间是 1 秒，那访问内存则需要大约 2 分钟，随机访问 SSD 里的数据则需要 1.7 天，访问机械硬盘那更久，长达近 4 个月。</p><p>可以发现，不同的存储器之间性能差距很大，构造存储器分级很有意义，分级的目的是要构造<strong>缓存</strong>体系。</p>",11);function be(fe,Ae){const n=r("ExternalLinkIcon");return c(),i("div",null,[m,e("h2",P,[U,s(),e("a",L,[s("#"),o(n)]),s("存储器的层次结构")]),E,e("h3",b,[f,s(),e("a",A,[s("#"),o(n)]),s("寄存器")]),v,x,B,D,S,e("h3",k,[M,s(),e("a",R,[s("#"),o(n)]),s("CPU Cache")]),y,w,K,H,z,e("h4",F,[G,s(),e("a",I,[s("#"),o(n)]),s("L1 高速缓存")]),N,e("h4",V,[$,s(),e("a",T,[s("#"),o(n)]),s("L2 高速缓存")]),O,e("h4",W,[j,s(),e("a",q,[s("#"),o(n)]),s("L3 高速缓存")]),J,e("h3",Q,[X,s(),e("a",Y,[s("#"),o(n)]),s("内存")]),Z,ee,se,ne,e("h3",oe,[te,s(),e("a",ae,[s("#"),o(n)]),s("SSD/HDD 硬盘")]),re,ce,ie,de,e("h2",he,[le,s(),e("a",pe,[s("#"),o(n)]),s("存储器的层次关系")]),_e,e("h2",ge,[Ce,s(),e("a",ue,[s("#"),o(n)]),s("存储器之间的实际价格和性能差距")]),me,e("h2",Pe,[Ue,s(),e("a",Le,[s("#"),o(n)]),s("总结")]),Ee])}const Be=a(u,[["render",be],["__file","2.storage.html.vue"]]);export{Be as default};
