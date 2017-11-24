<template>
    <div>
        <div class="columns is-mobile">
            <div class="column is-half is-offset-one-quarter">
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
                <a class="button is-large is-dark" @click="irProx" :disabled="disabled">Continuar</a>      
            </div>
        </div>
    </div>
</template>
<script>
var data = {
  numDec: null,
  numRes: null,
  disabled: true
}
export default {
  name: 'PassoUm',
  data: function () {
    return data
  },
  methods: {
    isDisabled (event) {
      console.log(this.numDec)
      if (Number.isInteger(this.numDec) && Number.isInteger(this.numRes)) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    irProx (event) {
        if(!this.disabled) {
            console.log('btn clique')
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
</style>
