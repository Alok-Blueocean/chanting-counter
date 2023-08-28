let bead_count = document.getElementById('beads')
let round_count = document.getElementById('rounds')
let count = 0
let rounds = 0
function increment(){
            count = count + 1;
            bead_count.innerText = count;
            rounds = rounds+ parseInt(count/108);
            if (count==108){
                count = 0;
            }
            round_count.innerText = rounds;
};

// const body_click = document.getElementById('body_click');  
// body_click.addEventListener('click', e => {
// //     console.log('clicked');
// //     console.log(bead_count.innerText);

// // console.log(round_count.innerText);

// // count = count + 1;
// // bead_count.innerText = count;
// increment();
// });  

function reset_bead(){
    bead_count.innerText = 0;
}
function reset_round(){
    round_count.innerText = 0;
}
