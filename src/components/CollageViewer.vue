<template>
  <div class="flat-background">
    <img class="flat-img" :src=flatImgUrl>

    <div id="cuts">
      <div v-for="item in state.cuts" v-bind:key="item.id">
        <vue-draggable-resizable class="drag"
        :t=item.id
        :x=item.x
        :y=item.y
        :w=item.w
        :h=item.h
        :lock-aspect-ratio="true"
        @dragging="onDrag"
        @resizing="onResize"
        >
          <img :src="'http://localhost:8080/crops/'+item.id+'.jpg'">
        </vue-draggable-resizable>
      </div>
    </div>

  </div>
</template>

<script>
import state from './../state.js'
export default {
  name: 'SelectFlat',
  data: function(){ return {state} },
  methods: {
    onResize: function (x,y,w,h,t) {

      // let newCut = state.data.cuts.find((e) => {return e.id == cutId });
      // console.log(cutId);
      console.log(x,y,w,h, t, this)

      this.x = x
      this.y = y
      this.width = w
      this.height = h
      //
      // console.log(this);
    },
    onDrag: function (x,y) {
            console.log(x,y)
      this.x = x
      this.y = y
    }
  },
  computed: {
    flatImgUrl() {
      var found = state.data.flats.find(function(element) {
        return element.listing_id == state.flat;
      })
      console.log(found);

      if (typeof found !== 'undefined') return "http://localhost:8080/flats/"+found.name;
      else return "none";
    }
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
</style>
