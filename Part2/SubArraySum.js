var subarraySum = function(nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const lookingFor = map.get(sum - k);
    if(lookingFor) {
      count += lookingFor;
    }
    const curSum = map.get(sum) || 0;
    map.set(sum, curSum + 1);
  }
  
  return count;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {    
  // how many times does code in subarray sum to k
  
  let countSums = 0
  let sum = 0
  let map = new Map()
  
  map.set(0, 1); // 0 is currentItem - k, if 0 we found a sum i.e (i + i + 1) - k = 0
  
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
      const foundSum = map.get(sum - k)
      if (foundSum) {
          countSums += foundSum
      }
      const currentSum = map.get(sum) || 0;
      map.set(sum, currentSum + 1);
  }
  return countSums
};