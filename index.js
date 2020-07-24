
// Create the Array o' Functions

// console.log("Wake Byron the poodle");
// wakeDog
function wakeDog(dogName, dogBreed) {
    const result= (`Wake ${dogName} the ${dogBreed}`);
    return result
  }


//   console.log("Leash Byron the poodle"); 
//   has a function leashDog:
function leashDog(dogName, dogBreed) {
    const result= (`Leash ${dogName} the ${dogBreed}`);
    return result
  }


//   console.log("Walk to the park with Byron the poodle");
// walkToPark
function walkToPark(dogName, dogBreed) {
    const result= (`Walk to the park with ${dogName} the ${dogBreed}`);
    return result
  }


//   console.log("Throw the frisbee for Byron the poodle");
// throwFrisbee
function throwFrisbee(dogName, dogBreed) {
    const result= (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return result
  }

//   console.log("Walk home with Byron the poodle");
// walkHome
function walkHome(dogName, dogBreed) {
    const result= (`Walk home with ${dogName} the ${dogBreed}`);
    return result
  }

//   console.log("Unleash Byron the poodle");
// unleashDog
function unleashDog(dogName, dogBreed) {
    const result= (`Unleash ${dogName} the ${dogBreed}`);
    return result
  }


//   Create the Array o' Functions
// Next, create our "Array o' Functions!" Create a variable called routine. This variable will be an Array all of the functions we've just defined.


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

let output = []

function exerciseDog(dogName, dogBreed) {
    let i = 0
      for (i = 0; i < routine.length; i++) {
          let routineToRun = routine[i]
          let outputToSave = routineToRun(dogName, dogBreed)
          output.push(outputToSave)
      }

      return output
  }