var myObject = { a: 2, b: 3 }
undefined
var myAnotherObject = myObject
undefined
function nullify( o ) {
  for (var prop in o) {
    delete o[prop]
  }
}
undefined
var a = { a: 3, b: 5}
undefined
delete a.a
true
a
Object {b: 5}b: 5__proto__: Object
var myArray = [2,4,5,2]
undefined
myArray
[2, 4, 5, 2]
delete myArray[2]
true
myArray
[2, 4, undefined × 1, 2]
nullify(myArray)
undefined
myArray
[undefined × 4]