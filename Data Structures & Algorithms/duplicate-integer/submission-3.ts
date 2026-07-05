class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let isDup = false;
        nums.sort((a, b) => {
            if (a == b) isDup = true;
            return a - b;
        });

        return isDup;
    }
}
