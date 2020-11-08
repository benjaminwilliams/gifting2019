import { KEY } from "../utils/constants"
import { encrypt } from "../utils/encrypt"

interface Pairing {
  person: string,
  values: Array<string | undefined>
}

interface FormatedPairing { 
  person: string,
  values: string
}

function generate(people: Array<string>, doEncode: boolean): Array<FormatedPairing>{

  function removeCurrentPerson (person: string, people: Array<string>): Array<string> {
    const allPeople = people.slice(0) //shallow copy
    const personPosition = allPeople.findIndex(p => p === person)
    if(personPosition >= 0){
      allPeople.splice(personPosition, 1) 
    }
    return allPeople
  }

  function calculateMatch (people: Array<string>): string {
    
    const randomPosition = Math.floor(Math.random() * people.length)
    return people[randomPosition]
  }

  function calculateMatches (list1: Array<string>, list2: Array<string>): Array<string | undefined> {
    let matches
    
    function generate() {
      
      const match1 = calculateMatch(list1)
      const match2 = calculateMatch(list2)

      return [match1, match2]
    }
    
    do { matches = generate() } 
    while (matches[0] === matches[1] && (list1.length !== 1) )
   
    return matches
  }

  function encryptMatches (matches: Array<FormatedPairing>, key: string): Array<FormatedPairing> {
    
    let output: Array<FormatedPairing> = []
    matches.forEach(match => {
      output.push({person: match.person, values: encrypt(match.values, key)})
    })

    return output
  }

  function formatMatches (matches: Array<Pairing>): Array<FormatedPairing>  {

    const output: Array<FormatedPairing> = []

    matches.forEach(match => {
      output.push({ person: match.person, values: `${match.values[0]} and ${match.values[1]}` })
    })

    return output
  }

  function isValidResult (matches: Array<Pairing>): boolean {
    const hasInvalid = matches.find(match => {
      console.log('values', match.values[0], match.values[1])
      return match.values[0] === undefined || match.values[1] === undefined
    })
    console.log('hasInvalid', hasInvalid)
    return hasInvalid !== undefined
  }

  function match (people: Array<string>): Array<Pairing> {
    const list1: Array<string> = people.slice(0)
    const list2: Array<string> = people.slice(0)
    const output: Array<Pairing> = []
    for (const person of people){
      const group1 = removeCurrentPerson(person, list1)
      const group2 = removeCurrentPerson(person, list2)
      const matches: Array<string | undefined> = calculateMatches(group1, group2)
      list1.splice(list1.findIndex(p => p === matches[0]), 1)
      list2.splice(list2.findIndex(p => p === matches[1]), 1)
      output.push({person, values: matches})
    }
    return output
  }

  function getValidMatch (people: Array<string>): Array<FormatedPairing> {
    let matches
    let hasValidResult
  
    do {
      matches = match(people)
      hasValidResult = isValidResult(matches)
    }
    while (hasValidResult === true)
    
    return formatMatches(matches)
  }

  const formatedMatches = getValidMatch(people)

  return doEncode ? encryptMatches(formatedMatches, KEY) : formatedMatches 

}

export default generate


  
  