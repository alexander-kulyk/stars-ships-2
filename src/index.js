import { getShips } from './API/service';
import {
  setLocalStorage,
  getLocalStorage,
  checkLocalStorage,
} from './js/localStorage/localStorage';
import { renderStarsShipsCard } from './js/markups/markup-ships';
import { addImagesToShips } from './js/images-ships';
import Notiflix from 'notiflix';
import refs from './js/refs/refs';
import './index.css';

//------------get all ships----------------

const getAllStarsShips = async () => {
  try {
    const allStarsShips = (await getShips()).results;

    const updatedStarsShips = addImagesToShips(allStarsShips);
    console.log('updatedStarsShips', updatedStarsShips);

    setLocalStorage(updatedStarsShips);
    renderStarsShipsCard(updatedStarsShips);
  } catch (error) {
    console.log('error', error.massege);
    Notiflix.Notify.failure(`Something went wrong! Try again!`, {
      timeout: 3000,
    });
  }
};
getAllStarsShips();

//----------------------------------------------------------------

const handleAttack = e => {
  const btnElement = e.target;

  const checkClassElement = btnElement.classList.contains('attack-btn');
  if (!checkClassElement) {
    return;
  }

  const shipCard = btnElement.parentNode;
  shipCard.classList.add('ship-in-flying');

  const starShip = shipCard.firstElementChild;
  const shipName = starShip.textContent;

  setTimeout(() => {
    const starsShipsList = getLocalStorage();
    const newStarsShipList = starsShipsList.filter(
      ship => ship.name !== shipName
    );

    renderStarsShipsCard(newStarsShipList);
    setLocalStorage(newStarsShipList);

    if (newStarsShipList.length === 0) {
      refs.container.innerHTML = `<h1 class='title-no-ships'>All stars ships are in battle</h1>`;
    }
  }, 1000);
};

refs.container.addEventListener('click', handleAttack);

// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   while (true) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }

// const fib = fibonacci();

// console.log(fib.next().value); // 1
// console.log(fib.next().value); // 1
// console.log(fib.next().value); // 2
// console.log(fib.next().value); // 3
// console.log(fib.next().value); // 5

// function* simpleGenerator() {
//   yield 0;
//   yield 1;
//   yield 2;
// }

// const gen = simpleGenerator();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2

const numbers = {
  [Symbol.iterator]() {
    let num = 0;
    return {
      next() {
        num++;
        if (num <= 5) {
          return { value: num, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let num of numbers) {
}

// const myIterable = {
//   [Symbol.iterator]: function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//   },
// };

// for (let value of myIterable) {
//   console.log('myIterable', myIterable);
//   console.log('value', value);
//   // console.log(value); // 1, 2, 3
// }

const students = [
  { name: 'John', score: 80 },
  { name: 'Mary', score: 55 },
  { name: 'Bob', score: 70 },
  { name: 'Alice', score: 90 },
];

function* passedStudents() {
  for (const student of students) {
    if (student.score >= 60) {
      yield student.name;
    }
  }
}

// console.log('students', passedStudents().next());

for (const students of passedStudents()) {
  console.log('students', students);
}

const phoneBook = {
  'John Doe': '123-456-7890',
  'Jane Doe': '234-567-8901',
  'Bob Smith': '345-678-9012',
  'Alice Johnson': '456-789-0123',

  [Symbol.iterator]: function* () {
    const entries = Object.entries(this);
    for (let i = 0; i < entries.length; i++) {
      yield entries[i];
    }
  },
};

for (const iterator of phoneBook) {
  console.log('phoneBook', phoneBook);
}

class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  unsubscribe(eventName, listenerToRemove) {
    if (!this.events[eventName]) return;
    const index = this.events[eventName].indexOf(listenerToRemove);
    if (index !== -1) {
      this.events[eventName].splice(index, 1);
    }
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach(listener => listener(...args));
  }
}

const emitter = new EventEmitter();

const onGreeting = name => console.log(`hello ${name}`);

emitter.subscribe('greeting', onGreeting);
console.log('emitter', emitter.events);

emitter.emit('greeting', 'Alex');
emitter.unsubscribe('greeting', onGreeting);

console.log('emitter', emitter.events);

const arr = [1, 2, 3];

const iterator = arr.values();
console.log('iterator', iterator);

console.log(iterator.next()); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().done); // true
