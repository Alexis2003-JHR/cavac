<template>
<div class="app">
  <Nav v-if="!['logIn'].includes($route.name)"/>

  <router-view 
  v-on:completedLogIn="completedLogIn"
  v-on:logOut="logOut"
   v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <Footer v-if="!['logIn'].includes($route.name)"/>
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
  computed: {
    is_auth: {
      get: function() {
        return this.$route.meta.requiresAuth;
      },
      set: function() { }
    }
  },
  methods: {
  completedLogIn: function(data) {
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
      alert("Credenciales correctas!\nBienvenido " + data.username);
      this.$router.push({ name: "Home" })
    },
  logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
      this.$router.push({ name: "logIn" })
		},
  }
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
