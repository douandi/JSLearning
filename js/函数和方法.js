//函数
//判断该函数被传入了几个元素，然后分别进行操作
//JS的函数没有重载功能
function doAdd(){
  if(arguments.length == 1){
    alert(arguments[0] + 10)
  }else if(arguments.length == 2){
    alert(arguments[0]+arguments[1]);
  }
}
doAdd(10);
doAdd(30,20);

//动态属性
var person = new Object();
person.name = "Nicholas";
alert(person.name);

//传递参数
function addTen(num){
  num += 10;
  return num;
  var count = 20;
  var result = addTen(count);
  alert(count);
  alert(result);
}

function setName(obj){
  obj.name = "Douandi";
}
var person = new Object();
setName(person);
alert(person.name);

//查询标识符
var color = "blue";
function getColor() {
  return color;
}
alert(getColor());//"blue"
var color = "blue";
function getColor() {
  var color = "red";
  return color;
}
alert(getColor());//"red"

