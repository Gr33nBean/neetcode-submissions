class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        if (s === t) return true;

        const arr1 = s.split("");
        const arrSet1 = Array.from(new Set(arr1));
        const arr2 = t.split("");
        const arrSet2 = Array.from(new Set(arr2));

        if (arrSet1.length !== arrSet2.length) return false;
        const str1 = arrSet1
            .map((item) => {
                return {
                    value: item,
                    count: arr1.filter((i) => i === item).length,
                };
            })
            .map((i) => i.value + i.count.toString());

        const str2 = arrSet2
            .map((item) => {
                return {
                    value: item,
                    count: arr2.filter((i) => i === item).length,
                };
            })
            .map((i) => i.value + i.count.toString());

        return str1.every((i) => str2.includes(i));
    }
}
