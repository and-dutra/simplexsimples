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
import simplex from 'simplex-solver'

var data = {
  titulo: 'Seja bem vindo ao simplex simples',
  subtitulo: 'Resolva seus simples de maneira simples e intuitivo'
}

var result = simplex.maximize('2x + 3y + 4z', [
  '3x + -2y + z <= 10',
  '2x + 5y + 3z <= 15'
])

console.log(result)

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
