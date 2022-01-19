/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 *
 * https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (64.82%)
 * Likes:    879
 * Dislikes: 0
 * Total Accepted:    156K
 * Total Submissions: 239.3K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums
 * 中的数字，并以数组的形式返回结果。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,1]
 * 输出：[2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1
 * 1
 *
 *
 * 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let arr = new Array(nums.length + 1);
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = true;
  }
  let result = [];
  for (let j = 1; j < arr.length; j++) {
    if (!arr[j]) {
      result.push(j);
    }
  }
  return result;
};
// @lc code=end

// 通过在原nums上加len长度，最后判断没有给源数据加值 小于等于len的就是没有出现过的
var findDisappearedNumbers = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let index = (nums[i] - 1) % len;
    nums[index] += len;
  }
  let result = [];
  for (let j = 0; j < len; j++) {
    if (nums[j] <= len) {
      result.push(j + 1);
    }
  }
  return result;
}

