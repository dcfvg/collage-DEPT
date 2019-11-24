<template>
  <div class="article">
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
<style scoped>

h1 {
  font-family: Messapia;
  font-weight: bold;
}
.article {
  font-family: "Junicode";
  font-size: 14px;
  column-count: 2;
}

</style>
