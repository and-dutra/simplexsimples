webpackJsonp([1],{"2KHX":function(e,t){},"8tcU":function(e,t){},AF3X:function(e,t){},NHnr:function(e,t,s){"use strict";function a(e){s("gu2T")}function i(e){s("2KHX")}function n(e){s("p8EF")}function r(e){s("c+cX")}function o(e){s("AF3X")}function l(e){s("y2LG")}function c(e){s("8tcU")}Object.defineProperty(t,"__esModule",{value:!0});var u=s("7+uW"),v={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("h2",[e._v("Essential Links")]),e._v(" "),e._m(0,!1,!1),e._v(" "),s("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1,!1,!1)])},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),s("br"),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}],p={render:d,staticRenderFns:m},_=p,h=s("VU/8"),f=a,b=h(v,_,!1,f,"data-v-4241e014",null),g=b.exports,x={name:"Baixo",data:function(){return{msg:"Welcome to Your Vue.js App"}}},C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0,!1,!1)},F=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-4"},[e._v("O que é um Simplex")]),e._v(" "),s("p",[e._v("Simplex é um algoritmo criado por George Dantzig que viabiliza a solução de muitos problemas da programação linear. Bastante popular, encontra boa aceitação em áreas onde diversas necessidades e restrições influenciam em um valor que precisa ser aumentado ou diminuído ao máximo.")])]),e._v(" "),s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-4"},[e._v("Tipos de Problema")]),e._v(" "),s("p",[e._v("Embora os exemplos quase sempre sejam de maximização, o Simplex também soluciona casos em que se deseja encontrar o menor valor possível. Custos e gastos são alguns dos resultados comumente buscados nestas situações.")])]),e._v(" "),s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-4"},[e._v("Tableau")]),e._v(" "),s("p",[e._v("Já implementado em diversas linguagens diferentes, o Simplex também pode ser aplicado manualmente. O método, conhecido como Tableau, consiste em se colocar todas as informações devidamente organizadas em um quadro, fazendo-se exatamente o que um software faria.")])])])])}],y={render:C,staticRenderFns:F},R=y,w=s("VU/8"),k=i,z=w(x,R,!1,k,"data-v-4884b6f6",null),E=z.exports,P=s("XtOE"),D=s.n(P),j={titulo:"Seja bem vindo ao simplex simples",subtitulo:"Resolva seus simples de maneira simples e intuitivo"},$=D.a.maximize("2x + 3y + 4z",["3x + -2y + z <= 10","2x + 5y + 3z <= 15"]);console.log($);var U={name:"Inicio",data:function(){return j},methods:{pegaClique:function(e){Event.$emit("applied")}}},T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",{staticClass:"title"},[e._v("\n        "+e._s(e.titulo)+"\n    ")]),e._v(" "),s("h2",{staticClass:"subtitle"},[e._v("\n        "+e._s(e.subtitulo)+"\n    ")]),e._v(" "),s("a",{staticClass:"button is-large is-dark",on:{click:e.pegaClique}},[e._v("Resolver Simplex")])])},S=[],q={render:T,staticRenderFns:S},A=q,V=s("VU/8"),N=n,X=V(U,A,!1,N,"data-v-09e45a92",null),B=X.exports,H=s("RRo+"),L=s.n(H),W=s("fZjL"),M=s.n(W),O={cabecalhos:[],cabecalhosRes:[],res:{},tabelas:{}},G={name:"PassoTres",props:["problema","restricoes"],data:function(){return O},created:function(){var e=this,t=D.a.maximize(this.problema,this.restricoes);console.log(t),this.res=t,M()(t).forEach(function(t){console.log(t),"tableaus"!=t&&e.cabecalhos.push(t)}),this.tabelas=t.tableaus,console.log(this.tabelas);for(var s in t)if("tableaus"!=s){var a=t[s];this.cabecalhosRes.push(a)}}},I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[s("div",[s("h2",{staticClass:"is-size-3 has-text-weight-bold"},[e._v("Resultado:")]),e._v(" "),s("table",{staticClass:"table is-bordered"},[s("thead",[s("tr",[e._l(e.cabecalhos,function(t,a){return[s("th",[e._v(e._s(e.cabecalhos[a]))])]})],2)]),e._v(" "),s("tbody",[s("tr",[e._l(e.cabecalhos,function(t,a){return[s("th",[e._v(e._s(e.cabecalhosRes[a]))])]})],2)])]),e._v(" "),s("h3",{staticClass:"is-size-4 has-text-weight-bold"},[e._v("Resolução Passo a Passo (Tableau):")]),e._v(" "),e._l(e.tabelas,function(t,a){return[s("h3",{staticClass:"is-size-5 has-text-left has-text-weight-bold"},[e._v("Tableau "+e._s(a+1))]),e._v(" "),s("table",{staticClass:"table is-bordered"},[s("thead",[s("tr",[e._l(t.variables,function(t){return[s("th",[e._v(e._s(t))])]})],2),e._v(" "),e._l(t.rows,function(t){return[s("tr",[e._l(t,function(t){return[s("td",[e._v(e._s(t))])]})],2)]})],2),e._v(" "),s("tbody")]),e._v(" "),null!=t.pivot?s("div",[s("p",{staticClass:"pivo"},[e._v("Pivo: \n          "),e._l(t.pivot,function(t,a,i){return[0==i?s("span",[e._v("\n                  Linha "+e._s(t)+"\n                ")]):s("span",[e._v("\n                  Coluna "+e._s(t)+"\n                ")])]})],2)]):e._e()]})],2)])},Q=[],J={render:I,staticRenderFns:Q},K=J,Y=s("VU/8"),Z=r,ee=Y(G,K,!1,Z,"data-v-4acfe01f",null),te=ee.exports,se={inputsFunc:[],restricoesFunc:[[]],textoFunc:"",resultado:{},arrayRest:[],disabled:!0,resolvido:!1},ae={name:"PassoDois",props:["restricoes","variaveis","operacao"],components:{PassoTres:te},data:function(){return se},created:function(){this.preencherArray()},methods:{preencherArray:function(){var e=this;this.restricoesFunc=Array(this.restricoes).fill(0).map(function(){return Array(e.variaveis+2).fill("0")})},resolver:function(){disabled||(this.inputsFunc.forEach(this.recebeFuncao),this.recebeRestricoes())},recebeFuncao:function(e,t,s){this.textoFunc+=String(e)+"x"+String(t+1),t+1!=this.inputsFunc.length&&(this.textoFunc+=" + ")},recebeRestricoes:function(){this.arrayRest=[];for(var e=0;e<this.restricoes;e++){for(var t="",s=0;s<this.restricoesFunc[e].length;s++)s<this.variaveis?t+=String(this.restricoesFunc[e][s])+"x"+String(s+1):t+=String(this.restricoesFunc[e][s]),s<this.variaveis-1?t+=" + ":s==this.variaveis-1&&(t+=" <= ");this.arrayRest.push(t)}this.resolvido=!0},ativaBotaoRestricoes:function(){for(var e=0;e<this.restricoes;e++){var t=this.restricoesFunc[e][this.variaveis];if(0==t||isNaN(t))return!1}return!0},isDisabled:function(e){var t=!1;t=this.variaveis==this.inputsFunc.length,t=this.ativaBotaoRestricoes(),this.disabled=!t}}},ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.resolvido?s("div",[s("PassoTres",{attrs:{problema:e.textoFunc,restricoes:e.arrayRest}})],1):s("div",[s("h2",{staticClass:"is-size-3 has-text-weight-bold"},[e._v("Função:")]),e._v(" "),s("div",{staticClass:"level field is-grouped is-grouped-multiline"},[e._l(e.variaveis,function(t,a){return[s("p",{key:a,staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.inputsFunc[a],expression:"inputsFunc[index]",modifiers:{number:!0}}],staticClass:"input pequeno",attrs:{type:"number"},domProps:{value:e.inputsFunc[a]},on:{keyup:e.isDisabled,input:function(t){t.target.composing||e.$set(e.inputsFunc,a,e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),s("p",{key:a,staticClass:"control has-text-weight-bold\thas-text-white is-size-4"},[e._v(" X"+e._s(t)+" "),t!=e.variaveis?s("span",[e._v("+")]):e._e()])]})],2),e._v(" "),s("h2",{staticClass:"is-size-3 has-text-weight-bold"},[e._v("Restricoes:")]),e._v(" "),e._l(e.restricoes,function(t,a){return[s("div",{staticClass:"level field is-grouped is-grouped-multiline"},[e._l(e.variaveis+1,function(t,i){return[s("p",{staticClass:"control"},[i==e.variaveis?s("span",{staticClass:"control has-text-weight-bold\thas-text-white is-size-4"},[e._v("\n               <=\n              ")]):e._e(),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.restricoesFunc[a][i],expression:"restricoesFunc[key][key2]"}],staticClass:"input pequeno",attrs:{type:"number",placeholder:""},domProps:{value:e.restricoesFunc[a][i]},on:{keyup:e.isDisabled,input:function(t){t.target.composing||e.$set(e.restricoesFunc[a],i,t.target.value)}}})]),e._v(" "),s("p",{staticClass:"control has-text-weight-bold\thas-text-white is-size-4"},[i!=e.variaveis?s("span",[e._v("\n               X"+e._s(t)+"\n              ")]):e._e(),e._v(" "),i<e.variaveis-1?s("span",[e._v("\n               + \n              ")]):e._e()])]})],2)]}),e._v(" "),s("a",{staticClass:"button is-large is-dark",attrs:{disabled:e.disabled},on:{click:e.resolver}},[e._v("Resolver")])],2)])},ne=[],re={render:ie,staticRenderFns:ne},oe=re,le=s("VU/8"),ce=o,ue=le(ae,oe,!1,ce,"data-v-89d016c6",null),ve=ue.exports,de={numDec:null,numRes:null,disabled:!0,operacao:"Maximizar",step2:!1},me={name:"PassoUm",components:{PassoDois:ve},data:function(){return de},methods:{isDisabled:function(e){L()(this.numDec)&&L()(this.numRes)?this.disabled=!1:this.disabled=!0},irProx:function(e){this.disabled||(this.step2=!0)}}},pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"columns is-centered"},[e.step2?[s("PassoDois",{attrs:{variaveis:e.numDec,restricoes:e.numRes,operacao:e.operacao}})]:[s("div",{staticClass:"column is-one-third"},[s("h1",{staticClass:"title"},[e._v("\n                Vamos começar!\n            ")]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Quantas variáveis de decisão?")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.numDec,expression:"numDec",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",placeholder:"ex: 3"},domProps:{value:e.numDec},on:{keyup:e.isDisabled,input:function(t){t.target.composing||(e.numDec=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Quantas variavéis de restrição?")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.numRes,expression:"numRes",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",placeholder:"ex: 2"},domProps:{value:e.numRes},on:{keyup:e.isDisabled,input:function(t){t.target.composing||(e.numRes=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Quantas variavéis de restrição?")]),e._v(" "),s("div",{staticClass:"control"},[s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.operacao,expression:"operacao"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.operacao=t.target.multiple?s:s[0]}}},[s("option",[e._v("Maximizar")]),e._v(" "),s("option",[e._v("Minimizar")])])])])]),e._v(" "),s("a",{staticClass:"button is-large is-dark",attrs:{disabled:e.disabled},on:{click:e.irProx}},[e._v("Continuar")])])]],2)])},_e=[],he={render:pe,staticRenderFns:_e},fe=he,be=s("VU/8"),ge=l,xe=be(me,fe,!1,ge,"data-v-7f8a0790",null),Ce=xe.exports,Fe={titulo:"Seja bem vindo ao simplex simples",subtitulo:"Resolva seus simples de maneira simples e intuitivo",passo:1},ye={name:"app",components:{HelloWorld:g,PassoUm:Ce,Inicio:B,Baixo:E},data:function(){return Fe},created:function(){console.log(this.passo),Event.$on("applied",this.handler)},methods:{handler:function(e){this.passo=2}}},Re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"hero is-medium is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"container has-text-centered"},[1==e.passo?s("div",[s("Inicio")],1):s("div",[s("PassoUm")],1)])])],1)]),e._v(" "),s("Baixo")],1)},we=[],ke={render:Re,staticRenderFns:we},ze=ke,Ee=s("VU/8"),Pe=c,De=Ee(ye,ze,!1,Pe,null,null),je=De.exports;window.Event=new u.a,u.a.config.productionTip=!1,new u.a({el:"#app",template:"<App/>",components:{App:je}})},"c+cX":function(e,t){},gu2T:function(e,t){},p8EF:function(e,t){},y2LG:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7624a5f1d29683ba0bca.js.map