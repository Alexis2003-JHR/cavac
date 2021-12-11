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

        <div class="nosotros-tarjet nosotros-container-title">
          <h2>Raudal del Jirijirimo</h2>
        </div>
        <div class="nosotros-tarjet nosotros-container-info">
          <p>Uno de los lugares más exuberantes de Colombia, con sus cascadas y caídas de agua, es, 
          sin duda un templo natural y espiritual del planeta.</p>
          <img src="../assets/Culture/TheBoys.png" alt="">
        </div>

        <div class="nosotros-tarjet nosotros-container-title">
          <h2>Cultura</h2>
        </div>

        <div class="nosotros-tarjet nosotros-container-info">
          <img src="../assets/Culture/TheBoy.png" alt="">
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
.nosotros-tarjet{
  height: 100vh;
  width: 100%;
}
.nosotros-info h2{
  font-size: 24px;
}
.nosotros-tarjet h2{
  font-family: 'Montserrat Alternates', sans-serif;
  color: #401201;
  font-size: 45px;
}
.nosotros-tarjet img{
  max-width: 500px;
}
.nosotros-tarjet img, p{
  width: 45%;
}
.nosotros-container-title{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d9c68b83;
}
.nosotros-container-info{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>