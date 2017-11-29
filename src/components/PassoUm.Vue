<template>

    <div>
        <div class="columns is-centered">
            <template v-if="passo == 1">
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
                        <input class="input" v-on:keyup="isDisabled" v-on:keyup.enter="irProx" type="number" placeholder="ex: 2" v-model.number="numRes">
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
                <div class="columns is-desktop is-vcentered">
                    <div class="column">
                        <a class="button is-large is-dark" @click="irProx" :disabled="disabled">Continuar</a>
                    </div>
                    <div class="column">
                        <a class="button is-light is-large" @click="irVoltar">Voltar</a>      
                    </div>
                </div>
                
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
  passo : 1,
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
  created () {
    // console.log(this.passo)
    Event.$on('applied', this.handler)
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
        // this.step2 = true
        this.passo = 2
      }
    },
    irVoltar(event) {
     console.log('volta')   
     this.passo = 1
     Event.$emit('applied',{id : 0})
    },
     handler (event) {
      console.log(event.id)
      this.passo = event.id
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
