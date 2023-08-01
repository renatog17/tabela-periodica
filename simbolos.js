const elementosQuimicos = [
  { simbolo: "H", familia: 1, grupo:'nao-metais' },
  { simbolo: "He", familia: 18, grupo: 'gases-nobres'},
  { simbolo: "Li", familia: 1, grupo: 'metais-alcalinos' },
  { simbolo: "Be", familia: 2, grupo: 'metais-alcalinos-terrosos' },
  { simbolo: "B", familia: 13,grupo:'semimetais' },
  { simbolo: "C", familia: 14, grupo:'nao-metais'},
  { simbolo: "N", familia: 15, grupo:'nao-metais' },
  { simbolo: "O", familia: 16, grupo:'nao-metais' },
  { simbolo: "F", familia: 17, grupo:'nao-metais' },
  { simbolo: "Ne", familia: 18, grupo: 'gases-nobres'},
  { simbolo: "Na", familia: 1 , grupo: 'metais-alcalinos'},
  { simbolo: "Mg", familia: 2, grupo: 'metais-alcalinos-terrosos'},
  { simbolo: "Al", familia: 13, grupo: 'metais-representativos' },
  { simbolo: "Si", familia: 14 ,grupo:'semimetais'},
  { simbolo: "P", familia: 15, grupo:'nao-metais' },
  { simbolo: "S", familia: 16, grupo:'nao-metais' },
  { simbolo: "Cl", familia: 17, grupo:'nao-metais' },
  { simbolo: "Ar", familia: 18, grupo: 'gases-nobres'},
  { simbolo: "K", familia: 1, grupo: 'metais-alcalinos' },
  { simbolo: "Ca", familia: 2, grupo: 'metais-alcalinos-terrosos' },
  { simbolo: "Sc", familia: 3,grupo:'metais-de-transicao'},
  { simbolo: "Ti", familia: 4,grupo:'metais-de-transicao' },
  { simbolo: "V", familia: 5,grupo:'metais-de-transicao' },
  { simbolo: "Cr", familia: 6,grupo:'metais-de-transicao'},
  { simbolo: "Mn", familia: 7,grupo:'metais-de-transicao' },
  { simbolo: "Fe", familia: 8 ,grupo:'metais-de-transicao'},
  { simbolo: "Co", familia: 9,grupo:'metais-de-transicao' },
  { simbolo: "Ni", familia: 10,grupo:'metais-de-transicao' },
  { simbolo: "Cu", familia: 11,grupo:'metais-de-transicao' },
  { simbolo: "Zn", familia: 12,grupo:'metais-de-transicao' },
  { simbolo: "Ga", familia: 13 , grupo: 'metais-representativos'},
  { simbolo: "Ge", familia: 14,grupo:'semimetais' },
  { simbolo: "As", familia: 15 ,grupo:'semimetais'},
  { simbolo: "Se", familia: 16, grupo:'nao-metais' },
  { simbolo: "Br", familia: 17, grupo:'nao-metais' },
  { simbolo: "Kr", familia: 18, grupo: 'gases-nobres' },
  { simbolo: "Rb", familia: 1, grupo: 'metais-alcalinos' },
  { simbolo: "Sr", familia: 2, grupo: 'metais-alcalinos-terrosos' },
  { simbolo: "Y", familia: 3,grupo:'metais-de-transicao' },
  { simbolo: "Zr", familia: 4,grupo:'metais-de-transicao' },
  { simbolo: "Nb", familia: 5,grupo:'metais-de-transicao' },
  { simbolo: "Mo", familia: 6,grupo:'metais-de-transicao' },
  { simbolo: "Tc", familia: 7,grupo:'metais-de-transicao' },
  { simbolo: "Ru", familia: 8,grupo:'metais-de-transicao' },
  { simbolo: "Rh", familia: 9,grupo:'metais-de-transicao' },
  { simbolo: "Pd", familia: 10,grupo:'metais-de-transicao' },
  { simbolo: "Ag", familia: 11,grupo:'metais-de-transicao' },
  { simbolo: "Cd", familia: 12,grupo:'metais-de-transicao' },
  { simbolo: "In", familia: 13 , grupo: 'metais-representativos'},
  { simbolo: "Sn", familia: 14 , grupo: 'metais-representativos'},
  { simbolo: "Sb", familia: 15 ,grupo:'semimetais'},
  { simbolo: "Te", familia: 16 ,grupo:'semimetais'},
  { simbolo: "I", familia: 17, grupo:'nao-metais' },
  { simbolo: "Xe", familia: 18, grupo: 'gases-nobres' },
  { simbolo: "Cs", familia: 1, grupo: 'metais-alcalinos' },
  { simbolo: "Ba", familia: 2 , grupo: 'metais-alcalinos-terrosos'},
  { simbolo: "La", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Ce", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Pr", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Nd", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Pm", familia: 'lantanoides', grupo:'lantanoides'},
  { simbolo: "Sm", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Eu", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Gd", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Tb", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Dy", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Ho", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Er", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Tm", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Yb", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Lu", familia: 'lantanoides', grupo:'lantanoides' },
  { simbolo: "Hf", familia: 4 ,grupo:'metais-de-transicao'},
  { simbolo: "Ta", familia: 5,grupo:'metais-de-transicao' },
  { simbolo: "W", familia: 6,grupo:'metais-de-transicao' },
  { simbolo: "Re", familia: 7,grupo:'metais-de-transicao' },
  { simbolo: "Os", familia: 8,grupo:'metais-de-transicao' },
  { simbolo: "Ir", familia: 9,grupo:'metais-de-transicao' },
  { simbolo: "Pt", familia: 10,grupo:'metais-de-transicao' },
  { simbolo: "Au", familia: 11 ,grupo:'metais-de-transicao'},
  { simbolo: "Hg", familia: 12 ,grupo:'metais-de-transicao'},
  { simbolo: "Tl", familia: 13, grupo: 'metais-representativos'},
  { simbolo: "Pb", familia: 14, grupo: 'metais-representativos'},
  { simbolo: "Bi", familia: 15, grupo: 'metais-representativos'},
  { simbolo: "Po", familia: 16, grupo: 'metais-representativos'},
  { simbolo: "At", familia: 17,grupo:'semimetais' },
  { simbolo: "Rn", familia: 18, grupo: 'gases-nobres' },
  { simbolo: "Fr", familia: 1, grupo: 'metais-alcalinos' },
  { simbolo: "Ra", familia: 2, grupo: 'metais-alcalinos-terrosos' },
  { simbolo: "Ac", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Th", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Pa", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "U", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Np", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Pu", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Am", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Cm", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Bk", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Cf", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Es", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Fm", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Md", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "No", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Lr", familia: 'actinoides', grupo:'actinoides' },
  { simbolo: "Rf", familia: 4 ,grupo:'metais-de-transicao'},
  { simbolo: "Db", familia: 5 ,grupo:'metais-de-transicao'},
  { simbolo: "Sg", familia: 6,grupo:'metais-de-transicao' },
  { simbolo: "Bh", familia: 7,grupo:'metais-de-transicao' },
  { simbolo: "Hs", familia: 8,grupo:'metais-de-transicao' },
  { simbolo: "Mt", familia: 9,grupo:'metais-de-transicao' },
  { simbolo: "Ds", familia: 10,grupo:'metais-de-transicao' },
  { simbolo: "Rg", familia: 11,grupo:'metais-de-transicao' },
  { simbolo: "Cn", familia: 12,grupo:'metais-de-transicao' },
  { simbolo: "Nh", familia: 13, grupo: 'metais-representativos' },
  { simbolo: "Fl", familia: 14, grupo: 'metais-representativos' },
  { simbolo: "Mc", familia: 15, grupo: 'metais-representativos' },
  { simbolo: "Lv", familia: 16, grupo: 'metais-representativos' },
  { simbolo: "Ts", familia: 17, grupo: 'metais-representativos' },
  { simbolo: "Og", familia: 18, grupo: 'gases-nobres' },
  
  { simbolo: "57-71", familia:3, grupo:'lantanoides' },
  { simbolo: "89-103", familia: 3, grupo: 'actinoides' },
];

function criarDivFamilias(tabelaPeriodoca){
  for(i = 0; i<18;i++){
    const novaDivFamilia = document.createElement('div')
    novaDivFamilia.classList.add('familia')
    novaDivFamilia.id = i+1
    tabelaPeriodoca.appendChild(novaDivFamilia)
  }
}
function criarDivElementosAParte(elementosAparte){
  const novaDivFamilia = document.createElement('div')
  novaDivFamilia.classList.add(elementosAparte)
  novaDivFamilia.id = elementosAparte
  const familiaAParte = document.getElementById(elementosAparte)
  familiaAParte.appendChild(novaDivFamilia)
}

function adicionarEventoClickAElementos(event){
  event.preventDefault()
  console.log(event.target.textContent.trim())
}

function adicionarElementosQuimicosAoDom(){
  for(var i= 0;i<elementosQuimicos.length; i++){
    const novaDivElemento = document.createElement('div')
    novaDivElemento.innerHTML = elementosQuimicos[i].simbolo
    novaDivElemento.classList.add('elemento')
    novaDivElemento.classList.add(elementosQuimicos[i].grupo)
    const familia = document.getElementById(elementosQuimicos[i].familia)
    novaDivElemento.addEventListener('click', adicionarEventoClickAElementos) //essa aqui 
    familia.appendChild(novaDivElemento)
  }
}

//
const tabelaPeriodoca = document.getElementById("parte-principal")
criarDivFamilias(tabelaPeriodoca)
criarDivElementosAParte('lantanoides')
criarDivElementosAParte('actinoides')
adicionarElementosQuimicosAoDom()




