<template>
  <div id="CollageDiff">
    <div id="cuts">
      <div  v-for="item in sortedCuts" v-bind:key="item.id">
        <div class="cutDiff">
        <button class="no-print" v-on:click="removeCut(item.id)">X</button>
        <div class="off"
          :style="{
            backgroundImage: 'url(' + flatImgUrl + ')',
            backgroundPosition: '-'+item.x+'px '+'-'+item.y+'px',
            backgroundRepeat:'no-repeat',
            height: item.h+'px',
            width: item.w+'px'
            }">

        </div>
        <img class="on"
        :style="{
          height: item.h+'px',
          width: item.w+'px'
          }"
        :src="'http://localhost:8080/crops/'+item.id+'.jpg'"
        >
        <p class="id">{{ item.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import state from './../state.js'
const _ = require('lodash');

export default {
  name: 'CollageDiff',
  data: function(){ return {state} },
  computed: {
    flatImgUrl() {
      var found = state.data.flats.find(function(element) {
        return element.listing_id == state.flat;
      })
      if (typeof found !== 'undefined') return "http://localhost:8080/flats/"+found.name;
      else return "none";
    },
    sortedCuts(){
      return _.sortBy(state.cuts,'w');
    }
  },
  methods: {
    removeCut(id){
      let cutIndex = state.cuts.findIndex((e) => {return e.id == id });
      state.cuts.splice(cutIndex, 1);
    }
  }
}
</script>

<style scoped>
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
#cuts {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  /* align-content: flex-start;
  transform-origin: top left;
  width: 200%;
  transform: scale(.49); */
}
.cutDiff {
  /* display: flex; */
  margin: 10px 10px;
    /* display: inline; */

   max-width: 50vw;
  /* max-width: 33vw;
  overflow: visible; */
}
.id {
  padding: 2px;
  height: 30px;
  margin-right: -80px;

  font-family: "Junicode Condensed";
  font-size: 20px;
/*
  transform-origin: top left;
  transform: rotate(90deg);
  background-color: white; */
}

</style>
