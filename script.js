// State - appens data-variabler
let allPokemons = null
let filteredPokemons = []
let teamList = []
let reserveList = []


// DOM variabler
const input ={
    search: document.querySelector('#search-box'),
    
    
}


const output = {
    body: document.querySelector('body'),
    para: document.querySelector('#para'),
    viewMenu: document.querySelector('#view-menu'),
    imagePlayer : document.querySelector('.image')
}

let viewMyteam = document.querySelector('#view-myteam')
let viewMenu = document.querySelector('#view-menu')

document.querySelector('.input-change-name-container').style.display = 'none'



let menuBtn = document.querySelector('#menu-btn')
let myTeam =  document.querySelector('#myteam-btn')

const button = {
    addButton : document.querySelector('.add-btn')
}

menuBtn.addEventListener("click", () => {
    document.querySelector('.reserve-container').style.display = 'none'
    document.querySelector('#view-menu').style.display = 'flex'
    document.querySelector('#view-myteam').style.display = 'none'
    document.querySelector('.input-change-name-container').style.display = 'none'
    
})



myTeam.addEventListener("click" , () =>{
    document.querySelector('.reserve-container').style.display = 'flex'
    document.querySelector('#view-menu').style.display = 'none'
    document.querySelector('#view-myteam').style.display = 'flex'
    document.querySelector('.input-change-name-container').style.display = 'flex'
})


//event för search box för att söka namn av pokemon

input.search.addEventListener('keydown' , async (event) =>{
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0' 
    
    
    if (event.key === 'Enter'){ 
        try { 
            const response = await fetch(url)
            const allPokemons = await response.json()
        
        
        
            //för söka namn av pokemon i sökfälten
            let inputSearch = document.querySelector('.input-search').value
            console.log(inputSearch);
            let allMatchingPokemon = allPokemons.results.filter(pokemon =>pokemon.name.startsWith(inputSearch))
        
            console.log(allMatchingPokemon);
        
        
            // när det som står i sökfältet matchar ett namn på en pokemon
            // dvs: antalet sökträffar (pokemons) är större än noll
            if(allMatchingPokemon.length > 0) {
                output.viewMenu.innerHTML = "" ;
                allMatchingPokemon.forEach(async pokemon => {
                await fetchPokemonDetails(pokemon)
                let card = createPokemonCard(pokemon)            
                output.viewMenu.append(card)
            })
            
            } else{
                console.log('Det finns ingen Pokemon');
                output.para.innerText = `det finns inget pokemn:`
                output.viewMenu.append(para)
            }   
            
        } catch(error) {
            console.error('Error fetching pokemon data', error);
        }
        
    }
});
/*När man lägger till en Pokémon, ska man kunna välja ett namn åt den. Observera att
 man kan lägga till flera Pokémon av samma sort.*/
let changeName = document.createElement('button')


function addToTeam(pokemon) {
    
   
    
    
    if(teamList.length < 3 ){
        teamList.push(pokemon)
        
    } else {
        reserveList.push(pokemon)
        
    }

    renderTeam()
}
function renderTeam() {
    
    console.log(teamList , reserveList);
    let myTeamContainerEl = document.querySelector('.my-team-container');
    myTeamContainerEl.innerHTML = "";

    teamList.forEach(pokemon => {
        let pokemonCard = createPokemonCard(pokemon, true);
        myTeamContainerEl.appendChild(pokemonCard);
        
    });
   reserveList.forEach(pokemon =>{
        let pokemonCard = createPokemonCard(pokemon ,true);
        document.querySelector('.reserve-container').appendChild(pokemonCard)
        
    })

}

function createPokemonCard(pokemon, isOnTeam) {
    // pokemons kort att bild och namn ska vara i ett kort
    let card = document.createElement('section')
    let addButton = document.createElement('button')
    let titleElement = document.createElement('h4')
    
    
   

    if (isOnTeam) {
        // ska pokemonkortet ha en ta bort knapp
        let deleteButton = document.createElement('button')
        
        deleteButton.className = 'delete-btn' ;
        
        deleteButton.addEventListener('click' , () => {
        card.remove()
        })
        deleteButton.innerText = 'Kick out!'
        card.appendChild(deleteButton)
        
   
        //att byta namn på pokemon 
       titleElement.addEventListener('click' , () =>{
            const inputChangeName = document.createElement('input');
            inputChangeName.className = 'input-change-name';
            inputChangeName.value = titleElement.innerText;
            inputChangeName.addEventListener('keydown' , event => {
                if(event.key == 'Enter'){
                    console.log(inputChangeName.value);
                    titleElement.innerText = inputChangeName.value;
                    console.log(titleElement);
                    card.insertAdjacentElement('afterbegin' , titleElement)
                    inputChangeName.remove()
                }
            })
            
            titleElement.replaceWith(inputChangeName);
            inputChangeName.focus();
       })

        
      
    } else {
        addButton.innerText = 'Add me' ;
        addButton.classList.add('add-btn')
        addButton.addEventListener('click', () => addToTeam(pokemon))
        
        card.appendChild(addButton)
    }

    card.classList.add('card')
    let nameOfPokemon = pokemon.name;

   
    
    titleElement.innerText = `name:  ${nameOfPokemon}` ;
    card.appendChild(titleElement)

   

    const imageOfPokemon = document.createElement('img')
    imageOfPokemon.classList.add('picture')
    
    console.log('Pokemon image:', pokemon.sprite)
    imageOfPokemon.src = pokemon.sprite
    card.append(imageOfPokemon)


    return card // DOM-element
}





async function fetchPokemonDetails(pokemon) {
    console.log('fetchPokemonDetails', pokemon)
    const response = await fetch(pokemon.url)
    const pokemonBasicInfo = await response.json()
   

    const sprites = pokemonBasicInfo.sprites.front_default
    //const abilities = pokemonBasicInfoAbility.height
    //console.log('TEST' ,sprites);


    pokemon.sprite = sprites
    //pokemon.ability = abilities

    // använd fetch för att skicka request
    // url är: pokemon.url
    // responsen innehåller egenskapen "sprites"
    // skriv ut sprites med console.log för att se hur den ser ut
    // leta upp rätt bild och lägg den i objektet: pokemon.sprite = ???
}



