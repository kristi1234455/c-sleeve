echo "# c-sleeve" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kristi1234455/c-sleeve.git
git push -u origin main

git remote add origin https://github.com/kristi1234455/c-sleeve.git
git branch -M main
git push -u origin main

appKey:
4dKnh5shspZWzo2x

驼峰命名法的可读性没有下划线强



快捷键
格式化代码： ctrl+alt+l
跳转到行末：
快速切换到下一行：ctrl shift enter


知识点：
1、谷歌浏览器可以安装octotree用来查看github中所有目录文件，可以以左侧菜单栏的方式进行查看，不用一一点进去查看

2、http工具类封装，包括promise封装，await和async使用
config----->util.js----->http----->model中的js----->page中的页面js

一、banner:
A、lin-ui的引入：
package.json是项目配置文件，app.json是全局配置文件，页面中的json是页面配置文件，
package.json中的dependencies中的版本是采用semver语法，如果以~开头，只自动更新1.1.1中第三个1的版本，如果以^开头，会自动更新第二个1的版本
引入方法一：一般采用这种方法引入
使用npm init会自动创建package.json文件
使用npm install lin-ui会自动安装lin-ui包，会在node_modules看到lin-ui的相关引入包，但是此时，小程序中还不能直接使用
需要在生成package.json文件之后，点击微信开发者工具后----->npm构件----->生成miniprogram_npm包之后，小程序才能使用lin-ui
引入方法二：
将lin-ui中的dist文件夹中的内容直接放到项目的任何一个位置，就可以使用lin-ui组件了
使用方法：
安装lin-ui组件之后，需要在app.json全局配置文件中引入lin-ui中的开发过程中使用到的组件

B、lin-ui的内容：
example文件夹中有组件相关示例
src为lin-ui组件源码

C、lin-ui的使用
更改主题色的步骤：config/style/_theme.less文件中，更改@theme-color，就可以更改主题色了
但是更改后，需要执行npm run build命令，使更改生效

二、theme/category:
A、使用组件的方式：
一种是在home.json中使用
一种是全局使用

B、组件样式隔离：
自定义组件的样式只受自定义组件wxss的影响，如果在页面的wxss或app.wxss中指定样式，会影响到页面和全部组件，不推荐
通过styleIsolation属性来进行特殊样式的隔离设置，一般组件的样式只会受到wxss的影响

C、theme优化：

D、https证书申请：
lets encrypt:可以申请https的证书，用来发送https请求
caddy nginx:也可以设置https的证书，http://canddyserver.com

三、六宫格category
A、使用组件：
引入组件：安装组件之后，还得在app.json中全局引入已安装的lin-ui中待使用的组件
在components中定义组件，包括组件的样式和数据的渲染
在页面的json文件中配置自定义组件，包括组件components的位置和使用的标签名字
在页面的wxml文件中指定组件的数据和传递数据到组件中
在页面的js文件中定义组件中使用数据的来源

B、如果自定义组件中的properties中数据都被定义成驼峰，小程序中的页面wxml使用的时候，需要将驼峰转成-的

四、优惠券
A、优惠券的复杂度大多在服务端，前端的难度在：
1、核算， 最基本的类型有满减、折扣，
2、优惠券的使用条件也是很难计算的，很多券不是全场券，只适用于某些品类，当前订单是否适用于优惠券，得判断
3、判断优惠券是否过期，包括从领取之日起开始计算过期，发布之日起开始计算过期

B、所有的优惠券发放给用户，都是通过活动进行发放的，
活动的属性有：开始时间、结束时间、是否上下架、分类（除了全场券，大部分优惠券只能作用与某些商品分类）
对于优惠券本身来说，优惠券可以被领取，也可以被使用，也有可能过期

C、首页的优惠券不需要展现数据，只需要展现活动封面，所以，可以调用获取活动（不包括优惠券数据）的api接口
a-2标识home主页里的优惠活动

