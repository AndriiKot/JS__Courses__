// Function Declaration statement

const arr = ['andrii', 'oxi'];

function reverseMutation(arr) {
  arr.reverse()
}


// !!!  MUTATION !!!
   console.log(arr);      // [ 'andrii', 'oxi' ]
   reverseMutation(arr);
   console.log(arr);      // !!! [ 'oxi', 'andrii' ] !!!
// !!! MUTATION END !!!
