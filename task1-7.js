const combine = (arr1, arr2) => {
  let combinedList = [];
  for (let i=0; i<arr1.length; i++) {
    combinedList.push(arr1[i]);
    combinedList.push(arr2[i]);
  }
  return combinedList;

}

console.log(combine([11,22,33], [1,2,3]));