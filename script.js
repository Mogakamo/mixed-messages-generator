function generateRandomNum(num) {
    return Math.floor(Math.random() * num)
}

const codeMessage = {
    codeInfo: ['success', 'error', 'not working', 'gross'],
    output: ['You can have a break', 'debug it please', 'dude just try again!!!', 'work on your code'],
}

let result = []

for(let prop in codeMessage) {
    let optionIdx = generateRandomNum(codeMessage[prop].length)


    switch (prop) {
      case 'error': 
        result.push(`Hey, "${codeMessage[prop][optionIdx]}".`)
        break;
      case 'success':
          result.push(`Hey, "${codeMessage[prop][optionIdx]}"`)
          break;
      case 'not working':
          result.push(`Hey, "${codeMessage[prop][optionIdx]}"`)
          break;
      case 'gross':
          result.push(`Hey, "${codeMessage[prop][optionIdx]}"`)
          break;
      default:
          result.push('Try again later')
    }
}


