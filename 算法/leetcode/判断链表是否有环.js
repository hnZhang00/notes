// 给定一个链表，判断链表中是否有环。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (!head || !head.next) return false;
  var slow = head, fast = head.next;
  while (true) {
    if (!fast || !fast.next) return false;
    if (fast === slow || fast.next === slow) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
}

// 快慢指针