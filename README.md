# Dynamic SpellChecker
OS project - `Dynamic Spelling Check`

## Architecture
### Description
This is a simple spelling checker where we used the npm module `typo-js`. The last new word typed will then be passed to a function which will correct its spelling if it is wrong. The correction will then get updated on the text area. This change is done by `addEventListener`.

### FlowChart
![mermaid-diagram-2024-02-15-154426](https://github.com/DPS-2005/OS_SpellChecker/assets/61118074/019995c3-10b1-4cc1-9ef5-e2ed6df683e1)

### Implementation 
- First included `typo-js` module and `dictionary`.               
- Now, we split all the words in the textarea and store them in an array.    
- After completion of the last word when we enter a `Space` just after it we initiate our call of the function that will replace our current word with it's correct spelling if it's wrong.
- Now we pass the word in the function which gives an array of correct spellings with most probable in lower indices.
- There may be a chance where user can change a random word in the text area, to handle this scenario we iterate a loop through all the words in textarea to see if there is any wrong spelling or not.
- So in our project we just incorporated to run a loop through all words of the textarea and check for each word and change it if misspelled after entering any new word.
- Finally whenever we change any number of word at a given time instant, they all get corrected after just before we proceed to write the next word in textarea.

### Limitations
- This spell check is done by only looking in a particular word and not its context, so, sometimes will give wrong results also and for that we need to incorporate NLP algorithms.
- Also the check is sometimes not so fast, some lag may occur and keeping in mind of this lag we not kept some rare cases (in daily typing) in our project.
  
