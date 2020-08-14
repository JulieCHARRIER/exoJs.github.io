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
  message.innerHTML = createMessage(answer);
  count = count += 1
  counter.textContent = count;
});

Highcharts.chart('container', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Nb de réponses par couleur'
  },
  subtitle: {
      text: 'Source: imaginaire'
  },
  xAxis: {
      categories: [
          'bleu',
          'rouge',
          'jaune',
          'vert',
          'autre'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Nb de réponses'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:14px">{point.key}</span><table>',
      pointFormat: '<tr><td>{categories.name} </td>' +
          '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'Réponses',
      data: [37, 54, 17, 29, 67]
  }]
});