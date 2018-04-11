//「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包
// 内存泄露是指你用不到（访问不到）的变量，依然占居着内存空间，不能被再次利用起来。
var a = 1;
function func1(){
  console.log(a);
}

//闭包常常用来「间接访问一个变量」，换句话说，「隐藏一个变量」。

// 子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。
// child1可以读取func2中的局部变量，把child1作为返回值，可以在func2外部读取它的内部变量！
// 闭包就是能够读取其他函数内部变量的函数
// 在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁
function func2(){
  console.log(a);// undefined 
  var a = 112;//使用闭包的目的——隐藏变量
  function child1(){
    return a;
  }
  return child1;
}

var test1=func2();
test1(); // 112

//闭包最大用处:一个是可以读取函数内部的变量，另一个是让这些变量的值始终保持在内存中
function func3(){
  var n=1;
  nAdd=function(){
    n+=1;
    console.log(n);
  }
  function child2(){
    console.log(n);
  }
  return child2;
}
var test2=func3();
test2();  // 1
nAdd();   // 2
test2(); // 2

//在退出函数之前，将不使用的局部变量全部删除

var name = 'window name';
var obj = {
 name: 'Name',
 func: function(){
   console.log("I am parent:", this); //this->obj
   return function(){
     console.log("I am child:", this); //this->window
     return this.name;
   }
 }
}
