// IMPORT MODULES under test here:
// import example from '../example.js';

const test = QUnit.test;

import {grams2Oz} from '../app.js';

test('test grams2cups conversion 100g to 3.5oz', (expect) => {
    //Arrange
    // Set up your arguments and expectation
    const grams =  100;
    const expected = 3.5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = grams2Oz(grams);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
