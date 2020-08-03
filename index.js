function wakeDog(d, b) {
    console.log(`Wake ${d} the ${b}`);
    return `Wake ${d} the ${b}`
}

function leashDog(dog, breed) {
    console.log(`Leash ${dog} the ${breed}`);
    return `Leash ${dog} the ${breed}`
}

function walkToPark(dog, breed) {
    console.log(`Walk to the park with ${dog} the ${breed}`);
    return `Walk to the park with ${dog} the ${breed}`
}

function throwFrisbee(dog, breed) {
    console.log(`Throw the frisbee for ${dog} the ${breed}`);
    return `Throw the frisbee for ${dog} the ${breed}`
}

function walkHome(dog, breed) {
    console.log(`Walk home with ${dog} the ${breed}`);
    return `Walk home with ${dog} the ${breed}`
}

function unleashDog(dog, breed) {
    console.log(`Unleash ${dog} the ${breed}`);
    return `Unleash ${dog} the ${breed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog (dog, breed) {
    let r = [];
    for (let i = 0; i < routine.length; i++) {
        r.push(routine[i](dog, breed));
    }
    return r;
}