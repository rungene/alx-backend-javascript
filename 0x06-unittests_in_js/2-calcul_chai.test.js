const chai = require('chai');
const assert = chai.assert;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  const testCalculateNumber = ({type, a, b, expected}) => function () {
    const result = calculateNumber(type, a, b);
    assert.equal(result, expected);
  };
  it('Adds 1 and 3 correctly', testCalculateNumber({type: 'SUM', a: 1, b: 3, expected: 4}));
  it('Adds 1.4 and 4.5 correctly', testCalculateNumber({type: 'SUM', a: 1.4, b: 4.5, expected: 6}));
  it('SUBTRACTS 1.4 and 4.5 correctly', testCalculateNumber({type: 'SUBTRACT', a: 1.4, b: 4.5, expected: -4}));
  it('DIVIDE 1.4 and 4.5 correctly', testCalculateNumber({type: 'DIVIDE', a: 1.4, b: 4.5, expected: 0.2}));
  it('DIVIDE 1.4 and 0 correctly', testCalculateNumber({type: 'DIVIDE', a: 1.4, b: 0, expected: 'Error'}));
  it('SUBTRACT -1 and -3 correctly', testCalculateNumber({type: 'SUBTRACT', a: -1, b: -3, expected: 2}));
  it('Adds 5 and 2.2 correctly', testCalculateNumber({type: 'SUM', a: 5, b: 2.2, expected: 7}));
  it('DIVIDE 3000 and 2000 correctly', testCalculateNumber({type: 'DIVIDE', a: 3000, b: 2000, expected: 1.5}));
});
