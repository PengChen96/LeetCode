/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var arr = [],
    i,
    j,
    len = nums.length;

  for ( i = 0; i < len; i ++ ){
    j = arr[ target - nums[i] ];
    if ( j !== undefined  ) return [ j, i ];
    arr[nums[i]] = i;
  }

};