<template>
  <div class="infos">

    <h1>DEPT.</h1>
    <!-- <H2>IN HERE</H2> -->
    <!-- <div class="title">
      <P>UPTEC Baixa, Porto (PT)</P>
      <p>02.12–08.12.2019</P>
    </div> -->
      <h3>Flat {{ f.listing_id }}</h3>

      <p>
        {{ f.listing.bathrooms }} bathroom(s),
        {{ f.listing.bedrooms }} bedroom(s),
        {{ f.listing.beds }} bed(s),
        {{ f.listing.final_price }} €</p>

      <p>
      <span v-for="(item, index) in f.listing.entities" v-bind:key='index'>
        {{ item }},
      </span>
    </p>
  </div>
</template>

<script>
import state from './../state.js'
export default {
  name: 'FlatInfo',
  data: function(){ return {state} },
  computed: {
    f(){
      return state.data.flats.find(function(element) {
        return element.listing_id == state.flat;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-family: "Messapia";
  font-weight: bold;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.infos {
  padding: 40px;
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
