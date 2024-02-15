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
