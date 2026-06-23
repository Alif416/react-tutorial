
const App = () => {
  const onSubmitted = (e) => {
    e.preventDefault()
    console.log('Form Submitted');
  }
  return (
    <div>
      <form onSubmit={(e) => {
        onSubmitted(e)
      }} >
        <input type="text" placeholder="Enter Your Name" />
        <button>Submit</button>
        
    </form>
    </div>
  )
}

export default App