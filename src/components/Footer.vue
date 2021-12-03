<template>
  <div class="footer-main">
      <div class="footer-info">
          <p>Hay mil mundos por recorrer, mil vidas por vivir ¿Que esperas?</p>
          <p class="copyright">CAVAC Copyright ©</p>
      </div>

      <div class="footer-links">
          <a href=""><i class="fab fa-whatsapp-square"></i></a>
          <a href=""><i class="fab fa-facebook-square"></i></a>
          <a href=""><i class="fab fa-instagram-square"></i></a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-main{
    display: flex;
    flex-wrap: wrap;
    height: 92px;
    background: #000000;
    color: #D9CAAD;
    font-weight: 300;
    align-items: center;
    text-align: center;
}
.footer-info{
    position: relative;
    left: 30%;
}
.footer-info p{
    width: 100%;
}
.copyright{
    position: relative;
    bottom: -10px;
    font-size: 13px;
}
.footer-links{
    position: relative;
    left: 50%;
}
.footer-links i{
    width: 30px;
    height: 28px;
    font-size: 35px;
    color: #D9CAAD;
    margin: 0 5px;
}
.footer-links i:hover{
    color: #f1f1f1;
    transition: .8s;
}
</style>