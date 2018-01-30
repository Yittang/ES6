/*--------------------------变量的声明方式-----------------------*/
// {
// 	let a = 2	//局部变量
// }

// console.log(a)  //块级变量报错

/*-------------------------------------------------------------*/

// for(let i=0; i<3; i++) {
// 	console.log("循环内的i " + i)
// }

// console.log("循环外的i " + i)  //i不会污染全局，就报错了此时

/*-------------------------------------------------------------*/

// const a = "Yittang"
// a = "wjm"
// console.log(a)  //const会让变量指向简单类型数据的指针不变，a是只读，报错

/*-------------------------------------------------------------*/

// const a =[1,2,3]
// a.push(4)
// console.log(a)  //指向复合类型(数据或对象)可以改变其值，但不可改变其指向地址，不报错

/*-------------------------------------------------------------*/


/*--------------------------变量的解构赋值-----------------------*/

/*数组解构*/
// let [a,b,c] = [1,2,3]    
// console.log(a,b,c)    //1 2 3，左右两边解构一致，解构成功

/*-------------------------------------------------------------*/

// let [obj, foo="123"] = ["默认值是"]
// console.log(obj + foo)    //默认值是123。默认值有效

/*-------------------------------------------------------------*/

// let [obj, foo="123"] = ["默认值是", undefined]
// console.log(obj + foo)    //默认值是123。undefined相当于什么都没有，默认值不会被undefined覆盖

/*-------------------------------------------------------------*/

// let [obj, foo="123"] = ["默认值是", null]
// console.log(obj + foo)   //默认值是null。null相当于有值，默认值会被解构成null

/*-------------------------------------------------------------*/

/*对象解构*/
// let {obj, foo} = {obj:'Yittang', foo: '在学ES6'}
// console.log(obj + foo)    //Yittang在学ES6。解构成功

/*-------------------------------------------------------------*/

// let {foo: baz} = {foo: '123'}
// console.log(baz)    //foo是解构模式，baz才是解构变量

/*-------------------------------------------------------------*/

// let foo
// ({foo} = {foo: 'Yittang'})   //已声明的变量进行对象解构，在解构等式外层加圆括号
// console.log(foo)   //Yittang

/*-------------------------------------------------------------*/

/*字符串解构*/
// const [a,b,c,d,e,f,g] = 'Yittang'
// console.log(a,b,c,d,e,f,g)    //Y i t t a n g

/*-------------------------------------------------------------*/


/*--------------------------扩展运算符和rest运算符-----------------------*/

/*对象扩展运算符*/
// function Yittang(...arg) {
// 	console.log(arg[0],arg[1],arg[2],arg[3])
// }

// Yittang(1,2,3)   //1 2 3 undefined

/*-------------------------------------------------------------*/

// let arr1 = [1,2,3]
// let arr2 = [...arr1]
// console.log("arr1是" + arr1)    //arr1是1,2,3
// console.log("arr2是" + arr2)    //arr2是1,2,3
// arr2.push(4)
// console.log("arr1在arr2改变之后是" + arr1)    //arr1在arr2改变之后是1,2,3
// console.log("arr2改变之后是" + arr2)    //arr2改变之后是1,2,3,4

/*-------------------------------------------------------------*/
/*rest运算符*/
// function Yittang(first,...arg) {
// 	for(let val of arg) {
// 		console.log(val)    //2 3 4 5
// 	}
// }

// Yittang(1,2,3,4,5)

/*-------------------------------------------------------------*/



/*--------------------------字符串模版-----------------------*/

// let text = 'Yittang'
// let template = `
// 	<h1 style="color:#333;font-weight:bold">
// 		你现在看到的是ES6的字符串模板，我们需要插入的内容是：${text}
// 	</h1>
// `
// document.write(template)

/*-------------------------------------------------------------*/

// let a = 1
// let b = 2
// let result = `${a+b}`
// console.log(result)    //3

/*-------------------------------------------------------------*/

// let text = 'Yittang'
// let template = '你现在看到的是ES6的字符串模板，我们需要插入的内容是：Yittang'
// console.log(template.includes(text))    //true  验证是否包含text
// console.log(template.startsWith(text))  //false 验证开头是否包含text
// console.log(template.endsWith(text))    //true  验证结尾是否包含text

/*-------------------------------------------------------------*/

//document.write('Yittang'.repeat(3))  //YittangYittangYittang 字符串复制3次



/*--------------------------ES6数字操作-----------------------*/
/*二进制声明*/
// let binary = 0B0101
// console.log(binary)    //5

/*八进制声明*/
// let Octal = 0o666
// console.log(Octal)    //438

/*-------------------------------------------------------------*/

/*判断是否是数字*/
// let a = 11/4
// console.log(Number.isFinite(a))    		   //true
// console.log(Number.isFinite('Yittang'))    //false
// console.log(Number.isFinite(NaN))          //false
// console.log(Number.isFinite(undefined))    //false

/*-------------------------------------------------------------*/

/*判断是否是NaN*/
// console.log(Number.isNaN(1))    //false
// console.log(Number.isNaN('1'))    //false
// console.log(Number.isNaN(NaN))    //true

/*-------------------------------------------------------------*/