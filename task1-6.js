const longest = arr => {
  let longestNum = -1000;
  //let longestArr = [];

  for (let i=0; i<arr.length; i++) {
    if (arr[i].length >= longestNum) {
      longestNum = arr[i].length;
    }
  }

  /*for (let j=0; j<arr.length; j++) {
    if (arr[j].length === longestNum) {
      longestArr.push(arr[j]);
    }
  }*/

  let longestArr = arr.filter(element => element.length === longestNum);

  longestArr.forEach(word => console.log(word));
}

//tests
//longest(["the","quick","brown", "fox", "ate", "my", "chickens"]);
longest(["once", "upon", "a", "time"])