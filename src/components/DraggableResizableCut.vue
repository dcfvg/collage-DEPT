<template>
    <vue-draggable-resizable class="drag"
    :x=item.x
    :y=item.y
    :w=item.w
    :h=item.h
    @dragstop="onDragStop"
    @resizestop="onResizeStop"
    >
    <span class="index no-print">{{ (crIndex) }}</span>
    <button class="no-print" v-on:click="removeCut(item.id)">✖</button>

      <img :src="'http://dept-collage.dcfvg.fr/porto/crops/'+item.id+'.jpg'">
    </vue-draggable-resizable>
</template>

<script>

import state from './../state.js'

export default {
  name: 'DraggableResizableCut',
  props: {
    item: Object,
    cropindex: Number,
    state: function(){ return {state} }
  },
  methods: {
    onResizeStop: function (x,y,w,h) {
      let cutIndex = state.cuts.findIndex(e => e.id == this.$props.item.id )
      state.cuts[cutIndex].w = w
      state.cuts[cutIndex].h = h
    },
    onDragStop: function (x,y) {
      let cutIndex = state.cuts.findIndex(e => e.id == this.$props.item.id )
      state.cuts[cutIndex].x = x
      state.cuts[cutIndex].y = y
    },
    removeCut(id){
      if(confirm("Do you really want to delete?")){
        let cutIndex = state.cuts.findIndex((e) => {return e.id == id });
        state.cuts.splice(cutIndex, 1);
      }
    }
  },
  computed: {
    crIndex() {
      return state.cuts.findIndex(e => e.id == this.$props.item.id )+1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active .index {
  display: inline-block;
}

.active button {
  display: block;
}

.index {
  display: none;
  background-color: white;
  border: 1px solid black;
  border-radius: 100px;
  width: 1.25em;
  height: 1.25em;

  font-family: "Junicode Condensed";
  line-height: 29px;
  font-size: 24px;
  word-wrap: break-word;
  text-align: center;
  position: absolute;
  top: calc(-1.25em/2);
  left: calc(-1.25em/2);
  pointer-events: none;

  /* left: 1.25em; */
}
button {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  border: 0px solid white;
  background-color: tomato;

}

</style>
