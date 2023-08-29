class App {
  static staticProperty = 'static';

  constructor({ id, onChange = null }) {
    this.setId(id);
    this.#setOnChange(onChange);
  }

  #setOnChange(onChange) {
    this.onChange = onChange;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}

export default App;
