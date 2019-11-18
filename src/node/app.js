const _ = require('lodash');
const sampleArray = [1, 2, 0, 0, false, 3];
const arr1 = [11, [111, 222], [[1111, 2222]]];
const lodashArray = {};

// Make sunset of array
lodashArray.chunk = function () {
  console.log(_.chunk(sampleArray, 3));
}

// Compact an array by removing falsy values
lodashArray.compact = function () {
  console.log(_.compact(sampleArray));
}

// Concat an array 
lodashArray.concat = function () {
  console.log(_.concat(sampleArray, arr1));
}

// Difference of an array means those elements which are in diffArr1 but not in diffArr2 
const diffArr1 = [12, 3, 12, 3, 2, 44, 3, 4, 3, 5, 4, 4, 5, 12];
const diffArr2 = [5, 2, 3, 32, 23, 54, 33, 4, 657, 34, 2, 3, 4, 45, 464, 5, 362];

lodashArray.difference = function () {
  console.log(_.difference(diffArr1, diffArr2));
}

/* 
  Zipwith returns an array with the desired operation on each element of the array here 
  a = zip1[index]
  b = zip2[index]
  c = zip3[index]
*/
const zip1 = [1, 1];
const zip2 = [11, 12];
const zip3 = [111, 121];

lodashArray.zipWith = function () {
  console.log(_.zipWith(zip1, zip2, zip3, function (a, b, c) {
    return a * b * c;
  }));
}

/** ZipObjectDeep
 * Here zipDeepObject is used to create an array of objects where zip1 acts as the key 
 * and zip2 acts as the values
 * NOTE: zip1 values must be an uniques otherwise instead of creating new Keys 
 * existing key will get updated.
 */
lodashArray.zipObjectDeep = function () {
  console.log(_.zipObjectDeep(zip1, zip2));
}

/** ZipObject
 * This function is just used to zip the elements of the array to a new array
 */
lodashArray.zip = function () {
  console.log(_.zip(zip1, zip2, zip3));
}


/** Fill
 * initializes an array with some value
 * i) It fills an array of length 5 with some value
 * ii) It fills or replaces the value from 1 to 5 index with * 
 */
lodashArray.fill = function () {
  console.log(_.fill(Array(5), '*'));
  console.log(_.fill([1, 2, 8, 9, 0, 3], '*', 1, 5));
}

/** FindIndex
 * 
 */

const objectsArray = [
  { name: 'Abhishek', company: 'Vfirst' },
  { name: 'Geet', company: 'Oyo' },
  { name: 'Bimma', company: 'Zomato' },
  { name: 'Anjali', company: 'Google' },
  { name: 'Surbhi', company: 'Zenmax' }
]

lodashArray.findIndex = function () {
  console.log(_.findIndex(diffArr1, function (o) {
    return o === 12;
  }));
  console.log(_.findIndex(objectsArray, function (o) {
    return o.name === 'Geet';
  }));
}

/** FindlastIndex
 * 
 */
lodashArray.findLastIndex = function () {
  console.log(_.findLastIndex(diffArr1, function (o) {
    return o === 12;
  }));
}

/** Flatten
 *
 */
lodashArray.flatten = function () {
  console.log(_.flatten([1, 2, 3, 4, [2, 23, 43], [[1, 2], [22, 34]]]));
}

/** FlattenDeep
 *
 */
lodashArray.flattenDeep = function () {
  console.log(_.flattenDeep([1, 2, 3, 4, [2, 23, 43], [[1, 2], [22, 34]]]));
}

/** FlattenDepth
 * 
 */
lodashArray.flattenDepth = function () {
  console.log(_.flattenDepth([1, 2, 3, 4, [2, 23, 43], [[1, 2], [[22, 34]]]], 2));
}

/** Head
 * 
 */
lodashArray.head = function () {
  console.log(_.head(diffArr1));
}

/** IndexOf
 * 
 */
lodashArray.indexOf = function () {
  console.log(_.indexOf(diffArr1, _.head(diffArr1)));
}


/** Initial
 * 
 */
lodashArray.initial = function () {
  console.log(diffArr1.length)
  console.log(_.initial(diffArr1).length);
}

/** Intersection
 *
 */
lodashArray.intersection = function () {
  console.log(_.intersection([1, 2, 3], [3, 2, 4, 5, 6, 67, 7, 3, 1]));
}


/** IntersectionBy
 * Returns only those common elements which are in both the array set
 * @param arr1: Array - 1st array from where it is to be compared
 * @param array2 2nd array from where it is to be compared
 * @param logic as here we provided Math.floor() means having same integer value
 */
lodashArray.intersectionBy = function () {
  console.log(_.intersectionBy([1.2, 3.44, 45.3, 4554], [1.52, 45.54], Math.floor()));
}

/** Drop
 * This method is used to drop some elements from an array starting from the first element
 * @param arr: Array - from where item needs to be dropped
 * @param num: Number - number of elements to be removed
 */
lodashArray.drop = function () {
  console.log(_.drop([1, 2, 3]));
  console.log(_.drop([1, 2, 3], 2));
  console.log(_.drop([1, 2, 3], 3));
  console.log(_.drop([1, 2, 3], 4));
}

/** DropRight
 * 
 */
lodashArray.dropRight = function () {
  console.log(_.dropRight([1, 2, 3, 4, 65, 67, 3], 4));
}

/** DropWhile
 * 
 */
lodashArray.dropWhile = function () {
  console.log(_.dropWhile([1, 2, 5, 10, 23, 34, 2, 1], function (o) {
    return o == 1;
  }));
}

lodashArray.dropWhile();

