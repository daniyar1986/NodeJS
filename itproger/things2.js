array_counter = function (array) {
    return "В массиве находиться "+array.length+" элементов";
};

multiply = function(x,y){
  return `${x} умножить  ${y} равно ${x*y}`;
};

some_value= 451;


module.exports = {
    array_counter:array_counter,
    multiply:multiply,
    some_value : some_value
};

