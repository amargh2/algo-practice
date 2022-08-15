

const fibsRec4 = (n, fibArray=[0, 1]) => n > 0 ? fibsRec4(n -1, fibArray.concat((fibArray.at(-1) + fibArray.at(-2)))) : fibArray 

const dummyArray = [3, 5, 44, 55, 99, 8, 4, 1, 2, 6, 7, 9, 10, 15000, 1000000, 2500, 88, 66, 44, 96]

const sortMerge3 = (array, sorted=[]) => {

  const getDivideFactor =  (array) => {
    if (array.length > 2) {
      return array.length % 2 === 0 ? array.length / 2 : (array.length + 1)/2
    } else {
      return 1
    }
  }

  let left = []
  let right = []

  left = array.slice(0, getDivideFactor(array))
  right = array.slice(getDivideFactor(array))
  console.log('left = ' + left + ' right= ' + right)
  
  

  function sort(array) {
    let sortedArray
    if (array.length === 2) {
      sortedArray = array[0] > array[1] ? [array[1], array[0]] : [array[0], array[1]]
    } if (array.length === 1) {
      sortedArray = [array[0]]
    }
    return sortedArray
  }

  function merge(rightSorted, leftSorted, suppliedArray =[]) {
    const number = rightSorted.length + leftSorted.length
    for (let i = 0; i < number; i++) {
      if (leftSorted.length === 0 && rightSorted.length !== 0) {
        suppliedArray.push(rightSorted[0])
        rightSorted.splice(0,1)
      } if (rightSorted.length === 0 && leftSorted.length !== 0) {
        suppliedArray.push(leftSorted[0])
        leftSorted.splice(0, 1)
      } if (rightSorted.length === 0 && leftSorted.length === 0) {
        return suppliedArray
      } if (leftSorted[0] > rightSorted[0]) {
        suppliedArray.push(rightSorted[0])
        rightSorted.splice(0, 1)
        console.log(rightSorted[0], leftSorted[0])
      } if(leftSorted[0] < rightSorted[0]) {
        suppliedArray.push(leftSorted[0])
        leftSorted.splice(0,1)
      } 
    }    
    console.log('supplied array = ' + suppliedArray)
    return suppliedArray
  }

  if (left.length <= 2 && right.length <= 2){
    let sortedLeft = sort(left)
    let sortedRight = sort(right)
    togetherNow = []
    console.log(sortedLeft, sortedRight)
    merge(sortedRight, sortedLeft, sorted)
    console.log(togetherNow)
    } 

  if (right.length >= 3 || left.length>=3) {
    console.log('its this one')
    let sortedRight = []
    let sortedLeft = []
    sortMerge3(right, sortedRight)
    sortMerge3(left, sortedLeft)
    merge(sortedRight, sortedLeft, sorted)
  }


  console.log('final =' + sorted, 'initial = ' + array)
  
}

const sortMerge4 = (array, sorted=[]) => {

  const getDivideFactor =  (array) => {
    if (array.length > 2) {
      return array.length % 2 === 0 ? array.length / 2 : (array.length + 1)/2
    } else {
      return 1
    }
  }

  let left = []
  let right = []

  left = array.slice(0, getDivideFactor(array))
  right = array.slice(getDivideFactor(array))
  console.log('left = ' + left + ' right= ' + right)
  
  

  function sort(array) {
    let sortedArray
    if (array.length === 2) {
      sortedArray = array[0] > array[1] ? [array[1], array[0]] : [array[0], array[1]]
    } if (array.length === 1) {
      sortedArray = [array[0]]
    }
    return sortedArray
  }

  function merge(rightSorted, leftSorted, suppliedArray =[]) {
    const number = rightSorted.length + leftSorted.length
    for (let i = 0; i < number; i++) {
      if (leftSorted.length === 0 && rightSorted.length !== 0) {
        suppliedArray.push(rightSorted[0])
        rightSorted.splice(0,1)
      } if (rightSorted.length === 0 && leftSorted.length !== 0) {
        suppliedArray.push(leftSorted[0])
        leftSorted.splice(0, 1)
      } if (rightSorted.length === 0 && leftSorted.length === 0) {
        return suppliedArray
      } if (leftSorted[0] > rightSorted[0]) {
        suppliedArray.push(rightSorted[0])
        rightSorted.splice(0, 1)
        console.log(rightSorted[0], leftSorted[0])
      } if(leftSorted[0] < rightSorted[0]) {
        suppliedArray.push(leftSorted[0])
        leftSorted.splice(0,1)
      } 
    }    
    console.log('supplied array = ' + suppliedArray)
    return suppliedArray
  }

  if (left.length <= 2 && right.length <= 2){
    let sortedLeft = sort(left)
    let sortedRight = sort(right)
    togetherNow = []
    console.log(sortedLeft, sortedRight)
    merge(sortedRight, sortedLeft, sorted)
    console.log(togetherNow)
    } 

  if (right.length >= 3 || left.length>=3) {
    console.log('its this one')
    let sortedRight = []
    let sortedLeft = []
    sortMerge3(right, sortedRight)
    sortMerge3(left, sortedLeft)
    merge(sortedRight, sortedLeft, sorted)
  }


  console.log('final =' + sorted, 'initial = ' + array)
  
}


sortMerge3(dummyArray)