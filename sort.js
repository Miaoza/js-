// 方法1：自己想的
function sort1(arr){
    let list = [];
     for(let i=0;i<arr.length;i++){
        if(i===0){
            list.push(arr[i]);
             continue;
        }
        for(let j=0;j<list.length;j++){
            if(arr[i]<list[j]){
                list.splice(j, 0, arr[i]);
                break;
            }
            if(j===list.length-1){
                list.push(arr[i]);
                break;
            }
        }
     }
     return list;
}
// 方法2：插入排序
function sort2(arr) {
        for (let i=1;i<arr.length; i++) {
            let temp=arr[i];
            let j=i-1;
            while (j>=0 && arr[j]>temp) {
                    arr[j+1]=arr[j];
                    j--;
                }
            arr[j+1]=temp;
            }
        return arr
     }
//方法3：快速排序
function sort3(arr) {
    if(arr.length<2) {return arr}
    let mIndex = Math.floor(arr.length/2); // 中间值索引
    // let pivot = arr[mIndex]; // 出现无限递归的错误
    let pivot = arr.splice(mIndex, 1); // 中间值；splice后原数组长度减一；+[1] === 1 为true
    let left = [];
    let right = [];
    arr.forEach(n=>{
       n<pivot?left.push(n):right.push(n)
    })
    return [...sort3(left), ...pivot, ...sort3(right)]
}
