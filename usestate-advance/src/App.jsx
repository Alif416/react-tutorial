import { useState } from "react"

const App = () => {
  const [obj, Setobj] = useState({ user: 'Alif', age: 24 })
  
  const ChangeName = () => {
    Setobj({ ...obj, user: 'Labib', age: 25 })
  }
  return (
    <div>
      <h1>My Name is {obj.user} and my age is {obj.age}</h1>
      <button onClick={ChangeName}>Change Info</button>
    


    </div>
  )
}

export default App