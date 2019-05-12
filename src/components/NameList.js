import React from 'react'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  let persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Vardan',
      age: 45,
      skill: 'Node'
    },
    {
      id: 3,
      name: 'Gago',
      age: 44,
      skill: 'MongoDB'
    }]
  //let personList = persons.map(person => <h1>{person.id + ' ' + person.name + ' ' + person.age + ' ' + person.skill}</h1>)
  let nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

  return (
    <div>{nameList}</div>
  )
}
export default NameList
