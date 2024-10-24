/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const excuseElement = document.getElementById("excusa");
  excuseElement.textContent = excuseGenerator();
};

const whoToBlame = ["The dog", "My mom", "The cat", "The bird", "The teacher"];
const whatTheyDid = ["ate", "stole", "hid", "destroyed", "burned"];
const whatDoYouWantToAvoid = [
  "my homework",
  "my phone",
  "my shoes",
  "my book",
  "my video game",
];
const when = [
  "yesterday",
  "last night",
  "this morning",
  "last week",
  "last month",
];

function excuseGenerator() {
  const randomWho = Math.floor(Math.random() * whoToBlame.length);
  const randomWhat = Math.floor(Math.random() * whatTheyDid.length);
  const randomWhatToAvoid = Math.floor(
    Math.random() * whatDoYouWantToAvoid.length
  );
  const randomWhen = Math.floor(Math.random() * when.length);

  return (
    whoToBlame[randomWho] +
    " " +
    whatTheyDid[randomWhat] +
    " " +
    whatDoYouWantToAvoid[randomWhatToAvoid] +
    " " +
    when[randomWhen]
  );
}
console.log(excuseGenerator());
