// too easy really. dumb problem
// given an array of intergers, find and return the majority element - the one that appears more than n / 2 times.
// assume one always exists


function majorityElement(nums) {
    const numsCount = {};
    let result;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] in numsCount) {
            numsCount[nums[i]] += 1;
        } else {
            numsCount[nums[i]] = 1;
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if((numsCount[nums[i]] / nums.length) > 0.5) {
            result = nums[i];
            break
        }
    }
    return result
}