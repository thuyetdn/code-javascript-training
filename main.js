function handleInput(){
     
     var divElement =  document.querySelector('.box')
     var x = document.getElementById("fname").value;
     console.log(x.indexOf("ha noi"))
     divElement.classList.toggle('box-2')
     divElement.classList.toggle('box-3')
     if(x.indexOf("ha noi") !== -1){
          alert("oke")
          console.log(x.indexOf("ha noi"))
     }
     else{
          document.getElementById("check").innerHTML = "khong co chu ha noi"
     }
};
function handleArray(){
     var str = "HELLO WORLD";
     console.log(str.charAt(1))
     console.log(str.concat("o"))
     console.log(str.includes("HELLO"))
}
var a=6
// a++ 
// a **= 2
// console.log(a)
// if(!a){
//      alert("oke")
// }else{
//      alert("ha ha")
// }
var b = 'A' && NaN && 'C' 
var oke = {
     age : 1,
     ten:'thuyet'
}
console.log( ` toi la ${oke}`)
var fullName = 'thuyet'
console.log(fullName.slice(-3,-1 ))

//arguments
function myName(){
     console.log(arguments)
     console.log(typeof arguments)

}
myName('a','b','c')
//arguments use for of
function yourName(){
     var string = ''
     for(var param of arguments){
          console.log(typeof param)
          // string += param + '+'
          string += `${param} -`
     }
     console.log( string)

}
yourName('a','b','c')
// explain function in function
function ham1(){
     var a;
     function ham2(){
          console.log(a)
     }
     ham2();
}
ham1();
// declaration and expression function
nameHam1()
function nameHam1(){
     console.log('dmm')     
}
var nameHam2 = function(){
     console.log('dmm2')
}
nameHam2()
// 
var arr = ['thuyet','ha noi', 'oke'];
console.log(arr.includes('oke',3))
console.log(this.arr)
// this
//object
var vip = 'vipas'
var myFull ={
     name : 'thuyet',
     age : 18,
     [vip] : 'oke',
}
// console.log(myFull)
// object constructor
function User(firstName, lastName , age){
     this.firstName = firstName 
     this.lastName = lastName  
     this.age = age  
           
}
User.prototype.className = 'k62'
User.prototype.setClassName = function(className){
    this.className = className
}
User.prototype.getClassName = function(){
    return this.className
}
var author = new User('thuyet','do','21')
author.setClassName('oke')
console.log(author.className)
// console.log(typeof author.constructor)
// Object Date 
//khoi tao
var dateString = '01 Jan 1970 00:00:00 GMT'
var date = new Date('2021','11','12')
// console.log(typeof Date)
console.log( date.getTimezoneOffset())
//switch
var test = 5
switch(test){
     case 2 : 
          console.log('day la 2')
         
     case 3 : 
          console.log('day la 3')
         
     case 4 : 
          console.log('day la 4')
          break;  
     case 5 : 
          console.log('day la 5')
          break;      
}
//for loop
for(var i = 0 ; i<10 ; i++){
     // console.log(`ahihi ${i}`)
}
//for / in

var nameNe ={
     name : 'Do Ngoc Thuyet' ,
     grade : 10 ,
     class : 'k45',
} 
var stringNe = 'okela'
// for(var key in nameNe){
//      console.log(nameNe[key])
// }

// for( var key in stringNe){
//      console.log(stringNe[key])
// }

//for/of

// for( var value of nameNe){
//      console.log(value)
// }
/*
while
var i=0
while(i<10){
     console.log(i)
     i++
}
*/
//Do while
// var lanNap = 0
// var napSucceed = false
// do {
//     console.log(`lan nap ${lanNap+1}`)
//     lanNap++; 
// } while( !napSucceed && lanNap<3)
//vong lap long nhau ( nested loop)
// var arr = [
//      [1,2],
//      [3,4],
//      [5,6],
// ]
// for(var i= 0; i < arr.length ;i++ ){
//      for(var j=0 ; j<arr[i].length ;j++){
//           console.log(arr[i][j])
//      }
// }

//lam viec  voi array
//for each()

var arr = [
     {    id:1,
          name :'thuyet',
          coin : 200,
     },
     {
          id:2,
          name: 'tu',
          coin : 300,
     },
     {
          id: 3,
          name: 'thuy',
          coin : 0,
     },
     {
          id: 4,
          name: 'thu',
          coin : 0,
     }
]
// arr.forEach(function(element,index){
//      console.log(element,index)
// })

// every()
// var isFree = arr.every(function (element,index) {
//      return element.coin === 0
//   })
// console.log(isFree)

