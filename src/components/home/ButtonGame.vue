<template>
    <RouterLink :to="link"> 
        <div :class="bg" id="buttonGame" class="flex justify-center hover:bg-secondary transition-all px-12 py-3 rounded-xl border-[5px] border-black cursor-pointer">
            <h1 class="font-semibold text-sm">{{ content }}</h1>
        </div>
    </RouterLink>
</template>

<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router'

defineProps({
    link: {
        type: String,
        default: "#"
    },
    content: String,
    bg: String
});

</script>