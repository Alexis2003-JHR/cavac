<template>
  <div class="planes">
      <div class="nav-planes">
          <p>Filtro</p>
          <i class="fas fa-filter"></i>
          <div class="planes-buttons">
            <button 
            v-on:click="component = 'Exteriores'" 
            :class="{active: component === 'Exteriores' }">Habitaciones</button>

            <button v-on:click="component = 'AreasComunes'" 
            :class="{ active: component ===  'AreasComunes'}">Eventos</button>

            <button v-on:click="component = 'Interiores'" 
            :class="{ active: component ===  'Interiores'}">Adicionales</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-planes i{
    font-size: 20px;
}
</style>