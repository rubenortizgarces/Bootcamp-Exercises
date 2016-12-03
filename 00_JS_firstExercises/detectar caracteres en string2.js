// translate()

// Write a function translate() that will translate a text into "rövarspråket". 
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".


function trad(str){
var letra="";
var str2="";

for (i=0; i<=str.length; i++){
	letra=str.charAt(i);
		if("aeiou".indexOf(i)===-1){
		str2 =str2 + letra + "o" +letra;
	}
	else {str2=str2 +letra}
}
console.log(str2)
}
trad("prueba");