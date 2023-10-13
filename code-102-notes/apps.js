alert('Welcome!');

function askMyFlavor() {
    let myFlavor = prompt('What kind of poke is my favorite? (spicy ahi for answer)');
    while(myFlavor != 'spicy ahi'){
        myFlavor = prompt('What kind of poke is my favorite? (spicy ahi for answer)');
    }
}

function askFlavor() {
    let usersFlavor = prompt('What kind of poke is your favorite?');
    console.log(usersFlavor);
    if (usersFlavor === null || usersFlavor.trim() === "") {
        document.write('I know you did not write anything, but here are some of my favorites anyway.');
    } else {
        document.write(usersFlavor + ', are you even sure that is poke?');
    }
}

function askNumber() {
    let userNumber = prompt('On a scale of 1-5, how many poke bowls can you eat?');
    for (let i = 1; i <= userNumber; i++) {
        document.write('<img src="//live.staticflickr.com/8369/8511228685_f531e4afd1_h.jpg" width="400px" , height="400px">')
    }
}

