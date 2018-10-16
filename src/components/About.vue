<template>
  <div class="about">
    <h1>Risico Percentage</h1>
    <h2>3.74%</h2>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
    </div>
</template>

<script>
export default {
  data: {
    selected: ""
  }
};
</script>


<style>
.dot {
  height: 200px;
  width: 200px;
  background-color: none;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid;
}

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  border: solid 1px black;
}
</style>
