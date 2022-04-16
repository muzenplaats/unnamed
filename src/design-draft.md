# Design draft

## Person class extensions
```js
class Organism {}
class Animal extends Organism {}
class Mammal extends Animal {}
class Primate extends Mammal {}
class Human extends Primate {}
class Person extends Human {
  name, givenName, middleName, familyName,
  sex, age, nationality,
  gender,  // sextual orientation
  type,
  population: 100  // %
}
class Straight extends Person {  // 2 cat.
  gender: sex,
  type: 'hetro',
  population: s  // typical
}
class Gay extends Person {       // 1 cat.
  sex: 'male',
  type: 'homo'
  population: g  // some
}
class Lesbian extends Person {   // 1 cat.
  sex: 'female',
  type: 'homo',
  population: l  // some
}
class Bi extends Person {       // 2 cat.
  sex: 'male' | 'female',
  gender: 'bisexuality',
  type: 'h.-h.-conti.',
  population: b  // seldom
}
class Trans extends Person {    // 6 cat.
  sex: 'male' | 'female',
  gender: 'female' | 'male',
  type: 'trans-homo', 'trans-hetro' or 'trans-h.-h.-conti.'
  population: t  // rare
}
// 12 categories of the person class in total
```

## Couple class
```js
class Couple {

}

class Spouse extends Couple {

}
```

## Chronology class
```js
class Chronology {

}

const parents = new Couple(father, mother)
class ChronologyNode {
  constructor(person, parents) {
    this.person = person
    this.parents = parents
  }
  toString() {}
  toJSON() {}
}
```
