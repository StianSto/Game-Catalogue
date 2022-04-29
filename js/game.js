const apiKey = "f48c9a81fe0c4f648e7ea036ea67fc51";
const apiUrl = "https://api.rawg.io/api/games?key=";
const url = apiUrl + apiKey;

const gamePageH1 = document.querySelector("h1");
const gamePageHero = document.querySelector(".gamepage__hero");

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const gameId = parseFloat(param.get("id"));

console.log(typeof(gameId))

async function getApiGames() {
    try{
        const response = await fetch(url);
        const json = await response.json();
        const results = json.results; 


        const game = results.find((game) => {
            if(game.id === gameId) {
                return true
            }
        })
        console.log(game)


        gamePageH1.innerHTML = game.name
        gamePageHero.style.backgroundImage = `url(${game.background_image})`;

    }
    catch(error){
        console.log(error);
        const errMsg = "we're sorry, it seems something went wrong :'("
    }
}
getApiGames();




const people = [{ id: 5679, name: "Alice"}, { id: 2, name:"Anders"}];

const person = people.find((person) => {
    if(person.id === gameId ) {
        return true;
    }
})

console.log(person)