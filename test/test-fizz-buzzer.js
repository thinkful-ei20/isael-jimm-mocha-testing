'use strict';
const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizbuzzer should return ', function(){
  it('should return fizz if divisible by 3, buzz if divisible by 5, fizzbuzz if divisible by 15', function(){
    const normalCase = [
      {val: 3, expect: 'fizz'},
      {val: 5, expect: 'buzz'},
      {val: 15, expect: 'fizz-buzz'}
    ];

    normalCase.forEach(input => {
      const answer = fizzBuzzer(input.val);
      expect(answer).to.equal(input.expect);
    });
  });

  it('should return number if it is not divisble by 3,5,15', function(){

    const badCase = [
      {val: '3'},
      {val: undefined},
      {val: false},
    ];

    badCase.forEach(input => {
      expect(function(){
        fizzBuzzer(input.val);
      }).to.throw(Error);
    });
  });
});