import config from 'config';
import assert from 'assert';

describe('Confirm test environment', () => {
    describe('#node environment', () => {
        it('should return chat_test database if environment is test', () => {
            const db = config.get('dbConfig.database');
            assert.strictEqual(db, 'chat_test');
        });
    });
});
