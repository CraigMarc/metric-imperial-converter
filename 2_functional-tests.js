const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

   suite('Functional tests with chai-http', function () {
    // #1
    test('10L: GET request to /api/convert', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=10L')
        .end(function (err, res) {
        
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, 'L');
          assert.approximately(res.body.returnNum, 2.64172, 0.001);
          assert.equal(res.body.returnUnit, 'gal');
          
          done();
        });
    });

/*test 2*/

  test('32g: GET request to /api/convert', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=32g')
        .end(function (err, res) {
        assert.equal(res.body, 'invalid unit')
         
          done();
        });
    });

/*test 3*/
     
test('3/7.2/4kg: GET request to /api/convert', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=3/7.2/4kg')
        .end(function (err, res) {
        assert.equal(res.body, 'invalid number')
         
          done();
        });
    });

/*test 4 */

     
test('3/7.2/4kilomegagram: GET request to /api/convert.', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=3/7.2/4kilomegagram')
        .end(function (err, res) {
        assert.equal(res.body, 'invalid number and unit')
         
          done();
        });
    });
     
/* test 5*/
     
test('kg: GET request to /api/convert', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=kg')
        .end(function (err, res) {
        
           assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit, 'kg');
          assert.approximately(res.body.returnNum, 2.20462, 0.001);
          assert.equal(res.body.returnUnit, 'lbs');
         
          done();
        });
    });




     
     
     
});
 });
   





