var Util = {};

Util.leftZeroPad = function(str, num) {
  str = '' + str;
  var length = str.length;
  if (length < num) {
    str = new Array(num-length+1).join('0') + str;
  }

  return str;
};
