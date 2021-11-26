export default class Likes {
  constructor() {
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LlpQhOb6BeSeG1QA0yT5/likes';
  }

  likeItem = async (carName) => {
    const resp = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: carName,
      }),
    });
    return resp.text();
  }

  getLikes = async () => {
    const resp = await fetch(this.baseUrl);
    return resp.json();
  }
}

// fetch(, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     'item_id': 'item1'
//   })
// })
// .then(response => response.text())
// .then(data => console.log(data))

// fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LlpQhOb6BeSeG1QA0yT5/likes')
// .then(response => (response.text()))
// .then(data => console.log(data))