<template>
    <div class="home">
        <Carousel 
        :navigation="true"
        :pagination="true" 
        :timeout="5000"
        class="carousel" 
        v-slot="{currentSlide}">
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info">
                    <img :src="require(`@/assets/Galleries/Landscapes/${slide}.jpg`)" alt="">
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Slide from '@/components/Slide.vue'

export default {
  name: 'Nosotros',
  components: {Carousel, Slide},
  setup(){
    const carouselSlides = ["1.Landscape", "2.Landscape", "3.Landscape", "4.Landscape"];

    return {carouselSlides};
  }
}
</script>

<style scoped>
/*SliderGalery*/
.carousel{
    position: relative;
    max-height: 92vh;
    height: 80vh;
}
.carousel img{
    min-width: 90%;
    height: 100%;
    object-fit: cover;
}
</style>