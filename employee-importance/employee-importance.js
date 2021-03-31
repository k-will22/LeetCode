/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let leader
    
    for (let j = 0; j < employees.length; j++) {
        if (employees[j]["id"] === id) {
            leader = j
        }
    }
    let sub = employees[leader]["subordinates"]
    let total = employees[leader]["importance"]
    
    if (sub !== []) {
       
    for (let i = 0; i < sub.length; i++) {
        for (let k = 0; k < employees.length; k++) {
            if (employees[k]["id"] === sub[i]) {
                total += employees[k]["importance"]
                if (employees[k]["subordinates"] !== []) {
                    for (let l = 0; l < employees[k]["subordinates"].length; l++) {
                        sub.push(employees[k]["subordinates"][l])
                    }
                }
            }
        }
    }
    }
    return total
};