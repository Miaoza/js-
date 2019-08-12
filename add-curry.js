// 先通过内部的toString()进行取值，再通过 valueOf()进行取值，valueOf优先级更高，可以进行覆盖初始的方法
// object.valueOf() 返回值为该对象的原始值。

function add1(n){
  function cb(m=0){
		n += m
		return cb
	}
	cb.toString = function(){
		return n
	}
	return cb
}

// add1(1)=>1
// add1(1)(2)=>3

var add2 = function(n) {
  const f = x => add2(n + x)
  f.valueOf = () => n
  return f;
}

// 233333333333333333333333333333
function fn(){
	return 1
}
/**
fn.valueOf()=>ƒ fn(){
	return 1
}
*/
fn.valueOf = function(){
  return 2
}
// fn.valueOf()=>2
// fn()=>1
