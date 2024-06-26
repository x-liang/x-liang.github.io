import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as t,a as n,b as e,d as c,e as a}from"./app-e53dd85b.js";const r="/assets/1-2d63f7a2.png",o="/assets/image-20230118145124966-99547897.png",v="/assets/image-20230118151935428-88711ee6.png",p="/assets/640-102c22d1.png",u="/assets/2-99382858.png",m="/assets/3-dfa4aeaf.png",b="/assets/4-bc35427c.png",h="/assets/5-450ffc0a.png",g="/assets/6-ebe3ed1d.png",x="/assets/7-71134466.png",k="/assets/8-d6edf664.png",_="/assets/9-6b33b145.png",y="/assets/10-d903379d.png",f="/assets/11-64a848dd.png",w={},N=a('<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="一、nginx-概述" tabindex="-1"><a class="header-anchor" href="#一、nginx-概述" aria-hidden="true">#</a> 一、Nginx 概述</h2><p>Nginx 是开源、高性能、高可靠的 Web 和反向代理服务器，而且支持热部署，几乎可以做到 7 * 24 小时不间断运行，即使运行几个月也不需要重新启动，还能在不间断服务的情况下对软件版本进行热更新。性能是 Nginx 最重要的考量，其占用内存少、并发能力强、能支持高达 5w 个并发连接数，最重要的是， Nginx 是免费的并可以商业化，配置使用也比较简单。</p><h2 id="二、nginx-特点" tabindex="-1"><a class="header-anchor" href="#二、nginx-特点" aria-hidden="true">#</a> 二、Nginx 特点</h2><ul><li>高并发、高性能；</li><li>模块化架构使得它的扩展性非常好；</li><li>异步非阻塞的事件驱动模型这点和 <code>Node.js</code> 相似；</li><li>相对于其它服务器来说它可以连续几个月甚至更长而不需要重启服务器使得它具有高可靠性；</li><li>热部署、平滑升级；</li><li>完全开源，生态繁荣；</li></ul><h2 id="三、nginx-作用" tabindex="-1"><a class="header-anchor" href="#三、nginx-作用" aria-hidden="true">#</a> 三、Nginx 作用</h2><p>Nginx 的最重要的几个使用场景：</p><ol><li>静态资源服务，通过本地文件系统提供服务；</li><li>反向代理服务，延伸出包括缓存、负载均衡等；</li><li><code>API</code> 服务， <code>OpenResty</code> ；</li></ol><p>对于前端来说 <code>Node.js</code> 并不陌生， <code>Nginx</code> 和 <code>Node.js</code> 的很多理念类似， <code>HTTP</code> 服务器、事件驱动、异步非阻塞等，且 <code>Nginx</code> 的大部分功能使用 <code>Node.js</code> 也可以实现，但 <code>Nginx</code> 和 <code>Node.js</code> 并不冲突，都有自己擅长的领域。 <code>Nginx</code> 擅长于底层服务器端资源的处理（静态资源处理转发、反向代理，负载均衡等）， <code>Node.js</code> 更擅长上层具体业务逻辑的处理，两者可以完美组合。</p><p>用一张图表示：</p><p><img src="'+r+`" alt="1"></p><h2 id="四、nginx-安装" tabindex="-1"><a class="header-anchor" href="#四、nginx-安装" aria-hidden="true">#</a> 四、Nginx 安装</h2><h2 id="五、nginx-常用命令" tabindex="-1"><a class="header-anchor" href="#五、nginx-常用命令" aria-hidden="true">#</a> 五、Nginx 常用命令</h2><p><strong><code>systemctl</code> 系统命令：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开机配置</span>
systemctl <span class="token builtin class-name">enable</span> nginx <span class="token comment"># 开机自动启动</span>
systemctl disable nginx <span class="token comment"># 关闭开机自动启动</span>

<span class="token comment"># 启动Nginx</span>
systemctl start nginx <span class="token comment"># 启动Nginx成功后，可以直接访问主机IP，此时会展示Nginx默认页面</span>

<span class="token comment"># 停止Nginx</span>
systemctl stop nginx

<span class="token comment"># 重启Nginx</span>
systemctl restart nginx

<span class="token comment"># 重新加载Nginx</span>
systemctl reload nginx

<span class="token comment"># 查看 Nginx 运行状态</span>
systemctl status nginx

<span class="token comment"># 查看Nginx进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx

<span class="token comment"># 杀死Nginx进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid <span class="token comment"># 根据上面查看到的Nginx进程号，杀死Nginx进程，-9 表示强制结束进程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>Nginx</code> 应用程序命令：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload  <span class="token comment"># 向主进程发送信号，重新加载配置文件，热重启</span>
nginx <span class="token parameter variable">-s</span> reopen  <span class="token comment"># 重启 Nginx</span>
nginx <span class="token parameter variable">-s</span> stop    <span class="token comment"># 快速关闭</span>
nginx <span class="token parameter variable">-s</span> quit    <span class="token comment"># 等待工作进程处理完成后关闭</span>
nginx <span class="token parameter variable">-T</span>         <span class="token comment"># 查看当前 Nginx 最终的配置</span>
nginx <span class="token parameter variable">-t</span>         <span class="token comment"># 检查配置是否有问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、nginx-核心配置" tabindex="-1"><a class="header-anchor" href="#六、nginx-核心配置" aria-hidden="true">#</a> 六、Nginx 核心配置</h2><h3 id="_6-1-配置文件结构" tabindex="-1"><a class="header-anchor" href="#_6-1-配置文件结构" aria-hidden="true">#</a> 6.1 配置文件结构</h3><p><code>Nginx</code> 的典型配置示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># main段配置信息
user  nginx;                        # 运行用户，默认即是nginx，可以不进行设置
worker_processes  auto;             # Nginx 进程数，一般设置为和 CPU 核数一样
error_log  /var/log/nginx/error.log warn;   # Nginx 的错误日志存放目录
pid        /var/run/nginx.pid;      # Nginx 服务启动时的 pid 存放位置

# events段配置信息
events {
    use epoll;     # 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)
    worker_connections 1024;   # 每个进程允许最大并发数
}

# http段配置信息
# 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置
http { 
    # 设置日志模式
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;   # Nginx访问日志存放位置

    sendfile            on;   # 开启高效传输模式
    tcp_nopush          on;   # 减少网络报文段的数量
    tcp_nodelay         on;
    keepalive_timeout   65;   # 保持连接的时间，也叫超时时间，单位秒
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;      # 文件扩展名与类型映射表
    default_type        application/octet-stream;   # 默认文件类型

    include /etc/nginx/conf.d/*.conf;   # 加载子配置项
    
    # server段配置信息
    server {
     listen       80;       # 配置监听的端口
     server_name  localhost;    # 配置的域名
      
     # location段配置信息
     location / {
      root   /usr/share/nginx/html;  # 网站根目录
      index  index.html index.htm;   # 默认首页文件
      deny 172.168.22.11;   # 禁止访问的ip地址，可以为all
      allow 172.168.33.44；# 允许访问的ip地址，可以为all
     }
     
     error_page 500 502 503 504 /50x.html;  # 默认50x对应的访问页面
     error_page 400 404 error.html;   # 同上
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>main</code> 全局配置，对全局生效；</li><li><code>events</code> 配置影响 <code>Nginx</code> 服务器与用户的网络连接；</li><li><code>http</code> 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置；</li><li><code>server</code> 配置虚拟主机的相关参数，一个 <code>http</code> 块中可以有多个 <code>server</code> 块；</li><li><code>location</code> 用于配置匹配的 <code>uri</code> ；</li><li><code>upstream</code> 配置后端服务器具体地址，负载均衡配置不可或缺的部分；</li></ul><p>用一张图清晰的展示它的层级结构：</p><p><img src="`+o+`" alt="image-20230118145124966"></p><h3 id="_6-2-配置文件-main-段核心参数" tabindex="-1"><a class="header-anchor" href="#_6-2-配置文件-main-段核心参数" aria-hidden="true">#</a> 6.2 配置文件 main 段核心参数</h3><h4 id="_6-2-1-user" tabindex="-1"><a class="header-anchor" href="#_6-2-1-user" aria-hidden="true">#</a> 6.2.1 user</h4><p>指定运行 <code>Nginx</code> 的 <code>woker</code> 子进程的属主和属组，其中组可以不指定。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user USERNAME <span class="token punctuation">[</span>GROUP<span class="token punctuation">]</span>
user nginx lion<span class="token punctuation">;</span> <span class="token comment"># 用户是nginx;组是lion</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-2-pid" tabindex="-1"><a class="header-anchor" href="#_6-2-2-pid" aria-hidden="true">#</a> 6.2.2 pid</h4><p>指定运行 <code>Nginx</code> <code>master</code> 主进程的 <code>pid</code> 文件存放路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pid /opt/nginx/logs/nginx.pid <span class="token comment"># master主进程的的pid存放在nginx.pid的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-2-3-worker-rlimit-nofile-number" tabindex="-1"><a class="header-anchor" href="#_6-2-3-worker-rlimit-nofile-number" aria-hidden="true">#</a> 6.2.3 worker_rlimit_nofile_number</h4><p>指定 <code>worker</code> 子进程可以打开的最大文件句柄数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_rlimit_nofile <span class="token number">20480</span><span class="token punctuation">;</span> <span class="token comment"># 可以理解成每个worker子进程的最大连接数量。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-2-4-worker-rlimit-core" tabindex="-1"><a class="header-anchor" href="#_6-2-4-worker-rlimit-core" aria-hidden="true">#</a> 6.2.4 worker_rlimit_core</h4><p>指定 <code>worker</code> 子进程异常终止后的 <code>core</code> 文件，用于记录分析问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_rlimit_core 50M<span class="token punctuation">;</span> <span class="token comment"># 存放大小限制</span>
working_directory /opt/nginx/tmp<span class="token punctuation">;</span> <span class="token comment"># 存放目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-5-worker-processes-number" tabindex="-1"><a class="header-anchor" href="#_6-2-5-worker-processes-number" aria-hidden="true">#</a> 6.2.5 worker_processes_number</h4><p>指定 <code>Nginx</code> 启动的 <code>worker</code> 子进程数量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_processes 4; # 指定具体子进程数量
worker_processes auto; # 与当前cpu物理核心数一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-6-worker-cpu-affinity" tabindex="-1"><a class="header-anchor" href="#_6-2-6-worker-cpu-affinity" aria-hidden="true">#</a> 6.2.6 worker_cpu_affinity</h4><p>将每个 <code>worker</code> 子进程与我们的 <code>cpu</code> 物理核心绑定。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_cpu_affinity 0001 0010 0100 1000; # 4个物理核心，4个worker子进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+v+`" alt="image-20230118151935428"></p><p>将每个 <code>worker</code> 子进程与特定 <code>CPU</code> 物理核心绑定，优势在于，避免同一个 <code>worker</code> 子进程在不同的 <code>CPU</code> 核心上切换，缓存失效，降低性能。但其并不能真正的避免进程切换。</p><h4 id="_6-2-7-worker-priority" tabindex="-1"><a class="header-anchor" href="#_6-2-7-worker-priority" aria-hidden="true">#</a> 6.2.7 worker_priority</h4><p>指定 <code>worker</code> 子进程的 <code>nice</code> 值，以调整运行 <code>Nginx</code> 的优先级，通常设定为负值，以优先调用 <code>Nginx</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_priority -10; # 120-10=110，110就是最终的优先级
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Linux</code> 默认进程的优先级值是120，值越小越优先； <code>nice</code> 定范围为 <code>-20</code> 到 <code>+19</code> 。</p><p>[备注] 应用的默认优先级值是120加上 <code>nice</code> 值等于它最终的值，这个值越小，优先级越高。</p><h4 id="_6-2-8-worker-shutdown-timeout" tabindex="-1"><a class="header-anchor" href="#_6-2-8-worker-shutdown-timeout" aria-hidden="true">#</a> 6.2.8 worker_shutdown_timeout</h4><p>指定 <code>worker</code> 子进程优雅退出时的超时时间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_shutdown_timeout 5s;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-2-9-timer-resolution" tabindex="-1"><a class="header-anchor" href="#_6-2-9-timer-resolution" aria-hidden="true">#</a> 6.2.9 timer_resolution</h4><p><code>worker</code> 子进程内部使用的计时器精度，调整时间间隔越大，系统调用越少，有利于性能提升；反之，系统调用越多，性能下降。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>timer_resolution 100ms;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>Linux</code> 系统中，用户需要获取计时器时需要向操作系统内核发送请求，有请求就必然会有开销，因此这个间隔越大开销就越小。</p><h4 id="_6-2-10-daemon" tabindex="-1"><a class="header-anchor" href="#_6-2-10-daemon" aria-hidden="true">#</a> 6.2.10 daemon</h4><p>指定 <code>Nginx</code> 的运行方式，前台还是后台，前台用于调试，后台用于生产。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>daemon off; # 默认是on，后台运行模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-3-配置文件-events-段核心参数" tabindex="-1"><a class="header-anchor" href="#_6-3-配置文件-events-段核心参数" aria-hidden="true">#</a> 6.3 配置文件 events 段核心参数</h3><h4 id="_6-3-1-use" tabindex="-1"><a class="header-anchor" href="#_6-3-1-use" aria-hidden="true">#</a> 6.3.1 use</h4><p><code>Nginx</code> 使用何种事件驱动模型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use method; # 不推荐配置它，让nginx自己选择
method 可选值为：select、poll、kqueue、epoll、/dev/poll、eventport
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-2-worker-connections" tabindex="-1"><a class="header-anchor" href="#_6-3-2-worker-connections" aria-hidden="true">#</a> 6.3.2 worker_connections</h4><p><code>worker</code> 子进程能够处理的最大并发连接数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_connections 1024 # 每个子进程的最大连接数为1024
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-3-3-accept-mutex" tabindex="-1"><a class="header-anchor" href="#_6-3-3-accept-mutex" aria-hidden="true">#</a> 6.3.3 accept_mutex</h4><p>是否打开负载均衡互斥锁。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>accept_mutex on # 默认是off关闭的，这里推荐打开
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-4-server-name-指令" tabindex="-1"><a class="header-anchor" href="#_6-4-server-name-指令" aria-hidden="true">#</a> 6.4 server_name 指令</h3><p>指定虚拟主机域名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server_name name1 name2 name3
# 示例：
server_name www.nginx.com;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>域名匹配的四种写法：</p><ul><li>精确匹配： <code>server_name www.nginx.com</code> ;</li><li>左侧通配： <code>server_name *.nginx.com</code> ;</li><li>右侧统配： <code>server_name www.nginx.*</code> ;</li><li>正则匹配： <code>server_name ~^www\\.nginx\\.*$</code> ;</li></ul><p>匹配优先级：<strong>「精确匹配 &gt; 左侧通配符匹配 &gt; 右侧通配符匹配 &gt; 正则表达式匹配」</strong></p><p><code>server_name</code> 配置实例：</p><p>1、配置本地 <code>DNS</code> 解析 <code>vim /etc/hosts</code> （ <code>macOS</code> 系统）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 添加如下内容，其中 121.42.11.34 是阿里云服务器IP地址
121.42.11.34 www.nginx-test.com
121.42.11.34 mail.nginx-test.com
121.42.11.34 www.nginx-test.org
121.42.11.34 doc.nginx-test.com
121.42.11.34 www.nginx-test.cn
121.42.11.34 fe.nginx-test.club
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注意] 这里使用的是虚拟域名进行测试，因此需要配置本地 <code>DNS</code> 解析，如果使用阿里云上购买的域名，则需要在阿里云上设置好域名解析。</p><p>2、配置阿里云 <code>Nginx</code> ，<code>vim /etc/nginx/nginx.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 这里只列举了http端中的sever端配置

