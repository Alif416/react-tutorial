
const App = () => {
const onClicked = () => {
  console.log('Button is clicked');
}


  return (

    <div> 
      <h1>My Name Is Alif</h1>
      <button onMouseMove={onClicked}>Click here</button>

    </div>
  )
}

export default App