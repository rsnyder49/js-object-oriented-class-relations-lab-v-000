let store = { drivers: [], trips: [], passengers: [] };

let userId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++userId;
    store.drivers.push(this);
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
  }
}