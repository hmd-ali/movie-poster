<template>
    <div class="flex flex-col w-screen h-screen fixed top-0 left-0">
        <!-- title -->
        <div class="w-full p-4 flex items-center justify-center">
            <img class="w-1/2" src="../assets/logo.svg" alt="">
        </div>
        <div class="flex w-full items-center justify-center h-full pt-8 relative">
                <img class="absolute opacity-60 bottom-0 left-0 w-full max-w-3xl" src="../assets/Layer1.png" alt="">
            <div class="relative w-full h-full  flex flex-col items-center p-10">
                <div class="p-2 flex flex-col rounded-2xl bg-black bg-opacity-30 w-full">
                    <h1 class="text-white m-4"><span class="font-bold text-yellow-300">Description:</span> A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</h1>   
                    <h1 class="text-white m-4"><span class="font-bold text-yellow-300">Rating: </span>8.0/10</h1>
                    <h1 class="text-white m-4"><span class="font-bold text-yellow-300">Directed by: </span>James Gun</h1>
                </div>
                <button class="text-xl text-black bg-yellow-300 py-2 px-4 rounded-2xl border border-yellow-300 mt-8">Buy Tickets</button>
                <h2 class="absolute bottom-2 left-2 text-yellow-300">Available now in Cinemas</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
}
</script>

<style scoped>
    .title{
        font-family: 'Distant Galaxy';
        font-size: 10rem;
    }
</style>