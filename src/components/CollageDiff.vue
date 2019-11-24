<template>
  <div id="CollageDiff">
    <div id="cuts">
      <div  v-for="item in sortedCuts" v-bind:key="item.id">
        <div class="cutDiff">
          <button class="no-print" v-on:click="removeCut(item.id)">X</button>

          <div class="off" :style="{
            backgroundImage: `url(${flatImgUrl})`,
            backgroundPosition: '-'+item.x+'px '+'-'+item.y+'px',
            backgroundRepeat:'no-repeat',
            height: item.h+'px',
            width: item.w+'px'
          }"></div>

          <div class="on" :style="{
            backgroundImage: `url('http://dept-collage.dcfvg.fr/porto/crops/${item.id}.jpg')`,
            backgroundRepeat:'no-repeat',
            height: item.h+'px',
            width: item.w+'px'
          }"></div>

          <div class="caption"
            :style="{ width: item.w+'px'}">
            <p><span>{{ item.class }}</span><br/>{{ item.id }}</p>
          </div>
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
      var found = state.data.flats.find(e => e.listing_id == state.flat)
      // console.log(state.ui.tileServer);
      // const urlprefix = state.ui.tileServer+"/flats/";

      if (!_.isUndefined(found)){
        return 'http://dept-collage.dcfvg.fr/porto/flats/'+found.name
      } else return "none";
    },
    sortedCuts(){
      return _.sortBy(state.cuts,['w','h']);
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
#CollageDiff {
  min-width: 15vw;
}
#cuts {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
.caption {
  font-family: "Junicode Condensed";
  line-height: 20px;
  font-size: 18px;
  word-wrap: break-word;
  text-align: center;
}
.caption span {
  font-weight: bold;
}

.id {
  padding: 2px;
  height: 30px;
  margin-right: -80px;

/*
  transform-origin: top left;
  transform: rotate(90deg);
  background-color: white; */
}

</style>