//some()
// var isFree = arr.some(function (element,index) {
//      return element.coin === 0
//   })
// console.log(isFree)
//find()

// var isFree = arr.find(function (element,index) {
//      return element.coin === 0
//   })
// console.log(isFree)
//Filter()
// var isFree = arr.filter(function (element,index) {
//      return element.coin === 0
// })
// console.log(isFree)

// Map()
//    var newArr = arr.map(function(element,index){
//    })  

// reduce()
// var i=0
//  function handleCoin(accumulator,currentValue,currentIndex,originalArr){
//      i++ 
//      console.table({
//            'luot chay : ' : i,
//            'element hien tai :' :currentValue ,
//            'vitri hien tai' :currentIndex,
//             'bien luu tru' : accumulator += currentValue.coin
//       })
//       return accumulator + currentValue.coin
//  }
// var totalCoin = arr.reduce(handleCoin,0 )
// Flat -"lam phang" mang tu depth array 
// var depthArr =[1,2,[3,4],5,6,[7,8,9]]
// var flatArr = depthArr.reduce(function(flatOut,depthItem){
//      console.log(depthItem)
//      return flatOut.concat(depthItem)
// },[])
// console.log(flatArr)

// var topics = [
//      {
//           topic:"js",
//           course : [
//                {
//                     id:1,
//                     title : "jscript"
//                },
//                {
//                     id:2,
//                     title : "jscript"
//                }
//           ]
//      },
//      {
//           topic:"node",
//           course : [
//                {
//                     id:1,
//                     title : "nodejscript"
//                },
//                {
//                     id:2,
//                     title : "okejscript"
//                }
//           ]
//      }
// ]
// var totalTopic = topics.reduce(function(courseOut,topic){
//      return courseOut.concat(topic.course) 
// },[])
// console.log(totalTopic)
// var html = totalTopic.map(function(element,index){
//      return `<div>${element.title}</div> `
// })
// console.log(html.join(''))

// Math
// console.log(Math.PI)
// console.log(Math.round(1.5))
// console.log(Math.abs(-4))
// console.log(Math.ceil(1.2))
// console.log(Math.floor(0.4))
// console.log(Math.random()*5)
// cuong hoa gunny 
// var isSucceed = Math.floor(Math.random()*100) 
// var isItem = 'bua tang cuong hoa 30%'
// var isSucceedStandard = 90
// if(isSucceed > isSucceedStandard){
//      console.log('cuong hoa thanh cong')
// }
// if(isItem = 'bua tang cuong hoa 30%'){
//      isSucceedStandard -= 30
// }
// console.log(isSucceedStandard)
//call back
var arr2 = [
     'thuyet','thu' , 'huong'
]     
// Array.prototype.map2 = function(callback){
//     var lengthArr = this.length
//     var outPut = []
//      for(var i = 0;i<lengthArr;i++){
//         outPut.push(callback(this[i],i))
//      } 
//     return outPut
// }
// function myCallback(currentArr,index){
//      return `currentArr ${index} ${currentArr}`
// }
// var html = arr2.map2(myCallback)
//      console.log(html)
//myForeach()
var arr3 = [
     'thuyet','thu' , 'huong'
]  
// Array.prototype.myForeach = function(callback){
//      for(var param in this){
//           if(this.hasOwnProperty(param)){
//           myCallback(param,this[param])
//           }
//      }
// }
// function myCallback(value,index){
//      console.log(value +' '+ index)
// }
// arr3.myForeach(myCallback)
var arr4 = [
     {    id:1,
          name :'thuyet',
          coin : 200,
     },
     {
          id:2,
          name: 'tu',
          coin : 300,
     },
     {
          id: 3,
          name: 'thuy',
          coin : 0,
     },
     {
          id: 4,
          name: 'thu',
          coin : 0,
     }
]
//myFilter()
// Array.prototype.myFilter = function(callback){
//      var resultFilter = []
//      for(var index in this){
//           if(this.hasOwnProperty(index)){
//                callback(this[index],index,this)
//                if( callback(this[index],index,this)){
//                resultFilter.push(this[index])
//                }
//           }
//      }
//      return resultFilter
// }
// function myCallback(value,index,originalArr){
//      return value.coin >100
    
// }
// var filters = arr4.myFilter(myCallback)
// console.log(filters)
// some()
var arr5 = [
     {    id:1,
          name :'thuyet',
          coin : 200,
          isFinish : false ,
     },
     {
          id:2,
          name: 'tu',
          coin : 300,
          isFinish : true ,

     },
     {
          id: 3,
          name: 'thuy',
          coin : 0,
          isFinish : false ,

     },
     {
          id: 4,
          name: 'thu',
          coin : 0,
          isFinish : false,

     }
]

