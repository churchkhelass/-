  class Product {
    setPrice(price) {
        this.price = price;
        return this;
    }
    withDiscount(percent) {
        this.discountedPrice = this.price * (100 - percent) / 100;
        return this;
    }
}

class Shop {
    addProducts(products) {
        this.products = Array.from(products);
    }
    getProduct(id) {
        return this.products.find(e => e.id === id);
    };
}

var products = [
    {
        "id": 3,
        "name": "Cake",
        "price": 333,
        "description": "The tastiest cake in the world."
    },
    {
        "id": 5,
        "name": "Petroleum",
        "price": 2977,
        "description": "Black gold."
    },
    {
        "id": 8,
        "name": "Moscow metro logo",
        "price": 117000000,
        "description": "Remove circle from logo"
    }
];

for (var product of products) 
    Object.setPrototypeOf(product, Product.prototype); 

var shop = new Shop();
shop.addProducts(products);

console.log(shop.getProduct(5).setPrice(3224).withDiscount(10).discountedPrice === 2901.6);