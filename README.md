# MDN学习笔记
[TOC]
## 入门知识
### HTML基础
1. 一个属性应该包含：
    - 在属性与元素名称（或上一个属性，如果有超过一个属性的话）之间的空格符。
    - 属性的名称，并接上一个等号。
    - 由**引号**所包围的属性值。
2. 图像元素是一个空元素，它不需要包含内容来产生效果，它的作用是向其所在的位置嵌入一个图像。
3. \<head> 元素放置的内容不是展现给用户的，而是包含例如面向搜索引擎的搜索关键字（keywords）、页面描述、CSS样式表和字符编码声明等。
4. \<image>元素中的alt属性展示可以描述图像的文本，常用于：1.视觉障碍者进行屏幕阅读；2.图像未能正常加载
5. 无论你用了多少空白(包括空白字符，包括换行),当渲染这些代码的时候，HTML解释器会将连续出现的空白字符减少为一个单独的空格符。
### CSS基础
1. CSS规则集：
    ```
    p {
      color: red;
      width: 500px;
      border: 1px solid black;
    }
    ```
    - 选择器（Selector）HTML 元素的名称位于规则集开始。它选择了一个或多个需要添加样式的元素（在这个例子中就是 p 元素）。要给不同元素添加样式只需要更改选择器就行了。
    - 声明（Declaration）一个单独的规则比如 color: red; 这指定了你想要添加样式元素的属性。
    - 属性（Properties）这是你改变 HTML 元素样式的方法。（在这个例子中 color 就是 <p> 元素的属性。）在 CSS 中，你通过选择合适的属性来改变你的规则。
    - 属性值（Property value）在属性的右边，冒号后面，我们拥有属性值，用于从指定的属性里的非常多的外观中选择一个值（我们除了 red 之外还有很多属性值可以用于 color ）。
2. 不同类型的选择器

    选择器名称|选择的内容|示例
    --|--|--
    元素选择器（有时也称作标签或类型选择器）	|所有指定类型的 HTML 元素	|p 选择  \<p>
    标识（ID）选择器	|页面中指定标识的元素（在一个 HTML 页面中，每个标识只被允许指定到一个元素）|	#my-id 选择 \<p id="my-id"> 或 \<a id="my-id">
    类别选择器	|页面中指定类别的元素（一个页面中可以出现多个类别实例）	|.my-class 选择 \<p class="my-class"> 和 \<a class="my-class">
    属性选择器	|页面中拥有指定属性的元素	|img[src] 选择 \<img src="myimage.png"> 而不是 \<img>
    伪类选择器	|指定的元素，但是需要在特殊的状态，比如悬停|	a:hover 选择 \<a>, 但是只在鼠标悬停在链接上时
3.  \<html> 是整个页面的父元素，而且它所有的子元素都会继承相同的 font-size 和 font-family
4. 在你写 CSS 时你会发现它大部分都是关于盒子——设置它们的尺寸，颜色，位置等等。你的页面里大部分 HTML 元素都可以被看作一个一个层叠的盒子。
### JavaScript基础
1. 浏览器会按照代码在文件中的顺序解析 HTML，所以将 JavaScript 代码放在靠近 HTML 页面底部的位置是通常最好的选择。
2. JavaScript 是对大小写敏感的
3. JS可以先定义一个变量之后再赋值，也可以定义赋值同时进行。
4. JS的数据类型：String字符串，Number数值，Boolean布尔值（小写），Array数组（类似列表可索引），Object对象（一切皆对象）
5. 添加注释：/* string */ 或单行注释 // string
6. 相等运算符：\=\=\=（3个等号），不相等：!myVariable === 3;或myVariable !== 3;
7. 计算时如果混合不同的数据类型可能导致奇怪的结果。
8. 条件句：
    ```
    var iceCream = 'chocolate';
    if (iceCream === 'chocolate') {
      alert('Yay, I love chocolate ice cream!');    
    } else {
      alert('Awwww, but chocolate is my favorite...');    
    }
    ```
9. 自定义函数
    ```
    function multiply(num1, num2) {
      var result = num1 * num2;
      return result;
    }
    ```
10. 事件是能够捕捉浏览器操作并且允许你运行代码进行响应的代码结构. eg: object.onclick = function(){}

## HTML-构建 Web
### HTML介绍
#### 入门基础
1. 块级元素：会出现在新的一行，其后出现的内容也会换行。一个块级元素不会被嵌套进内联元素中，但可以嵌套在其它块级元素中。
2. 内联元素：不会导致文本换行，通常出现在一堆文字之间，比如强调、超链接
3. 属性值最好始终添加引号，单引号和双引号都可以，规则和python相同
4. 将符号显示在html中需要进行转义，但属性值中的符号不需要
5. 渲染代码时，HTML解释器会将连续出现的空白字符减少为一个单独的空格符。规范：每一个嵌套的元素以两个空格缩进
6. \<!-- 和 \-->表示注释

#### head标签中的元数据
1. 页面加载完成的时候，标签head里的内容不会在页面中显示出来。
2. meta元素：设定字符集，网页描述，向特定网站提供可用的特定信息
3. 添加网页图标`<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`
4. 分别使用 \<link>元素以及 \<script> 元素在HTML中应用CSS和JavaScript
5. \<script>放在文档的尾部（在 \</body>标签之前）是一个更好的选择,他不是空元素，可以直接把脚本代码放入元素之中
6. 通过添加lang属性到HTML开始标签中来实现为站点设定语言

#### 文字基础
1. 最佳实践：只对每个页面使用一次\<h1>；标题层次不能混淆；最好每页使用的标题级别不超过三个
2. 最好的经验法则：使用\<b>,\<i>,\<u> 来传达传统意义上的粗体，斜体或下划线

#### 超链接
1. URL可以指向可以在网络上保存的任何内容。
2. 使用title属性向超链接添加支持信息（仅当鼠标悬停在其上时才会显示），有区别于\<img>元素的alt属性
3. URL指向相同目录文件、子目录文件、上级目录文件的不同表示方式（../可重复多次使用）
4. 使用#+id可以连接到指定片段（URL的定位）
5. 绝对URL总是指向相同的位置，不管它在哪里使用
6. 一个相对URL将指向不同的位置，这取决于它所在的文件所在的位置
7. 链接最佳实践：
    - 不要重复URL作为链接文本的一部分
    - 当链接到同一网站的其他位置时，尽可能使用相对链接（使用绝对URL，浏览器需要查询DNS）
    - 链接到非html资源时，留下清晰的指示（文件大小，是否需要flash，视频质量）
    - 在下载链接时使用下载属性`download=""`提供一个默认的保存文件名
8. 点击链接打开发送电子邮件页面：使用\<a>元素和mailto：URL的方案。uRL是可选的，使用问号（?）来分隔主URL与参数值，以及使用&符来分隔mailto:中的各个参数（如subject、cc等）

#### 高级文字格式
1. 描述列表（产生缩进）：
    ```html
    <dl>
      <dt>soliloquy</dt>
      <dd>In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)</dd>
      <dt>monologue</dt>
      <dd>In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.</dd>
      <dt>aside</dt>
      <dd>In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information.</dd>
    </dl>
    ```
2. 块引用：\<blockquote>；行内引用：\<q>，添加cite属性以文本形式告知出处（但不显示），也可以直接以\<cite>元素加超链接形式显示出处。
3. 缩略语：\<abbr title="">\</abbr>
4. 标记联系方式：\<address>\</address>,可内嵌超链接
5. 上标和下标：\<sup>\</sup>;\<sub>\</sub>
6. 展示代码：行内\<code>\<\code>;代码块（保留空格换行）：\<pre>\</pre>
7. 表示时间：\<time datetime="2018-11-16"></time>

