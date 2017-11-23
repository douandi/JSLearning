//执行环境以及作用域
var color = "blue";
function changeColor() {
  if(color === "blue"){
    color = "red";
  }else{
    color = "blue";
  }
}
changeColor();
alert("Color is now" + color);

var color = "blue";
function changeColor() {
  var anotherColor = "red";
  function swapColors() {
    var temColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    //这里可以访问temColor anotherColor color
  }
  //这里可以访问color anotherColor但不能访问temcolor
}
//延长作用域链
function buildUrl() {
  var qs = "?debug=true";
  with (location) {
    var url = href + qs;
  }
  return url;
}

//没有块级作用域

if(true){
  var color = "blue";
}
alert(color); //"blue"

for (var i = 0; i < 10; i++){
  doSomeThing(i);
}
alert(i); //10

function add(num1,num2){
  sum = num1 + num2;
  return sum;
}
var result = add(10,20);
alert(sum);//报错