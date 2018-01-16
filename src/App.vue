<template>
  <div id="app">
    <h1>Grill Steak</h1>
    <grillade></grillade>
  </div>
</template>

<script>
import Grillade from './components/Grillade'

export default {
  components: {
    Grillade
  }
}
</script>

<style lang="scss">
$mdi-font-path: "~mdi/fonts" !default;
@import '~mdi/scss/materialdesignicons.scss';
@import 'assets/style/themes.scss';
@import 'module/grillsteak.scss';

#app {
  h1 {
    font-family: 'Lobster', cursive;
    font-size: 3rem;
    text-align: center;

    margin: 15px auto;
  }

  margin: 0 20px;
}
</style>
