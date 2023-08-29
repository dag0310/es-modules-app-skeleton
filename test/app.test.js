import { describe, it } from 'mocha';
import { expect } from 'chai';
import App from '../src/app.js';

describe('App', () => {
  it('set the id correctly', () => {
    // given
    const id = 3;

    // when
    const app = new App({ id });

    // then
    expect(app.getId()).to.equal(3);
  });
});
