'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


/*--------------------------ES6中新增的数组-----------------------*/

/*json数组格式*/
// let json = {
// 	'0': 'Yittang',
// 	'1': '前端',
// 	'2': '吃鸡',
// 	length: 3
// }

// let arr = Array.from(json)
// console.log(arr)    //转成了数组

/*-------------------------------------------------------------*/

// let arr = Array.of('Yittang', '前端')
// console.log(arr)   //['Yittang', '前端']

/*-------------------------------------------------------------*/

// let arr = [1,2,3,4,5]
// console.log(arr.find(function(value, index, arr) {
// 	return value > 4 //5
// }))

/*-------------------------------------------------------------*/

// let arr = [1,2,3,4]
// arr.fill('Yittang', 1, 3)
// console.log(arr)    //[1, "Yittang", "Yittang", 4]

/*-------------------------------------------------------------*/

// let arr = [1,2,3,4]
// for(let item of arr) {
// 	console.log(item)    //1 2 3 4
// }

/*-------------------------------------------------------------*/

// let arr = ['Yittang', '前端', 'web']
// let list = arr.entries()
// console.log(list.next().value)  //[0, "Yittang"]
// console.log(list.next().value)  //[1, "前端"]
// console.log(list.next().value)  //[2, "web"]


/*--------------------------ES6中的箭头函数和扩展-----------------------*/

// const add = (a, b=1) => {
// 	console.log(a + b)    //2
// }
// add(1)


/*--------------------------ES6中的函数和数组补漏-----------------------*/

// let json = {
// 	a: 'Yittang',
// 	b: 'web'
// }

// function print({a, b="前端"}) {
// 	console.log(a, b)
// }

// print(json) //Yittang web

/*-------------------------------------------------------------*/

// let arr = ['Yittang', 'web', '前端']
// function print(a,b,c) {
// 	console.log(a,b,c)
// }
// print(...arr)    //Yittang web 前端

/*-------------------------------------------------------------*/

// let obj = {
// 	a: 'Yittang',
// 	b: 'web'
// }

// console.log('a' in obj)    //true

/*-------------------------------------------------------------*/

// let arr = [, 'Yittang',,]
// console.log(0 in arr)  //false
// console.log(1 in arr)  //true

/*-------------------------------------------------------------*/

// let arr = ['Yittang', 'web', '前端']
// arr.forEach((val, index) => {
// 	console.log(val, index)   //Yittang 0
// 							  //web 1
// 							  //前端 2
// })

// arr.filter(val => {
// 	console.log(val)  //Yittang web 前端
// })

// arr.some(val => {
// 	console.log(val)  //Yittang web 前端
// })


/*--------------------------ES6中对象-----------------------*/

// let name = 'Yittang'
// let age = '21'
// let obj = {
// 	name,
// 	age
// }
// console.log(obj)   //{name: "Yittang", age: "21"}

/*-------------------------------------------------------------*/

// let obj1 = {name: 'Yittang', age: +0, number: NaN}
// let obj2 = {name: 'Yittang', age: -0, number: NaN}
// console.log(Object.is(obj1.name, obj2.name))    //true

// console.log(obj1.age === obj2.age)   //true
// console.log(Object.is(obj1.age, obj2.age))   //false

// console.log(obj1.number === obj2.number)    //false
// console.log(Object.is(obj1.number, obj2.number))    //true

/*-------------------------------------------------------------*/

// let obj = {a: 'Yittang'}
// let obj2 = {b: 'web'}
// let obj3 = {c: '前端'}

// let obj4 = Object.assign(obj, obj2, obj3)
// console.log(obj4)    //{a: "Yittang", b: "web", c: "前端"}


/*--------------------------Symbol在对象中的作用-----------------------*/

// let f = Symbol()
// console.log(typeof f)  //symbol

// let g = Symbol('Yittang')
// console.log(g)    //Symbol(Yittang)

/*-------------------------------------------------------------*/

// let sym = Symbol()
// let obj = {
// 	[sym]: 'Yittang'
// }
// console.log(obj[sym])    //Yittang

/*-------------------------------------------------------------*/

