const okBtn = document.querySelector('button')
const outputAnswer = document.getElementById('answer')

function getOptions() {
  let options = []

  let firstOption = document.getElementById('op-01').value
  let secondOption = document.getElementById('op-02').value
  let thirdOption = document.getElementById('op-03').value

  options.push(firstOption)
  options.push(secondOption)
  options.push(thirdOption)

  let randomItem = Math.floor(Math.random() * 3)

  let userAnswer = document.createElement('h3')
  let finalAnswer = document.createTextNode(options[randomItem])
  userAnswer.appendChild(finalAnswer)
  outputAnswer.appendChild(userAnswer)

  return;

}