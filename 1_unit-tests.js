const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test('correctly read a whole number input', function(done) {
    var input = '10kg'
    assert.equal(convertHandler.getNum(input), 10);
    done();
  });

   test('correctly read a decimal number input', function(done) {
    var input = '1.8kg'
    assert.equal(convertHandler.getNum(input), 1.8);
    done();
  });

  test('correctly read a fractional input', function(done) {
    var input = '1/2kg'
    assert.equal(convertHandler.getNum(input), 0.5);
    done();
  }); 

  test('correctly read a fractional input with a decimal', function(done) {
    var input = '3.2/2kg'
    assert.equal(convertHandler.getNum(input), 1.6);
    done();
  }); 

  test('correctly return an error on a double-fraction (i.e. 3/2/3).', function(done) {
    var input = '3/2/2kg'
    assert.equal(convertHandler.getNum(input), 'invalid number');
    done();
  }); 

  test(' correctly default to a numerical input of 1', function(done) {
    var input = 'kg'
    assert.equal(convertHandler.getNum(input), 1);
    done();
  }); 

  test('correctly read each valid input unit', function(done) {
    var input = ['mi', 'km', 'gal', 'l', 'lbs', 'kg', 'MI', 'KM', 'GAL', 'L', 'LBS', 'KG'];
    var answer = ['mi', 'km', 'gal', 'L', 'lbs', 'kg', 'mi', 'km', 'gal', 'L', 'lbs', 'kg'];
     for (let i = 0; i < input.length; i++){
    assert.equal(convertHandler.getUnit(input[i]), answer[i]);
    
  }
    done();
  }); 


  test(' correctly return an error for an invalid input unit.', function(done) {
    var input = 'k'
    assert.equal(convertHandler.getUnit(input), 'invalid unit');
    done();
  });  

   test('correct return unit for each valid input unit.', function(done) {
    var input = ['mi', 'km', 'gal', 'L', 'lbs', 'kg'];
    var answer = ['km', 'mi', 'L', 'gal', 'kg', 'lbs'];
    for (let i = 0; i < input.length; i++){
    assert.equal(convertHandler.getReturnUnit(input[i]), answer[i]);
   
  }
      done();
  }); 

 test('return the spelled-out string unit for each valid input unit', function(done) {
    var input = ['mi', 'km', 'gal', 'L', 'lbs', 'kg'];
    var answer = ['miles', 'kilometers', 'gallons', 'liters', 'pounds', 'kilograms'];
    for (let i = 0; i < input.length; i++){
    assert.equal(convertHandler.spellOutUnit(input[i]), answer[i]);
   
  }
      done();
  }); 

  
test('correctly convert gal to L', function() {
    assert.approximately(convertHandler.convert(1, "gal"), 3.78541, 0.001);
  });
  
 test(' correctly convert L to gal', function() {
    assert.approximately(convertHandler.convert(1, "L"), 0.26417, 0.001);
  });   

  test('correctly convert mi to km', function() {
    assert.approximately(convertHandler.convert(10, "mi"), 16.0934, 0.001);
  });   

  test('correctly convert km to mi', function() {
    assert.approximately(convertHandler.convert(10, "km"), 6.21373, 0.001);
  });   

  test('correctly convert lbs to kg', function() {
    assert.approximately(convertHandler.convert(10, "lbs"), 4.53592, 0.001);
  });    

 test('correctly convert kg to lbs', function() {
    assert.approximately(convertHandler.convert(10, "kg"), 22.04624, 0.001);
  });     




  




  
});
