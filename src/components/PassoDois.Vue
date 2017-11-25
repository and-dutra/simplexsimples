<template>
    <div>
        <h2 class="is-size-3 has-text-weight-bold">Função:</h2>
        <div class="level field is-grouped is-grouped-multiline">
          <template v-for="(n,index) in variaveis">
            <p class="control" v-bind:key="index" >
              <input v-model.number="inputsFunc[index]" class="input pequeno" type="number" placeholder="">
            </p>
            <p class="control has-text-weight-bold	has-text-white is-size-4"> X{{n}} <span v-if="n != variaveis">+</span> </p>
          </template>
        </div>

        <h2 class="is-size-4 has-text-weight-bold">Restrições:</h2>  
        <template v-for="(z,indexz) in restricoes">
        <div class="level field is-grouped is-grouped-multiline">
          <template v-for="(n,index) in variaveis+1">
            <p class="control" v-bind:key="index" >
              <input v-model.number="restricoesFunc[indexz,index]" class="input pequeno" type="number" placeholder="">
            </p>
            <p class="control has-text-weight-bold	has-text-white is-size-4"> X{{n}} <span v-if="n != variaveis">+</span> </p>
          </template>
        </div>
        </template>
        {{inputsFunc}}
        {{restricoesFunc}}
    </div>
</template>
<script>
var data = {
  inputsFunc: [],
  restricoesFunc: []
}
export default {
  name: 'PassoDois',
  props: ['restricoes', 'variaveis', 'operacao'],
  data: function () {
    return data
  },
  created: function () {
    // console.log('binded ' + this.variaveis + this.restricoes + this.operacao)
    // criar array de restricoes
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.pequeno {
  width: 60px;
}
.label {
  color:#FFF;
  font-weight: 700;
  margin-right: 5px;
}
</style>
