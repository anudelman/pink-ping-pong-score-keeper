const container = document.querySelector('#container');
const hero = document.querySelector('#hero img')
let p1_score_text = document.querySelector('span#p1_score');
let p2_score_text = document.querySelector('#p2_score');
const p1_btn = document.querySelector('#controls button:first-child');
const p2_btn = document.querySelector('#controls button:last-child');
const playing_to = document.querySelector('#playing_to_select');
const reset_btn = document.querySelector('#controls button:nth-child(2)');

let p1_score = 0
let p2_score = 0
// let game_in_progress = true;

let playing_to_value = Number(playing_to.value);
console.log(playing_to_value);

const add_shrink = () => {
    hero.classList.add('shrink');
}

const remove_shrink = () => {
    hero.classList.remove('shrink');
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
    playing_to_value = Number(playing_to.value);
    p1_score = 0;
    p1_score_text.textContent = p1_score;
    p2_score = 0;
    p2_score_text.textContent = p2_score;
    p1_btn.addEventListener('click', p1_click_handler);
    p2_btn.addEventListener('click', p2_click_handler);
    console.log("Resetting game");
}

////// This game logic works, but seems strange from user perspective. /////////

// const playing_to_handler = () => {
//     playing_to_value = Number(playing_to.value);
// }
// playing_to.addEventListener('change', playing_to_handler);

playing_to.addEventListener('change', reset_game);
reset_btn.addEventListener('click', reset_game);


// Setting a flag is another approach to determining if the game is won or not e.g. - *** game_in_progress = true ***. set it to false if p2_score || p1_score is equal to or greater than the selected option (e.g. - 5);


// always create an event handler, so you can use it for other things down the road. It also improves readibility
const p1_click_handler = () => {
    p1_score += 1;
    if (p1_score >= playing_to_value) {
        p2_btn.removeEventListener('click', p2_click_handler);
        p1_btn.removeEventListener('click', p1_click_handler);
        console.log("p1 wins!");
        p1_score_text.textContent = p1_score;
    } else {
        p1_score_text.textContent = p1_score;
    }
}

// always create an event handler, so you can use it for other things down the road. It also improves readibility
const p2_click_handler = () => {
    p2_score += 1;
    if (p2_score >= playing_to_value) {
        p2_btn.removeEventListener('click', p2_click_handler);
        p1_btn.removeEventListener('click', p1_click_handler);
        console.log("p2 wins!");
        p2_score_text.textContent = p2_score;
    } else {
        p2_score_text.textContent = p2_score;
    }

}


p1_btn.addEventListener('click', p1_click_handler);
p2_btn.addEventListener('click', p2_click_handler);






