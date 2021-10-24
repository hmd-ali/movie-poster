<template>
    <div v-if="!isLoaded" class="loader fixed flex flex-col bg-black items-center justify-center w-screen h-screen">
        <h1 class="text-white text-2xl">Loading...</h1>
        <div class="cubes">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loader',
    data(){
        return{
            isLoaded: false
        }
    },
    mounted(){
        document.onreadystatechange = () => {
            if(document.readyState === 'complete'){
                this.isLoaded = true
            }
        }
    }
}
</script>
<style scoped>
 .loader{
     z-index: 99999;
 }
 .cubes{
    display: flex;
 }
 .cubes .cube{
     width: 1rem;
     height: 1rem;
     background: white;
     margin: 1rem;
 }
 .cube:first-child{
     animation: left 1s infinite
 }
 .cube:last-child{
     animation: right 1s .5s infinite;
 }
 @keyframes left{
     40%{
         transform: translateX(-3rem);
     }
     50%{
         transform: translateX(0);
     }
 }
 @keyframes right{
     40%{
         transform: translateX(3rem);
     }
     50%{
         transform: translateX(0);
     }
 }

</style>