/**
*js里常用的如下两种继承方式：
*原型链继承（对象间的继承）
*类式继承（构造函数间的继承）
*/

//类式继承是在子类型构造函数的内部调用超类型的构造函数。
//严格的类式继承并不是很常见，一般都是组合着用：
//借用构造函数（类式继承）
function Super(){
    this.colors=["red","blue"];
}
 
function Sub(){
    Super.call(this);
}

var c1 = new Sub();
c1.colors; //["red","blue"]
var c2 = new Sub();
c2.colors; //["red","blue"]
c1.colors.push("yellow");
c1.colors; //["red","blue","yellow"]
c2.colors; //["red","blue"]


//原型式继承是借助已有的对象创建新的对象，
//将子类的原型指向父类，就相当于加入了父类这条原型链
function Parent(){
    this.name = 'Nianko';
}

function Child(){
    this.age = 112;
}

Child.prototype = new Parent();//Child继承Parent，通过原型，形成链条

var func = new Child();
alert(func.age);
alert(func.name);//得到被继承的属性

//继续原型链继承
function Brother(){   //brother构造
    this.weight = 60;
}

Brother.prototype = new Child();//继续原型链继承

var brother = new Brother();
alert(brother.name);//继承了Parent和Child,弹出Nianko
alert(brother.age);//弹出12
//所有的构造函数都继承自Object，而继承Object是自动完成的，并不需要手动继承


// 组合继承(原型链+借用构造函数)
function Parent(age){
    this.name = ['Nianko','Natusme','Miao'];
    this.age = age;
}
Parent.prototype.run = function () {
    return this.name  + ' are ' + this.age;
};
function Child(age){
    Parent.call(this,age);//对象冒充，给超类型传参
    // call和apply是为了动态改变this而出现的
    // Parent.call(this, arg1, arg2) 或者 Parent.apply(this, [arg1, arg2]); 来调用
}
Child.prototype = new Parent();// 原型链继承
var test = new Child(21);// 写new Parent(21)也行
alert(test.run());// 'Nianko','Natusme','Miao' are 21
