import { describe, it, expect } from 'vitest';
import capitalize from 'utils/capitalize';

describe('Test helper function', () => {
	it('test capitalize', () => {
		expect(capitalize('test')).toBe('Test');
		expect(capitalize('TEST')).toBe('TEST');
		expect(capitalize('Test')).toBe('Test');
		expect(capitalize('tEST')).toBe('TEST');
		expect(capitalize('1234')).toBe('1234');
		expect(capitalize('!qwe')).toBe('!qwe');
		expect(capitalize(' est')).toBe(' est');
	});
});
