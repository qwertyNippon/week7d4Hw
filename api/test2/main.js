document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon(e) {
  const  pokemonName = document.querySelector("#pokemonName").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${data.name}</h1>
        <p>Weight: ${data.weight}</p>
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Error</h4>
      `;
      console.log("error", err);
    });
  e.preventDefault();
}
let input = document.querySelector('input');
    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' || event.key === 'NumpadEnter') {
          getPokemon(search.value);
        }
    console.log('hello')
    });

  input.addEventListener('click', ()=> {
    getPokemon(search.value);
});