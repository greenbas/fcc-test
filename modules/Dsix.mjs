export class Die {
    constructor(faces = 6) {
      this.faces = faces
      this.value = this.roll;
    }

    roll() {
      return this.value = Math.floor(Math.random() * this.faces + 1);
    }

    getValue() {
      return this.value;
    }

  }