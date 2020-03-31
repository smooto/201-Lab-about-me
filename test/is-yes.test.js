import { isYes } from '../src/is-yes.js';
const test = QUnit.test;

test('isYes function', function(assert) {
    // arrange
    const inputA = 'yes';
    const inputB = 'Yes';
    const inputC = 'yasss';
    const inputD = 'yaaas';

    // act
    const resultA = isYes(inputA);
    const resultB = isYes(inputB);
    const resultC = isYes(inputC);
    const resultD = isYes(inputD);

    // assert
    assert.equal(resultA, true);
    assert.equal(resultB, true);
    assert.equal(resultC, true);
    assert.equal(resultD, false);
});