//Variation 1
const sum_v1 = (a = 0, b = 0) => {
 return a + b;
};


sum_v1(6,5);   // return 11
sum_v1(6);    // return 6
sum_v1();    // retunr 0

//Variation 2

const sum_v2 = (a,b) => {
  return a + b;
};

sum_v2(6,5);  // return 11
sum_v2(5);    // return NaN
sum_v2();     // return NaN

//Variation 3

const sum_v3 = (...args) => {
  return args[0] + args[1];
};


