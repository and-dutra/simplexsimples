<template>
 <transition name="fade">
    <div>
        <h2 class="is-size-3 has-text-weight-bold">Resultado:</h2>
        <template v-if="cabecalhos[0] != 0">
          <table class="table is-bordered">
            <thead>
              <tr>
                <template  v-for="(n,i) in cabecalhos">
                    <th>{{cabecalhos[i]}}</th>
                </template>
              </tr>
            </thead>   
            <tbody>
              <tr>
              <template  v-for="(n,i) in cabecalhos">
                  <th>{{cabecalhosRes[i]}}</th>
                </template>
              </tr>
            </tbody>       
          </table>
          <a class="button is-light" @click="mostrarTabelas">Mostrar passos</a>
        </template>
        <template v-else>
          <h2 class="is-size-5 has-text-weight-bold">Problema sem solução</h2>
        </template>
        <div v-if="mostrarPassos">
        <h3 class="is-size-4 has-text-weight-bold">Resolução Passo a Passo (Tableau):</h3>
        <template v-for="item,index in tabelas">
           <h3 class="is-size-5 has-text-left has-text-weight-bold">Passo {{index+1}}</h3>
           <table class="table is-bordered">
             <thead>
               <tr>
               <template  v-for="cab in item.variables">
                <th>{{cab}}</th>
              </template>
              </tr>
              <template  v-for="linhas in item.rows">
                <tr>
                <template  v-for="lin in linhas">
                  <td>{{lin}}</td>
                </template>
                </tr>
              </template>
             </thead>
             <tbody>
             </tbody>
            
           </table>
           <div v-if="item.pivot != null">
           <p class="pivo">Pivo: 
           <template v-for="(pivo,chave,indice) in item.pivot">
                 <span v-if="indice == 0">
                   Linha {{pivo}}
                 </span>
                 <span v-else>
                   Coluna {{pivo}}
                 </span>
               </template>
            </p>
            </div>
        </template>
        </div>
    </div>
 </transition>
</template>

<script>
/* eslint-disable */
import simplex from 'simplex-solver'

var data = {
  cabecalhos: [],
  cabecalhosRes: [],
  res: {},
  mostrarPassos : false,
  tabelas: {}
}
export default {
  name: 'PassoTres',
  props: ['problema', 'restricoes','operacao'],
  
  data: function () {
    return data
  },
  methods: {
    mostrarTabelas() {
      this.mostrarPassos = !this.mostrarPassos
    }
  },
  created: function() {
    // console.log({
    //   Operacao: this.operacao,
    //   Problema: this.problema,
    //   restricoes: this.restricoes
    // })
   
    var resultado = simplex.maximize(this.problema,this.restricoes)
    // console.log(resultado.Z)

    if(resultado === undefined) {
      this.cabecalhos[0] = 0
      return null
    }

    if(this.operacao ==  'Minimizar') {
      resultado.Z = resultado.Z * -1
    }
    
    // console.log(resultado)
    // console.log(resultado)
  
    this.res = resultado

    Object.keys(resultado).forEach(element => {
      // console.log(element)
      if(element != 'tableaus') {
        this.cabecalhos.push(element)
      }
    }
    )
   
    for(var key in resultado) {
      if(key != 'tableaus') {  
        var obj = resultado[key];
        this.cabecalhosRes.push(obj);
      }
    }

    this.tabelas = resultado.tableaus
    // console.log(this.tabelas)
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
