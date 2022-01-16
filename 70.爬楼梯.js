/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (52.95%)
 * Likes:    2113
 * Dislikes: 0
 * Total Accepted:    664.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */

/*
 * f(1) = 1
 * f(2) = 2
 * f(3) = f(n-1) + f(n-2)
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let memo = new Map()
memo.set(1, 1);
memo.set(2, 2);
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (memo.get(n)) {
    return memo.get(n);
  } else {
    let result = climbStairs(n - 1) + climbStairs(n - 2);
    memo.set(n, result);
    return result;
  }
};
// @lc code=end

// var climbStairs = function(n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   let prepre = 1; // n-2
//   let pre = 2;    // n-1
//   let result = 3;
//   for (let i = 3; i <= n; i++) {
//     console.log(i)
//     result = pre + prepre;
//     prepre = pre;
//     pre = result;
//   }
//   return result;
// };
