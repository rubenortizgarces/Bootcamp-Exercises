

 describe("function scoreAverage", function(){


  it("should exist", function(){
    expect( scoreAverage ).toBeDefined();
  });
  it("should be defined w/ 3 argument", function(){
       expect( scoreAverage.length).toBe(3);
   });
  it("should return a string", function(){
       expect( typeof  scoreAverage()).toBe("string");
   });
  it("should return a D", function(){
       expect( scoreAverage(10,11,13)).toBe("f");
   });




 });