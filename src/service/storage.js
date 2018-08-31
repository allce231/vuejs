class Storage {
  constructor () {

  }
  get (itemName) {
    return localStorage.getItem(itemName)
  }
  set ( key, val ){
    localStorage.setItem( key, val);
  }
  remove(key) {
    localStorage.removeItem(key);
  }
  removeAll() {
    localStorage.clear()
  }
}

const storage = new Storage();

export default storage;
