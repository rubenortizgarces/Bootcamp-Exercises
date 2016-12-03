 function fizzBuzz2() {
 	var list=[];
 	list.length = 100;
 	list.fill(0);
 	list2=list.map(function (elem,index){return elem=index+1;})

	// pasamos la array a strings
	list3=list2.map(function(elem,index){return elem.toString()})
	//controlamos la asignacion de fizz o buzz con los elementos en string
	list4=list3.map(function(elem,index){
		if(elem.charAt(1)==3){return "fizz"}
		// else{parseInt(elem)}
	if (elem % 3===0 && elem % 5===0){return "fizzbuzz"}
		if (elem % 3===0 && elem % 5>=0){return "fizz"}
			if (elem % 5===0 && elem % 3>=0){return "buzz"}
				else return elem;

		})
	//convertimos los numeros a number en el else
	list5=list4.map(function(elem,index){
		if (elem=="fizzbuzz"){return "fizzbuzz"}
			if (elem=="fizz"){return "fizz"}
				if (elem=="buzz"){return "buzz"}
					else {return index+1}
				})

	return list5
	// p
	
}





FizzBuzz2();