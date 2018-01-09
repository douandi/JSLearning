//《Javascript高级程序设计》5.5 Function 类型

//第一种方法
function sum(num1,num2){
  return num1 + num2;
}

//第二种方法
var sum = function(num1,num2){
  return num1 + num2;
};
//这种方法的函数末尾有个分号

//第三种方法(不推荐）
var sum = new Function('num1', 'num2', 'return num1 + num2');

//一个函数可能会有多个名字
function sum(num1,num2){
  return num1 + num2;
}
alert(sum(10,10));//20

var anotherSum = sum;
alert(anotherSum(10,10));//20

sum = null;
alert(anotherSum(10,10));//20

//没有重载
function addSomeNumber(num){
  return num +100;
}
function addSomeNumber(num){
  return num + 200;
}
alert(addSomeNumber(100));//300


//函数声明问题
alert(sum(10,10));
function sum(num1,num2){
  return num1 + num2;
}//可以执行
alert(sum(10,10));
var sum = function(num1,num2){
  return num1 + num2;
};//不可执行

//作为值的函数
function callSomeFunction(someFunction,someArgument){
  return someFunction(someArgument);
}

function add10(num){
  return num = 10;
}
var result1 = callSomeFunction(add10,10);
function getGreeting(name){
  return "Hello," + name;
}
var result2 = callSomeFunction(getGreeting,"Douandi");
alert(result2);
//要访问函数的指针（函数名），而不执行函数，一定要去掉函数后面的双括号

//从一个函数中返回另一个函数
function createComparisonFunction(propertyName){
  return function(obj1,obj2){
    var value1 = obj1[propertyName];
    var value2 = obj2[propertyName];
    if(value1 < value2){
      return -1;
    }else if(value1 > value2){
      return 1;
    }else{
      return 0;
    }
  }
}
var data = [{name:'Zachary',age:28},{name:"Dou",age:30}];
data.sort(createComparisonFunction("name"));
alert(data[0].name); //Nicholas
data.sort(createComparisonFunction("age"));
alert(data[0].name); //Zachary

//函数的内部属性
function factorial(num){
  if(num <=1){
    return 1;
  }else{
    return num * factorial(num - 1);
  }
}
//定义了一个阶乘函数，此为一个递归算法
//为了防止递归与函数名一致，在此引用一个内部属性
function factorial(num){
  if(num <=1){
    return 1;
  }else{
    return num * arguments.callee(num - 1);
  }
}
//效果：
var tureFactorial = factorial;
factorial = function(){
  return 0;
}
alert(tureFactorial(5));//120
alert(factorial(5));//0
