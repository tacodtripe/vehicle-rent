export default class Comments {
  constructor() {
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LlpQhOb6BeSeG1QA0yT5/comments';
    this.itemURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LlpQhOb6BeSeG1QA0yT5/comments?item_id=';
  }

    commentItem = async (carName, userName, userComment) => {
      const resp = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: carName,
          username: userName,
          comment: userComment,
        }),
      });
      return resp.text();
    }

    getComments = async (itemId) => {
      const resp = await fetch(`${this.itemURL}${itemId}`);
      return resp.json();
    }
}