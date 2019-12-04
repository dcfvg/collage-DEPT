<template>
  <div class="infos">
      <h3>{{state.name}}</h3>
      <!-- <h3>{{state.name}}<span v-if="state.name"> • </span> {{ f.listing.property }}, {{ f.listing.room_type }}</h3>
      <p class="metadata">
        {{ f.listing.bathrooms }} bathroom(s) •
        {{ f.listing.bedrooms }} bedroom(s) •
        {{ f.listing.beds }} bed(s) •
        {{ f.listing.final_price }} €
      </p> -->

      <!-- <div class="info-header">

        <h1>DEPT.</h1>
        <H2>IN HERE</H2>
        <P>UPTEC Baixa, Porto (PT), 02.12–08.12.2019</P>

      </div> -->
  </div>
</template>

<script>
import state from './../state.js'

export default {
  name: 'FlatInfo',
  data: function(){ return {state} },
  computed: {
    f(){
      let flat = state.data.flats.find(function(element) {
        return element.listing_id == state.flat;
      })
      console.log(flat);
      return flat
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-family: "Messapia";
  font-weight: bold;
  margin-right: 2em;
}
.info-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.infos {
  padding: 40px;
  font-family: "Junicode Condensed";
}

.entities ul {
  column-count: 4;
}
.entities ul li {
  margin: 0;
  line-height: 16px;
}
.entities p {
  padding-right: 50px;
}

h3 {
  font-family: "Junicode Condensed";
  font-size: 40px;
}
.infos p {
  font-family: "Junicode Condensed";
  font-size: 20px;
}
.article {
  font-family: "Junicode";
    font-size: 14px;
}



</style>
