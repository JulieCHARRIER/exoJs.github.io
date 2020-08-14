const createMessage = answer => {
  const answers = ["bleu", "rouge", "jaune", "vert"];
  const messages = ["Vous êtes un Serdaigle", "Vous êtes un Gryffondor", "Vous êtes un Poufsouffle", "Vous êtes un Serpentard"];
  let message = "";
  for (let i = 0 ; i < answers.length ; i++) {
    console.log(answers[i])
    if (answer.includes(answers[i])) {
      console.log(messages[i]);
      message =  messages[i];
    }
  }
  if (message === "") {
    message =  "Vous êtes un moldu";
  }
  return message;
}

const form = document.getElementById("my-form");
console.log(form);

const message = document.getElementById("ia-message");
const counter = document.getElementById("counter");
let count = 0;

form.addEventListener("submit", (event) => {
  const input = document.getElementById("user-answer");
  answer = input.value
  message.textContent = createMessage(answer);
  count = count += 1
  counter.textContent = count;
});
