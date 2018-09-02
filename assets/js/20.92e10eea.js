(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{148:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"phaser练习题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#phaser练习题","aria-hidden":"true"}},[t._v("#")]),t._v(" Phaser练习题")]),s("blockquote",[s("p",[t._v("为了让大家尽快的熟悉Phaser开发，特模拟以下场景。\n之前大家都玩过微信的“飞机大战” 游戏吧。本游戏类似“飞机大战”。")])]),s("p",[s("strong",[t._v("游戏名称：捡苹果")])]),s("p",[s("strong",[t._v("游戏玩法：")])]),s("ul",[s("li",[t._v("点击屏幕，启动游戏")]),s("li",[t._v("随机从天空飘落不同颜色的苹果和炸弹。每种颜色的苹果代表的分值不一样，每捡到一个苹果播放不同的音效，加上相应的分值。如果捡到炸弹，则播放爆炸音效，且游戏结束。")]),s("li",[t._v("滑动地面的人物，拾取天空掉落的苹果")])]),s("h5",{attrs:{id:"提供demo地址，仅供游戏演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提供demo地址，仅供游戏演示","aria-hidden":"true"}},[t._v("#")]),t._v(" 提供demo地址，仅供游戏演示")]),s("h2",{attrs:{id:"正式开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正式开始","aria-hidden":"true"}},[t._v("#")]),t._v(" 正式开始")]),s("h3",{attrs:{id:"第一步：创建实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步：创建实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一步：创建实例")]),s("ul",[s("li",[t._v("引入Phaser.js")]),s("li",[t._v("创建游戏实例")])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 创建游戏实例")]),t._v("\n")])])]),s("h3",{attrs:{id:"第二步：定义场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步：定义场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二步：定义场景")]),s("ul",[s("li",[t._v("定义每个场景的内容")]),s("li",[t._v("将场景添加到游戏实例中")])]),s("p",[t._v("说明：")]),s("ul",[s("li",[t._v("每个场景都是一个"),s("code",[t._v("function")]),t._v("。")]),s("li",[t._v("通过"),s("code",[t._v("game.state.add")]),t._v("可以将场景添加到游戏")])]),s("h3",{attrs:{id:"第三步：将场景串通"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步：将场景串通","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三步：将场景串通")]),s("ul",[s("li",[t._v("具体定义每个场景的生命周期")]),s("li",[t._v("从一个场景切换到另一个场景")]),s("li",[t._v("启动游戏")])]),s("p",[t._v("说明：\n每个场景都有自己的生命周期，常用的生命周期是"),s("code",[t._v("preload（加载）")]),t._v("、"),s("code",[t._v("create（准备就绪")]),t._v("）、"),s("code",[t._v("update（更新周期")]),t._v("）、"),s("code",[t._v("render")]),t._v("（渲染完成）")]),s("ul",[s("li",[t._v("preload - 尽管我们有预加载的场景，但如果你希望能缩短进入页面时加载的时间，可以分摊一些到其他场景，只需要在其他场景加入preload方法即可。")]),s("li",[t._v("create - 如果存在preload方法，则会在加载完毕后执行此方法；否则将在进入该场景时直接执行此方法。")]),s("li",[t._v("update - 更新周期自动执行的方法。")]),s("li",[t._v("render - 渲染完毕后执行的方法。")])]),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" height "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 创建游戏实例")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" game "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Phaser"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Game")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Phaser"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("AUTO")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'#game'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 定义场景")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" states "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// 加载场景")]),t._v("\n  preload"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("preload")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  \t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 开始场景")]),t._v("\n  created"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("create")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 启动游戏")]),t._v("\ngame"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("start")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'preload'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[t._v("#")]),t._v(" DEMO")]),s("p",[s("img",{attrs:{src:"/demo.png",alt:"Image text"}})]),s("h2",{attrs:{id:"资源文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源文件")]),s("p",[s("a",{attrs:{href:"/assets.zip"}},[t._v("资源文件")])])])}],!1,null,null,null);a.default=e.exports}}]);