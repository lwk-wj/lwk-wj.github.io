(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{440:function(a,n,s){"use strict";s.r(n);var e=s(2),t=Object(e.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("Boxx"),a._v(" "),s("h2",{attrs:{id:"java的io流的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java的io流的类型"}},[a._v("#")]),a._v(" Java的IO流的类型")]),a._v(" "),s("ul",[s("li",[a._v("按照流的方向：输入流（inputStream）和输出流（outputStream）。")]),a._v(" "),s("li",[a._v("按照实现功能分：节点流（可以从或向一个特定的地方（节点）读写数据。")]),a._v(" "),s("li",[a._v("如 FileReader）和处理流（是对一个已存在的流的连接和封装，通过所封装的流的功能调用实现数据读写。")]),a._v(" "),s("li",[a._v("如 BufferedReader。处理流的构造方法总是要带一个其他的流对象做参数。一个流对象经过其他流的多次包装，称为流的链接。）")]),a._v(" "),s("li",[a._v("按照处理数据的单位： 字节流和字符流。")]),a._v(" "),s("li",[a._v("字节流继承于 InputStream 和 OutputStream， 字符流继承于InputStreamReader 和 OutputStreamWriter。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/li-wen-kai/picgo/raw/master/img/image-20210601100204550.png",alt:"image-20210601100204550"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/li-wen-kai/picgo/raw/master/img/image-20210601100243513.png",alt:"image-20210601100243513"}})]),a._v(" "),s("h2",{attrs:{id:"字节流如何转为字符流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字节流如何转为字符流"}},[a._v("#")]),a._v(" 字节流如何转为字符流")]),a._v(" "),s("ul",[s("li",[a._v("字节输入流转字符输入流通过 InputStreamReader 实现，该类的构造函数可以传入 InputStream 对象。")]),a._v(" "),s("li",[a._v("字节输出流转字符输出流通过 OutputStreamWriter 实现，该类的构造函数可以传入 OutputStream 对象。")])]),a._v(" "),s("h2",{attrs:{id:"如何将一个-java-对象序列化到文件里"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何将一个-java-对象序列化到文件里"}},[a._v("#")]),a._v(" 如何将一个 java 对象序列化到文件里")]),a._v(" "),s("ul",[s("li",[a._v("在 java 中能够被序列化的类必须先实现 Serializable 接口，该接口没有任何抽象方法只是起到一个标记作用。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(' //对象输出流\n ObjectOutputStream objectOutputStream =  new ObjectOutputStream(new FileOutputStream(new File("D://obj")));\n objectOutputStream.writeObject(new User("zhangsan", 100));\n objectOutputStream.close();\n //对象输入流\n ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream(new File("D://obj")));\n User user = (User)objectInputStream.readObject();\n System.out.println(user);\n objectInputStream.close();\n \n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h2",{attrs:{id:"字节流和字符流的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字节流和字符流的区别"}},[a._v("#")]),a._v(" 字节流和字符流的区别")]),a._v(" "),s("ul",[s("li",[a._v("字节流读取的时候，读到一个字节就返回一个字节；")]),a._v(" "),s("li",[a._v("字符流使用了字节流读到一个或多个字节（中文对应的字节数是两个，在 UTF-8 码表中是 3 个字节）时。")]),a._v(" "),s("li",[a._v("先去查指定的编码表，将查到的字符返回。")]),a._v(" "),s("li",[a._v("字节流可以处理所有类型数据，如：图片，MP3，AVI 视频文件，而字符流只能处理字符数据。")]),a._v(" "),s("li",[a._v("只要是处理纯文本数据，就要优先考虑使用字符流，除此之外都用字节流。")]),a._v(" "),s("li",[a._v("字节流主要是操作 byte 类型数据，以 byte 数组为准，主要操作类就是 OutputStream、InputStream")]),a._v(" "),s("li",[a._v("字符流处理的单元为 2 个字节的 Unicode 字符，分别操作字符、字符数组或字符串，而字节流处理单元为 1 个字节，操作字节和字节数组。")]),a._v(" "),s("li",[a._v("所以字符流是由 Java 虚拟机将字节转化为 2 个字节的 Unicode 字符为单位的字符而成的， 所以它对多国语言支持性比较好！")]),a._v(" "),s("li",[a._v("如果是音频文件、图片、歌曲，就用字节流好点，如果是关系到中文（文本）的，用字符流好点。")]),a._v(" "),s("li",[a._v("在程序中一个字符等于两个字节，java 提供了 Reader、Writer 两个专门操作字符流的类。")])]),a._v(" "),s("h2",{attrs:{id:"如何实现对象克隆？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现对象克隆？"}},[a._v("#")]),a._v(" 如何实现对象克隆？")]),a._v(" "),s("ul",[s("li",[a._v("有两种方式。")]),a._v(" "),s("li",[a._v("1).实现 Cloneable 接口并重写 Object 类中的 clone()方法；")]),a._v(" "),s("li",[a._v("2).实现 Serializable 接口，通过对象的序列化和反序列化实现克隆，可以实现真正的深度克隆，代码如下。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('import java.io.ByteArrayInputStream;\nimport java.io.ByteArrayOutputStream;\nimport java.io.ObjectInputStream;\nimport java.io.ObjectOutputStream;\nimport java.io.Serializable;\npublic class MyUtil {\nprivate MyUtil() {\nthrow new AssertionError();\n }\n@SuppressWarnings("unchecked")\npublic static <T extends Serializable> T clone(T obj) throws Exception {\nByteArrayOutputStream bout = new ByteArrayOutputStream();\nObjectOutputStream oos = new ObjectOutputStream(bout);\noos.writeObject(obj);\nByteArrayInputStream bin = new ByteArrayInputStream(bout.toByteArray());\nObjectInputStream ois = new ObjectInputStream(bin);\nreturn (T) ois.readObject();\n// 说明：调用 ByteArrayInputStream 或 ByteArrayOutputStream 对象的 close 方法没有任何意义\n// 这两个基于内存的流只要垃圾回收器清理对象就能够释放资源，这一点不同于对外部资源（如文件流）的释放\n }\n }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br")])]),s("ul",[s("li",[a._v("测试代码：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(' import java.io.Serializable;\n /**\n * 人类\n */\nclass Person implements Serializable {\nprivate static final long serialVersionUID = -9102017020286042305L;\nprivate String name; // 姓名\nprivate int age; // 年龄\nprivate Car car; // 座驾\npublic Person(String name, int age, Car car) {\nthis.name = name;\nthis.age = age;\nthis.car = car;\n }\npublic String getName() {\nreturn name;\n }\npublic void setName(String name) {\nthis.name = name;\n }\npublic int getAge() {\nreturn age;\n\n }\npublic void setAge(int age) {\nthis.age = age;\n }\npublic Car getCar() {\nreturn car;\n }\npublic void setCar(Car car) {\nthis.car = car;\n }\n@Override\npublic String toString() {\nreturn "Person [name=" + name + ", age=" + age + ", car=" + car + "]";\n }\n }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(' /**\n * 小汽车类\n */\nclass Car implements Serializable {\nprivate static final long serialVersionUID = -5713945027627603702L;\nprivate String brand; // 品牌\nprivate int maxSpeed; // 最高时速\npublic Car(String brand, int maxSpeed) {\nthis.brand = brand;\nthis.maxSpeed = maxSpeed;\n }\npublic String getBrand() {\nreturn brand;\n }\npublic void setBrand(String brand) {\nthis.brand = brand;\n }\npublic int getMaxSpeed() {\nreturn maxSpeed;\n }\npublic void setMaxSpeed(int maxSpeed) {\nthis.maxSpeed = maxSpeed;\n }\n@Override\npublic String toString() {\nreturn "Car [brand=" + brand + ", maxSpeed=" + maxSpeed + "]";\n }\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('class CloneTest {\npublic static void main(String[] args) {\ntry {\nPerson p1 = new Person("Hao LUO", 33, new Car("Benz", 300));\nPerson p2 = MyUtil.clone(p1); // 深度克隆\np2.getCar().setBrand("BYD");\n// 修改克隆的 Person 对象 p2 关联的汽车对象的品牌属性\n// 原来的 Person 对象 p1 关联的汽车不会受到任何影响\n// 因为在克隆 Person 对象时其关联的汽车对象也被克隆了\nSystem.out.println(p1);\n} catch (Exception e) {\ne.printStackTrace();\n }\n }\n }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("p",[s("strong",[a._v("注意：")]),a._v("\n基于序列化和反序列化实现的克隆不仅仅是深度克隆，更重要的是通过泛型限定，可以检查出要克隆的对象是否支持序列化，\n这项检查是编译器完成的，不是在运行时抛出异常，这种是方案明显优于使用 Object 类的 clone 方法克隆对象。\n让问题在编译的时候暴露出来总是好过把问题留到运行时。")]),a._v(" "),s("h2",{attrs:{id:"_6-什么是-java-序列化，如何实现-java-序列化？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-什么是-java-序列化，如何实现-java-序列化？"}},[a._v("#")]),a._v(" 6.什么是 java 序列化，如何实现 java 序列化？")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("序列化就是一种用来处理对象流的机制，所谓对象流也就是将对象的内容进行流化。\n可以对流化后的对象进行读写操作，也可将流化后的对象传输于网络之间。\n序列化是为了解决在对对象流进行读写操作时所引发的问题。\n序 列 化 的 实 现 ： \n将 需 要 被 序 列 化 的 类 实 现 Serializable 接 口 ， 该 接 口 没 有 需 要 实 现 的 方 法 ， implements Serializable 只是为了标注该对象是可被序列化的，\n然后使用一个输出流(如：FileOutputStream)来构造一个 ObjectOutputStream(对象流)对象，\n接着，使用 ObjectOutputStream 对象的 writeObject(Object obj)方法就可以将参数为 obj 的对象写出(即保存其状态)，要恢复的话则用输入流。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])])],1)}),[],!1,null,null,null);n.default=t.exports}}]);