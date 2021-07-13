(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{515:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Boxx"),t._v(" "),a("h2",{attrs:{id:"spring基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring基础"}},[t._v("#")]),t._v(" Spring基础")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("1. Spring两大核心？")]),a("p",[t._v("IOC控制反转， AOP面向切面编程")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("2. IOC控制反转到底反转了什么？")]),a("p",[t._v("​\t"),a("strong",[t._v("创建对象的过程，形成对象与对象之间依赖关系的操作")]),a("br"),t._v("\n​\t(Martin: 依赖对象的获得被反转了，本来应该是我们自己new， 现在是通过SpringIOC容器注入)")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("3. 什么是AOP？")]),a("p",[t._v("​\tAOP即"),a("strong",[t._v("面向切面编程")]),t._v("，关注的是"),a("code",[t._v("非核心业务的处理")]),a("br"),t._v("\n​\t"),a("strong",[t._v("用到的地方")]),t._v("：比如日志、网站的访问次数等"),a("br"),t._v("\n​\t"),a("strong",[t._v("主要目的")]),t._v(":：核心业务和非核心业务之间的解耦"),a("br"),t._v("\n​\t底层使用了"),a("strong",[t._v("动态代理")]),t._v("模式"),a("br"),t._v("\n​\t"),a("strong",[t._v("要素")]),t._v("：advice(非核心业务的载体)， pointcut(非核心业务的放置位置)，\n​\t\tadvisor(建立advice和pointcut之间的联系)")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("4. 反转之后的好处？")]),a("p",[t._v("​\t有助于类与类之间的"),a("strong",[t._v("解耦")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("5. IOC的好处？")]),a("p",[t._v("​\t将对象的创建和属性的赋值完全转交给Spring，\n​\t从而降低类与类之间的依赖关系，达到松散耦合的目的")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("6. ICO的核心？")]),a("p",[t._v("​\tIOC容器之所以叫IOC容器， 是因为其中的IOC指的是"),a("code",[t._v("将主动new变成了被动注入")]),a("br"),t._v("\n​\t从此角度出发， IOC的核心是"),a("code",[t._v("DI依赖注入")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("7. DI是什么？")]),a("p",[t._v("​\t依赖注入，指的是建立每个对象之间关系的方式，也就是对属性赋值的操作")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("8. Bean的属性都有？")]),a("p",[t._v("​\t"),a("em",[a("strong",[t._v("id")])]),t._v("：(每个IOC容器对象的唯一标识)，"),a("br"),t._v("\n​\t"),a("em",[a("strong",[t._v("class")])]),t._v("：(当前类对应的类型)，"),a("br"),t._v("\n​\t"),a("em",[a("strong",[t._v("scope")])]),t._v("：(作用范围)，"),a("br"),t._v("\n​\t"),a("em",[a("strong",[t._v("lazy-init")])]),t._v("：(是否 延迟加载)，"),a("br"),t._v("\n​\t"),a("em",[a("strong",[t._v("factory-method")])]),t._v("：(指定返回返回该对象的方法名称)，"),a("br"),t._v("\n​\t"),a("em",[a("strong",[t._v("factory-bean")])]),t._v("：(指定工厂实例)，"),a("br"),t._v("\n​\t"),a("em",[a("strong",[t._v("init-method")])]),t._v("：(对象初始化调用的方法)，"),a("br"),t._v("\n​\t"),a("em",[a("strong",[t._v("destroy-method")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("9. scope分别有几种情况？如何配置？")]),a("ul",[a("li",[a("p",[t._v("singleton，prototype，request，session，globalSession")])]),t._v(" "),a("li",[a("p",[t._v("一般"),a("code",[t._v("无状态的类的对象都配置成singleton")]),t._v("，无状态的类一般指像Service和Dao层这样逻辑处理类"),a("br"),a("code",[t._v("有状态的类需要设置成prototype或request")]),t._v("，一般指像Action一样存在多实例， 并且其中数据都不同")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("10. Spring创建对象的方式？")]),a("ol",[a("li",[t._v("构造方法创建(id+class)；")]),t._v(" "),a("li",[t._v("静态工厂创建(class+factory-method)；")]),t._v(" "),a("li",[t._v("实例工厂创建(factory-bean+factory-method)")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("11. 完成注入的方式？")]),a("ol",[a("li",[t._v("setter注入 <property ...>")]),t._v(" "),a("li",[t._v("构造方法注入 <constructor-arg ...>")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("12. Schema是什么？优势？")]),a("ul",[a("li",[a("p",[t._v("用来校验xml文件规范的xsd的文件")]),t._v(" "),a("ol",[a("li",[t._v("基于xml语法")]),t._v(" "),a("li",[t._v("扩充了数据类型")]),t._v(" "),a("li",[t._v("支持命名空间")])]),t._v(" "),a("ul",[a("li",[t._v("schema最重要的能力之一就是对数据类型的支持")])])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("13. 复杂属性如何注入？")]),a("ul",[a("li",[t._v("数组/List/Set "),a("br"),t._v("<property><array/list/set><value>value</value>")]),t._v(" "),a("li",[t._v("Map "),a("br"),t._v(' <map><entry key="" value=""/>')]),t._v(" "),a("li",[t._v("Properties "),a("br"),t._v(' <props><prop key="">vlaue</prop>')])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("14. 常用Spring注解？")]),a("p",[t._v("@Component， @Repository， @Service， @Controller\n@Autowired， @Qualifier， @Scope，@Value\n@Aspect， @Pointcut， @Before， @After， @AfterReturning， @Around， @AfterThrowing")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("15. 接受文件:")]),a("p",[t._v('​\t@RequestParam(value="file") MultipartFile file')])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("16. 关于日期、时间")]),a("ul",[a("li",[t._v("映射类声明变量前，加入此注解:\n"),a("ol",[a("li",[a("strong",[t._v("@DatetimeFormat")]),t._v("是将String转换成Date，一般前台给后台传值时用(springmvc用)")]),t._v(" "),a("li",[t._v("将Date转换成String  一般后台传值给前台时设置响应方式为\n"),a("strong",[t._v('@JsonFormat(pattern="yyyy-MM-dd")')])]),t._v(" "),a("li",[a("strong",[t._v('@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss"，timezone = "GMT+8")')]),a("br"),t._v("只争对json响应式的处理(中国为东8区)")]),t._v(" "),a("li",[a("strong",[t._v("@JsonIgnore")]),t._v(" json响应式忽略这个属性\nprivate Date hiredate;")])])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("17. 使用注解完成IOC的流程？")]),a("ol",[a("li",[t._v("添加context命名空间以及schemaLocation")]),t._v(" "),a("li",[t._v('配置文件中添加上下文组件扫描<context:component-scan base-package="com"/>')]),t._v(" "),a("li",[t._v("给所有需要放入IOC容器中的组件添加注解@Component/@S../@C../@R../@Scope")]),t._v(" "),a("li",[t._v("给所有需要注入的属性添加注解@Autowired或@Resource")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("18. @Resource和@Autowired的区别？")]),a("ol",[a("li",[a("strong",[t._v("来源不同")]),a("br"),t._v(" "),a("strong",[t._v("@Autowired")]),t._v("来自Spring类库中，"),a("strong",[t._v("@Resource")]),t._v("是J2EE官方类库中的")]),t._v(" "),a("li",[a("strong",[t._v("底层匹配机制不同")]),a("br"),t._v(" "),a("strong",[t._v("@Autowired")]),t._v("优先按照类型进行匹配，如果存在一个接口多个实现类， 再去按照属性名匹配，\n如果匹配不到，抛出异常NoUniqueBeanDefinitionException，\n此时，可通过 "),a("strong",[t._v('Qualifier("对象名")')]),t._v(" 指定注入对象"),a("br"),t._v(" "),a("strong",[t._v("@Resource")]),t._v("优先按照属性名进行匹配，如果匹配不到，再去按照类型进行匹配，\n如果匹配到多个类型，抛出异常NoUniqueBeanDefinitionException\n此时，可通过 "),a("strong",[t._v('@Resource(name="对象名")')]),t._v(" 指定注入对象")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("19. 反射涉及到哪些类？分别对应哪些方法？")]),a("ul",[a("li",[a("em",[a("strong",[t._v("Class")])]),t._v("：太多， 比如getDeclaredConstructors()， c.newInstance()")]),t._v(" "),a("li",[a("em",[a("strong",[t._v("Field")])]),t._v("： get(obj)，set(obj,value)")]),t._v(" "),a("li",[a("em",[a("strong",[t._v("Method")])]),t._v("： invoke(obj, a.class, b.class, ...)")]),t._v(" "),a("li",[a("em",[a("strong",[t._v("Constructor")])]),t._v("： newInstance(a.class, b.class ...)，setAccessible(true)")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("20. 常用设计模式？")]),a("p",[t._v("​\t单例模式， 工厂模式， 观察者模式(监听器)， 装饰者模式(包装流)， 代理模式(AOP)")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("21. spring有几种通知(增强)？")]),a("ol",[a("li",[t._v("前置通知  before")]),t._v(" "),a("li",[t._v("后置通知  after\nafterReturnning")]),t._v(" "),a("li",[t._v("环绕通知  aroud")]),t._v(" "),a("li",[t._v("异常通知  throws")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("22. 都有哪几种动态代理？")]),a("ul",[a("li",[t._v("jdk     依赖接口")]),t._v(" "),a("li",[t._v("cglib\t继承关系")])])]),a("h2",{attrs:{id:"springmvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springmvc"}},[t._v("#")]),t._v(" SpringMVC")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("1、什么是Spring MVC ？简单介绍下你对springMVC的理解?")]),a("p",[t._v("Spring MVC是一个基于MVC架构的用来简化web应用程序开发的应用开发框架，它是Spring的一个模块,无需中间整合层来整合。")]),t._v(" "),a("p",[t._v("它和Struts2一样都属于"),a("strong",[t._v("表现层框架")]),t._v("。在web模型中，MVC是一种很流行的框架，通过把Model，View，Controller分离，把较为复杂的web应用分成逻辑清晰的几部分，简化开发，减少出错，方便组内开发人员之间的配合。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("2、SpringMVC的流程？")]),a("p",[t._v("（1）用户发送请求至"),a("u",[t._v("前端控制器")]),t._v(" "),a("em",[a("strong",[t._v("DispatcherServlet")])]),t._v("；")]),t._v(" "),a("p",[t._v("（2） DispatcherServlet收到请求后，调用 "),a("em",[a("strong",[t._v("HandlerMapping")])]),t._v(" "),a("u",[t._v("处理器映射器")]),t._v("，请求获取Handle；")]),t._v(" "),a("p",[t._v("（3）处理器映射器根据请求url找到具体的处理器，生成处理器对象及处理器拦截器(如果有则生成)一并返回给DispatcherServlet；")]),t._v(" "),a("p",[t._v("（4）DispatcherServlet通过 "),a("em",[a("strong",[t._v("HandlerAdapter")])]),t._v(" "),a("u",[t._v("处理器适配器")]),t._v("调用处理器；")]),t._v(" "),a("p",[t._v("（5）"),a("u",[t._v("执行处理器")]),t._v("("),a("em",[a("strong",[t._v("Handler")])]),t._v("，也叫后端控制器)；")]),t._v(" "),a("p",[t._v("（6）Handler执行完成"),a("u",[a("strong",[t._v("返回ModelAndView")])]),t._v("；")]),t._v(" "),a("p",[t._v("（7）HandlerAdapter将Handler执行结果ModelAndView返回给DispatcherServlet；")]),t._v(" "),a("p",[t._v("（8）DispatcherServlet将ModelAndView传给 "),a("em",[a("strong",[t._v("ViewReslover")])]),t._v(" "),a("u",[t._v("视图解析器")]),t._v("进行解析；")]),t._v(" "),a("p",[t._v("（9）ViewReslover解析后返回具体View；")]),t._v(" "),a("p",[t._v("（10）DispatcherServlet对View进行渲染视图（即将模型数据填充至视图中）")]),t._v(" "),a("p",[t._v("（11）DispatcherServlet响应用户。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("3、Springmvc的优点:")]),a("p",[t._v("（1）它是基于"),a("strong",[t._v("组件技术")]),t._v("的。全部的应用对象,无论控制器和视图,还是业务对象之类的都是 java组件，并且和Spring提供的其他基础结构紧密集成")]),t._v(" "),a("p",[t._v("（2）不依赖于Servlet API(目标虽是如此,但是在实现的时候确实是依赖于Servlet的)")]),t._v(" "),a("p",[t._v("（3）可以任意使用各种视图技术，而不仅仅局限于JSP")]),t._v(" "),a("p",[t._v("（4）支持各种请求资源的映射策略")]),t._v(" "),a("p",[t._v("（5）它应是易于扩展的")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("4、Spring MVC的主要组键？")]),a("p",[t._v("（1）"),a("strong",[t._v("前端控制器")]),t._v("DispatcherServlet（不需要程序员开发）")]),t._v(" "),a("p",[t._v("作用：接收请求、响应结果 相当于转发器，有了DispatcherServlet 就减少了其它组件之间的耦合度。")]),t._v(" "),a("p",[t._v("（2）"),a("strong",[t._v("处理器映射器")]),t._v("HandlerMapping（不需要程序员开发）")]),t._v(" "),a("p",[t._v("作用：根据请求的URL来查找Handler")]),t._v(" "),a("p",[t._v("（3）"),a("strong",[t._v("处理器适配器")]),t._v("HandlerAdapter")]),t._v(" "),a("p",[t._v("注意：在编写Handler的时候要按照HandlerAdapter要求的规则去编写，这样适配器HandlerAdapter才可以正确的去执行Handler。")]),t._v(" "),a("p",[t._v("（4）"),a("strong",[t._v("处理器")]),t._v("Handler（需要程序员开发）")]),t._v(" "),a("p",[t._v("（5）"),a("strong",[t._v("视图解析器")]),t._v(" ViewResolver（不需要程序员开发）")]),t._v(" "),a("p",[t._v("作用：进行视图的解析 根据视图逻辑名解析成真正的视图（view）")]),t._v(" "),a("p",[t._v("（6）"),a("strong",[t._v("视图")]),t._v("View（需要程序员开发jsp）")]),t._v(" "),a("p",[t._v("View是一个接口， 它的实现类支持不同的视图类型（jsp，freemarker，pdf等等）")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("5、springMVC和struts2的区别有哪些?")]),a("p",[t._v("（1）"),a("strong",[t._v("入口不同")]),t._v("：springmvc的入口是一个"),a("code",[t._v("servlet")]),t._v("即前端控制器（DispatchServlet）"),a("br"),t._v("struts2入口是一个"),a("code",[t._v("filter")]),t._v("过虑器（StrutsPrepareAndExecuteFilter）。")]),t._v(" "),a("p",[t._v("（2）"),a("strong",[t._v("实现方式不同")]),t._v("：springmvc是"),a("strong",[t._v("基于方法开发")]),t._v("(一个url对应一个方法)，请求"),a("code",[t._v("参数传递到方法的形参")]),t._v("，可以设计为"),a("strong",[t._v("单例")]),t._v("或多例(建议单例)"),a("br"),t._v("struts2是"),a("strong",[t._v("基于类开发")]),t._v("，"),a("code",[t._v("传递参数是通过类的属性")]),t._v("，只能设计为"),a("strong",[t._v("多例")]),t._v("。")]),t._v(" "),a("p",[t._v("（3）"),a("strong",[t._v("参数解析不同")]),t._v("：Struts采用值栈存储请求和响应的数据，通过OGNL存取数据"),a("br"),t._v("springmvc通过参数解析器是将request请求内容解析，并给方法形参赋值，将数据和视图封装成ModelAndView对象，最后又将ModelAndView中的模型数据通过reques域传输到页面。Jsp视图解析器默认使用jstl。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("6、SpringMVC怎么样设定重定向和转发的？")]),a("p",[t._v('（1）在返回值前面加"'),a("code",[t._v("forward:")]),t._v('"就可以让结果转发,譬如"'),a("code",[t._v("forward:user.do?name=method4")]),t._v('"')]),t._v(" "),a("p",[t._v('（2）在返回值前面加"'),a("code",[t._v("redirect:")]),t._v('"就可以让返回值重定向,譬如"'),a("code",[t._v("redirect:http://www.baidu.com")]),t._v('"')])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("7、SpringMvc怎么和AJAX相互调用的？")]),a("p",[t._v("通过Jackson框架就可以把Java里面的对象直接转化成Js可以识别的Json对象。具体步骤如下 ：")]),t._v(" "),a("p",[t._v("（1）加入Jackson.jar")]),t._v(" "),a("p",[t._v("（2）在配置文件中配置json的映射")]),t._v(" "),a("p",[t._v("（3）在接受Ajax的方法里面可以直接返回Object,List等,但方法前面要加上@ResponseBody注解。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("8、SpringMvc里面拦截器是怎么写的：")]),a("p",[t._v("有两种写法,一种是"),a("strong",[t._v("实现HandlerInterceptor接口")]),t._v(",另外一种是"),a("strong",[t._v("继承适配器类")]),t._v(",接着在接口方法当中，实现处理逻辑；然后在SpringMvc的配置文件中配置拦截器即可:")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 配置SpringMvc的拦截器 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 配置一个拦截器的Bean就可以了 默认是对所有请求都拦截 --\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myInterceptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.abc.action.MyHandlerInterceptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 只针对部分请求拦截 --\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("mapping")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/modelMap.do"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.abc.action.MyHandlerInterceptorAdapter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("9、如何解决POST请求中文乱码问题，GET的又如何处理呢？")]),a("p",[t._v("（1）"),a("strong",[t._v("解决post")]),t._v("请求乱码问题：")]),t._v(" "),a("p",[t._v("在web.xml中加入：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("CharacterEncodingFilter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.web.filter.CharacterEncodingFilter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("encoding"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("utf-8"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("CharacterEncodingFilter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/*"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("p",[t._v("（2）"),a("strong",[t._v("解决get")]),t._v("请求中文参数出现乱码解决方法有两个：")]),t._v(" "),a("p",[t._v("①修改tomcat配置文件添加编码与工程编码一致，如下：")]),t._v(" "),a("p",[a("code",[t._v('<ConnectorURIEncoding="utf-8" connectionTimeout="20000" port="8080" protocol="HTTP/1.1" redirectPort="8443"/>')])]),t._v(" "),a("p",[t._v("②另外一种方法对参数进行重新编码：")]),t._v(" "),a("p",[a("code",[t._v('String userName = new String(request.getParamter("userName").getBytes("ISO8859-1"),"utf-8")')])]),t._v(" "),a("p",[t._v("ISO8859-1是tomcat默认编码，需要将tomcat编码后的内容按utf-8编码。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("10、Spring MVC的异常处理 ？")]),a("p",[t._v("可以将异常"),a("strong",[t._v("抛给Spring框架")]),t._v("，由Spring框架来处理；我们只需要配置简单的异常处理器，在异常处理器中添视图页面即可。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("11、SpringMvc的核心入口类是什么,Struts1,Struts2的分别是什么：")]),a("p",[t._v("SpringMvc的是"),a("strong",[t._v("DispatchServlet")])]),t._v(" "),a("p",[t._v("Struts1的是"),a("strong",[t._v("ActionServlet")])]),t._v(" "),a("p",[t._v("Struts2的是"),a("strong",[t._v("StrutsPrepareAndExecuteFilter")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("12、SpringMvc的控制器是不是单例模式,如果是,有什么问题,怎么解决？")]),a("p",[t._v("是单例模式，所以在多线程访问的时候"),a("strong",[t._v("有线程安全问题")]),t._v("，不要用同步，会影响性能的，解决方案是在控制器里面不能写字段。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("13、SpingMvc中的控制器的注解一般用那个,有没有别的注解可以替代？")]),a("p",[t._v("一般用"),a("code",[t._v("@Conntroller")]),t._v("注解,表示是表现层,不能用用别的注解代替。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("14、 @RequestMapping注解用在类上面有什么作用？")]),a("p",[t._v("是一个用来处理请求地址映射的注解，可用于类或方法上。用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("15、怎么样把某个请求映射到特定的方法上面？")]),a("p",[t._v("直接在方法上面加上注解"),a("code",[t._v("@RequestMapping")]),t._v(",并且在这个注解里面写上要拦截的路径。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("16、如果在拦截请求中,我想拦截get方式提交的方法,怎么配置？")]),a("p",[t._v("可以在@RequestMapping注解里面加上"),a("code",[t._v("method=RequestMethod.GET")]),t._v("。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("17、怎么样在方法里面得到Request,或者Session？")]),a("p",[t._v("直接在方法的形参中声明request,SpringMvc就自动把request对象传入。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("18、如果想在拦截的方法里面得到从前台传入的参数,怎么得到？")]),a("p",[t._v("直接在形参里面声明这个参数就可以,但"),a("strong",[t._v("必须名字和传过来的参数一样")]),t._v("。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("19、如果前台有很多个参数传入,并且这些参数都是一个对象的,那么怎么样快速得到这个对象？")]),a("p",[t._v("直接在方法中声明这个对象,SpringMvc就自动会把属性赋值到这个对象里面。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("20、SpringMvc中函数的返回值是什么？")]),a("p",[t._v("返回值可以有很多类型,有"),a("code",[t._v("String")]),t._v(", "),a("code",[t._v("ModelAndView")]),t._v("，但一般用String比较好。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("21、SpringMvc用什么对象从后台向前台传递数据的？")]),a("ol",[a("li",[t._v("使用Map、Model和ModelMap的方式")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelMap")]),t._v(" modelMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.放在map里  ")]),t._v("\n    map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"names"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"caoyc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zhh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cjx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.放在model里 建议使用")]),t._v("\n    model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3.放在request里  ")]),t._v("\n    request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"requestValue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4.放在modelMap中 ")]),t._v("\n    modelMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"city"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ChengDu"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    modelMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gender"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"male"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("JSP写法:")]),t._v(" "),a("div",{staticClass:"language-jsp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("time:${requestScope.time}\nnames:${requestScope.names }\ncity:${requestScope.city }\ngender:${requestScope.gender }\nrequest:${requestScope.request}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用ModelAndView的方式:")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test2.do"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checknameIsExist2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" mav "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    mav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ModelAndView"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ModelAndViewValue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置要跳转的页面，与返回值时String时返回success类似，以下跳转到/student/studentList.jsp  ")]),t._v("\n    mav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/student/studentList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("22、SpringMvc中有个类把视图和数据都合并的一起的,叫什么？")]),a("p",[t._v("叫"),a("strong",[t._v("ModelAndView")]),t._v("。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("23、怎么样把ModelMap里面的数据放入Session里面？")]),a("p",[t._v("可以在类上面加上 "),a("strong",[t._v("@SessionAttributes")]),t._v(" 注解,里面包含的字符串就是要放入session里面的key。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("24、当一个方法向AJAX返回特殊对象,譬如Object,List等,需要做什么处理？")]),a("p",[t._v("要加上 "),a("strong",[t._v("@ResponseBody")]),t._v(" 注解。")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);