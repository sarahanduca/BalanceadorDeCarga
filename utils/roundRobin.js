class RoundRobin {
  constructor() {
    this.line = [1, 2, 3];
  }

  traditional() {
    this.line.push(this.line[0]);
    return "http://localhost:300" + this.line.shift();
  }

  conectionType() {
    if (this.line[0] == 1) {
      this.line.push(this.line[0]);
      this.line.shift();
    }
    return this.traditional();
  }
}

module.exports = RoundRobin;
