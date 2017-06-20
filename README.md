# Frontend-Intern-Tasks

These are two tasks in HTML, CSS and JavaScript

Task 1
By using only html and css, create an identical tooltip as on attached design (files attached). Tooltip should be visible only while hovering or selecting underlined word. 

Task 2
Write a function calculating damage done by a spell of the famous polish wizard.
Eg. https://www.youtube.com/watch?v=XkeVYHJ6AG8 - 'fejejeeaindaiyaiai'
Spell consists of subspells. Each subspell add points of damage respectively:
'fe' - 1; 'je' - 2 ; 'jee' - 3; 'ain'- 3; 'dai'- 5; 'ne' - 2; 'ai'- 2

Spell start with 'fe' and end with 'ai'. Spell body can have subspells or other letters, but every single other letter decrease damage of spell by 1 point. 'fe' can occur only once and last 'ai' always end the spell. Method should return 0 if damage is negative or if spell is incorrect. In case of multiple possible combination of subspells in one spell return the highest score.

Correct spells: 'xxxxxfejejeeaindaiyaiaixxxxxx' (fe-je-jee-ain-ai-ai-ai)

Incorrect spells: 'jejeai' (doesn't start with 'fe')

