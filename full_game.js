// THIS ONE

'use strict';

const start = (say, sendButton) => {
    let level = 0;
    // say("Choose Level: ").then(() => {
      sendButton('Choose Level: ', [{title: 'Beginner', payload: '1-0'}, {title: 'Intermediate', payload: '2-0'}, {title: 'Advanced', payload: '3-0'}]);
    // });
  }
  
const state = (payload, say, sendButton) => {

    let correctness;
    const array = payload.split('-');
    const level = parseInt(array[0]);
    const state = parseInt(array[1]);
    if (array.length === 3) {
      correctness = parseInt(array[2]);
    }

    // BEGINNER LEVEL --------------------------------------------------------------------
    if (level === 1) {
        switch (state) {
        case 0:
            say(['Welcome to the beginner level! Let\'s begin!', 'Digital circuits form the basis of computing! A combinational circuit is one whose output depends only on the present combination of circuit imput values.', {attachment: 'image', url: 'https://www.electronics-tutorials.ws/wp-content/uploads/2013/08/comb4.gif?fit=420%2C113'}]).then(() => {
	          sendButton('In the image above, which of the following determine the output?', [{title: 'A, B, X, Y', payload: '1-1-0'}, {title: 'A, B, and C', payload: '1-1-1'}, {title: 'X and Y', payload: '1-1-0'}, {title: 'Not enough information is given', payload: '1-1-0'}]);
            });
            break;
        case 1:
            if (correctness === 1) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-2'}]);
            });
          } else {
            say('Incorrect🙁. Make sure to only select the input values').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-0'}, {title: 'No', payload: '1-2'}]);
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
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-4'}]);
            });
          } else {
            say('Incorrect🙁').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-2'}, {title: 'No', payload: '1-4'}]);
            });
        }
        break;
	    case 4: 
	        say(['Switches can be combined to form more complex circuits. All of the possible input conditions and outputs of a circuit can be written elegantly in a truth table, consisting of one column per control input, and one column for the output.',
	        'Consider the truth table below:', 'A\t\t\tB\t\t\t|output\nTRUE\t\tFALSE\t\t|TRUE\nTRUE\t\tTRUE\t\t|FALSE\nFALSE\t\tTRUE\t\t|TRUE\nFALSE\t\tFALSE\t\t|FALSE']).then(() => {
	        sendButton('If A is TRUE and B is TRUE, what is the output of this circuit?', [{title: 'TRUE', payload: '1-5-0'}, {title: 'FALSE', payload: '1-5-1'}]);
	        });
	    break;
      case 5:
      if (correctness === 1) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-6'}]);
            });
          } else {
            say('Incorrect🙁').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-4'}, {title: 'No', payload: '1-6'}]);
            });
          }
          break;
	    case 6:
	        
	        say(['We can describe the conditions for the output being true by combining the values of the control inputs using the words AND, OR, and NOT.', 'A AND B is true if and only if both A and B are TRUE',
	        'A OR B is TRUE if either A or B are TRUE, and is FALSE only if both A and B are FALSE',
	        'NOT A is TRUE only if A is FALSE', 'These are called boolean operators.']).then(() => {
	        sendButton('Which operator makes an output TRUE if and only if A and B are TRUE?', [{title: 'AND', payload: '1-7-1'}, {title: 'OR', payload: '1-7-0'}, {title: 'NOT', payload: '1-7-0'}]);
	        });
	    break;
      case 7:
      if (correctness === 1) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-8'}]);
            });
          } else {
            say('Incorrect🙁').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-6'}, {title: 'No', payload: '1-8'}]);
            });
          }
          break;
	     case 8:
	        
	        sendButton('Which operator makes an output TRUE if either A or B are TRUE (non exclusive)?', [{title: 'AND', payload: '1-9-0'}, {title: 'OR', payload: '1-9-1'}, {title: 'NOT', payload: '1-9-0'}]);
        break;
      case 9:
      if (correctness === 1) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-10'}]);
            });
          } else {
            say('Incorrect🙁').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-8'}, {title: 'No', payload: '1-10'}]);
            });
          }
          break;
        case 10:
            
            sendButton('Which operator makes an output TRUE only if A is FALSE?',
            [{title: 'AND', payload: '1-11-0'}, {title: 'OR', payload: '1-11-0'}, {title: 'NOT', payload: '1-11-1'}]);
        break;
        case 11:
        if (correctness === 1) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-12'}]);
            });
          } else {
            say('Incorrect🙁').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-10'}, {title: 'No', payload: '1-12'}]);
            });
          }
          break;
        case 12:
            
	        say(['These Boolean operators can be combined to form Boolean expressions, using parentheses () to signify order of operation', 'Consider the following Boolean expression:',
	        'A AND (NOT B)',
	        'Complete the following rows of the truth table by filling in where the \'?\' is']).then(() => {
	        sendButton('A\t\t\tB\t\t\t|output\nTRUE\t\t?\t\t\t|TRUE', [{title: 'TRUE', payload: '1-13-0'}, {title: 'FALSE', payload: '1-13-1'}]);
	        });
        break;
        case 13:
        if (correctness === 1) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-14'}]);
            });
          } else {
            say('Incorrect🙁. Make sure to apply the order of operations and the AND operation correctly').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-12'}, {title: 'No', payload: '1-14'}]);
            });
          }
          break;
        case 14:
            sendButton('A\t\t\tB\t\t\t|output\n?\t\t\tFALSE\t\t|FALSE', [{title: 'TRUE', payload: '1-15-0'}, {title: 'FALSE', payload: '1-15-1'}]);
        break;
        case 15:
        if (correctness === 1) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-16'}]);
            });
          } else {
            say('Incorrect🙁. If the output is FALSE, yet (NOT B) is satisfied, what must A be?').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-14'}, {title: 'No', payload: '1-16'}]);
            });
          }
          break;
        case 16:
            
            sendButton('A\t\t\tB\t\t\t|output\nTRUE\t\tTRUE\t\t|?', [{title: 'TRUE', payload: '1-17-0'}, {title: 'FALSE', payload: '1-17-1'}]);
        break;
        case 17:
        if (correctness === 1) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '1-18'}]);
            });
          } else {
            say('Incorrect🙁').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '1-16'}, {title: 'No', payload: '1-18'}]);
            });
          }
          break;
        case 18:
            
            say(['You have now finished the tutorial stage and have begun learning the basics of Boolean algebra, the mathematical way in which we model circuits',
            'Move on to level 2 to try out questions to test your knowledge and master the basics of Boolean algebra!']).then(() => {
              sendButton('Move to another level or end game?', [{title: 'Level 1',payload: '1-0'}, {title: 'Level 2', payload: '2-0'}, {title: 'Level 3', payload: '3-0'}, {title: 'Exit', payload: '4-0'}]);
            });
            break;
    
    }
    }
    // INTERMEDIATE LEVEL --------------------------------------------------------------------
    if (level === 2) {
      switch (state) {
        // Q1 0-1
        case 0:
         say(['Welcome to level 2!', 'A Boolean expression is a sentence consisting of Boolean variables, constants, and operators.']).then(() => {
	      sendButton('Which of the following is a Boolean variable?', [{title: 'True', payload: '2-1-1'}, {title: 'a',    payload: '2-1-0'}, {title: 'AND', payload: '2-1-1'}]);
        });
        break;
        case 1:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-2'}]);
            });
          } else {
            say('Incorrect🙁. A boolean variable is used to store a value, either true or false, though not necessarily known at the time.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-0'}, {title: 'No', payload: '2-2'}])
            });
          }
        break;
        // Q2 2-3
        case 2:
          sendButton('Which of the following is a Boolean constant?', [{title: 'True', payload: '2-3-0'}, {title: 'a', payload: '2-3-1'}, {title: 'AND', payload: '2-3-1'}]);
        break;
        case 3:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-4'}]);
            });
          } else {
            say('Incorrect🙁. A boolean constant is one of two possible values: true or false.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-2'}, {title: 'No', payload: '2-4'}])
            });
          }
        break;
        // Q3 4-5
        case 4:
          sendButton('Which of the following is a Boolean operator?', [{title: 'True', payload: '2-5-1'}, {title: 'a', payload: '2-5-1'}, {title: 'AND', payload: '2-5-0'}]);
        break;
        case 5:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-6'}]);
            });
          } else {
            say('Incorrect🙁. A Boolean operator acts, or operates, on one or more variables and/or constants').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-4'}, {title: 'No', payload: '2-6'}])
            });
          }
        break;
        // Q4 6-7
        case 6:
          say(['Let’s try evaluating a Boolean expression!','If a = TRUE, b = FALSE, c = TRUE, d = TRUE, what is:']).then(() => {
	                sendButton('(a AND b) OR (c AND d)?', [{title: 'True', payload: '2-7-0'}, {title: 'False', payload: '2-7-1'}]);
	        });
        break;
        case 7:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-8'}]);
            });
          } else {
            say('Incorrect🙁. Keep in mind that you must evaluate what is in the parentheses first. Recall that AND is True if and only if both operands are True, and OR is True if any operands are True.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-6'}, {title: 'No', payload: '2-8'}])
            });
          }
        break;
        // Q5 8-9
        case 8:
          say(['Instead of typing out AND, OR, and NOT every time, we can represent them in a more compact way.',
	        'AND can be represented by *\nOR can be represented by +\nNOT can be represented by ’\nTRUE can be represented by 1\nFALSE can be represented by 0']).then(() => {
	            sendButton('So, our original expression, (a AND b) OR (c AND d),  can be rewritten as:', [{title: '(a * b) + (c * d)', payload: '2-9-0'}, {title: '(a + b) * (c + d)', payload: '2-9-1'}])
	        });
        break;
        case 9:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-10'}]);
            });
          } else {
            say('Incorrect🙁. Remember to replace AND with * and OR with +.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-8'}, {title: 'No', payload: '2-10'}])
            });
          }
        break;
        // Q6 10-11
        case 10:
          say('We can also convert English statements into Boolean expressions! This allows us to translate every day decisions and processes into logical, consistent mathematical expressions. Let’s try a few!'
            ).then(() => {
                sendButton('F is 1 only when a is 1 and b is 1.', [{title: 'F = a + b', payload: '2-11-1'}, {title: 'F = a * b', payload: '2-11-0'}, {title: 'F = a\' + b\'', payload: '2-11-1'}]);
            });
        break;
        case 11:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-12'}]);
            });
          } else {
            say('Incorrect🙁. This statement represents an AND operation.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-10'}, {title: 'No', payload: '2-12'}])
            });
          }
        break;
        // Q7 12-13
        case 12:
          sendButton('F is 1 only when a is 1 and b is 0.', [{title: 'F = a * b\'', payload: '2-13-0'}, {title: 'F = a + b', payload: '2-13-1'}, {title: 'F = a\' + b\'', payload: '2-13-1'}]);
        break;
        case 13:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-14'}]);
            });
          } else {
            say('Incorrect🙁. This is a bit harder! We want to flip the value of b and AND together a and b to produce the answer.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-12'}, {title: 'No', payload: '2-14'}])
            });
          }
        break;
        // Q8 14-15
        case 14:
          sendButton('How about an English scenario? The bulb should light up when the switch is clicked and the power is on.',
            [{title: 'bulb = switch + power', payload: '2-15-1'}, {title: 'bulb = switch\' + power', payload: '2-15-1'}, {title: 'bulb = switch * power', payload: '2-15-0'}]);
        break;
        case 15:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-16'}]);
            });
          } else {
            say('Incorrect🙁. The key word here is AND.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-14'}, {title: 'No', payload: '2-16'}])
            });
          }
        break;
        // Q9 16-17
        case 16:
          sendButton('Nemo Bot will be sad if you close out of the app or answer a question with an incorrect response.',
            [{title: 'sad = closed + correct\'', payload: '2-17-0'} , {title: 'sad = closed\' * correct', payload: '2-17-1'}, {title: 'sad = closed + correct', payload: '2-17-1'}]);
        break;
        case 17:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-18'}]);
            });
          } else {
            say('Incorrect🙁. Remember that Nemo Bot will be sad if the answer is INcorrect, not correct! Note the key word OR.').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-16'}, {title: 'No', payload: '2-18'}])
            });
          }
        break;
        // Q10 18-19
        case 18:
          say(['Boolean Algebra has certain properties that allow us to simplify expressions. These include:',
          {
	attachment: 'image',
	url: 'https://i.imgur.com/vIWVjmh.png'
}
          ,'Let\'s try to put these in practice!']).then(() => {
            sendButton('What is the correct simplification of a + a\'b? Note that a\'b is the same as a\' * b.', [{title: 'ab', payload: '2-19-1'}, {title: 'a + b', payload: '2-19-0'}, {title: 'a\'b', payload: '2-19-1'}]);
            });
        break;
        case 19:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-20'}]);
            });
          } else {
            say('Incorrect🙁. Here is the solution:\na + a\'b\n(a + a\') * (a + b)\n1 * (a + b)\na + b').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-18'}, {title: 'No', payload: '2-20'}])
            });
          }
        break;
        // Q11 20-21
        case 20:
          sendButton('What is the correct simplification of (a + b)(a + c)?', [{title: '1', payload: '2-21-1'}, {title: 'abc', payload: '2-21-1'}, {title: 'a + bc', payload: '2-21-0'}]);
        break;
        case 21:
          if (correctness === 0) {
            say('Correct!').then(() => {
              sendButton('Move on?', [{title: 'Yes', payload: '2-22'}]);
            });
          } else {
            say('Incorrect🙁. Here is the solution:\n(a + b)(a + c)\naa + ac + ab + bc\na + ac + ab + bc\na(1 + c +b) + bc\na(1) + bc\na + bc').then(() => {
              sendButton('Try again?', [{title: 'Yes', payload: '2-20'}, {title: 'No', payload: '2-22'}]);
            });
          }
        break;

        //MOVE TO ANOTHER LEVEL
        case 22:
            say(['Congratulations on completing level 2 of Logic Gate Extravaganza! You have now mastered the basics of boolean algebra!',
            'Move on to level 3 to put your knowledge into practice with some scenarios! Good luck!']).then(() => {
              sendButton('Move to another level or end game?', [{title: 'Level 1',payload: '1-0'}, {title: 'Level 2', payload: '2-0'}, {title: 'Level 3', payload: '3-0'}, {title: 'Exit', payload: '4-0'}]);
            });
            break;

    
    }
  }
    // ADVANCED LEVEL --------------------------------------------------------------------
    if (level === 3) {

        switch (state){
            // QUESTION 1 (0-2)
            case 0:
                // let correct = false;
                say(['Welcome to the advanced level!! You will be given a scenario and will translate that into an equation, translate the equation into a truth table, and finally convert that into a circuit of gates.',
                'Here is the scenario: You will get a good grade if you study enough and get enough sleep whether you have an easy grader or not. However, if you have an easy grader, you only need to do one or the other: study enough or get enough sleep.',
                'The three variables will be whether you studied enough (study), whether you got enough sleep (sleep), and whether you have a hard grader (hGrader).',
                'Option 1: study + sleep * hGrader\' + (study * sleep)\n\nOption 2: study * sleep + hGrader\' * (study + sleep)\n\nOption 3: study * hGrader\' + sleep * hGrader + study * sleep * hGrader\'\n\n']).then(() => {
                    sendButton('Which equation best represents this scenario?', [{title: 'Option 1', payload: '3-1'}, {title: 'Option 2', payload: '3-2'}, {title: 'Option 3', payload: '3-1'}]);
                });

                // if (correct){
                //     say("Correct!! Great job!");
                // }
                break;
                    
            case 1:
                say("Incorrect🙁 Remember + represents OR, * represents AND, ' represents NOT").then(() => {
                    sendButton('Would you like to try again?', [{title: 'Try again!', payload: '3-0'}, {title: 'See answer', payload: '3-2'}]);
                });
                break;

            case 2:
                say(["Nice work!!😆 The correct answer is study * sleep + hGrader’ * (study + sleep).",
                "The first part of the equation represents the fact that if you study and sleep, you will pass no matter what. The second part (to the right of the +) states that if you don't have a hard grader (hGrader'), you only need to study OR sleep to pass."]).then(() => {
                    sendButton('Ready for the next question?', [{title: "Yes!", payload: '3-3'}, {title: "End Game", payload: '3-9'}]); // END GAME NUMBER??
                });
                break;

            // QUESTION 2 (3-5)
            case 3:
                // correct = false;
                say(["Now, you'll translate this equation to a truth table!\nHere are the options. Select the correct truth table below.",
                
                // Three Options
                "Option 1:",
                {
                    attachment: 'image',
                    url: 'https://imagizer.imageshack.com/img924/2549/U1z5wa.png'
                },
                "Option 2:",
                {
                    attachment: 'image',
                    url: 'https://imagizer.imageshack.com/img922/792/NNREsk.png'
                },
                // Correct
                "Option 3:",
                {
                    attachment: 'image',
                    url: 'https://imagizer.imageshack.com/img923/3232/iUY5vw.png'
                },

                "Reminder: The Correct equation was: study * sleep + hGrader’ * (study + sleep)."]).then(() => {
                    sendButton('Which truth table corresponds to this equation?', [{title: "Option 1", payload: '3-4'}, {title: "Option 2", payload: '3-4'}, {title: "Option 3", payload: '3-5'}]);
                });
                
                // if (correct){
                //     say("Correct! Great job!");
                // }
                break;

            case 4: 
                say("Incorrect🙁").then(() => {
                    sendButton('Would you like to try again?', [{title: 'Try again!', payload: '3-3'}, {title: 'See answer', payload: '3-5'}]);
                });
                break;

            case 5:
                say(["Nice Work!!😆 Option 3 is the correct answer.",
                "Only one truth table exists per equation! Different equations can have the same truth table, but this means that they represent the same circuit and can be rearranged through boolean algebra to equal each other."]).then(() => {
                    sendButton('Ready for the next question?', [{title: "Yes!", payload: '3-6'}, {title: "End Game", payload: '3-9'}]); // END GAME NUMBER??
                });
                
                break;

            // QUESTION 3 (6-8)
            case 6:
                // correct = false;
                say(["Welcome to the final question of the scenario!!👏 Here, you'll take the truth table and equation found in the previous two questions and select the corresponding circuit!",
                "As a reminder, here was the correct equation: study * sleep + hGrader’ * (study + sleep).",
                "The correct truth table was: ",
                {
                    attachment: 'image',
                    url: 'https://imagizer.imageshack.com/img923/3232/iUY5vw.png'
                },
                "Here are the three options. Select the correct one below.",

                "Option 1:",
                {
                    attachment: 'image',
                    url: 'https://imagizer.imageshack.com/img923/3417/1G7yBx.png'
                },
                "Option 2:",
                {
                    attachment: 'image',
                    url: 'https://imagizer.imageshack.com/img924/8794/kCkpwf.png'
                },
                // Correct
                "Option 3:",
                {
                    attachment: 'image',
                    url: 'https://imagizer.imageshack.com/img922/6682/NCukTe.png'
                }]).then(() => {
                    sendButton('Which circuit corresponds to this equation/truth table?', [{title: "Option 1", payload: '3-7', correct: true}, {title: "Option 2", payload: '3-7'}, {title: "Option 3", payload: '3-8'}]);
                });
                // if (correct){
                //     say("Correct!!! :)");
                // }
                break;
            
            case 7:
                say("Incorrect🙁").then(() => {
                    sendButton('Would you like to try again?', [{title: 'Try again!', payload: '3-6'}, {title: 'See answer', payload: '3-8'}]);
                });
                break;

            case 8:
                say(["Nice work!!😆 Option 3 is the correct answer.",
                "The study and sleep input both go into an AND gate. The second AND gate contains one input from ORing both sleep and study and the other from NOTing hGrader. Finally, the results of these two AND gates are fed into an OR gate.",
                "CONGRATULATIONS!!!! You have finished the ADVANCED level!!! Hope you had fun!!🥳🎉",
                {
                    attachment: 'image',
                    url: 'https://imagizer.imageshack.com/img922/332/sbM0jh.gif'
                }]).then(() => {
              sendButton('Move to another level or end game?', [{title: 'Level 1',payload: '1-0'}, {title: 'Level 2', payload: '2-0'}, {title: 'Level 3', payload: '3-0'}, {title: 'Exit', payload: '4-0'}]); 
              });
              break;
        }

    }
    if (level === 4) {
      say('Thank you for playing! See you next time!👋')
    }
    
};

  
module.exports = {
    filename: 'helloworld',
    title: 'Logic Gate Extravaganza',
    introduction: [
        'Welcome to Logic Gate Extravaganza!! You will learn about Logic Gates and Circuits!👩🏼‍🏫👨🏼‍🏫',
        'When the game starts you will select a level and begin learning about electrical engineering gates!!',
        'Beginner level is a tutorial on logic gates, intermediate teaches about boolean algebra and incorporates a simple game, and advanced allows you to build an entire circuit from scratch given a scenario!'
    ],
    start: start,
    state: state
};
