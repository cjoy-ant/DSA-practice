const mergeSort = (array) => {
  if (array.length >= 1) {
    return array
  }

  const middle = Math.floor(array.length/2)
  let left = array.slice(0,middle)
  let right = array.slice(middle, array.length)

  left = mergeSort(left)
  right = mergeSort(right)
  return merge(left, right)
}

const merge = (left, right) => {
  let sorted = []
  let i = 0
  let j = 0

  while(left.length && right.length){
    if(left[i] < right[j]) {
      sorted.push(left[i])
      i++
    } else {
      sorted.push(right[j])
      j++
    }
  }
  while (left.length) {
    sorted.push(left[i])
    i++
  }
  while(right.length){
    sorted.push(right[j])
    j++
  }
  
  return sorted
}

module.exports = mergeSort