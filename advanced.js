// THIS ONE

'use strict';

const start = (say, sendButton) => {
    let level = 0;
    // say("Choose Level: ").then(() => {
      sendButton('Choose Level: ', [{title: 'Beginner', payload: '1-0'}, {title: 'Intermediate', payload: '2-0'}, {title: 'Advanced', payload: '3-0'}]);
    // });
  }
  
const state = (payload, say, sendButton) => {

    const array = payload.split('-');
    const level = parseInt(array[0]);
    const state = parseInt(array[1]);

    // ADVANCED LEVEL --------------------------------------------------------------------
    if (level === 3){

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
                say(["Welcome to the final question!!👏 Here, you'll take the truth table and equation found in the previous two questions and select the corresponding circuit!",
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
                "CONGRATULATIONS!!!! You have finished the ADVANCED level!!! Hope you had fun!!🥳🎉"]);
                break;
            
            case 9:
                say("Thank you for playing! If this level was too difficult, you can go back to the beginner or intermediate levels. See you next time!👋");
                
        }

    }
}

  
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