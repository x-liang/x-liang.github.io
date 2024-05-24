import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as p,c as e,e as t}from"./app-9aa256ea.js";const c="/assets/2-44bab271.jpg",s="/assets/3-57638192.jpg",r="/assets/4-23c7c082.jpg",d="/assets/5-400b6223.jpg",n="/assets/6-7b0b063a.jpg",l="/assets/7-8fe0bfc4.jpg",i="/assets/8-53593029.jpg",g="/assets/TCP三次握手.drawio-12cfa129.png",a="/assets/10-6249377a.jpg",P="/assets/11-4d0097d4.jpg",C="/assets/12-2189bdc1.jpg",u="/assets/13-51bab366.jpg",b="/assets/14-80b99554.jpg",A="/assets/15-b09a0942.jpg",h="/assets/16-0870a740.jpg",T="/assets/17-42d8b997.jpg",M="/assets/18-ef1e5416.jpg",I="/assets/19-3710c582.jpg",m="/assets/20-9ae68d17.jpg",k="/assets/21-08d89f42.jpg",q="/assets/数据包.drawio-51c125dd.png",_="/assets/23-31ed4c36.jpg",S="/assets/24-0e56a2b3.jpg",N="/assets/25-b6cd05dd.jpg",D={},w=t('<h1 id="键入网址到网页显示-期间发生了什么" tabindex="-1"><a class="header-anchor" href="#键入网址到网页显示-期间发生了什么" aria-hidden="true">#</a> 键入网址到网页显示，期间发生了什么？</h1><p>接下来以下图较简单的网络拓扑模型作为例子，探究探究其间发生了什么？</p><p><img src="'+c+'" alt="简单的网络模型"></p><h2 id="一、孤单小弟-——-http" tabindex="-1"><a class="header-anchor" href="#一、孤单小弟-——-http" aria-hidden="true">#</a> 一、孤单小弟 —— HTTP</h2><blockquote><p>浏览器做的第一步工作是解析 URL</p></blockquote><p>首先浏览器做的第一步工作就是要对 <code>URL</code> 进行解析，从而生成发送给 <code>Web</code> 服务器的请求信息。</p><p>让我们看看一条长长的 URL 里的各个元素的代表什么，见下图：</p><p><img src="'+s+'" alt="URL 解析"></p><p>所以图中的长长的 URL 实际上是请求服务器里的文件资源。</p><blockquote><p>要是上图中的蓝色部分 URL 元素都省略了，那应该是请求哪个文件呢？</p></blockquote><p>当没有路径名时，就代表访问根目录下事先设置的<strong>默认文件</strong>，也就是 <code>/index.html</code> 或者 <code>/default.html</code> 这些文件，这样就不会发生混乱了。</p><blockquote><p>生产 HTTP 请求信息</p></blockquote><p>对 <code>URL</code> 进行解析之后，浏览器确定了 Web 服务器和文件名，接下来就是根据这些信息来生成 HTTP 请求消息了。</p><p><img src="'+r+'" alt="HTTP 的消息格式"></p><blockquote><p>一个孤单 HTTP 数据包表示：“我这么一个小小的数据包，没亲没友，直接发到浩瀚的网络，谁会知道我呢？谁能载我一程呢？谁能保护我呢？我的目的地在哪呢？”。充满各种疑问的它，没有停滞不前，依然踏上了征途！</p></blockquote><hr><h2 id="二、真实地址查询-——-dns" tabindex="-1"><a class="header-anchor" href="#二、真实地址查询-——-dns" aria-hidden="true">#</a> 二、真实地址查询 —— DNS</h2><p>通过浏览器解析 URL 并生成 HTTP 消息后，需要委托操作系统将消息发送给 <code>Web</code> 服务器。</p><p>但在发送之前，还有一项工作需要完成，那就是<strong>查询服务器域名对应的 IP 地址</strong>，因为委托操作系统发送消息时，必须提供通信对象的 IP 地址。</p><p>比如我们打电话的时候，必须要知道对方的电话号码，但由于电话号码难以记忆，所以通常我们会将对方电话号 + 姓名保存在通讯录里。</p><p>所以，有一种服务器就专门保存了 <code>Web</code> 服务器域名与 <code>IP</code> 的对应关系，它就是 <code>DNS</code> 服务器。</p><blockquote><p>域名的层级关系</p></blockquote><p>DNS 中的域名都是用<strong>句点</strong>来分隔的，比如 <code>www.server.com</code>，这里的句点代表了不同层次之间的<strong>界限</strong>。</p><p>在域名中，<strong>越靠右</strong>的位置表示其层级<strong>越高</strong>。</p><p>毕竟域名是外国人发明，所以思维和中国人相反，比如说一个城市地点的时候，外国喜欢从小到大的方式顺序说起（如 XX 街道 XX 区 XX 市 XX 省），而中国则喜欢从大到小的顺序（如 XX 省 XX 市 XX 区 XX 街道）。</p><p>实际上域名最后还有一个点，比如 <code>www.server.com.</code>，这个最后的一个点代表根域名。</p><p>也就是，<code>.</code> 根域是在最顶层，它的下一层就是 <code>.com</code> 顶级域，再下面是 <code>server.com</code>。</p><p>所以域名的层级关系类似一个树状结构：</p><ul><li>根 DNS 服务器（.）</li><li>顶级域 DNS 服务器（.com）</li><li>权威 DNS 服务器（server.com）</li></ul><p><img src="'+d+'" alt="DNS 树状结构"></p><p>根域的 DNS 服务器信息保存在互联网中所有的 DNS 服务器中。</p><p>这样一来，任何 DNS 服务器就都可以找到并访问根域 DNS 服务器了。</p><p>因此，客户端只要能够找到任意一台 DNS 服务器，就可以通过它找到根域 DNS 服务器，然后再一路顺藤摸瓜找到位于下层的某台目标 DNS 服务器。</p><blockquote><p>域名解析的工作流程</p></blockquote><ol><li>客户端首先会发出一个 DNS 请求，问 www.server.com 的 IP 是啥，并发给本地 DNS 服务器（也就是客户端的 TCP/IP 设置中填写的 DNS 服务器地址）。</li><li>本地域名服务器收到客户端的请求后，如果缓存里的表格能找到 www.server.com，则它直接返回 IP 地址。如果没有，本地 DNS 会去问它的根域名服务器：“老大， 能告诉我 www.server.com 的 IP 地址吗？” 根域名服务器是最高层次的，它不直接用于域名解析，但能指明一条道路。</li><li>根 DNS 收到来自本地 DNS 的请求后，发现后置是 .com，说：“www.server.com 这个域名归 .com 区域管理”，我给你 .com 顶级域名服务器地址给你，你去问问它吧。”</li><li>本地 DNS 收到顶级域名服务器的地址后，发起请求问“老二， 你能告诉我 www.server.com 的 IP 地址吗？”</li><li>顶级域名服务器说：“我给你负责 www.server.com 区域的权威 DNS 服务器的地址，你去问它应该能问到”。</li><li>本地 DNS 于是转向问权威 DNS 服务器：“老三，www.server.com对应的IP是啥呀？” server.com 的权威 DNS 服务器，它是域名解析结果的原出处。为啥叫权威呢？就是我的域名我做主。</li><li>权威 DNS 服务器查询后将对应的 IP 地址 X.X.X.X 告诉本地 DNS。</li><li>本地 DNS 再将 IP 地址返回客户端，客户端和目标建立连接。</li></ol><p>至此，我们完成了 DNS 的解析过程。现在总结一下，整个过程我画成了一个图。</p><p><img src="'+n+'" alt="域名解析的工作流程"></p><p>DNS 域名解析的过程蛮有意思的，整个过程就和我们日常生活中找人问路的过程类似，<strong>只指路不带路</strong>。</p><blockquote><p>那是不是每次解析域名都要经过那么多的步骤呢？</p></blockquote><p>当然不是了，还有缓存这个东西的嘛。</p><p>浏览器会先看自身有没有对这个域名的缓存，如果有，就直接返回，如果没有，就去问操作系统，操作系统也会去看自己的缓存，如果有，就直接返回，如果没有，再去 hosts 文件看，也没有，才会去问「本地 DNS 服务器」。</p><blockquote><p>数据包表示：“DNS 老大哥厉害呀，找到了目的地了！我还是很迷茫呀，我要发出去，接下来我需要谁的帮助呢?”</p></blockquote><hr><h2 id="三、指南好帮手-——-协议栈" tabindex="-1"><a class="header-anchor" href="#三、指南好帮手-——-协议栈" aria-hidden="true">#</a> 三、指南好帮手 —— 协议栈</h2><p>通过 DNS 获取到 IP 后，就可以把 HTTP 的传输工作交给操作系统中的<strong>协议栈</strong>。</p><p>协议栈的内部分为几个部分，分别承担不同的工作。上下关系是有一定的规则的，上面的部分会向下面的部分委托工作，下面的部分收到委托的工作并执行。</p><p><img src="'+l+'" alt="img"></p><p>应用程序（浏览器）通过调用 Socket 库，来委托协议栈工作。协议栈的上半部分有两块，分别是负责收发数据的 TCP 和 UDP 协议，这两个传输协议会接受应用层的委托执行收发数据的操作。</p><p>协议栈的下面一半是用 IP 协议控制网络包收发操作，在互联网上传数据时，数据会被切分成一块块的网络包，而将网络包发送给对方的操作就是由 IP 负责的。</p><p>此外 IP 中还包括 <code>ICMP</code> 协议和 <code>ARP</code> 协议。</p><ul><li><code>ICMP</code> 用于告知网络包传送过程中产生的错误以及各种控制信息。</li><li><code>ARP</code> 用于根据 IP 地址查询相应的以太网 MAC 地址。</li></ul><p>IP 下面的网卡驱动程序负责控制网卡硬件，而最下面的网卡则负责完成实际的收发操作，也就是对网线中的信号执行发送和接收操作。</p><blockquote><p>数据包看了这份指南表示：“原来我需要那么多大佬的协助啊，那我先去找找 TCP 大佬！”</p></blockquote><hr><h2 id="四、可靠传输-——-tcp" tabindex="-1"><a class="header-anchor" href="#四、可靠传输-——-tcp" aria-hidden="true">#</a> 四、可靠传输 —— TCP</h2><p>HTTP 是基于 TCP 协议传输的，所以在这我们先了解下 TCP 协议。</p><blockquote><p>TCP 包头格式</p></blockquote><p>我们先看看 TCP 报文头部的格式：</p><p><img src="'+i+'" alt="TCP 包头格式"></p><p>首先，<strong>源端口号</strong>和<strong>目标端口</strong>号是不可少的，如果没有这两个端口号，数据就不知道应该发给哪个应用。</p><p>接下来有包的<strong>序</strong>号，这个是为了解决包乱序的问题。</p><p>还有应该有的是<strong>确认号</strong>，目的是确认发出去对方是否有收到。如果没有收到就应该重新发送，直到送达，这个是为了解决丢包的问题。</p><p>接下来还有一些<strong>状态位</strong>。例如 <code>SYN</code> 是发起一个连接，<code>ACK</code> 是回复，<code>RST</code> 是重新连接，<code>FIN</code> 是结束连接等。TCP 是面向连接的，因而双方要维护连接的状态，这些带状态位的包的发送，会引起双方的状态变更。</p><p>还有一个重要的就是<strong>窗口大小</strong>。TCP 要做<strong>流量控制</strong>，通信双方各声明一个窗口（缓存大小），标识自己当前能够的处理能力，别发送的太快，撑死我，也别发的太慢，饿死我。</p><p>除了做流量控制以外，TCP还会做<strong>拥塞控制</strong>，对于真正的通路堵车不堵车，它无能为力，唯一能做的就是控制自己，也即控制发送的速度。不能改变世界，就改变自己嘛。</p><blockquote><p>TCP 传输数据之前，要先三次握手建立连接</p></blockquote><p>在 HTTP 传输数据之前，首先需要 TCP 建立连接，TCP 连接的建立，通常称为<strong>三次握手</strong>。</p><p>这个所谓的「连接」，只是双方计算机里维护一个状态机，在连接建立的过程中，双方的状态变化时序图就像这样。</p><p><img src="'+g+'" alt="TCP 三次握手"></p><ul><li>一开始，客户端和服务端都处于 <code>CLOSED</code> 状态。先是服务端主动监听某个端口，处于 <code>LISTEN</code> 状态。</li><li>然后客户端主动发起连接 <code>SYN</code>，之后处于 <code>SYN-SENT</code> 状态。</li><li>服务端收到发起的连接，返回 <code>SYN</code>，并且 <code>ACK</code> 客户端的 <code>SYN</code>，之后处于 <code>SYN-RCVD</code> 状态。</li><li>客户端收到服务端发送的 <code>SYN</code> 和 <code>ACK</code> 之后，发送对 <code>SYN</code> 确认的 <code>ACK</code>，之后处于 <code>ESTABLISHED</code> 状态，因为它一发一收成功了。</li><li>服务端收到 <code>ACK</code> 的 <code>ACK</code> 之后，处于 <code>ESTABLISHED</code> 状态，因为它也一发一收了。</li></ul><p>所以三次握手目的是<strong>保证双方都有发送和接收的能力</strong>。</p><blockquote><p>如何查看 TCP 的连接状态？</p></blockquote><p>TCP 的连接状态查看，在 Linux 可以通过 <code>netstat -napt</code> 命令查看。</p><p><img src="'+a+'" alt="TCP 连接状态查看"></p><blockquote><p>TCP 分割数据</p></blockquote><p>如果 HTTP 请求消息比较长，超过了 <code>MSS</code> 的长度，这时 TCP 就需要把 HTTP 的数据拆解成一块块的数据发送，而不是一次性发送所有数据。</p><p><img src="'+P+'" alt="MTU 与 MSS"></p><ul><li><code>MTU</code>：一个网络包的最大长度，以太网中一般为 <code>1500</code> 字节。</li><li><code>MSS</code>：除去 IP 和 TCP 头部之后，一个网络包所能容纳的 TCP 数据的最大长度。</li></ul><p>数据会被以 <code>MSS</code> 的长度为单位进行拆分，拆分出来的每一块数据都会被放进单独的网络包中。也就是在每个被拆分的数据加上 TCP 头信息，然后交给 IP 模块来发送数据。</p><p><img src="'+C+'" alt="数据包分割"></p><blockquote><p>TCP 报文生成</p></blockquote><p>TCP 协议里面会有两个端口，一个是浏览器监听的端口（通常是随机生成的），一个是 Web 服务器监听的端口（HTTP 默认端口号是 <code>80</code>， HTTPS 默认端口号是 <code>443</code>）。</p><p>在双方建立了连接后，TCP 报文中的数据部分就是存放 HTTP 头部 + 数据，组装好 TCP 报文之后，就需交给下面的网络层处理。</p><p>至此，网络包的报文如下图。</p><p><img src="'+u+'" alt="TCP 层报文"></p><blockquote><p>此时，遇上了 TCP 的 数据包激动表示：“太好了，碰到了可靠传输的 TCP 传输，它给我加上 TCP 头部，我不再孤单了，安全感十足啊！有大佬可以保护我的可靠送达！但我应该往哪走呢？”</p></blockquote><hr><h2 id="五、远程定位-——-ip" tabindex="-1"><a class="header-anchor" href="#五、远程定位-——-ip" aria-hidden="true">#</a> 五、远程定位 —— IP</h2><p>TCP 模块在执行连接、收发、断开等各阶段操作时，都需要委托 IP 模块将数据封装成<strong>网络包</strong>发送给通信对象。</p><blockquote><p>IP 包头格式</p></blockquote><p>我们先看看 IP 报文头部的格式：</p><p><img src="'+b+'" alt="IP 包头格式"></p><p>在 IP 协议里面需要有<strong>源地址 IP</strong> 和 <strong>目标地址 IP</strong>：</p><ul><li>源地址IP，即是客户端输出的 IP 地址；</li><li>目标地址，即通过 DNS 域名解析得到的 Web 服务器 IP。</li></ul><p>因为 HTTP 是经过 TCP 传输的，所以在 IP 包头的<strong>协议号</strong>，要填写为 <code>06</code>（十六进制），表示协议为 TCP。</p><blockquote><p>假设客户端有多个网卡，就会有多个 IP 地址，那 IP 头部的源地址应该选择哪个 IP 呢？</p></blockquote><p>当存在多个网卡时，在填写源地址 IP 时，就需要判断到底应该填写哪个地址。这个判断相当于在多块网卡中判断应该使用哪个一块网卡来发送包。</p><p>这个时候就需要根据<strong>路由表</strong>规则，来判断哪一个网卡作为源地址 IP。</p><p>在 Linux 操作系统，我们可以使用 <code>route -n</code> 命令查看当前系统的路由表。</p><p><img src="'+A+'" alt="路由表"></p><p>举个例子，根据上面的路由表，我们假设 Web 服务器的目标地址是 <code>192.168.10.200</code>。</p><p><img src="'+h+'" alt="路由规则判断"></p><ol><li>首先先和第一条目的子网掩码（<code>Genmask</code>）进行 <strong>与运算</strong>，得到结果为 <code>192.168.10.0</code>，但是第一个条目的 <code>Destination</code> 是 <code>192.168.3.0</code>，两者不一致所以匹配失败。</li><li>再与第二条目的子网掩码进行 <strong>与运算</strong>，得到的结果为 <code>192.168.10.0</code>，与第二条目的 <code>Destination 192.168.10.0</code> 匹配成功，所以将使用 <code>eth1</code> 网卡的 IP 地址作为 IP 包头的源地址。</li></ol><p>那么假设 Web 服务器的目标地址是 <code>10.100.20.100</code>，那么依然依照上面的路由表规则判断，判断后的结果是和第三条目匹配。</p><p>第三条目比较特殊，它目标地址和子网掩码都是 <code>0.0.0.0</code>，这表示<strong>默认网关</strong>，如果其他所有条目都无法匹配，就会自动匹配这一行。并且后续就把包发给路由器，<code>Gateway</code> 即是路由器的 IP 地址。</p><blockquote><p>IP 报文生成</p></blockquote><p>至此，网络包的报文如下图。</p><p><img src="'+T+'" alt="IP 层报文"></p><blockquote><p>此时，加上了 IP 头部的数据包表示 ：“有 IP 大佬给我指路了，感谢 IP 层给我加上了 IP 包头，让我有了远程定位的能力！不会害怕在浩瀚的互联网迷茫了！可是目的地好远啊，我下一站应该去哪呢？”</p></blockquote><hr><h2 id="六、两点传输-——-mac" tabindex="-1"><a class="header-anchor" href="#六、两点传输-——-mac" aria-hidden="true">#</a> 六、两点传输 —— MAC</h2><p>生成了 IP 头部之后，接下来网络包还需要在 IP 头部的前面加上 <strong>MAC 头部</strong>。</p><blockquote><p>MAC 包头格式</p></blockquote><p>MAC 头部是以太网使用的头部，它包含了接收方和发送方的 MAC 地址等信息。</p><p><img src="'+M+'" alt="MAC 包头格式"></p><p>在 MAC 包头里需要<strong>发送方 MAC 地址</strong>和<strong>接收方目标 MAC 地址</strong>，用于<strong>两点之间的传输</strong>。</p><p>一般在 TCP/IP 通信里，MAC 包头的<strong>协议类型</strong>只使用：</p><ul><li><code>0800</code> ： IP 协议</li><li><code>0806</code> ： ARP 协议</li></ul><blockquote><p>MAC 发送方和接收方如何确认?</p></blockquote><p><strong>发送方</strong>的 MAC 地址获取就比较简单了，MAC 地址是在网卡生产时写入到 ROM 里的，只要将这个值读取出来写入到 MAC 头部就可以了。</p><p><strong>接收方</strong>的 MAC 地址就有点复杂了，只要告诉以太网对方的 MAC 的地址，以太网就会帮我们把包发送过去，那么很显然这里应该填写对方的 MAC 地址。</p><p>所以先得搞清楚应该把包发给谁，这个只要查一下<strong>路由表</strong>就知道了。在路由表中找到相匹配的条目，然后把包发给 <code>Gateway</code> 列中的 IP 地址就可以了。</p><blockquote><p>既然知道要发给谁，按如何获取对方的 MAC 地址呢？</p></blockquote><p>不知道对方 MAC 地址？不知道就喊呗。</p><p>此时就需要 <code>ARP</code> 协议帮我们找到路由器的 MAC 地址。</p><p><img src="'+I+'" alt="ARP 广播"></p><p>ARP 协议会在以太网中以<strong>广播</strong>的形式，对以太网所有的设备喊出：“这个 IP 地址是谁的？请把你的 MAC 地址告诉我”。</p><p>然后就会有人回答：“这个 IP 地址是我的，我的 MAC 地址是 XXXX”。</p><p>如果对方和自己处于同一个子网中，那么通过上面的操作就可以得到对方的 MAC 地址。然后，我们将这个 MAC 地址写入 MAC 头部，MAC 头部就完成了。</p><blockquote><p>好像每次都要广播获取，这不是很麻烦吗？</p></blockquote><p>放心，在后续操作系统会把本次查询结果放到一块叫做 <strong>ARP 缓存</strong>的内存空间留着以后用，不过缓存的时间就几分钟。</p><p>也就是说，在发包时：</p><ul><li>先查询 ARP 缓存，如果其中已经保存了对方的 MAC 地址，就不需要发送 ARP 查询，直接使用 ARP 缓存中的地址。</li><li>而当 ARP 缓存中不存在对方 MAC 地址时，则发送 ARP 广播查询。</li></ul><blockquote><p>查看 ARP 缓存内容</p></blockquote><p>在 Linux 系统中，我们可以使用 <code>arp -a</code> 命令来查看 ARP 缓存的内容。</p><p><img src="'+m+'" alt="ARP 缓存内容"></p><blockquote><p>MAC 报文生成</p></blockquote><p>至此，网络包的报文如下图。</p><p><img src="'+k+'" alt="MAC 层报文"></p><blockquote><p>此时，加上了 MAC 头部的数据包万分感谢，说道 ：“感谢 MAC 大佬，我知道我下一步要去哪了！我现在有很多头部兄弟，相信我可以到达最终的目的地！”。 带着众多头部兄弟的数据包，终于准备要出门了。</p></blockquote><hr><h2 id="七、出口-——-网卡" tabindex="-1"><a class="header-anchor" href="#七、出口-——-网卡" aria-hidden="true">#</a> 七、出口 —— 网卡</h2><p>网络包只是存放在内存中的一串二进制数字信息，没有办法直接发送给对方。因此，我们需要将<strong>数字信息转换为电信号</strong>，才能在网线上传输，也就是说，这才是真正的数据发送过程。</p><p>负责执行这一操作的是<strong>网卡</strong>，要控制网卡还需要靠<strong>网卡驱动程序</strong>。</p><p>网卡驱动获取网络包之后，会将其<strong>复制</strong>到网卡内的缓存区中，接着会在其<strong>开头加上报头和起始帧分界符，在末尾加上用于检测错误的帧校验序列</strong>。</p><p><img src="'+q+'" alt="数据包"></p><ul><li>起始帧分界符是一个用来表示包起始位置的标记</li><li>末尾的 <code>FCS</code>（帧校验序列）用来检查包传输过程是否有损坏</li></ul><p>最后网卡会将包转为电信号，通过网线发送出去。</p><blockquote><p>唉，真是不容易，发一个包，真是历经千辛万苦。致此，一个带有许多头部的数据终于踏上寻找目的地的征途了！</p></blockquote><hr><h2 id="八、送别者-——-交换机" tabindex="-1"><a class="header-anchor" href="#八、送别者-——-交换机" aria-hidden="true">#</a> 八、送别者 —— 交换机</h2><p>下面来看一下包是如何通过交换机的。交换机的设计是将网络包<strong>原样</strong>转发到目的地。交换机工作在 MAC 层，也称为<strong>二层网络设备</strong>。</p><blockquote><p>交换机的包接收操作</p></blockquote><p>首先，电信号到达网线接口，交换机里的模块进行接收，接下来交换机里的模块将电信号转换为数字信号。</p><p>然后通过包末尾的 <code>FCS</code> 校验错误，如果没问题则放到缓冲区。这部分操作基本和计算机的网卡相同，但交换机的工作方式和网卡不同。</p><p>计算机的网卡本身具有 MAC 地址，并通过核对收到的包的接收方 MAC 地址判断是不是发给自己的，如果不是发给自己的则丢弃；相对地，交换机的端口不核对接收方 MAC 地址，而是直接接收所有的包并存放到缓冲区中。因此，和网卡不同，<strong>交换机的端口不具有 MAC 地址</strong>。</p><p>将包存入缓冲区后，接下来需要查询一下这个包的接收方 MAC 地址是否已经在 MAC 地址表中有记录了。</p><p>交换机的 MAC 地址表主要包含两个信息：</p><ul><li>一个是设备的 MAC 地址，</li><li>另一个是该设备连接在交换机的哪个端口上。</li></ul><p><img src="'+_+'" alt="交换机的 MAC 地址表"></p><p>举个例子，如果收到的包的接收方 MAC 地址为 <code>00-02-B3-1C-9C-F9</code>，则与图中表中的第 3 行匹配，根据端口列的信息，可知这个地址位于 <code>3</code> 号端口上，然后就可以通过交换电路将包发送到相应的端口了。</p><p>所以，<strong>交换机根据 MAC 地址表查找 MAC 地址，然后将信号发送到相应的端口</strong>。</p><blockquote><p>当 MAC 地址表找不到指定的 MAC 地址会怎么样？</p></blockquote><p>地址表中找不到指定的 MAC 地址。这可能是因为具有该地址的设备还没有向交换机发送过包，或者这个设备一段时间没有工作导致地址被从地址表中删除了。</p><p>这种情况下，交换机无法判断应该把包转发到哪个端口，只能将包转发到除了源端口之外的所有端口上，无论该设备连接在哪个端口上都能收到这个包。</p><p>这样做不会产生什么问题，因为以太网的设计本来就是将包发送到整个网络的，然后<strong>只有相应的接收者才接收包，而其他设备则会忽略这个包</strong>。</p><p>有人会说：“这样做会发送多余的包，会不会造成网络拥塞呢？”</p><p>其实完全不用过于担心，因为发送了包之后目标设备会作出响应，只要返回了响应包，交换机就可以将它的地址写入 MAC 地址表，下次也就不需要把包发到所有端口了。</p><p>局域网中每秒可以传输上千个包，多出一两个包并无大碍。</p><p>此外，如果接收方 MAC 地址是一个<strong>广播地址</strong>，那么交换机会将包发送到除源端口之外的所有端口。</p><p>以下两个属于广播地址：</p><ul><li>MAC 地址中的 <code>FF:FF:FF:FF:FF:FF</code></li><li>IP 地址中的 <code>255.255.255.255</code></li></ul><blockquote><p>数据包通过交换机转发抵达了路由器，准备要离开土生土长的子网了。此时，数据包和交换机离别时说道：“感谢交换机兄弟，帮我转发到出境的大门，我要出远门啦！”</p></blockquote><hr><h2 id="九、出境大门-——-路由器" tabindex="-1"><a class="header-anchor" href="#九、出境大门-——-路由器" aria-hidden="true">#</a> 九、出境大门 —— 路由器</h2><blockquote><p>路由器与交换机的区别</p></blockquote><p>网络包经过交换机之后，现在到达了<strong>路由器</strong>，并在此被转发到下一个路由器或目标设备。</p><p>这一步转发的工作原理和交换机类似，也是通过查表判断包转发的目标。</p><p>不过在具体的操作过程上，路由器和交换机是有区别的。</p><ul><li>因为<strong>路由器</strong>是基于 IP 设计的，俗称<strong>三层</strong>网络设备，路由器的各个端口都具有 MAC 地址和 IP 地址；</li><li>而<strong>交换机</strong>是基于以太网设计的，俗称<strong>二层</strong>网络设备，交换机的端口不具有 MAC 地址。</li></ul><blockquote><p>路由器基本原理</p></blockquote><p>路由器的端口具有 MAC 地址，因此它就能够成为以太网的发送方和接收方；同时还具有 IP 地址，从这个意义上来说，它和计算机的网卡是一样的。</p><p>当转发包时，首先路由器端口会接收发给自己的以太网包，然后<strong>路由表</strong>查询转发目标，再由相应的端口作为发送方将以太网包发送出去。</p><blockquote><p>路由器的包接收操作</p></blockquote><p>首先，电信号到达网线接口部分，路由器中的模块会将电信号转成数字信号，然后通过包末尾的 <code>FCS</code> 进行错误校验。</p><p>如果没问题则检查 MAC 头部中的<strong>接收方 MAC 地址</strong>，看看是不是发给自己的包，如果是就放到接收缓冲区中，否则就丢弃这个包。</p><p>总的来说，路由器的端口都具有 MAC 地址，只接收与自身地址匹配的包，遇到不匹配的包则直接丢弃。</p><blockquote><p>查询路由表确定输出端口</p></blockquote><p>完成包接收操作之后，路由器就会<strong>去掉</strong>包开头的 MAC 头部。</p><p><strong>MAC 头部的作用就是将包送达路由器</strong>，其中的接收方 MAC 地址就是路由器端口的 MAC 地址。因此，当包到达路由器之后，MAC 头部的任务就完成了，于是 MAC 头部就会<strong>被丢弃</strong>。</p><p>接下来，路由器会根据 MAC 头部后方的 <code>IP</code> 头部中的内容进行包的转发操作。</p><p>转发操作分为几个阶段，首先是查询<strong>路由表</strong>判断转发目标。</p><p><img src="'+S+'" alt="路由器转发"></p><p>具体的工作流程根据上图，举个例子。</p><p>假设地址为 <code>10.10.1.101</code> 的计算机要向地址为 <code>192.168.1.100</code> 的服务器发送一个包，这个包先到达图中的路由器。</p><p>判断转发目标的第一步，就是根据包的接收方 IP 地址查询路由表中的目标地址栏，以找到相匹配的记录。</p><p>路由匹配和前面讲的一样，每个条目的子网掩码和 <code>192.168.1.100</code> IP 做 <strong>&amp; 与运算</strong>后，得到的结果与对应条目的目标地址进行匹配，如果匹配就会作为候选转发目标，如果不匹配就继续与下个条目进行路由匹配。</p><p>如第二条目的子网掩码 <code>255.255.255.0</code> 与 <code>192.168.1.100</code> IP 做 <strong>&amp; 与运算</strong>后，得到结果是 <code>192.168.1.0</code> ，这与第二条目的目标地址 <code>192.168.1.0</code> 匹配，该第二条目记录就会被作为转发目标。</p><p>实在找不到匹配路由时，就会选择<strong>默认路由</strong>，路由表中子网掩码为 <code>0.0.0.0</code> 的记录表示「默认路由」。</p><blockquote><p>路由器的发送操作</p></blockquote><p>接下来就会进入包的<strong>发送操作</strong>。</p><p>首先，我们需要根据<strong>路由表的网关列</strong>判断对方的地址。</p><ul><li>如果网关是一个 IP 地址，则这个IP 地址就是我们要转发到的目标地址，<strong>还未抵达终点</strong>，还需继续需要路由器转发。</li><li>如果网关为空，则 IP 头部中的接收方 IP 地址就是要转发到的目标地址，也是就终于找到 IP 包头里的目标地址了，说明<strong>已抵达终点</strong>。</li></ul><p>知道对方的 IP 地址之后，接下来需要通过 <code>ARP</code> 协议根据 IP 地址查询 MAC 地址，并将查询的结果作为接收方 MAC 地址。</p><p>路由器也有 ARP 缓存，因此首先会在 ARP 缓存中查询，如果找不到则发送 ARP 查询请求。</p><p>接下来是发送方 MAC 地址字段，这里填写输出端口的 MAC 地址。还有一个以太类型字段，填写 <code>0800</code> （十六进制）表示 IP 协议。</p><p>网络包完成后，接下来会将其转换成电信号并通过端口发送出去。这一步的工作过程和计算机也是相同的。</p><p>发送出去的网络包会通过<strong>交换机</strong>到达下一个路由器。由于接收方 MAC 地址就是下一个路由器的地址，所以交换机会根据这一地址将包传输到下一个路由器。</p><p>接下来，下一个路由器会将包转发给再下一个路由器，经过层层转发之后，网络包就到达了最终的目的地。</p><p>不知你发现了没有，在网络包传输的过程中，<strong>源 IP 和目标 IP 始终是不会变的，一直变化的是 MAC 地址</strong>，因为需要 MAC 地址在以太网内进行<strong>两个设备</strong>之间的包传输。</p><blockquote><p>数据包通过多个路由器道友的帮助，在网络世界途经了很多路程，最终抵达了目的地的城门！城门值守的路由器，发现了这个小兄弟数据包原来是找城内的人，于是它就将数据包送进了城内，再经由城内的交换机帮助下，最终转发到了目的地了。数据包感慨万千的说道：“多谢这一路上，各路大侠的相助！”</p></blockquote><hr><h2 id="十、互相扒皮-——-服务器-与-客户端" tabindex="-1"><a class="header-anchor" href="#十、互相扒皮-——-服务器-与-客户端" aria-hidden="true">#</a> 十、互相扒皮 —— 服务器 与 客户端</h2><p>数据包抵达了服务器，服务器肯定高兴呀，正所谓有朋自远方来，不亦乐乎？</p><p>服务器高兴的不得了，于是开始扒数据包的皮！就好像你收到快递，能不兴奋吗？</p><p><img src="'+N+'" alt="网络分层模型"></p><p>数据包抵达服务器后，服务器会先扒开数据包的 MAC 头部，查看是否和服务器自己的 MAC 地址符合，符合就将包收起来。</p><p>接着继续扒开数据包的 IP 头，发现 IP 地址符合，根据 IP 头中协议项，知道自己上层是 TCP 协议。</p><p>于是，扒开 TCP 的头，里面有序列号，需要看一看这个序列包是不是我想要的，如果是就放入缓存中然后返回一个 ACK，如果不是就丢弃。TCP 头部里面还有端口号， HTTP 的服务器正在监听这个端口号。</p><p>于是，服务器自然就知道是 HTTP 进程想要这个包，于是就将包发给 HTTP 进程。</p><p>服务器的 HTTP 进程看到，原来这个请求是要访问一个页面，于是就把这个网页封装在 HTTP 响应报文里。</p><p>HTTP 响应报文也需要穿上 TCP、IP、MAC 头部，不过这次是源地址是服务器 IP 地址，目的地址是客户端 IP 地址。</p><p>穿好头部衣服后，从网卡出去，交由交换机转发到出城的路由器，路由器就把响应数据包发到了下一个路由器，就这样跳啊跳。</p><p>最后跳到了客户端的城门把守的路由器，路由器扒开 IP 头部发现是要找城内的人，于是又把包发给了城内的交换机，再由交换机转发到客户端。</p><p>客户端收到了服务器的响应数据包后，同样也非常的高兴，客户能拆快递了！</p><p>于是，客户端开始扒皮，把收到的数据包的皮扒剩 HTTP 响应报文后，交给浏览器去渲染页面，一份特别的数据包快递，就这样显示出来了！</p><p>最后，客户端要离开了，向服务器发起了 TCP 四次挥手，至此双方的连接就断开了。</p><hr><h2 id="十一、一个数据包臭不要脸的感受" tabindex="-1"><a class="header-anchor" href="#十一、一个数据包臭不要脸的感受" aria-hidden="true">#</a> 十一、一个数据包臭不要脸的感受</h2><blockquote><p>下面内容的 「我」，代表「臭美的数据包角色」。注：（括号的内容）代表我的吐槽，三连呸！</p></blockquote><p>我一开始我虽然孤单、不知所措，但没有停滞不前。我依然满怀信心和勇气开始了征途。（<strong>你当然有勇气，你是应用层数据，后面有底层兄弟当靠山，我呸！</strong>）</p><p>我很庆幸遇到了各路神通广大的大佬，有可靠传输的 TCP、有远程定位功能的 IP、有指明下一站位置的 MAC 等（<strong>你当然会遇到，因为都被计算机安排好的，我呸！</strong>）。</p><p>这些大佬都给我前面加上了头部，使得我能在交换机和路由器的转发下，抵达到了目的地！（<strong>哎，你也不容易，不吐槽了，放过你！</strong>）</p><p>这一路上的经历，让我认识到了网络世界中各路大侠协作的重要性，是他们维护了网络世界的秩序，感谢他们！（<strong>我呸，你应该感谢众多计算机科学家！</strong>）</p>',234),R=[w];function f(H,X){return p(),e("div",null,R)}const F=o(D,[["render",f],["__file","2.what_happen_url.html.vue"]]);export{F as default};
