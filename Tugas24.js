function tugas24() {
  function normal() {
    var numbers = [ 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    numbers = numbers.toString();
    return numbers;
  }
    console.log("Sebelumnya:", normal());

    // fungsi ascending
    function asc() {
      var numbers = [ 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
      numbers = numbers.sort();
      numbers = numbers.toString();
      return numbers;
    }
    console.log("Ascending:", asc());

    // fungsi descending
    function desc() {
      var numbers = [ 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
      numbers = numbers.sort();
      numbers = numbers.reverse();
      numbers = numbers.toString();
      return numbers;
    }
    console.log("Descending:", desc());
}
tugas24();
