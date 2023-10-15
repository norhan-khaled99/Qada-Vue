<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <Main_Header/>
  <MainFooter/>
</template>
<script>
import Main_Header from './components/Main_Header.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    Main_Header,
    MainFooter
  }
}
</script>

<style>
*{
  direction: rtl;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} 

</style>