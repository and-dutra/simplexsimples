<template>
  <div id="app">
    <div class="hero is-medium is-primary is-bold">
      <div class="hero-body">
          <div class="container has-text-centered">
              <div v-if="!started">
                <Inicio/>
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
  },
  created () {
    Event.$on('applied', this.handler)
  },
  methods: {
    handler (event) {
      this.started = true
    }
  }
}
</script>

<style>

</style>
