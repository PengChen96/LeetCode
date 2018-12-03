/**
Example 1:
	Input: "babad"
	Output: "bab"
	Note: "aba" is also a valid answer.

Example 2:
	Input: "cbbd"
	Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var sArr = '';
var len = 0;
var longestPalindrome = function(s) {
  sArr = s.split('').join('#');
  sArr = '#' + sArr + '#';
  len = sArr.length;
  var max = {i: 1, p: 0};
  for (var i = 1; i < len - 1; i++) {
    var result = loop(i, 1);
    if (max.p < result.p) {
      max = result;
    }
	}
  var re = sArr.slice(max.i - max.p, max.i + max.p + 1);
  var res = re.split('#').join('');
  console.log(res);
  return res;
};
var loop = function (i, pa) {
  var p = pa;
  var returnObj = {
    i: i,
    p: p - 1
  }
  var i_sub_p = i - p;
  var i_add_p = i + p;
  if (i_sub_p < 0 || i_add_p > len - 1) {
    return returnObj;
  }
  var s1 = sArr[i_sub_p];
  var s2 = sArr[i_add_p];
  if (s1 == s2) {
    p++;
    return loop(i, p);
  } else {
    return returnObj;
  }
}
var s = 'abacab';
// '#b#a#b#a#d#'  #b#a#b#
longestPalindrome(s);