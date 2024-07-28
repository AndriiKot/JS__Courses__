// Example 1
const sum = (a,b) => {
  const result = a + b;
  return result;
};

const amount = sum(2,3);

// Variation 1
 const sum_v1 = (a,b) => {
  return a + b;
 };

const amount_new1 = sum_v1(2,3);

// Variation 2
 function sum_v2(a,b) {
  return a + b;
 };


const amount_new2 = sum_v2(2,3);

// Variation 3
 const sum_v3 = function sum_v3(a,b) {
  return a + b;
 };

const amount_new3 = sum_v3(2,3);

// Variation 4
 const sum_v4 = function(a,b) {
  return a + b;
 };

const amount_new4 = sum_v4(2,3)

// Variation 5
 const sum_v5 = (a,b) => {
  return a + b;
 };

const amount_new5 = sum_v5(2,3)

// Variation 6
  const sum_v6 = (a,b) => a + b;

const amount_new6 = sum_v6(2,3);

console.log(amount,amount_new1,amount_new2,amount_new3,amount_new4,amount_new5,amount_new6); 





















