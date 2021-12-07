<template>
  <div class="reservas">
      <h3>Reservas</h3>

      <div class="tarjet-reservas">
          <img src="../assets/Habitaciones/Habitacion-1.jpg" alt="">
          <div class="tarjet-info-reserva">
            <h5>Alcoba simple VIP</h5>
            <p><span>Precio:</span> $220.000</p>
            <p><span>Fecha de reserva:</span><br><br>13-07-2022  -  15-08-2022</p>
          </div>
          
      </div>

      <div class="tarjet-reservas">
          <img src="../assets/Habitaciones/Habitacion-1.jpg" alt="">
          <div class="tarjet-info-reserva">
            <h5>Alcoba simple VIP</h5>
            <p><span>Precio:</span> $100.000</p>
            <p><span>Fecha de reserva:</span><br><br>13-07-2022  -  15-08-2022</p>
          </div>
          
      </div>

      <div class="tarjet-reservas">
          <img src="../assets/Habitaciones/Habitacion-1.jpg" alt="">
          <div class="tarjet-info-reserva">
            <h5>Alcoba simple VIP</h5>
            <p><span>Precio:</span> $180.000</p>
            <p><span>Fecha de reserva:</span><br><br>13-07-2022  -  15-08-2022</p>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.reservas{
    min-height: 85vh;
}
.reservas h3{
    text-align: center;

    font-size: 25px;
    font-weight: 400;
    color: #F1F1F1;
    background: #260101;
    padding: 5px 0;
    margin: 10px 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.tarjet-reservas{
    display: flex;
    flex-wrap: wrap;
    padding: 25px 0;
    margin: 15px 0;

    background: #260101;
    color: #D9C58B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.tarjet-reservas img{
    margin-left: 20px;
    max-width: 400px;
}
.tarjet-info-reserva{
    display: flex;
    flex-wrap: wrap;
    width: 65%;
    margin-top: 20px;
    margin-left: 30px;
}
.tarjet-info-reserva h5{
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 25px;
    font-weight: 400;
    width: 100%;
}
.tarjet-info-reserva p{
    width: 50%;

    font-size: 20px;
    font-weight: 300;
}
.tarjet-info-reserva span{
    font-weight: 400;
}
</style>