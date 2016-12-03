function scoreAverage(num1, num2, num3) {
	//console.log(num1 + num2 + num3);
	var average =(num1 + num2 + num3)/3;
	//console.log(average);
	var result = "";
	if (average<60) {
		result = "f";

	}

	else if (average>=60 && average<70){
		result = "D";
	}
	else if (average>=70 && average<80) result = "C"
		else if (average>=80 && average<90) result = "B"
			else if (average>=90 && average<100) result = "A"

				return result;
		}	
		