// Array.prototype.mySome = function(callback){
//      for(var index in this){
//           if(this.hasOwnProperty(index)){

//                if(callback(this[index],index,this)){
//                     return true
//                     break;
//                }
//           }
//      }
//      return false
// }
// function myCallback(value,index,originalArr){
//      return value.isFinish
// } 

// var somes = arr5.mySome(myCallback)
// console.log(somes)

//myEvery()

var arr6 = [
     {    id:1,
          name :'thuyet',
          coin : 200,
          isFinish : true ,
     },
     {
          id:2,
          name: 'tu',
          coin : 300,
          isFinish : true ,

     },
     {
          id: 3,
          name: 'thuy',
          coin : 0,
          isFinish : true ,

     },
     {
          id: 4,
          name: 'thu',
          coin : 0,
          isFinish : true,

     }
]
// Array.prototype.myEvery = function(callback){
//      for(var index in this){
//           if(this.hasOwnProperty(index)){
//                if(!callback(this[index],index,this)){
//                     return false 
//                     break;
//                }
//           }
//      }
//      return true
// }
// function myCallback(value,index,originalArr){
//      return value.isFinish
// }
// var everys = arr6.myEvery(myCallback)
// console.log(everys)

// C1 dung indexOf   
var arr7 = ['a','b','c','d','a','a','c'] //aaabccd
var arr8 =[]
// for(var index in arr7){
//      if( arr8.indexOf(arr7[index]) === -1){
//      arr8.push(arr7[index])
//      }
// }
// console.log(arr8)

//C2 sort mang roi so sanh 
// arr7.sort()
// arr8.push(arr7[0])
// for(var i=1; i<arr7.length; i++){
//      if(arr7[i] !== arr7[i-1])
//      {
//           arr8.push(arr7[i])
//           console.log(arr7[i])
//      }
// }
// console.log(arr8)
 //De quy
 // count down
//  function countDown(num){
//      console.log(num)
//      num--;
//      if(num==0){
//           console.log(num)
//           return
//      }
//      countDown(num)
//  }
//  countDown(10)
// Loop de quy
// var arr10 = [
//      'thuyet','thu' , 'huong'
// ]
// function loop(start,end){
//      console.log(arr10[start])
//      start++
//      if(start=== end){
//           return
//      }
//      loop(start,end)

// }
// loop(0,arr10.length-1)

// De quy giai thua
// var outPut = 1
// function giaiThua(num){
//      if(num>0 && num<=6){
//           outPut = outPut*num
//           num--
//           giaiThua(num)
//      }
//      return outPut 
// }
// console.log(giaiThua(6))
// DOM 
// console.log(document)

//Get element
// console.log(document.getElementById('fname')) //id
// console.log(document.getElementsByClassName('oke'))
// console.log(document.getElementsByTagName('button'))
// console.log(document.querySelectorAll('button'))
// console.log(document.forms)

//Get element P2

// console.log(document.querySelectorAll('#box-10 li' ))
// var h1Element = document.querySelector('h1')
// console.log(h1Element)
// var h2Element = document.querySelector('section h2')
// console.log(h2Element)
// var h3Element = document.querySelector('div h3')
// console.log(h3Element)

//DOM attribute 

// var h1Element = document.querySelector('h1')

// console.log(h1Element)
// h1Element.id='h1-1'
// h1Element.setAttribute("class","h1-oke")

// innerText vs TextContent
// var h1Element = document.querySelector('h1')

// console.log(h1Element.innerText = 'he he')
// console.log(h1Element.textContent)

//them element vao element
// var h1Element = document.querySelector('section')
// console.log(h1Element.innerHTML='<p>he he </p>')
// console.log(h1Element.outerHTML='<p>he he </p>')

//Node property
// var h1Element = document.querySelector('section')
//   h1Element.draggable=true
//   console.log([h1Element])

//DOM style 

// var divElement =  document.querySelector('.box')
// divElement.style.width = '100px'
// divElement.style.height ='100px'
// divElement.style.backgroundColor = 'red'
// Object.assign(divElement.style,{
//      width : '200px',
//      backgroundColor :'green'
// })
// console.log(divElement.style)

//classlist property

var divElement =  document.querySelector('.box')
// divElement.classList.add('box-3')
// divElement.classList.remove('box-2')
// divElement.classList.toggle('box')
// divElement.classList.contains('box-3')


// console.log(divElement.classList.contains('box-3'))