#### 文档与网页结构
1. 网页文档的基本构成:![网页的基本结构](https://note.youdao.com/yws/res/9179/WEBRESOURCEce45ca18232393bc37f449f4e1160dda)
2. 视觉效果并不能说明一切，我们需要遵守语义，并使用正确的元素进行语义化工作
3. 页面结构专用标签：
    ```
    标题: <header>.
    导航栏: <nav>.
    主要内容: <main>, 具有代表性的内容段落主题可以使用 <article>, <section>, 和 <div> 元素.
    侧栏: <aside>; 经常嵌套在 <main> 中.
    页脚: <footer>.
    ```
4. 布局元素细节：
    ```
    <main> 展现了页面内容的独特性。只可以在每一个页面上使用一次<main>，直接把它放到<body>中。在理想情况下，不应该把它嵌套进其他的元素中。
    <article> 闭合一块与自身相关的内容，这块内容能够解释它自身而不是页面上其他的内容（例如一篇单独的博客）。
    <section> 近似于<article>，但是它更多的是伴随着由一个单独功能构成的页面（例如一个小型的地图，或者是一组文章的标题和摘要）。它被认为最好的实际应用是用标题作为每一部分（section）的开头；也要注意的是你可以把不同的<article>分到不同的<section>中，或者把不同的<section>分到不同的<article>中，这要取决于内容。
    <aside> 包含的内容并不与主要内容有直接的联系，但是它可以提供额外的不直接有联系的信息（术语表条目，作者简介，相关链接等等）。
    <header> 展现了一系列的介绍性内容。如果它是<body> 的子元素,它就定义了网站的全局页眉。但是如果它是 <article> 或<section> 的子元素，它就定义了这些部分的特定的页眉(不要把这些与titles and headings混淆)。
    <nav> 包含了页面主要的导航功能。二级链接等，不会进入导航功能部分。
    <footer> 包含了页面的页脚部分。
    ```
5. \<div>和\<span>元素。仅当无法找到更好的语义元素时使用，最好使用class属性进行标记。换行是\<div>元素唯一的固有格式表现
6. \<br>在一个段落中创建一个换行,\<hr>生成水平分割线
7. 设计简单网站的步骤：
    - 列出重复使用元素及包含的内容：比如导航菜单、页面页脚
    - 画出每个页面的主要结构，标记出要填充的内容
    - 以列表形式构思出需要在页面上展示的内容，并进行分组（即位于同一页面）
    - 画出网站的草图（地图），描述不同页面之间的指向关系（如何从主页到达其他页）

#### HTML调试
1. 浏览器以宽松模式运行，一般的语法错误页面会进行自动修复并显示
2. 两种调试方式：浏览器内F12开发者工具；W3C的HTML页面验证

#### 测验
1. head中必须包括title属性
2. time标签中的时间表示方式需要增加0

### 多媒体与嵌入
#### HTML中的图片
1. 像\<img>和\<video>这样的元素有时被称之为替换元素，因为这样的元素的内容和尺寸由外部资源（像是一个图片或视频文件）所定义，而不是元素自身。
2. 最好给图片添加合适的文字描述，搜索引擎可能会将图片的文字描述和查询条件进行匹配
3. 装饰性图片就不应该放在HTML文件里， CSS background-image才应该用于插入装饰图片
4. 不应该使用HTML属性来改变图片的大小（宽高），应该使用CSS或者在把图片放到你的网站页面之前，使用图形编辑器使图片的尺寸正确
5. 图片标题（title）并不必须要包含有意义的信息，也不推荐使用，因为不是所有用户都可以访问到它
6. HTML5的\<figure> 和\<figcaption> 元素：为图片提供一个语义容器，在标题和图片之间建立清晰的关联。\<figure> 可以是几张图片、一段代码、音视频、方程、表格或别的。使用方式：\<figure>元素内嵌\<img>和\<figurecaption>
7. CSS 背景图片只为了装饰，完全没有语义上的意义
#### 视频和音频内容
1. \<video> 允许你简单的嵌入一段视频：
    ```html
    <video src="rabbit320.webm" controls>
      <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.webm">link to the video</a> instead.</p> 
    </video>
    ```
2. 后备内容 — 当浏览器不支持\<video>标签的时候，它将会显示出来，它使我们能够对旧的浏览器做一些兼容处理。
3. 将 src 属性从\<video>标签中移除，转而将它放在几个单独的标签\<source> 当中，浏览器将会检查\<source>标签，并且播放第一个与其自身 codec 相匹配的媒体。
4. 建议添加\<source>标签的可选type属性，否则浏览器会尝试加载每个source直到找到能正确播放的格式
    ```
    <video width="320" height="240" controls="controls">
      <source src="forrest_gump.mp4" type="video/mp4" />
      <source src="forrest_gump.ogg" type="video/ogg" />
      <track kind="subtitles" src="subs_chi.srt" srclang="zh" label="Chinese">
      <track kind="subtitles" src="subs_eng.srt" srclang="en" label="English">
    </video>
    ```
5. 其他的视频特性：
    - width 和 height：控制视频的尺寸，也可以用 CSS 来控制视频尺寸。视频会始终保持它原始的纵横比。如果设置的尺寸和原始长宽比不一致，多余的部分将使用默认的背景颜色填充
    - autoplay：使音频和视频内容立即自动播放
    - loop：播放完毕后自动循环播放
    - muted：播放时默认关闭声音。
    - poster：设置视频封面，指向了一个图像的URL
    - preload：被用来缓冲较大的文件，有3个值可选："none" ：不缓冲，"auto" ：页面加载后缓存媒体文件，"metadata" ：仅缓冲文件的元数据
6. 音频\<audio>标签和video基本相同，但不支持视觉部件
7. 显示音轨文本：用\<track>标签链接.vtt（WebVTT）文件,需要注明类型和语言。<code>\<track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English"></code>（内嵌于\<video>标签内）
#### 对象到iframe，其他嵌入技术
1. iframe示例：
    ```html
    <iframe src="https://developer.mozilla.org/en-US/docs/Glossary"
            width="100%" height="500" frameborder="0"
            allowfullscreen sandbox>
      <p> <a href="https://developer.mozilla.org/en-US/docs/Glossary">
        Fallback link for browsers that don't support iframes
      </a> </p>
    </iframe>
    ```
2. 解释
    - allowfullscreen：允许\<iframe>通过全屏API设置为全屏模式
    - frameborder：如果设置为1，则会告诉浏览器在此框架和其他框架之间绘制边框，这是默认行为。0删除边框。不推荐这样设置，因为在CSS中可以更好地实现相同的效果。border: none;
    - src：与\<video>/\<img>一样包含指向要嵌入文档的URL路径
    - width 和 height：指定iframe的宽度和高度
    - 备选内容：与\<video>等其他类似元素相同，您可以在\<iframe>\</iframe>标签之间包含备选内容，如果浏览器不支持\<iframe>，将会显示备选内容
    - sandbox：需要在已经支持其他\<iframe>功能（例如IE 10及更高版本）但稍微更现代的浏览器上才能工作，可以提高安全性设置
3. iframe存在安全隐患，只有在必要时嵌入；绝对不能使用HTTP嵌入第三方内容，通常\<iframe>都应通过HTTPS提供
4. 始终使用iframe的sandbox属性，永远不应该同时添加allow-scripts和allow-same-origin到sandbox属性中
5. 配置CSP指令，可以防止其他网站在其网页中嵌入自己的内容
6. \<embed>和\<object>元素，插件和这些嵌入方法是一种传统技术，目前已不太推荐使用

#### 在网页中添加矢量图形
1. SVG 是用于描述矢量图像的XML语言，它可以很好地适应CSS样式或JavaScript脚本，但创建难度大，不适合展示图像
2. 添加SVG方法1：通过\<img>嵌入，操作简单；无法使用CSS和JavaScript调用样式或操作图像。使用srcset属性进行跨浏览器兼容
3. 添加SVG方法2：在HTML中引入SVG代码，可以使用CSS修改样式及交互；多次使用会导致资源密集型维护，不能缓存
4. 添加SVG方法3：使用\<iframe>嵌入，可能不支持iframe，使用JavaScript操纵SVG较困难

#### 响应式图片
1. 定义：使用相同显示效果的图片但包含多个不同的分辨率（分辨率切换），或者使用不同的图片以适应不同的空间分配（艺术方向）
2. CSS是比HTML更好的响应式设计的工具
3. 分辨率切换：不同的尺寸（如电脑和手机浏览显示不同大小但同样内容的图片）
    - 增加<code>srcset</code>属性：文件名+空格+图像的固有像素(px)宽度（w为宽度描述符），逗号分隔每组
    - 增加<code>size</code>属性：媒体条件+空格+媒体条件为真时最佳预期尺寸（以及实际将显示的宽度）（px,em,vw等），逗号分割，注意媒体条件顺序
    ```html
    <img srcset="elva-fairy-320w.jpg 320w,
                 elva-fairy-480w.jpg 480w,
                 elva-fairy-800w.jpg 800w"
         sizes="(max-width: 320px) 280px,
                (max-width: 480px) 440px,
                800px"
         src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
    ```
4. `sizes`表示资源大小的以逗号隔开的一个或多个字符串。每一个资源大小包括：
    - 一个媒体条件。最后一项一定是被忽略的。
    - 一个资源尺寸的值。

    资源尺寸的值被用来指定图像的预期尺寸。当srcset使用'w'描述符时，用户代理使用当前图像大小来选择srcset中合适的一个图像URL（大于预期尺寸且最接近的值most closely matches the chosen slot size）。 被选中的尺寸影响图像的显示大小（如果没有CSS样式被应用的话）。如果没有设置srcset属性，或者没值，那么sizes属性也将不起作用。

5. `srcset`以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像。每一个字符串由以下组成：
    - 一个图像的 URL。
    - 可选的，空格后跟以下的其一：
        一个宽度描述符，这是一个正整数，后面紧跟 'w' 符号。该整数宽度除以sizes属性给出的资源（source）大小来计算得到有效的像素密度，即换算成和x描述符等价的值。
        一个像素密度描述符，这是一个正浮点数，后面紧跟 'x' 符号。

    如果没有指定源描述符，那它会被指定为默认的 1x。
    在相同的 srcset 属性中混合使用宽度描述符和像素密度描述符时，会导致该值无效。重复的描述符（比如，两个源 在相同的srcset两个源都是 '2x'）也是无效的。
6. 分辨率切换：相同尺寸不同分辨率
    - srcset和x语法结合：<code>srcset="elva-fairy-640w.jpg 2x"</code>根据设备分辨率加载图像，高分辨率显示高清晰度图像。
    ```html
    <img srcset="elva-fairy-320w.jpg,
                 elva-fairy-480w.jpg 1.5x,
                 elva-fairy-640w.jpg 2x"
         src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">
    ```
5. 艺术方向问题(任何情况下都必须提供一个<img>元素以及它的src和alt属性，否则图片不显示)：
    ```html
    <picture>
      <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
      <source media="(min-width: 800px)" srcset="elva-800w.jpg">
      <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
    </picture>
    ```
    source可以引用size属性，但应该仅仅当在艺术方向场景下使用media属性；当你使用media时，不要在sizes属性中也提供媒体条件
6. 浏览器加载页面时，预加载图片在加载和解析页面的CSS和JavaScript之前，因此不能依赖两者来动态调整图片，因为会有重复加载
7. 使用现代图像格式如WebP和JPEG-2000，在type属性中提供MIME类型以跨浏览器兼容：
    ```html
    <picture>
      <source type="image/svg+xml" srcset="pyramid.svg">  # 只能引用type声明的文件类型
      <source type="image/webp" srcset="pyramid.webp">    # 如果需要可以增加size或media属性
      <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
    </picture>
    ```
### HTML表格
#### 表格入门
1. 为表格中的列提供共同的样式：\<colgroup>就在\<table>标签的下方，每一个\<col>都会制定每列的样式，没有采取任何样式仍然需要添加一个空的\<col>元素，
2. 扩展列样式：span属性需要一个无单位的数值，表示该样式在表格中从该列起应用的列数
    ```
    <colgroup>
      <col style="background-color: yellow" span="2">
    </colgroup>
    ```
3. 允许单元格跨越多行和列：为单元格标签添加`colspan`或`rowspan`属性，属性值为无单位数值

#### HTML表格高级特性和可访问性
1. 表格标题：使用\<caption>为表格增加一个标题，就放在\<table>标签下面
2. 划分表格结构：\<thead>,\<tfoot>,和\<tbody>划分表格结构（嵌套包含\<tr>\</tr>）,\<tfoot>可以放在\<thead>下面，\<tbody>总是隐式包含在所有列表中
3. 表格语义化：\<scope>属性让表格更加语义化，可以添加在\<th> 元素中，表示该单元格在表格中的标题类别：分别可以是col, row, colgroup, rowgroup
4. 也可用id(\<th>)和header(\<td>)属性精确表示单元格之间的联系，但过于复杂

### HTML表单指南
#### 创建表单入门
1. \<form>是容器元素，最佳实践是至少设置action属性和method属性
    - action 属性定义提交表单时,应该把所收集的数据送给谁(/那个模块)(URL)去处理
    - method 属性定义发送数据的HTTP方法(“get”或“post”)
2. 在所有\<label>元素上使用for属性。引用相应的小部件的id，它将标签链接到表单小部件，允许用户单击标签以激活相应的小部件
3. 在\<input>元素中最重要的属性是type属性，它定义<input>属性的行为方式。
4. \<input />和<textarea></textarea>设置默认值的方式有区别：前者用value属性，后置直接在开始和结束标记之间放置默认值
5. <button>元素的type属性接受三个值：submit, reset或者 button
    - submit：发送表单的数据到<form>元素的action 属性所定义的网页。
    - reset：将所有表单小部件重新设置为它们的默认值
    - button：不会发生任何事！用于JavaScript构建定制按钮
6. 需要在每个表单小部件上使用name属性来收集特定的数据块，服务器上的脚本将接收的数据作为HTTP请求中包含的键/值项的列表（request）

#### 如何构造HTML表单
1. \<form>元素：严格禁止在一个表单内嵌套另一个表单。嵌套会使表单的行为不可预知
2. \<fieldset>和\<legend>元素：一组单选按钮应该将它们嵌套在\<fieldset>元素中，也可用来对表单进行分段。\<legend>的文本内容描述fieldset的用途
3. 正确设置\<label>标签可以在所有浏览器中单击标签来激活相应的小部件
4. 用\<div>和\<p>元素包装标签和小部件是常见做法，HTML\<li>列表也很常用；除了\<fieldset>元素，使用标题（例如\<h1>、\<h2>）和分段（如\<section>）来构造复杂的表单也很常见（方便CSS设置样式）

#### 原生表单部件
1. 通用属性：`autofocus`自动聚焦（默认关闭），`disabled`禁用（默认关闭），`form`关联表单（暂无支持），`name`数据提交名称，`value`初始值

##### 文本输入域
1. 通用规范：可以被标记为readonly（提供初始值但不允许编辑）或disabled，可以设置placeholder文本，可以限制size和length，可以拼写检查
2. 单行文本域只有一个真正的约束：如果输入带有换行符的文本，浏览器会在发送数据之前删除换行符。
3. 通过type属性增强单行文本域：email地址域，password域，search域，tel域，url域
4. \<textarea>元素属性：cols，文本控件的可见宽度，平均字符宽度；rows，控制的可见文本行数；wrap，表示控件是如何包装文本，hard或soft
5. 示例：`<input type="text" id="comment" name="comment" value="I'm a text field">`

##### 下拉内容 select
1. 可以使用selected属性在所需的\<option>元素上设置选择框的默认值
2. \<option>元素也可以嵌套在\<optgroup label="groups">元素中
3. \<option>元素设置了value属性，提交表单时该属性值会被发送。如忽略value属性，则使用<option>元素的内容
4. 将`multiple`属性添加到\<select>元素，您可以允许用户通过操作系统提供的默认机制来选择几个值
5. 使用\<input>的list属性设置自动补全输入框，设置方式类似下拉组件：
    ```html
    <input type="text" name="myFruit" id="myFruit" list="mySuggestion">
    <datalist id="mySuggestion">
      <option>Apple</option>
    </datalist>
    ```
##### 可选中项
1. 表单提交后所有具有name属性的小部件都会被发送，即使没有任何输入值
2. 需要为可选中项提供value属性，否则复选框和单选按钮将被赋予一个 on值
3. 使用<code>\<fieldset>\<legend>\<ul>\<li></code>等元素组织可选项\<label>\<input>
4. 使用type属性值为checkbox的 \<input>元素来创建一个复选框
5. 使用type属性值为radio的\<input>元素来创建一个单选按钮
6. 如果多个单选按钮的name属性共享相同的值，它们将被认为属于同一组按钮，同一组中只有一个按钮可以同时被选

##### 按钮
1. 从技术上讲，使用\<button>元素或\<input>元素定义的按钮几乎没有区别，但<button>元素中标签可以是HTML，可进行样式化

##### 高级表单部件
1. 数字部件：<code>\<input type="number" name="age" id="age" min="1" max="10" step="2"></code>
2. 滑块部件：<code>\<input type="range" name="beans" id="beans" min="0" max="500" step="10"></code>,需要javascript实现实时显示数值，实现代码：
    ```
    var beans = document.querySelector('#beans');
    var count = document.querySelector('.beancount');
    
    count.textContent = beans.value;
    
    beans.oninput = function() {
      count.textContent = beans.value;
    }
    ```
3. 日期时间选择器：type=datetime-local, month, time, week，均可以用min和max属性约束
4. 拾色器：<code>\<input type="color" name="color" id="color"></code>

##### 其他小部件
1. 文件选择器：<code>\<input type="file" name="file" id="file" accept="image/*" multiple></code>
2. 隐藏内容：\<input>元素设置属性`type="hidden"`,需要设置它的name和value属性
3. 图像按钮：<code>\<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" /></code>，发送单击的坐标值（x、y轴两个键值对）作为查询参数，用于如智联的登录验证图片
4. 进度条：<code>\<progress max="100" value="75">75/100</progress></code>
5. 仪表条：<code>\<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter></code>(密码强弱提示)

#### 发送表单数据
1. 如果<form>元素没有提供action属性，数据将被发送到当前包含表单页面的URL
2. GET方法发送的请求主体为空，因此表单数据只能追加到URL中作为查询参数（很不安全）
3. POST方法是浏览器在请求响应时使用的一种方法，它需要考虑在HTTP请求体中提供数据以便服务器接受数据返回相应结果，使用该方法发送表单，数据将追加到HTTP请求的主体中
3. 将<form>元素的enctype属性值设置为multipart/form-data以上传二进制文件
4. 发送文件，你需要额外的三个步骤：
    - 将method属性设置为POST，因为文件内容不能放入URL参数中。
    - 将enctype的值设置为multipart/form-data，因为数据将被分成多个部分，每个文件分别对应一个文件以及表单正文中包含的文本数据(如果文本也输入到表单中)。
    - 包含一个或多个File picker小部件，允许用户选择将要上传的文件。
4. XSS攻击利用用户对web站点的信任，而CSRF攻击则利用网站为其用户提供的信任
5. 最重要的安全原则是:永远不要相信你的用户，包括你自己；所有到达服务器的数据都必须经过检查和消毒

#### 表单数据校验
1. 项目开发过程中，一般都倾向于使用客户端校验与服务器端校验的组合校验方式以更好的保证数据的正确性与安全性
2. required属性 — 如果要使输入成为必需的，则可以使用此属性标记元素
3. 使用正则表达式验证： \<textarea> 元素不支持pattern 属性
    ```
    <input id="choose" name="i_like" required pattern="banana|cherry">
    ```
4. 限制条目长度：所有文本框 (\<input> 或 \<textarea>) 可以强制使用minlength 和 maxlength 属性，type=number时为min和max属性
5. 定义错误消息的外观和文本, 必须使用 JavaScript; 不能使用 HTML 和 CSS 来改变
    ```html
    var email = document.getElementById("mail");
    
    email.addEventListener("input", function (event) {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an e-mail, darling!");
      } else {
        email.setCustomValidity("");
      }
    });
    ```
6. 使用 JavaScript校验表单：使用校验约束API(需要时查阅)

#### 构建自定义表单部件
1. 设计功能，明确部件的不同状态及切换事件，定义选项如何突出显示、
2. 定义语义化的HTML结构，使用div、span、ul、li等标签并区分class类别
3. 使用CSS创建外观：不同活动状态的样式

#### 通过JavaScript发送表单数据
1. 使用iframe：提交表单后创建一个iframe提取表单数据并提交。不推荐，有安全风险
2. 手动构建XMLHttpRequest：迭代表单数据生成键值对字符串序列并通过XHR提交
3. 使用AJAX直接发送formdata：formdata可自定义添加表单数据(还可以直接将formdata对象与form元素绑定)
    ```
      var FD  = new FormData();
      // Push our data into our FormData object
      for(name in data) {
        FD.append(name, data[name]);
      }
    ```
4. 发送二进制数据：需要通过API访问二进制数据，如使用FileReader API来访问二进制数据，调用formData的append方法将需要发送的File对象或者Blob对象添加进formdata，然后发送这个请求。

#### 样式化HTML表单
1. 由于历史和技术的原因，表单部件不能很好地与CSS样式化配合工作
2. `<form>`,`<fieldset>`,`<label>`,`<output>`包括所有文本字段小部件`<input>`（单行和多行）和按钮`<button>`可以比较正确的使用CSS
2. `<legend>`元素不能在所有平台上正确定位。`Checkbox`和`radio`按钮也不能直接应用样式，(CSS3可以解决这个问题)。placeholder 的内容不能以任何标准方式应用样式
3. 有些元素根本不能用应用CSS样式。包括：所有高级用户界面小部件，如范围，颜色或日期控件; 和所有下拉小部件，包括`<select>`, `<option>`, `<optgroup>`和`<datalist>` 元素。 文件选择器小部件也被称为不可风格化。 新的`<progress>`和`<meter>` 元素也属于这个类别

##### 基本样式美化
1. 搜索框是唯一一种应用CSS样式有点棘手的文本字段。在基于WebKit的浏览器（Chrome，Safari等）上，必须使用-webkit-appearance专有属性来调整它
2. 默认情况下，一些组件不不会从它们的父元素继承 font-family和 font-size 。相反，许多浏览器使用系统默认的字体和文本。为了让form表单的外观和其他内容保持一致，需要手动在为相应组件设置字体样式
3. 每个小部件都有自己的边框，填充和边距的规则。如果想给几个不同的小部件相同的大小或对齐，必须使用box-sizing 属性
4. 在所有浏览器中，`<legend>`元素定位是其`<fieldset>`父元素的上边框的最顶端。在HTML流中无法改变它的绝对位置，无法让其远离顶部边框。可以使用`position` 属性将其位置设置为绝对或相对
5. 默认情况下，所有浏览器都认为<textarea> 元素是inline block，与文本底线对齐。  使用`display`属性将内联(inline-block)块更改为块(block)

## CSS-设计Web
### CSS介绍
#### CSS运作原理
1. CSS规则
    - 一组 属性 ，属性的值更新了 HTML 的内容的显示方式。比如，我想让元素的宽度是其父元素的50％，或者元素背景变为红色。
    - 一个 选择器，它选择元素，这（些）元素是你想应用这些最新的属性值于其上的元素。比如，我想将我的CSS规则应用到我HTML文档中的所有段落上。
2. 处理过程与文档对象模型（DOM）
    - 浏览器显示文档时，它必须将文档的内容与其样式信息结合
    - ![渲染过程](https://mdn.mozillademos.org/files/11781/rendering.svg)
3. 将CSS应用到HTML的3种方式：
    - 外部样式表（推荐）
    - 内部样式表
    - 内联样式，使用元素的<code>style</code>属性设置CSS属性值，仅影响一个元素

#### CSS语法
1. CSS的基本层次构成元素：属性（Property）：属性值（Value）
2. 声明块里的最后一个声明结束的地方，不需要加分号，但是最后加分号是个好习惯
3. 选择器加上声明块被称为规则集（ruleset），通常简称规则（rule）
4. CSS语句：规则（集）、@-规则或嵌套语句
5. 一个给定的属性可能被多个规则设置多次，CSS通过层叠算法定义规则的优先级
6. CSS中的一些特殊语句：@-规则(At-rules)在CSS中被用来传递元数据、条件信息或其它描述性信息。每种描述符定义的@-规则，都有其特有的内部语法和语义。如：
    - @charset 和 @import（导入其他CSS文件） （元数据）
    - @media 或 @document （条件信息，又被称为嵌套语句，见下方。)
    - @font-face （描述性信息）
    ```
    @media (min-width: 801px) {
      body {
        margin: 0 auto;
        width: 800px;
      }
    }
    只有在运行浏览器的设备匹配其表达条件时才会应用该@-规则的内容；
    ```
7. 允许在一行设置多个属性的称为简写属性，如 font，background，padding，border，和 margin

#### CSS选择器
1. 选择器可以被分为以下类别：
    - 简单选择器（Simple selectors）：通过元素类型、class 或 id 匹配一个或多个元素。
    - 属性选择器（Attribute selectors）：通过 属性 / 属性值 匹配一个或多个元素。
    - 伪类（Pseudo-classes）：匹配处于确定状态的一个或多个元素，比如被鼠标指针悬停的元素，或当前被选中或未选中的复选框，或元素是DOM树中一父节点的第一个子节点。
    - 伪元素（Pseudo-elements）:匹配处于相关的确定位置的一个或多个元素，例如每个段落的第一个字，或者某个元素之前生成的内容。 
    - 组合器（Combinators）：这里不仅仅是选择器本身，还有以有效的方式组合两个或更多的选择器用于非常特定的选择的方法。例如，你可以只选择divs的直系子节点的段落，或者直接跟在headings后面的段落。
    - 多重选择器（Multiple selectors）：这些也不是单独的选择器；这个思路是将以逗号分隔开的多个选择器放在一个CSS规则下面， 以将一组声明应用于由这些选择器选择的所有元素。

##### 简单选择器
1. 文档中的多个元素可以具有相同的class类名，而单个元素可以有多个class类名(以空格分开多个类名的形式书写)，类名可以自由自定义
2. 任何元素都可以使用id属性自定义唯一的ID名称。一个ID名称必须在文件中是唯一的。这是选择单个元素的最有效的方式
3. 通用选择器（*），它允许选择在一个页面中的所有元素。常见的做法是与其他选择器结合使用

##### 属性选择器
1. 属性选择器是一种特殊类型的选择器，它根据元素的属性和属性值来匹配元素。它们的通用语法由方括号 ([]) 组成，其中包含属性名称，后跟可选条件以匹配属性的值。
2. 存在和值（Presence and value）属性选择器：
    - [attr]：该选择器选择包含 attr 属性的所有元素，不论 attr 的值为何。
    - [attr=val]：该选择器仅选择 attr 属性被赋值为 val 的所有元素。
    - [attr~=val]：该选择器仅选择具有 attr 属性的元素，而且要求 val 值是 attr 值包含的被空格分隔的取值列表里中的一个。
2. data-* 属性被称为数据属性。它们提供了一种在HTML属性中存储自定义数据的方法
3. 子串值（Substring value）属性选择器Edit：
    - [attr|=val] : 选择attr属性的值是 val 或值以 val- 开头的元素。
    - [attr^=val] : 选择attr属性的值以 val 开头（包括 val）的元素。
    - [attr$=val] : 选择attr属性的值以 val 结尾（包括 val）的元素。
    - [attr*=val] : 选择attr属性的值中包含子字符串 val 的元素

##### 伪类和伪元素
1. 当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的**选择器后面**加上对应的伪类
2. 伪元素前缀是两个冒号 (::) ， 同样是添加到**选择器后面**去选择某个元素的某个部分

##### 组合器和多个选择器
1. 组合器
    名称|组合器|选择
    --|--|--
    选择器组	|A,B|匹配满足A（和/或）B的任意元素（参见下方 同一规则集上的多个选择器）.
    后代选择器|A B|匹配B元素，满足条件：B是A的后代结点（B是A的子节点，或者A的子节点的子节点）
    子选择器|A > B|匹配B元素，满足条件：B是A的直接子节点
    相邻兄弟选择器|A + B|匹配B元素，满足条件：B是A的下一个兄弟节点（AB有相同的父结点，并且B紧跟在A的后面）
    通用兄弟选择器|A ~ B|	匹配B元素，满足条件：B是A之后的兄弟节点中的任意一个（AB有相同的父节点，B在A之后，但不一定是紧挨着A）  
2. 应用同一规则的选择器组：通过相互间用逗号分隔的多个选择器所形成的组，可以一次性将同一规则同时应用到多组选定元素

#### CSS的值和单位
##### 数值
1. 像素 (px) 是一种绝对单位（absolute units），em是Web开发中最常用的相对单位，1em与当前元素的字体大小相同：1em = 16px（默认情况）
2. 相对单位：em，ex，ch，rem，vw，vh。相对单位用于相对于你的字体或视窗大小来调整HTML元素的大小
3. em:1em与当前元素的字体大小相同。浏览器给网页设置的默认基础字体大小是16像素，这意味着对一个元素来说1em的计算值默认为16像素，但em单位会继承父元素的字体大小。 REM（root em）和em以同样的方式工作，但它总是等于默认基础字体大小的尺寸；继承的字体大小将不起作用。
4. 如果数值为0可以不加单位，或者设置行高时，数值为font-size值的若干倍

##### 百分比
1. 百分比用于构建动态布局（相对于固定宽度布局），如宽度总是会被调整到其父容器宽度一定百分比的盒子。而那些宽度被设置为某个固定单位值（如px或em）的盒子，它们总是保持固定的尺寸，即使它们父容器的宽度发生变化。
2. `<body>`元素，默认情况下宽度是视口宽度的100％。

##### 颜色
1. 颜色的表示方式：关键词（red）、十六进制值（#ff0000）、RGB（rgb（））、HSL（hsl（）），RGBA和HSLA增加透明度
2. 不透明度属性（Opacity），设置所有选定元素以及它们的孩子节点的不透明度（不仅限于背景颜色），数值范围为0-1
3. RGB和HSL都有相应的模式——RGBA和HSLA——不仅允许您设置想要显示的颜色,还有此颜色的透明度（ transparency ）。
4. 注意opacity与rgba的区别：是否应用于子元素

##### 函数
1. css中可以使用函数，如rgb(),hsla(),calc()，url()

#### 层叠和继承
##### 层叠
1. 层叠的决定顺序：重要性-专用性-源代码次序
2. 重要性：<code>!important</code>可以让一条规则总是优先于其他规则，但可能存在多个!important声明
3. IDs/class 选择器优先于element选择器
4. 建议千万不要使用!important，除非绝对必须使用它
5. 专用性：<code>style</code>属性>ID选择器>类、属性、伪类选择器>元素、伪元素选择器
6. 源代码次序：后面的规则将战胜先前的规则
7. 所有规则都会被应用，重叠的属性才会计算顺序

##### 继承
1. font-family和color属性会被子元素继承，而margin，padding，border 和 background-image等不会被继承
2. 四种特殊的通用属性值：inherit(继承父元素样式), initial（浏览器默认样式）, unset（不设置值）, revert（自定义值）
3. 执行继承的前提是层叠优先

#### 框模型
1. ![框属性示意图](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)
2. border的属性组合：top、right、bottom、left与width、style、color
3. 外边距塌陷：当两个框彼此接触时，它们的间距将取两个相邻外边界的最大值，而非两者的总和（较小的margin有效宽度为0，只留下值较大的margin）
4. content的可用空间：在margin, border, padding占据了它们的空间后剩下的空间的宽度和高度（默认为100%）
5. 框的高度总是采用框内容的高度，除非指定一个绝对的高度
6. overflow属性：控制内容是否溢出：auto（滚动条），hidden（隐藏），visible（显示）
7. 背景裁剪：background-clip: border-box；padding-box; content-box
8. 默认情况下只有块级元素(block box)才具有盒子模型的属性
9. 三种常见框类型：块框（ block box），行内框（ inline box），行内块状框（inline-block box）：不会在段落行中断开

#### 调试CSS
1. CSS也是宽容的，如果声明或选择器出错，将直接会被忽略

### 样式化文字
#### 基本文本和字体样式
1. 文本样式=字体样式+文本布局风格

##### 字体
1. 颜色：<code>color</code>属性设置选中元素的前景内容的颜色
2. 字体：<code>font-family</code>属性为浏览器指定字体或字体列表，如果字体不可用会用默认字体代替
3. 默认字体风格：<code>serif, sans-serif, monospace, cursive,和 fantasy</code>5种风格，具体使用字体取决于浏览器及操作系统
4. 设置字体栈（有序提供多个可选字体）：字体名称间用逗号分离，不止一个单词的字体用引号包裹，建议最后提供一个风格字体
5. 元素的<code>font-size</code>属性从父元素继承,浏览器默认设置值为16px（<html>)
6. 最佳实践：将文档的<html>的基础<code>font-size</code>设置为10px，方便计算em
7. 字体样式<code>font-style:normal,italic,oblique</code>,字体粗细<code>font-weight:normal,bold</code>,字型转换<code>text-transform:none,uppercase,lowercase,capitalize,full-width</code>,文本装饰<code>text-decoration:none,underline,overline,line-through</code>
8. 文字阴影：<code>text-shadow: 4px 4px 5px red</code>,参数分别为水平偏移，垂直偏移，模糊半径，阴影颜色

