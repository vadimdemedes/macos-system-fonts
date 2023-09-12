import test from 'ava';
import macosSystemFonts from './source/index.js';

test('list macOS system fonts', t => {
	t.true(macosSystemFonts.length > 0);
	t.true(macosSystemFonts.every(font => typeof font === 'string'));
});
