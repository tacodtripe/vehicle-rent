/**
 * @jest-environment jsdom
 */

import { countCars, addItem } from './items';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('the number of cars should be equal to the number of items provided by the api', () => {
  const data = [
    {
      Make_ID: 441, Make_Name: 'TESLA', Model_ID: 1685, Model_Name: 'Model S',
    },
    {
      Make_ID: 441, Make_Name: 'TESLA', Model_ID: 2071, Model_Name: 'Roadster',
    },
    {
      Make_ID: 441, Make_Name: 'TESLA', Model_ID: 10199, Model_Name: 'Model X',
    },
    {
      Make_ID: 441, Make_Name: 'TESLA', Model_ID: 17834, Model_Name: 'Model 3',
    },
    {
      Make_ID: 441, Make_Name: 'TESLA', Model_ID: 27027, Model_Name: 'Model Y',
    },
  ];

  document.body.innerHTML = '<div id=\'itemsContainer\'>'
  + '</div>';

  // const itemsContainer = document.querySelector('#itemsContainer')

  data.forEach((e) => {
    addItem(e.Model_Name);
  });

  expect(data.length).toBe(countCars());
});
