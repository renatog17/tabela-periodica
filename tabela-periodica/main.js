const simbolosQuimicos = [
    "H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe",
    "Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn",
    "Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W",
    "Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf",
    "Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"
]
const simbolosQuimicosSorteados = []

function sortearNovoElemento(){
  if(simbolosQuimicos.length == simbolosQuimicosSorteados.length){
    
    return ("Todos os elementos já foram sorteados")
  }
  var elementoRandomico = simbolosQuimicos[Math.floor(Math.random()*simbolosQuimicos.length)]
  while(simbolosQuimicosSorteados.includes(elementoRandomico)){
    elementoRandomico = simbolosQuimicos[Math.floor(Math.random()*simbolosQuimicos.length)]
  }
  return elementoRandomico
}

var retornoSorteio = '';
const elementos = document.getElementsByClassName('elemento')
for(var i = 0; i<elementos.length; i++){
  elementos[i].addEventListener('click', (event)=>{
    if(event.target.textContent.trim()===retornoSorteio){
      event.target.style.color = 'black'
      simbolosQuimicosSorteados.push(retornoSorteio)
    }
  })
}
const btnNovoElemento = document.getElementById('novo-elemento-btn')
btnNovoElemento.addEventListener('click', (event)=>{
  event.preventDefault()
  retornoSorteio = sortearNovoElemento()
  if(retornoSorteio.length>10){
    btnNovoElemento.style.display = 'none'
  }
  const divElementoSorteado = document.getElementById('elemento-sorteado')
  divElementoSorteado.querySelector('p').innerHTML = retornoSorteio
})