const container = document.querySelector('#container');
const hero = document.querySelector('#hero img')
let p1ScoreText = document.querySelector('span#p1Score');
let p2ScoreText = document.querySelector('#p2Score');
const p1Btn = document.querySelector('#controls button:first-child');
const p2Btn = document.querySelector('#controls button:last-child');
const playingToSelect = document.querySelector('#playingToSelect');
const reset_btn = document.querySelector('#controls button:nth-child(2)');

let p1Score = 0
let p2Score = 0
// let game_in_progress = true;

let playingToValue = Number(playingToSelect.value);
console.log(playingToValue);

const add_shrink = () => {
    hero.classList.add('shrink');
}

// window.setTimeout(() => {
//     container.classList.add('grow');
//     container.addEventListener('mouseover', add_shrink);
// }, 2000);

container.classList.add('grow');
container.addEventListener('mouseover', add_shrink);
container.addEventListener('mouseout', () => {
    hero.classList.remove('shrink')
});



const reset_game = () => {
    playingToValue = Number(playingToSelect.value);
    p1Score = 0;
    p1ScoreText.textContent = p1Score;
    p2Score = 0;
    p2ScoreText.textContent = p2Score;
    p1Btn.addEventListener('click', p1_click_handler);
    p2Btn.addEventListener('click', p2_click_handler);
    console.log("Resetting game");
}

////// This game logic works, but seems strange from user perspective. /////////

// const playingTo_handler = () => {
//     playingToValue = Number(playingTo.value);
// }
// playingTo.addEventListener('change', playingTo_handler);

playingToSelect.addEventListener('change', reset_game);
reset_btn.addEventListener('click', reset_game);


// Setting a flag is another approach to determining if the game is won or not e.g. - *** game_in_progress = true ***. set it to false if p2Score || p1Score is equal to or greater than the selected option (e.g. - 5);


// always create an event handler, so you can use it for other things down the road. It also improves readibility
const p1_click_handler = () => {
    p1Score += 1;
    if (p1Score >= playingToValue) {
        p2Btn.removeEventListener('click', p2_click_handler);
        p1Btn.removeEventListener('click', p1_click_handler);
        console.log("p1 wins!");
        p1ScoreText.textContent = p1Score;
    } else {
        p1ScoreText.textContent = p1Score;
    }
}

// always create an event handler, so you can use it for other things down the road. It also improves readibility
const p2_click_handler = () => {
    p2Score += 1;
    if (p2Score >= playingToValue) {
        p2Btn.removeEventListener('click', p2_click_handler);
        p1Btn.removeEventListener('click', p1_click_handler);
        console.log("p2 wins!");
        p2ScoreText.textContent = p2Score;
    } else {
        p2ScoreText.textContent = p2Score;
    }

}


p1Btn.addEventListener('click', p1_click_handler);
p2Btn.addEventListener('click', p2_click_handler);






