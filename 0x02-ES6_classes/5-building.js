export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be number');
    }
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be number');
    }
    this._sqft = sqft;
  }
}
