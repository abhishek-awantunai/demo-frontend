var _ = require('lodash');

var util = {};


/**
 * Attempt is just like  
 */

util.attempt = function () {
  const value = _.attempt(function (value) {
    return value > 10 ? true : false;
  }, 10);
  console.log(value);
};


/**
 * Generates a uniue id each time 
 * @output : client_1 client_2 client_3 client_4
 */
util.uniqueId = function () {
  setInterval(function () {
    console.log(_.uniqueId('client_'));
  }, 3000);
};


/**
 * Converts this string into array where each element is seperated by . in this string
 */
util.toPath = function () {
  console.log(_.toPath('a.,.b.c.d.e.f'));
};

var getNumber = function () {
  number = 5;
  return number;
}

/**
 * @param number: number of times to be repeated
 * @param function name : function name to be called to get the returned value.
 */


util.times = function () {
  console.log(_.times(5, 1)); // with return and array * 5 filled with undefined since 1 is not a function
  console.log(_.times(5, Boolean));
  console.log(_.times(5, String));
  console.log(_.times(5, Number));
  console.log(_.times(5, getNumber));
  console.log(_.times(5, _.constant(0)));
};


/**
 * Stub
 * stubTrue = true, stubFalse = false, stubArray = [], stubString = '', stubObject = {}
 */

util.stubTrue = function () {
  console.log(_.times(3, _.stubTrue));
  console.log(_.times(3, _.stubArray));
  console.log(_.times(3, _.stubFalse));
  console.log(_.times(3, _.stubString));
  console.log(_.times(3, _.stubObject));
};


/**
 * Range = create an array with elements within this range
 */

util.range = function () {
  console.log(_.range(0));
  console.log(_.range(-5));
  console.log(_.range(5));
  console.log(_.range(-5, 5));
  console.log(_.range(5, -5));
};

/**
 * RangeRight = create an array with elements within this range
 */

util.rangeRight = function () {
  console.log(_.rangeRight(0));
  console.log(_.rangeRight(5));
  console.log(_.rangeRight(-5));
  console.log(_.rangeRight(1, 5));
  console.log(_.rangeRight(5, 1));
  console.log(_.rangeRight(1, 5, 7));
  console.log(_.rangeRight(1, 5, 0));
};

/**
 * NoConflict function just resets the lodash variable and reinitializes it
 */
var lodash = _.noConflict();

/**
 * noop - this function returns undefined
 */

util.noop = function () {
  console.log(_.times(5, _.noop));
};

/**
 * nthArgument
 */

util.nthArgument = function () {
  const arg = _.nthArg(0);
  console.log(arg(1, 2, 3, 4, 5, 6));
};




util.attemptFunction = function () {

  let result = _.attempt(function (argsArray) {
    let sum = 0;
    argsArray.forEach(element => {
      sum += element;
    });
    console.log(sum);

    if (isNaN(sum)) {
      return 0;
    } else {
      return sum;
    }
  }, [10, 20, 30, NaN]);


  if (_.isError(result)) {
    console.log(result);
  } else {
    console.log('The sum of the following number is : ' + result);
  }
};

console.clear();
util.attemptFunction();