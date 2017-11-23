// Object对象类型
// constructor 构造函数
// hasOwnProperty("propertyName") 检查属性是否存在于实例中
// isPrototypeOf(object) 检查传入的对象是否是传入对象的原型
// propertyIsEnumerable("propertyName") 用于检查给定的属性是否能用for-in来枚举
// toLocaleString(); 返回对象的字符串表示
// valueOf(); 返回对象的字符串、数值或布尔值表示。
var o = new Object();

//对象类型传递 -->
//obj2实际是一个指针指向obj1
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Douandi";
alert(obj2.name);

//对象字面量表示法
var person = {
  name: "Doudnandi",
  age: 29
};
function displayInfo(args) {
  var output = "";
  if(typeof args.name == "string"){
    output += "Age:" + args.name + "\n";
  }
  if(typeof args.age == "number"){
    output += "Age: " + args.age + "\n";
  }
  alert(output);
}
displayInfo({
  name: "Douandi",
  age: 29
})
displayInfo({
  name: "Greg"
})

//方括号形式访问对象属性
alert(person["name"]);
alert(person.name);//两者相同
person["first name"] = "Douandi";//属性名可以包含空格
