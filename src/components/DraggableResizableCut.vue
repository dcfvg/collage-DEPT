<template>
    <vue-draggable-resizable class="drag"
    :x=item.x
    :y=item.y
    :w=item.w
    :h=item.h
    @dragstop="onDragStop"
    @resizestop="onResizeStop"
    >
      <img :src="'http://localhost:8080/crops/'+item.id+'.jpg'">
    </vue-draggable-resizable>
</template>

<script>

import state from './../state.js'

export default {
  name: 'DraggableResizableCut',
  props: {
    item: Object,
    state: function(){ return {state} }
  },
  methods: {
    onResizeStop: function (x,y,w,h) {
      let cutIndex = state.cuts.findIndex((e) => {return e.id == this.$props.item.id });
      state.cuts[cutIndex].w = w
      state.cuts[cutIndex].h = h
    },
    onDragStop: function (x,y) {
      let cutIndex = state.cuts.findIndex((e) => {return e.id == this.$props.item.id });
      state.cuts[cutIndex].x = x
      state.cuts[cutIndex].y = y
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
