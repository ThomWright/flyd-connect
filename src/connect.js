import flyd from 'flyd';

export default (from, to) => {
  return flyd.stream([from], function() {
    return to(from());
  });
};
