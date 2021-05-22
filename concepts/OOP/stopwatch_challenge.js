// duration, reset, start, stop


function StopWatch() {

    let startTime = 0;
    let stopTime = 0;
    let running = false;

    this.start = () => {
        if(running) {
            throw new Error('Watch already started')
        }

        running = true

        startTime = Date.now();
    }

    this.stop = () => {
        if(!running) {
            throw new Error('Watch already stopped')
        }

        running = false;

        stopTime = Date.now();
    }

    this.interval = () => {
        if(running) {
            console.log((Date.now() - startTime) / 1000)
        } else if(!running && startTime != 0) {
            console.log((stopTime - startTime) / 1000)
        } else {
            throw new Error('Watch has never started')
        }
    }

    this.reset = () => {
        startTime = 0;
        stopTime = 0;
    }
}


const myWatch = new StopWatch();
