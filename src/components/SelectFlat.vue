<template>
  <div class="commands no-print">
    <input size="60" type="number" v-model="state.flat" placeholder="add flat Id">
    <button v-on:click="addObject">add</button>
    <button v-on:click="randomObjects">random</button>
    <button >save</button>
    <button >load</button>
  </div>
</template>

<script>
import state from './../state.js'
const _ = require('lodash');

export default {
  name: 'SelectFlat',
  data: function(){ return {state} },
  methods: {
   addObject: function () {
     let cutId = prompt("What is the object id ?");
     let newCut = state.data.cuts.find((e) => {return e.id == cutId });
     console.log(newCut);
     if(_.isUndefined(newCut)) alert("Object not found! Please retry with a correct ID.");
     else state.cuts.push(newCut);
   },
   randomObjects: () => {
     state.cuts.push(_.sample(state.data.cuts));
   }
  }
}
</script>

<style scoped>
  input, h3,button {
    font-weight: normal;
    color: black;
  }
  input, button {
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    border: 1px black solid;
    background-color: black;
    color: white;
    margin-right: 10px;
    font-family: Messapia;
    font-weight: bold;
  }
  button {
    /* background-color: black;
    color: white; */
  }
  .commands {
    padding: 1vw;
    display: flex;

    align-items: baseline;
  }
</style>
