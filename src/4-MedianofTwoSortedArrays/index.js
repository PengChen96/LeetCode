/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let array = [...nums1,...nums2];
  array.sort(function(a, b){
    return a - b;
  });
  let result = 0;
  let len = array.length;
  let flag = len%2;
  let mid = parseInt(len/2)
  if(flag==0){
    result = (array[mid-1]+array[mid])/2;
  }
  if(flag!=0){
    result = array[mid];
  }
  return result;
};