'use strict';



const start = (say, sendButton) => {
	say(['Welcome to the logic gate design course! Let\'s begin!', 'Digital circuits form the basis of computing! A combinational circuit is one whose output depends only on the present combination of circuit imput values.', {attachment: 'image', url: 'https://www.electronics-tutorials.ws/wp-content/uploads/2013/08/comb4.gif?fit=420%2C113'}]).then(() => {
    sendButton('Press this button to continue!', {title: 'continue', payload: '0-'})
  }
};

const state = (payload, say, sendButton) => {
    const array = payload.split('-');
    const currentState = parseInt(array[0]);
    const playerSelection = parseInt(array[1]);
    
    switch (state) {
        case 0:
            say(['Welcome to the beginner level! Let\'s begin!', 'Digital circuits form the basis of computing! A combinational circuit is one whose output depends only on the present combination of circuit imput values.', {attachment: 'image', url: 'https://www.electronics-tutorials.ws/wp-content/uploads/2013/08/comb4.gif?fit=420%2C113'}]).then(() => {
	          sendButton('In the image above, which of the following determine the output?', [{title: 'A, B, X, Y', payload: '1-1-0'}, {title: 'A, B, and C', payload: '1-1-1'}, {title: 'X and Y', payload: '1-1-0'}, {title: 'Not enough information is given', payload: '1-1-0'}]);
            });
            break;
        case 1:
            if (correctness === 1) {
            say('Correct.').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-2'}]);
            });
          } else {
            say('Incorrect.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-0'}, {title: 'No', payload: '1-2'}])
            });
          }
          break;
        case 2:
            say(['We can measure particles to have either a positive or a negative charge, and so the inputs and outputs of our circuits can either be positive or negative. We can use these properties to symbolize true and false.',
	        'A switch has three parts as shown below from left to right: a source input, a control input, and a source output', '-/- (off)', '--- (on)',
	        'The middle part, / or -, is the control input, and if the control input allows for flow, we say that it is TRUE, and if not, it is FALSE']).then(() => {
	      sendButton('What is the value of the control input in this switch: -/-', [{title: 'TRUE', payload: '1-3-0'}, {title: 'FALSE', payload: '1-3-1'}]);
	        });
	      break;
        case 3:
        if (correctness === 1) {
            say('Correct.').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-4'}]);
            });
          } else {
            say('Incorrect.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-2'}, {title: 'No', payload: '1-4'}])
            });
        }
        break;
	    case 4: 
	        checkCorrectness(say, playerSelection, 1);
	        say(['Switches can be combined to form more complex circuits. All of the possible input conditions and outputs of a circuit can be written elegantly in a truth table, consisting of one column per control input, and one column for the output.',
	        'Consider the truth table below:', 'A     B     |output\nTRUE  FALSE |TRUE\nTRUE  TRUE  |FALSE\nFALSE TRUE  |TRUE\nFALSE FALSE |FALSE']).then(() => {
	        sendButton('If A is TRUE and B is TRUE, what is the output of this circuit?', [{title: 'TRUE', payload: '1-5-0'}, {title: 'FALSE', payload: '1-5-1'}]);
	        });
	    break;
      case 5:
      if (correctness === 1) {
            say('Correct.').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-6'}]);
            });
          } else {
            say('Incorrect.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-4'}, {title: 'No', payload: '1-6'}])
            });
          }
          break;
	    case 6:
	        checkCorrectness(say, playerSelection, 1);
	        say(['We can describe the conditions for the output being true by combining the values of the control inputs using the words AND, OR, and NOT.', 'A AND B is true if and only if both A and B are TRUE',
	        'A OR B is TRUE if either A or B are TRUE, and is FALSE only if both A and B are FALSE',
	        'NOT A is TRUE only if A is FALSE', 'These are called boolean operators.']).then(() => {
	        sendButton('Which operator makes an output TRUE if and only if A and B are TRUE?', [{title: 'AND', payload: '1-7-1'}, {title: 'OR', payload: '1-7-0'}, {title: 'NOT', payload: '1-7-0'}]);
	        });
	    break;
      case 7:
      if (correctness === 1) {
            say('Correct.').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-8'}]);
            });
          } else {
            say('Incorrect.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-6'}, {title: 'No', payload: '1-8'}])
            });
          }
          break;
	     case 8:
	        
	        sendButton('Which operator makes an output TRUE if either A or B are TRUE (non exclusive)?', [{title: 'AND', payload: '1-9-0'}, {title: 'OR', payload: '1-9-1'}, {title: 'NOT', payload: '1-9-0'}]);
        break;
      case 9:
      if (correctness === 1) {
            say('Correct.').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-10'}]);
            });
          } else {
            say('Incorrect.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-8'}, {title: 'No', payload: '1-10'}])
            });
          }
          break;
        case 10:
            
            sendButton('Which operator makes an output TRUE only if A is FALSE?',
            [{title: 'AND', payload: '1-11-0'}, {title: 'OR', payload: '1-11-0'}, {title: 'NOT', payload: '1-11-1'}]);
        break;
        case 11:
        if (correctness === 1) {
            say('Correct.').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-12'}]);
            });
          } else {
            say('Incorrect.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-10'}, {title: 'No', payload: '1-12'}])
            });
          }
          break;
        case 12:
            
	        say(['These Boolean operators can be combined to form Boolean expressions, using parentheses () to signify order of operation', 'Consider the following Boolean expression:',
	        'A AND (NOT B)',
	        'Complete the following rows of the truth table by filling in where the \'?\' is']).then(() => {
	        sendButton('A     B     |output\nTRUE  ?     |TRUE', [{title: 'TRUE', payload: '1-13-0'}, {title: 'FALSE', payload: '1-13-1'}]);
	        });
        break;
        case 13:
        if (correctness === 1) {
            say('Correct.').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-14'}]);
            });
          } else {
            say('Incorrect.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-12'}, {title: 'No', payload: '1-14'}])
            });
          }
          break;
        case 14:
            
            sendButton('A     B     |output\n?     FALSE |FALSE', [{title: 'TRUE', payload: '1-15-0'}, {title: 'FALSE', payload: '1-15-1'}]);
        break;
        case 15:
        if (correctness === 1) {
            say('Correct.').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-16'}]);
            });
          } else {
            say('Incorrect.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-14'}, {title: 'No', payload: '1-16'}])
            });
          }
          break;
        case 16:
            
            sendButton('A     B     |output\nTRUE  TRUE  |?', [{title: 'TRUE', payload: '1-17-0'}, {title: 'FALSE', payload: '1-17-1'}]);
        break;
        case 17:
        if (correctness === 1) {
            say('Correct.').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-18'}]);
            });
          } else {
            say('Incorrect.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-16'}, {title: 'No', payload: '1-18'}])
            });
          }
          break;
        case 18:
            
            say(['You have now finished the tutorial stage and have begun learning the basics of Boolean algebra, the mathematical way in which we model circuits',
            'Move on to level 2 to try out questions to test your knowledge and master the basics of Boolean algebra!']).then(() => {
              sendButton('Move to another level or end game?', [{title: 'Level 2', payload: '2-0'}, {title: 'Level 3', payload: '3-0'}, {title: 'Exit', payload: '4-0'}])
            });
            break;
    
    }
}
};


module.exports = {
	filename: 'helloworld',
	title: 'Logic Design Stage 2',
	introduction: [
		'You are now entering stage 1 of Logic Design.'
	],
	start: start,
	state: state
};