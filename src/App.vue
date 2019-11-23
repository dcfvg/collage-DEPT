<template>
  <div id="app">
    <CollageViewer></CollageViewer>
    <SelectFlat></SelectFlat>
  </div>
</template>

<script>
import SelectFlat from './components/SelectFlat.vue'
import CollageViewer from './components/CollageViewer.vue'
import state from './state.js'

// const filesaver = require('file-saver');
const _ = require('lodash');

import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import './assets/css/fonts.css'
import './assets/css/bootstrap-reboot.css'

import jsonFiltered from './assets/porto/dump-filtered.json'
// import json from './assets/porto/dump.json'

export default {
  name: 'app',
  created: function () {
    //
    // filtering JSON dump
    //
    // console.log(json);
    //
    //
    // state.data.flats = json.map((d) => {
    //   return {
    //     "id":d._id,
    //     "name":d.name,
    //     "listing_id":d.listing.listing_id,
    //     "listing":d.listing,
    //     "cuts_amount": d.cuts.length,
    //     "cuts": d.cuts.map((t,i) => {
    //
    //       const id = d.listing.listing_id+"_"+i;
    //
    //       return {
    //         "id":id,
    //         "x":t.bbox[0],
    //         "y":t.bbox[1],
    //         "w":t.bbox[2],
    //         "h":t.bbox[3]
    //       }
    //     })
    //   }
    // })
    //
    // console.log(state.data.flats)
    //
    // var blob = new Blob([JSON.stringify(state.data.flats)], {type: "text/plain;charset=utf-8"});
    // filesaver.saveAs(blob, "dump.json", true);

    state.data.flats = jsonFiltered;
    state.data.cuts = _.flatten(state.data.flats.map((d) => {return d.cuts}));
    state.flat = _.sample(state.data.flats).listing_id;
    window.state = state;

  },
  components: {
    SelectFlat, CollageViewer
  }
}
</script>

<style>
#app {
  font-family: 'Aileron', Helvetica, Arial, sans-serif;
  display: flex;
}
.drag img {
  width: 100%;
  height: 100%;
}
</style>
