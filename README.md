# workshop-task-1
the URL for my page is https://ellap4n.github.io/workshop-task-1/

## Idea
For this workshop I explored using random generated coordinates to create a line sketch. I hadn't used lines in workshop 0 so this was a new function that I got to explore.
I found the line function of the p5 reference site: https://p5js.org/reference/p5/line/

## Issues 
One part of this code is that the start co-ordinates of the next iteration had to be the same as the end co-ordinates of the previous iteration, but because I initially had "random()" built straight into the call I couldn't recall these co-ordinates. 

To fix this, I defined new variables 'a & b' to store the new random cooridinates. I put these at the start of the code, but there was problems with the definition of the 'random' call function. By putting the variable storage inside the draw line function it worked. 

I stored a & b as the updated startX and startY values in the loop, but it created just a single line when run, as a and b were only randomly generated once before the loop. 

So I redefined a & b as a new random number after storing the old values into the starting co-ordinates. This solved the problem and the lines were joined smoothly, while landing in random positions each time. 

```
function lineDrawing(startX, startY, iterations, colour) {
  stroke(colour);
  let a = random(0,width);
  let b = random(0,height);

  for (n = 0; n < iterations; n++) {
    line(startX, startY, a, b);
    startX = a;
    startY = b;
    
    a = random(0,width);
    b = random(0,height);

  }
```

## User Input
I wanted to be able to easily change the iteration number without having to access the physical code, as while I was testing, it was tedious having to change the iteration number everytime. 

I'm familiar with the idea of user inputs in coding, but had to find the exact syntax for javascript as I haven't worked with this language before. 
I found this on this website https://www.shecodes.io/athena/2194-declaring-input-value-with-a-prompt-in-javascript#:~:text=To%20declare%20value%20with%20a%20prompt%20in%20JavaScript%2C%20you'll,request%20input%20from%20the%20user.&text=let%20age%20%3D%20prompt(%22What,%22%2Bage%2B%22%20years%20old.
which lets the user input a number through a pop up tab when the website is first accessed. 

since my code needs this number to run, and only needs 1 input this would be fine for my task, so I added a user input where you can input the number of times the line switches direction - "iteration number".

```
var a = prompt("enter iteration number");
```

Everytime the code is run a new number can be inputted for more complex or simpler  sketches.

## Finishing and Next Steps 
I decided to make the colours as they are as I thought the lines kinda gave off a lightning effect, which looked quite cool. 
Next steps, following this theme to make the lines look more like lightning, would be to code so that the lines only went down, and have multiple startpoints. 
also changing the width of the lines as they travelled down would further improve the overall look. 
