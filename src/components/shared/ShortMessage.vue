<template>
    <div id="message" :class="bg" class="border-[5px] border-black w-full p-1 rounded-md cursor-pointer">
        <p class="font-bold text-[12px] text-center">{{ content }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    content: String,
    bg: String
});

</script>