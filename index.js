const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0 , -2];

function selectionSort(array) {
  for(let i = 0; i < array.length; i++){

    let min = i
    let temp = array[i]
    for(let j = i + 1; j < array.length; j++){
      if(array[i] > array[j]){
        min = j
      }
    }
    array[i] = array[min];
    array[min]= temp;
  }
  return array
}

selectionSort(numbers);