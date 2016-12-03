
var student = {
   name: "juanma",
   age: 40
}

// --------------------

function getStudent( myName, myAge ) {
	return {
	   name: myName,
	   age: myAge
	}	
}

var student  = getStudent("juanma", 40);

// --------------------

function Student( myName, myAge ) {
	this.name = myName;
	this.age = myAge;
}

var student  = new Student("juanma", 40);

// --------------------