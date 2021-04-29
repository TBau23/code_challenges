
// given array where each index represents a room number and each room contains a subarray with keys numbered to the room they unlock
// write a function that returns true if and only if you can successfully visit every room
// every room starts locked except for room zero


// classic graph traversal problem

function canVisitAllRooms(rooms) {

    const visited = new Array(rooms.length).fill(false);
    visited[0] = true;

    const toVisit = [];
    for(const num of rooms[0]) {
        toVisit.push(num);
    }

    while(toVisit.length !== 0) {
        let currRoom = toVisit.pop();
        if(visited[currRoom]) continue;
        visited[currRoom] = true;
        for(const key of rooms[currRoom]) {
            toVisit.push(key);
        }
    }

    for(const room of visited) {
        if(room === false) return false
    }

    return true
}


console.log(canVisitAllRooms([[1],[2],[3],[]]))
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))