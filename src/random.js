const MAX_NUM = 60;
const MAX_CHOICES = 6;
const SHUFFLE = 400;

function generateRandom(maxnum, maxchoice)
{
    
    var elements = [];
    var choices = [];
    
    if (maxnum > maxchoice) {
        // load all the numbers into an array so that we can start shuffling them for randomness
        for (i=0; i<maxnum; i++){
            elements.push(i+1);
        }
        
        // Shuffle the deck
        for (i=0; i<SHUFFLE; i++){
            selected = Math.floor(Math.random() * elements.length);
            movevar = elements[selected];
            elements.splice(selected, 1);
            elements.push(movevar);
        }
        
        // Select the numbers from the array
        for (i=0; i<maxchoice; i++){
            choice = Math.floor(Math.random() * elements.length);
            choices.push(elements[choice]);
            elements.splice(choice, 1);
        }
    
        // Sort the results and then display them
        choices.sort(function(a, b){return a - b});
    }
    return choices;
    
}
function displayRandom(maxnum, maxchoices, outputlocation)
{
    var randomChoices = generateRandom(maxnum, maxchoices);
    
    var output = "<p>Number of items in array = " + maxnum + "</p>";
    output = output + "<p>Number of choices = " + maxchoices + "</p>";
    output = output + randomChoices;
    outputlocation.innerHTML = output;
}
