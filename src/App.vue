<template>
  <div class="wrapper relative w-screen h-screen">
    <Loader />
    <Scene />
    <Main></Main>
  </div>
</template>

<script>

import Loader from './components/Loader.vue'
import Scene from './components/Scene.vue'
import Main from './components/Main.vue'


export default {
  name: 'App',
  components: {
    Loader,
    Scene,
    Main,
  },
  setup(){
    const sketch = import ('./scene/sketch')
    function _init(){
      return sketch
    }

    _init()
  }
}
</script>

<style>
  @font-face {
    font-family: 'Distant Galaxy';
    src: url('./assets/fonts/SfDistantGalaxyAltoutlineItalic-ZJDZ.ttf');
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