##### 文本布局
1. 文本对齐：<code>text-align:left right center justify</code>
2. 行高：<code>line-height</code>属性设置文本每行之间的高，接受长度单位，也可设置一个无单位值作为乘数（乘以<code>font-size</code>。
3. 字母间距：<code>letter-spacing</code>;单词间距：<code>word-spacing</code>
4. <code>font</code>简写方式：<code> font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family</code>，只有font-size和font-family必须指定

#### 样式化列表
1. <code>list-style-type</code> ：设置用于列表的项目符号的类型，例如无序列表的方形或圆形项目符号，或有序列表的数字，字母或罗马数字。
2. <code>list-style-position</code> ：设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。
3. <code>list-style-image</code> ：允许您为项目符号使用自定义图片，而不是简单的方形或圆形。
4. 以上3条简写方式：<code>list-style: square url(example.png) inside;</code>
5. 列表技术开始值：<code>\<ol start="4"></code>;倒数计数：<code>\<ol start="4" reversed></code>
6. 直接设置列表项指定数值：<code>\<li value="6"></code>

#### 样式化链接
##### 应用样式
1. 链接状态，每个状态都有对应的伪类：
    - Link (没有访问过的): 链接的默认状态，使用:link 伪类来应用样式。
    - Visited: 已经被访问过了(存在于浏览器的历史纪录), 使用:visited 伪类来应用样式。
    - Hover: 当用户的鼠标光标刚好停留在这个链接，使用:hover 伪类来应用样式。
    - Focus: 当链接被选中的时候 (比如通过键盘的 Tab 移动到这个链接的时候，或者使用编程的方法来选中这个链接 HTMLElement.focus()) 可以使用:focus 伪类来应用样式。
    - Active: 当链接被激活的时候 (比如被点击的时候)，可以使用 :active 伪类来应用样式
