<template>
    <section class="min-h-screen flex bg-capital-primary">
        <div class="flex flex-col space-y-5 my-auto mx-auto md:grid md:grid-cols-2 md:space-y-0 md:gap-10">
            <ButtonHome 
            content="ACERTE AS CAPITAIS" 
            link="/capitais"
            bg="bg-tertiary"
            />

            <ButtonHome 
            content="???" 
            link="/"
            bg="bg-tertiary"
            />

            <ButtonHome 
            content="???" 
            link="/"
            bg="bg-tertiary"
            />

            <ButtonHome 
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
import ButtonHome from '../components/home/ButtonHome.vue';
import ShortMessage from '../components/shared/ShortMessage.vue';

</script>