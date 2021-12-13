import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Inicio.vue";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import gql from "graphql-tag"

const routes = [
  {
    path: "/inicio",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/habitaciones',
    name: 'Habitaciones',
    component: () => import('../views/Habitaciones.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/Perfil.vue')
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: () => import('../views/Reservas.vue'),
    meta: { requiresAuth: true }

  },
  {
    path: '/login',
    name: 'logIn',
    component: () => import('../views/LogIn.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/form-reserva',
    name: 'form-Reserva',
    component: () => import('../views/Form-reserva.vue'),
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: 'https://api-gateway-mtic.herokuapp.com' }),
  cache: new InMemoryCache()
})

async function isAuth() {
  if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
      return false;
  }

  try {
      var result = await apolloClient.mutate({
          mutation: gql `
              mutation ($refresh: String!) {
                  refreshToken(refresh: $refresh) {
                      access
                  }
              }
          `,
          variables: {
              refresh: localStorage.getItem("token_refresh"),
          },
      })

      localStorage.setItem("token_access", result.data.refreshToken.access);
      return true;
  } catch {
      localStorage.clear();
      alert("Su sesión expiró, por favor vuelva a iniciar sesión");
      return false;
  }
}

router.beforeEach(async(to, from) => {
  var is_auth = await isAuth();

  if (is_auth == to.meta.requiresAuth) return true
  if (is_auth) return { name: "Home" };
  return { name: "logIn" };
})
export default router;
