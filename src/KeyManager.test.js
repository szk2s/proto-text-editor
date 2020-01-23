import { KeyManager } from './KeyManager';

test('instanciates', () => {
  const keyManager = new KeyManager();
  expect(keyManager).toBeInstanceOf(KeyManager);
});