2. border-bottom和text-decoration都可以生成下划线，但前者样式更好一些，因为绘制位置更低，不会穿过字母
3. 当 border-bottom属性未设置颜色时边框采用和元素文本一样的颜色，text-decoration:none去下划线

##### 在链接中插入图标
1. 对应CSS规则为：
    ```html
    a[href*="http"] {
      background: url('https://mdn.mozillademos.org/files/12982/external-link-52.png') no-repeat 100% 0;
      background-size: 16px 16px;
      padding-right: 19px;
    }
    ```
##### 样式化链接为按钮
1.  <code>display</code> 属性为 inline、inline-block

#### Web字体
1. 传统字体使用方式的限制：浏览器或所在系统必须支持该字体，使用web字体可以突破此限制
2. 使用方式：在CSS开始处通过<code>@font-face</code>指定下载字体文件，然后在规则中引用
    ```html
    @font-face {
      font-family: "myFont";
      src: url("myFont.ttf");
    }
    ```
3. 一个html文件可以调用任意多个文件名不重复的css文件

##### 测试
1. 文字样式化顺序：字体-文本-链接-列表-导航栏菜单

### 样式化区块
#### 盒模型概要
1. 设置宽和高的约束,使页面内容可以灵活响应，又限制最大宽度：
    ```html
    width: 70%;
    max-width: 1280px;
    min-width: 480px;
    margin: 0 auto;
    ```
