const addNums = require('./functions');

test('Adds 1 + 2', () => {
    expect(addNums(1,2)).toBe(3);
});


test('Adds -46 + 19', () => {
    expect(addNums(-46,19)).toBe(-27);
});

test('Adds -46 + 19', () => {
    expect(addNums(-46,19)).toBe(-26);
});

