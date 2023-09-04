<template>
    <div :class="{ '-top-full': !loading }" class="fixed -top-full left-0 w-screen h-screen bg-capital-primary transition-all duration-700">
        <div class="flex flex-col items-center justify-center h-full">
            <h1 class="text-white text-center text-3xl font-bold">Carregando...</h1>
            <img class="w-28" :src="eartLoading" alt="">
        </div>
    </div>

    <section :class="{'pt-24': !jogoIniciado}"  class="bg-capital-primary h-screen flex flex-col px-4">

        <div v-show="!jogoIniciado">
            <Message 
            bg="bg-[#DECE93]" 
            content="Digite a capital do estado que aparecer na tela. Se acertar, avance. Se errar, tente novamente ou pule para o próximo estado. Continue até acertar todos os estados. Divirta-se!"
            />
        </div>

        
            <div class="my-auto">
                <div class="absolute bottom-3 w-11/12">

                    <div v-show="!jogoIniciado" class="flex justify-center">
                        <div id="time" class="flex justify-center font-bold mb-4 rounded-md">
                            <div class="w-16 bg-tertiary cursor-pointer hover:bg-secondary transition-colors text-center border-[3px] border-black rounded-l-md">30s</div>
                            <div class="w-16 bg-tertiary cursor-pointer hover:bg-secondary transition-colors text-center border-[3px] border-black">1min</div>
                            <div class="w-16 bg-tertiary cursor-pointer hover:bg-secondary transition-colors text-center border-[3px] border-black rounded-r-md">5min</div>
                        </div>  
                    </div>

                    <ButtonGame 
                    v-show="!jogoIniciado" 
                    content="INICIAR" 
                    bg="bg-secondary"
                    @click="iniciarJogo"
                    />

                    <ButtonGame 
                    v-show="jogoIniciado" 
                    content="PARAR" 
                    bg="bg-[#C87D7D]"
                    @click="pararJogo"
                    />
                </div>



                <div v-show="jogoIniciado">
                    
                    <!-- <div>
                        {{ timer }}
                    </div> -->
                    
                    <div class="flex flex-col items-center justify-center mb-8 text-white">
                        <p class="text-md font-bold">{{ estadosJaSorteados.length }}/{{ estados.length }}</p>
                        <h1 class="text-3xl font-bold "
                            v-for="estado in estadoSorteado"
                            :key="estado.id">
                            {{ estado.nome }}
                        </h1>
                    </div>

                    <form @submit.prevent="verificarTentativa" class="flex flex-col items-center justify-center">
                        <input type="text" v-model="tentativa" name="tentativa" autocomplete="off" id="input-tentativa" class="w-full py-2 px-4 rounded-full border-[5px] border-black">
                        <input type="submit" id="enviar-tentativa" class="rounded-md border-[5px] border-black bg-secondary px-6 mt-4 font-bold cursor-pointer">
                    </form>
                </div>

            </div>


    </section>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { todosEstados } from '../assets/data/todosEstados.js';
import eartLoading from '/images/eartLoading.gif';
import axios from 'axios';
import ButtonGame from '../components/home/ButtonGame.vue';
import Message from '../components/shared/Message.vue';

const estados = ref([]);
var jogoIniciado = ref(false);
var estadosJaSorteados = ref([]);
var estadoSorteado = ref([]);
var tentativa = ref('');
var loading = ref(true);
var timer = ref(0);

onMounted(() => {
    getAllEstados();
    setTimeout(() => {
        loading.value = false;
    }, 4000);
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

function pararJogo() {
    jogoIniciado.value = false;
    timer.value = 0;
    estadosJaSorteados.value = [];
}

</script>