/**
 * @jest-environment jsdom
 */

import commentcreate from './commcounter';

test('expect the total displayed number of elements to be 6', () => {
  const comments = [
    {
      comment: 'This is nice!',
      creation_date: '2021-01-10',
      username: 'John',
    },
    {
      comment: 'Great content!',
      creation_date: '2021-02-10',
      username: 'Jane',
    },
    {
      comment: 'This is nice!',
      creation_date: '2021-01-10',
      username: 'John',
    },
    {
      comment: 'Great content!',
      creation_date: '2021-02-10',
      username: 'Jane',
    },
    {
      comment: 'This is nice!',
      creation_date: '2021-01-10',
      username: 'John',
    },
    {
      comment: 'Great content!',
      creation_date: '2021-02-10',
      username: 'Jane',
    },
  ];
  document.body.innerHTML = '<div id=\'comments-count\'>'
    + '</div>';
  commentcreate(comments);
  const commcount = document.getElementById('comments-count');
  expect(commcount.innerText).toBe(6);
});