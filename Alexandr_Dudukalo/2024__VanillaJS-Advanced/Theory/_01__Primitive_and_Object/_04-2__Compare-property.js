﻿'use strict';

const product1 = {
  name: 'ball',
  price: 20,
};

const product2 = {
  name: 'ball',
  price: 20,
};

if (product1.price === product2.price && product1.name === product2.name) {
  console.log('true');
} else {
  console.log('false');
}

// true
