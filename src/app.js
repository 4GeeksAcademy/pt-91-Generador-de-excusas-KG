document.addEventListener("DOMContentLoaded", function() {
  const excuseParagraph = document.getElementById("excusa");

  window.excuseGenerator = function() {
    const excuse = generateExcuse();
    excuseParagraph.innerHTML = excuse;
  };

  function generateExcuse() {
    const who = ["The dog", "My grandma", "His turtle", "My bird"];
    const action = ["ate", "peed", "crushed", "broke"];
    const what = ["my homework", "the keys", "the car", "my phone"];
    const when = ["before the class", "right on", "this morning", "last week"];

    const whoIndex = Math.floor(Math.random() * who.length);
    const actionIndex = Math.floor(Math.random() * action.length);
    const whatIndex = Math.floor(Math.random() * what.length);
    const whenIndex = Math.floor(Math.random() * when.length);
    console.log(
      who[whoIndex] +
        " " +
        action[actionIndex] +
        " " +
        what[whatIndex] +
        " " +
        when[whenIndex]
    );
    return (
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex]
    );
  }
});
