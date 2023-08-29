class App {
  static staticProperty = 'static';

  constructor({ id, onChange = null }) {
    this.id = id;
    this.onChange = onChange;

    this.#privateMethod();
  }

  #privateMethod() {
    this.id = '1';
  }

  publicMethod() {
    this.id = '2';
  }
}

export default App;
