// given array of meeting times, determine if a person could attend all meetings

function canAttendMeetings(intervals) {
    if(intervals.length === 1) return true
    intervals.sort((a, b) => a[0] - b[0]);
    
    let result = true
    
    for(let i = 0; i < intervals.length - 1; i++) {
        if(intervals[i][1] > intervals[i+1][0]) result = false
    }
    
    return result
}