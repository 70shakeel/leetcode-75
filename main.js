// Smallest Number in Infinite Set
class SmallestInfiniteSet {
    constructor() {
        this.pq = new MinPriorityQueue();
        this.s = new Set();
        for (let i = 1; i <= 1000; i++) {
            this.pq.enqueue(i, i);
            this.s.add(i);
        }
    }

    popSmallest() {
        const x = this.pq.dequeue()?.element;
        this.s.delete(x);
        return x;
    }

    addBack(num) {
        if (!this.s.has(num)) {
            this.pq.enqueue(num, num);
            this.s.add(num);
        }
    }
}
