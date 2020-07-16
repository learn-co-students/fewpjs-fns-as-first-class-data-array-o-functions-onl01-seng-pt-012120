function wakeDog(name, breed) {
  const msg = `Wake ${name} the ${breed}`;
  // console.log(msg);
  return msg;
}

function leashDog(name, breed) {
  const msg = `Leash ${name} the ${breed}`;
  // console.log(msg);
  return msg;
}

function walkToPark(name, breed) {
  const msg = `Walk to the park with ${name} the ${breed}`;
  // console.log(msg);
  return msg;
}

function throwFrisbee(name, breed) {
  const msg = `Throw the frisbee for ${name} the ${breed}`;
  // console.log(msg);
  return msg;
}

function walkHome(name, breed) {
  const msg = `Walk home with ${name} the ${breed}`;
  // console.log(msg);
  return msg;
}

function unleashDog(name, breed) {
  const msg = `Unleash ${name} the ${breed}`;
  // console.log(msg);
  return msg;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(name, breed) {
  const result = [];
  for (let i = 0; i < routine.length; i++) {
    result.push(routine[i](name, breed));
  }
  return result;
}