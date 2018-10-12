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
            <span>Checked names: {{ checkedNames }}</span>
        </div>
  </div>
</template>
<script>
export default {
    name: 'list',
    new Vue({
        el: '#example-3',
        data: {
            checkedNames: []
        }
    })
}
</script>
