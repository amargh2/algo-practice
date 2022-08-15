const fibsRec4 = (n, fibArray=[0, 1]) => n > 0 ? fibsRec4(n -1, fibArray.concat((fibArray.at(-1) + fibArray.at(-2)))) : fibArray 

const sortedArray = []

const mergeSort = (array) => {
  let halved = array.length % 2 === 0 ? array.length/2 : (array.length + 1) / 2 
  leftArray = array.slice(0, halved)
  rightArray = array.slice(halved)
    if (leftArray.length === 1) {
      sortedArray.push(leftArray)
      console.log(sortedArray)
      return sortedArray
    }
    if (leftArray.length  === 2 ) {
      leftArray.at(0) < leftArray.at(1) ? sortedArray.concat(leftArray.at(0), leftArray.at(1)) : sortedArray.concat(leftArray.at(1), array.at(0))
      console.log(sortedArray)
      return sortedArray

    }
    if (leftArray.length > 2) {
      console.log(sortedArray)
      mergeSort(leftArray)
  }
  
  console.log(array, sortedArray)

  
  return sortedArray
}


function mergeSort2(array, sorted = []) {
  const half = (array) => {
    if (array.length === 1) {
      sortedArray.push(array)
    }
    if (array.length === 2) {
      array[0] > array[1] ? sorted.concat(array[1], array[0]): sorted.concat(array[1], array[0])
      sorted.concat(sorted)
    }
    if (array.length > 2) {
      array.length % 2 === 0 ? array.length/2 : (array.length + 1) / 2
    }
  } 
  let leftArray = array.slice(0, half(array)) 
  let rightArray = array.slice(half(array))
  mergeSort(leftArray, sorted)

  console.log(sortedArray)
  console.log(leftArray, rightArray)
}


const dummyArray = [18, 55, 400, 12]

const sortMerge = (array, sorted=[]) => {
  
  const getDivideFactor =  (array) => {
    if (array.length > 2) {
      return array.length % 2 === 0 ? array.length / 2 : (array.length + 1)/2
    } else {
      return 1
    }
  }

  let left = []
  let right = []
  let mergedLeft = []
  let mergedRight = []
  
  left = array.slice(0, getDivideFactor(array))
  right = array.slice(getDivideFactor(array))
  
  console.log(left, right)

  if (left.length === 2){
    left[0] > left[1] ? mergedLeft.push(left[1], left[0]): mergedLeft.push(left[0], left[1])
  } if (left.length === 1) {
    mergedLeft.push(left[0])
  } if (right.length === 2){
    right[0] > right[1] ? mergedRight.push(right[1], right[0]): mergedRight.push(right[0], right[1])
  } if (right.length === 1) {
    mergedRight.push(right[0])
  } if (right.length > 2) {
    console.log('right greater than 2 returns: ' + sortMerge(right, sorted))
  } if (left.length > 2) {
    console.log('left greater than 2 returns: ' + sortMerge(left, sorted))
  }
  console.log('merged left and merged right: ' + mergedLeft, mergedRight)

  mergedRight[0] > mergedLeft[-1] ? sorted.push(mergedLeft.concat(mergedRight)) : sorted.push(mergedRight.concat(mergedLeft)) 


  return sorted

}

console.log(sortMerge(dummyArray))
