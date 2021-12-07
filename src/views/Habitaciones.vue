<template>
  <div class="habitaciones">

  <div class="tarjets-habitaciones">
    <div class="tarjet" v-for="item in listaHabitaciones" :key="item.it">
      <img src="@/assets/Habitaciones/Habitacion-1.jpg" alt="">
      <div class="info-tarjet-habitacion">
        <h3>{{item.nombre}}</h3>
      <p><span>Precio</span><br>${{item.precio}}</p>
      <p><span>Detalles</span><br>{{item.descripcion}}</p>

      <div class="buttons">
        <div class="btn-verMas">
          <a href="#">Ver más</a>
        </div>
        <div class="btn-reservar">
          <a href="#">Reservar</a>
        </div>
        
      </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo:{
    listaHabitaciones:{
      query:gql`
      query Query {
        listaHabitaciones {
          nombre
          descripcion
          region
          tipo
          estado
          precio
        }
      }
      `,
    },
  },
  data(){
    return {
      listaHabitaciones: [],
    };
  },
};
</script>

<style>
.tarjets-habitaciones{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
}
.tarjet{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 95%;
  background: #F1F1F1;
  margin: 10px 0;
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
.buttons{
  display: flex;
  justify-content: space-around;

  position: absolute;
  bottom: 10%;
  left: 55%;
}
.buttons a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  margin: 0 50px;

  font-family: 'Montserrat Alternates', sans-serif;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
}
.btn-verMas a{
  border: 3px solid #D9C58B;
  color: #D9C58B;
}
.btn-verMas a:hover{
  border: 3px solid #401201;
  background: #D9C58B;
  color: #401201;

  transition: .8s;
}
.btn-reservar a{
  border: 3px solid#401201;
  color: #401201;
}
.btn-reservar a:hover{
  background: #401201;
  color: #D9C58B;

  transition: .8s;
}
</style>