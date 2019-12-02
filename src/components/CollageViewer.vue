<template>
  <div class="collage-viewer">
    <img class="flat-img" :src=flatImgUrl>
    <div id="cuts">
      <div v-for="item in state.cuts" v-bind:key="item.id">
        <DraggableResizableCut v-bind:item=item class="draggable"></DraggableResizableCut>
      </div>
    </div>
  </div>
</template>

<script>
import state from './../state.js'
import DraggableResizableCut from './DraggableResizableCut.vue'
export default {
  name: 'CollageViewer',
  data: function(){ return {state} },
  computed: {
    flatImgUrl() {
      var found = state.data.flats.find(e => e.listing_id == state.flat)
      if (typeof found !== 'undefined') return "http://dept-collage.dcfvg.fr/porto/flats/"+found.name;
      else return "none";
    }
  },
  components: {
    DraggableResizableCut
  }
}
</script>

<style scoped>
.flat-img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

}
.collage-viewer {
  /* min-width: 25vw; */
  /* min-width: 1000px; */
}
.vdr {
  border:none;
}

</style>
