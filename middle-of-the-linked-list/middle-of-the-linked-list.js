/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
	let current = head
	let count = 0

	while (current) {
        count++
		current = current.next
	}

	let middle = Math.floor(count / 2)
    
    current = head
    count = 0
    
    while (count < middle) {
        count++
        current = current.next
    }
    
    return current
};