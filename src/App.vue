<template>
    <p>{{ message }}</p>
</template>

<script>
  import { KeyManager } from './KeyManager';

  export default {
    data () {
      return {
        message: '',
        keyManager: new KeyManager()
      };
    },
    mounted () {
      document.addEventListener('keydown', (e) => {
        this.keyManager.handleKeyDown(e.key);
        this.message = String(this.keyManager.words);
      });
    }
  };
</script>

<style lang="scss">
    p {
        font-size: 2em;
    }
</style>
