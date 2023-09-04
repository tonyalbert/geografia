<template>
    <div :class="{ '-top-full': !loading }" class="fixed top-0 left-0 w-screen h-screen bg-stone-900 transition-all duration-700">
        <div class="flex flex-col items-center justify-center h-full">
            <h1 class="text-white text-center text-3xl font-bold">Carregando...</h1>
            <img class="w-28" :src="eartLoading" alt="">
        </div>
    </div>

    <section class="bg-stone-800 text-white h-screen flex flex-col justify-center items-center">
            <div class="">
                <button v-if="!jogoIniciado" @click="iniciarJogo()" class="bg-blue-800 hover:bg-blue-700 my-auto text-white font-bold py-2 px-12 rounded">Começar</button>
                <div v-show="jogoIniciado">
                    <div class="flex flex-col items-center justify-center mb-8">
                        <p>{{ estadosJaSorteados.length }}/{{ estados.length }}</p>
                        <h1 class="text-3xl font-bold"
                            v-for="estado in estadoSorteado"
                            :key="estado.id">
                            {{ estado.nome }}
                        </h1>
                    </div>

                    <form @submit.prevent="verificarTentativa" class="flex flex-col items-center justify-center">
                        <input type="text" v-model="tentativa" name="tentativa" autocomplete="off" class="border block border-black rounded-md text-black focus:outline-blue-800 px-3 py-1">
                        <input type="submit" class="bg-blue-800 hover:bg-blue-700 my-auto text-white font-bold py-1 px-12 rounded mt-4">
                    </form>

                    <div>
                        
                    </div>
                </div>
            </div>
    </section>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { todosEstados } from '../assets/data/todosEstados.js';
import eartLoading from '../../public/images/eartLoading.gif';
import axios from 'axios';

const estados = ref([]);
var jogoIniciado = ref(false);
var estadosJaSorteados = ref([]);
var estadoSorteado = ref([]);
var tentativa = ref('');
var loading = ref(true);

onMounted(() => {
    getAllEstados();
    setTimeout(() => {
        loading.value = false;
    }, 2000);
});

function getAllEstados() {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
        var res = response.data;
        res.map(estado => {
            estados.value.push(estado);
        });
    });
}

function verificarTentativa() {
    const capital = getCapital();
    var result = compararStrings(capital, tentativa.value);
    if (result) {
        if(estadosJaSorteados.length == 26) {
            jogoIniciado.value = false;
        } else {
            sortearEstado();    
        }
    }
    tentativa.value = '';
}

function getCapital() {
    const estado = todosEstados.find(estado => estado.nome == estadoSorteado.value[0].nome);
    return estado.capital;
}

function sortearEstado() {
    var numeroSorteado;
    do {
        numeroSorteado = Math.floor(Math.random() * 27);
    } while (estadosJaSorteados.value.includes(numeroSorteado));

    estadosJaSorteados.value.push(numeroSorteado);
    estadoSorteado.value = [];
    estadoSorteado.value.push(estados.value[numeroSorteado])
}

function compararStrings(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  str1 = str1.replace(/\s+/g, '');
  str2 = str2.replace(/\s+/g, ''); 

  str1 = str1.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  str2 = str2.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return str1 === str2;
}

function iniciarJogo() {
    jogoIniciado.value = true;
    sortearEstado();
}

</script>