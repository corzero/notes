(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{392:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("写一个函数，求两个整数之和，要求在函数体内不得使用"),a("code",[t._v("+、-、*、/")]),t._v("四则运算符号。")]),t._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[a("strong",[t._v("将加法拆解成三步：")])]),t._v(" "),a("ul",[a("li",[t._v("1.不进位相加")]),t._v(" "),a("li",[t._v("2.计算进位")]),t._v(" "),a("li",[t._v("3.进位与不进位结果进行相加")]),t._v(" "),a("li",[t._v("重复这三步，直到进位值为0")])]),t._v(" "),a("p",[a("strong",[t._v("举一个十进制的例子 "),a("code",[t._v("5 + 17")]),t._v("：")])]),t._v(" "),a("ul",[a("li",[t._v("1.不进位相加 -> "),a("code",[t._v("12")])]),t._v(" "),a("li",[t._v("2.计算进位 -> "),a("code",[t._v("5+7")]),t._v(" 产生进位 "),a("code",[t._v("10")])]),t._v(" "),a("li",[t._v("3.进位与不进位结果进行相加 "),a("code",[t._v("12 + 10 = 22")])])]),t._v(" "),a("p",[a("strong",[t._v("使用二进制代替上面的过程：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("5")]),t._v("的二进制为"),a("code",[t._v("101")]),t._v("，"),a("code",[t._v("17")]),t._v("的二进制为"),a("code",[t._v("10001")])]),t._v(" "),a("li",[t._v("1.不进位相加 -> "),a("code",[t._v("101+10001=10100")])]),t._v(" "),a("li",[t._v("2.计算进位 -> "),a("code",[t._v("10")])]),t._v(" "),a("li",[t._v("3.进位与不进位结果进行相加 "),a("code",[t._v("10100 + 10 = 10110")]),t._v("，转换成十进制后即"),a("code",[t._v("22")])])]),t._v(" "),a("p",[a("strong",[t._v("使用位运算来计算二进制：")])]),t._v(" "),a("ul",[a("li",[t._v("二进制异或操作和不进位相加得到的结果相同"),a("code",[t._v("(1^1=0 0^1=1 0^0=0)")])]),t._v(" "),a("li",[t._v("二进制与操作后左移和进位结果相同"),a("code",[t._v("（1&1=1 1&0=0 0&0=0）")])])]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("p",[a("em",[t._v("递归实现")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v("非递归实现")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" excl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" carry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" excl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" carry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"考察点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#考察点"}},[t._v("#")]),t._v(" 考察点")]),t._v(" "),a("ul",[a("li",[t._v("位运算")]),t._v(" "),a("li",[t._v("二进制")])])])}),[],!1,null,null,null);s.default=r.exports}}]);