2. 将图像和视频限制在容器内部，使之不溢出。父容器宽度缩小到小于图像的宽度时，图像会一起缩小：
    ```html
    display: block;
    margin: 0 auto;
    max-width: 100%;
    ```
3. 改变盒子宽度的计算方式：<code>box-sizing: border-box;</code>
4. 常见的盒子类型（<code>display</code>属性指定：
    - 块盒(block box)：堆放在其它盒子之上的盒子（不在一行），可以设置高度和宽度。上述盒模型都适用于块盒。
    - 行内盒（inline box）：与周围的文本和其它行内元素出现在同一行，随文本流换行。宽度和高度设置无效；所有内边距、外边距和边界设置会改变周围文本的位置，但不会影响周围块盒的位置。
    - 行内块盒（inline-block box）：跟随周围的文本流堆放不换行；可以使用宽度和高度设置大小，具有块完整性—不会跨段落行换行（空间不够会下落到第二行）
5. 块级元素默认设置为 <code>display: block;</code>，行内元素默认设置为<code>display: inline;</code>

#### 背景
1. 默认情况下是指元素内容、内边距和边界下层的区域（不包括margin），但可以通过<code>background-clip</code>改变背景区域
2. 背景并不在外边距下层——外边距不是元素区域的一部分，而是元素外面的区域

##### 基本属性
1. 背景颜色<code>background-color</code>：默认颜色为透明（transparent），尽量设置后备颜色
2. 背景图像<code>background-image</code>：使用url()函数添加图像文件，默认情况是平铺重复的，支持包括svg的各种格式
3. 背景重复：<code>no-repeat, repeat-x, repeat-y, repeat.
4. 背景位置：指定图像的水平和垂直坐标，图像的左上角为原点。如果只指定一个值，将被假定为水平值，垂直值将默认为center，**百分比表示结束位置**
5. 背景渐变：<code>background-image: linear-gradient(to bottom, yellow, orange 40%, yellow);</code>，百分比表示结束位置
6. 背景附着：<code>scroll</code>:更对页面滚动；<code>fixed</code>:始终不滚动；<code>local</code>:跟随元素滚动
7. 背景简写：简写以上属性<code>background: yellow linear-gradient(to bottom, yellow, #dddd00 50%, orange) no-repeat 99% center;</code>
8. 多重背景：用逗号分隔多个成组的背景声明，第一个出现在顶部，第二个在下面，以此类推
9. 背景尺寸：<code>background-size: 16px 16px;</code>,可以使用px、em、百分比等单位

#### 边框
1. 没有明确设置值时，默认使用文本的颜色，宽度为3px
2. 边框类型：<code>solid, dashed, dotted</code>
3. 边框半径：<code>border-radius: 20px;</code>,对应上左、上右、下右、下左四个角，可以使用em、百分比等单位。
4. 边框图像：
    ```html
      border: 20px solid black;  /* 作为后备属性 */
      background-clip: padding-box;
      border-image-source: url(https://mdn.mozillademos.org/files/13060/border-image.png);
      border-image-slice: 40; /* 4个方向向内裁切偏移量，单位默认为px */
      border-image-repeat: round; /* 平铺但不会截断 */
    ```
#### 样式化表格
1. 固定表格布局，使其不因元素内容改变大小（应设定固定百分比宽度）：table-layout属性设置为fixed
2. 取消单元格之间的间隔：border-collapse属性设置为collapse
3. 默认情况下，单元格（td)text-align值为left，标题(th)为center
4. 实现斑马条纹：公式2n-1选择所有奇数的字数(1、3、5等)，2n会选择所有偶数的子数(2、4、6等等)，与关键字odd,even等同
5. caption-side属性为底部bottom时，标题被放置在表格的底部
6. 优化建议： 表格布局-列宽行高-边框-元素字体、间距、对齐方式-背景图片-斑马条纹-表头文字

#### 高级盒模型特性
1. 盒子阴影：<code>box-shadow: 5px 5px 5px rgba(0,0,0,0.7);</code>.属性值：水平偏移、垂直偏移、模糊半径、基本颜色
2. 多个盒子阴影：指定多个框阴影声明，用逗号分隔
3. 内部阴影： box-shadow属性的开始处增加inset关键字
4. Filters滤镜： 作用于盒（box）内内容（content）的确切形状，而不仅仅将盒子本身作为一个大的块
5. 混合模式： 讲元素与背景图片颜色混合显示 <code>background-blend-mode: multiply;</code>
6. <code>-webkit-background-clip: textEdit</code>;<code>-webkit-text-fill-color: transparent;</code>: 将背景图案填充为字体形状(其余背景不显示)

#### 评估
1. 内嵌阴影关键字为<code>inset</code>

### CSS布局
#### CSS布局基本介绍
1. 正常布局流：浏览器默认的HTML解析布局方式
2. 浮动： <code>float: left, right, none, inherit;</code>, 改变元素堆叠方式（上下变成左右），最常用于文字浮动于元素周围
3. 定位技术(position属性)，精确控制元素位置：
    - 静态定位(static)默认的属性——“将元素放在文档布局流的默认位置”。
    - 相对定位(relative)允许我们相对元素在正常的文档流中的位置移动它——包括将两个元素叠放在页面上
    - 绝对定位(absolute)将元素完全从页面的正常布局流中**移出**，相对某个元素进行固定，例如通过标签显示和隐藏的内容面板
    - 固定定位(fixed)将一个元素相对浏览器视口固定，而不是相对另外一个元素。 在创建类似页面滚动总是处于页面上方的导航菜单时非常有用。
    - 粘性固定(sticky)屏幕范围（viewport）内时该元素的位置不受到定位影响，当该元素的位置将要移出偏移范围时，定位又会变成fixed，根据设置的left、top等属性成固定位置的效果
4. <code>display</code>属性：block、inline、block-inline设置在正常布局流中的显示方式（所有元素通过该属性的默认值定义如何显示）

#### 正常布局流
1. 默认情况下，一个块级元素的内容宽度是其父元素的100%，并且与其内容一样高
2. 内联元素高宽与他们的内容高宽一样。不能对内联元素设置宽度或高度

#### 弹性盒子
1. 指定父元素的布局为flexible：<code>display: flex</code>
2. 弹性盒子默认主轴方向为<code>row</code>,设置方式：<code>flex-direction: column</code>,后加-reverse可反向
3. 让弹性盒子在有必要时拆行：<code>flex-wrap: wrap;</code>
4. <coed>flex-flow</code>为<code>flex-direction</code>和<code>flex-wrap</code>的缩写
5. flex项的动态尺寸：<code>flex: 1;</code>中1为无单位的比例值，表示每个flex项沿主轴的可用空间大小。后加固定单位表示在按比例分配前的预置空间
6. <code>align-items</code>控制flex项在交叉轴上的位置：stretch(默认值)拉伸填充；center保持原高度但居中，flex-start，flex-end在开始或结束处对齐
7. <code>justify-content</code>控制flex 项在主轴上的位置,属性值同上（space-around沿主轴均匀分布）
8. flex项排序：<code>order: 1;</code>,默认值为0，越小越靠前，值相等则按源顺序排序（可以设置负值）

