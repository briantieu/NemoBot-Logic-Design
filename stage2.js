'use strict';



const start = (say, sendButton) => {
	say('A Boolean expression is a sentence consisting of Boolean variables, constants, and operators.').then(() => {
	    sendButton('Which of the following is a Boolean variable?', [{title: 'True', payload: '0-0'}, {title: 'a', payload: '0-1'}, {title: 'AND', payload: '0-2'}]);
    });
};

const state = (payload, say, sendButton) => {
    const array = payload.split('-');
    const currentState = parseInt(array[0]);
    const playerSelection = parseInt(array[1]);
    
    switch (currentState) {
        case 0:
            checkCorrectness(say, playerSelection, 1);
	        sendButton('Which of the following is a Boolean constant?', [{title: 'True', payload: '1-0'}, {title: 'a', payload: '1-1'}, {title: 'AND', payload: '1-2'}]);
	    break;
	    case 1: 
	        checkCorrectness(say, playerSelection, 0);
	        sendButton('Which of the following is a Boolean operator?', [{title: 'True', payload: '2-0'}, {title: 'a', payload: '2-1'}, {title: 'AND', payload: '2-2'}]);
	    break;
	    case 2:
	        checkCorrectness(say, playerSelection, 2);
	        setTimeout(say(['Let’s try evaluating a Boolean expression!','If a = TRUE, b = FALSE, c = TRUE, d = TRUE, what is:']).then(() => {
	            sendButton('(a AND b) OR (c AND d)?', [{title: 'True', payload: '3-0'}, {title: 'False', payload: '3-1'}]);
	        }), 1000);
	    break;
	    case 3:
	        checkCorrectness(say, playerSelection, 0);
	        say(['Instead of typing out AND, OR, and NOT every time, we can represent them in a more compact way.',
	        'AND can be represented by *\nOR can be represented by +\nNOT can be represented by ’\nTRUE can be represented by 1\nFALSE can be represented by 0',
	        'So, our original expression can be rewritten as: {(a * b) + (c * d), (a + b) * (c + d)}',
	        'We can also convert English statements into Boolean expressions! This allows us to translate every day decisions and processes into logical, consistent mathematical expressions. Let’s try a few!'
            ]).then(() => {
                sendButton('F is 1 only when a is 1 and b is 1.', [{title: 'F = a + b', payload: '4-0'}, {title: 'F = a * b', payload: '4-1'}, {title: 'F = a\' + b\'', payload: '4-2'}]);
            });
	    break;
	    case 4:
	        checkCorrectness(say, playerSelection, 1);
	        sendButton('F is 1 only when a is 1 and b is 0.', [{title: 'F = a * b\'', payload: '5-0'}, {title: 'F = a + b', payload: '5-1'}, {title: 'F = a\' + b\'', payload: '5-2'}]);
        break;
        case 5:
            checkCorrectness(say, playerSelection, 0);
            sendButton('How about an English scenario? The bulb should light up when the switch is clicked and the power is on.',
            [{title: 'bulb = switch + power', payload: '6-0'}, {title: 'bulb = switch\' + power', payload: '6-1'}, {title: 'bulb = switch * power', payload: '6-2'}]);
        break;
        case 6:
            checkCorrectness(say, playerSelection, 2);
            sendButton('Nemo Bot will be sad if you close out of the app or answer a question with an incorrect response.',
            [{title: 'sad = closed + correct\'', payload: '7-0'} , {title: 'sad = closed\' * correct', payload: '7-1'}, {title: 'sad = closed + correct', payload: '7-2'}]);
        break;
        case 7:
            checkCorrectness(say, playerSelection, 0);
    }
};

const checkCorrectness = (say, a, b) => {
    if (a === b) { say('Correct'); }
	else { say('Incorrect'); }
};

module.exports = {
	filename: 'helloworld',
	title: 'Logic Design Stage 2',
	introduction: [
		'You are now entering stage 2 of Logic Design.'
	],
	start: start,
	state: state
};
