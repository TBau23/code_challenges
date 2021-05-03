// given an array of meeting time intervals where intervals[i] = [start, end]
// return min number of conference rooms required

// [[0,30],[5,10],[15,20]] --> 2

//[[7,10],[2,4]] ---> 1

function minMeetingRooms(intervals) {

    if(intervals.length === 1) return 1
    intervals.sort((a, b) => a[0] - b[0]);
    let roomCount = 1;
    const rooms = {};
    rooms[1] = intervals[0][1];
    
    for(let i = 1; i < intervals.length; i++) {
        let roomAvailable = false;
        for(const roomNum of Object.keys(rooms)) {
            // need a better way to do this - use a min heap or priority queue
            // min heap will just keep the meeting that ends the earliest at the top, so its not free
            // then nothing else is and you can 
            if(intervals[i][0] >= rooms[roomNum]) {
                rooms[roomNum] = intervals[i][1];
                roomAvailable = true;
                break
            }
        }
        if(roomAvailable === false) {
            roomCount++
            rooms[roomCount] = intervals[i][1];
        }
    }
    
    return roomCount
}


function chronoMinMeetingRooms(intervals) {
    // O(n logn) time 
    if(intervals.length === 1) return 1
    
    let roomCount = 0;
    
    const startTimes = intervals.map(interval => interval[0]).sort((a,b) => a - b);
    
    const endTimes = intervals.map(interval => interval[1]).sort((a,b) => a - b);
    
    let startPt = 0;
    let endPt = 0;
    
    while(startPt < startTimes.length) {
        if(startTimes[startPt] >= endTimes[endPt]) {
            roomCount--
            endPt++
        }
        
        roomCount++;
        startPt++
    }
    
    return roomCount
}