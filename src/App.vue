<template>
    <p>{{ message }}</p>
</template>

<script>
  import { KeyManager } from './KeyManager';
  import { parse } from './parse';
  export default {
    data () {
      return {
        words: [''],
        keyManager: new KeyManager()
      };
    },
    computed: {
      message () {
        return this.words.join(' ');
      },
      parsed () {
        return parse(this.words);
      }
    },
    mounted () {
      document.addEventListener('keydown', (e) => {
        this.keyManager.handleKeyDown(e.key);
        this.words = [...this.keyManager.words];
      });
    }
  };
</script>

<style lang="scss">
    p {
        font-size: 2em;
    }
</style>
