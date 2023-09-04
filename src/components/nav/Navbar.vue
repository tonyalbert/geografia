<template>
    <nav class="flex items-center py-2 justify-between fixed top-0 left-0 w-screen px-4">
        <button>
            <img :src="Help" alt="">
        </button>
            <Logo />
        <button>
            <img src="" alt="">
        </button>
    </nav>
</template>

<script setup>
import Logo from './Logo.vue';
import Help from '/images/help.svg';
import Menu from '/images/menu.svg';

</script>
