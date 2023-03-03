class RoundRobin {
  constructor() {
    this.servers = [1, 2, 3];
    this.connectS1 = 0;
  }

  default() {
    this.servers.push(this.servers[0]);
    return "http://localhost:300" + this.servers.shift();
  }

  connection() {
    if (this.servers[0] == 1) {
      this.servers.push(this.servers[0]);
      this.servers.shift();
      this.connectS1 = 1;
    }
    return this.default();
  }
}

module.exports = RoundRobin;
