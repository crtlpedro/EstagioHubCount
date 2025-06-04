//Lógica do popup para pegar o nome digitado.
function inserirNome() {
    const nome = document.getElementById("inputNome").value; //O .value específica o que eu irei pegar para a classe nome.
    const texto = document.getElementById("mensagem"); // Mesma coisa aqui, estou pegando o conteudo todo, não apenas o valor que entrou no input lá no HTML.

    texto.textContent = "Bem vindo, " + nome + "!"; //Aqui eu faço a alteração do conteúdo utilizando o textContent e coloco o valor no meio do texto alterado.

    document.getElementById("popup").classList.add("hidden-popup"); //Seleciono a popup pelo id e adiciono na classe .hidden do css, que faz com que o popup desapareça.
}

document.getElementById("popup").classList.remove("hidden-popup");//Seleciona a popup pelo id e remove a classe .hidden do css, para que ao carregar a página a popup apareça.

//Contagem de CARDS GRID Automação
let contagemAut = document.querySelectorAll("div > div > div > div.item"); //Seleciona todos os elementos com a classe item a partir de pai para filho.
let quantidade = contagemAut.length // A função lengt faz a contagem de quantos são.
let pContagem = document.querySelector(".contagemAut"); //Seleciona em qual classe ele será exibido lá na página HTML.
pContagem.textContent = "Quantidade de Cards: " + quantidade; // Atualiza o conteúdo do Paragrafo .

//Contagem de CARDS GRID Relatório + Report
let relatorio = document.querySelectorAll("#relatorio > div"); // Realiza a contagem no grid de relatórios.
let report = document.querySelectorAll("#report-container > div"); // Realiza a contagem no grid de report abaixo do relatório.

let qTotal = relatorio.length + report.length; // faço a soma do "comprimento" das duas variaveis (a função cria como array).

document.querySelector(".contagemRP").textContent = "Quantidade de Cards: " + qTotal; // Seleciono a classe do paragrafo que eu quero, altero o texto e concateno com a quantidade.

//Lógica para os botões de ajuda.
//Cada Alert irá subir uma popup explicando o que cada módulo faz de acordo com o card.
//A função está aplicada diretamente no onclick que está na imagem do HTML, referenciando uma função de alert como popup.

function mostrarAjuda(cardID) {
    switch (cardID) {
        case "simplesNacional":
            alert("Explicação Simples Nacional")
            break;
        case "hubAlertas":
            alert("Explicação HubAlertas+")
            break;
        case "dctfAutomatizada":
            alert("Explicação DCTF Automatizada")
            break;
        case "impostoRetido":
            alert("Explicação Imposto Retido")
            break;
        case "centralCnd":
            alert("Explicação Central CND")
            break;
        case "msgGoverno":
            alert("Explicação Mensagem do Governo")
            break;
        case "consultaSimei":
            alert("Explicação Consulta Simei")
            break;
        case "impostoPago":
            alert("Explicação Imposto Pago")
            break;
        case "hubcountbi":
            alert("Explicação HubCount BI")
            break;
        case "bidafolha":
            alert("Explicação BI da Folha")
            break;
        case "hubconcilia":
            alert("Explicação Hub Concilia")
            break;
        case "lalur":
            alert("Explicação Lalur")
            break;
        case "report":
            alert("Explicação Report Contabil")
            break;

    }
}

//Modulos de Manutenção

let modulosManutencao = ["mensagemGv", "impostoPG", "hbCountBi", "lalurMnt", "dctfMnt"]; //Array criado guardando a informação de cada data-card dos modulos em manutencao.

let cards = document.querySelectorAll("[data-card]"); //Seleciona todos os atributos que estão na lista do array e que possuem o data-card.

//Importante deixar claro que < cards.forEach (card =>... /> é a mesma coisa que < cards.forEach(function(card) ) />
//Essa sintaxe utilizada chama Arrow, neste segmento utilizado não faz diferença entre um ou outro, porém para fins mais complexo o arrow é melhor utilizado
//Apenas utilizei para fins de boas práticas 

cards.forEach(card => { //Para cada card em cards, execute esta função.
    let id = card.dataset.card; // o card.dataset.card pega o valor do atributo que está vinculado ao card, ou seja, o valor do data-card de cada card e coloca no id.
    if (modulosManutencao.includes(id)) { //A condicional verifica se está o valor do id é o mesmo que modulosManutenção.
        card.classList.add("em-manutencao"); //Sendo true, adiciona a classe "em-manutenção".
    } else {                                   //Se não ele retira a classe "em-manutenção".
        card.classList.remove("em-manutencao"); //Esta condicional fica por inativa apenas para não possiveis bugs.
    }

});
//Lógica Checkbox
let checkbox = document.getElementById("mostrarAtivos"); //Pega o checkbox pelo id mostrarAtivos.

checkbox.addEventListener("change", () => { //Adiciona um ouvinte que faz um evento de mudança sempre que mudar o status do checkbox.
    let somenteAtivos = checkbox.checked; //Realiza a verificação se está marcado o checkbox.

    cards.forEach(card => { //Percore para cada um dos cards da lista em manutenção.
        let id = card.dataset.card; //Pega o valor dentro do atributo data-card de cada card

        if (somenteAtivos && modulosManutencao.includes(id)) { //Condicional para validar se o modulos esta em manutenção e o checkbox está ativo ou não.
            card.classList.add("hidden-modulos"); //Se estiver ativo, ele adiciona a classe que esconde o modulo em manutenção presente na variavel cards.
        } else {
            card.classList.remove("hidden-modulos"); // Caso não, ele remove a classe que esconde os cards em manutenção presentes da variavel cards.
        }

    })
});

