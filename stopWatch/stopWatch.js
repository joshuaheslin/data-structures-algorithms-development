
/** Constructor Function **/
/* Build a simple stopwatch */

function StopWatch() {
  let startTime, endTime, running = 0;

  this.start = () => {
    if (running) throw new Error('Watch already running!')
    startTime = new Date();
    running = 1;
  }

  this.stop = () => {
    if (!running) throw new Error('Watch not running please start it first!')
    endTime = new Date() - startTime;
    running = 0;
  }

  this.reset = () => {
    if (running) startTime = new Date();
    else startTime = 0;
    endTime = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: () => {
      if (!startTime) return 0;
      if (endTime && !running) return endTime;
      const difference = new Date() - startTime;
      if (endTime) return difference + endTime;
      return difference;
    }
  })
}

const sw = new StopWatch()