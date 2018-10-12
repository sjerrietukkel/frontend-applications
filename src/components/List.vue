<template>
  <div class="list">
    <h1>Lijst TEEEEST</h1>
        <div id='example-3'>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames[0]}} {{ checkedNames[1]}} {{ checkedNames[2]}}</span>
        </div>
  </div>    
</template>
<script>
export default {
  name: "list",
  data() {
    return {
      checkedNames: []
    };
  },
  methods: {
    handleInput: function(e) {
      console.log(this);
      console.log(e);
    }
  }
};
</script>

<style scoped>
.list {
  padding: 0px 20px 0px 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #293546;
}
</style>
