
//Declaração, atribuição de variáveis e seleção de elementos por classes e ids, 
const formu = document.querySelector('#form');
const inputTel = document.querySelector('#inputT');
const inputNome = document.querySelector('#inputNome');
const inputAdr = document.querySelector('#inputAdress');
const inputData = document.querySelector('#inputData');
const inputAddItem = document.querySelector('#btnAdditem');
const servicesList = document.querySelector('#container_services');

const modal = document.querySelector('#modal-1');
const exitmodal = document.querySelector('.modal-exit');
const enviarmodal = document.querySelector('#modal-enviar');
const inputDescri = document.querySelector('#inputDesc');
const inputLocal = document.querySelector('#inputLocal');
const inputValor = document.querySelector('#inputValue');
const inputMetrosQuadrados = document.querySelector('#inputSquaMeters');

const btnModal = document.querySelector('btnAdditem');


//Evento para envio de formulário 
formu.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputName = inputNome.value;
    const inputValuePhone = inputTel.value;
    const inputValueAdress = inputAdr.value;
    const inputValueData = inputData.value;

    const cliente = {
        nome: inputName,
        telefone: inputValuePhone,
        endereco: inputValueAdress,
        data: inputValueData
    }

    console.log(cliente);
});

//console.log(inputAddItem.innerHTML);

function preencheContainer({Descricao, Local, Valor, metrosQuadrados}){

    //Criação de div e nome da classe
    const estrutura = document.createElement("div")
    estrutura.classList.add("service")

    //Criação de span e inserindo conteúdo de descrição
    const spanDesc = document.createElement("span");
    spanDesc.textContent = `${Descricao}`;

    const spanLocal = document.createElement("span");
    spanLocal.textContent = `${Local}`;

    const spanPrice = document.createElement("span");
    spanPrice.textContent = `R$ ${parseFloat(Valor).toFixed(2)}`;

    const spanSquareMeters = document.createElement("span");
    spanSquareMeters.textContent = `${metrosQuadrados} m²`;

    //Criação de span e inserção de ícone utilizando InnerHTML
    const spanEdit = document.createElement("span");
    spanEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

    const spanDelete = document.createElement("span");
    spanDelete.innerHTML = '<i><img src="/assets/icons/recycle.svg" alt=""></i>';

    // Inserção de elementos filhos dentro da div pai estrutura
    estrutura.appendChild(spanDesc);
    estrutura.appendChild(spanLocal);
    estrutura.appendChild(spanPrice);
    estrutura.appendChild(spanSquareMeters);
    estrutura.appendChild(spanEdit);
    estrutura.appendChild(spanDelete);

    //Inserção de modal ao conteúdo junto ao conteúdo de formulário
    servicesList.appendChild(estrutura)
    
    console.log(estrutura);

}

//  Evento de clique para abrir modal de criação de novo item
inputAddItem.addEventListener("click", (e) => {
    modal.classList.add('active');
    console.log('clicou');
});

//Evento de clique para fechar o modal, ele chama a função closeModal
exitmodal.addEventListener("click", (e) => {
    
    closeModal();
    //Fazer parte de limpar os inputs

});

// Função para fechamento de modal, ele é chamado por dois eventos
function closeModal(){
    modal.classList.remove('active');
    console.log('fechou');
}

//  Evento de envio de informações inseridas no modal, (talvez posso mudar para um formulário)
enviarmodal.addEventListener("click", (e) => {

    //  Atribuição dos valores inseridos nos inputs em variáveis
    const inputDesc = inputDescri.value;
    const inputLocale = inputLocal.value;
    const inputValue = inputValor.value;
    const inputSquareMeters = inputMetrosQuadrados.value;

//Criação de objeto para facilitar o envio para o evento de clique
    const Trabalhos = {
        Descricao: inputDesc,
        Local: inputLocale,
        Valor: inputValue,
        metrosQuadrados: inputSquareMeters
    }

    console.log(Trabalhos);
    //Envio das informações armazenadas no objeto para a função
    preencheContainer(Trabalhos);
    //Chamada de função de fechamento de modal
    closeModal();
});