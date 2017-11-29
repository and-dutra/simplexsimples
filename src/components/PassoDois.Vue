<template>
    <div>
       

        <div v-if="passo == 2">
        <h2 class="is-size-3 has-text-weight-bold">Função:</h2>
        <div class="level field is-grouped is-grouped-multiline">
          <template v-for="(n,index) in variaveis">
            <p class="control" v-bind:key="index" >
              <input v-model.number="inputsFunc[index]" class="input pequeno" type="number" v-on:keyup="isDisabled" >
            </p>
            <p class="control has-text-weight-bold	has-text-white is-size-4" v-bind:key="index" > X{{n}} <span v-if="n != variaveis">+</span> </p>
          </template>
        </div>
        

        <h2 class="is-size-3 has-text-weight-bold">Restricoes:</h2>
        <template v-for="(val,key) in restricoes">
            <div class="level field is-grouped is-grouped-multiline">
            <template v-for="(val2,key2) in variaveis+1">
              <p class="control">
                <span class="control has-text-weight-bold	has-text-white is-size-4" v-if="key2 == variaveis">
                   <=
                  </span>
               <input v-on:keyup="isDisabled" v-on:keyup.enter="resolver" class="input pequeno" type="number" placeholder="" v-model="restricoesFunc[key][key2]"> 
              </p>
              <p class="control has-text-weight-bold	has-text-white is-size-4">
                 <span v-if="key2 != variaveis" >
                   X{{val2}}
                  </span>
                  <span v-if="key2 < variaveis - 1" >
                   + 
                  </span>
              </p>
            </template> 
            </div>             
        </template>

        <div class="columns topo is-desktop is-vcentered">
            <div class="column">
                <a class="button is-large is-dark" @click="resolver" :disabled="disabled">Resolver</a>
            </div>
            <div class="column">
                <a class="button is-light is-large" @click="irVoltar">Voltar</a>      
            </div>
        </div>

        
        </div>
        <div v-else>
          <PassoTres :problema="textoFunc" :restricoes="arrayRest" :operacao="operacao"/>
        </div>

    </div>
    
</template>
<script>

import PassoTres from './PassoTres'

var data = {
  inputsFunc: [],
  restricoesFunc: [[]],
  textoFunc: '',
  resultado: {},
  arrayRest: [],
  passo: 2,
  disabled: true,
  resolvido: false
}
export default {
  name: 'PassoDois',
  props: ['restricoes', 'variaveis', 'operacao'],
  components: {
    PassoTres
  },
  data: function () {
    return data
  },
  created: function () {
    this.preencherArray()
    // this.restricoesFunc[0][0] = 3
    // console.log('binded ' + this.variaveis + this.restricoes + this.operacao)
    // criar array de restricoes
  },
  methods: {
    preencherArray () {
      this.restricoesFunc = Array(this.restricoes).fill(0).map(() => Array(this.variaveis + 1).fill('0'))
    },
    resolver() {
      if(!this.disabled) {
        this.inputsFunc.forEach(this.recebeFuncao)
        this.recebeRestricoes()      
        this.passo = 3
      }
    },
    recebeFuncao (element,index,array) {
      if(this.operacao == 'Minimizar') {
        element = element * -1
      }
      this.textoFunc += String(element)+'x'+String(index+1)
      if(index+1 != this.inputsFunc.length) {
        this.textoFunc += " + "
      }
      console.log(this.textoFunc)
    },
    recebeRestricoes () {
      this.arrayRest = []
      for (let index = 0; index < this.restricoes; index++) {
        // console.log(this.restricoesFunc[index])
        var texto = ''
        for (let jndex = 0; jndex < this.restricoesFunc[index].length; jndex++) {
          if(jndex < this.variaveis) {
            texto += String(this.restricoesFunc[index][jndex])+'x'+String(jndex+1)
          } else {
            texto += String(this.restricoesFunc[index][jndex])
          }
          
          if(jndex < this.variaveis-1) {
            texto += ' + '
          } else if (jndex == this.variaveis-1) {
            texto += ' <= '
          }
        }   
        this.arrayRest.push(texto)
      }
      // console.log(this.arrayRest)
      this.resolvido = true
    },
    ativaBotaoRestricoes() {
      // console.log(this.restricoes)
        for (let index = 0; index < this.restricoes; index++) {
          var elemento = this.restricoesFunc[index][this.variaveis]
          // console.log(index)
          if(elemento == 0 || isNaN(elemento)) {
            return false
          } 
        }
        return true
    },
    isDisabled () {
      // console.log(this.restricoesFunc)
      var ativo = false
      if(this.variaveis != this.inputsFunc.length) {
        ativo = false
      } else {
        ativo = true
      }
      if(ativo) {
       ativo = this.ativaBotaoRestricoes()
      }
      
      if(ativo) {
        this.disabled = false
      } else {
        this.disabled = true
      } 
    },
    irVoltar() {
      this.passo = 2
      Event.$emit('applied',{id : 1})
    }

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
.topo {
  margin-top: 30px;
}
</style>
