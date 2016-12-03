/*filterLongWords()

Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
*/
function filterLongWords(words,num){
	newArray=[];
	for(i=0; i<=words.length; i++){
		if(words[i].length>num){
			newArray.push(words[i])}
		
		else {}
	console.log(newArray);
	}
}

filterLongWords(["erer", "kdjjd","o", "oskdm"],3);


var myArray=["erer", "kdjjd","o", "oskdm"];
myArray.filter(function(elem, index){return elem.length>3});