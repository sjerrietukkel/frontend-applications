<template>
  <div id="app">
      <nav>
        <ul>
          <router-link to="/about">Van der Schuur</router-link>
        </ul>
          <router-link to="/about">Lauren</router-link>
          <router-link to="/about">Daniel</router-link>
          <router-link to="/about">Benthe</router-link>
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
/*
nav {
  padding: 20px 20px 20px 0;
}
*/

nav {
  height: 100%; /* 100% Full-height */
  width: 250px;
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #293546; /* Black*/
  padding-top: 60px; /* Place content 60px from the top */
}

nav a {
  padding: 10px;
  display: block;
  text-decoration: none;
  background: #293546;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  margin-right: 15px;
}

ul {
  font-size: 18px;
}

ul .router-link-active {
  margin-left: 0;
}

.router-link-active {
  margin-left: 20%;
}
</style>
