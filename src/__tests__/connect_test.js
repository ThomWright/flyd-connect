/*global describe*/
/*global it*/
/*global expect*/

import flyd from 'flyd';
import connect from '../connect.js';

describe('connect', () => {
  it('should connect two streams', () => {
    const s1 = flyd.stream();
    const s2 = flyd.stream();

    connect(s1, s2);

    s1(1);

    expect(s2()).to.equal(1);
  });

  it('should connect them the correct way', () => {
    const s1 = flyd.stream();
    const s2 = flyd.stream();

    connect(s1, s2);

    s2(1);

    expect(s1()).to.not.equal(1);
  });

  it('should work for a bigger example', () => {
    const s1 = flyd.stream();
    const s2 = s1.map(x => x * 2);

    const s3 = flyd.stream();
    const s4 = s2.map(x => x + 1);

    connect(s2, s3);

    s1(1);

    expect(s4()).to.equal(3);
  });
});
