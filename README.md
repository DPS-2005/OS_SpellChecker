# OS_SpellChecker
OS project for `dynamic spell check.`

## Architecture
#### Description
We will use eventListener on the text area to get an changes made in real time. The last word typed will then be passed to a function which will correct its spelling if it is wrong. The correction will then get updated on the text area. 
In case the some update is done in previous part of what typed till now, then - 
  - either can pass the whole stuff to the function word by word, or
  - tracking the cursor for the location of changes.

#### FlowChart
![mermaid-diagram-2024-02-15-154426](https://github.com/DPS-2005/OS_SpellChecker/assets/61118074/019995c3-10b1-4cc1-9ef5-e2ed6df683e1)

#### Implementation 
For Implementation we will first require to include Typo.js which is Javascript spell checker.               
- Now, we split all the words in the textarea and store them in an array.    
- After completion of the last word and when we enter a "Space" just after it we initiate our call of the function that will replace our current word with it's correct spelling if wrong.
   
- For this we initiate a variable word that tracks our last word, buffer that stores what is coming after the word and the  space which usually includes a "Fullstop" or a "comma".
  
- Now we pass the word in the function and it checks for it's correct spelling in dictionary function provided in Typo.js .
      
- Further we remove the last word from our textarea and then replace our textarea with the "new/corrected word + buffer" .

- After completing the above steps, there may be a chance where user can change a random word in the text area, to handle this scenario we will iterate a loop through all the words in textarea and repeat the procedure in previous steps to correct a word that has became incorrect after changing it in middle.

- Finally this concludes all our cases where whenever we change any number of word at a given time instant, they all get corrected after just before we proceed to write the next word in textarea .
  
