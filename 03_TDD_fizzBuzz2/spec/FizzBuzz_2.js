// the Jasmine test code


 describe("function fizzBuzz2", function(){


  it("should exist", function(){
    expect( fizzBuzz2() ).toBeDefined();
  });

  it("should return an object-array", function(){
       expect( typeof  fizzBuzz2()).toBe("object");
   });
  it("should return buzz in pos.5", function(){
       var returnedValue = fizzBuzz2();
       expect( returnedValue[4] ).toBe("buzz");
   });
  it("should return fizz in pos.13", function(){
       var returnedValue = fizzBuzz2();
       expect( returnedValue[12] ).toBe("fizz");
   });
  it("should return fizz in pos.23", function(){
       var returnedValue = fizzBuzz2();
       expect( returnedValue[22] ).toBe("fizz");
   });
    it("should return fizzbuzz in pos.30", function(){
       var returnedValue = fizzBuzz2();
       expect( returnedValue[29] ).toBe("fizzbuzz");
   });
  
 





 });