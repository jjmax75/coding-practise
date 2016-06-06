'use strict';

const sideEffects = function sideEffects() {
  let o = Object.create(Object.prototype);

  o.cartProto = {
    items: [],

    addItem: function addItem(item) {
      this.items.push(item);
    }
  };

  o.createCart = function(items) {
    let cart = Object.create(o.cartProto);
    cart.items = items;
    return cart;
  };

  o.savedCart = o.createCart(['apple', 'pear', 'orange']);

  o.session = {
    get: function get() {
      return this.cart;
    },

    cart: o.createCart(o.savedCart.items)
  };

  return o;

};

const lambdas = function lambdas() {
  let o = Object.create(Object.prototype);


};

module.exports = {sideEffects};
