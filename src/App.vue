<template>
  <div id="app">
      <aside>
        <h3>Hulpverlener</h3>
        <ul>
          <li>Gezin 1</li>
        </ul>
          <router-link to="/" class="router-child">Kind 1</router-link>
          <router-link to="/list" class="router-child">Kind 2</router-link>
          <router-link to="/contact" class="router-child">Kind 3</router-link>
        <ul>
          <router-link to="/gezin2">Gezin 2</router-link>
        </ul>
        <ul>
          <router-link to="/contact">Gezin 3</router-link>
        </ul>
        <ul>
          <router-link to="/contact">Gezin 4</router-link>
        </ul>
        <ul>
          <router-link to="/introductie">Introductie</router-link>
        </ul>
        <ul>
          <router-link to="/traject">Trajectkeuze</router-link>
        </ul>
        <ul>
          <router-link to="/about">Over</router-link>
        </ul>
      </aside>
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
  font-family: "Arial", sans-serif;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

#app {
  width: 100%;
}

aside {
  display: block;
  height: 100%;
  width: 200px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #293546;
  padding-top: 20px;
}

aside a,
li {
  padding: 10px;
  display: block;
  text-decoration: none;
  background: #293546;
  color: white;
  font-weight: bold;
}

ul {
  font-size: 1.2em;
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

ul:nth-of-type(5) {
  margin-top: 22em;
}

ul:nth-of-type(5),
ul:nth-of-type(6),
ul:nth-of-type(7) {
  font-size: 1em;
  font-weight: 400;
}

h3 {
  margin-top: 0;
  margin-bottom: 1em;
  color: white;
  font-size: 1.4em;
  text-align: center;
}
</style>
