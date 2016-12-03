function first(list, number){
	var newArray=[];
	var currentElement="";
	for(i=0; i<number; i++){
		currentElement=list[i];
			newArray.push(currentElement)}
	return newArray;
		

}
function first (aList, n){
	if(n==undefined) {return aList[0]}
	function isFirst (elem, index){
		return index  < n;
	}

	return aList.filter(isFirst)
}

first([1,2,3,4,5],3);

function isFirst(aList, index){
	return index<n
}
aList.filter(isFirst([1,2,3,4,5], 3))


var arr=[1,2,3,4,5];
var topValue=3;

arr.filter(function(elem, index) {
	console.log(index);
	console.log(elem);
	return index<topValue

});








