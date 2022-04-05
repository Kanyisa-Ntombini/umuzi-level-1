const triangle = num => {
  if (num > 0) {
    for (let i=1; i<=num; i++) {
      let hash = '';
      for (let j=0; j<i; j++) {
        hash += '#';
      }
      console.log(hash);
    }
  } else {
    for (let i=-num; i>=1; i--) {
      let hash = '';
      for (let j=0; j<i; j++) {
        hash += '#';
      }
      console.log(hash);
    }
  }

}

//tests
//triangle(2);
triangle(-2);
//triangle(-4);
//triangel(4);