// two input arrays contain heights of students, arrays will be same length
// return true if rows can be arranged such that everyone in backrow is strictly taller than everyone in front



function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirts.sort((a, b) => a - b);
	blueShirts.sort((a, b) => a - b);
	let backRow = null;
	let frontRow = null;
	
	if(redShirts[0] === blueShirts[0]) return false
	backRow = redShirts[0] > blueShirts[0] ? redShirts : blueShirts;
	frontRow = redShirts[0] > blueShirts[0] ?  blueShirts : redShirts ;
	
	for(let i = 1; i < backRow.length; i++) {
		if(backRow[i] <= frontRow[i]) return false
	}
	
    return true;
}