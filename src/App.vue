<template>
  <Nav/>
  <router-view />
  <Footer/>
</template>

<script>
import Nav from "@/components/Nav-bar.vue";
import Footer from "@/components/Footer.vue";

export default ({
  name: "App",
  components:{
    Nav,
    Footer
  },
})
</script>

<style>
*{
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
</style>
