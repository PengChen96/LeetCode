/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let cur = result;
    let ten = 0;
    while (l1 !== null || l2 !== null ) {
        let a = l1 !==null ? l1.val : 0;
        let b = l2 !==null ? l2.val : 0;
        let sum = a+b + ten;
        ten = Math.floor(sum/10);
        let newList = new ListNode(sum % 10);
        cur.next = newList;
        cur = cur.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    if (ten > 0) {
        cur.next = new ListNode(ten);
    }
    return result.next;
};
// @lc code=end