#### 网格
1. 参考文章：[learn css grid](https://learncssgrid.com/)

##### Grid
2. 创建网格容器：<code>display: grid</code>(或inline-grid),容器内的子元素成为<code>grid itrm</code>,默认按列排布，填充容器宽度
3. 显式设置固定网格:通过<code>grid-template-columns和grid-template-rows</code>属性创建行和列
4. <code>grid-template-rows: 50px 100px</code>创建网格row track（轨道），高度值可以为px,%,em等，未定义的轨道高度为内容高度。(columns基本相同，但限定每行列数)
5. <code>fr</code>单位示例：1fr = ((width of grid) - (3rem) - (25% of width of grid)) / 3
6. 设置网格track的最小值和最大值示例：<code>grid-template-rows: minmax(100px, auto);grid-template-columns: minmax(auto, 50%) 1fr 3em;</code>
7. 使用<code>repeat()</code>函数重复设置轨道数值：<code>grid-template-rows:repeat(4, 100px);</code>,参数1为重复次数，参数2为重复数值
8. 网格间隔Grid Gaps(Gutters)：定义行列之间（不包括容器边缘）的间隔，简写方式<code>grid-gap: 100px 1em</code>(row&column)

##### Items
9. 通过网格分界线定位：<code>grid-row:2;grid-column: 3/4;</code>,<code>grid-area: 2 / 2 / 3 / 3</code>代表grid-row-start, grid-column-start, grid-row-end, grid-column-end.
10. grid items的跨行或跨列分布：<code>grid-row: 2 / 5;grid-column: 2 / 4;</code>（简写start和end)
11. 通过Grid Areas命名放置items,每个名称定义1列，每组名称定义1行：
    ```html
    grid-template-areas:   "header header"
                            "content sidebar"
                            "footer footer";
    grid-template-rows:    150px 1fr 100px;
    grid-template-columns: 1fr 200px;
    ```
放置item：<code>grid-row-start:header;grid-row-end:header;grid-column-start:header;grid-column-end:header;</code>（可简写）或<code>grid-area: sidebar;</code>
12. 放置item：<code>.item-2 {grid-row-start: 1; grid-column-end: span 2;}</code>

##### Aligning Grid Items
13. 网格容器对齐属性：<code>justify-items</code>沿行轴对齐；<code>align-items</code>沿列轴对齐。常用值：start,end,center,stretch,auto,normal
14. items个体对齐属性：<code>justify-self</code>沿行轴对齐；<code>align-self</code>沿列轴对齐。常用值同上
15. 在css内执行计算：使用<code>calc()</code>函数。

#### 浮动
1. 工作方式：脱离正常的文档布局流，并吸附到其父容器的左边或右边。正常布局中位于该浮动元素之下的内容，会围绕着浮动元素填满其右侧的空间
2. 文字围绕图片：<code>img {float: left;margin-right: 30px;}</code>
3. 首字下沉：<code>p::first-letter {font-size: 3em;float: left;margin-right: 4px;}</code>
4. 多列浮动布局：设置元素合理宽度，增加<code>float</code>属性，需要时设置<code>margin</code>间隔
5. 使用浮动可以使可视化布局与源顺序不同
6. 需要注意的问题：所有在浮动下面的自身不浮动的内容都将围绕浮动元素进行包装，解决方案：<code>footer {clear: both;}</code>此处起停止浮动
7. 由于内边距和边界引入的额外宽度，原有的多列布局容易被破坏，解决方案：<code>* {box-sizing: border-box;}</code>更改盒模型
8. 页脚问题：页脚正压在最长列上，非浮动元素的外边距不能用于它们和浮动元素之间来创建空间，解决方案：页脚之上增加一个空白<div>clearfix清除浮动块
9. 浮动项目的背景高度，设置固定高度容易出现问题；Flexbox可以自动地延长列，使高度和最长的一列一样。

#### 定位
1. 盒模型原理：环绕元素内容添加任何内边距、边界和外边距来布置单个元素盒子
2. 相对定位：<code>position: relative;</code>，使用<code>top, bottom, left, right</code>属性，相对正常布局位置进行长度移动
3. 绝对定位：不再存在于正常文档布局流，默认情况下相对<code>\<html></code>元素固定，通过<code>position: relative;</code>指定相对元素
4. 使用<code>z-index</code>更改堆叠顺序：源顺序中后定位的元素将堆叠在先定位的元素之后，z-index值默认为0，值越大展示优先级越高
5. 固定定位相对于浏览器视窗本身固定元素，也不再存在于正常文档布局流，注意在下方的元素增加上边距
6. 粘性定位：元素在跨越特定阈值前为相对定位，之后为固定定位，如<code>#one { position: sticky; top: 10px; }</code>

#### 定位实例
1. 消息盒子思路：将消息panel设置为绝对定位（相对于所在父元素）进行覆盖，被选中的元素z-index值设为1，显示在最上面
2. 固定位置消息盒子思路：将消息盒子设为fixed，主内容设置足够的margin-left值
3. 滑动隐藏面板思路：label+checkbox（input），点击label则checkbox进入checked状态（可被伪类选择器选中），分别设置选中前后面板位置，设置transition属性实现动画。

#### 多列布局
1. 创建多列布局：设置的容器的<code>column-count 或者 column-width</code>.
    - <code>.container {column-count: 3;}</code>，创建制定数量的列，宽度由浏览器计算平均分配
    - <code>.container {column-width: 200px;}</code>，浏览器按指定宽度尽可能多的创建列；除非刚好除尽，否则剩余的空间会被现有的列平分（不能用百分比）
2. Multicol 创建的列无法为某一列单独的设定样式（背景、文本），只能设定以下样式：
    - 使用<code> column-gap: 200px </code>改变列间间隙(接受任何长度单位)
    - 用<code> column-rule: 4px dotted blue</code> 在列间加入一条分割线(用法同border)，分割线本身并不占用宽度
3. 设置<code>break-inside: avoid; 或者 page-break-inside: avoid;</code>防止某一元素在自动分列时从内部被割断

### 响应式Web设计
#### Viewport


## JavaScript — 用户端动态脚本
### JavaScript第一步
#### 什么是JavaScript
1. JavaScript是一种脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画
2. 借助于应用程序接口(API)，JavaScript能实现更强大的功能。API如文档对象模型API、地理位置API、画布API及第三方API
3. 通过DOM动态修改HTML和CSS来更新UI是JavaScript最普遍的用处。如果JavaScript在HTML和CSS就位之前加载运行，就会引发错误
4. 每个浏览器标签页的代码运行环境是相对独立的以保障安全性
5. 添加JavaScript：
    - 内部添加：在<code>\</body>/<code>标签前插入<code>\<script>\</script></code>元素
    - 外部引用：创建js文件并使用<code>\<script></code>的<code>src</code>属性进行引用
    - 内联处理器：不要使用此操作，示例<code>\<button onclick="createParagraph()">点我呀</button></code>
6. 注释：双斜杠后添加单行注释，在 /* 和 */ 之间添加多行注释

#### 初次接触JavaScript
1. 示例-猜数字游戏

#### 调试代码错误
1. 错误分类：**语法错误**或**逻辑错误**
2. 调试工具：浏览器开发者工具
3. 常见错误：语句缺少分号；参数列表缺少冒号；属性ID缺少冒号；函数体末尾缺少花括号；字符串缺少闭口引号

#### 变量
1. 特点：存放的值可以改变，能够存储任何东西
2. 变量不是数值本身，它们仅仅是一个用于存储数值的容器
3. 使用变量需要先声明，也可在赋值的同时声明：<code>var myName = 'Chris';</code>
4. 小写驼峰命名法：小写整个命名的第一个字母然后大写剩下单词的首字符
5. 避免使用保留字
6. JavaScript的布尔类型表示是true和false，不大写
7. Array类似与Python中的列表，可通过下标索引
8. Object概念类似于Python中的类实例，通过<code>var dog = { name : 'Spot', breed : 'Dalmatian' };</code>定义对象属性

#### 数字和操作符
1. JavaScript只有1个数值类型：Number，拥有整数、浮点数、双精度浮点数等十进制数
2. 算数运算符：<code>+</code>,<code>-</code>,<code>*</code>,<code>/</code>,<code>%</code>,基本规则同Python
3. 递增和递减运算符：加1或减1
4. 赋值运算符：基本同Python
5. 比较运算符：除===和！==外基本同Python

#### 字符串
1. 引号使用条件基本同Python
2. 同样使用反斜杠\转义
3. 连接字符串：使用<code>+</code>拼接字符串
4. 字符串和数值拼接时，数值将被自动转换为字符串
5. 使用<code>.toString()</code>方法将数值转换为字符串
6. 使用<code>Number()</code>函数将字符串转换为数值（类似int())

#### 字符串方法
1. 获取字符串长度：<code>length</code>属性
2. 通过下标索引子串：<code>browserType[browserType.length-1];</code>
3. 在字符串中查找子串：<code>browserType.indexOf('zilla');</code>返回索引值或-1（不存在）
4. 提取字符串子串：<code>browserType.slice(0,3);</code>，如果没有传入第二个参数，结束位置会在原始字符串的末尾
5. 转换大小写：<code>toLowerCase()和toUpperCase()</code>方法
6. 替换字符串：<code>browserType = browserType.replace('old','new');</code>

#### 数组
1. 创建数组(类似Python列表)：
    ```
    var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
    shopping;
    ```
2. 访问和修改组项：基本和Python相同
3. 查找数组长度：<code>sequence.length;</code>,常见的数组遍历循环：
    ```
    var sequence = [1, 1, 2, 3, 5, 8, 13];
    for (var i = 0; i < sequence.length; i++) {
      console.log(sequence[i]);
    }
    ```
