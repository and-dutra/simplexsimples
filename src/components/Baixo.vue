<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <h3 class="title is-4">O que é um Simplex</h3>
                <p>Simplex é um algoritmo criado por George Dantzig que viabiliza a solução de muitos problemas da programação linear. Bastante popular, encontra boa aceitação em áreas onde diversas necessidades e restrições influenciam em um valor que precisa ser aumentado ou diminuído ao máximo.</p>
            </div>
            <div class="column">
                <h3 class="title is-4">Tipos de Problema</h3>
                <p>Embora os exemplos quase sempre sejam de maximização, o Simplex também soluciona casos em que se deseja encontrar o menor valor possível. Custos e gastos são alguns dos resultados comumente buscados nestas situações.</p>
            </div>
            <div class="column">
                <h3 class="title is-4">Tableau</h3>
                <p>Já implementado em diversas linguagens diferentes, o Simplex também pode ser aplicado manualmente. O método, conhecido como Tableau, consiste em se colocar todas as informações devidamente organizadas em um quadro, fazendo-se exatamente o que um software faria.</p>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
  name: 'Baixo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
