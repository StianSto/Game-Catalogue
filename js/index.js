const container = document.querySelector(".games__container");
const imageSlider = document.querySelector(".image-slider");
const sliderTitle = document.querySelector(".slider--title");
const btnsliderNext = document.querySelector("button.next")
const btnsliderPrevious = document.querySelector("button.previous")

const apiKey = "f48c9a81fe0c4f648e7ea036ea67fc51";
const apiUrl = "https://api.rawg.io/api/games?key=";
const url = apiUrl + apiKey;

const displayNumOfGames = 15;

let response;
let json;
let results;

async function getApiGames() {
    try{
        response = await fetch(url);
        json = await response.json();

        createHtml();

        for(let i = 0; i < displayNumOfGames; i++){
            sliderArr.push(results[i]);
        }

        // default picture 
        createSlider();

    }
    catch(error){
        console.log(error);
        const errMsg = "<h2>we're sorry, it seems something went wrong :'(</h2>"
        container.innerHTML = errMsg;
    }
}
getApiGames();

function createHtml() {
    
    results = json.results; 

    for(let i = 0; i < displayNumOfGames; i++) {

        let gameId = results[i].id;
       
        container.innerHTML += `<a href="game.html?id=${gameId}" data-game-id-${results[i].id} class="game">
                                    <div class="game__img" style="background-image: url(${results[i].background_image})"></div>
                                    <div class="game__info">
                                        <h2>${results[i].name}</h2>
                                        <p>Rating: ${results[i].rating}</p>
                                    </div>
                                </a>`
    }    
} 

let sliderArr = [];
let count = 0;

function createSlider() {

    count = (count > sliderArr.length -1) ? 0 : count;
    count = (count < 0) ? sliderArr.length - 1 : count;

    console.log(count)

    imageSlider.style.backgroundImage = `url(${sliderArr[count].background_image})`;
    sliderTitle.innerHTML = `${sliderArr[count].name}`
}

btnsliderNext.addEventListener("click", sliderNext)
btnsliderPrevious.addEventListener("click", sliderPrevious)

function sliderNext() {
    count++;
    createSlider();
}
function sliderPrevious() {
    count--;
    createSlider();
}

