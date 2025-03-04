import { sayHello } from '../src/say-hello';

describe('sayHello', () => {
    it('should return a string', () => {
        const result = sayHello('Aji');
        expect(result).toBe('Hello, Aji!');
    });
});