<template>
  <Nav>
      <img src="../assets/Logo.png" alt="">
      <div class="main-menu">
            <li><router-link to="/" class="nav-button">Inicio</router-link></li>
            <li><router-link to="/nosotros" class="nav-button">Nosotros</router-link></li> 
            <li><router-link to="/habitaciones" class="nav-button">Habitaciones</router-link></li>
        </div>
      <div class="menu-end">
          <ul>
              <li><a href="#">LogIn</a></li>
          </ul>
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
    border: solid 2px #260101;
    padding: 8px 15px;
}
.menu-end a:hover{
    transition: .8s;
    color: #F1F1F1;
    background: #260101;
    border: 2px solid #F1F1F1;
}
</style>