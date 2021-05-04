// given an array and an integer k, return the kth largest element
// not sure why this is a medium

function findKthLargest(nums, k) {
    nums.sort((a,b) => b - a);
    
    for(let i = 0; i < nums.length; i++) {
        if(i === k - 1) return nums[i];
    }

}