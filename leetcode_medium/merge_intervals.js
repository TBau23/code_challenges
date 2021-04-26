// given array of intervals, merge all the overlapping ones
// return array of non-overlapping

// input : [[1,3],[2,6],[8,10],[15,18]]
// output : [[1,6],[8,10],[15,18]]

function mergeIntervals(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    result = []
    
    
    let currIdx = 0;
    
    while(currIdx < intervals.length - 1) {
        let currInterval = intervals[currIdx];
        let nxtInterval = intervals[currIdx + 1];
        if(currInterval[1] >= nxtInterval[0]) {
            if(currInterval[1] >= nxtInterval[1]) {
                intervals.splice(currIdx + 1, 1);
                continue;
            } else {
                currInterval[1] = nxtInterval[1];
                intervals.splice(currIdx + 1, 1);
                continue;
            }
        }
        currIdx += 1;
    }
    
    return intervals
}