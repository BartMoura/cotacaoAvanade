const carregaCotacoes = async () => {

    const resposta = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=6e1903620a2342cf1bc5961349490a53') // consulta API
    let cotacoes = await resposta.json() // transforma resposta da API para JSON
    console.log(cotacoes.rates) // imprimindo
    mostraCotacoes(cotacoes.rates) // chamando a função que vai no HTML
    cotacaoPrincipal(cotacoes.rates) // 
}


//função para adicionar dinamicamente os valores da API no HTML
function mostraCotacoes(rates) {
    console.log(rates)
    let moedas = Object.keys(rates)
    let value = Object.values(rates)
    let conteudo = ""
    for (let index = 0; index < moedas.length; index++) {
        conteudo += `  <article>
     <h2>${moedas[index]}</h2>
     <span>${value[index]}</span>
        </article>`
    }
    document.getElementById("outrasCotacoes").innerHTML = conteudo;
}

cotacaoPrincipal = (rates) => {
   document.getElementById("cotacaoPrincipal").innerHTML = rates["BRL"];
}

carregaCotacoes()

