// var user = new User("juanma", "juanmaguitar", "lopasamospipa")
// user = {
//     name: "juanma",
//     username: "juanmaguitar",
//     password: "l0p4s4m0sp1p4"
// }
// user.name // "juanma"
// user.username // "juanmaguitar"
// user.password // "l0p4s4m0sp1p4"
// user.decryptPassword() // "lopasamospipa"

function User ( name, username, password) {
	this.name = name;
	this.username = username;
	this.password = User.encryptPassword(password);
}

// ENCRIPTADO GUARDADO EN EL OBJETO
User.encryptPassword = function( password ) {
	var myEncryptedPassword = password.toUpperCase().split("");
	return myEncryptedPassword.map( function(elem) {
		if (elem === "A") return "4";
		if (elem === "E") return "3";
		if (elem === "I") return "1";
		if (elem === "O") return "0";
		if (elem === "U") return "8";
		return elem;
	}).join("");
}

// DESENCRIPTADO GUARDADO EN EL PROTOTIPO

User.prototype.decryptPassword = function() {
	var myEncryptedPassword = this.password.split("");
	return myEncryptedPassword.map( function(elem) {
		if (elem === "4") return "A";
		if (elem === "3") return "E";
		if (elem === "1") return "I";
		if (elem === "0") return "O";
		if (elem === "8") return "U";
		return elem;
	}).join("");
	
}

var me = new User("JuanMa", "juanmaguitar", "lopasamosgenial")
