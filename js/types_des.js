// #region pokemon types strengths & weaknesses
var pokeDefault = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 1,
  fighting: 1,
  poison: 1,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 1,
  rock: 1,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 1,
  fairy: 1
}

var normal = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 1,
  fighting: 2,
  poison: 1,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 1,
  rock: 1,
  ghost: 0,
  dragon: 1,
  dark: 1,
  steel: 1,
  fairy: 1
}

var fire = {
  normal: 1,
  fire: 0.5,
  water: 2,
  electric: 1,
  grass: 0.5,
  ice: 0.5,
  fighting: 1,
  poison: 1,
  ground: 2,
  flying: 1,
  psychic: 1,
  bug: 0.5,
  rock: 2,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 0.5,
  fairy: 0.5
}

var water = {
  normal: 1,
  fire: 0.5,
  water: 0.5,
  electric: 2,
  grass: 2,
  ice: 0.5,
  fighting: 1,
  poison: 1,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 1,
  rock: 1,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 0.5,
  fairy: 1
}

var electric = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 0.5,
  grass: 1,
  ice: 1,
  fighting: 1,
  poison: 1,
  ground: 2,
  flying: 0.5,
  psychic: 1,
  bug: 1,
  rock: 1,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 0.5,
  fairy: 1
}

var grass = {
  normal: 1,
  fire: 2,
  water: 0.5,
  electric: 0.5,
  grass: 0.5,
  ice: 2,
  fighting: 1,
  poison: 2,
  ground: 0.5,
  flying: 2,
  psychic: 1,
  bug: 2,
  rock: 1,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 1,
  fairy: 1
}

var ice = {
  normal: 1,
  fire: 2,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 0.5,
  fighting: 2,
  poison: 1,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 1,
  rock: 2,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 2,
  fairy: 1
}

var fighting = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 1,
  fighting: 1,
  poison: 1,
  ground: 1,
  flying: 2,
  psychic: 2,
  bug: 0.5,
  rock: 0.5,
  ghost: 1,
  dragon: 1,
  dark: 0.5,
  steel: 1,
  fairy: 2
}

var poison = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 0.5,
  ice: 1,
  fighting: 0.5,
  poison: 0.5,
  ground: 2,
  flying: 1,
  psychic: 2,
  bug: 0.5,
  rock: 1,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 1,
  fairy: 0.5
}

var ground = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 0,
  grass: 2,
  ice: 2,
  fighting: 1,
  poison: 0.5,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 1,
  rock: 0.5,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 1,
  fairy: 1
}

var flying = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 2,
  grass: 0.5,
  ice: 2,
  fighting: 0.5,
  poison: 1,
  ground: 0,
  flying: 1,
  psychic: 1,
  bug: 0.5,
  rock: 2,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 1,
  fairy: 1
}

var psychic = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 1,
  fighting: 0.5,
  poison: 1,
  ground: 1,
  flying: 1,
  psychic: 0.5,
  bug: 2,
  rock: 1,
  ghost: 2,
  dragon: 1,
  dark: 2,
  steel: 1,
  fairy: 1
}

var bug = {
  normal: 1,
  fire: 2,
  water: 1,
  electric: 1,
  grass: 0.5,
  ice: 1,
  fighting: 0.5,
  poison: 1,
  ground: 0.5,
  flying: 2,
  psychic: 1,
  bug: 1,
  rock: 2,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 1,
  fairy: 1
}

var rock = {
  normal: 0.5,
  fire: 0.5,
  water: 2,
  electric: 1,
  grass: 2,
  ice: 1,
  fighting: 2,
  poison: 0.5,
  ground: 2,
  flying: 0.5,
  psychic: 1,
  bug: 1,
  rock: 1,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 2,
  fairy: 1
}

var ghost = {
  normal: 0,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 1,
  fighting: 0,
  poison: 0.5,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 0.5,
  rock: 1,
  ghost: 2,
  dragon: 1,
  dark: 2,
  steel: 1,
  fairy: 1
}

var dragon = {
  normal: 1,
  fire: 0.5,
  water: 0.5,
  electric: 0.5,
  grass: 0.5,
  ice: 2,
  fighting: 1,
  poison: 1,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 1,
  rock: 1,
  ghost: 1,
  dragon: 2,
  dark: 1,
  steel: 1,
  fairy: 2
}

var dark = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 1,
  fighting: 2,
  poison: 1,
  ground: 1,
  flying: 1,
  psychic: 0,
  bug: 2,
  rock: 1,
  ghost: 0.5,
  dragon: 1,
  dark: 0.5,
  steel: 1,
  fairy: 2
}

var steel = {
  normal: 0.5,
  fire: 2,
  water: 1,
  electric: 1,
  grass: 0.5,
  ice: 0.5,
  fighting: 2,
  poison: 0,
  ground: 2,
  flying: 0.5,
  psychic: 0.5,
  bug: 0.5,
  rock: 0.5,
  ghost: 1,
  dragon: 0.5,
  dark: 1,
  steel: 0.5,
  fairy: 0.5
}

var fairy = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 1,
  fighting: 0.5,
  poison: 2,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 0.5,
  rock: 1,
  ghost: 1,
  dragon: 0,
  dark: 0.5,
  steel: 2,
  fairy: 1
}
// #endregion

// #region creating variables for pokemon type form selectors
const pokeForm = document.querySelector('#pokeForm');
const pokeFormSelects = pokeForm.querySelectorAll('select');

