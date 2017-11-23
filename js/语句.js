//语句:if语句 do-while 语句 for语句

//for-in语句 用来枚举对象的属性

for( var propName in window ){
  document.write(propName);
}

//label 语句 标签

start : for (var i=0;i<count;i++){
  alert(i);
}


//break和continue语句 outermost;
var num = 0;
for(var i=1;i<10;i++){
  if(i%5 == 0){
    break;
  }
  num++;
}

//with语句
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

//上面几行代码可以缩写为
with(location){
  var qs = search.substring(1);
  var hostName = hostname;
  var url = href;
}
//switch 语句
  switch(num){
  case num < 0 :
    alert("Less than 0.");
  case num >= 0 && num <=0:
    alert("Between 0 and 10.");
  case num > 10 && num <= 20:
    alert("Between 10 and 20.");
  default:
    alert("More than 20.");
  }

//条件操作符
var num1=1 , num2 = 2;        var max = ( num1 > num2 ) ? num1 : num2;

//检测类型
var s = "Douandi";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();

alert(typeof s);
alert(typeof b);
alert(typeof i);
alert(typeof u);
alert(typeof n);
alert(typeof o);

//判断对象类型是否是预测值
//instanceof
alert(s instanceof String);
alert(b instanceof Boolean);