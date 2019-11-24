<template>
  <div class="commands no-print">
    <div class="line">
      <input type="number" v-model="state.flat" placeholder="add flat Id">
      <input type="text" v-model="state.name" placeholder="add name">

    </div>
    <div class="line">
      <textarea placeholder="text from interview" v-model=state.interview id="story" name="story" ></textarea>
    </div>
    <div class="line">
      <button v-on:click="addObject">add object</button>
      <button v-on:click="randomObjects">random object</button>
      <button  v-on:click="saveStateJSON">export state</button>
      <input type="file" @change="onFileChange" title="load state">    </div>
  </div>
</template>

<script>
import state from './../state.js'
const _ = require('lodash');
const filesaver = require('file-saver');

export default {
  name: 'SelectFlat',
  data: function(){ return {state} },
  methods: {
   addObject: function () {
     let cutId = prompt("What is the object id ?");
     let newCut = state.data.cuts.find((e) => {return e.id == cutId });

     if(_.isUndefined(newCut)) alert("Object not found! Please retry with a correct ID.");
     else state.cuts.push(newCut);
   },
   randomObjects: () => {
     state.cuts.push(_.sample(state.data.cuts));
   },
   saveStateJSON: () => {
     let stateExport = state;
     stateExport.data.flats = [];
     stateExport.data.cuts = [];
     let blob = new Blob([JSON.stringify(stateExport)], {type: "text/plain;charset=utf-8"});
     filesaver.saveAs(blob, document.title+".json", true);
   },
   onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      var file = files[0];
      var reader = new FileReader();

      reader.onload = () => {
        let newState = JSON.parse(reader.result);
        state.name = newState.name;
        state.cuts = newState.cuts;
        state.interview = newState.interview;
        state.keepRatio = newState.keepRatio;
        state.diffImgScale = newState.diffImgScale;
        state.flat = newState.flat;
        state.cuts = newState.cuts;
      }
      reader.readAsText(file, 'UTF-8');
    }
  }
}
</script>

<style scoped>

  .commands {
    padding: 1vw;
    background-color: deepgrey;
  }
  button {
    border-radius: 20px;
  }
  input, button, textarea {
    padding: 10px 20px 10px 20px;
    border:solid 1px solid grey;

    margin-right: 10px;
    font-family: "Aileron";
    font-weight: normal;
    font-style: normal;
  }
textarea {
    width: 100%;
    min-height: 250px;
  }
  .line {
    margin-top: 10px;
    display: flex;
    align-items: baseline;
  }
</style>
