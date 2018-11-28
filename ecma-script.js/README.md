# Template
~~~
template literals enclose by back-tick(``) of single or double quotes.
~~~
# Question
~~~
Give the following variable, choose which template literal is syntactically valid:

var hobbies = [ 'cooking', 'painting', 'coding' ]

'My hobbies are ${hobbies.join(', ')}'


`My hobbies are #(hobbies.join(', '))`


`My hobbies are ${hobbies.join(', ')}`(ANS)


"My hobbies are ${hobbies.join(', ')}"


`My hobbies are #{hobbies.join(', ')}`
~~~

#Question
~~~
Choose the option that will form the same string as the following, assuming the variables are defined beforehand:

var rank = '2nd'
var activity = 'Pie Making'

var result = 'You received ' + rank + ' place during the ' + activity + ' contest!'

`You received ${rank} place during the ${activity} contest!`(ANS)


`You received #{rank} place during the #{activity} contest!`


`You received ` + ${rank} + ` place during the ` + ${activity} + ` contest!`


`You received {{rank}} place during the {{activity}} contest!`
~~~