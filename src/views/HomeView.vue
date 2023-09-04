<template>
    <section class="min-h-screen flex bg-[#ECE6C2]">
        <div class="flex flex-col space-y-5 my-auto mx-auto">
            <ButtonGame 
            content="ACERTE AS CAPITAIS" 
            link="/capitais"
            bg="bg-tertiary"
            />

            <ButtonGame 
            content="???" 
            link="/"
            bg="bg-tertiary"
            />

            <ButtonGame 
            content="???" 
            link="/"
            bg="bg-tertiary"
            />

            <ButtonGame 
            content="???" 
            link="/"
            bg="bg-tertiary"
            />

            <div class="absolute bottom-0 right-0 w-full">
                <ShortMessage 
                bg="bg-[#DECE93]"
                content="Jogo desenvolvido por Tony Albert"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import ButtonGame from '../components/home/ButtonGame.vue';
import ShortMessage from '../components/shared/ShortMessage.vue';

</script>