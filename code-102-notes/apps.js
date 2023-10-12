// alert('Welcome!');

// const usersAnswer = prompt('Describe your favorite flavor of poke.');

// console.log(usersAnswer);

// if (usersAnswer === null || usersAnswer.trim() === "") {
//     document.write('I know you did not write anything, but here are some suggestions anyway.');
//     } else {
//     document.write('Here are some of your favorites!');
//     }


// function functionName()

// function askName(){

// }

// askName()

{/* <></> */}

alert('Welcome!');

function askFlavor() {
    let usersFlavor = prompt('What kind of poke is my favorite? (null for answer 1; spicy ahi for answer 2; anything else for answer 3; nah to repeat question)');
    console.log(usersFlavor);
    if (usersFlavor === null || usersFlavor.trim() === "") {
        document.write('I know you did not write anything, but here are some of my favorites anyway.');
    } else if (usersFlavor == 'spicy ahi') {
        document.write('that is my favorite and here are some more!');
    } else if (usersFlavor == 'nah') {
        usersFlavor = prompt('What kind of poke is my favorite? (null for answer 1; spicy ahi for answer 2; anything else for answer 3)');
    } else {
        document.write(usersFlavor + ', are you even sure that is a poke?');
    }
    // document.write(usersFlavor + ' is my favorite too! Here are some of my recommendations!');
  }

    // function askFavoritePoke() {
    // let favoritePoke = prompt('Describe your favorite flavor of poke.');
    // console.log(favoritePoke);
    // // if (favoritePoke === null || favoritePoke.trim() === "") {
    // // document.write('I know you did not write anything, but here are some suggestions anyway.');
    // // } else {
    // // document.write('Here are some of your favorites!');
    // // }
    // return favoritePoke;

