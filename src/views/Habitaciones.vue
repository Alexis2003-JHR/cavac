<template>
  <div class="habitaciones">
    <!--Nav
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
      -->
  <div class="tarjets-habitaciones">

    <div class="tarjet tarjet-1">
      <img src="@/assets/Habitaciones/Habitacion-1.jpg" alt="">
      <div class="info-tarjet-habitacion">
        <h3>Alcoba simple VIP</h3>
      <p><span>Precio</span><br>$180.000</p>
      <p><span>Detalles</span><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis, cupiditate 
      suscipit dolores saepe maxime, perspiciatis quo voluptate labore excepturi veniam fuga corporis 
      quidem architecto provident beatae, facere temporibus alias.</p>
      </div>
    </div>

  </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.tarjets-habitaciones{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
}
.tarjet{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 95%;
  background: #F1F1F1;
  padding: 20px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.tarjet img{
  max-width: 45%;
}
.info-tarjet-habitacion{
  width: 50%;
}
.info-tarjet-habitacion h3{
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  font-family: 'Montserrat Alternates', sans-serif;
}
.info-tarjet-habitacion p{
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 18px;
  margin: 30px 0;
}
.info-tarjet-habitacion span{
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
}
</style>