D、背景颜色的设置
i-如果在home.json中通过backgroundColor来设置背景颜色，会出现上下部分黑色框的情况，
小程序上下拖动到底的时候，就是页面的背景，而这里的背景指的是窗口，即当前窗口的背景
ii-如果在页面的wxss中设置背景色，那就达不到所有的页面都使用同样的背景色的效果，并且当前页面的背景色会显示在所有模块，不符合
页面的wxss中的背景色与app.wxss中的背景色是相冲突的，app.wxss中的部分属性也会作用到页面，需要解决
iii-解决方法：
1-去掉app.wxss中的默认配置，避免与页面的样式冲突
2-小程序放入图片，会自带10rpx的margin，更改背景色后，就会看出来，需要给图片增加display:flex，消除图片自带间距
3-六宫格的背景色变化是因为，如果没有自定义六宫格背景色，那默认是透明的
4-优惠券活动的图片也会自带下边距，颜色会产生变化，通过增加display:flex
Ⅳ-这种方法只能作用与一个页面，去掉页面的view中的背景色，最好方法是在app.wxss中设置page元素的背景色
调试器中wxml中可以看到页面结构，page中包裹写的view等自己写的结构

五、每周上新
不同于banner中的每周上新，只是一张图片展示，这里的每周上新，还包括部分产品的展示，如产品图片、名称、价格的展示

六、theme的改写优化
A、首页获取http的请求有三种方式：
1、每一个数据，就请求一次http
2、一个home页面只发送一次http
3、有选择的将部分http请求合并成一个

B、页面的性能主要看：
1、http请求数量
2、每次http请求会引起多少次数据查询，或者是join的表越多，性能越差
3、考虑接口的灵活性和服务器接口的课维护性，灵活性越高，可维护性越高，省下来的开发时间越多，查看接口粒度
web应用一般都是IO密集型的，瓶颈一般在IO上，如数据库查询，redis读写等，都是IO查询，
另外一种是CPU密集型，如视频的转码、解码等，一般都单独放在另一台服务器上

C、重构theme
函数编程：使用find\filter\map\some\reduce等函数编程中的关键方法
类保存数据，但不能保存状态。如果不需要保存状态，就用static，如果需要保存状态，就不用static，用实例
复杂的对象一般还会进一步封装成多个对象。
一般不用static来保存对象的数据，因为扩展性不够，
async是强制保证返回promise，如果是http请求，需要加async，如果只是返回1等非http请求，就不需要加async

七、scroll-view组件的使用
A、需要展示每周上新的图片，下面依次滚动商品的图片、文字描述、价格
view不带滚动条，scroll-view带滚动条，page的scroll-view是只带页面的滚动条，
但是有的情况是页面会存在多种滚动，如左侧导航栏的滚动，右侧商品的滚动，需要多个滚动条
页面的滚动条会盖住底部固定浮动的购物车信息

B、复用的考虑
代码足够复杂和考虑代码的复用性，都可以封装成组件

C、使用lin-ui的price组件
app.json中引入price组件，外部样式类的样式加上!important，因为与内部样式类的执行顺序是不确定的，
所以为了以防万一，直接使用!important
这样就可以直接调用了

D、自定义代码输入的快捷键

E、注意scroll-view的样式设置，包括scroll-view的属性设置

F、100%的width和padding的设置，需要加上box-sizing

G、WXS的使用
WXS就相当于是JavaScript的filter过滤器，是用来对获取的数据进行显示计算操作的，
支持ES5，不支持ES6和ES7，所以不使用const\export\
JavaScriptCore WKWebView
V8 XWeb chrome
Nw.js Chromium

使用方法：
使用wxs标签引入外部wxs，并使用module指明引入后用什么标签指代
使用标签指代外部wxs，直接使用，这里使用s.substring，就需要先用wxs标签引入，module指代

H、设置自定义快捷键
setting----->Editor----->Live Templates----->+live templates----->右键change，设置使用的区域