# 左匹配
server {
 listen 80;
 server_name *.nginx-test.com;
 root /usr/share/nginx/html/nginx-test/left-match/;
 location / {
  index index.html;
 }
}

# 正则匹配
server {
 listen 80;
 server_name ~^.*\\.nginx-test\\..*$;
 root /usr/share/nginx/html/nginx-test/reg-match/;
 location / {
  index index.html;
 }
}

# 右匹配
server {
 listen 80;
 server_name www.nginx-test.*;
 root /usr/share/nginx/html/nginx-test/right-match/;
 location / {
  index index.html;
 }
}

# 完全匹配
server {
 listen 80;
 server_name www.nginx-test.com;
 root /usr/share/nginx/html/nginx-test/all-match/;
 location / {
  index index.html;
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、访问分析</p><p>当访问 www.nginx-test.com 时，都可以被匹配上，因此选择优先级最高的“完全匹配”；</p><p>当访问 mail.nginx-test.com 时，会进行“左匹配”；</p><p>当访问 www.nginx-test.org 时，会进行“右匹配”；</p><p>当访问 doc.nginx-test.com 时，会进行“左匹配”；</p><p>当访问 www.nginx-test.cn 时，会进行“右匹配”；</p><p>当访问 fe.nginx-test.club 时，会进行“正则匹配”；</p><h3 id="_6-5-root" tabindex="-1"><a class="header-anchor" href="#_6-5-root" aria-hidden="true">#</a> 6.5 root</h3><p>指定静态资源目录位置，它可以写在 <code>http</code> 、 <code>server</code> 、 <code>location</code> 等配置中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root path

# 例如：
location /image {
    root /opt/nginx/static;
}

# 当用户访问 www.test.com/image/1.png 时，实际在服务器找的路径是 /opt/nginx/static/image/1.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注意] <code>root</code> 会将定义路径与 <code>URI</code> 叠加， <code>alias</code> 则只取定义路径。</p><h3 id="_6-6-alias" tabindex="-1"><a class="header-anchor" href="#_6-6-alias" aria-hidden="true">#</a> 6.6 alias</h3><p>它也是指定静态资源目录位置，它只能写在 <code>location</code> 中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /image {
    alias /opt/nginx/static/image/;
}

# 当用户访问 www.test.com/image/1.png 时，实际在服务器找的路径是 /opt/nginx/static/image/1.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注意] 使用 alias 末尾一定要添加 <code>/</code> ，并且它只能位于 <code>location</code> 中。</p><h3 id="_6-7-location" tabindex="-1"><a class="header-anchor" href="#_6-7-location" aria-hidden="true">#</a> 6.7 location</h3><p>配置路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location [ = | ~ | ~* | ^~ ] uri {
 ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配规则：</p><ul><li><code>=</code> 精确匹配；</li><li><code>~</code> 正则匹配，区分大小写；</li><li><code>~*</code> 正则匹配，不区分大小写；</li><li><code>^~</code> 匹配到即停止搜索；</li></ul><p>匹配优先级： <code>=</code> &gt; <code>^~</code> &gt; <code>~</code> &gt; <code>~*</code> &gt; 不带任何字符。</p><p>实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name www.nginx-test.com<span class="token punctuation">;</span>
  
  <span class="token comment"># 只有当访问 www.nginx-test.com/match_all/ 时才会匹配到/usr/share/nginx/html/match_all/index.html</span>
  location <span class="token operator">=</span> /match_all/ <span class="token punctuation">{</span>
      root /usr/share/nginx/html
      index index.html
  <span class="token punctuation">}</span>
  
  <span class="token comment"># 当访问 www.nginx-test.com/1.jpg 等路径时会去 /usr/share/nginx/images/1.jpg 找对应的资源</span>
  location ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpeg<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>svg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
      root /usr/share/nginx/images<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment"># 当访问 www.nginx-test.com/bbs/ 时会匹配上 /usr/share/nginx/html/bbs/index.html</span>
  location ^~ /bbs/ <span class="token punctuation">{</span>
      root /usr/share/nginx/html<span class="token punctuation">;</span>
      index index.html index.htm<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-7-1-location-中的反斜线" tabindex="-1"><a class="header-anchor" href="#_6-7-1-location-中的反斜线" aria-hidden="true">#</a> 6.7.1 location 中的反斜线</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /test {
 ...
}

location /test/ {
 ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不带 <code>/</code> 当访问 <code>www.nginx-test.com/test</code> 时， <code>Nginx</code> 先找是否有 <code>test</code> 目录，如果有则找 <code>test</code> 目录下的 <code>index.html</code> ；如果没有 <code>test</code> 目录， <code>nginx</code> 则会找是否有 <code>test</code> 文件。</li><li>带 <code>/</code> 当访问 <code>www.nginx-test.com/test</code> 时， <code>Nginx</code> 先找是否有 <code>test</code> 目录，如果有则找 <code>test</code> 目录下的 <code>index.html</code> ，如果没有它也不会去找是否存在 <code>test</code> 文件。</li></ul><h4 id="_6-7-2-return" tabindex="-1"><a class="header-anchor" href="#_6-7-2-return" aria-hidden="true">#</a> 6.7.2 return</h4><p>停止处理请求，直接返回响应码或重定向到其他 <code>URL</code> ；执行 <code>return</code> 指令后， <code>location</code> 中后续指令将不会被执行。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">return</span> <span class="token value attr-value">code [text];</span>
<span class="token key attr-name">return</span> <span class="token value attr-value">code URL;</span>
<span class="token key attr-name">return</span> <span class="token value attr-value">URL;</span>

例如：
<span class="token key attr-name">location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">    return</span> <span class="token value attr-value">404; # 直接返回状态码</span>
}

<span class="token key attr-name">location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">    return</span> <span class="token value attr-value">404 &quot;pages not found&quot;; # 返回状态码 + 一段文本</span>
}

