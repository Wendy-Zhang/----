
/*关于reduce的使用方法：该方法接受一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
reduce()可以作为一个高阶函数，用于函数的compose，当空数组时reduce()不会执行回调函数
接受四个参数：1：total为必需，代表初始值，或者计算结束后的返回值
              2：currentValue为必需，代表当前元素
              3：currentIndex可选，当前元素的索引
              4：arr可选，当前元素所属的数组对象*/

let sum = [0,1,2,3].reduce(function(acc,val){
	return acc + val;
},0);
console.log(sum)  //6

//去除嵌套数组，用递归，reduce，concat方法实现
let list1 = [[0,1],[2,3],[4,5]];
let list2 = [0,[1,[2,[3,[4,[5,[6]]]]]]];
const flatten = (arr) => {
	return arr.reduce(
		(acc,val) => {
			acc.concat(Array.isArray(val)? flatten(val) : val)
		},[]
	);
};
flatten(list1);  //[0,1,2,3,4,5]
flatten(list2);   //[0,1,2,3,4,5,6]

//数组去重
/*方法1：es6中的Set()数据结构； 
方法2：filter()和indexOf()结合； 
方法3：数组的for循环和splice()操作方法*/

var arr = [1,2,3,4,2,13,3];
var newSet = [...new Set(arr)];  //或者 var newSet = Array.from(new Set(arr))
console.log(newSet);  //[1,2,3,4,13]


var arr1 = [1,4,24,2,3,1,1,4,2];
arr1 = arr1.filter(function(item,index,arr1){
       return arr1.indexOf(item) === index
	})  //[1,4,24,2,3]

var arr2 = [1,2,34,2,1,5,2];
for(var i = 0; i<arr2.length; i++){
	for(var j=i+1;j < arr2.length; j++){
		if(arr2[i] == arr2[j]){
			arr2.splice(j,1);
		}
		j--;
	}
} 
console.log(arr2)  //[1,2,34,5]