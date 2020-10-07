const {element, by, expect} = require('detox');

import {tapAndWait} from '../helper';
import {OnBoardingIDs} from './../../src/screens/OnBoarding/index.ids';
import {CategoriesIDs} from './../../src/screens/Categories/index.ids';
import {TasksIDs} from '../../src/screens/Tasks/index.ids';

describe('Categories screen', () => {
  const goToCategoriesSteps = async () => {
    await tapAndWait(by.id(OnBoardingIDs.button));
  };

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Categories screen', async () => {
    await goToCategoriesSteps();
    await expect(element(by.id(CategoriesIDs.screenName))).toBeVisible();
  });

  it('should have Tasks screen after tap category', async () => {
    await goToCategoriesSteps();
    await tapAndWait(by.id(`${CategoriesIDs.category}-0`));
    await expect(element(by.id(TasksIDs.screenName))).toBeVisible();
  });
});
