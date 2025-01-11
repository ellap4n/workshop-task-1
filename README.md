# workshop-task-1
the URL for my page is https://ellap4n.github.io/workshop-task-1/
## Testing 
For this workshop I explored using random generated coordinates to create a line sketch. I hadn't used lines in workshop 0 so this was a new function that I got to explore 

## Issues 
One part of this code is that the start co-ordinates of the next iteration had to be the same as the end co-ordinates of the previous iteration, but because I initially had "random()" built straight into the call I couldn't recall these co-ordinates. 

To fix this, I defined new variables 'a & b' to store the new random cooridinates. I put these at the start of the code, but there was problems with the definition of the 'random' call function. By putting the variable storage inside the draw likne function it worked. 

I stored a & b as the updated startX and startY values in the loop, but it created just a single line when run, as a and b were only randomly generated once before the loop. 

So I redefined a & b as a new random number after storing the old values into the starting co-ordinates. 

## User Input
I wanted to be able to easily change the iteration number without having to access the physical code, so added a user input where you can input the number of times the line switches direction - "iteration number" everytiome the code is run a new number can be inputted for more complex sketches.
