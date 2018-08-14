/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var result = new ListNode(0);
  var point = result;
  var flag = 0;
  while(l1 || l2){
    var val1 = 0;
    var val2 = 0;
    if(l1){
      val1 = l1.val!=undefined ? l1.val:0;
    }
    if(l2){
      val2 = l2.val!=undefined ? l2.val:0;
    }

    var val = val1 + val2 + flag;
    flag = parseInt(val/10);
    point.val = val%10;
    l1 = l1!=null ? l1.next : null;
    l2 = l2!=null ? l2.next : null;
    if(l1!=null||l2!=null||flag!=0){
      point.next = new ListNode(flag);
      point = point.next;
    }
  }

  return result;
};