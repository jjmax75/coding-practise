'use strict';

const test = require('tape');
const path = process.cwd();
const chapterCode = require(path + '/programmingJavascriptApplications/02Functions.js');

let sideEffects = chapterCode.sideEffects();

test('Order WITH unintentional side effects', function(t) {
  sideEffects.session.cart.addItem('grapefruit');
  t.plan(2);
  t.notEqual(sideEffects.session.cart.items.indexOf('grapefruit'), -1, 'Passes: Session cart has grapefruit');
  t.equal(sideEffects.savedCart.items.indexOf('grapefruit'), -1, 'Fails: The stored cart is unchanged');
});
