let store = { drivers: [], trips: [], passengers: [] };

let userId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++userId;
    store.drivers.push(this);
  }
  
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  
}

let tripId = 0;

class Trip {
  constructor(name) {
    this.name = name;
  }
}







