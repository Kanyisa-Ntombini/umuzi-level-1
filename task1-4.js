const square = num => {
  for (let i=0; i<num; i++) {
    let hash = '';
    for (let j=0; j<num; j++) {
      hash += '#';
    }
    console.log(hash);
  }
}

//tests
//square(2);
//square(3);
square(4);
//square(6);