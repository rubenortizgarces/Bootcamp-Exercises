var myArray = [2,6,3]

function modifyArray( someArray ) {
	someArray.push(23);
	return someArray;
}

var anotherArray = modifyArray(myArray);
undefined
anotherArray
[2, 6, 3, 23]
myArray
[2, 6, 3, 23]