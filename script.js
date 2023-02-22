/*<nav class="navbar">
<div> 
    <label for="search-btn"> search </label>
<input type="text" id="search-btn">
</div>
<div class="btn-shift">
   <button id="menu-btn" >Menu</button>
   <button id="myteam-btn"> My team </button>
</div>
</nav>*/

const searchInput = document.querySelector('#search-btn');
const menuButton = document.querySelector('#menu.btn');
const myTeamButton = document.querySelector('#myteam-btn');
const body = document.querySelector('body');
const para = document.querySelector('#para');
const vyMyteam = document.querySelector('#vy-myteam')
const vyMenu = document.querySelector('#vy-menu')
const imagePlayer = document.querySelector('.image')


const imageUrl = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'



searchInput.addEventListener('keydown' , async (event) =>{
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0' 
    //const urlImage = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
    if (event.key === 'Enter'){ 

    const response = await fetch(url)
    const data = await response.json()

    let nameOfPokemon = data.results[0].name
    console.log(nameOfPokemon );
    para.innerText = 'name: ' + nameOfPokemon
    vyMenu.append(para)


    const responseImg = await fetch(imageUrl)
    const dataImage = await responseImg.json()
    let imagePokemon = dataImage.sprites.front_default
    console.log(imagePokemon);
    

    vyMenu.append(imagePokemon)
   
   
    

    //
   /* 
    
    let imagePokemon = dataImage.sprites.front_deafult
    console.log(imagePokemon);
   // const imageOfPokemon = document.createElement('img')
   // imageOfPokemon.src = 'https://pokeapi.co/api/v2/pokemon/1/';*/

    vyMenu.append(imagePokemon)
  



    }

})

/*imagePlayer.addEventListener('click' , () =>{
    const responseImg = await fetch(imageUrl)
    const dataImage = responseImg.json()
    let imagePokemon = dataImage.sprites.front_default
    console.log(imagePokemon);

    vyMenu.append(imagePokemon)
})*/

//vy-myteam
myTeamButton.addEventListener('click' , () =>{
   vyMyteam.style.visibility = 'visible'
  
   console.log('click');
})


