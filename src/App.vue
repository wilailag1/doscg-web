<template>
  <div id="app">
    <TopBar />
    <div id="nav">
      <router-link to="/doscg">DOSCG</router-link> |
      <router-link to="/doscg/findabc">FindAbc</router-link> |
      <router-link to="/doscg/findxyz">FindXyz</router-link> |
      <router-link to="/doscg/googlemap">GoogleMap</router-link> |
      <router-link to="/doscg/linebot">LineBot</router-link>
    </div>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from "./components/Topbar.vue";
export default {
  components: {
    TopBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
