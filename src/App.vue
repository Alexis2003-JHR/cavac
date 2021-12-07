<template>
<div class="app">
  <Nav/>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <Footer/>
</div>
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

/*Route transitions*/
.fade-enter-active,
.fade-leave-active{
  transition:opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
</style>
