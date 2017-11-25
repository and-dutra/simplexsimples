<template>
    <div>
        <div class="columns is-centered">
            <template v-if="!step2">
            <div class="column is-one-third">
                <h1 class="title">
                    Vamos começar!
                </h1>
                <div class="field">
                    <label class="label">Quantas variáveis de decisão?</label>

                    <div class="control">
                        <input class="input" v-on:keyup="isDisabled" type="number" placeholder="ex: 3" v-model.number="numDec">
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Quantas variavéis de restrição?</label>
                    <div class="control">
                        <input class="input" v-on:keyup="isDisabled" type="number" placeholder="ex: 2" v-model.number="numRes">
                    </div>
                </div>
                <div class="field">
                 <label class="label">Quantas variavéis de restrição?</label>    
                 <div class="control">
                        <div class="select">
                            <select v-model="operacao">
                            <option>Maximizar</option>
                            <option>Minimizar</option>
                            </select>
                        </div>
                    </div>
                </div>
                <a class="button is-large is-dark" @click="irProx" :disabled="disabled">Continuar</a>      
            </div>
            </template>
            <template v-else>
                <PassoDois :variaveis="numDec" :restricoes="numRes" :operacao="operacao" />
            </template>
        </div>
    </div>
</template>
<script>
import PassoDois from './PassoDois'

var data = {
  numDec: null,
  numRes: null,
  disabled: true,
  operacao: 'Maximizar',
  step2: false
}
export default {
  name: 'PassoUm',
  components: {
    PassoDois
  },
  data: function () {
    return data
  },
  methods: {
    isDisabled (event) {
    //   console.log(this.numDec)
      if (Number.isInteger(this.numDec) && Number.isInteger(this.numRes)) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    irProx (event) {
      if (!this.disabled) {
        // console.log('btn clique')
        this.step2 = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label {
    color: white;
}
.button.is-large {
    margin-top: 20px;
}
</style>
