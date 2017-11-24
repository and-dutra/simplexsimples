<template>
    <div>
        <h1 class="title">
            {{titulo}}
        </h1>
        <h2 class="subtitle">
            {{subtitulo}}
        </h2>

        <a class="button is-large is-dark" @click="pegaClique">Resolver Simplex</a>      
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
      Event.$emit('applied')
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
