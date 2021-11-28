export default class Api {
  constructor() {
    this.getUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/tesla?format=json';
  }

  async getData() {
    const response = await fetch(this.getUrl);
    return response.json();
  }
}