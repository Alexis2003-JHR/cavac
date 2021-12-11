<template>
  <div class="LogIn">

      <form action="/" class="form-box">
          <h1 class="form-title">Log<span>In</span></h1>
          <input type="text" placeholder="Nombre de usuario">
          <input type="password" placeholder="Contraseña">
          <button type="submit">Iniciar</button>
          <a href="#">Registrarse</a>
      </form>

      <div class="logo-login">
          <img src="../assets/Logo.png" alt="">
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.LogIn{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    background-image: url("../assets/Wallpapers/LogIn-Wallpaper.png");
    background-size:contain;
}
.form-box{
    width: 300px;
    padding: 40px;
    text-align: center;

    background: #260101;
    border-radius: 35px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.form-title{
    color: #ffff;
    font-weight: 500;
}
.form-title span{
    color: #D9C58B;
}
.form-box input[type="text"],
.form-box input[type="password"],
.form-box button[type="submit"]{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    padding: 14px 10px;
    text-align: center;
    border-bottom: 2px solid #D9CAAD;
    width: 200px;
    outline: none;
    color: #F1F1F1;
    transition: 0.25s;
}
.form-box input[type="text"]:focus,
.form-box input[type="password"]:focus{
    width: 230px;
    border-color: #f1f1f1;
}
.form-box button[type="submit"]{
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
.form-box button[type="submit"]:hover{
    background: none;
    color: #D9CAAD;
}
.form-box a{
    text-decoration: none;
    color: #F1F1F1;
    font-size: 15px;
    font-weight: 300;
}
.form-box a:hover{
    color: #D9CAAD;
    transition: .25s;
}
.logo-login{
    position: absolute;
    bottom: 3%;
    left: 2%;
}
.logo-login img{
    max-width: 350px;
}
</style>