<span class="token key attr-name">location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">    return</span> <span class="token value attr-value">302 /bbs ; # 返回状态码 + 重定向地址</span>
}

<span class="token key attr-name">location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">    return</span> <span class="token value attr-value">https://www.baidu.com ; # 返回重定向地址</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-7-3-rewrite" tabindex="-1"><a class="header-anchor" href="#_6-7-3-rewrite" aria-hidden="true">#</a> 6.7.3 rewrite</h4><p>根据指定正则表达式匹配规则，重写 <code>URL</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：rewrite 正则表达式 要替换的内容 [flag];

上下文：server、location、if

示例：rewirte /images/(.*\\.jpg)$ /pic/$1; # $1是前面括号(.*\\.jpg)的反向引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>flag</code> 可选值的含义：</p><ul><li><code>last</code> 重写后的 <code>URL</code> 发起新请求，再次进入 <code>server</code> 段，重试 <code>location</code> 的中的匹配；</li><li><code>break</code> 直接使用重写后的 <code>URL</code> ，不再匹配其它 <code>location</code> 中语句；</li><li><code>redirect</code> 返回302临时重定向；</li><li><code>permanent</code> 返回301永久重定向；</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>server{
<span class="token key attr-name">  listen</span> <span class="token value attr-value">80;</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">fe.lion.club; # 要在本地hosts文件进行配置</span>
<span class="token key attr-name">  root</span> <span class="token value attr-value">html;</span>
<span class="token key attr-name">  location</span> <span class="token value attr-value">/search {</span>
<span class="token key attr-name">      rewrite</span> <span class="token value attr-value">^/(.*) https://www.baidu.com redirect;</span>
  }
  
<span class="token key attr-name">  location</span> <span class="token value attr-value">/images {</span>
<span class="token key attr-name">      rewrite</span> <span class="token value attr-value">/images/(.*) /pics/$1;</span>
  }
  
<span class="token key attr-name">  location</span> <span class="token value attr-value">/pics {</span>
<span class="token key attr-name">      rewrite</span> <span class="token value attr-value">/pics/(.*) /photos/$1;</span>
  }
  
