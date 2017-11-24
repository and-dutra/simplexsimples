<template>
  
  <div id="app">

    <Inicio/>
    <Baixo/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Baixo from './components/Baixo'
import Inicio from './components/Inicio'

var data = {
  titulo: 'Seja bem vindo ao simplex simples',
  subtitulo: 'Resolva seus simples de maneira simples e intuitivo',
  started: false
}
export default {
  name: 'app',
  components: {
    HelloWorld,
    Inicio,
    Baixo
  },
  data: function () {
    return data
  }
}
</script>

<style>

</style>
