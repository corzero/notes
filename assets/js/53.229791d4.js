(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{399:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("求出"),a("code",[t._v("1~13")]),t._v("的整数中1出现的次数,并算出"),a("code",[t._v("100~1300")]),t._v("的整数中"),a("code",[t._v("1")]),t._v("出现的次数？")]),t._v(" "),a("p",[t._v("为此他特别数了一下"),a("code",[t._v("1~13")]),t._v("中包含1的数字有"),a("code",[t._v("1、10、11、12、13")]),t._v("因此共出现6次,但是对于后面问题他就没辙了。")]),t._v(" "),a("p",[a("code",[t._v("ACMer")]),t._v("希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中"),a("code",[t._v("1")]),t._v("出现的次数（从"),a("code",[t._v("1")]),t._v("到"),a("code",[t._v("n")]),t._v("中"),a("code",[t._v("1")]),t._v("出现的次数）。")]),t._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：11算出现了两个1")])]),t._v(" "),a("p",[t._v("分别计算数字中每个位置可能出现1的情况，相加。")]),t._v(" "),a("p",[t._v("将数字分为两部分： 当前数字为1，其后面数字可能出现的情况"),a("code",[t._v("low")]),t._v("，当前数字为1，其前面数字可能出现的情况"),a("code",[t._v("high")]),t._v("，所有情况为"),a("code",[t._v("low * high")]),t._v("种情况。")]),t._v(" "),a("p",[t._v("例如，在分析数字"),a("code",[t._v("8103")]),t._v("时：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("个位 "),a("code",[t._v("3")]),t._v(": 个位已经是最低位了，所以"),a("code",[t._v("low")]),t._v("只有"),a("code",[t._v("1")]),t._v("中情况。"),a("code",[t._v("high")]),t._v("可以取"),a("code",[t._v("0 - 810")]),t._v("共"),a("code",[t._v("811")]),t._v("种情况，所有情况为"),a("code",[t._v("1 * 811 = 811")]),t._v("种情况。")])]),t._v(" "),a("li",[a("p",[t._v("十位 "),a("code",[t._v("0")]),t._v(": "),a("code",[t._v("low")]),t._v("可能为"),a("code",[t._v("10 - 19")]),t._v("共"),a("code",[t._v("10")]),t._v("种情况，"),a("code",[t._v("high")]),t._v("可以取"),a("code",[t._v("0 - 80")]),t._v("共"),a("code",[t._v("81")]),t._v("种情况，所有情况为"),a("code",[t._v("81 * 10 = 810")]),t._v("种情况。")])]),t._v(" "),a("li",[a("p",[t._v("百位 "),a("code",[t._v("1")]),t._v(": "),a("code",[t._v("low")]),t._v("可能为"),a("code",[t._v("100 - 199")]),t._v("共"),a("code",[t._v("100")]),t._v("种情况，"),a("code",[t._v("high")]),t._v("可以取"),a("code",[t._v("0 - 7")]),t._v("共"),a("code",[t._v("8")]),t._v("种情况;当"),a("code",[t._v("high")]),t._v("取"),a("code",[t._v("8")]),t._v("时，"),a("code",[t._v("low")]),t._v("还可以取"),a("code",[t._v("100 - 104")]),t._v("，所有情况为"),a("code",[t._v("100 * 8 + 4 = 804")]),t._v("种情况。")])]),t._v(" "),a("li",[a("p",[t._v("千位 "),a("code",[t._v("8")]),t._v(":"),a("code",[t._v("low")]),t._v("可能为"),a("code",[t._v("1000 - 1999")]),t._v("共"),a("code",[t._v("1000")]),t._v("种情况，当前已经是最高位了，"),a("code",[t._v("high")]),t._v("只有一种情况，所有情况为"),a("code",[t._v("1000 * 1 = 1000")]),t._v("种情况。")])])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/整数中1出现的次数.png"),alt:"foo"}}),t._v(" "),a("p",[t._v("由以上示例：分三种情况考虑，现有数字"),a("code",[t._v("abcde")]),t._v("，分析百位数字"),a("code",[t._v("c")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("c = 0")]),t._v(" : 有 "),a("code",[t._v("ab*100")]),t._v(" 种情况")]),t._v(" "),a("li",[a("code",[t._v("c = 1")]),t._v(" : 有 "),a("code",[t._v("ab*100 + de + 1")]),t._v(" 种情况")]),t._v(" "),a("li",[a("code",[t._v("c > 2")]),t._v(" : 有 "),a("code",[t._v("(ab+1) * 100")]),t._v(" 种情况")])]),t._v(" "),a("p",[a("code",[t._v("c")]),t._v("是"),a("code",[t._v("abcde")]),t._v("第"),a("code",[t._v("3")]),t._v("位数：")]),t._v(" "),a("p",[t._v("当前的量级："),a("code",[t._v("level = 10")]),t._v("的"),a("code",[t._v("(3-1)")]),t._v("次方")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ab = abcde / (level*10)")])]),t._v(" "),a("li",[a("code",[t._v("c = (abcde / (level)) % 10")])]),t._v(" "),a("li",[a("code",[t._v("de = abcde % level")])])]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NumberOf1Between1AndN_Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第i位数位于什么量级 1 10 100 ...")]),t._v("\n        high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);