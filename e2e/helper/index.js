const {element} = require('detox');

export const delay = (ms = 500) => new Promise((res) => setTimeout(res, ms));

export const tapAndWait = async (matcher, ms = 500) => {
  await element(matcher).tap();
  await delay(ms);
};
