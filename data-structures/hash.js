class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    const weirdPrimeNumber = 53;
    let total = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let charCode = char.charCodeAt(0) - 96;
      total = (total * weirdPrimeNumber + charCode) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

let hashTable = new HashTable();
hashTable.set("ervin", 19);
hashTable.set("eron", 24);

let personAge = hashTable.get("eron");
console.log(personAge);
