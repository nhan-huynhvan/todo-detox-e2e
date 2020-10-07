const {element, by, expect} = require('detox');

import {OnBoardingIDs} from './../../src/screens/OnBoarding/index.ids';
import {CategoriesIDs} from './../../src/screens/Categories/index.ids';
import {tapAndWait} from '../helper';

describe('OnBoarding screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Onboarding screen', async () => {
    await expect(element(by.id(OnBoardingIDs.screenName))).toBeVisible();
  });

  it('should show Categories screen after tap Get Started', async () => {
    await tapAndWait(by.id(OnBoardingIDs.button));
    await expect(element(by.id(CategoriesIDs.screenName))).toBeVisible();
  });
});
