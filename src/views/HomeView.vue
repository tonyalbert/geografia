<template>
    <section class="min-h-screen flex bg-[#ECE6C2]">
        <div class="flex flex-col space-y-5 my-auto mx-auto">
            <ButtonGame game="ACERTE AS CAPITAIS" link="/capitais"/>
            <ButtonGame game="???" link="/"/>
            <ButtonGame game="???" link="/"/>
            <ButtonGame game="???" link="/"/>
        </div>

        <div class="absolute bottom-12 left-1/2 right-1/2">
            <Message />
        </div>
    </section>
</template>

<script setup>
import ButtonGame from '../components/home/ButtonGame.vue';
import Message from '../components/shared/Message.vue';

</script>