<span class="token key attr-name">  location</span> <span class="token value attr-value">/photos {</span>
  
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照这个配置我们来分析：</p><ul><li>当访问 <code>fe.lion.club/search</code> 时，会自动帮我们重定向到 <code>https://www.baidu.com</code>。</li><li>当访问 <code>fe.lion.club/images/1.jpg</code> 时，第一步重写 <code>URL</code> 为 <code>fe.lion.club/pics/1.jpg</code> ，找到 <code>pics</code> 的 <code>location</code> ，继续重写 <code>URL</code> 为 <code>fe.lion.club/photos/1.jpg</code> ，找到 <code>/photos</code> 的 <code>location</code> 后，去 <code>html/photos</code> 目录下寻找 <code>1.jpg</code> 静态资源。</li></ul><h3 id="_6-8-if-指令" tabindex="-1"><a class="header-anchor" href="#_6-8-if-指令" aria-hidden="true">#</a> 6.8 if 指令</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">语法：if</span> <span class="token value attr-value">(condition) {...}</span>

上下文：server、location

示例：
<span class="token key attr-name">if($http_user_agent</span> <span class="token value attr-value">~ Chrome){</span>
<span class="token key attr-name">  rewrite</span> <span class="token value attr-value">/(.*)/browser/$1 break;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>condition</code> 判断条件：</p><ul><li><code>$variable</code> 仅为变量时，值为空或以0开头字符串都会被当做 <code>false</code> 处理；</li><li><code>=</code> 或 <code>!=</code> 相等或不等；</li><li><code>~</code> 正则匹配；</li><li><code>! ~</code> 非正则匹配；</li><li><code>~*</code> 正则匹配，不区分大小写；</li><li><code>-f</code> 或 <code>! -f</code> 检测文件存在或不存在；</li><li><code>-d</code> 或 <code>! -d</code> 检测目录存在或不存在；</li><li><code>-e</code> 或 <code>! -e</code> 检测文件、目录、符号链接等存在或不存在；</li><li><code>-x</code> 或 <code>! -x</code> 检测文件可以执行或不可执行；</li></ul><p>实例：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  listen</span> <span class="token value attr-value">8080;</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">localhost;</span>
<span class="token key attr-name">  root</span> <span class="token value attr-value">html;</span>
  
<span class="token key attr-name">  location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">   if</span> <span class="token value attr-value">( $uri = &quot;/images/&quot; ){</span>
<span class="token key attr-name">     rewrite</span> <span class="token value attr-value">(.*) /pics/ break;</span>
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问 <code>localhost:8080/images/</code> 时，会进入 <code>if</code> 判断里面执行 <code>rewrite</code> 命令。</p><h3 id="_6-9-autoindex" tabindex="-1"><a class="header-anchor" href="#_6-9-autoindex" aria-hidden="true">#</a> 6.9 autoindex</h3><p>用户请求以 <code>/</code> 结尾时，列出目录结构，可以用于快速搭建静态资源下载网站。</p><p><code>autoindex.conf</code> 配置信息：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  listen</span> <span class="token value attr-value">80;</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">fe.lion-test.club;</span>
  
<span class="token key attr-name">  location</span> <span class="token value attr-value">/download/ {</span>
<span class="token key attr-name">    root</span> <span class="token value attr-value">/opt/source;</span>
    
<span class="token key attr-name">    autoindex</span> <span class="token value attr-value">on; # 打开 autoindex，，可选参数有 on | off</span>
<span class="token key attr-name">    autoindex_exact_size</span> <span class="token value attr-value">on; # 修改为off，以KB、MB、GB显示文件大小，默认为on，以bytes显示出⽂件的确切⼤⼩</span>
<span class="token key attr-name">    autoindex_format</span> <span class="token value attr-value">html; # 以html的方式进行格式化，可选参数有 html | json | xml</span>
<span class="token key attr-name">    autoindex_localtime</span> <span class="token value attr-value">off; # 显示的⽂件时间为⽂件的服务器时间。默认为off，显示的⽂件时间为GMT时间</span>
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问 <code>fe.lion.com/download/</code> 时，会把服务器 <code>/opt/source/download/</code> 路径下的文件展示出来，如下图所示：</p><p><img src="`+p+`" alt="图片"></p><h3 id="_6-10-变量" tabindex="-1"><a class="header-anchor" href="#_6-10-变量" aria-hidden="true">#</a> 6.10 变量</h3><p><code>Nginx</code> 提供给使用者的变量非常多，但是终究是一个完整的请求过程所产生数据， <code>Nginx</code> 将这些数据以变量的形式提供给使用者。下面列举些项目中常用的变量：</p><table><thead><tr><th>变量名</th><th>含义</th></tr></thead><tbody><tr><td>remote_addr</td><td>客户端IP地址</td></tr><tr><td>remote_port</td><td>客户端端口</td></tr><tr><td>server_addr</td><td>服务端IP地址</td></tr><tr><td>server_port</td><td>服务端端口</td></tr><tr><td>server_protocol</td><td>服务端协议</td></tr><tr><td>binary_remote_addr</td><td>二进制格式的客户端IP地址</td></tr><tr><td>connection</td><td>TCP连接的序号，递增</td></tr><tr><td>connection_reques</td><td>TCP连接当前的请求数量</td></tr><tr><td>uri</td><td>请求的URL，不包含参数</td></tr><tr><td>request_uri</td><td>请求的URL,包含参数</td></tr><tr><td>scheme</td><td>协议名，nttp或https</td></tr><tr><td>request_method</td><td>请求方法</td></tr><tr><td>request_length</td><td>全部请求的长度，包含请求行、请求头、请求体</td></tr><tr><td>args</td><td>全部参数字符串</td></tr><tr><td>arg_参效名</td><td>获取特定参数值</td></tr><tr><td>is_args</td><td>URL中是否有参数，有的话返回？，否则返回空</td></tr><tr><td>query_string</td><td>与args相同</td></tr><tr><td>host</td><td>请求信息中的host，如果请求中没有Host行，则在请求头中找，最后使用nginx中设置的server_name。</td></tr><tr><td>http_user_agent</td><td>用户浏览器</td></tr><tr><td>http_referer</td><td>从哪些链接过来的请求</td></tr><tr><td>http_via</td><td>每经过一层代理服务器，都会添加相应的信息</td></tr><tr><td>http_cookie</td><td>获取用户cookie</td></tr><tr><td>request_time</td><td>处理请求已消耗的时间</td></tr><tr><td>https</td><td>是否开启了https，是则返回on，否则返回空</td></tr><tr><td>request_filename</td><td>磁盘文件系统待访问文件的完整路径</td></tr><tr><td>document_root</td><td>由URI和root/alias规则生成的文件夹路径</td></tr><tr><td>limit_rate</td><td>返回响应时的速度上限值</td></tr></tbody></table><p>实例演示：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>server{
<span class="token key attr-name"> listen</span> <span class="token value attr-value">8081;</span>
<span class="token key attr-name"> server_name</span> <span class="token value attr-value">var.lion-test.club;</span>
<span class="token key attr-name"> root</span> <span class="token value attr-value">/usr/share/nginx/html;</span>
<span class="token key attr-name"> location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">  return</span> <span class="token value attr-value">200 &quot;</span>
<span class="token key attr-name">remote_addr</span><span class="token punctuation">:</span> <span class="token value attr-value">$remote_addr</span>
<span class="token key attr-name">remote_port</span><span class="token punctuation">:</span> <span class="token value attr-value">$remote_port</span>
<span class="token key attr-name">server_addr</span><span class="token punctuation">:</span> <span class="token value attr-value">$server_addr</span>
<span class="token key attr-name">server_port</span><span class="token punctuation">:</span> <span class="token value attr-value">$server_port</span>
<span class="token key attr-name">server_protocol</span><span class="token punctuation">:</span> <span class="token value attr-value">$server_protocol</span>
<span class="token key attr-name">binary_remote_addr</span><span class="token punctuation">:</span> <span class="token value attr-value">$binary_remote_addr</span>
<span class="token key attr-name">connection</span><span class="token punctuation">:</span> <span class="token value attr-value">$connection</span>
<span class="token key attr-name">uri</span><span class="token punctuation">:</span> <span class="token value attr-value">$uri</span>
<span class="token key attr-name">request_uri</span><span class="token punctuation">:</span> <span class="token value attr-value">$request_uri</span>
<span class="token key attr-name">scheme</span><span class="token punctuation">:</span> <span class="token value attr-value">$scheme</span>
<span class="token key attr-name">request_method</span><span class="token punctuation">:</span> <span class="token value attr-value">$request_method</span>
<span class="token key attr-name">request_length</span><span class="token punctuation">:</span> <span class="token value attr-value">$request_length</span>
<span class="token key attr-name">args</span><span class="token punctuation">:</span> <span class="token value attr-value">$args</span>
<span class="token key attr-name">arg_pid</span><span class="token punctuation">:</span> <span class="token value attr-value">$arg_pid</span>
<span class="token key attr-name">is_args</span><span class="token punctuation">:</span> <span class="token value attr-value">$is_args</span>
<span class="token key attr-name">query_string</span><span class="token punctuation">:</span> <span class="token value attr-value">$query_string</span>
<span class="token key attr-name">host</span><span class="token punctuation">:</span> <span class="token value attr-value">$host</span>
<span class="token key attr-name">http_user_agent</span><span class="token punctuation">:</span> <span class="token value attr-value">$http_user_agent</span>
<span class="token key attr-name">http_referer</span><span class="token punctuation">:</span> <span class="token value attr-value">$http_referer</span>
<span class="token key attr-name">http_via</span><span class="token punctuation">:</span> <span class="token value attr-value">$http_via</span>
<span class="token key attr-name">request_time</span><span class="token punctuation">:</span> <span class="token value attr-value">$request_time</span>
<span class="token key attr-name">https</span><span class="token punctuation">:</span> <span class="token value attr-value">$https</span>
<span class="token key attr-name">request_filename</span><span class="token punctuation">:</span> <span class="token value attr-value">$request_filename</span>
<span class="token key attr-name">document_root</span><span class="token punctuation">:</span> <span class="token value attr-value">$document_root</span>
&quot;;
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们访问 <code>http://var.lion-test.club:8081/test?pid=121414&amp;cid=sadasd</code> 时，由于 <code>Nginx</code> 中写了 <code>return</code> 方法，因此 <code>chrome</code> 浏览器会默认为我们下载一个文件，下面展示的就是下载的文件内容：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">remote_addr</span><span class="token punctuation">:</span> <span class="token value attr-value">27.16.220.84</span>
<span class="token key attr-name">remote_port</span><span class="token punctuation">:</span> <span class="token value attr-value">56838</span>
<span class="token key attr-name">server_addr</span><span class="token punctuation">:</span> <span class="token value attr-value">172.17.0.2</span>
<span class="token key attr-name">server_port</span><span class="token punctuation">:</span> <span class="token value attr-value">8081</span>
<span class="token key attr-name">server_protocol</span><span class="token punctuation">:</span> <span class="token value attr-value">HTTP/1.1</span>
<span class="token key attr-name">binary_remote_addr</span><span class="token punctuation">:</span> <span class="token value attr-value">茉</span>
<span class="token key attr-name">connection</span><span class="token punctuation">:</span> <span class="token value attr-value">126</span>
<span class="token key attr-name">uri</span><span class="token punctuation">:</span> <span class="token value attr-value">/test/</span>
<span class="token key attr-name">request_uri</span><span class="token punctuation">:</span> <span class="token value attr-value">/test/?pid=121414&amp;cid=sadasd</span>
<span class="token key attr-name">scheme</span><span class="token punctuation">:</span> <span class="token value attr-value">http</span>
<span class="token key attr-name">request_method</span><span class="token punctuation">:</span> <span class="token value attr-value">GET</span>
<span class="token key attr-name">request_length</span><span class="token punctuation">:</span> <span class="token value attr-value">518</span>
<span class="token key attr-name">args</span><span class="token punctuation">:</span> <span class="token value attr-value">pid=121414&amp;cid=sadasd</span>
<span class="token key attr-name">arg_pid</span><span class="token punctuation">:</span> <span class="token value attr-value">121414</span>
<span class="token key attr-name">is_args</span><span class="token punctuation">:</span> <span class="token value attr-value">?</span>
<span class="token key attr-name">query_string</span><span class="token punctuation">:</span> <span class="token value attr-value">pid=121414&amp;cid=sadasd</span>
<span class="token key attr-name">host</span><span class="token punctuation">:</span> <span class="token value attr-value">var.lion-test.club</span>
<span class="token key attr-name">http_user_agent</span><span class="token punctuation">:</span> <span class="token value attr-value">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36</span>
<span class="token key attr-name">http_referer</span><span class="token punctuation">:</span> 
<span class="token key attr-name">http_via</span><span class="token punctuation">:</span> 
<span class="token key attr-name">request_time</span><span class="token punctuation">:</span> <span class="token value attr-value">0.000</span>
<span class="token key attr-name">https</span><span class="token punctuation">:</span> 
<span class="token key attr-name">request_filename</span><span class="token punctuation">:</span> <span class="token value attr-value">/usr/share/nginx/html/test/</span>
<span class="token key attr-name">document_root</span><span class="token punctuation">:</span> <span class="token value attr-value">/usr/share/nginx/html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Nginx</code> 的配置还有非常多，以上只是罗列了一些常用的配置。</p><h2 id="七、nginx-应用核心概念" tabindex="-1"><a class="header-anchor" href="#七、nginx-应用核心概念" aria-hidden="true">#</a> 七、Nginx 应用核心概念</h2><p>代理是在服务器和客户端之间假设的一层服务器，代理将接收客户端的请求并将它转发给服务器，然后将服务端的响应转发给客户端。不管是正向代理还是反向代理，实现的都是上面的功能。</p><p><img src="`+u+'" alt="图片"></p><h3 id="_7-1-正向代理" tabindex="-1"><a class="header-anchor" href="#_7-1-正向代理" aria-hidden="true">#</a> 7.1 正向代理</h3><blockquote><p>正向代理，意思是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。</p></blockquote><p>正向代理是为我们服务的，即为客户端服务的，客户端可以根据正向代理访问到它本身无法访问到的服务器资源。</p><p>正向代理对我们是透明的，对服务端是非透明的，即服务端并不知道自己收到的是来自代理的访问还是来自真实客户端的访问。</p><h3 id="_7-2-反向代理" tabindex="-1"><a class="header-anchor" href="#_7-2-反向代理" aria-hidden="true">#</a> 7.2 反向代理</h3><blockquote><p>反向代理（Reverse Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。</p></blockquote><p>反向代理是为服务端服务的，反向代理可以帮助服务器接收来自客户端的请求，帮助服务器做请求转发，负载均衡等。</p><p>反向代理对服务端是透明的，对我们是非透明的，即我们并不知道自己访问的是代理服务器，而服务器知道反向代理在为他服务。</p><p>反向代理的优势：</p><ul><li>隐藏真实服务器；</li><li>负载均衡便于横向扩充后端动态服务；</li><li>动静分离，提升系统健壮性；</li></ul><p>那么“动静分离”是什么？负载均衡又是什么？</p><h3 id="_7-3-动静分离" tabindex="-1"><a class="header-anchor" href="#_7-3-动静分离" aria-hidden="true">#</a> 7.3 动静分离</h3><p>动静分离是指在 <code>web</code> 服务器架构中，将静态页面与动态页面或者静态内容接口和动态内容接口分开不同系统访问的架构设计方法，进而提示整个服务的访问性和可维护性。</p><p><img src="'+m+'" alt="图片"></p><p>一般来说，都需要将动态资源和静态资源分开，由于 <code>Nginx</code> 的高并发和静态资源缓存等特性，经常将静态资源部署在 <code>Nginx</code> 上。如果请求的是静态资源，直接到静态资源目录获取资源，如果是动态资源的请求，则利用反向代理的原理，把请求转发给对应后台应用去处理，从而实现动静分离。</p><p>使用前后端分离后，可以很大程度提升静态资源的访问速度，即使动态服务不可用，静态资源的访问也不会受到影响。</p><h3 id="_7-4-负载均衡" tabindex="-1"><a class="header-anchor" href="#_7-4-负载均衡" aria-hidden="true">#</a> 7.4 负载均衡</h3><p>一般情况下，客户端发送多个请求到服务器，服务器处理请求，其中一部分可能要操作一些资源比如数据库、静态资源等，服务器处理完毕后，再将结果返回给客户端。</p><p>这种模式对于早期的系统来说，功能要求不复杂，且并发请求相对较少的情况下还能胜任，成本也低。随着信息数量不断增长，访问量和数据量飞速增长，以及系统业务复杂度持续增加，这种做法已无法满足要求，并发量特别大时，服务器容易崩。</p><p>很明显这是由于服务器性能的瓶颈造成的问题，除了堆机器之外，最重要的做法就是负载均衡。</p><p>请求爆发式增长的情况下，单个机器性能再强劲也无法满足要求了，这个时候集群的概念产生了，单个服务器解决不了的问题，可以使用多个服务器，然后将请求分发到各个服务器上，将负载分发到不同的服务器，这就是负载均衡，核心是「分摊压力」。 <code>Nginx</code> 实现负载均衡，一般来说指的是将请求转发给服务器集群。</p><p>举个具体的例子，晚高峰乘坐地铁的时候，入站口经常会有地铁工作人员大喇叭“请走 <code>B</code> 口， <code>B</code> 口人少车空....”，这个工作人员的作用就是负载均衡。</p><p><img src="'+b+'" alt="图片"></p><p><code>Nginx</code> 实现负载均衡的策略：</p><ul><li>轮询策略：默认情况下采用的策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器压力太大，出现延迟，会影响所有分配在这台服务器下的用户。</li><li>最小连接数策略：将请求优先分配给压力较小的服务器，它可以平衡每个队列的长度，并避免向压力大的服务器添加更多的请求。</li><li>最快响应时间策略：优先分配给响应时间最短的服务器。</li><li>客户端 <code>ip</code> 绑定策略：来自同一个 <code>ip</code> 的请求永远只分配一台服务器，有效解决了动态网页存在的 <code>session</code> 共享问题。</li></ul><h2 id="八、nginx-实战配置" tabindex="-1"><a class="header-anchor" href="#八、nginx-实战配置" aria-hidden="true">#</a> 八、Nginx 实战配置</h2><p>在配置反向代理和负载均衡等等功能之前，有两个核心模块是我们必须要掌握的，这两个模块应该说是 <code>Nginx</code> 应用配置中的核心，它们分别是： <code>upstream</code> 、<code>proxy_pass</code> 。</p><h3 id="_8-1-upstream" tabindex="-1"><a class="header-anchor" href="#_8-1-upstream" aria-hidden="true">#</a> 8.1 upstream</h3><p>用于定义上游服务器（指的就是后台提供的应用服务器）的相关信息。</p><p><img src="'+h+`" alt="图片"></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">语法：upstream</span> <span class="token value attr-value">name {</span>
 ...
}

上下文：http

示例：
<span class="token key attr-name">upstream</span> <span class="token value attr-value">back_end_server{</span>
<span class="token key attr-name">  server</span> <span class="token value attr-value">192.168.100.33:8081</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>upstream</code> 内可使用的指令：</p><ul><li><code>server</code> 定义上游服务器地址；</li><li><code>zone</code> 定义共享内存，用于跨 <code>worker</code> 子进程；</li><li><code>keepalive</code> 对上游服务启用长连接；</li><li><code>keepalive_requests</code> 一个长连接最多请求 <code>HTTP</code> 的个数；</li><li><code>keepalive_timeout</code> 空闲情形下，一个长连接的超时时长；</li><li><code>hash</code> 哈希负载均衡算法；</li><li><code>ip_hash</code> 依据 <code>IP</code> 进行哈希计算的负载均衡算法；</li><li><code>least_conn</code> 最少连接数负载均衡算法；</li><li><code>least_time</code> 最短响应时间负载均衡算法；</li><li><code>random</code> 随机负载均衡算法；</li></ul><h4 id="_8-1-1-server" tabindex="-1"><a class="header-anchor" href="#_8-1-1-server" aria-hidden="true">#</a> 8.1.1 server</h4><p>定义上游服务器地址。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">语法：server</span> <span class="token value attr-value">address [parameters]</span>
上下文：upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>parameters</code> 可选值：</p><ul><li><code>weight=number</code> 权重值，默认为1；</li><li><code>max_conns=number</code> 上游服务器的最大并发连接数；</li><li><code>fail_timeout=time</code> 服务器不可用的判定时间；</li><li><code>max_fails=numer</code> 服务器不可用的检查次数；</li><li><code>backup</code> 备份服务器，仅当其他服务器都不可用时才会启用；</li><li><code>down</code> 标记服务器长期不可用，离线维护；</li></ul><h4 id="_8-1-2-keepalive" tabindex="-1"><a class="header-anchor" href="#_8-1-2-keepalive" aria-hidden="true">#</a> 8.1.2 keepalive</h4><p>限制每个 <code>worker</code> 子进程与上游服务器空闲长连接的最大数量。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">keepalive</span> <span class="token value attr-value">connections;</span>
上下文：upstream
<span class="token key attr-name">示例：keepalive</span> <span class="token value attr-value">16;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-3-keepalive-requests" tabindex="-1"><a class="header-anchor" href="#_8-1-3-keepalive-requests" aria-hidden="true">#</a> 8.1.3 keepalive_requests</h4><p>单个长连接可以处理的最多 <code>HTTP</code> 请求个数。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">语法：keepalive_requests</span> <span class="token value attr-value">number;</span>
<span class="token key attr-name">默认值：keepalive_requests</span> <span class="token value attr-value">100;</span>
上下文：upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-4-keepalive-timeout" tabindex="-1"><a class="header-anchor" href="#_8-1-4-keepalive-timeout" aria-hidden="true">#</a> 8.1.4 keepalive_timeout</h4><p>空闲长连接的最长保持时间。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">语法：keepalive_timeout</span> <span class="token value attr-value">time;</span>
<span class="token key attr-name">默认值：keepalive_timeout</span> <span class="token value attr-value">60s;</span>
上下文：upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-5-配置实例" tabindex="-1"><a class="header-anchor" href="#_8-1-5-配置实例" aria-hidden="true">#</a> 8.1.5 配置实例</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">upstream</span> <span class="token value attr-value">back_end{</span>
<span class="token key attr-name">  server</span> <span class="token value attr-value">127.0.0.1:8081 weight=3 max_conns=1000 fail_timeout=10s max_fails=2;</span>
<span class="token key attr-name">  keepalive</span> <span class="token value attr-value">32;</span>
<span class="token key attr-name">  keepalive_requests</span> <span class="token value attr-value">50;</span>
<span class="token key attr-name">  keepalive_timeout</span> <span class="token value attr-value">30s;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-proxy-pass" tabindex="-1"><a class="header-anchor" href="#_8-2-proxy-pass" aria-hidden="true">#</a> 8.2 proxy_pass</h3><p>用于配置代理服务器。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">语法：proxy_pass</span> <span class="token value attr-value">URL;</span>

上下文：location、if、limit_except

示例：
<span class="token key attr-name">proxy_pass</span> <span class="token value attr-value">http://127.0.0.1:8081</span>
<span class="token key attr-name">proxy_pass</span> <span class="token value attr-value">http://127.0.0.1:8081/proxy</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>URL</code> 参数原则</p><ol><li><code>URL</code> 必须以 <code>http</code> 或 <code>https</code> 开头；</li><li><code>URL</code> 中可以携带变量；</li><li><code>URL</code> 中是否带 <code>URI</code> ，会直接影响发往上游请求的 <code>URL</code> ；</li></ol><p>接下来让我们来看看两种常见的 <code>URL</code> 用法：</p><ol><li><code>proxy_pass http://192.168.100.33:8081</code></li><li><code>proxy_pass http://192.168.100.33:8081/</code></li></ol><p>这两种用法的区别就是带 <code>/</code> 和不带 <code>/</code> ，在配置代理时它们的区别可大了：</p><ul><li>不带 <code>/</code> 意味着 <code>Nginx</code> 不会修改用户 <code>URL</code> ，而是直接透传给上游的应用服务器；</li><li>带 <code>/</code> 意味着 <code>Nginx</code> 会修改用户 <code>URL</code> ，修改方法是将 <code>location</code> 后的 <code>URL</code> 从用户 <code>URL</code> 中删除；</li></ul><p>不带 <code>/</code> 的用法：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">location</span> <span class="token value attr-value">/bbs/{</span>
<span class="token key attr-name">  proxy_pass</span> <span class="token value attr-value">http://127.0.0.1:8080;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析：</p><ol><li>用户请求 <code>URL</code> ： <code>/bbs/abc/test.html</code></li><li>请求到达 <code>Nginx</code> 的 <code>URL</code> ： <code>/bbs/abc/test.html</code></li><li>请求到达上游应用服务器的 <code>URL</code> ： <code>/bbs/abc/test.html</code></li></ol><p>带 <code>/</code> 的用法：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">location</span> <span class="token value attr-value">/bbs/{</span>
<span class="token key attr-name">  proxy_pass</span> <span class="token value attr-value">http://127.0.0.1:8080/;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析：</p><ol><li>用户请求 <code>URL</code> ： <code>/bbs/abc/test.html</code></li><li>请求到达 <code>Nginx</code> 的 <code>URL</code> ： <code>/bbs/abc/test.html</code></li><li>请求到达上游应用服务器的 <code>URL</code> ： <code>/abc/test.html</code></li></ol><p>并没有拼接上 <code>/bbs</code> ，这点和 <code>root</code> 与 <code>alias</code> 之间的区别是保持一致的。</p><h3 id="_8-3-配置反向代理" tabindex="-1"><a class="header-anchor" href="#_8-3-配置反向代理" aria-hidden="true">#</a> 8.3 配置反向代理</h3><p>这里假设存在两台云服务器，它们的 <code>IP</code> 分别是： <code>121.42.11.34</code> 与 <code>121.5.180.193</code> 。</p><p>我们把 <code>121.42.11.34</code> 服务器作为上游服务器，做如下配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># /etc/nginx/conf.d/proxy.conf</span>
server{
<span class="token key attr-name">  listen</span> <span class="token value attr-value">8080;</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">localhost;</span>
  
<span class="token key attr-name">  location</span> <span class="token value attr-value">/proxy/ {</span>
<span class="token key attr-name">    root</span> <span class="token value attr-value">/usr/share/nginx/html/proxy;</span>
<span class="token key attr-name">    index</span> <span class="token value attr-value">index.html;</span>
  }
}

<span class="token comment"># /usr/share/nginx/html/proxy/index.html</span>
<span class="token key attr-name">&lt;h1&gt;</span> <span class="token value attr-value">121.42.11.34 proxy html &lt;/h1&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后重启 <code>Nginx</code> 服务器 <code>nginx -s reload</code> 。</p><p>把 <code>121.5.180.193</code> 服务器作为代理服务器，做如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /etc/nginx/conf.d/proxy.conf
upstream back_end {
  server 121.42.11.34:8080 weight=2 max_conns=1000 fail_timeout=10s max_fails=3;
  keepalive 32;
  keepalive_requests 80;
  keepalive_timeout 20s;
}

server {
  listen 80;
  server_name proxy.lion.club;
  location /proxy {
    proxy_pass http://back_end/proxy;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本地机器要访问 <code>proxy.lion.club</code> 域名，因此需要配置本地 <code>hosts</code> ，通过命令：<code>vim /etc/hosts</code> 进入配置文件，添加如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>121.5.180.193 proxy.lion.club
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+`" alt="图片"></p><p>分析：</p><ol><li>当访问 <code>proxy.lion.club/proxy</code> 时通过 <code>upstream</code> 的配置找到 <code>121.42.11.34:8080</code> ；</li><li>因此访问地址变为 <code>http://121.42.11.34:8080/proxy</code> ；</li><li>连接到 <code>121.42.11.34</code> 服务器，找到 <code>8080</code> 端口提供的 <code>server</code> ；</li><li>通过 <code>server</code> 找到 <code>/usr/share/nginx/html/proxy/index.html</code> 资源，最终展示出来。</li></ol><h3 id="_8-4-配置负载均衡" tabindex="-1"><a class="header-anchor" href="#_8-4-配置负载均衡" aria-hidden="true">#</a> 8.4 配置负载均衡</h3><p>配置负载均衡主要是要使用 <code>upstream</code> 指令。</p><p>我们把 <code>121.42.11.34</code> 服务器作为上游服务器，做如下配置（ <code>/etc/nginx/conf.d/balance.conf</code> ）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
  listen 8020;
  location / {
   return 200 &#39;return 8020 \\n&#39;;
  }
}

server{
  listen 8030;
  location / {
   return 200 &#39;return 8030 \\n&#39;;
  }
}

server{
  listen 8040;
  location / {
   return 200 &#39;return 8040 \\n&#39;;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后：</p><ol><li><code>nginx -t</code> 检测配置是否正确；</li><li><code>nginx -s reload</code> 重启 <code>Nginx</code> 服务器；</li><li>执行 <code>ss -nlt</code> 命令查看端口是否被占用，从而判断 <code>Nginx</code> 服务是否正确启动。</li></ol><p>把 <code>121.5.180.193</code> 服务器作为代理服务器，做如下配置（ <code>/etc/nginx/conf.d/balance.conf</code> ）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream demo_server {
  server 121.42.11.34:8020;
  server 121.42.11.34:8030;
  server 121.42.11.34:8040;
}

server {
  listen 80;
  server_name balance.lion.club;
  
  location /balance/ {
   proxy_pass http://demo_server;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后重启 <code>Nginx</code> 服务器。并且在需要访问的客户端配置好 <code>ip</code> 和域名的映射关系。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /etc/hosts
121.5.180.193 balance.lion.club
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户端机器执行 <code>curl http://balance.lion.club/balance/</code> 命令：</p><p><img src="`+x+`" alt="图片"></p><p>不难看出，负载均衡的配置已经生效了，每次给我们分发的上游服务器都不一样。就是通过简单的轮询策略进行上游服务器分发。</p><p>接下来，我们再来了解下 <code>Nginx</code> 的其它分发策略。</p><h4 id="_8-4-1-hash-算法" tabindex="-1"><a class="header-anchor" href="#_8-4-1-hash-算法" aria-hidden="true">#</a> 8.4.1 hash 算法</h4><p>通过制定关键字作为 <code>hash key</code> ，基于 <code>hash</code> 算法映射到特定的上游服务器中。关键字可以包含有变量、字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream demo_server {
  hash $request_uri;
  server 121.42.11.34:8020;
  server 121.42.11.34:8030;
  server 121.42.11.34:8040;
}

server {
  listen 80;
  server_name balance.lion.club;
  
  location /balance/ {
   proxy_pass http://demo_server;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hash $request_uri</code> 表示使用 <code>request_uri</code> 变量作为 <code>hash</code> 的 <code>key</code> 值，只要访问的 <code>URI</code> 保持不变，就会一直分发给同一台服务器。</p><h4 id="_8-4-2-ip-hash" tabindex="-1"><a class="header-anchor" href="#_8-4-2-ip-hash" aria-hidden="true">#</a> 8.4.2 ip_hash</h4><p>根据客户端的请求 <code>ip</code> 进行判断，只要 <code>ip</code> 地址不变就永远分配到同一台主机。它可以有效解决后台服务器 <code>session</code> 保持的问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream demo_server {
  ip_hash;
  server 121.42.11.34:8020;
  server 121.42.11.34:8030;
  server 121.42.11.34:8040;
}

server {
  listen 80;
  server_name balance.lion.club;
  
  location /balance/ {
   proxy_pass http://demo_server;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-4-3-最少连接数算法" tabindex="-1"><a class="header-anchor" href="#_8-4-3-最少连接数算法" aria-hidden="true">#</a> 8.4.3 最少连接数算法</h4><p>各个 <code>worker</code> 子进程通过读取共享内存的数据，来获取后端服务器的信息。来挑选一台当前已建立连接数最少的服务器进行分配请求。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：least_conn;

上下文：upstream;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream demo_server {
  zone test 10M; # zone可以设置共享内存空间的名字和大小
  least_conn;
  server 121.42.11.34:8020;
  server 121.42.11.34:8030;
  server 121.42.11.34:8040;
}

server {
  listen 80;
  server_name balance.lion.club;
  
  location /balance/ {
   proxy_pass http://demo_server;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后你会发现，负载均衡的配置其实一点都不复杂。</p><h3 id="_8-5-配置缓存" tabindex="-1"><a class="header-anchor" href="#_8-5-配置缓存" aria-hidden="true">#</a> 8.5 配置缓存</h3><p>缓存可以非常有效的提升性能，因此不论是客户端（浏览器），还是代理服务器（ <code>Nginx</code> ），乃至上游服务器都多少会涉及到缓存。可见缓存在每个环节都是非常重要的。下面让我们来学习 <code>Nginx</code> 中如何设置缓存策略。</p><h4 id="_8-5-1-proxy-cache" tabindex="-1"><a class="header-anchor" href="#_8-5-1-proxy-cache" aria-hidden="true">#</a> 8.5.1 proxy_cache</h4><p>存储一些之前被访问过、而且可能将要被再次访问的资源，使用户可以直接从代理服务器获得，从而减少上游服务器的压力，加快整个访问速度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：proxy_cache zone | off ; # zone 是共享内存的名称

默认值：proxy_cache off;

上下文：http、server、location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-5-2-proxy-cache-path" tabindex="-1"><a class="header-anchor" href="#_8-5-2-proxy-cache-path" aria-hidden="true">#</a> 8.5.2 proxy_cache_path</h4><p>设置缓存文件的存放路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：proxy_cache_path path [level=levels] ...可选参数省略，下面会详细列举

默认值：proxy_cache_path off

上下文：http
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数含义：</p><ul><li><code>path</code> 缓存文件的存放路径；</li><li><code>level path</code> 的目录层级；</li><li><code>keys_zone</code> 设置共享内存；</li><li><code>inactive</code> 在指定时间内没有被访问，缓存会被清理，默认10分钟；</li></ul><h4 id="_8-5-3-proxy-cache-key" tabindex="-1"><a class="header-anchor" href="#_8-5-3-proxy-cache-key" aria-hidden="true">#</a> 8.5.3 proxy_cache_key</h4><p>设置缓存文件的 <code>key</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：proxy_cache_key

默认值：proxy_cache_key $scheme$proxy_host$request_uri;

上下文：http、server、location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-5-4-proxy-cache-valid" tabindex="-1"><a class="header-anchor" href="#_8-5-4-proxy-cache-valid" aria-hidden="true">#</a> 8.5.4 proxy_cache_valid</h4><p>配置什么状态码可以被缓存，以及缓存时长。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：proxy_cache_valid [code...] time;

上下文：http、server、location

配置示例：proxy_cache_valid 200 304 2m;; # 说明对于状态为200和304的缓存文件的缓存时间是2分钟
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-5-5-proxy-no-cache" tabindex="-1"><a class="header-anchor" href="#_8-5-5-proxy-no-cache" aria-hidden="true">#</a> 8.5.5 proxy_no_cache</h4><p>定义相应保存到缓存的条件，如果字符串参数的至少一个值不为空且不等于“ 0”，则将不保存该响应到缓存。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：proxy_no_cache string;

上下文：http、server、location

示例：proxy_no_cache $http_pragma    $http_authorization;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-5-6-proxy-cache-bypass" tabindex="-1"><a class="header-anchor" href="#_8-5-6-proxy-cache-bypass" aria-hidden="true">#</a> 8.5.6 proxy_cache_bypass</h4><p>定义条件，在该条件下将不会从缓存中获取响应。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：proxy_cache_bypass string;

上下文：http、server、location

示例：proxy_cache_bypass $http_pragma    $http_authorization;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-5-7-upstream-cache-status-变量" tabindex="-1"><a class="header-anchor" href="#_8-5-7-upstream-cache-status-变量" aria-hidden="true">#</a> 8.5.7 upstream_cache_status 变量</h4><p>它存储了缓存是否命中的信息，会设置在响应头信息中，在调试中非常有用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MISS: 未命中缓存
HIT： 命中缓存
EXPIRED: 缓存过期
STALE: 命中了陈旧缓存
REVALIDDATED: Nginx验证陈旧缓存依然有效
UPDATING: 内容陈旧，但正在更新
BYPASS: X响应从原始服务器获取
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-5-8-配置实例" tabindex="-1"><a class="header-anchor" href="#_8-5-8-配置实例" aria-hidden="true">#</a> 8.5.8 配置实例</h4><p>我们把 <code>121.42.11.34</code> 服务器作为上游服务器，做如下配置（ <code>/etc/nginx/conf.d/cache.conf</code> ）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 1010;
  root /usr/share/nginx/html/1010;
  location / {
   index index.html;
  }
}

server {
  listen 1020;
  root /usr/share/nginx/html/1020;
  location / {
   index index.html;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把 <code>121.5.180.193</code> 服务器作为代理服务器，做如下配置（ <code>/etc/nginx/conf.d/cache.conf</code> ）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_cache_path /etc/nginx/cache_temp levels=2:2 keys_zone=cache_zone:30m max_size=2g inactive=60m use_temp_path=off;

upstream cache_server{
  server 121.42.11.34:1010;
  server 121.42.11.34:1020;
}

server {
  listen 80;
  server_name cache.lion.club;
  location / {
    proxy_cache cache_zone; # 设置缓存内存，上面配置中已经定义好的
    proxy_cache_valid 200 5m; # 缓存状态为200的请求，缓存时长为5分钟
    proxy_cache_key $request_uri; # 缓存文件的key为请求的URI
    add_header Nginx-Cache-Status $upstream_cache_status # 把缓存状态设置为头部信息，响应给客户端
    proxy_pass http://cache_server; # 代理转发
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存就是这样配置，我们可以在 <code>/etc/nginx/cache_temp</code> 路径下找到相应的缓存文件。</p><p><strong>「对于一些实时性要求非常高的页面或数据来说，就不应该去设置缓存，下面来看看如何配置不缓存的内容。」</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...

server {
  listen 80;
  server_name cache.lion.club;
  # URI 中后缀为 .txt 或 .text 的设置变量值为 &quot;no cache&quot;
  if ($request_uri ~ \\.(txt|text)$) {
   set $cache_name &quot;no cache&quot;
  }
  
  location / {
    proxy_no_cache $cache_name; # 判断该变量是否有值，如果有值则不进行缓存，如果没有值则进行缓存
    proxy_cache cache_zone; # 设置缓存内存
    proxy_cache_valid 200 5m; # 缓存状态为200的请求，缓存时长为5分钟
    proxy_cache_key $request_uri; # 缓存文件的key为请求的URI
    add_header Nginx-Cache-Status $upstream_cache_status # 把缓存状态设置为头部信息，响应给客户端
    proxy_pass http://cache_server; # 代理转发
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-https" tabindex="-1"><a class="header-anchor" href="#_8-6-https" aria-hidden="true">#</a> 8.6 HTTPS</h3><p>在学习如何配置 <code>HTTPS</code> 之前，我们先来简单回顾下 <code>HTTPS</code> 的工作流程是怎么样的？它是如何进行加密保证安全的？</p><h4 id="_8-6-1-https-工作流程" tabindex="-1"><a class="header-anchor" href="#_8-6-1-https-工作流程" aria-hidden="true">#</a> 8.6.1 HTTPS 工作流程</h4><ol><li>客户端（浏览器）访问 <code>https://www.baidu.com</code> 百度网站；</li><li>百度服务器返回 <code>HTTPS</code> 使用的 <code>CA</code> 证书；</li><li>浏览器验证 <code>CA</code> 证书是否为合法证书；</li><li>验证通过，证书合法，生成一串随机数并使用公钥（证书中提供的）进行加密；</li><li>发送公钥加密后的随机数给百度服务器；</li><li>百度服务器拿到密文，通过私钥进行解密，获取到随机数（公钥加密，私钥解密，反之也可以）；</li><li>百度服务器把要发送给浏览器的内容，使用随机数进行加密后传输给浏览器；</li><li>此时浏览器可以使用随机数进行解密，获取到服务器的真实传输内容；</li></ol><p>这就是 <code>HTTPS</code> 的基本运作原理，使用对称加密和非对称加密配合使用，保证传输内容的安全性。</p><h4 id="_8-6-2-配置证书" tabindex="-1"><a class="header-anchor" href="#_8-6-2-配置证书" aria-hidden="true">#</a> 8.6.2 配置证书</h4><p>下载证书的压缩文件，里面有个 <code>Nginx</code> 文件夹，把 <code>xxx.crt</code> 和 <code>xxx.key</code> 文件拷贝到服务器目录，再进行如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 443 ssl http2 default_server;   # SSL 访问端口号为 443
  server_name lion.club;         # 填写绑定证书的域名(我这里是随便写的)
  ssl_certificate /etc/nginx/https/lion.club_bundle.crt;   # 证书地址
  ssl_certificate_key /etc/nginx/https/lion.club.key;      # 私钥地址
  ssl_session_timeout 10m;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # 支持ssl协议版本，默认为后三个，主流版本是[TLSv1.2]
 
  location / {
    root         /usr/share/nginx/html;
    index        index.html index.htm;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此配置后就能正常访问 <code>HTTPS</code> 版的网站了。</p><h3 id="_8-7-配置跨域-cors" tabindex="-1"><a class="header-anchor" href="#_8-7-配置跨域-cors" aria-hidden="true">#</a> 8.7 配置跨域 CORS</h3><p>先简单回顾下跨域究竟是怎么回事。</p><h4 id="_8-7-1-跨域的定义" tabindex="-1"><a class="header-anchor" href="#_8-7-1-跨域的定义" aria-hidden="true">#</a> 8.7.1 跨域的定义</h4><p>同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。通常不允许不同源间的读操作。</p><h4 id="_8-7-2-同源的定义" tabindex="-1"><a class="header-anchor" href="#_8-7-2-同源的定义" aria-hidden="true">#</a> 8.7.2 同源的定义</h4><p>如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。</p><p>下面给出了与 URL <code>http://store.company.com/dir/page.html</code> 的源进行对比的示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://store.company.com/dir2/other.html 同源
https://store.company.com/secure.html 不同源，协议不同
http://store.company.com:81/dir/etc.html 不同源，端口不同
http://news.company.com/dir/other.html 不同源，主机不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同源会有如下限制：</p><ul><li><code>Web</code> 数据层面，同源策略限制了不同源的站点读取当前站点的 <code>Cookie</code> 、 <code>IndexDB</code> 、 <code>LocalStorage</code> 等数据。</li><li><code>DOM</code> 层面，同源策略限制了来自不同源的 <code>JavaScript</code> 脚本对当前 <code>DOM</code> 对象读和写的操作。</li><li>网络层面，同源策略限制了通过 <code>XMLHttpRequest</code> 等方式将站点的数据发送给不同源的站点。</li></ul><h4 id="_8-7-3-nginx-解决跨域的原理" tabindex="-1"><a class="header-anchor" href="#_8-7-3-nginx-解决跨域的原理" aria-hidden="true">#</a> 8.7.3 Nginx 解决跨域的原理</h4><p>例如：</p><ul><li>前端 <code>server</code> 的域名为： <code>fe.server.com</code></li><li>后端服务的域名为： <code>dev.server.com</code></li></ul><p>现在我在 <code>fe.server.com</code> 对 <code>dev.server.com</code> 发起请求一定会出现跨域。</p><p>现在我们只需要启动一个 <code>Nginx</code> 服务器，将 <code>server_name</code> 设置为 <code>fe.server.com</code> 然后设置相应的 <code>location</code> 以拦截前端需要跨域的请求，最后将请求代理回 <code>dev.server.com</code> 。如下面的配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
 listen      80;
 server_name  fe.server.com;
 location / {
  proxy_pass dev.server.com;
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,307),q=n("code",null,"fe.server.com",-1),$=n("code",null,"Nginx",-1),z=n("code",null,"fe.server.com",-1),L=n("code",null,"Nginx",-1),U={href:"https://mp.weixin.qq.com/s?__biz=MzIyNDU2ODA4OQ==&mid=2247494231&idx=1&sn=287fd16b4657a32ad91e8108bbcbbe44&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},R=a('<h3 id="_8-8-配置开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#_8-8-配置开启-gzip-压缩" aria-hidden="true">#</a> 8.8 配置开启 gzip 压缩</h3><p><code>GZIP</code> 是规定的三种标准 <code>HTTP</code> 压缩格式之一。目前绝大多数的网站都在使用 <code>GZIP</code> 传输 <code>HTML</code> 、<code>CSS</code> 、 <code>JavaScript</code> 等资源文件。</p><p>对于文本文件， <code>GZiP</code> 的效果非常明显，开启后传输所需流量大约会降至 <code>1/4~1/3</code> 。</p><p>并不是每个浏览器都支持 <code>gzip</code> 的，如何知道客户端是否支持 <code>gzip</code> 呢，请求头中的 <code>Accept-Encoding</code> 来标识对压缩的支持。</p><p><img src="'+k+'" alt="图片"></p><p>启用 <code>gzip</code> 同时需要客户端和服务端的支持，如果客户端支持 <code>gzip</code> 的解析，那么只要服务端能够返回 <code>gzip</code> 的文件就可以启用 <code>gzip</code> 了,我们可以通过 <code>Nginx</code> 的配置来让服务端支持 <code>gzip</code> 。下面的 <code>respone</code> 中 <code>content-encoding:gzip</code> ，指服务端开启了 <code>gzip</code> 的压缩方式。</p><p><img src="'+_+`" alt="图片"></p><p>在 <code>/etc/nginx/conf.d/</code> 文件夹中新建配置文件 <code>gzip.conf</code> ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># # 默认off，是否开启gzip
gzip on; 
# 要采用 gzip 压缩的 MIME 文件类型，其中 text/html 被系统强制启用；
gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

# ---- 以上两个参数开启就可以支持Gzip压缩了 ---- #

# 默认 off，该模块启用后，Nginx 首先检查是否存在请求静态文件的 gz 结尾的文件，如果有则直接返回该 .gz 文件内容；
gzip_static on;

# 默认 off，nginx做为反向代理时启用，用于设置启用或禁用从代理服务器上收到相应内容 gzip 压缩；
gzip_proxied any;

# 用于在响应消息头中添加 Vary：Accept-Encoding，使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩；
gzip_vary on;

# gzip 压缩比，压缩级别是 1-9，1 压缩级别最低，9 最高，级别越高压缩率越大，压缩时间越长，建议 4-6；
gzip_comp_level 6;

# 获取多少内存用于缓存压缩结果，16 8k 表示以 8k*16 为单位获得；
gzip_buffers 16 8k;

# 允许压缩的页面最小字节数，页面字节数从header头中的 Content-Length 中进行获取。默认值是 0，不管页面多大都压缩。建议设置成大于 1k 的字节数，小于 1k 可能会越压越大；
# gzip_min_length 1k;

# 默认 1.1，启用 gzip 所需的 HTTP 最低版本；
gzip_http_version 1.1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实也可以通过前端构建工具例如 <code>webpack</code> 、<code>rollup</code> 等在打生产包时就做好 <code>Gzip</code> 压缩，然后放到 <code>Nginx</code> 服务器中，这样可以减少服务器的开销，加快访问速度。</p><p>关于 <code>Nginx</code> 的实际应用就学习到这里，相信通过掌握了 <code>Nginx</code> 核心配置以及实战配置，之后再遇到什么需求，我们也能轻松应对。接下来，让我们再深入一点学习下 <code>Nginx</code> 的架构。</p><h2 id="九、nginx-架构" tabindex="-1"><a class="header-anchor" href="#九、nginx-架构" aria-hidden="true">#</a> 九、Nginx 架构</h2><h3 id="_9-1-进程结构" tabindex="-1"><a class="header-anchor" href="#_9-1-进程结构" aria-hidden="true">#</a> 9.1 进程结构</h3><p>多进程结构 <code>Nginx</code> 的进程模型图：</p><p><img src="`+y+'" alt="图片"></p><p>多进程中的 <code>Nginx</code> 进程架构如下图所示，会有一个父进程（ <code>Master Process</code> ），它会有很多子进程（ <code>Child Processes</code> ）。</p><ul><li><code>Master Process</code> 用来管理子进程的，其本身并不真正处理用户请求。</li><li>某个子进程 <code>down</code> 掉的话，它会向 <code>Master</code> 进程发送一条消息，表明自己不可用了，此时 <code>Master</code> 进程会去新起一个子进程。</li><li>某个配置文件被修改了 <code>Master</code> 进程会去通知 <code>work</code> 进程获取新的配置信息，这也就是我们所说的热部署。</li><li>子进程间是通过共享内存的方式进行通信的。</li></ul><h3 id="_9-2-配置文件重载原理" tabindex="-1"><a class="header-anchor" href="#_9-2-配置文件重载原理" aria-hidden="true">#</a> 9.2 配置文件重载原理</h3><p><code>reload</code> 重载配置文件的流程：</p><ol><li>向 <code>master</code> 进程发送 <code>HUP</code> 信号（ <code>reload</code> 命令）；</li><li><code>master</code> 进程检查配置语法是否正确；</li><li><code>master</code> 进程打开监听端口；</li><li><code>master</code> 进程使用新的配置文件启动新的 <code>worker</code> 子进程；</li><li><code>master</code> 进程向老的 <code>worker</code> 子进程发送 <code>QUIT</code> 信号；</li><li>老的 <code>worker</code> 进程关闭监听句柄，处理完当前连接后关闭进程；</li><li>整个过程 <code>Nginx</code> 始终处于平稳运行中，实现了平滑升级，用户无感知；</li></ol><h3 id="_9-3-nginx-模块化管理机制" tabindex="-1"><a class="header-anchor" href="#_9-3-nginx-模块化管理机制" aria-hidden="true">#</a> 9.3 Nginx 模块化管理机制</h3><p><code>Nginx</code> 的内部结构是由核心部分和一系列的功能模块所组成。这样划分是为了使得每个模块的功能相对简单，便于开发，同时也便于对系统进行功能扩展。<code>Nginx</code> 的模块是互相独立的,低耦合高内聚。</p><p><img src="'+f+'" alt="图片"></p>',23);function T(P,S){const s=d("ExternalLinkIcon");return l(),t("div",null,[N,n("p",null,[e("这样可以完美绕过浏览器的同源策略： "),q,e(" 访问 "),$,e(" 的 "),z,e(" 属于同源访问，而 "),L,e(" 对服务端转发的请求不会触发浏览器的同源策略。推荐："),n("a",U,[e("Java面试题"),c(s)])]),R])}const j=i(w,[["render",T],["__file","nginx.html.vue"]]);export{j as default};