4. 分割字符串为数组：<code>ar myArray = myData.split(',');</code>
5. 联结数组为字符串：<code>var myNewString = myArray.join(',');</code>
6. 将数组转换为字符串的另一种方法是使用toString()方法:
    ```
    var dogNames = ["Rocket","Flash","Bella","Slugger"];
    dogNames.toString(); //Rocket,Flash,Bella,Slugger
    ```
7. 添加和删除数组项：
    - 在数组末尾添加或删除一个项目，使用<code>push(item)</code>和<code>pop()</code>方法
    - 在数组开始处添加或删除一个项目，使用<code>unshift(item)</code>和<code>shift()</code>方法

### JavaScript基础要件
#### 条件语句
##### if...else语句
1. 基础语法（不一定需要else和第二个花括号）：
    ```html
    if (condition) {
      code to run if condition is true
    } else {
      run some other code instead
    }
    ```
2. 分支条件语句：<code>else if</code>等于Python中的<code>elif</code>
3. 任何不是false, undefined, null, 0, NaN的值或一个空字符串（''）在作为条件语句进行测试时实际返回true
4. 逻辑运算符（可组合使用）：
    - <code>&&</code>逻辑与，等于python中的and
    - <code>||</code>逻辑或，等于python中的or
    - <code>！</code>逻辑非，等于python中的not

##### switch语句
1. 基础语法（default语句非必需，用来处理未知情况）：
    ```html
    switch (expression) {
      case choice1: // 如果选择与表达式匹配，则运行下方代码
        run this code
        break;
        
      // include as many cases as you like
      
      default:
        actually, just run this code
    }
    ```
##### 三元运算符
1. 条件语句的简略形式：
    ```html
    ( condition ) ? if true run this code : or run this code instead
    ```
#### 循环结构
1. for循环基础语法：
    ```html
    for (initializer; exit-condition; final-expression) {
      // code to run
    }
    ```
2. for循环常见实例：
    ```html
    var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
    var info = 'My cats are called ';
    var para = document.querySelector('p');
    
    for (var i = 0; i < cats.length; i++) {
      if (i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
      } else {
        info += cats[i] + ', ';
      }
    }
    
    para.textContent = info;
    ```
3. 注意无限循环问题
4. 使用break退出循环
5. 使用continue跳过后续语句
6. while循环基础语法：
    ```html
    initializer
    while (exit-condition) {
      // code to run
    
      final-expression
    }
    ```
7. do...while循环基础语法（先执行一次再检查条件）：
    ```html
    initializer
    do {
      // code to run
    
      final-expression
    } while (exit-condition)
    ```
#### 函数
1. 内置函数：大多数调用浏览器后台的函数的代码，是使用像C++这样更低级的系统语言编写的
2. 内置浏览器函数并不是函数——它们是方法，内置浏览器功能（方法）和变量（称为属性）存储在结构化对象内
3. 匿名函数通常用于运行负载的代码以响应事件触发（如点击按钮）-使用事件处理程序，常见示例：
    ```html
    var myButton = document.querySelector('button');
    
    myButton.onclick = function() {
      alert('hello');
    }
    ```
4. 数组join（）函数的参数默认为逗号分隔符
5. 所有函数的最外层被称为全局作用域。 在全局作用域内定义的值可以在任意地方访问。
6. 函数作用域（同Python）

#### 自定义函数
1. onclick后应该接函数名称而不用加括号：<code>btn.onclick = displayMessage;</code>
2. 如果要在点击事件里面绑定函数，不能直接使用displayMessage('Woo'),要把它放在一个匿名函数里面，不然函数会直接调用

#### 函数返回值
1. random()函数接受1个参数-1个整数，返回0到这个整数之间的随机数
2. isNaN()函数测试num的值是否不是一个数字-如果不是数字，就返回true，否则返回false

#### 事件
1. 事件是在编程时系统内发生的动作或者发生的事情，系统会在事件出现的时候触发某种信号并且提供自动加载某种动作（如运行代码）的机制
2. 事件触发时会运行的代码块即为事件处理器
3. onclick是被用在这个情景下的事件处理器属性，将一些代码赋值给它时，只要事件触发代码就会运行。
4. 请勿使用行内事件处理器
5. addEventListener()和removeEventListener()，参数分别为事件处理器名称和要执行的代码块，可以方便的添加和清除处理器
6. 使用addEventListener()的优势：可以删除事件处理程序代码；可以向同一类型的元素添加多个不同代码的监听器
7. 事件对象：事件对象e的target属性始终是事件刚刚发生的元素的引用，可以使用任何名称作为事件对象，使用示例：
    ```html
    var divs = document.querySelectorAll('div');
    
    for (var i = 0; i < divs.length; i++) {
      divs[i].onclick = function(e) {
        e.target.style.backgroundColor = bgChange();
      }
    }
    ```
