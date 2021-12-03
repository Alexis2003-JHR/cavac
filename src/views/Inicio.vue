<template>
    <div class="home">
        <Carousel 
        :navigation="false"
        :pagination="false" 
        :timeout="5000"
        class="carousel" 
        v-slot="{currentSlide}">
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info">
                    <img :src="require(`../assets/Galleries/Inicio-slide/${slide}.jpg`)" alt="">
                </div>
            </Slide>
        </Carousel>
        <div class="inicio-info">
            <h1>¡Vive una experiencia CAVAC!</h1>
            <div class="circle-inicio c1">
                <p>Reserva</p>
            </div>
            <div class="circle-inicio c2">
                <p>Conoce</p>
            </div>
            <div class="circle-inicio c3">
                <p>Disfruta</p>
            </div>
            <div class="circle-inicio c4">
                <p>Siente</p>
            </div>

            <img src="../assets/Galleries/Inicio-slide/Show1.jpg" alt="">
        </div>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Slide from '../components/Slide.vue'

export default {
  name: 'Home',
  components: {Carousel, Slide},
  setup(){
    const carouselSlides = ["Show1", "Show2", "Show3"];

    return {carouselSlides};
  }
}
</script>

<style>
/*SliderGalery*/
.carousel{
    position: relative;
    max-height: 92vh;
    height: 91vh;
}
.slide-info{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
}
.carousel img{
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}

/*Main info*/
.inicio-info{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
}
.inicio-info h1{
    width: 100%;
    font-weight: 400;
}
.circle-inicio{
    display: flex;
    margin: 66px;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 24px;
    font-weight: 300;
}
.c1{
    background: #D9C58B;
}
.c2{
    background: #D9CAAD;
}
.c3{
    background: #8C7B65;
}
.c4{
    background: #401201;
    color: #F1F1F1;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.50);
}
.inicio-info img{
    max-width: 700px;
    max-height: 500px;
    margin-bottom: 50px;
}
</style>