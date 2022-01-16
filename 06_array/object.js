// reference type
console.log("5 === 5", 5 === 5);
console.log("[] === []", [] === []);
console.log("[1] === [1]", [1] === [1]);

const obj1 = { value: 10 };
const obj2 = obj1;
const obj3 = { value: 10 };
console.log("obj1 === obj2", obj1 === obj2);
console.log("obj1 === obj3", obj1 === obj3);

obj1.value = 15;
console.log("obj1.val = 15");
console.log("obj2.val", obj2.value);
console.log("obj3.val", obj3.value);

// context
const obj4 = {
  a: function () {
    console.log("funcA this", this);
  },
};
obj4.a();

// instantiation
class Player {
  constructor(name, type) {
    console.log("Player this", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    //console.log(this); => error
    super(name, type);
    console.log("Wizard this", this);
  }

  play() {
    console.log(`I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("Mario", "Dev");
const wizard2 = new Wizard("Luigi", "Dark magic");
wizard1.introduce();
wizard1.play();
wizard2.introduce();
wizard2.play();
