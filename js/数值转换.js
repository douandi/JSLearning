//将一个值转换为其对应的Boolean值，可以调用转型函数Boolean();
var message1 = "Hello World!";
var messageAsBoolean = Boolean(message1);

//转义字符\n \t \b \r \f \\ \' \" \xnn \unnnn nnnn为十六进制数字

//非数值 isNaN();

//数值转换
//Number(); parseInt();parseFloat;
var num = parseInt("0xAF",16); //十六进制转十进制。还可以转 2 8 10 16 进制

//转换为字符串 .toString();
var age = 11;
var ageAsString = age.toString();
var found = true;
var foundAsString = found.toString();
