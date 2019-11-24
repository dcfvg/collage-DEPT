<template>
  <div id="app" >

    <div class="loading" v-if="!state.ui.hasData">DEPT. (loading data …)</div>

    <div class="main" v-if="state.ui.hasData">
          <div class="header">
            <CollageViewer ></CollageViewer>
            <div class="">
              <Controls ></Controls>
              <FlatInfo ></FlatInfo>
            </div>
          </div>

          <div class="bottom">
            <CollageDiff ></CollageDiff>
            <Interview ></Interview>
          </div>
          <pre>{{ title }}</pre>
    </div>

  </div>
</template>

<script>
import Controls from './components/Controls.vue'
import CollageViewer from './components/CollageViewer.vue'
import CollageDiff from './components/CollageDiff.vue'
import FlatInfo from './components/FlatInfo.vue'
import Interview from './components/Interview.vue'

import state from './state.js'

const _ = require('lodash');
const axios = require('axios');

import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import './assets/css/fonts.css'
import './assets/css/bootstrap-reboot.css'
import './assets/css/print.css'


export default {
  name: 'app',
  data: function(){ return {state} },
  mounted () {
    axios
      .get(process.env.BASE_URL+'porto/dump-filtered.json')
      .then(response => {
        state.data.flats = response.data;
        state.data.cuts = _.flatten(state.data.flats.map((d) => {return d.cuts}));
        state.flat = _.sample(state.data.flats).listing_id;

        window.state = state;
        document.title = 'collage (ready)';
        state.ui.hasData = true;
      })
  },
  created: function () {
    //
    // filtering JSON dump
    //
    // import json from './assets/porto/dump.json'

    // console.log(json[0]);
    //
    // let filteredJSON = json.map((d) => {
    //   return {
    //     "id":d._id,
    //     "name":d.name,
    //     "listing_id":d.listing.listing_id,
    //     "listing":d.listing,
    //     "cuts_amount": d.cuts.length,
    //     "cuts": d.cuts
    //       .filter(c => c.score >= 0.85)
    //       .map((t,i) => {
    //
    //       const id = d.listing.listing_id+"_"+i;
    //
    //       return {
    //         "id":id,
    //         "x":t.bbox[0],
    //         "y":t.bbox[1],
    //         "w":t.bbox[2],
    //         "h":t.bbox[3],
    //         "class":t.class
    //       }
    //     })
    //   }
    // })
    //
    // console.log(filteredJSON[0])
    //
    // const filesaver = require('file-saver');
    // var blob = new Blob([JSON.stringify(filteredJSON)], {type: "text/plain;charset=utf-8"});
    // filesaver.saveAs(blob, "dump-filtered.json", true);

  },
  computed:{
    title: function(){
           document.title = 'collage '+state.name+' f-'+state.flat+' c-'+(state.cuts.length)+' '+(new Date().toLocaleString());
      return document.title
    }
  },
  components: {
    Controls, CollageViewer, CollageDiff, FlatInfo, Interview
  }
}
</script>

<style>


#app {
  font-family: 'Aileron', Helvetica, Arial, sans-serif;
}
.loading {
  font-family: Messapia;
  text-align: center;
  font-weight: bold;
  font-size: 20pt;
  margin-top: 25vh;
}
.header {
  display: flex;
}
.bottom {
  padding-top: 40px;
  display: flex;
}

.drag img {
  width: 100%;
  height: 100%;
}
pre {
  font-size: 9px;
  /* transform-origin: bottom   left;
  transform: rotate(90deg); */
  position: absolute;
  right: 0;
  top: 0;

}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
</style>
