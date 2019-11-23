<template>
  <div class="Interview no-print">
    <textarea v-model=state.interview id="story" name="story" >
    It was a dark and stormy night...
    </textarea>
  </div>
</template>

<script>
import state from './../state.js'

export default {
  name: 'InterviewForm',
  data: function(){ return {state} }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#story {
  width: 100%;
  min-height: 200px;
  font-family: "Junicode";
}
</style>
