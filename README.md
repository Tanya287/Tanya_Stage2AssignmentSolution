# Tanya_Stage2AssignmentSolution
This is the assignment solution.
![OUTPUT](https://github.com/Tanya287/Tanya_Stage2AssignmentSolution/assets/106379357/77fb5ba4-ff5e-4b5f-b68c-7e7e3651fd2c)
Above is a running instance(output example) where the user can add as many buckets as he wants with respective volume.
Then the user is asked to add as many colored balls as he wants. 
After that finally the Bucket Suggestion is given.

Following things have been kept in mind while designing the system:
**1) Every time the suggestion is made, empty volume will be reduced by volume of the balls placed
inside that bucket.**

suggestion += `Place ${actualBallsToFit} ${ball.name} balls `;
bucket.emptyVolume -= actualBallsToFit * ball.volume;



**2) After any suggestion, empty volume must not be less than zero, if no bucket satis es this
criteria, no suggestion will be made and message will be shown.**

if (suggestion !== '') {
  console.log(`${bucket.name}: ${suggestion}`);
}


**3) Partial suggestions must be made by the system, if all the balls are not possible to be placed inside
the buckets because of the lack of empty volume, then the maximum possible volume of the balls must
be suggested to be placed.**

const actualBallsToFit = Math.min(ballsToFit, Math.floor(bucket.emptyVolume / ball.volume));


**4) Minimum number of the baskets must be suggested at each suggestion.**


buckets.forEach(bucket => {
  
  if (suggestion !== '') {
    console.log(`${bucket.name}: ${suggestion}`);
  }
});


**5) Wherever possible, in a single suggestion, system must utilize the single bucket to its maximum
empty volume.**


suggestion += `Place ${actualBallsToFit} ${ball.name} balls `;



**6) Any ball of any color can go to any basket, all depending on the empty volume and other criteria
mentioned above.**

const ballsToFit = Math.floor(bucket.emptyVolume / ball.volume);
