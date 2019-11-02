<template>
  <div id="app">
    <Start/>
    <Projects/>
    <About/>
  </div>
</template>

<script>
import Start from '@/components/Start.vue';
import Projects from '@/components/Projects.vue';
import About from '@/components/About.vue';

export default {
  name: 'app',
  components: {
    Start,
    Projects,
    About,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}
#app {
  font-family: 'Montserrat';
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 12px;
  background: #212121;
}
::-webkit-scrollbar-thumb {
  background: #2D98B8;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #2D98B8;
}
</style>
