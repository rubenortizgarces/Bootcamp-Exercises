// the Jasmine test code
 describe("function drinkAbout", function() {

     /**it("should exist", function(){
       expect( algo ).toBeDefined();
   });**/

    it("should exist", function(){
       expect( drinkAbout ).toBeDefined();
   });

   it("should be defined w/ one argument", function(){
       expect( drinkAbout.length).toBe(1);
   });

   it("should return a string", function(){
       var returnedValue = drinkAbout();
       expect( typeof returnedValue ).toBe("string");
   });

   it("should return 'drink toddy' ", function(){
       expect( drinkAbout (13)).toBe("drink toddy");
   });

   it("should return 'drink coke' ", function(){
       expect( drinkAbout (17)).toBe("drink coke");
   });

   it("should return 'drink beer' ", function(){
       expect( drinkAbout (18)).toBe("drink beer");
   });

   it("should return 'drink beer' ", function(){
       expect( drinkAbout (20)).toBe("drink beer");
   });

  it("should return 'drink whisky' ", function(){
       expect( drinkAbout (30)).toBe("drink whisky");
   });


 });