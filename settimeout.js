/**
 *会进入死循环，不会执行timeout
*/

var t = true;

window.setTimeout(function (){
    t = false;
    alert('haha');
},1000);

while (t){}

alert('end');

//JavaScript引擎是单线程机制
//只有在 JS线程中没有任何同步代码要执行的前提下才会执行异步代码
//setTimeout是异步代码，所以setTimeout只能等js空闲才会执行
//如果代码中设定了一个setTimeout，那么浏览器便会在合适的时间，将代码插入任务队列，如果这个时间设为 0，就代表立即插入队列，但不是立即执行，仍然要等待前面代码执行完毕。
//所以 setTimeout 并不能保证执行的时间，是否及时执行取决于JavaScript线程是拥挤还是空闲
//setTimeout只能保证在指定的时间过后将任务(需要执行的函数)插入队列等候，并不保证这个任务在什么时候执行。
//执行javascript的线程会在空闲的时候，自行从队列中取出任务然后执行它。javascript 通过这种队列机制，给我们制造一个异步执行的假象
