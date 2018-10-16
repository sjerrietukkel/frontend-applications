<template>
  <div class="contact">
    <h1>TEEEEST</h1>
    <select v-model="country">
      <option value="NL">Nederland</option>
      <option value="DL">Duitsland</option>
      <option value="ENG">Engeland</option>
    </select>
    <div class='result' >
      {{ country }}
    </div>
  </div>
</template>

<script>
export default {
  el: "#app",
  data: {
    country: null
  }
};
</script>

<style>
.result {
  margin: 10px;
  color: black;
}
</style>
