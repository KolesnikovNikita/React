class PopularProducts {
  constructor(amount, price) {
    this.amount = amount;
    this.price = price;
  }

  mostPopular() {
    if (this.amount >= 5) {
      return 'The most popular product today is: ' + this.amount;
    }
  }

  mostExpensive() {
    if (this.price > 80) {
      return 'The most expensive product today is ' + this.price;
    }
  }
}

export default PopularProducts;