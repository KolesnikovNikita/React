class CalculatePrice {
  constructor(good) {
    this.good = good;
  }

  calculateSumPrice() {
    var sum = 0;
    var count = 0;
    return (sum += this.good.price) * (count += this.good.count);
  }

  calculateTaxPrice() {
    return Math.round(this.good.price / 1.18);
  }

  calculateDiscountPrice() {
    return Math.round(this.good.price / 1.18) / 2;
  }
}


export default CalculatePrice;
