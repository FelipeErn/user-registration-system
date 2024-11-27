import SortingStrategy from './SortingStrategy.js';

class MergeSort extends SortingStrategy {
    sort(data) {
        if (data.length <= 1) return data;

        const mid = Math.floor(data.length / 2);
        const left = this.sort(data.slice(0, mid));
        const right = this.sort(data.slice(mid));

        return this.merge(left, right);
    }

    merge(left, right) {
        let result = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        return [...result, ...left, ...right];
    }
}

export default MergeSort;