let type1 = 'pokeDefault';
let type2 = 'pokeDefault';
let type1Strengths = window[type1];
let type2Strengths = window[type2];

const pokemonTyping = [type1, type2];
const pokemonStrengths = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 1,
  fighting: 1,
  poison: 1,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 1,
  rock: 1,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 1,
  fairy: 1
};
// #endregion

// #region getting pokemon type from form and calculating each time an option is selected
pokeFormSelects.forEach(select => {
  select.addEventListener('change', (e) => {
    const formType = e.target;

    if (formType.id == 'type1') {
      type1 = formType.value;
      type1Strengths = window[type1];
      console.log(type1, type1Strengths);
    } else if (formType.id == 'type2') {
      type2 = formType.value;
      type2Strengths = window[type2];
      console.log(type2, type2Strengths);
    }

    pokemonTyping[0] = type1;
    pokemonTyping[1] = type2;

    pokemonStrengths.normal = type1Strengths.normal * type2Strengths.normal;
    pokemonStrengths.fire = type1Strengths.fire * type2Strengths.fire;
    pokemonStrengths.water = type1Strengths.water * type2Strengths.water;
    pokemonStrengths.electric = type1Strengths.electric * type2Strengths.electric;
    pokemonStrengths.grass = type1Strengths.grass * type2Strengths.grass;
    pokemonStrengths.ice = type1Strengths.ice * type2Strengths.ice;
    pokemonStrengths.fighting = type1Strengths.fighting * type2Strengths.fighting;
    pokemonStrengths.poison = type1Strengths.poison * type2Strengths.poison;
    pokemonStrengths.ground = type1Strengths.ground * type2Strengths.ground;
    pokemonStrengths.flying = type1Strengths.flying * type2Strengths.flying;
    pokemonStrengths.psychic = type1Strengths.psychic * type2Strengths.psychic;
    pokemonStrengths.bug = type1Strengths.bug * type2Strengths.bug;
    pokemonStrengths.rock = type1Strengths.rock * type2Strengths.rock;
    pokemonStrengths.ghost = type1Strengths.ghost * type2Strengths.ghost;
    pokemonStrengths.dragon = type1Strengths.dragon * type2Strengths.dragon;
    pokemonStrengths.dark = type1Strengths.dark * type2Strengths.dark;
    pokemonStrengths.steel = type1Strengths.steel * type2Strengths.steel;
    pokemonStrengths.fairy = type1Strengths.fairy * type2Strengths.fairy;

    let superWeak = [];
    let weak = [];
    let normal = [];
    let resistant = [];
    let superResistant = [];
    let immune = [];

    console.log(pokemonTyping, pokemonStrengths);

    // > sorting into the categories of damage (x4, x2, x1, etc...)
    for (const attackType in pokemonStrengths) {
      switch (pokemonStrengths[attackType]) {
        case 4: //superWeak
          superWeak.push(attackType);
          break;
        case 2: //weak
          weak.push(attackType);
          break;
        case 1: //normal
          normal.push(attackType);
          break;
        case 0.5: //resistant
          resistant.push(attackType);
          break;
        case 0.25: //superResistant
          superResistant.push(attackType);
          break;
        case 0: //immune
          immune.push(attackType);
          break;
      }
    }

    const pokeInfo = document.querySelector('#pokeInfo');
    pokeInfo.innerHTML = "";

    function formatArray(arr) {
      var outStr = "";
      if (arr.length === 1) {
        outStr = arr[0];
      } else if (arr.length === 2) {
        //joins all with "and" but no commas
        //example: "bob and sam"
        outStr = arr.join(' and ');
      } else if (arr.length > 2) {
        //joins all with commas, but last one gets ", and" (oxford comma!)
        //example: "bob, joe, and sam"
        outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
      }
      return outStr;
    }

    if (superWeak.length != 0) {
      const div = document.createElement('div');
      console.log(superWeak);
      div.className = 'superWeak';
      div.innerHTML = '<span>Super weak against: </span>' + formatArray(superWeak);
      pokeInfo.appendChild(div)
    }

    if (weak.length != 0) {
      const div = document.createElement('div');
      console.log(weak);
      div.className = 'weak';
      div.innerHTML = '<span>Weak against: </span>' + formatArray(weak);
      pokeInfo.appendChild(div)
    }

    if (normal.length != 0) {
      const div = document.createElement('div');
      console.log(normal);
      div.className = 'normal';
      div.innerHTML = '<span>Takes normal damage from: </span>' + formatArray(normal);
      pokeInfo.appendChild(div)
    }

    if (resistant.length != 0) {
      const div = document.createElement('div');
      console.log(resistant);
      div.className = 'resistant';
      div.innerHTML = '<span>Resistant to: </span>' + formatArray(resistant);
      pokeInfo.appendChild(div)
    }

    if (superResistant.length != 0) {
      const div = document.createElement('div');
      console.log(superResistant);
      div.className = 'superResistant';
      div.innerHTML = '<span>Super resistant to: </span>' + formatArray(superResistant);
      pokeInfo.appendChild(div)
    }

    if (immune.length != 0) {
      const div = document.createElement('div');
      console.log(immune);
      div.className = 'immune';
      div.innerHTML = '<span>Immune to: </span>' + formatArray(immune);
      pokeInfo.appendChild(div)
    }
  });
});
// #endregion