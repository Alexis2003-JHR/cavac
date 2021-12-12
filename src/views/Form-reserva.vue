<template>
  <div class="form-reserva">
      <form action="" class="form-container">
          <h1>RESERVA TU HABITACIÓN</h1>

          <div class="selection-form">
            <label for="habitacion">Habitación: <br></label>
            <select name="habitacion" id="habitacion">
                <option value="Sucursal del cielo">Sucursal del cielo</option>
                <option value="La Heroica">La Heroica</option>
                <option value="La Eterna Primavera">La Eterna Primavera</option>
                <option value="La Perla De America">La Perla De America</option>
                <option value="La Ciudad de la Luna">La Ciudad de la Luna</option>
                <option value="La Puerta de Oro">La Puerta de Oro</option>
            </select>
          </div>

          <div class="dates">
              <div class="date">
                  <label for="entrada">Fecha de entrada:<br></label>
                  <input type="date" name="" id="entrada">
              </div>

              <div class="date">
                  <label for="salida">Fecha de salida:<br></label>
                  <input type="date" name="" id="salida">
              </div>
          </div>
          
          <div class="info-reserva">
              <label for="">Noches: <span>8</span></label>    
            <label for="">Precio: <span>$10.000</span></label>
          </div>
          <button type="submit">RESERVAR</button>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.form-reserva{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80.1vh;
}
.form-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    background: #F1F1F1;
    max-height: 400px;
    max-width: 500px;
    padding: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.form-container h1{
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 22px;
    color: #8C7B65;
}
.selection-form, .dates, .info-reserva{
    width: 100%;
    margin: 20px 0;
}
.selection-form select{
    font-family: 'Montserrat Alternates', sans-serif;
    border: none;
    background: #C4C4C4;
    margin: 10px;
    padding: 5px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
}
.dates, .info-reserva{
    display: flex;
    justify-content: space-around;
}
.date input{
    font-family: 'Montserrat Alternates', sans-serif;
    border: none;
    background: #C4C4C4;
    margin: 10px;
    padding: 5px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
}
.form-container button[type="submit"]{
    border: 0;
    background: #D9C58B;
    cursor: pointer;
    border: 2px solid #D9C58B;
    font-weight: 400;
    font-size: 18px;
    color: #260101;
    margin-top: 40px;
    margin-bottom: 8px;
    width: 180px;
    height: 50px;
}
.form-container button[type="submit"]:hover{
    background: none;
    color: #260101;
    border: 2px solid #260101;
    transition: .5s;
}
</style>