const {element, by, expect} = require('detox');

import {tapAndWait} from '../helper';
import {OnBoardingIDs} from '../../src/screens/OnBoarding/index.ids';
import {CategoriesIDs} from '../../src/screens/Categories/index.ids';
import {TasksIDs} from '../../src/screens/Tasks/index.ids';

describe('Tasks screen', () => {
  const goToTasksSteps = async () => {
    await tapAndWait(by.id(OnBoardingIDs.button));
    await tapAndWait(by.id(`${CategoriesIDs.category}-0`));
  };

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Tasks screen', async () => {
    await goToTasksSteps();
    await expect(element(by.id(TasksIDs.screenName))).toBeVisible();
  });

  it('can back Categories screen after tab back', async () => {
    await goToTasksSteps();
    if (device.getPlatform() === 'ios') {
      await tapAndWait(by.text('Categories'));
    } else {
      await device.pressBack();
    }
    await expect(element(by.id(CategoriesIDs.screenName))).toBeVisible();
  });

  it('can check/uncheck checkbox', async () => {
    await goToTasksSteps();
    await expect(element(by.id(`${TasksIDs.checkbox}-0`))).toHaveLabel(
      'unchecked',
    );
    await tapAndWait(by.id(`${TasksIDs.checkbox}-0`));
    await expect(element(by.id(`${TasksIDs.checkbox}-0`))).toHaveLabel(
      'checked',
    );
    await tapAndWait(by.id(`${TasksIDs.checkbox}-0`));
    await expect(element(by.id(`${TasksIDs.checkbox}-0`))).toHaveLabel(
      'unchecked',
    );
  });

  it('should have Add task modal after tap Add icon', async () => {
    await goToTasksSteps();
    await tapAndWait(by.id(TasksIDs.plus), 1000);
    await expect(element(by.id(TasksIDs.modal))).toBeVisible();
  });

  it('can close Add task modal', async () => {
    await goToTasksSteps();
    await tapAndWait(by.id(TasksIDs.plus));
    await tapAndWait(by.text('Hide'));
    await expect(element(by.id(TasksIDs.modal))).toBeNotVisible();
  });
});