I、自定义组件的样式：如外边距
方法一：可以在原生组件上定义外边距，样式效果与自定义组件效果一致
方法二：可以引入外部样式类
1、在自定义组件的js文件中，定义externalClasses类，设置外部样式类的名称
2、在自定义组件的wxml写入外部样式类
3、在使用自定义组件的时候，写外部样式类
方法三：使用view包裹自定义组件，对view定义样式

八、banner和theme的结合:hot-list
A、banner和theme的结合
主题有：封面图、title、title-img头图、
如果主题有多个封面图，需要另外创建一张表，一对多，用来存储多张封面图，但这里为了避免join查询损耗性能，还是只有一张封面图
banner可以有多张图片，可以将这里的三张封面图抽象成一个banner，
所以，这里是theme和banner的结合，有theme查看更多的特性，有banner多张图片存储的特性
整体是一个banner,有头图，且类似轮播图的三张图片，theme是点击查看更多，跳转到一个专题中去

B、自定义组件中对传过来的数据处理
home页面中传过来的banner数据，是调用url请求获取到的，
但自定义组件中无法直接使用，需要对数据进行处理，获取banner中的itemList数据，遍历得到角标为0、1、2的图片，进行展示
不使用生命周期函数进行数据处理，因为有可能调用了生命周期函数，但此时banner的数据还没有从页面获取到
用监听器进行数据处理，监听器有两种：
1、在自定义组件的属性中进行监听，属性监听器，不推荐使用，是老式监听器
2、新式监听器，定义observers监听器，监听banner属性,对banner属性中的数据进行处理，并设置setData
3、在自定义组件中的wxml中使用设置好的data


C、外部wxss公共样式类引入
方法：
1、创建wxss文件夹、wxss结尾的样式类文件
2、在自定义组件的wxss中引入公共样式类：@import "../../wxss/sleeve.wxss";
3、直接在自定义组件的wxml文件中直接使用样式类：hover-class="rect-hover" hover-stay-time="300"
注意：
如果在app.wxss中设置公共样式类的样式，在自定义组件中即便使用import引入了公共类，wxml中使用也是无法生效的
因为自定义组件具有封闭性，小程序中的app.wxss的样式是无法作用于自定义组件的，但会影响page页面

small-hover适合小图标，一般使用rect-hover


九、瀑布流
A、图片引入
使用相对路径/

B、瀑布流：两个重点：一是使用抽象节点；二是瀑布流算法
瀑布流与price组件的区别：price组件是引入后，直接使用，可以对样式进行微调，而瀑布流引入后，引入的是瀑布流的算法，
瀑布流的内容不确定，自定义组件的内容不是由自定义组件本身决定的，而是自定义组件的调用者决定的，此时可以将节点申明为抽象节点
例如：
自定义组件中的某些节点和骨架，开发者是不确定的，需要交给调用者决定，所以，定义一个不确定节点的占位符，
假如占位符是selectable，配置了抽象节点的组件就是抽象组件，还需要在配置文件中使用componentGenerics定义selectable为true
这个占位符由组件的调用者来决定到底放什么
抽象节点与插槽区别：主要在使用上
抽象节点不是简单的写wxml，而是要求传递一个完整的自定义组件，对抽象的使用者来说，也需要定义一个完整的自定义组件传给抽象组件
插槽是只需要写一个简单的wxml，不需要单独定义自定义组件，
抽象组件非常灵活，但是易用性差，所以不能滥用


瀑布流使用了小程序的抽象节点，抽象节点的概念是：
前面六宫格使用了自定义组件，home.wxml中直接使用引入了的六宫格组件，而抽象节点表示：
自定义组件不是由自定义组件本身决定的，而是自定义组件的调用者决定的，这个节点就是抽象节点

1、引入瀑布流： home.json中引入lin-ui的瀑布流，而不是在app.json中引入
2、使用瀑布流：home.wxml中使用瀑布流










