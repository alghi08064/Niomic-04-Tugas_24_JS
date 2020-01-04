function tugas24() {
  function numbers() {
    var numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    numbers = numbers.toString();
    return numbers;
  }
  console.log("Sebelumnya:", numbers());

  // fungsi ascending
  function ascnumbers() {
    var numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    asc = numbers.toString(numbers.sort(function(a, b){return a-b}));
    return asc;
  }
  console.log("Ascending:", ascnumbers());

  // fungsi descending
  function descnumbers() {
    var numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    desc = numbers.toString(numbers.sort(function(a, b){return b-a}));
    return desc;
  }
  console.log("Descending:", descnumbers());
}
tugas24();
