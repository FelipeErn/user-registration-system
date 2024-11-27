import SortingStrategy from './SortingStrategy.js';

class QuickSort extends SortingStrategy {
    sort(data) {
        if (data.length <= 1) return data;

        const pivot = data[data.length - 1];
        const left = data.filter((el) => el < pivot);
        const right = data.filter((el) => el > pivot);

        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}

export default QuickSort;
