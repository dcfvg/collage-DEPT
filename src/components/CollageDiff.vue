<template>
  <div id="CollageDiff">
    <div id="cuts">
      <div  v-for="(item) in sortedCuts" v-bind:key="item.id">
        <div class="cutDiff">
          <!-- <button class="no-print" v-on:click="removeCut(item.id)">X</button> -->
          <div class="covered" :style="{
            backgroundImage: `url(${flatImgUrl})`,
            backgroundPosition: '-'+item.x+'px '+'-'+item.y+'px',
            backgroundRepeat:'no-repeat',
            height: item.h+'px',
            width: item.w+'px'
          }"></div>

          <div class="cover" :style="{
            backgroundImage: `url('http://dept-collage.dcfvg.fr/porto/crops/${item.id}.jpg')`,
            backgroundRepeat:'no-repeat',
            height: item.h+'px',
            width: item.w+'px'
          }"></div>

          <div class="caption"
            :style="{ width: item.w+'px'}">
            <p><span class="index">{{ (

                state.cuts.findIndex(e => e.id == item.id )+1

              ) }}</span><br/><span>{{ item.class }}</span> <br/>{{ item.id }}</p>
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
      return state.cuts //_.sortBy(state.cuts,['w','h']);
    }
  },
  methods: {
    removeCut(id){
      if(confirm("Do you really want to delete?")){
        let cutIndex = state.cuts.findIndex((e) => {return e.id == id });
        state.cuts.splice(cutIndex, 1);
      }
    }
  }
}
</script>

<style scoped>

#CollageDiff {
  align-content: flex-start;
  transform-origin: top left;

  width: 200%;
  transform: scale(calc(1/2));
  font-size: calc(18px * 2);
  height: 200px;

  page-break-after: always;
}

#cuts {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-end;
}
.cutDiff {
   margin-right: 30px;

}
.caption {
  font-family: "Junicode Condensed";
  line-height: 29px;
  font-size: 30px;
  /* word-wrap: break-word; */
  text-align: center;
}
.caption span {
  font-weight: bold;
  word-wrap: normal;
}

.id {
  padding: 2px;
  height: 30px;
  margin-right: -80px;
}

 .cover {
  position: relative;
  margin-top: -10px;
  background-size: 100% 100%;
}
.covered {
  position: relative;
  margin-top: 20px;
  left: -20px;
}
.index {
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 100px;
  padding-top: 2px;
  margin-bottom: 15px;
  width: 1.25em;
  height: 1.25em;
  display: inline-block;
  font-family: "Junicode Condensed";
  line-height: 29px;
  font-size: 30px;
  text-align: center;
  background-color: white;

  /* position: relative;
  left: -40px;
  top: 30px; */

  z-index: 1000;
}
</style>
