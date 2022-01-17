const userName = '';
const nounList = ['art', 'world', 'information', 'map']
const verbList = ['becoming', 'feeling', 'yelling' ]
const adjectiveList = ['agressive', 'adventurous', 'better', 'confused']

let noun = nounList[Math.floor(Math.random() * nounList.length)]
let verb = verbList[Math.floor(Math.random() * verbList.length)]
let adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)]

console.log(`My ${noun} is ${verb} ${adjective}.`)