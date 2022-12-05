export class DSix {
    constructor() {
      this.value = this.roll;
    }

    roll() {
      return this.value = Math.floor(Math.random() * 6 + 1);
    }

    getValue() {
      return this.value;
    }

  }