class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const arr = [];
        for (let i = 0; i < nums.length; i++) {
            if (arr.includes(nums[i])) return true;
            arr.push(nums[i]);
        }
        return false;
    }
}
