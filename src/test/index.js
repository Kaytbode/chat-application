import assert from 'assert';

describe('Basic array test', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            const idx = [1, 2, 3].indexOf(4);
            assert.strictEqual(idx, -1);
        });
    });
});
