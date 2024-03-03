function permutationSort(a) {
    let count = 0;

    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false; // Signals an element that is smaller than its predecessor was found
            }
        }
        return true; // No such element found, array is sorted
    }

    function generatePermutations(arr, n = arr.length) {
        if (isSorted(arr)) {
            a.splice(0, a.length, ...arr); // Copy the sorted array back into a
            return true; // Indicate that a sorted permutation has been found
        }

        if (n === 1) {
            count++;
            return false;
        }

        for (let i = 0; i < n; i++) {
            if (generatePermutations(arr, n - 1)) {
                return true; // Return that a sorted permutation has been found
            }
            const j = n % 2 ? 0 : i;
            [arr[n - 1], arr[j]] = [arr[j], arr[n - 1]]; // Swap
        }

        return false; // Indicate that no sorted permutation has been found in this branch
    }

    generatePermutations([...a]); // Use a copy of a for permutations
    return count;
}