// let obj = {
// 	name: 'Yittang',
// 	skill: 'web'
// }
// let age = Symbol()
// obj[age] = 22
// console.log(obj)    //{name: "Yittang", skill: "web", Symbol(): 22}

// for(let item in obj) {
// 	console.log(obj[item])    //Yittang web
// }


/*--------------------------Set和WeakSet数据结构-----------------------*/

// let setArr = new Set([1,2,3,41,2,3,4])
// console.log(setArr)    //Set(5) {1, 2, 3, 41, 4}

// setArr.add(5)
// console.log(setArr)    //Set(6) {1, 2, 3, 41, 4, 5}

// console.log(setArr.has(3))    //true

/*-------------------------------------------------------------*/

// let weakObj = new WeakSet()
// let obj = {
// 	a: 'Yittang',
// 	b: 'web'
// }

// weakObj.add(obj)
// console.log(weakObj)    //WeakSet {{…}}


/*--------------------------map数据结构-----------------------*/

// let json = {
// 	name: 'Yittang',
// 	age: 1
// }

// let map = new Map()
// map.set(json, 'iam')
// console.log(map)
// map.set('Yittang', json)
// console.log(map)
// console.log(map.get(json))     //iam
// map.delete(json)
// console.log(map.size, map)
// console.log(map.has('Yittang'))  //true


/*--------------------------用Proxy进行预处理-----------------------*/

// let pro = new Proxy(
// 	{
// 		add: function(val) {
// 			return val+100
// 		},
// 		name: 'Yittang'
// 	},
// 	{
// 		get: function(target, key, prototype) {
// 			console.log(key)    //name
// 			return target[key]    //Yittang
// 		},
// 		set: function(target, key, value, receiver) {
// 			console.log(`setting ${key} = ${value}`)
// 			return target[key] = value
// 		}
// 	}
// )

// console.log(pro.name)
// pro.name = 'hhh'
// console.log(pro.name) //hhh

/*-------------------------------------------------------------*/

// let target = function() {
// 	return 'Yittang'
// }

// let handler = {
// 	apply(target, ctx, args) {
// 		console.log('do apply')
// 		return Reflect.apply(...arguments)
// 	}
// } 

// let pro = new Proxy(target, handler)

// console.log(pro())     //Yittang


/*--------------------------promise对象的使用-----------------------*/

var state = 1;

// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭')
//     if(state==1){
//         resolve('洗菜做饭--完成')
//     }else{
//         reject('洗菜做饭--出错')
//     }
// }


// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭')
//     state = 0
//     if(state==1){
//         resolve('坐下来吃饭--完成')
//     }else{
//         reject('坐下来吃饭--出错')
//     }
// }


// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗完')
//      if(state==1){
//         resolve('收拾桌子洗完--完成')
//     }else{
//         reject('收拾桌子洗完--出错')
//     }
// }

// new Promise(step1)
// 	.then(
// 		function(val) {
// 			console.log(val)
// 			return new Promise(step2)
// 		}
// 	)
// 	.then(
// 		function(val) {
// 			console.log(val)
// 			return new Promise(step3)
// 		}
// 	)
// 	.then(
// 		function(val) {
// 			console.log(val)
// 		}
// 	)


/*--------------------------class类的使用-----------------------*/

var People = function () {
	function People(a, b) {
		_classCallCheck(this, People);

		this.a = a;
		this.b = b;
	}

	_createClass(People, [{
		key: 'name',
		value: function name(val) {
			console.log(val);
			return val;
		}
	}, {
		key: 'skill',
		value: function skill(val) {
			console.log(this.name('小明') + ':' + 'skill:' + val);
		}
	}, {
		key: 'add',
		value: function add() {
			return this.a + this.b;
		}
	}]);

	return People;
}();

var Htmler = function (_People) {
	_inherits(Htmler, _People);

	function Htmler() {
		_classCallCheck(this, Htmler);

		return _possibleConstructorReturn(this, (Htmler.__proto__ || Object.getPrototypeOf(Htmler)).apply(this, arguments));
	}

	return Htmler;
}(People);

var xiaoming = new People(11, 22);
var xiaofang = new Htmler(22, 33);
console.log(xiaofang);
console.log(xiaoming.add());