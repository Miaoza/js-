
// 方法调用模式 the method invocation pattern
var obj = {
  name: 'the method invocation pattern',
  func: function(){
    return this.name;
  }
}
obj.func(); // the method invocation pattern

// 函数调用模式 the function invocation pattern
function func1(){
  return 'the function invocation pattern';
}
func1();

// 构造器调用模式 the constructor invocation pattern
var Super = function(name){
    this.name = name;
}
Super.prototype.get_name = function(){
    return this.name;
}
//构造一个Super实例
var child = new Super("the constructor invocation pattern");
child.get_name();//"the constructor invocation pattern"

// Apply/Call调用模式 the apply/call invocation pattern
var Parent = function(name){
  this.name = name;
}
Parent.prototype.get_name = function(){
  return this.name
}
var o = {
  name: 'nianko'
};
var child1 = Parent.prototype.get_name.apply(o);
console.log(child1); // nianko
