var array1 = ['ab', 'bc', 'abc', 'cba', 'ab', 'ab', 'cba'];
var array2 = ['ab', 'cba', 'bb'];

const result = array2.map(item2=> array1.filter(item1=>item1==item2).length)
document.write(result);
