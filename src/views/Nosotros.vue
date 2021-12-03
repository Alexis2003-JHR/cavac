<template>
  <div class="Nosotros-main">
    <h1>CAVAC Hotel</h1>
    <div class="galleries-nosotros">

      <div class="selection-galleries">
        <component v-bind:is="component"></component>
        <div class="buttons-select">
          <button 
          v-on:click="component = 'Exteriores'" 
          :class="{active: component === 'Exteriores' }">Exteriores</button>

          <button v-on:click="component = 'AreasComunes'" 
          :class="{ active: component ===  'AreasComunes'}">Areas comunes</button>

          <button v-on:click="component = 'Interiores'" 
          :class="{ active: component ===  'Interiores'}">Interiores</button>
        </div>
      </div>
    </div>

    <div class="nosotros-info">
      <div class="nosotros-tarjet info-raudal">
        <h2>RAUDAL DEL JIRIJIRIMO</h2>
        <p>Uno de los lugares más exuberantes de Colombia, con sus cascadas y caídas de agua, es, 
          sin duda un templo natural y espiritual del planeta.</p>
        <img src="@/assets/Galleries/Landscapes/3.Landscape.jpg" alt="">
      </div>

      <div class="nosotros-tarjet info-cultura">
        <h2>CULTURA</h2>
        <img src="@/assets/Culture/TheBoy-2.jpg" alt="">
        <p>El Raudal del Jirijirimo del río Apaporis es considerado la Cama de la Anaconda por las 
          tribus milenarias de la Amazonía.</p>
        
      </div>
    </div>
      
  </div>
</template>

<script>
import Exteriores from "../components/Nosotros-galleries/Exteriores.vue";
import AreasComunes from "../components/Nosotros-galleries/AreasComunes.vue";
import Interiores from "../components/Nosotros-galleries/Interiores.vue";

export default {
  components:{
    Exteriores,
    AreasComunes,
    Interiores
  },
  data(){
    return{
      component: 'Exteriores'
    }
  }
}
</script>

<style>
.Nosotros-main{
  text-align: center;
}
.Nosotros-main h1{
  font-weight: 400;
  color: #401201;
  margin: 15px 0;
}
.buttons-select{
  display: flex;
  justify-content: space-around;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 15px 0;
}
.buttons-select button{
  background: none;
  font-size: 25px;
  border: 2px solid #401201;
  padding: 10px;
  color: #401201;
}
.buttons-select button:hover{
  cursor: pointer;
}
.selection-galleries .active{
  transition: .5s;
  font-weight: 300;
  background: #401201;
  color: #D9C58B;
}

/*Informative section*/
.nosotros-info{
  font-size: 24px;
  margin: 30px 0;
}
.nosotros-info h2{
  font-size: 24px;
}

.nosotros-tarjet{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
}
.nosotros-tarjet h2{
  padding: 15px 0;
  width: 90%;
}
.nosotros-tarjet img, p{
  width: 45%;
}

.info-raudal{
  background: #d9c68ba6;
}
.info-cultura{
  background: #D9CAAD;
}
</style>