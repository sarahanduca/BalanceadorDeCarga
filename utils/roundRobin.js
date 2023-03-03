class RoundRobin {
  constructor() {
    this.servers = [1, 2, 3];
  }

  default() {
    this.servers.push(this.servers[0]);
    return "http://localhost:300" + this.servers.shift();
  }

  connection() {
    if (this.servers[0] == 1) this.servers.shift();
    return this.default();
  }
}

module.exports = RoundRobin;
