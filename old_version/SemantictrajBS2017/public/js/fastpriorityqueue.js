// export function FastPriorityQueue() {
//     this.queue = [];
// }

// FastPriorityQueue.prototype.add = function(val) {
//     let queue = this.queue;
//     let i = 0;
//     for (; i < queue.length; i ++) {
//         if (val.val <= queue.val) {
//             break;
//         }
//     }
//     let d = $.extend(true, {}, val);
//     this.queue.splice(i, 0, d);
// };

// FastPriorityQueue.prototype.pop = function() {
//     let val = this.queue[0];
//     this.queue.splice(0, 1);
//     return val;
// };

// FastPriorityQueue.prototype.size = function() {
//     return this.queue.length;
// };

export class FastPriorityQueue {
    constructor() {
        this.queue = [];
    }

    add(val) {
        let queue = this.queue;
        let i = 0;
        for (; i < queue.length; i ++) {
            if (val.val - queue[i].val <= 0) {
                break;
            }
        }
        let d = $.extend(true, {}, val);
        this.queue.splice(i, 0, d);
        // console.log(i, this.queue);
    }

    pop() {
        let val = this.queue[0];
        this.queue.splice(0, 1);
        return val;
    }

    size() {
        return this.queue.length;
    }
}