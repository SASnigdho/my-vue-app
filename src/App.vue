<template>
  <div>
    <router-link to="/">Home</router-link>
    <br>
    <router-link to="about-us">About Us</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
