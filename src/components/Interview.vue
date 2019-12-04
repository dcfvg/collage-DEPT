<template>
  <div class="article">
    <h2>{{state.name}}</h2>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import state from './../state.js'
const marked = require('marked');
export default {
  name: 'Interview',
  data: function(){ return {state} },
  computed: {
    f(){
      return state.data.flats.find(function(element) {
        return element.listing_id == state.flat;
      })
    },
    compiledMarkdown: function () {
      return marked(state.interview, {breaks: true })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

h2 {
  padding-bottom: 2em;
}
.article h1 {
  font-family: Messapia;
  font-weight: bold;
  font-size: 16px;
}
.article {
  font-family: "Junicode";
  text-align: justify;
  font-size: 16px;
  /* column-width: 50vw;
   */
  margin: 1vw;
  padding-left: 45vw;
}

</style>
