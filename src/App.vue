<template>
  <div id="app">
    <div class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        
          <div class="container has-text-centered">
              <div v-if="passo == 0">
                <Inicio/>
              </div>
              <div v-if="passo == 1">
                <transition name="slide-fade">
                    <PassoUm />  
                  </transition>
              </div>
            </div>
        </div>
    </div>

    <Baixo/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Baixo from './components/Baixo'
import Inicio from './components/Inicio'
import PassoUm from './components/PassoUm'

var data = {
  titulo: 'Seja bem vindo ao simplex simples',
  subtitulo: 'Resolva seus simples de maneira simples e intuitivo',
  passo: 0
}

export default {
  name: 'app',
  components: {
    HelloWorld,
    PassoUm,
    Inicio,
    Baixo
  },
  data: function () {
    return data
  },
  created () {
    // console.log(this.passo)
    Event.$on('applied', this.handler)
  },
  methods: {
    handler (event) {
      console.log(event.id)
      this.passo = event.id
    }
  }
}
</script>

<style>

</style>
