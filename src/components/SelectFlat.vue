<template>
  <div class="commands">
    <div>
      <h3>flat <input  type="number" v-model="state.flat" placeholder="add flat Id"></h3>
    </div>
    <button class="btn btn-dark" v-on:click="greet">add object</button>
    <button class="btn btn-dark" >save</button>
  </div>
</template>

<script>
import state from './../state.js'
const _ = require('lodash');

export default {
  name: 'SelectFlat',
  data: function(){ return {state} },
  methods: {
   greet: function () {
     let cutId = prompt("What is the object id ?");
     let newCut = state.data.cuts.find((e) => {return e.id == cutId });
     if(_.isUndefined(newCut)) alert("Object not found! Please retry with a correct ID.");
     else state.cuts.push(newCut);
   }
  }
}
</script>

<style scoped>
  input, h3,button {
    font-weight: normal;
  }
  input, button {
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    border: 1px black solid;
  }
  button {
    /* background-color: black;
    color: white; */
  }
  .commands {
    padding: 1vw;
    align-items: baseline;
  }
</style>
