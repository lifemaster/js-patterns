const CartModule = (function() {

  // private data
  let sum = 0;
  let goods = [];

  // public interface
  return {
    addProduct(product) {
      sum += product.price;
      goods.push(product);
    },
    getProducts() {
      return goods;
    },
    getSum() {
      return sum;
    }
  }
})();

const salt = { name: 'Salt', price: 20 };
const sugar = { name: 'Sugar', price: 50 };

CartModule.addProduct(salt);
CartModule.addProduct(sugar);

console.log('Goods:', CartModule.getProducts());
console.log('Total sum:', CartModule.getSum());