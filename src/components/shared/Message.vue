<template>
    <div id="message" :class="bg" class="border-[5px] border-black rounded-xl p-4 cursor-pointer">
        <p class="font-semibold text-sm">{{ content }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    content: String,
    bg: String
});

</script>