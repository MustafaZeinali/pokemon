




const input ={
    search: document.querySelector('#search-box'),
   
   
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
    addButton : document.querySelector('.add-btn')
}



//event för search box för att söka namn av pokemon
// for searching 

input.search.addEventListener('keydown' , async (event) =>{
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0' 
    
    
    if (event.key === 'Enter'){ 

    const response = await fetch(url)
    const allPokemons = await response.json()
  
   

    //för söka namn av pokemon i sökfälten
   let inputSearch = document.querySelector('.search-input').value
   console.log(inputSearch);
   let matchPokemonIndex = allPokemons.results.findIndex(pokemon =>pokemon.name==inputSearch)
   /*const filteredNames = matchPokemonIndex.filter((name) =>
              name.toLowerCase().includes(inputSearch.toLowerCase())
          );

   console.log(filteredNames); */
   console.log(matchPokemonIndex);

   
    
   

    // när det inte finns pokemons namn i sökfälten 
   if(matchPokemonIndex > -1) {

    // pokemons kort att bild och namn ska vara i ett kort
   let card = document.createElement('section')
   let addButton = document.createElement('button')
   addButton.innerText = 'Add me' ;
   addButton.classList.add('add-btn')

   //spara i localStorage
   addButton.addEventListener('click' , display );
   let totalt = card ;
   function display () {

    localStorage.setItem('key' , JSON.stringify (totalt))
    let getObject = localStorage.getItem('key')
    console.log('getObject:  ' , JSON.parse(getObject) );
   }



 
   card.appendChild(addButton)
   card.classList.add('card')
    let nameOfPokemon = allPokemons.results[matchPokemonIndex].name;

    console.log(nameOfPokemon );
    output.para.innerText = `name: ${nameOfPokemon}`
    card.appendChild(output.para)
    output.viewMenu.innerHTML = "" ;
    output.viewMenu.append(card)
    //body.append(output.viewMenu)

    
  

   //för hämta bild av pokemon
    const imageOfPokemon = document.createElement('img')
    imageOfPokemon.classList.add('picture')
   imageOfPokemon.src = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${matchPokemonIndex}.png`
   card.append(imageOfPokemon)
   output.viewMenu.append(card)
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
//let isVisible = true ;

button.myTeam.addEventListener('click' , () =>{

 
    
       
    
  
})
/*button.menu.addEventListener('click' , () => {
    console.log('click');
    output.viewMyteam.style.visibility = 'invisible'
    console.log('click');
}) */    
  // in background
/*chrome.tabs.sendMessage(65, 'good soup', () => console.error(chrome.runtime.lastError))

// in tab
chrome.runtime.onMessage.addListener(() => true)*/
