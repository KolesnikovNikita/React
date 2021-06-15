class Check {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  removeItem(id) {
    const index = this.items.findIndex(item => item.id === id)
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  totalCount() {
    return this.items.length;
  }


  totalAmount() {
    const amount = this.items.reduce((total, person) => {
      return total + person.price
    }, 0)
    return amount
  }

}


export default Check;
