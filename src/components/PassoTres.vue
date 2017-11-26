<template>
 <transition name="fade">
    <div>
        <h2 class="is-size-3 has-text-weight-bold">Resultado:</h2>
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

        <h3 class="is-size-4 has-text-weight-bold">Resolução Passo a Passo (Tableau):</h3>
        <template v-for="item,index in tabelas">
           <h3 class="is-size-5 has-text-left has-text-weight-bold">Tableau {{index+1}}</h3>
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
 </transition>
</template>

<script>
/* eslint-disable */
import simplex from 'simplex-solver'

var data = {
  cabecalhos: [],
  cabecalhosRes: [],
  res: {},
  tabelas: {}
}
export default {
  name: 'PassoTres',
  props: ['problema', 'restricoes'],
  
  data: function () {
    return data
  },
  created: function() {
    // console.log({
    //   Problema: this.problema,
    //   restricoes: this.restricoes
    // })
    var resultado = simplex.maximize(this.problema,this.restricoes)
    console.log(resultado)
    this.res = resultado
    Object.keys(resultado).forEach(element => {
      console.log(element)
      if(element != 'tableaus') {
        this.cabecalhos.push(element)
      }
    }
    )
   
    this.tabelas = resultado.tableaus
    console.log(this.tabelas)
    for(var key in resultado) {
      if(key != 'tableaus') {  
        var obj = resultado[key];
        this.cabecalhosRes.push(obj);
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
