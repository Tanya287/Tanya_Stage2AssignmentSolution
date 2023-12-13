const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let buckets = [];
let balls = [];

function addBucket() {
  rl.question('Bucket Name: ', (name) => {
    rl.question('Volume (in cubic inches): ', (volume) => {
      buckets.push({ name, volume: parseFloat(volume), emptyVolume: parseFloat(volume) });
      askToAddBucket();
    });
  });
}

function askToAddBucket() {
  rl.question('Add another bucket? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      addBucket();
    } else {
      addBalls();
    }
  });
}

function addBalls() {
  rl.question('Ball Name: ', (name) => {
    rl.question('Volume (in cubic inches): ', (volume) => {
      balls.push({ name, volume: parseFloat(volume) });
      askToAddBalls();
    });
  });
}

function askToAddBalls() {
  rl.question('Add another ball? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      addBalls();
    } else {
      suggestBuckets();
    }
  });
}

function suggestBuckets() {
  balls.sort((a, b) => b.volume - a.volume);

  buckets.forEach(bucket => {
    let suggestion = '';
    balls.forEach(ball => {
      const ballsToFit = Math.floor(bucket.emptyVolume / ball.volume);
      if (ballsToFit > 0) {
        const actualBallsToFit = Math.min(ballsToFit, Math.floor(bucket.emptyVolume / ball.volume));
        suggestion += `Place ${actualBallsToFit} ${ball.name} balls `;
        bucket.emptyVolume -= actualBallsToFit * ball.volume;
      }
    });
    if (suggestion !== '') {
      console.log(`${bucket.name}: ${suggestion}`);
    }
  });

  rl.close();
}

addBucket();
