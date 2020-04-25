import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

data.pokemon.forEach(element => {
    
    //Criando uma div no HTML  "<div></div>"
    let createDiv = document.createElement("div") 
    //Criando um elemento de imagem. "<img src=''>"
    let image = document.createElement("img") 

    //Pegando url do "data" e adicionando. "<img src='url da imagem'>
    image.src = element.img 
    //Colocando o nome dos Pokemons na variável.
    let namePokemon = document.createTextNode(element.name) 

    //Colocando a classe "Box Pokemon" nas divs que serão criadas. <div class="box-pokemon"></div>
    createDiv.classList.add("box-pokemon") 

    //Colocando o nome do Pokemon dentro da div. "<div>Pikachu</div>"
    createDiv.appendChild(namePokemon) 
    //Colocando a imagem do Pokemon na div. <div><img src='url da imagem'>Pikachu</div>
    createDiv.appendChild(image) 

    //Pegando a id "Root" do HTML
    let content = document.querySelector("#root") 
    //Adicionando as divs dentro da div "Root".
    content.appendChild(createDiv) 
});



console.log(data.pokemon[0].name);

