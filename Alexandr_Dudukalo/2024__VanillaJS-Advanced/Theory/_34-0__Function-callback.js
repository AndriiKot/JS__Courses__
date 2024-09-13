
const discount = (price = 0) => {
  let discount = 0;
  if (price > 500) {
    discount = 200
    if (price > 700) {
      discount = 250 
    }
  }
  return price - discount
}

const printPrice = (price, fn) => {
  console.log(`Price: ${fn(price)}`)
}

printPrice(800, discount)