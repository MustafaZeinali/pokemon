/*<header>
<nav class="navbar">
    <div> 
        <label for="search-btn"> search </label>
    <input type="text" id="search-btn">
</div>

   <div class="btn-shift">
       <button id="menu-btn" >Menu</button>
       <button id="myteam-btn"> My team </button>
   </div>
</nav>
</header>
<main>
<div id="vy-menu"></div>
<div id="vy-myteam"> hi</div>
<div>
<p id="para"></p> 
</div>
<div class="image"></div>
</main>*/



const input ={
    search: document.querySelector('#search-btn'),
   
   
}


const output = {
    body: document.querySelector('body'),
    para: document.querySelector('#para'),
    viewMyteam: document.querySelector('#view-myteam'),
    viewMenu : document.querySelector('#view-menu'),
    imagePlayer : document.querySelector('.image')
}

const button = {
    menu : document.querySelector('#menu.btn'),
    myTeam : document.querySelector('#myteam-btn'),
}



//event för search box för att söka namn av pokemon

input.search.addEventListener('keydown' , async (event) =>{
    
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0' 
    if (event.key === 'Enter'){ 

    const response = await fetch(url)
    const allPokemons = await response.json()
  
   

    //för söka namn av pokemon i sökfälten
   let input = document.querySelector('.search-input').value
   console.log(input);
   let matchPokemonIndex = allPokemons.results.findIndex(pokemon =>pokemon.name==input)
   console.log(matchPokemonIndex);


    // när det inte finns pokemons namn i sökfälten 
   if(matchPokemonIndex > -1){

    // pokemons kort att bild och namn ska vara i ett kort
   let card = document.createElement('div')
   card.classList.add('card')
    let nameOfPokemon = allPokemons.results[matchPokemonIndex].name;

    console.log(nameOfPokemon );
    output.para.innerText = `name: ${nameOfPokemon}`
    card.append(output.para)
    output.viewMenu.innerHTML = "" ;
    output.viewMenu.append(card)

    
  

   //för hämta bild av pokemon
    const imageOfPokemon = document.createElement('img')
    imageOfPokemon.classList.add('picture')
   imageOfPokemon.src = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${matchPokemonIndex}.png`
   card.append(imageOfPokemon)
   //output.vyMenu.append(card)
   //body.append(output.vyMenu)
   } else{
    console.log('det finns inget pokemn');
    output.para.innerText = `det finns inget pokemn:`
    output.viewMenu.append(para)

   }

    
   

  
  



    }

})

// att hämta my team sidan

/*$('#view-myteam').click(function () {
    output.viewMyteam.style.visibility = 'visible';
});*/

button.myTeam.addEventListener('click' , () =>{
  
  output.viewMyteam.style.visibility = 'visible'
})
        
  

