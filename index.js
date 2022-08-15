

const fibsRec4 = (n, fibArray=[0, 1]) => n > 0 ? fibsRec4(n -1, fibArray.concat((fibArray.at(-1) + fibArray.at(-2)))) : fibArray 

const dummyArray = [105,77, 102, 85, 2000, 66, 1, 103, 22, 488, 9222, 868, 109, 110, 757, 44, 32, 2, 88,
  56, 106, 450000000000, 101, 585984156, 107, 54890262, 689458, 104, 88888888]

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
  let rightSort = []
  let leftSort = []

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
    right.length >=3 ? sortMerge4(right, sortedRight) : sort(right, sortedRight)
    left.length>=3 ? sortMerge4(left, sortedLeft) : sort(left, sortedLeft)
    merge(sortedRight)
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
  let sortLeft = []
  let sortRight = []
  
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
    console.log('heres me sending the thing ' + rightSorted, leftSorted)
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
    return suppliedArray
  }
    
    if (left.length>= 3 && right.length>= 3) {
      let sortedRight = []
      let sortedLeft = []
      sortMerge4(right, sortRight)
      sortMerge4(left, sortLeft)
      merge(sortRight, sortLeft, sorted)
    }

    if (left.length>= 3 && right.length <= 2) {
      sortMerge4(left, sortLeft)
      sortRight = sort(right)
      merge(sortRight, sortLeft, sorted)
    }

    if (left.length <= 2 && right.length <= 2){
      let sortLeft = sort(left)
      let sortRight = sort(right)
      togetherNow = []
      console.log('herp ' + merge(sortRight, sortLeft, sorted))
    } 
  

  merge(sortRight, sortLeft, sorted)
  console.log('grow up ' + sortRight, 'blow away ' + sortLeft)
  console.log('final =' + sorted, 'initial = ' + array)
  console.log(sorted)
  return sorted
}


sortMerge4(dummyArray)

sortMerge4([22, 55, 1])