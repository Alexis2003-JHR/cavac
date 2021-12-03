<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" />

        <!-- Navigation -->
        <div v-if="navEnabled" class="navigate">
            <div class="toggle-page left">
                <i @click="prevSlide" class="fas fa-chevron-left"></i>
            </div>
            <div class="toggle-page right">
                <i @click="nextSlide" class="fas fa-chevron-right"></i>
            </div>
        </div>

        <!-- Pagination -->
        <div v-if="paginationEnabled" class="pagination">
            <span
            @click="goToSlide(index)"
            v-for="(slide, index) in getSlideCount" 
            :key="index" 
            :class="{active: index + 1 === currentSlide}">
            </span>
        </div>
    </div>
</template>

<script>
import {ref, onMounted} from "vue";

export default {
    props: ["startAutoPlay", 'timeout', 'navigation', 'pagination'],
    setup(props){
        const currentSlide = ref(1);
        const getSlideCount = ref(null);
        const autoPlayEnabled = ref(true);
        const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
        //Props
        const paginationEnabled = ref(props.pagination === undefined ? true: props.pagination);
        const navEnabled = ref(props.navigation === undefined ? true: props.navigation);

        //Next slide
        const nextSlide = () =>{
            if(currentSlide.value === getSlideCount.value){
                currentSlide.value = 1;
                return;
            }
            currentSlide.value +=1;
        }

        //Prev slide
        const prevSlide = () =>{
            if(currentSlide.value === 1){
                currentSlide.value = 1;
                return;
            }
            currentSlide.value -=1;
        }

        const goToSlide = (index) =>{
            currentSlide.value = index + 1;
        }

        //AutoPlay
        const autoPlay = () =>{
            setInterval(()=>{
                nextSlide()
            }, timeoutDuration.value);
        }

        if(autoPlayEnabled.value){
            autoPlay();
        }

        onMounted(()=>{
            getSlideCount.value = document.querySelectorAll('.slide').length;
        });

        return {
        currentSlide, 
        nextSlide, 
        prevSlide, 
        getSlideCount, 
        goToSlide, 
        paginationEnabled,
        navEnabled};
    },
};
</script>

<style>
.navigate{
    padding: 0 10px;
    height: 100%;
    width: 98%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}
.toggle-page{
    display: flex;
    flex: 0.5;
}
.right{
    justify-content: flex-end;
}
.toggle-page i{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    width: 40px;
    height: 70px;
    background: rgba(0, 0, 0, 0.5);
    color: #F1F1F1;
}
.toggle-page i:hover{
    color: #D9CAAD;
    transition: .6s;
}
/*Pagination*/
.pagination{
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
}
.pagination span{
    cursor: pointer;
    width: 52px;
    height: 8px;
    background-color: #d9caad94;
    box-sizing: border-box;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.pagination .active{
    background: #000000c2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>