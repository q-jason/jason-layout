(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(s,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jason-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jason-css"}},[s._v("#")]),s._v(" jason-css")]),s._v(" "),a("blockquote",[a("p",[s._v("项目 css 基础库，scss 实现 "),a("br"),s._v("\n附带 scss 工具库")])]),s._v(" "),a("h2",{attrs:{id:"文档，文档中的命名介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档，文档中的命名介绍"}},[s._v("#")]),s._v(" 文档，文档中的命名介绍")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://q-jason.github.io/css",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://q-jason.github.io/css"),a("OutboundLink")],1)])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("example")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("breakpoint")]),s._v(" "),a("td",[s._v(".col-${ breakpoint }-6")]),s._v(" "),a("td",[s._v("响应式断点名称，默认的为 xs、sm、md、lg，可通过 scss 变量修改")])]),s._v(" "),a("tr",[a("td",[s._v("weight")]),s._v(" "),a("td",[s._v(".col-${ weight }")]),s._v(" "),a("td",[s._v("权重，主要用于栅格中，语义为占的比重大小")])]),s._v(" "),a("tr",[a("td",[s._v("level")]),s._v(" "),a("td",[s._v(".fs-${ level }")]),s._v(" "),a("td",[s._v("等级，该系列类不建议在项目中使用，影响维护性，适合于你不知道如何命名你的元素的场景！")])]),s._v(" "),a("tr",[a("td",[s._v("range")]),s._v(" "),a("td",[s._v(".flex-row-sm-${ range }")]),s._v(" "),a("td",[s._v("区间，主要用于响应式区间选择，值为 up，down，only，启发与 vuetify")])]),s._v(" "),a("tr",[a("td",[s._v("dir")]),s._v(" "),a("td",[s._v(".m${dir}-5")]),s._v(" "),a("td",[s._v("方向，主要用于 margin padding level 类，值为 t、r、b、l、x、y，分别为 上、右、下、左、左右、上下")])])])]),s._v(" "),a("h2",{attrs:{id:"三套库介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三套库介绍"}},[s._v("#")]),s._v(" 三套库介绍")]),s._v(" "),a("blockquote",[a("p",[s._v("内置了三套 css 库")])]),s._v(" "),a("ol",[a("li",[s._v("normal - 电脑、手机网站，webApp")]),s._v(" "),a("li",[s._v("responsive - 响应式网站")]),s._v(" "),a("li",[s._v("mini-program - 小程序")])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i --save jason-css\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("blockquote",[a("p",[s._v("非模块化引入赋值 dist 目录下相应的文件引入即可 "),a("br"),s._v("\n下面推荐 scss 方式引入，需要预先配置 sass-loader")])]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局 scss 文件中")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./custom-variable.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入响应的库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/normal/index.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/responsive/index.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/mini-program/index.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// scss 工具库引入")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./custom-variable.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入响应的库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/normal/util.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/responsive/util.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/mini-program/util.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);