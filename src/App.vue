<template>
  <Nav/>
  <router-view />
</template>

<script>
import Nav from "@/components/Nav-bar.vue";

export default ({
  name: "App",
  components:{
    Nav,
  },
})
</script>

<style>
*{
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
</style>
