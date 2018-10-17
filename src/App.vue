<template>
  <div id="app">
      <nav>
        <ul>
          <li v-on:click="collapse">Van der Schuur</li>
        </ul>
          <router-link to="/about" class="router-child">Lauren</router-link>
          <router-link to="/daniel" class="router-child">Daniel</router-link>
          <router-link to="/benthe" class="router-child">Benthe</router-link>
        <ul>
          <router-link to="/">Gezin 2</router-link>
        </ul>
        <ul>
          <router-link to="/contact">Gezin 3</router-link>
        </ul>
        <ul>
          <router-link to="/list">Gezin 4</router-link>
        </ul>
        <ul>
          <router-link to="/sidebar">Risico opnieuw</router-link>
        </ul>
      </nav>
    <router-view/>
  </div>
</template>

<script>
import skills from "./components/Skills.vue";
import selected from "./components/About.vue";
import list from "./components/List";
export default {
  name: "app",
  components: {
    skills
  },
  methods: {
    collapse: function(event) {
      alert("Hello " + this.name + "!");
    }
  }
};
</script>

<style>
body {
  background-color: #e6e6e6;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

#app {
  width: 800px;
}

nav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #293546;
  padding-top: 60px;
}

nav a,
li {
  padding: 10px;
  display: block;
  text-decoration: none;
  background: #293546;
  color: white;
  font-weight: bold;
}

ul {
  font-size: 18px;
  padding-left: 0;
}

.router-link-exact-active {
  color: #ff5d5d;
  background-color: #35455b;
  border-left: 3px solid #ff5d5d;
}

.router-child {
  padding-left: 20%;
}
</style>
