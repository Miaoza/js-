//在js里面，this指针代表的是执行当前代码的对象的所有者

//这里的func1方法属于js的最初始的对象window的
function func1(){//全局的function
  console.log(this); //window
};

//如果一个函数，是某个对象的key 值，那么，this就指向这个对象
var func2 = function(obj) 
{ 
  console.log(this == obj); 
} 
var o = {}; 
o.afun = func2; 
o.afun(o); //true 


//绑定没有传递性，比如上面的嵌套的函数，a绑定到 o 对象，那么就影响了a函数，而b 还是指向到window
function func3() 
{ 
  console.log(this); //obj
  function fun() 
  { 
    console.log(this); //window
  } 
  return fun;
} 
var obj = {}; 
obj.fun = func3; 
obj.fun()();

//函数new 了一下，那么就会创建一个对象，并且this 指向 新创建的对象
function func4(){
  this.name = 'nianko';
}
var fun1 = new func4(); // func4{}
fun1.name; // nianko


//通过apply|call 可以改变this 的指向 
var func5 = function (p1, p2) 
{ 
  console.log(this,'---', [p1, p2]); // Object {key: "value"} "---" ["hello", "world"]
  
  return function(){
    console.log(this);   // window
  }
}; 
var object = {
  key: 'value'
} 

var f1 = func5.apply(object, ['hello', 'world']);  // Object {key: "value"} "---" ["hello", "world"]
var f2 = func5.call(object, 'hello','world');      // Object {key: "value"} "---" ["hello", "world"]
f1(); // window
f2(); // window
