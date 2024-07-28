let level1 = 5;
  console.log(level1);  //  5

const fun_1 = () => {
 let level1 = 4;
   console.log(level1);  // 4
 {
   let level1 = 3;
   console.log(level1);  // 3
 }
 
   console.log(level1);  // 4
};





 let level2 = 5;
  console.log(level2);   // 5

 const fun_2 = () => {
  console.log(level2);   // 5
  {
    let level2 = 3;
  console.log(level2);   // 3
  }
  console.log(level2);   // 5
 };





 let level3 = 5;
  console.log(level3);   // 5

 const fun_3 = () => {
  console.log(level3);   // 5
  {
  console.log(level3);   // 5
  }
  console.log(level3);   // 5
  };



let level4 = 5;
  console.log(level4);   // 5

 const fun_4 = () => {
  let level4 = 4
  console.log(level4);   // 4
  {
  console.log(level4);   // 4
  }
  console.log(level4);   // 4
};



let level5 = 5;
  console.log(level5);   // 5

 const fun_5 = () => {
  console.log(level5);   // 5
  {
  let level5 = 3
  console.log(level4);   // 3
  }
  console.log(level4);   // 3
};






