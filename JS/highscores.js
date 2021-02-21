const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = 
  highScores
  .map( score => {
  return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
  .join("");
  console.log(highScoresList);

//what map does is it takes an incoming array and allows you to convert each of those items to something new in a new array.  We're taking the score object and we're returning back a string version of an LI that has the stuff in it that we need.