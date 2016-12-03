 function User ( name ) {
	this.name = name;
	this.nameLower = User.lowerify(name);
	this.nameUpper = this.upperifyName()
}

User.lowerify = function( text ) {
	return text.toLowerCase()
}

User.prototype.upperifyName = function() {
	return this.name.toUpperCase()
}

> var me = new User("JuanMa")

> me
User {name: "JuanMa", nameLower: "juanma", nameUpper: "JUANMA"}