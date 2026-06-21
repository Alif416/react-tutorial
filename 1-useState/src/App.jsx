import { useState } from "react"
const App = () => {
  const [num, setNum] = useState(0)
  function increase() {
    setNum(num+1)
    
  }
  function decrease() {
    if (num > 0) {
      return setNum(num-1)
    }
    
  }
  return (

    <div>
      <h1 className="num">{ num}</h1>
      <div className="btn">
      <button className="btn1" onClick={increase}>Increase</button>
      <button className="btn2" onClick={decrease}>Decrease</button>
      </div>
      
      

    </div>
  )
}
export default App