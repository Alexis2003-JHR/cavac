<template>
  <Nav>
      <a href=""><img src="../assets/Logo.png" alt=""></a>
      <div class="main-menu">
            <li><router-link to="/" class="nav-button">Inicio</router-link></li>
            <li><router-link to="/nosotros" class="nav-button">Nosotros</router-link></li> 
            <li><router-link to="/habitaciones" class="nav-button">Habitaciones</router-link></li>
        </div>
      <div class="menu-end">
            <li><router-link to="/login">LogIn</router-link></li>
      </div>
  </Nav>
</template>

<script>
</script>

<style scoped>
Nav{
    display: flex;
    justify-content: space-around;
    background: #F1F1F1;
    align-items: center;
    height: 90px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}
Nav img{
    max-width: 155px;
    height: 27px;
    margin: 10px 20px;
}
.main-menu{
    display: flex;
    justify-content: space-around;
    text-align: center;
}
.main-menu li, a{
    text-decoration: none;
    list-style: none;
    padding: 0 5px;
    color: #260101;
    font-size: 18px;
}
.main-menu a.router-link-exact-active{
    border-bottom: 3px solid;
}
.menu-end li, a{
    text-decoration: none;
    list-style: none;
}
.menu-end a{
    border-top: solid 2px #260101;
    border-bottom: solid 2px #260101;
    border-left: solid 2px #F1F1F1;
    border-right: solid 2px #F1F1F1;
    padding: 8px 15px;
}
.menu-end a:hover{
    border-left: solid 2px #260101;
    border-right: solid 2px #260101;
    background: #f7f0db;
    transition: .8s;
}
</style>