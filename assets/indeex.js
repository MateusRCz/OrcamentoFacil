




var teste = document.createElement("p");

teste.innerHTML = "texto ilustrativo"

//document.getElementById("nissan").appendChild(teste);


// Visualizar uma div através do id




const lista = document.querySelectorAll("#voltar");

for (let i = 0; i < lista.length; i++) {
    document.getElementById("voltar").classList.toggle("active")
    console.log("teste")

    
}


document.getElementById("menuBtn").addEventListener('click', function () {
    document.getElementById("sideBar-body").classList.toggle("active")
    console.log("clicou")
})

    
