<template>

<div :class="{ '-top-full': !loading }" class="fixed top-0 left-0 w-screen h-screen bg-stone-900 transition-all duration-700">
    <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-white text-center text-5xl font-bold">Carregando...</h1>
        <img class="w-32" :src="eartLoading" alt="">
    </div>
</div>

</template>