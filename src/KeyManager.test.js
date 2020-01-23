import { KeyManager } from './KeyManager';

test('instanciates', () => {
  const keyManager = new KeyManager();
  expect(keyManager).toBeInstanceOf(KeyManager);
  expect(keyManager).toHaveProperty('words');
  expect(keyManager.words).toHaveLength(1);
  expect(keyManager.words[0]).toBe('');
});

test('handle single keyDown', () => {
  const keyManager = new KeyManager();
  keyManager.handleKeyDown('a');
  expect(keyManager.words).toEqual(['a']);
})

test('handle two letter', () => {
  const keyManager = new KeyManager();
  keyManager.handleKeyDown('a');
  keyManager.handleKeyDown('b');
  expect(keyManager.words).toEqual(['ab']);
})

test('handle two letter with space', () => {
  const keyManager = new KeyManager();
  keyManager.handleKeyDown('a');
  keyManager.handleKeyDown('space');
  keyManager.handleKeyDown('b');
  expect(keyManager.words).toEqual(['a', 'b']);
})
