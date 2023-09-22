const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round and sum positive numbers correctly', function() {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });
  it('should round and sum positive numbers correctly, one flaot', function() {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });
  it('should round and sum positive numbers correctly, 2 floats', function() {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });
  it('should round and sum positive numbers correctly, 3 floats', function() {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
});
