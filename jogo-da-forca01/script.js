let ListaDinamica = []
let palavraSecretaCategoria
let palavraSecretaSorteada

const palavras = [
  (palavra001 = {
    nome: "CANASVIEIRAS",
    categoria: "LUGARES",
  }),
  (palavra002 = {
    nome: "JOINVILLE",
    categoria: "LUGARES",
  }),
  (palavra003 = {
    nome: "SAMBAQUI",
    categoria: "LUGARES",
  }),
  (palavra004 = {
    nome: "KOBRASOL",
    categoria: "LUGARES",
  }),
  (palavra005 = {
    nome: "CARVOEIRA",
    categoria: "LUGARES",
  }),
  (palavra006 = {
    nome: "LAGES",
    categoria: "LUGARES",
  }),
  (palavra007 = {
    nome: "TAPERA",
    categoria: "LUGARES",
  }),
  (palavra008 = {
    nome: "BARREIROS",
    categoria: "LUGARES",
  }),
  (palavra009 = {
    nome: "DANIELA",
    categoria: "LUGARES",
  }),
  (palavra010 = {
    nome: "BRUSQUE",
    categoria: "LUGARES",
  }),
  (palavra011 = {
    nome: "PANTANAL",
    categoria: "LUGARES",
  }),
  (palavra012 = {
    nome: "CAMPINAS",
    categoria: "LUGARES",
  }),
  (palavra013 = {
    nome: "AÇORES",
    categoria: "LUGARES",
  }),
  (palavra014 = {
    nome: "RESSACADA",
    categoria: "LUGARES",
  }),
  (palavra015 = {
    nome: "FORQUILHINHAS",
    categoria: "LUGARES",
  }),
  (palavra016 = {
    nome: "INGLESES",
    categoria: "LUGARES",
  }),
  (palavra017 = {
    nome: "BLUMENAU",
    categoria: "LUGARES",
  }),
  (palavra018 = {
    nome: "CAMPECHE",
    categoria: "LUGARES",
  }),
  (palavra019 = {
    nome: "ROÇADO",
    categoria: "LUGARES",
  }),
  (palavra020 = {
    nome: "RATONES",
    categoria: "LUGARES",
  }),
  (palavra021 = {
    nome: "JOAÇABA",
    categoria: "LUGARES",
  }),
  (palavra022 = {
    nome: "ITACORUBI",
    categoria: "LUGARES",
  }),
  (palavra023 = {
    nome: "PALHOÇA",
    categoria: "LUGARES",
  }),
  (palavra024 = {
    nome: "LAGOA",
    categoria: "LUGARES",
  }),
  (palavra025 = {
    nome: "NAVEGANTES",
    categoria: "LUGARES",
  }),
  (palavra026 = {
    nome: "SANTINHO",
    categoria: "LUGARES",
  }),
  (palavra027 = {
    nome: "BIGUAÇU",
    categoria: "LUGARES",
  }),
  (palavra028 = {
    nome: "COLONINHA",
    categoria: "LUGARES",
  }),
  (palavra029 = {
    nome: "ITAPEMA",
    categoria: "LUGARES",
  }),
  (palavra030 = {
    nome: "CARIANOS",
    categoria: "LUGARES",
  }),
  (palavra031 = {
    nome: "BRASIL",
    categoria: "LUGARES",
  }),
  (palavra032 = {
    nome: "TIJUCAS",
    categoria: "LUGARES",
  }),
  (palavra033 = {
    nome: "ITAGUAÇU",
    categoria: "LUGARES",
  }),
  (palavra034 = {
    nome: "MARIA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra035 = {
    nome: "RAQUEL",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra036 = {
    nome: "SEBASTIANA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra037 = {
    nome: "MARCELO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra038 = {
    nome: "ALEXANDRE",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra039 = {
    nome: "BARBARA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra040 = {
    nome: "LUANA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra041 = {
    nome: "NICOLAS",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra042 = {
    nome: "SOPHIA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra043 = {
    nome: "ANGELA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra044 = {
    nome: "RICARDO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra045 = {
    nome: "MIGUEL",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra046 = {
    nome: "RODRIGO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra047 = {
    nome: "GABRIEL",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra048 = {
    nome: "ELIZA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra049 = {
    nome: "HENRIQUE",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra050 = {
    nome: "GUILHERME",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra051 = {
    nome: "LEONARDO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra052 = {
    nome: "PAOLA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra053 = {
    nome: "THEO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra054 = {
    nome: "EDUARDO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra055 = {
    nome: "FRANCISCO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra056 = {
    nome: "FERNANDO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra057 = {
    nome: "TEREZINHA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra058 = {
    nome: "LUCIANO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra059 = {
    nome: "PAMELA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra060 = {
    nome: "RAIMUNDA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra061 = {
    nome: "BRUNA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra062 = {
    nome: "ADRIANA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra063 = {
    nome: "CARLOS",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra064 = {
    nome: "SANDRA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra065 = {
    nome: "DANIEL",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra066 = {
    nome: "MARCIA",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra067 = {
    nome: "PAULO",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra068 = {
    nome: "ELIAS",
    categoria: "NOME DE PESSOAS",
  }),
  (palavra069 = {
    nome: "CADERNO",
    categoria: "OBJETOS",
  }),
  (palavra070 = {
    nome: "CANETA",
    categoria: "OBJETOS",
  }),
  (palavra071 = {
    nome: "CELULAR",
    categoria: "OBJETOS",
  }),
  (palavra072 = {
    nome: "ESCOVA",
    categoria: "OBJETOS",
  }),
  (palavra073 = {
    nome: "BRINCO",
    categoria: "OBJETOS",
  }),
  (palavra074 = {
    nome: "CAPACETE",
    categoria: "OBJETOS",
  }),
  (palavra075 = {
    nome: "LIVRO",
    categoria: "OBJETOS",
  }),
  (palavra076 = {
    nome: "LUVA",
    categoria: "OBJETOS",
  }),
  (palavra077 = {
    nome: "MARRETA",
    categoria: "OBJETOS",
  }),
  (palavra078 = {
    nome: "MICROFONE",
    categoria: "OBJETOS",
  }),
  (palavra079 = {
    nome: "PULSEIRA",
    categoria: "OBJETOS",
  }),
  (palavra080 = {
    nome: "REVISTA",
    categoria: "OBJETOS",
  }),
  (palavra081 = {
    nome: "PENTE",
    categoria: "OBJETOS",
  }),
  (palavra082 = {
    nome: "CHAVE",
    categoria: "OBJETOS",
  }),
  (palavra083 = {
    nome: "SOMBRINHA",
    categoria: "OBJETOS",
  }),
  (palavra084 = {
    nome: "TESOURA",
    categoria: "OBJETOS",
  }),
  (palavra085 = {
    nome: "LANTERNA",
    categoria: "OBJETOS",
  }),
  (palavra086 = {
    nome: "SACOLA",
    categoria: "OBJETOS",
  }),
  (palavra087 = {
    nome: "VASO",
    categoria: "OBJETOS",
  }),
  (palavra088 = {
    nome: "AGENDA",
    categoria: "OBJETOS",
  }),
  (palavra089 = {
    nome: "CARIMBO",
    categoria: "OBJETOS",
  }),
  (palavra090 = {
    nome: "SABONETEIRA",
    categoria: "OBJETOS",
  }),
  (palavra091 = {
    nome: "ESTOJO",
    categoria: "OBJETOS",
  }),
  (palavra092 = {
    nome: "ANEL",
    categoria: "OBJETOS",
  }),
  (palavra093 = {
    nome: "CARTEIRA",
    categoria: "OBJETOS",
  }),
  (palavra094 = {
    nome: "ESPELHO",
    categoria: "OBJETOS",
  }),
  (palavra095 = {
    nome: "BOLA",
    categoria: "OBJETOS",
  }),
  (palavra096 = {
    nome: "ALICATE",
    categoria: "OBJETOS",
  }),
  (palavra097 = {
    nome: "CHAVEIRO",
    categoria: "OBJETOS",
  }),
  (palavra098 = {
    nome: "BORRACHA",
    categoria: "OBJETOS",
  }),
  (palavra099 = {
    nome: "APITO",
    categoria: "OBJETOS",
  }),
  (palavra100 = {
    nome: "AGULHA",
    categoria: "OBJETOS",
  }),
  (palavra101 = {
    nome: "BANANA",
    categoria: "FRUTAS",
  }),
  (palavra102 = {
    nome: "GOIABA",
    categoria: "FRUTAS",
  }),
  (palavra103 = {
    nome: "CARAMBOLA",
    categoria: "FRUTAS",
  }),
  (palavra104 = {
    nome: "LARANJA",
    categoria: "FRUTAS",
  }),
  (palavra105 = {
    nome: "ABACATE",
    categoria: "FRUTAS",
  }),
  (palavra106 = {
    nome: "ABACAXI",
    categoria: "FRUTAS",
  }),
  (palavra107 = {
    nome: "ACEROLA",
    categoria: "FRUTAS",
  }),
  (palavra108 = {
    nome: "AMORA",
    categoria: "FRUTAS",
  }),
  (palavra109 = {
    nome: "CAJU",
    categoria: "FRUTAS",
  }),
  (palavra110 = {
    nome: "CEREJA",
    categoria: "FRUTAS",
  }),
  (palavra111 = {
    nome: "GRAVIOLA",
    categoria: "FRUTAS",
  }),
  (palavra112 = {
    nome: "CAQUI",
    categoria: "FRUTAS",
  }),
  (palavra113 = {
    nome: "MANGA",
    categoria: "FRUTAS",
  }),
  (palavra114 = {
    nome: "MELANCIA",
    categoria: "FRUTAS",
  }),
  (palavra115 = {
    nome: "VERGAMOTA",
    categoria: "FRUTAS",
  }),
  (palavra116 = {
    nome: "TANGERINA",
    categoria: "FRUTAS",
  }),
  (palavra117 = {
    nome: "JACA",
    categoria: "FRUTAS",
  }),
  (palavra118 = {
    nome: "AMEIXA",
    categoria: "FRUTAS",
  }),
  (palavra119 = {
    nome: "MORANGO",
    categoria: "FRUTAS",
  }),
  (palavra120 = {
    nome: "CARAMBOLA",
    categoria: "FRUTAS",
  }),
  (palavra121 = {
    nome: "JABUTICABA",
    categoria: "FRUTAS",
  }),
  (palavra122 = {
    nome: "PITAIA",
    categoria: "FRUTAS",
  }),
  (palavra123 = {
    nome: "PITANGA",
    categoria: "FRUTAS",
  }),
  (palavra124 = {
    nome: "GRAOSELHA",
    categoria: "FRUTAS",
  }),
  (palavra125 = {
    nome: "CUPUAÇU",
    categoria: "FRUTAS",
  }),
  (palavra126 = {
    nome: "FRAMBOESA",
    categoria: "FRUTAS",
  }),
  (palavra127 = {
    nome: "PERA",
    categoria: "FRUTAS",
  }),
  (palavra128 = {
    nome: "UVA",
    categoria: "FRUTAS",
  }),
  (palavra129 = {
    nome: "FIGO",
    categoria: "FRUTAS",
  }),
  (palavra130 = {
    nome: "AVESTRUZ",
    categoria: "ANIMAIS",
  }),
  (palavra131 = {
    nome: "CAMELO",
    categoria: "ANIMAIS",
  }),
  (palavra132 = {
    nome: "BALEIA",
    categoria: "ANIMAIS",
  }),
  (palavra133 = {
    nome: "BORBOLETA",
    categoria: "ANIMAIS",
  }),
  (palavra134 = {
    nome: "BURRO",
    categoria: "ANIMAIS",
  }),
  (palavra135 = {
    nome: "CACHORRO",
    categoria: "ANIMAIS",
  }),
  (palavra136 = {
    nome: "GATO",
    categoria: "ANIMAIS",
  }),
  (palavra137 = {
    nome: "CAMELO",
    categoria: "ANIMAIS",
  }),
  (palavra138 = {
    nome: "CAVALO",
    categoria: "ANIMAIS",
  }),
  (palavra139 = {
    nome: "COBRA",
    categoria: "ANIMAIS",
  }),
  (palavra140 = {
    nome: "ELEFANTE",
    categoria: "ANIMAIS",
  }),
  (palavra141 = {
    nome: "GAIVOTA",
    categoria: "ANIMAIS",
  }),
  (palavra142 = {
    nome: "GANSO",
    categoria: "ANIMAIS",
  }),
  (palavra143 = {
    nome: "JARARACA",
    categoria: "ANIMAIS",
  }),
  (palavra144 = {
    nome: "JUMENTO",
    categoria: "ANIMAIS",
  }),
  (palavra145 = {
    nome: "JAVALI",
    categoria: "ANIMAIS",
  }),
  (palavra146 = {
    nome: "PORCO",
    categoria: "ANIMAIS",
  }),
  (palavra147 = {
    nome: "PINGUIN",
    categoria: "ANIMAIS",
  }),
  (palavra148 = {
    nome: "MACACO",
    categoria: "ANIMAIS",
  }),
  (palavra149 = {
    nome: "MARRECO",
    categoria: "ANIMAIS",
  }),
  (palavra150 = {
    nome: "PANDA",
    categoria: "ANIMAIS",
  }),
  (palavra151 = {
    nome: "PANTERA",
    categoria: "ANIMAIS",
  }),
  (palavra152 = {
    nome: "RATO",
    categoria: "ANIMAIS",
  }),
  (palavra153 = {
    nome: "RAPOSA",
    categoria: "ANIMAIS",
  }),
  (palavra154 = {
    nome: "TIGRE",
    categoria: "ANIMAIS",
  }),
  (palavra155 = {
    nome: "URUBU",
    categoria: "ANIMAIS",
  }),
  (palavra156 = {
    nome: "ZEBRA",
    categoria: "ANIMAIS",
  }),
  (palavra157 = {
    nome: "CARNEIRO",
    categoria: "ANIMAIS",
  }),
  (palavra158 = {
    nome: "PATO",
    categoria: "ANIMAIS",
  }),
  (palavra159 = {
    nome: "PERERECA",
    categoria: "ANIMAIS",
  }),
  (palavra160 = {
    nome: "TUCANO",
    categoria: "ANIMAIS",
  }),
  (palavra161 = {
    nome: "TOURO",
    categoria: "ANIMAIS",
  }),
  (palavra162 = {
    nome: "VACA",
    categoria: "ANIMAIS",
  }),
  (palavra163 = {
    nome: "TATU",
    categoria: "ANIMAIS",
  }),
]
criarPalavraSecreta()
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length)

  palavraSecretaSorteada = palavras[indexPalavra].nome
  palavraSecretaCategoria = palavras[indexPalavra].categoria
  console.log(palavraSecretaSorteada)
  console.log(palavraSecretaCategoria)
}
montarPalavraNaTela()
function montarPalavraNaTela() {
  const categoria = document.getElementById("categoria")
  categoria.innerHTML = palavraSecretaCategoria

  const palavraTela = document.getElementById("palavra-secreta")
  palavraTela.innerHTML = ""

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (ListaDinamica[i] == undefined) {
      ListaDinamica[i] = "&nbsp;"
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        ListaDinamica[i] +
        "</div>"
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        ListaDinamica[i] +
        "</div>"
    }
  }
}
