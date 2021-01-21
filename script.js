const start = (say, sendButton) => {
    let level = 0;
    // say("Choose Level: ").then(() => {
      sendButton('Choose Level: ', [{title: 'Beginner', level: 1}, {title: 'Intermediate', level: 2}, {title: 'Advanced', level: 3}]);
    // });
  }
  
const state = (level, say, sendButton) => {


    // ADVANCED LEVEL --------------------------------------------------------------------
    if (level == 3){
        let correct = false;
        say('Welcome to the advanced level!! You will be given a scenario and will translate that into an equation, translate the equation into a truth table, and finally convert that into a circuit of gates.');
        say('Here is the scenario: You will get a good grade if you study enough and get enough sleep whether you have an easy grader or not. However, if you have an easy grader, you only need to do one or the other: study enough or get enough sleep.');
        say('The three variables will be whether you studied enough (study), whether you got enough sleep (sleep), and whether you have a hard grader (hGrader).');
        
        while (!correct){
            sendButton('Which equation best represents this scenario?', [{title: "study + sleep * hGrader' + (study * sleep)", correct: false}, {title: "study * sleep + hGrader’ * (study + sleep)", correct: true}, {title: "study * sleep + hGrader * (study + sleep)", correct: false}, {title: "study * hGrader' + sleep * hGrader + study * sleep * hGrader'", correct: false}]);
            if (!correct){
                say('Incorrect, try again!');
            }
        }
        say("Correct!! The first part of the equation represents the fact that if you study and sleep, you will pass no matter what. The second part (to the right of the +) states that if you don't have a hard grader (hGrader'), you only need to study OR sleep to pass.");
        
        say("Now, you'll translate this equation to a truth table!");
        correct = false;
        while (!correct){
            endButton('Which equation best represents this scenario?', [{title: "study + sleep * hGrader' + (study * sleep)", correct: false}, {title: "study * sleep + hGrader’ * (study + sleep)", correct: true}, {title: "study * sleep + hGrader * (study + sleep)", correct: false}, {title: "study * hGrader' + sleep * hGrader + study * sleep * hGrader'", correct: false}]);
            if (!correct){
                say('Incorrect, try again!');
            }
        }
    }
}
  
  
  module.exports = {
      filename: 'logic_gate_extravaganza',
      title: 'Logic Gate Extravaganza',
      introduction: [
          'Learn about Logic Gates and Circuits',
          'When the game starts you will select a level and begin learning about electrical engineering gates',
          'Begginner level is a tutorial on logic gates, intermediate teaches about boolean algebra and incorporates a simple game, and advanced allows you to build an entire circuit from scratch given a scenario!'
      ],
      start: start,
      state: state
  };