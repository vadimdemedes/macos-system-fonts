import test from 'ava';
import hello from './source/index.js';

test('hello', t => {
	t.is(hello(), 'world');
});