8. onsubmit事件处理器：表单被提交时触发；preventDefault()函数，停止表单提交
9. 事件触发顺序：冒泡及捕获（默认情况下，所有事件处理程序都在冒泡阶段进行注册）：
！[事件冒泡及捕获](https://mdn.mozillademos.org/files/14075/bubbling-capturing.png)
10. 在标准事件对象上调用stopPropagation()函数, 让当前事件处理程序可以运行但不会在冒泡链上扩散
11. 事件委托:在父节点上设置事件监听器通过冒泡影响每个子节点,代替在每个子节点上设置监听器

#### 评估
1. JavaScript貌似不提供格式化字符串方法,大部分场景通过字符串与变量实现,也可以自定义格式化函数(传入参数替换占位符)

### JavaScript对象介绍
#### JavaScript对象基础
1. 对象语法(每一个名字/值对被逗号分隔开，并且名字和值之间由冒号分隔):
    ```html
    var objectName = {
      member1Name : member1Value,
      member2Name : member2Value,
      member3Name : member3Value
    }
    ```
2. 传输一些有结构和关联的资料时常见的方式是使用字面量来创建一个对象
3. 使用与Python类似的方式来访问对象的属性和方法,可以在对象内部嵌套另一个对象
4. 除了.表示法还可以使用括号表示法:<code>person.name.first</code>等价于<code>person['name']['first']</code>
5. 可以直接用以上方法访问,修改甚至创建对象成员\
6. 点表示法只能接受字面量成员的名字(实质为字符串).括号表示法可以接受变量作为名字
7. "this"含义类似Python中的"self",指代当前实例对象(代码运行时所在的对象)
8. 每个页面在加载完毕后，会有一个Document的实例被创建，叫做document，它代表了整个页面的结构，内容和一些功能，比如页面的URL
9. 内建的对象或API不会总是自动地创建对象的实例,有些需要使用构造器进行实例化

#### 适合初学者的面向对象JavaScript
1. 最基本的OOP思想就是我们想要在程序中使用对象来表示现实世界模型, 并提供一个简单的方式来访问它的信息和功能
2. 多态——用来描述多个对象拥有实现共同方法的能力
3. javaScript没有创建Class类的声明,使用构建函数来定义对象和他们的特征,与Python实例化有所区别
4. 构建函数就是JavaScript版本的类定义(首字母大写以便区别):
    ```html
    function Person(name) {
      this.name = name;
      this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
      };
    }
    ```
5. 构造对象实例方法(关键字 new +含参函数):
    ```html
    var person1 = new Person('Bob', 'Smith', ...);
    ```
6. 其他创建对象实例的方式1-使用Object构造该函数(可以将对象文本传递给函数作为参数):
    ```html
    var person1 = new Object({
      name : 'Chris',
      age : 38,
      greeting : function() {
      alert('Hi! I\'m' + this.name + '.');
      }
    });
    ```
7. 其他创建对象实例的方式2-使用create()方法,基于现有对象创建新的对象实例:
    ```html
    var person2 = Object.create(person1);
    ```
person2基于person1创建， 具有相同的属性和方法    

#### 对象原型
1. JavaScript通过原型机制，从其他对象继承功能特性；这种继承机制与经典的面向对象编程语言的继承机制不同
2. 每个函数都有一个原型(prototype)属性,该原型属性是一个对象
3. 默认情况下, 所有函数的原型属性的 \__proto__ 就是 window.Object.prototype
4. 示例:
    ```html
    function doSomething(){}
    doSomething.prototype.foo = "bar";
    console.log( doSomething.prototype );
    [output]:
    {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
    ```
##### 原型链
5. 原型链中的方法和属性没有被复制到其他对象——它们被访问需要通过“原型链”的方式
6. 使用对象的<code>\__proto__</code>属性可以访问其原型对象

##### 在prototype属性中定义继承成员
7. 继承的属性和方法是定义在对象的prototype 属性之上,其他的对象属性不会被继承
8. prototype 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员
9. Object.create() 实际做的是将原对象作为原型对象创建一个新的对象:,<code>person2.__proto__</code>返回对象person1

##### constructor属性
10. 通过使用对象的constructor属性可以引用原始构造器创建一个和原对象一类的对象:<code>var person3 = new person1.constructor('Karen'...);
11. 获得某个对象实例的构造器的名字:<code>person1.constructor.name</code>

##### 修改原型
12. 向构造器的prototype属性添加新的方法,旧有对象实例的可用功能会被自动更新
13. 一般来说, 在构造器内定义常属性比在prototype上定义更好
14. 常见定义模式:在构造器（函数体）中定义属性,在 prototype 属性上定义方法,示例:
    ```html
    function Test(a,b,c,d) {
      // 属性定义
    };
    // 定义方法
    Test.prototype.x = function () { ... }
    Test.prototype.y = function () { ... }
    ```
#### JavaScript 中的继承
1. JavaScript继承的对象函数并不是通过复制而来，而是通过原型链继承（通常被称为原型式继承 —— prototypal inheritance）。

##### 继承操作步骤
2. 在父类构造器中声明继承的属性,在构造器原型上定义需继承的方法
3. 定义子类的构造器函数(调用父类构造器函数,定义新属性):
    ```html
    function Teacher(first, last, age, gender, interests, subject) {
      Person.call(this, first, last, age, gender, interests);
    
      this.subject = subject;
    }
    ```
4. 设置子类的原型和构造器引用:
    ```html
    Teacher.prototype = Object.create(Person.prototype);
    
    Teacher.prototype.constructor = Teacher;
    ```
5. 添加或覆盖新的方法:
    ```html
    Teacher.prototype.greeting = function() {
    
      alert('Hello. My name is ' + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
    };
    ```
##### 总结
6. 如果继承的构造函数不从传入的参数中获取其属性值，则不需要在call()中为其指定其他参数
7. 每一个函数对象都有并且只有函数对象有prototype属性，prototype本身就是定义在Function对象下的属性
8. 任何要被继承的方法都应该定义在构造函数的prototype对象里，并且永远使用父类的prototype来创造子类的prototype，这样才不会打乱类继承结构
9. 对象成员总结:3种属性或方法
    - 定义在构造器函数中,用于给予对象实例的.以this.x = x形式定义,通常通过使用new关键字调用构造函数来创建
    - 直接在构造函数上定义、仅在构造函数上可用的,如Object.keys()
    - 在构造函数原型上定义、由所有实例和对象类继承

##### 何时使用继承
1. 当需要一系列拥有相似特性的对象，创建一个包含共有功能的通用对象，然后在特殊的对象类型中继承这些特性
2. 不要临时或永久修改浏览器内置对象的原型

#### 使用JSON
1. JavaScript对象表示法（JSON）: 将结构化数据表示为JavaScript对象的标准格式
2. 如何访问JSON中的内容:使用.或括号表示法访问对象内的数据;访问对象中对象:通过属性名和数组索引链式访问
3. 数组对象也是一种合法的JSON对象
4. 不同于JS的对象,JSON只有字符串可以用作属性名称,但值仍旧可以为字符串，数字，数组，布尔及其它的字面值对象

##### 示例:如何载入JSON数据
1. 通过<code>XMLHTTPRequest</code>API创建HTTP请求,首先创建一个HTTP请求对象:
    ```html
    var request = new XMLHttpRequest();
    ```
2. 使用<code>open()</code>函数打开一个新的请求(参数:请求方法和地址):
    ```html
    request.open('GET', requestURL);
    ```
3. 设定返回对象类型病发送请求:
    ```html
    request.responseType = 'json';
    request.send();
    ```
4. 通过事件处理器(请求成功时触发)保存JSON数据:
    ```html
    request.onload = function() {
      var superHeroes = request.response;  
      populateHeader(superHeroes);
      showHeroes(superHeroes);
    }
    ```
5. 通过访问JSON对象中的数据进行其他处理

##### 对象和文本间的转换
1. parse(): 以文本字符串形式接受JSON对象作为参数，并返回相应的对象
    ```html
    request.responseType = 'text';
    ......
    var superHeroes = JSON.parse(superHeroesText);
    
    ```
2. stringify(): 接收一个对象作为参数，返回一个对应的JSON字符串
    ```html
    var myJSON = { "name" : "Chris", "age" : "38" };
    var myString = JSON.stringify(myJSON);
    ```
#### 实践对象构造
1. 绘制canvas画布,设定宽度和高度;创建随机位置和随机颜色函数
2. 创建小球构造器,定义生成坐标、速度、颜色、半径等属性
3. 通过ctx对象方法创建绘制小球方法
4. 创建更新小球位置方法：检测是否到达边框，反转小球的速度方向来让它向反方向移动，每次调用移动速度值距离
5. 创建动画：创建小球对象的数组，创建循环函数（循环生成指定数量小球，遍历绘制与更新），使用requestAnimationFrame() 递归运行循环函数
6. 添加碰撞检测：遍历所有小球，对判断非当前的小球计算距离检测是否碰撞，如碰撞则更改两个小球颜色

### 客户端Web API
#### Web API简介
1. API分类：浏览器内置API；第三方API

##### 回调函数
1. 由另一个函数作为参数的函数称为 (callback function "回调函数").
2. 需要异步操作（需使用第一步操作返回结果，容易出错）：
    ```html
    var position = navigator.geolocation.getCurrentPosition();
    var myLatitude = position.coords.latitude;
    ```
3. 设计成回调函数：
    ```html
    navigator.geolocation.getCurrentPosition(function(position) { ... });
    ```
##### API工作方式
1. 通常基于对象进行交互，将使用的数据和提供的功能封装在对象属性和方法中
2. API对象通常包含构造函数来创建用于编写程序的对象实例;其次API对象通常接受可调整的options对象作为参数，以适应程序所需的确切环境
3. 有可识别的入口点，如文档对象模型的入口（其他个别API涉及要创建特定的上下文）：
    ```html
    var em = document.createElement('em');  <!-- 创建一个新的元素 -->
    var para = document.querySelector('p'); <!-- 引用一个已经存在的元素 -->
    em.textContent = 'Hello there!';  <!--给em元素增加文本 -->
    para.appendChild(em);  <!--embed em inside para -->
    ```
4. 使用事件来处理状态的变化，如：XMLHttpRequest对象的实例（每一个实例都代表一个到服务器的HTTP请求,来取得某种新的资源）有很多事件可用，例如onload事件在成功返回时触发
5. 在适当的地方有额外的安全机制，如只在HTTPS页面工作或需用户许可权限

#### 操作文档对象模型
1. 3种Web API访问的主要部位：
    - Window对象，当前窗口，可以返回窗口大小，操作载入窗口的文档，为当前窗口绑定事件处理器等
    - Navigator对象，浏览器存在于web上的状态和标识（即用户代理），可以获取用户地理信息、偏爱语言、多媒体流等
    - Document对象，载入窗口的实际页面，可以返回和操作文档中HTML和CSS上的信息

##### 获取操作对象
2. 选择一个元素，并将它的引用存储在变量中
    ```html
    var link = document.querySelector('a');
    ```
3. querySelector()调用匹配在文档中查找到的第一个匹配元素，Document.querySelectorAll()方法选中文档中所有匹配选择器的元素，并将其引用存储在一个数组中
4. 其他获取元素应用方法：Document.getElementById()，选择一个id属性值已知的元素

##### 创建并放置新的节点
5. 创建新元素：使用Document.createElement()，如<code>var para = document.createElement('p');</code>
6. 为新元素赋予内容（如文本）：<code>para.textContent = 'We hope you enjoyed the ride.';</code>
7. 放置新元素到父容器中：使用Node.appendChild()方法，如<code>ect.appendChild(para);</code>
8. 创建新节点：使用Document.createTextNode()创建一个文本节点，参数为文本，放置方法同上

##### 移动和删除节点
9. 移动节点：<code>sect.appendChild(linkPara);</code>,linkPara是指向该段落唯一副本的引用,重新放置会移动其位置
10. 删除节点：无法通过节点方法删除自身，必须通过父节点删除-<code>linkPara.parentNode.removeChild(linkPara);</code>

##### 操作样式
11. 方式1：通过HTMLElement.style属性直接修改内联样式，如<code>para.style.backgroundColor = 'black';</code>
12. 方式2：通过 Element.setAttribute()方法设置class属性，并创建对应类别的样式（更适用于大型项目）

##### 注意
13. 使用JavaScript创建静态内容是毫无意义的—最好直接将其写入HTML

##### 评估-创建购物清单
1. 创建需要使用元素的引用变量
2. 创建按钮响应事件函数：
    - 取出输入值并清空输入框
    - 创建新条目对应元素并组织关系
    - 填充新条目内容
    - 放置新条目
    - 创建新条目按钮响应事件函数
3. 使用focus()方法设置聚焦输入框

#### 从服务器获取数据-AJAX
##### XMLHttpRequest请求步骤
1. 构造请求目标URL
2. 使用XMLHttpRequest()构造函数创建一个新的请求对象
    ```html
    var request = new XMLHttpRequest();
    ```
3. 使用open()方法指定请求资源的HTTP request method , 以及目标URL
    ```html
    request.open('GET', url);
    ```
4. 设置期待的响应类型—由请求的responseType属性定义，XHR默认返回txt文本类型
    ```html
    request.responseType = 'text';
    ```
5. 使用请求的onload 事件处理器来处理返回的数据（response)
    ```html
    request.onload = function() {
      poemDisplay.textContent = request.response;
    };
    ```
6. 发送请求
    ```html
    request.send();
    ```
##### Fetch和Promises
    ```html
    fetch(url).then(function(response) {
      response.text().then(function(text) {
        poemDisplay.textContent = text;
      });
    });
    ```
1. 执行异步操作：传递给then()是一段不会立即执行的代码，当完成指定的操作时代码会被运行（代替xhr的响应事件）
2.  promise 解析时会自动将响应结果作为参数传递给then()内的函数
3. 执行响应的text()方法将响应作为原始文本返回
4. 另一种写法;
    ```html
    fetch(url).then(function(response) {
      return response.text()
    }).then(function(text) {
      poemDisplay.textContent = text;
    });
    ```
##### 评估
1. 返回请求状态的范式(fectch使用reponse.ok和response.status)
    ```html
    request.onload = function() {
      if(request.status === 200) {
      products = request.response;
      } else {
          console.log('Network request failed with response ' + request.status + ': ' + request.statusText);
      }
    }
    ```
#### 第三方API
1. 需要通过 <script> 元素的src属性连接到第三方服务器所开放的JavaScript库
2. 为了保证安全性，通常需要先申请密钥才能使用API
3. 通常使用第三方API的步骤：
    - 查阅有关文档
    - 获取开发者密钥
    - 连接API到你的应用
    - 通过API请求数据
    - 显示返回的数据

#### 画图
1. <code>canvas</code>和<code>WebGLS</code>不深入学习，有需要时查阅
2. 画布左上角的坐标是(0, 0)，横坐标（x）轴向右延伸，纵坐标（y）轴向下延伸

##### 简单使用canvas
1. 在HTML插入<canvas> 元素，插入反馈信息
2. 创建画布并确定尺寸
    ```html
    var canvas = document.querySelector('.myCanvas');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    ```
3. 获取画布上下文并完成设置
    ```html
    var ctx = canvas.getContext('2d');
    ```
4. 填充矩形
    ```html
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, width, height);
    ```
5. 描边线条
    ```html
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.strokeRect(25, 25, 175, 200);
    ctx.lineWidth = 5;
    ```
#### 视频和音频API
不深入学习，有需要时查阅

#### 客户端存储
1. Web Storage API提供非常简单的语法用于存储和检索较小的、由名称和相应值组成的数据项。存储简单数据比如用户的名字，用户是否登录，屏幕背景颜色等等
2. IndexedDB API 为浏览器提供完整的数据库系统来存储复杂数据。可以用于存储从完整的用户记录到甚至是复杂的数据类型，如音频或视频文件。
3. 不深入学习，有需要时查阅