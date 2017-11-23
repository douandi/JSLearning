//正则表达式 详情见《Javascript高级程序设计》第五章，pdf第121页
var expression = /0pattern/g ;

// g 表示全局模式，模式将被应用于所有字符串，而非在发现第一个匹配项之后立即停止
// i 表示不区分大小写(case-insensitive)模式，在确定匹配项时忽略模式与大小写
// m 表示多行（multiline）模式 在到达一行文本末尾时候还会继续查找下一行中是否存在与模式匹配的项

//匹配字符串中所有'at'的实例
var pattern1 = /at/g;

//匹配第一个'bat'或'cat'，不区分大小写
var pattern2 = /[bc]at/i;

//匹配所有以'at'结尾的三个字符的组合，不区分大小写
var pattern3 = /.at/gi;

//与其他预言中的正则表达式类似，模式种使用的所有元字符都必须转义。正则表达式中的元字符包括：
//( [ { \ ^ $ | ) ? * + .]}
//这些元字符在正则表达式中都有一或多种特殊用途，因此如果想要匹配字符串中包含的这些字符，就必须对它们进行转义

//匹配第一个'cat'或'bat'，不区分大小写
var pattern1 = /[bc]at/i;

//匹配第一个'[bc\]at'，不区分大小写
var pattern2 = / \[bc\] at/i;

//匹配所有以'at'结尾的三个字符的组合，不区分大小写
var pattern3 = /,at/gi;

//匹配所有'.at'，不区分大小写
var pattern4 = /\.at/gi;

//构造函数的表示方式

//匹配第一个'bat'或'cat'，不区分大小写
var pattern1 = /[bc]at/i;
//等价于
var pattern2 = new RegExp('[bc]at','i');
