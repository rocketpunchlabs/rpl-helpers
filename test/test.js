'use strict';

var expect = require('chai').expect;
var helpers = require('../index');

describe('#helpers.validateEmail', function() {
  it('should return true if valid email', function() {
    var result = helpers.validateEmail('jma921@gmail.com');
    expect(result).to.be.true;
  });
  it('should return false if invalid email', function() {
    var result = helpers.validateEmail('jma921ugisg');
    expect(result).to.be.false;
  });
});

describe('#helpers.validatePhone', function() {
  it('should return true if valid phone', function() {
    var result = helpers.validatePhone('1232536372');
    expect(result).to.be.true;
  });
  it('should handle dashes', function() {
    var result = helpers.validatePhone('123-253-6372');
    expect(result).to.be.true;
  });
  it('should handle parens', function() {
    var result = helpers.validatePhone('(123)253-6372');
    expect(result).to.be.true;
  });
  it('should handle spaces', function() {
    var result = helpers.validatePhone('123 253 6372');
    expect(result).to.be.true;
  });
  it('should not handle first digit for international', function() {
    var result = helpers.validatePhone('+1 123 253 6372');
    expect(result).to.be.false;
  });
  it('should return true if valid phone', function() {
    var result = helpers.validatePhone('1232536372');
    expect(result).to.be.true;
  });
  it('should return false if invalid phone', function() {
    var result = helpers.validatePhone('guy278');
    expect(result).to.be.false;
  });
});

describe('#helpers.shortenText', function() {
  it('should return a shortened text of 8 words', function() {
    var result = helpers.shortenText(
      'Bacon ipsum dolor amet turkey boudin shoulder biltong, ground round strip steak tail short loin spare ribs pork loin frankfurter. Tenderloin t-bone bacon pig drumstick beef. Meatball rump short loin pork loin picanha drumstick capicola shoulder chicken alcatra ham ground round landjaeger short ribs. Venison bresaola tongue chuck ham pancetta prosciutto swine kielbasa cupim brisket hamburger sausage. Tenderloin ball tip brisket meatball, jowl shankle strip steak tongue picanha turkey.',
      8
    );
    expect(result.split(' ').length).to.equal(8);
  });
});
