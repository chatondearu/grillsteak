<template>
  <div v-el:grill class="grillade grill">
    <panel v-for="panel in panels" 
       :class="['chipo', 'chipo-width-' + panel.size.width, 'chipo-height-' + panel.size.height, 'chipo-x-' + panel.pos.x]">
      <header slot="header">
        <h1>
          <i class="mdi mdi-drag js-grillsteak-drag"></i>
          {{ panel.title }}
        </h1>
      </header>
      <div slot="content">
          <i class="mdi mdi-resize-bottom-right js-grillsteak-resize"></i>
      </div>
    </panel>
  </div>
</template>

<script>
import GrillSteak from '../module/grillsteak'

import Panel from './Panel'

export default {
  ready () {
    this.steack = GrillSteak(this.$els.grill, {})
  },
  data () {
    return {
      steack: null,
      panels: [
        {
          id: '001',
          title: 'Chipolata',
          size: {
            width: 3,
            height: 3
          },
          pos: {
            x: 0,
            y: 0
          }
        },
        {
          id: '002',
          title: 'Steak',
          size: {
            width: 3,
            height: 6
          },
          pos: {
            x: 3,
            y: 0
          }
        },
        {
          id: '003',
          title: 'Mergez',
          size: {
            width: 3,
            height: 3
          },
          pos: {
            x: 6,
            y: 0
          }
        },
        {
          id: '004',
          title: 'Lobster',
          size: {
            width: 3,
            height: 6
          },
          pos: {
            x: 9,
            y: 0
          }
        }
      ]
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .grillade {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 500px;

    background-color: #eeeeee;
    border-radius: 5px;

    .chipo {
      padding: 15px;
    }
  }
</style>
