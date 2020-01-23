export class KeyManager {
  constructor () {
    this.words = [''];
  }

  handleKeyDown (key) {
    if (key.length === 1) {
      this.pushToLastWord(key);
      return;
    }
    this.words.push('');
  }

  pushToLastWord (key) {
    this.lastWord = this.lastWord.concat(key);
  }

  get lastWord () {
    return this.words[this.words.length - 1];
  }

  set lastWord (word) {
    this.words[this.words.length - 1] = word;
  }
}

