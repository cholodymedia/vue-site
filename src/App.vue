<template>
  <div id="app">
    <Start/>
  </div>
</template>

<script>
import Start from '@/components/Start.vue';

export default {
  name: 'app',
  components: {
    Start,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}
#app {
  font-family: 'Montserrat';
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
</style>
