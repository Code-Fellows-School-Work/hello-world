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



alert('Welcome!');

function askFlavor() {
    let usersFlavor = prompt('What is your favorite poke flavor?');
    console.log(usersFlavor);
    if (usersFlavor === null || usersFlavor.trim() === "") {
        document.write('I know you did not write anything, but here are some of my favorites anyway.');
    } else {
        document.write(usersFlavor + ' is my favorite too!');
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

