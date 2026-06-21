import { useState } from "react"

const App = () => {
  const [num, setName] = useState(0)
  function onclicked() {
    if (num >= 10) return
    setName(num + 1)
    
  }
  return (
    <div>
      <h1>The Number is  { num}</h1>
      <button onClick={onclicked}>Increase The Number</button>
    </div>
  )
}

export default App