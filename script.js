function aveSpd(upTime, upSpd, downSpd) {
  const upDist = upSpd * (upTime / 60);         // miles traveled uphill
  const downTime = (upDist / downSpd) * 60;     // minutes to cover same distance downhill
  const totalDist = upDist * 2;                 // total miles (up + down)
  const totalTime = (upTime + downTime) / 60;   // total time in hours
  return totalDist / totalTime;                 // average speed in mph
}

// Do not change the code below
const upTime = prompt("Enter upTime: ");
const downTime = prompt("Enter downTime: ");
const downSpd = prompt("Enter downSpd: ");
alert(aveSpd(upTime, downTime, downSpd));