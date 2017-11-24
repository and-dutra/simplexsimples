<template>
    <div class="hero is-medium is-primary is-bold">
      <div class="hero-body">
          <div class="container has-text-centered">
      
            <h1 class="title">
              {{titulo}}
            </h1>
            <h2 class="subtitle">
              {{subtitulo}}
            </h2>

            <a class="button is-large is-dark" v-on:click="pegaClique">Resolver Simplex</a>
          </div>
        </div>
    </div>
</template>
<script>
var data = {
  titulo: 'Seja bem vindo ao simplex simples',
  subtitulo: 'Resolva seus simples de maneira simples e intuitivo'
}
export default {
  name: 'Inicio',
  data: function () {
    return data
  },
  methods: {
    pegaClique (event) {
      console.log('pega clique')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.columns {
    margin-top: 40px;
}
</style>
