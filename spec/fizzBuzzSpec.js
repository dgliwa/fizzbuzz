describe("FizzBuzz Analyzer", function () {
    var text;
    var words;

    beforeEach(function () {

    });

    it("returns 1 when given 1", function() {
        var expected = 1;

        expect(fizzBuzz(1)).toEqual(expected);
    });

    it("returns fizz when given number divisible by 3", function(){
      var expected = "fizz";

        expect(fizzBuzz(3)).toEqual(expected);
    });

    it("returns buzz when given number divisible by 5", function(){
      var expected = "buzz";

        expect(fizzBuzz(5)).toEqual(expected);
    });

    it("returns fizzbuzz when given number divisible by 3 and 5", function(){
      var expected = "fizzbuzz";

        expect(fizzBuzz(15)).toEqual(expected);
    });

});
