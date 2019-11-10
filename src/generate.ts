
function generate(people: Array<string>){

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

  function calculateMatches (list1: Array<string>, list2: Array<string>): Array<string> {
    function calcMatches(): Array<string> {
      const match1 = calculateMatch(list1)
      const match2 = calculateMatch(list2)
      return [match1, match2]
    }

    let matches = []
    let isValid = false
    do {
      
      matches = calcMatches()
      if(matches[0] !== matches[1]){
        isValid = true
      }
      else if( list1.length === 1 || list2.length === 1) {
        matches[0] = "invalid"
        matches[1] = "invalid"
        isValid = true
      }
    }
    while (!isValid)
 
    return matches
  }
  
  function encode (person: string): string {
    // return person
    return btoa(person)
  }

  function match (people: Array<string>) {
    const list1: Array<string> = people.slice(0)
    const list2: Array<string> = people.slice(0)
    const output: Array<string> = []
    for (const person of people){
      const group1 = removeCurrentPerson(person, list1)
      const group2 = removeCurrentPerson(person, list2)
      const matches: Array<string> = calculateMatches(group1, group2)
      list1.splice(list1.findIndex(p => p === matches[0]), 1)
      list2.splice(list2.findIndex(p => p === matches[1]), 1)
      
      //peopleMinusPerson.splice(persons.findIndex(el => el === match), 1) // remove match from list of candidates
      const codedMatch = encode(`${matches[0]} and ${matches[1]}`)
      output.push(`${person} gets ${codedMatch}`)
      
    }
    return output
  }
  
  return match(people)
}

export default generate


  
  