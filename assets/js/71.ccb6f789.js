(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{485:function(t,a,v){"use strict";v.r(a);var _=v(2),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("Boxx"),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#使用场景"}},[t._v("使用场景")])]),v("li",[v("a",{attrs:{href:"#问题"}},[t._v("问题")]),v("ul",[v("li",[v("a",{attrs:{href:"#消息丢失（可靠性）"}},[t._v("消息丢失（可靠性）")])]),v("li",[v("a",{attrs:{href:"#顺序消费"}},[t._v("顺序消费")])]),v("li",[v("a",{attrs:{href:"#重复消费"}},[t._v("重复消费")])]),v("li",[v("a",{attrs:{href:"#大量数据消费"}},[t._v("大量数据消费")])]),v("li",[v("a",{attrs:{href:"#如何保证高可用"}},[t._v("如何保证高可用")])]),v("li",[v("a",{attrs:{href:"#大量消息积压"}},[t._v("大量消息积压")])])])]),v("li",[v("a",{attrs:{href:"#分布式事务"}},[t._v("分布式事务")])]),v("li",[v("a",{attrs:{href:"#案例"}},[t._v("案例")])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),v("p",[t._v("异步、削峰、解耦")]),t._v(" "),v("h2",{attrs:{id:"问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),v("h3",{attrs:{id:"消息丢失（可靠性）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息丢失（可靠性）"}},[t._v("#")]),t._v(" 消息丢失（可靠性）")]),t._v(" "),v("ul",[v("li",[t._v("事前事中事后")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/znote/img/backend/rabbitmq/mq001.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"顺序消费"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#顺序消费"}},[t._v("#")]),t._v(" 顺序消费")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("一个topic下有多个队列，为了保证发送有序，RocketMQ提供了MessageQueueSelector队列选择机制，他有三种实现:")])]),t._v(" "),v("li",[v("p",[t._v("RocketMQ仅保证顺序发送，顺序消费由消费者业务保证！")])]),t._v(" "),v("li",[v("p",[t._v("一个队列有序出去，一个消费者消费不就好了？\n消费者是多线程的，你消息是有序的给他的，你能保证他是有序的处理的？还是一个消费成功了再发下一个稳妥。")])]),t._v(" "),v("li",[v("p",[t._v("rabbimq")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.hudi.tech/2019/04/08/%E6%8A%80%E8%83%BD%E7%AF%87/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E4%BF%A1%E6%81%AF%E7%9A%84%E9%A1%BA%E5%BA%8F%E6%80%A7%EF%BC%9F/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 每个 queue 一个 consumer "),v("OutboundLink")],1)])])])]),t._v(" "),v("h3",{attrs:{id:"重复消费"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重复消费"}},[t._v("#")]),t._v(" 重复消费")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("原因")]),t._v(" "),v("ul",[v("li",[t._v("发给多个系统【库存、积分、活动】时，其他都处理成功但有一个【积分】处理失败（网络抖动，开发人员代码Bug等），触发mq重试。")])])]),t._v(" "),v("li",[v("p",[t._v("解决方案")]),t._v(" "),v("ul",[v("li",[t._v("接口幂等（可以用redis做） + 唯一索引。（如下图引用傲丙强校验代码）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/znote/img/backend/rabbitmq/mq002.png",alt:""}})])])]),t._v(" "),v("h3",{attrs:{id:"大量数据消费"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大量数据消费"}},[t._v("#")]),t._v(" 大量数据消费")]),t._v(" "),v("ul",[v("li",[t._v("在rabbitMq中采用多个消费者，公平分发的模式去消费队列")])]),t._v(" "),v("h3",{attrs:{id:"如何保证高可用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何保证高可用"}},[t._v("#")]),t._v(" 如何保证高可用")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("定义")]),t._v(" "),v("ul",[v("li",[t._v("镜像集群模式：跟普通集群模式不一样的是，在镜像集群模式下，你创建的 queue，无论元数据还是 queue 里的消息都会存在于多个实例上，就是说，每个 RabbitMQ 节点都有这个 queue 的一个完整镜像，包含 queue 的全部数据的意思。然后每次你写消息到 queue 的时候，都会自动把消息同步到多个实例的 queue 上。")])])]),t._v(" "),v("li",[v("p",[t._v("开启")]),t._v(" "),v("ul",[v("li",[t._v("其实很简单，RabbitMQ 有很好的管理控制台，就是在后台新增一个策略，这个策略是镜像集群模式的策略，指定的时候是可以要求数据同步到所有节点的，也可以要求同步到指定数量的节点，再次创建 queue 的时候，应用这个策略，就会自动将数据同步到其他的节点上去了。")])])]),t._v(" "),v("li",[v("p",[t._v("缺点")]),t._v(" "),v("ul",[v("li",[t._v("1: 性能开销大: 因为需要进行整个集群内部所有实例的数据同步\n2:无法线性扩容: 因为每一个服务器中都包含整个集群服务节点中的所有数据, 这样如果一旦单个服务器节点的容量无法容纳了怎么办?.")])])])]),t._v(" "),v("h3",{attrs:{id:"大量消息积压"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大量消息积压"}},[t._v("#")]),t._v(" 大量消息积压")]),t._v(" "),v("ul",[v("li",[t._v("一般这个时候，只能临时紧急扩容了，具体操作步骤和思路如下：")])]),t._v(" "),v("ol",[v("li",[t._v("先修复 consumer 的问题，确保其恢复消费速度，然后将现有 consumer 都停掉。")]),t._v(" "),v("li",[t._v("新建一个 topic，partition 是原来的 10 倍，临时建立好原先 10 倍的 queue 数量。")]),t._v(" "),v("li",[t._v("然后写一个临时的分发数据的 consumer 程序，这个程序部署上去消费积压的数据，消费之后不做耗时的处理，直接均匀轮询写入临时建立好的 10 倍数量的 queue。")]),t._v(" "),v("li",[t._v("接着临时征用 10 倍的机器来部署 consumer，每一批 consumer 消费一个临时 queue 的数据。这种做法相当于是临时将 queue 资源和 consumer 资源扩大 10 倍，以正常的 10 倍速度来消费数据。")]),t._v(" "),v("li",[t._v("等快速消费完积压数据之后，得恢复原先部署的架构，重新用原先的 consumer 机器来消费消息。")])]),t._v(" "),v("h2",{attrs:{id:"分布式事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[t._v("#")]),t._v(" 分布式事务")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("弊端")]),t._v(" "),v("ul",[v("li",[t._v("长时间锁定数据库资源，导致系统的响应不快，并发上不去")]),t._v(" "),v("li",[t._v("网络抖动出现脑裂情况，导致事物参与者，不能很好地执行协调者的指令，导致数据不一致。")]),t._v(" "),v("li",[t._v("单点故障：例如事物协调者，在某一时刻宕机，虽然可以通过选举机制产生新的Leader，但是这过程中，必然出现问题，而TCC，只有强悍的技术团队，才能支持开发，成本太高。")])])]),t._v(" "),v("li",[v("p",[t._v("有多种类型")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("2pc（两段式提交）")]),t._v(" "),v("ul",[v("li",[t._v("2pc（两段式提交）可以说是分布式事务的最开始的样子了，像极了媒婆，就是通过消息中间件协调多个系统，在两个系统操作事务的时候都锁定资源但是不提交事务，等两者都准备好了，告诉消息中间件，然后再分别提交事务。")])])]),t._v(" "),v("li",[v("p",[t._v("3pc（三段式提交）")])]),t._v(" "),v("li",[v("p",[t._v("TCC（Try、Confirm、Cancel）")])]),t._v(" "),v("li",[v("p",[t._v("最大努力通知")])]),t._v(" "),v("li",[v("p",[t._v("XA")])]),t._v(" "),v("li",[v("p",[t._v("本地消息表（ebay研发出的）")])]),t._v(" "),v("li",[v("p",[t._v("半消息/最终一致性（RocketMQ）")])])])])]),t._v(" "),v("h2",{attrs:{id:"案例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),v("p",[t._v("订单和支付等")]),t._v(" "),v("p",[v("img",{attrs:{src:"/znote/img/backend/rabbitmq/mq003.png",alt:""}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);