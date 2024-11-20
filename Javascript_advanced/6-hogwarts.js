class StudentHogwarts {
  constructor() {
    this.privateScore = 0;
    this.name = null;
  }

  setName(newName) {
    this.name = newName;
    return { name: this.name };
  }

  changeScoreBy(points) {
    this.privateScore += points;
  }

  rewardStudent() {
    this.changeScoreBy(1);
  }

  penalizeStudent() {
    this.changeScoreBy(-1);
  }

  getScore() {
    return { name: this.name, score: this.privateScore };
  }
}

// Create Harry
let harry = new StudentHogwarts();
harry.setName("Harry");
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}
console.log(harry.getScore());

// Create Draco
let draco = new StudentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let i = 0; i < 3; i++) {
  draco.penalizeStudent();
}
console.log(draco.getScore());
