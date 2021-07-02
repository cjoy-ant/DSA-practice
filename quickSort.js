const quickSort = (array, start=0, end=array.length-1) => {
  if (start>=end){
    return array
  }

  const pointer = partition(array,start,end)
  array = quickSort(array,start,pointer-1)
  array = quickSort(array,pointer-1, end)
  return array
}

const partition = (array, start, end) => {
  const pivot = array[end]
  let j = 0
  for (let i=0; i< end; i++) {
    if (array[i] < pivot){
      swap(array, i, j)
      j++
    }
  }
  swap(array, end, j)
  return array
}

const swap = (array, i, j) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

module.exports = quickSort