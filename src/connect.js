import flyd from 'flyd';

const connect = (from, to) => {
  return flyd.stream([from], function() {
    return to(from());
  });
};

export default (from, to) => {
  if(to) {
    return connect(from, to);
  } else {
    return {
      to: s => connect(from, s)
    };
  }
};
