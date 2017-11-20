//Array 类型
var colors = new Array(20);
var colors2 = new Array("red", "blue" , "green");

//使用书字面量表示法
var colors3 = ["red","blue","green"];
var colors4 = [];//空数组

//读取和设置数值
var colors5 = ["red", "blue", "green"];
alert(colors[0]);
colors5[2] = "black";
colors5[3] = "brown";//自动增加长度1

//length用法
var colors6 = ["red", "blue", "green"];
colors6.length = 2;//自动删除了第三项
alert(colors6[2]);//undefined

var colors7 = ["red", "blue", "green"];
colors7.length = 4;//长度增加1
alert(colors7[3]);//undefined

var colors8 = ["red", "blue", "green"];
colors8[99] = "black";
alert(colors.length);//100 中间的空间全部自动创建

//检测数组
if(Array.isArray(value)){
  //弹出检测结果或进行操作
}

//转换方法
var colors9 = ["red", "blue", "green"];//red,blue,green
alert(colors.valueOf());// red,blue,green
alert(colors);//red,blue,green

var person1 = {
    toLocaleString : function(){
      return "Douandi";
    }
  }


//栈方法
var colors = new Array(0);
var count = colors.push("red","green");//入栈两项
alert(count); //2

count = colors.push("black");
alert(count.length); //3

var item = colors.pop(); //取得最后一项
alert(item);
alert(colors.length);


var colors10 = ["red", "blue"];
colors10.push("brown");
colors10[3] = "black";
alert(colors10.length); //4
var item = colors10.pop();
alert(item); //"back"


//队列方法
var colors = new Array();
var count = colors.push("red","green")

alert(count);

count = colors.push;
alert(count);

var item = colors.shift(); //取得第一项
alert(item); //red
alert(colors.length); //2



//重排序方法,reverse();sort();
var values = [1,2.3,4,5];
values.reverse();
alert(values);

function compare(value1,value2){
  if(value1 < value2){
    return -1;
  }else if(value1 > value2){
    return 1;
  }

  else{
    return 0;
  }
}

var values = [0, 1, 5, 10, 15];
values.sort(compare);


//操作方法
//concat()方法
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
alert(colors); // red,green,blue
alert(colors2); //red,green,blue,yellow,black,brown


//slice() 方法
//删除对应项
var colors = ["red", "green", "blue", "yelloe", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
alert(colors2);//green,blue,yellow,purple
alert(colors3);//green.blue,yellow

var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);//删除第一项
alert(colors);//green,blue
alert(removed);//red

removed = colors.splice(1,0,"yellow","orange");//从位置1开始插入两项
alert(colors);//green,yellow,orange,blue
alert(removed);//空数组

removed = colors.splice(1,1,"red","purple");
alert(colors);//green,red,purple,orange,blue
alert(removed);//yellow


//位置方法
var numbers = [1,2,3,4,5,4,3,2,1];
alert(numbers.indexOf(4)); //3 因为在第三位
alert(numbers.lastIndexOf(4));//5

alert(numbers.indexOf(4,4));//5
alert(numbers.lastIndexOf(4,4));//3

var person = {name: "Douandi"};
var people = [{name: "Douandi"}];
var morePeople = [person];

alert(people.indexOf(person));//-1
alert(morePeople.indexOf(person))//0


//归并方法 -->
//reduce()和reduceRight() -->
//reduce() 数组求和,从左到右

var values = [1,2,3,4,5];
var sum = values.reduce(
  function(prev,cur,index,array){
    return prev+cur;
  }
);
alert(sum);//15

//数组求和，从右到左
var values = [1,2,3,4,5];
var sum = values.reduceRight(
  function(prev,cur,index,array){
    return prev+cur;
  }
);
alert(sum);//15

//一共有5种迭代方法
//every();对数组的每一项运行给定的函数，全部true则返回true
//filter();对数组中的每一项运行给定的函数，返回为true的项组成的数组
// forEach();对数组中的每一项运行给定的函数，无返回值
//map();对数组中的每一项运行给定的函数，然后返回每次返回的结果组成的数组
//some();对数组中的每一项运行给定的函数，任何一项返回true则返回true

var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(
  function(item, index, array){
    return (item > 2)
  }
);
alert(everyResult);//false

var someResult = numbers.some(
  function (item, index, array) {
    return(item>2);
  }
)
alert(someResult);//true

var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(
  function(item, index, array){
    return item*2;
  }
)
alert(mapResult);//[2,4,6,8,10,8,6,4,2]

var numbers = [1,2,3,4,5,4,3,2,1];
numbers.forEach(
  function (item, index, array) {
  }
)