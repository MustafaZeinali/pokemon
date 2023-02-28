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



input.search.addEventListener('keydown' , async (event) =>{
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0' 
    
    
    if (event.key === 'Enter'){ 
const getPokemonNames = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
      
          const pokemonNames = data.results.map((pokemon) => pokemon.name);
          const incompleteName = document.querySelector('#search-box').value;
          const filteredNames = pokemonNames.filter((name) =>
              name.toLowerCase().includes(incompleteName.toLowerCase())
          );

          console.log(pokemonNames);
          console.log(filteredNames);
         
          let list = document.createElement('ul')
          filteredNames.forEach(item => {
              let listItem = document.createElement('li');
              console.log('item',item)
              listItem.innerHTML = item;
              console.log('listItem',listItem)
              list.appendChild(listItem);
              
        })
        document.body.appendChild(list);
          
      });
    };

    getPokemonNames()
    }
})  
