// Seleciona o elemento da lista onde os posts serão adicionados
let listElement = document.querySelector("#app");

// Inicializa um array vazio para armazenar os posts recebidos da API
let posts = [];

// Função principal que faz a requisição para a API e exibe os posts
function nutriApp(){
    // Faz uma requisição HTTP GET para a API usando fetch
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((response)=> response.json()) // Converte a resposta para JSON
    .then((json)=>{
        posts = json; // Armazena os dados recebidos no array 'posts'

        // Itera sobre cada item do array de posts
        posts.map((item)=>{
            // Cria um elemento <li> para representar um post na lista
            let liElement = document.createElement("li");
            
            // Cria um elemento <strong> para exibir o título do post
            let titleElement = document.createElement("strong");
            let titleText = document.createTextNode(item.titulo); // Cria um nó de texto com o título do post
            titleElement.appendChild(titleText); // Adiciona o título ao elemento <strong>
            liElement.append(titleElement); // Adiciona o <strong> ao <li>
            
            // Cria um elemento <img> para exibir a imagem do post
            let imgElement = document.createElement("img");
            imgElement.src = item.capa; // Define o atributo 'src' com a URL da imagem
            liElement.appendChild(imgElement); // Adiciona a imagem ao <li>
            
            // Cria um elemento <a> para exibir a descrição do post
            let descriptonElement = document.createElement("a");
            let descriptionText = document.createTextNode(item.subtitulo); // Cria um nó de texto com a descrição do post
            descriptonElement.appendChild(descriptionText); // Adiciona o texto ao elemento <a>
            liElement.appendChild(descriptonElement); // Adiciona a descrição ao <li>
            
            // Adiciona o <li> contendo o post ao elemento principal da lista
            listElement.appendChild(liElement);
        })
    })
    .catch(()=>{
        // Caso ocorra um erro na requisição, exibe a mensagem no console
        console.log("DEU RUIM");
    })
}

// Chama a função para buscar e exibir os posts
nutriApp();
