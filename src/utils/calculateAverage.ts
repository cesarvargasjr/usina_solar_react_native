export function calculateAverage(array: any) {
  var sum = 0;
  var quantity = array?.length;

  for (var i = 0; i < quantity; i++) {
    sum += array[i];
  }

  var average = sum / quantity;
  return average;
}