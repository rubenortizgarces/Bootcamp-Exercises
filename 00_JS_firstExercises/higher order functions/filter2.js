var arr = [345,24,3345,44,54545];
var topValue =3;

arr.filter(function(elem, index) {

	console.log("---------------------------");
    console.log("index => " + index);
    console.log("elem => " + elem);
    console.log("topValue => " + topValue);
    console.log("index<topValue => " + (index<topValue) );

    return index<topValue

});