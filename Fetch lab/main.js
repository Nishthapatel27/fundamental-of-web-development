//Write code to fetch data for 10 Pokemon
async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      displayPokeList(data.resutls);
    } catch (error) {
      console.error(error.message);
    }
  }
  
//Use a JavaScript loop to display the names and URLs of your 10
// Pokemon on the page
function displayPokeList(data){
    const list = document.createElement("ul");
    
    for(const poke of data){
        const item= document.createElement("li");
         item.innerText = poke.name;
       // Add event listener to every pokemon
       item.addEventListener("click", () => {
         onePokemon(poke.url);
       });
       list.appendChild(item);
    }      
          document.body.appendChild(list);
}


//Add an event listener to each Pokemon to listen for a click

async function onePokemon(url) {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Respone status: $reponse.status`);
        }
        const data = await response.json();
        displayIndividual(data);

    }catch (erroe){
        console.error(error.message);
    }
    
}

//make a container to hold the clicked pokemon
const pokemonCard = dovument.createElement("div");
document.body.appendChild(pokemonCard);

// put the right detals in the container
function displayIndividual(pokemon){
    pokemonCard.inneHTML = `<h2${pokemon.name}</h2>
                            <img src="${pokemon.sprites.
                            front_defult}" alt="${pokemon.name}">`;
                            
}

