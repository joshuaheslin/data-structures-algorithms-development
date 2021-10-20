function doMerge(intervals) {
  const mergedIntervals = [];

  let hasJoining = false;
  for (let i = 0; i < intervals.length; i++) {
    // console.log(1, i);
    const currentGroup = intervals[i];
    const nextGroup = intervals[i + 1]; // check bounds later
    
    if (!nextGroup) continue;
    
    if (currentGroup[1] >= nextGroup[0]) {
      // merge
      // console.log("done");
      mergedIntervals.push([currentGroup[0], nextGroup[1]]);
      i++;
    } else {
      // console.log("done22");
      if (currentGroup[1] === nextGroup[0]) {
        hasJoining = false;
        return mergedIntervals;
      }
      mergedIntervals.push(currentGroup);
      mergedIntervals.push(nextGroup);
      // console.log("mergedIntervals :>> ", mergedIntervals);
    }
  }

  return doMerge(mergedIntervals);
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function merge(intervals) {
  if (intervals.length === 1) return intervals;
  intervals.sort((a,b) => a[0] - b[0])
  console.log('intervals :>> ', intervals);

  const current = intervals[0];
  const merged = [current]

  for (let i = 1; i < intervals.length; i++) {
    // console.log(1, i);
    const previousGroup = intervals[i - 1];
    const currentGroup = intervals[i];
    
    if (currentGroup[0] <= previousGroup[1]) {
      previousGroup[1] = Math.max(previousGroup[1], currentGroup[1]);
    } else {
      merged.push(currentGroup);
    }
  }

  return merged
};

// const a = [[1,3],[2,6],[8,10],[15,18]]
const a = [
  [1, 4],
  [4, 5],
  [6, 8],
  [15, 18],
];
const thing = merge(a);
console.log("thing :>> ", thing);
