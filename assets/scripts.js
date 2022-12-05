var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log('Here are the topics we learned through Prework:');
function listTopics() {
    for (var x = 0; x < randomTopic.length; x++) {
      console.log(randomTopic[x]);
    }
  }

for (var x = 0; x < randomTopic.length; x++) {
 console.log(randomTopic);
}


console.log('Which topic should we study first?');
function selectTopics() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
   }

/*
if (randomTopic === 'HTML') {
 console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
 console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
 console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
*/

listTopics()
selectTopics()