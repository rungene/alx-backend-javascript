const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  const testCalculateNumber = ({a, b, expected}) => function () {
    const result = calculateNumber(a, b);
    assert.equal(result, expected);
  };
  it('Adds 1 and 3 correctly', testCalculateNumber({a: 1, b: 3, expected: 4}));
  it('Adds 1 and 3.7 correctly', testCalculateNumber({a: 1, b: 3.7, expected: 5}));
  it('Adds 1.2 and 3.7 correctly', testCalculateNumber({a: 1.2, b: 3.7, expected: 5}));
  it('Adds 1.3 and 3 correctly', testCalculateNumber({a: 1.3, b: 3, expected: 4}));
  it('Adds 1.5 and 3.7 correctly', testCalculateNumber({a: 1.5, b: 3.7, expected: 6}));
  it('Adds -1 and -3 correctly', testCalculateNumber({a: -1, b: -3, expected: -4}));
  it('Adds 2000 and 3000 correctly', testCalculateNumber({a: 2000, b: 3000, expected: 5000}));
});
