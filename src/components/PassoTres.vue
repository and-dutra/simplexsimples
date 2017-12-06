<template>
 <transition name="fade">
    <div>
        <h2 class="is-size-3 has-text-weight-bold">Resultado:</h2>
        <p class="is-size-5">O valor otimizado de Z é {{cabecalhosRes[0]}} confira resultado completo na tabela abaixo</p>
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
          <div class="columns is-desktop is-vcentered">
              <div class="column">
                  <a class="button is-light" @click="mostrarTabelas">Mostrar passos</a>
              </div>
              <div class="column">
                  <a class="button is-light" href="./">Voltar ao inicio</a>      
              </div>
          </div>
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
               <template  v-for="cab,i in item.variables">
                  <th>
                  <span v-if="i == 0">Base</span>
                  <span v-else> {{cab}} </span>                  
                  </th>
              </template>
              </tr>
              <template  v-for="linhas,r in item.rows">
                <tr>
                <template  v-for="lin,i in linhas">
                  <td>
                    <span v-if="i == 0 && lin == 0">
                      F{{r+1}}
                    </span>
                    <span v-else-if="i == 0">
                     Z
                    </span>
                    <span v-else>
                      {{lin}}
                    </span>
                  </td>
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
         <h3 class="is-size-4 has-text-weight-bold">Análise de Sensibilidade</h3>
         <p class="is-size-5">Se o valor de Sombra for 0, serão mostrados os valores iniciais</p>
        </div> <!-- fim do if mostrar passos       -->
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
  passo: 3,
  numVariaveisDecisao: 0,
  sensibilidade: [[]],
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
    },
    irVoltar() {
      // Event.$emit('applied',{id : 1})
    },
    retornaPrecoSombra(ind) {
      // const numVD = (this.tabelas[0].rows[0].length - this.restricoes.length) - 1 + ind //Numero de variaveis de decisao
      // console.log(this.problema)
      // console.log('Sensibilidade')
      // console.log(numVD)
      // console.log(this.tabelas[this.tabelas.length-1].rows[this.tabelas[0].rows.length-1][numVD])
      return this.tabelas[this.tabelas.length-1].rows[this.tabelas[0].rows.length-1][this.numVariaveisDecisao+1+ind]
    },
    retornaLimiteMinimo(ind) {
      // console.log('Entrou no limite minimo ' + ind)
      const sombra = this.tabelas[this.tabelas.length-1].rows[this.tabelas[0].rows.length-1][this.numVariaveisDecisao+1+ind]
      const ultimaColuna = this.tabelas[0].rows[0].length-1;
      // console.log(valorDeF)
      // console.log(this.tabelas[0].rows[0].length-1)
      let minimo
      if(sombra == 0) {
        // console.log(this.tabelas[this.tabelas.length-1].rows[ind][ultimaColuna])
        return this.tabelas[this.tabelas.length-1].rows[ind][ultimaColuna]
      } else {
        
        for (let index = 0; index < this.tabelas[this.tabelas.length-1].rows.length-1; index++) {
          const funcao =  this.tabelas[this.tabelas.length-1].rows[index][this.numVariaveisDecisao+ind+1]
          if(funcao != 0) {
            const b = this.tabelas[this.tabelas.length-1].rows[index][ultimaColuna]
            const bInicial = this.tabelas[0].rows[ind][ultimaColuna]
            
            var resolve = (b*-1)/funcao + bInicial

            if(isNaN(minimo) || resolve < minimo) {
              minimo = resolve
            } 
            console.log({
              Indice: ind,
              Index : index,
              Sombra : sombra,
              B: b,
              BInicil: bInicial,
              Funcao: funcao,
              Res: resolve
            })
            console.log('fim')
          }
        }

        return minimo
      }
    },
    retornaLimiteMaximo(ind) {
      const sombra = this.tabelas[this.tabelas.length-1].rows[this.tabelas[0].rows.length-1][this.numVariaveisDecisao+1+ind]
      const ultimaColuna = this.tabelas[0].rows[0].length-1;

      // console.log({
      //   index: ind,
      //   b: this.tabelas[this.tabelas.length-1].rows[ind][ultimaColuna],
      //   f: this.tabelas[this.tabelas.length-1].rows[ind][this.numVariaveisDecisao+1+ind]
      // })

      if(sombra == 0) {
        return this.tabelas[0].rows[ind][ultimaColuna] / this.tabelas[this.tabelas.length-1].rows[ind][this.numVariaveisDecisao+1+ind]
      } else {
        
        return 777
      }
    },
    retornaValorInicial(ind) {
      const sombra = this.tabelas[this.tabelas.length-1].rows[this.tabelas[0].rows.length-1][this.numVariaveisDecisao+1+ind]
      const ultimaColuna = this.tabelas[0].rows[0].length-1;
      return this.tabelas[0].rows[ind][ultimaColuna]
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
    // console.log('ahsdf');
    // console.log(this.tabelas[0].rows)
    // console.log(this.tabelas)

    for (let index = 0; index < this.tabelas.length; index++) {
      const temp = this.tabelas[index].rows.shift()
      this.tabelas[index].rows.push(temp);          
    }


    this.numVariaveisDecisao = this.tabelas[0].rows[0].length - this.restricoes.length - 2
    // console.log(this.numVariaveisDecisao)


    //Construindo tabela de sensibilidade
    this.sensibilidade[0] = ['Recursos','Preco Sombra','Limite Minimo','Limite Maximo','Valor Inicial (B)']
    for (let index = 0; index < this.restricoes.length; index++) {
      this.sensibilidade[index+1] = ['F'+(index+1),this.retornaPrecoSombra(index),this.retornaLimiteMinimo(index),this.retornaLimiteMaximo(index),this.retornaValorInicial(index)]      
    }
    
    console.log(this.sensibilidade)
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
